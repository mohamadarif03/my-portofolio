import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const GithubInsights = () => {
  const username = "mohamadarif03";

  const [contributionData, setContributionData] = useState(null);
  const [languageData, setLanguageData] = useState([]);
  const [totalContrib, setTotalContrib] = useState(0);
  const [streak, setStreak] = useState(0);
  const [streakStart, setStreakStart] = useState("");
  const [streakEnd, setStreakEnd] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const contribJson = await contribRes.json();

        // Logic Fetch Repos (Public vs Private)
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        let repoJson = [];

        if (token) {
          const repoRes = await fetch(`https://api.github.com/user/repos?per_page=100&affiliation=owner,collaborator`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (!repoRes.ok) throw new Error("Gagal mengambil data repository dengan token");
          repoJson = await repoRes.json();
        } else {
          const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
          if (!repoRes.ok) throw new Error("Gagal mengambil data repository public");
          repoJson = await repoRes.json();
        }

        // Calculate Total Contributions (Last Year)
        const total = Object.values(contribJson.total).reduce((a, b) => a + b, 0);
        setTotalContrib(total);

        const flatContributions = contribJson.contributions.flat();
        const lastYearData = flatContributions.slice(-365);
        setContributionData(lastYearData);

        // Advanced Streak Calculation
        let currentStreak = 0;
        let startDate = null;
        let endDate = null;
        
        // Reverse iterate to find streak
        // Check if today or yesterday has contribution to start the streak
        const todayStr = new Date().toISOString().split('T')[0];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        let streakActive = false;
        let activeIdx = -1;

        // Find the starting point of the streak (today or yesterday)
        // We look at the very end of the flattened list
        for (let i = flatContributions.length - 1; i >= 0; i--) {
            const day = flatContributions[i];
            if (day.date === todayStr && day.count > 0) {
                streakActive = true;
                activeIdx = i;
                endDate = day.date;
                break;
            }
            if (day.date === yesterdayStr && day.count > 0) {
                // If today is 0 but yesterday is > 0, streak is still active
                streakActive = true;
                activeIdx = i;
                endDate = day.date;
                // Check if today actually exists in data and is 0? 
                // The loop starts from end, so if today is i, we skipped it.
                // But simplified: Just find the latest day with contribution. 
                // If it is NOT today OR yesterday, then streak is 0.
                break;
            }
            // If we went past yesterday, stop checking for "start"
            if (new Date(day.date) < yesterday) {
                break;
            }
        }

        if (streakActive) {
            currentStreak = 1;
            startDate = endDate; // initially
            // Count backwards from activeIdx
            for (let i = activeIdx - 1; i >= 0; i--) {
                if (flatContributions[i].count > 0) {
                    currentStreak++;
                    startDate = flatContributions[i].date;
                } else {
                    break;
                }
            }
        }

        setStreak(currentStreak);
        if (startDate && endDate) {
            const options = { month: 'short', day: 'numeric' };
            const startStr = new Date(startDate).toLocaleDateString('en-US', options);
            const endStr = new Date(endDate).toLocaleDateString('en-US', options);
            setStreakStart(startStr);
            setStreakEnd(endStr);
        } else {
            setStreakStart("-");
            setStreakEnd("-");
        }


        const langCounts = {};
        let totalRepos = 0;

        repoJson.forEach(repo => {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            totalRepos++;
          }
        });

        const languages = Object.keys(langCounts)
          .map(lang => ({
            name: lang,
            count: langCounts[lang],
            pct: Math.round((langCounts[lang] / totalRepos) * 100)
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 4);

        const colors = ["bg-primary", "bg-secondary", "bg-orange-500", "bg-blue-500"];
        const shadows = ["shadow-[0_0_10px_#8B5CF6]", "shadow-[0_0_10px_#06B6D4]", "shadow-none", "shadow-none"];

        const styledLanguages = languages.map((lang, i) => ({
          ...lang,
          color: colors[i] || "bg-slate-500",
          shadow: shadows[i] || "shadow-none"
        }));

        setLanguageData(styledLanguages);
        setLoading(false);

      } catch (error) {
        console.error("Gagal mengambil data GitHub:", error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const getHeatmapColor = (level) => {
    if (level === 0) return "bg-white/5";
    if (level === 1) return "bg-secondary/30";
    if (level === 2) return "bg-secondary/60";
    if (level >= 3) return "bg-secondary shadow-[0_0_5px_#06B6D4]";
    return "bg-white/5";
  };

  return (
    <section className="w-full pt-20" id="github">
      <Reveal>
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">
            Code Activity
          </h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold glow-text">
            MY GITHUB INSIGHTS
          </h3>
        </div>
      </Reveal>

      <div className="flex flex-col gap-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Reveal delay={0.1}>
            <div className="glassmorphism p-8 rounded-2xl flex flex-col items-center justify-center h-full border border-white/5 hover:border-primary/30 transition-all group min-h-[160px]">
              <span className="text-slate-400 text-sm font-medium mb-4">Total Contributions</span>
              {loading ? (
                <div className="w-20 h-10 bg-white/10 animate-pulse rounded-md"></div>
              ) : (
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-200 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform duration-300">
                  {totalContrib.toLocaleString()}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glassmorphism p-8 rounded-2xl flex flex-col items-center justify-center h-full border border-white/5 hover:border-secondary/30 transition-all group min-h-[160px]">
              <span className="text-slate-400 text-sm font-medium mb-2">Current Streak</span>
              {loading ? (
                <div className="w-20 h-10 bg-white/10 animate-pulse rounded-md"></div>
              ) : (
                <>
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-200 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform duration-300">
                    {streak} Days
                  </span>
                  {streak > 0 && (
                     <span className="text-xs text-slate-500 mt-2 font-mono">
                        {streakStart} - {streakEnd}
                     </span>
                  )}
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glassmorphism p-6 rounded-2xl h-full border border-white/5 flex flex-col justify-center min-h-[160px]">
              <span className="text-slate-400 text-sm font-medium mb-6 text-center">Most Used Languages</span>
              <div className="space-y-4">
                {loading ? (
                  [1, 2, 3].map(i => <div key={i} className="w-full h-4 bg-white/10 animate-pulse rounded-full"></div>)
                ) : (
                  languageData.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>{lang.name}</span>
                        <span>{lang.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.pct}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${lang.color} ${lang.shadow}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))
                )}
                {!loading && languageData.length === 0 && (
                  <p className="text-xs text-center text-slate-500">No public repos found.</p>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* GitHub Streak Stats Image */}
        <Reveal delay={0.4}>
            <div className="flex justify-center w-full">
                <img 
                    src={`https://streak-stats.demolab.com/?user=${username}&theme=dark&background=0f172a00&ring=8B5CF6&currStreakLabel=8B5CF6`} 
                    alt="GitHub Streak" 
                    className="w-full max-w-2xl hover:scale-[1.02] transition-transform duration-300 drop-shadow-2xl"
                />
            </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="glassmorphism p-6 md:p-8 rounded-2xl border border-white/5 overflow-hidden">
            <span className="text-slate-400 text-sm font-medium mb-6 block text-center">Annual Contribution Heatmap</span>

            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <div className="min-w-[600px] flex flex-wrap gap-1 justify-center opacity-80">
                {loading ? (
                  Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="size-3 rounded-sm bg-white/5 animate-pulse"></div>
                  ))
                ) : (
                  contributionData && contributionData.map((day, i) => (
                    <div
                      key={i}
                      className={`size-3 rounded-sm ${getHeatmapColor(day.level)} transition-all hover:scale-125 hover:z-10`}
                      title={`${day.date}: ${day.count} contributions`}
                    ></div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GithubInsights;