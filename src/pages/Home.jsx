import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import KeyStats from '../components/KeyStats';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Certificates from '../components/Certificates';
import HomeAbout from '../components/HomeAbout';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();

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
        <main className="w-full flex flex-col items-center gap-20 md:gap-32 pb-20">
            <Hero />
            <KeyStats />
            <Projects />
            <Gallery />
            <Certificates />
            <HomeAbout />
            <Contact />
        </main>
    );
};

export default Home;
