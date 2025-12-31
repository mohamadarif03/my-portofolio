import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import GithubInsights from '../components/GithubInsights';

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
        <main className="w-full flex flex-col items-center gap-24 md:gap-32">
            <Hero />
            <About />
            <Projects />
            <Gallery />
            <GithubInsights />
            <Certificates />
            <Contact />
        </main>
    );
};

export default Home;
