import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGo, SiPhp } from 'react-icons/si';

import CV from '../assets/Mohamad Arif - CV.pdf';
import profilePhoto from '../assets/photo.jpg';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGo />, title: "Golang", href: "https://go.dev" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
];

const Typewriter = ({ texts, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        const currentString = texts[textIndex];
        
        if (isDeleting) {
            setCurrentText(prev => prev.slice(0, -1));
            if (currentText === '') {
                setIsDeleting(false);
                setTextIndex(prev => (prev + 1) % texts.length);
                setCurrentIndex(0);
            }
        } else {
            setCurrentText(currentString.slice(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
            if (currentIndex === currentString.length) {
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
                return;
            }
        }
      }, isDeleting ? 50 : 100); // Typing speed vs deleting speed
  
      return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, texts, textIndex, currentText]);
  
    return <span>{currentText}</span>;
};

const Hero = () => {
    // Parallax & Mouse Move Effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="w-full py-20 md:py-32 relative perspective-1000" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1 relative z-10">
            <Reveal>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="h-0.5 w-8 bg-primary"></span>
                    <span className="text-secondary font-medium tracking-widest text-sm uppercase">Welcome to my world</span>
                </div>
            </Reveal>

          <Reveal>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-2">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                Mohamad Arif
              </span>
            </h1>
            <div className="h-8 md:h-12 text-2xl md:text-4xl font-bold text-slate-400 mt-2">
                <span className="mr-2">I am a</span>
                <span className="text-primary">
                    <Typewriter texts={["Web Developer", "ML Enthusiast"]} delay={1} />
                </span>
                <span className="animate-blink">|</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-4">
              I build scalable backend systems and interactive frontends, bridging the gap between <strong className="text-white">robust logic</strong> and <strong className="text-white">creative design</strong>.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <motion.a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">download</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.a>
              
              <motion.a
                href="https://github.com/mohamadarif03"
                target="_blank"
                whileHover={{ scale: 1.05, borderColor: "#8B5CF6", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-xl h-12 px-8 border border-slate-600 text-slate-300 text-base font-bold transition-all relative overflow-hidden group"
              >
                 <span className="relative z-10 flex items-center gap-2">
                    GitHub Profile
                    <span className="material-symbols-outlined text-lg group-hover:rotate-45 transition-transform">arrow_outward</span>
                </span>
              </motion.a>
            </div>
          </Reveal>
        </div>

        <motion.div 
            className="relative flex justify-center items-center order-1 md:order-2"
            style={{ y: y2, x: mousePosition.x * -1, y: mousePosition.y * -1 }}
        >
          <Reveal delay={0.2}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 group perspective-1000">
              
              {/* Floating Elements Background */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-2xl backdrop-blur-md border border-white/10 z-0"
              />
               <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-primary/20 rounded-full backdrop-blur-md border border-white/10 z-0"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-violet-500 to-secondary blur-3xl opacity-50 animate-pulse-slow"></div>
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="absolute inset-0 glassmorphism rounded-full border-2 border-white/10 p-3 transform-style-3d transition-all duration-500"
                  >
                    <img
                      className="w-full h-full object-cover rounded-full border-2 border-primary/50 shadow-2xl transition-transform duration-500"
                      alt="Mohamad Arif Portrait"
                      src={profilePhoto}
                    />
                  </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-[#1e1b2f]/90 backdrop-blur-md border border-primary/30 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <span className="material-symbols-outlined text-yellow-400">electric_bolt</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Fast & Precise</p>
                  <p className="text-sm font-bold text-white">Web & ML Dev</p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="mt-20 md:mt-32 w-full"
      >
        <Reveal delay={0.6}>
          <p className="text-center text-slate-500 font-medium mb-8 text-sm uppercase tracking-widest">
            Powering Next-Gen Apps With
          </p>
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={5}
            scaleOnHover
            fadeOut
            ariaLabel="My Tech Stack"
          />
        </Reveal>
      </motion.div>
    </section>
  );
};

export default Hero;