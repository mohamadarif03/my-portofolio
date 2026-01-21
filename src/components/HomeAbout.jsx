import React from 'react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/photo.jpg';

const HomeAbout = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        
        <div className="relative order-2 md:order-1 flex justify-center">
             <Reveal delay={0.2}>
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                    <div className="absolute inset-0 border-2 border-white/10 rounded-2xl rotate-6"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl rotate-3 hover:rotate-0">
                         <img 
                            src={profilePhoto} 
                            alt="About Me" 
                            className="w-full h-full object-cover"
                         />
                    </div>
                </div>
             </Reveal>
        </div>

        
        <div className="order-1 md:order-2">
            <Reveal>
                <div className="flex items-center gap-2 mb-4">
                     <span className="h-[1px] w-10 bg-primary"></span>
                     <span className="text-primary text-sm font-bold uppercase tracking-widest">About Me</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Crafting Digital Experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Passion & Precision</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    I am a Web Developer and Machine Learning Enthusiast who thrives on turning complex problems into elegant, intelligent solutions. Bridging the gap between robust web architecture and data-driven insights, I build applications that are not only seamless but also smarter.
                </p>
                
                <Link to="/about">
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="group flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors"
                    >
                        Read More About Me
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </motion.button>
                </Link>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
