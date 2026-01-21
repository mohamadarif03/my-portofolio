import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero';
import KeyStats from '../components/KeyStats';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Certificates from '../components/Certificates';
import HomeAbout from '../components/HomeAbout';
import GithubInsights from '../components/GithubInsights';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <main className="w-full flex flex-col items-center gap-20 md:gap-32 pb-20 relative selection:bg-primary/30 selection:text-white">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 origin-left z-50"
                style={{ scaleX }}
            />
            
            <Hero />
            <KeyStats />
            <GithubInsights />
            <Projects />
            <Gallery />
            <Certificates />
            <HomeAbout />
            <Contact />
        </main>
    );
};

export default Home;
