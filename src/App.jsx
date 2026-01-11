import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// import DarkVeil from './components/DarkVeil';

import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertificates from './pages/AllCertificates';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isLoading, setIsLoading] = useState(() => window.location.pathname === '/');

  return (
    <BrowserRouter>
      <div className="bg-background-dark font-display text-white selection:bg-primary selection:text-white min-h-screen relative">
        
        <AnimatePresence mode='wait'>
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern"></div>
          {/* <DarkVeil /> */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.8)_100%)]"></div>
        </div>

        {!isLoading && (
            <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
              <div className="w-full max-w-7xl">
                <Navbar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<AllProjects />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/certificates" element={<AllCertificates />} />
                </Routes>

                <Footer />
              </div>
            </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;