import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const stats = [
  { icon: "code", label: "Clean Code", desc: "Modular, maintainable, and readable architecture." },
  { icon: "devices", label: "Responsive", desc: "Flawless experiences across all devices and screen sizes." },
  { icon: "rocket_launch", label: "High Performance", desc: "Optimized for speed, SEO, and smooth interactions." },
  { icon: "palette", label: "Modern UI/UX", desc: "Visually stunning designs with intuitive usability." },
];

const KeyStats = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{stat.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default KeyStats;
