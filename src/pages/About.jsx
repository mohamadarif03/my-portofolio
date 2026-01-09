import React from 'react';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <div className="min-h-screen bg-transparent px-6 py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-24 md:mb-32">
          
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Crafting <span className="text-primary">Digital Solutions</span> <br/>
                <span className="text-slate-400">Through Data & Code</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I'm a passionate developer bridging the gap between robust web architecture and intelligent data insights. With a dual focus on engineering and analytics, I build products that are as smart as they are fast.
            </p>
          </Reveal>
        </header>

        {/* Expertise Section */}
        <section className="mb-32" id="expertise">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">Specialization</span>
              <h2 className="font-display text-3xl font-bold mt-4">My Dual Expertise</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="group glassmorphism p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">code</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Building responsive, scalable web applications with modern technologies. I specialize in crafting high-performance user interfaces and robust backend architectures.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Laravel', 'Golang', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 border border-primary/20 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group glassmorphism p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-white">analytics</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Data Science & ML</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Transforming raw data into actionable insights and building predictive models. I leverage machine learning to solve complex problems and drive decision-making.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'Scikit-learn', 'TensorFlow', 'Python'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/5 border border-secondary/20 text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Journey Section */}
        <section className="relative" id="journey">
          <Reveal>
            <div className="text-center mb-24">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase bg-secondary/10 px-3 py-1 rounded-full">The Timeline</span>
              <h2 className="font-display text-3xl font-bold mt-4">My Professional Journey</h2>
            </div>
          </Reveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block opacity-30"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center">
              <div className="order-2 md:order-1 md:text-right">
                <Reveal delay={0.1}>
                  <div className="glassmorphism p-6 rounded-2xl inline-block text-left w-full hover:scale-[1.02] transition-transform border border-white/10">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-primary/20 text-primary mb-3">2023 - 2024</span>
                    <h4 className="font-bold text-lg mb-2">Web Developer Intern — PT Hummatech</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Worked as a Web Developer Intern, frequently using Laravel and JavaScript to develop and maintain dynamic, responsive web applications.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 hidden md:block shadow-[0_0_20px_rgba(124,58,237,0.5)]"></div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center">
              <div className="flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20 z-10 hidden md:block shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
              </div>
              <div>
                <Reveal delay={0.2}>
                  <div className="glassmorphism p-6 rounded-2xl hover:scale-[1.02] transition-transform border border-white/10">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-secondary/20 text-secondary mb-3">2024 - 2025</span>
                    <h4 className="font-bold text-lg mb-2">Web Developer & Tech Mentor — PT Hummatech</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Promoted to a dual role as Web Developer while mentoring interns and vocational high school students. Guided students in real-world projects.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center">
              <div className="order-2 md:order-1 md:text-right">
                <Reveal delay={0.1}>
                  <div className="glassmorphism p-6 rounded-2xl inline-block text-left w-full hover:scale-[1.02] transition-transform border border-white/10">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-primary/20 text-primary mb-3">2025</span>
                    <h4 className="font-bold text-lg mb-2">Web Developer — Jobnation.id</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Joined Jobnation.id to focus on high-performance web solutions. Collaborated with cross-functional teams to deliver reliable and efficient digital systems.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 hidden md:block shadow-[0_0_20px_rgba(124,58,237,0.5)]"></div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative grid md:grid-cols-2 gap-8 mb-20 items-center">
              <div className="flex items-center justify-center relative">
                 <div className="w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20 z-10 hidden md:block shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
              </div>
              <div>
                <Reveal delay={0.2}>
                  <div className="glassmorphism p-6 rounded-2xl hover:scale-[1.02] transition-transform border border-white/10">
                    <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold bg-secondary/20 text-secondary mb-3">2025 - PRESENT</span>
                    <h4 className="font-bold text-lg mb-2">Information Systems — Brawijaya University</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Currently pursuing a Bachelor's degree in Information Systems. Actively learning Data Science and Machine Learning.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
           <Reveal>
            <div className="glassmorphism p-12 rounded-3xl relative overflow-hidden group border border-white/10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <h2 className="font-display text-3xl font-bold mb-6">Let's build something extraordinary</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
                    Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <a className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center hover:scale-105 active:scale-95" href="mailto:hello@example.com">
                        Contact Me
                        <span className="material-symbols-outlined ml-2">mail</span>
                    </a>
                </div>
            </div>
           </Reveal>
        </section>

      </div>
    </div>
  );
};

export default About;
