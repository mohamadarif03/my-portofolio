import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

import CV from '../assets/Mohamad Arif - CV.pdf';
import profilePhoto from '../assets/photo.jpg';

const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          <Reveal>
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Building Logic.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text-safe">
                Mining Data.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              I am a <strong>Web Developer</strong> passionate about <strong>Machine Learning</strong>. I build scalable backend systems (Golang, PHP, etc) and interactive frontends (React, Vue, etc), bridging the gap between application and intelligence.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <motion.a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold glow-violet hover:bg-primary/80 transition-all"
              >
                Curriculum Vitae
              </motion.a>
              <motion.a
                href="https://github.com/mohamadarif03"
                target="_blank"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-lg h-12 px-8 border border-slate-600 text-slate-300 text-base font-bold transition-all"
              >
                GitHub Profile
              </motion.a>
            </div>
          </Reveal>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <Reveal delay={0.2}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-violet-500 to-secondary blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 glassmorphism rounded-full border-2 border-white/10 p-3">
                <img
                  className="w-full h-full object-cover rounded-full border-2 border-primary/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  alt="Mohamad Arif Portrait"
                  src={profilePhoto}
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-[#1e1b2f] border border-primary/30 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-yellow-400">electric_bolt</span>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Focus</p>
                  <p className="text-sm font-bold text-white">Web & Machine Learning</p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;