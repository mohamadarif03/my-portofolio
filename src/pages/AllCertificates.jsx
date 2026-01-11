import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { certificatesData } from '../data';
import { Link } from 'react-router-dom';

const AllCertificates = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const HeroSection = () => {
        return (
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Particles/Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors mb-8 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Back to Home
                        </Link>
                        
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                            Certifications<span className="text-primary">.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Evidence of my continuous learning journey. Verified credentials in Machine Learning, Web Development, and Cloud Computing.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    };

    const CertificateCard = ({ cert, index }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "center center"]
        });

        const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
        const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
        const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

        return (
            <motion.div 
                ref={ref}
                style={{ opacity, y, scale }}
                className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500 backdrop-blur-md"
            >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Content Side */}
                <div className="order-2 md:order-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/5">
                            {cert.issuer}
                        </span>
                        {/* Assuming a generated year for demo if not in data, or use a static one */}
                        <span className="text-slate-500 text-sm font-serif italic">
                            Verified Credential
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                    </h2>
                    
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Demonstrated proficiency in {cert.title}. Mastering core concepts and practical applications required for professional development.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={cert.pdf} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                        >
                            View Official Certificate
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </motion.a>
                        
                        {cert.verificationLink && (
                            <motion.a 
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href={cert.verificationLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-xl font-bold flex items-center gap-2 text-white border border-white/20 bg-transparent hover:bg-white/5 transition-colors"
                            >
                                Verify Credential
                                <span className="material-symbols-outlined text-[20px]">verified</span>
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Image Side */}
                <div className="order-1 md:order-2 perspective-1000">
                    <motion.div 
                        whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] transition-all duration-500 bg-slate-900"
                    >
                         {/* Browser Bar Decoration */}
                         <div className="h-8 bg-slate-900 flex items-center px-4 gap-2 border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary/30 selection:text-white">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 origin-left z-50"
                style={{ scaleX }}
            />

            <HeroSection />

            <main className="container mx-auto px-6 pb-32 space-y-20 md:space-y-32">
                {certificatesData.map((cert, index) => (
                    <CertificateCard key={cert.id || index} cert={cert} index={index} />
                ))}
            </main>

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
        </div>
    );
};

export default AllCertificates;
