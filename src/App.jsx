import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
// import DarkVeil from './components/DarkVeil';
import SplashCursor from './components/SplashCursor';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertificates from './pages/AllCertificates';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 dark:bg-background-dark font-display text-slate-900 dark:text-white selection:bg-primary selection:text-white min-h-screen relative transition-colors duration-300">

        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* <DarkVeil /> */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.8)_100%)]"></div>
        </div>

        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <BackgroundEffects />
        </div>
        <SplashCursor />

        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
          <div className="w-full max-w-7xl">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/certificates" element={<AllCertificates />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;