import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubInsights from './components/GithubInsights';
import BackgroundEffects from './components/BackgroundEffects';
import DarkVeil from './components/DarkVeil';
import SplashCursor from './components/SplashCursor';

<SplashCursor />

function App() {
  return (
    <div className="bg-background-dark font-display text-white selection:bg-primary selection:text-white min-h-screen relative">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
          <DarkVeil />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.8)_100%)]"></div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <BackgroundEffects />
      </div>
      <SplashCursor />
      
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
        <div className="w-full max-w-7xl">
          <Navbar />
          
          <main className="w-full flex flex-col items-center gap-24 md:gap-32">
            <Hero />
            <About />
            <Projects />
            <GithubInsights />
            <Certificates />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;