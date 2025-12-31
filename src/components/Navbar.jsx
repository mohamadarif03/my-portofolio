import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Certifications', href: '/#certificates' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'projects', 'gallery', 'certificates', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
            setActiveSection(sectionId);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 mx-auto w-[90%] md:w-full max-w-7xl z-50 rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? "glassmorphism px-6 py-4" 
          : "bg-transparent px-6 py-4"
      }`}
    >
      <div className="flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary glow-violet">
             <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-wider">Mohamad<span className="text-primary">Arif</span></h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-6">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              );
            })}
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <a href="#contact">
            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary/90 text-white text-sm font-bold hover:bg-primary transition-all glow-violet hover:scale-105 active:scale-95 shadow-lg">
              Get In Touch
            </button>
          </a>
        </div>

      </div>
    </motion.header>
  );
};

export default Navbar;