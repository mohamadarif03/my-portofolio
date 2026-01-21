import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from '../components/Reveal';

const About = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

  return (
    <div className="min-h-screen bg-transparent px-4 sm:px-6 py-20 md:py-32 overflow-hidden selection:bg-primary/30 selection:text-white">
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 origin-left z-50"
            style={{ scaleX }}
        />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.header 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants}>
              <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Web Developer & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">Machine Learning Enthusiast</span>
              </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I bridge the gap between robust web architecture and intelligent data insights. As a Machine Learning Enthusiast, I integrate smart algorithms into scalable web applications to create smarter digital products.
            </p>
          </motion.div>
        </motion.header>

        <section className="mb-32">
            <Reveal>
                 <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <span className="material-symbols-outlined text-[200px] text-white rotate-12">psychology</span>
                    </div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-primary/20"></span>
                                Beyond The Code
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                I believe that great software is born from a deep understanding of the problem space, not just elegant code. My approach combines <strong>analytical rigor</strong> with <strong>creative problem-solving</strong>.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                When I'm not debugging or training models, I'm exploring new tech trends, contributing to open-source, or refining my understanding of system design patterns.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "lightbulb", label: "Problem Solver", color: "text-yellow-400" },
                                { icon: "groups", label: "Team Player", color: "text-blue-400" },
                                { icon: "rocket_launch", label: "Fast Learner", color: "text-red-400" },
                                { icon: "favorite", label: "Passionate", color: "text-pink-400" }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-center transition-colors"
                                >
                                    <span className={`material-symbols-outlined text-3xl ${item.color}`}>{item.icon}</span>
                                    <span className="font-bold text-sm text-slate-300">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                 </div>
            </Reveal>
        </section>

        <section className="mb-32" id="expertise">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">Specialization</span>
              <h2 className="font-display text-3xl font-bold mt-4">My Dual Expertise</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="group glassmorphism p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">code</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 min-h-[72px]">
                    Building responsive, scalable web applications with modern technologies. Check out some of my works.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Laravel', 'Golang', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group glassmorphism p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-lg shadow-secondary/5">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-white">analytics</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Data Science & ML</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 min-h-[72px]">
                    Transforming raw data into actionable insights and building predictive models.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'Scikit-learn', 'TensorFlow', 'Python'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/5 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative" id="journey">
          <Reveal>
            <div className="text-center mb-24">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase bg-secondary/10 px-3 py-1 rounded-full">The Timeline</span>
              <h2 className="font-display text-3xl font-bold mt-4">My Professional Journey</h2>
            </div>
          </Reveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/50 hidden md:block">
                 <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary"
                 />
            </div>
            
            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
              <div className="order-2 md:order-1 md:text-right">
                <Reveal delay={0.1} width="100%">
                  <div className="glassmorphism p-6 rounded-2xl inline-block text-left w-full border border-white/10 hover:border-primary/30 transition-all duration-300 relative hover:shadow-xl hover:shadow-primary/5">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-primary/20 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">2023 - 2024</span>
                    <h4 className="font-bold text-lg mb-1 text-white">Web Developer Intern</h4>
                    <p className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">PT Hummatech</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Worked as a Web Developer Intern, frequently using Laravel and JavaScript to develop and maintain dynamic, responsive web applications.
                        <span className="block mt-2 italic text-primary/80 font-medium">✨ Key Impact: Optimized legacy code for 2x faster load times.</span>
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-primary z-10 hidden md:block group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></div>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
              <div className="flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-secondary z-10 hidden md:block group-hover:scale-150 group-hover:bg-secondary transition-all duration-300"></div>
              </div>
              <div>
                <Reveal delay={0.2} width="100%">
                  <div className="glassmorphism p-6 rounded-2xl w-full border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-secondary/20 text-secondary mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">2024 - 2025</span>
                    <h4 className="font-bold text-lg mb-1 text-white">Web Developer & Tech Mentor</h4>
                    <p className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">PT Hummatech</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Promoted to a dual role as Web Developer while mentoring interns and vocational high school students. Guided students in real-world projects.
                         <span className="block mt-2 italic text-secondary/80 font-medium">✨ Key Impact: Mentored 20+ interns to become job-ready developers.</span>
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
              <div className="order-2 md:order-1 md:text-right">
                <Reveal delay={0.1} width="100%">
                  <div className="glassmorphism p-6 rounded-2xl inline-block text-left w-full border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-primary/20 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">2025</span>
                    <h4 className="font-bold text-lg mb-1 text-white">Web Developer</h4>
                    <p className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">Jobnation.id</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Joined Jobnation.id to focus on high-performance web solutions. Collaborated with cross-functional teams to deliver reliable and efficient digital systems.
                        <span className="block mt-2 italic text-primary/80 font-medium">✨ Key Impact: Developed scalable architecture for high-traffic platform.</span>
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-primary z-10 hidden md:block group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></div>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center group">
              <div className="flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-secondary z-10 hidden md:block group-hover:scale-150 group-hover:bg-secondary transition-all duration-300"></div>
              </div>
              <div>
                <Reveal delay={0.2} width="100%">
                  <div className="glassmorphism p-6 rounded-2xl w-full border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-secondary/20 text-secondary mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">2025 - PRESENT</span>
                    <h4 className="font-bold text-lg mb-1 text-white">Information Systems</h4>
                    <p className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">Brawijaya University</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Currently pursuing a Bachelor's degree in Information Systems. Actively learning Data Science and Machine Learning.
                         <span className="block mt-2 italic text-secondary/80 font-medium">✨ Goal: Mastering AI-driven Web Systems.</span>
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </section>

        <section className="mt-12 md:mt-20 text-center pb-20">
           <Reveal>
            <div className="glassmorphism p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-white/10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-500"></div>
                
                <h2 className="font-display text-3xl font-bold mb-6 text-white min-h-[40px]">Ready to Collaborate?</h2>
                <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed text-lg">
                    Whether it's a complex web app or a machine learning project, I'm ready to bring my expertise to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center gap-2" 
                        href="mailto:mohamadarif5392@gmail.com"
                    >
                        Let's Work Together
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </motion.a>
                </div>
            </div>
           </Reveal>
        </section>

      </div>
    </div>
  );
};

export default About;
