import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { certificatesData } from '../data';
import { Link } from 'react-router-dom';

const filters = ["All", "Cloud Provider", "Technology", "Issuing Body"];

const AllCertificates = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section className="w-full pt-32 px-4 mb-20">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                        <div className="flex flex-col items-start">
                            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
                                Qualifications
                            </h2>
                            <h3 className="text-white text-3xl md:text-4xl font-bold glow-text">
                                All Certifications
                            </h3>
                        </div>
                        <Link to="/#certificates" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm">
                            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Back to Home
                        </Link>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-all text-sm font-medium border ${activeFilter === filter
                                    ? "bg-primary/20 border-primary/50 text-white glow-violet"
                                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {filter}
                                {activeFilter !== filter && (
                                    <span className="material-symbols-outlined text-base">expand_more</span>
                                )}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="cert-card flex flex-col gap-4 p-5 rounded-2xl border border-white/10 glassmorphism transition-all duration-300 h-full hover:-translate-y-2 hover:border-primary/30">

                                <div className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-xl shadow-lg relative overflow-hidden group">
                                    <img
                                        src={cert.image}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={cert.title}
                                    />
                                    <div className={`absolute inset-0 ${cert.overlay} mix-blend-overlay`}></div>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">
                                    <p className="text-white text-lg font-bold leading-tight">
                                        {cert.title}
                                    </p>
                                    <p className="text-slate-400 text-sm">{cert.issuer}</p>

                                    <div className="mt-auto pt-2">
                                        <button
                                            className={`w-full text-center py-2 px-4 rounded-lg border ${cert.btnBorder} ${cert.btnText} ${cert.btnHover} hover:text-white transition-all text-sm font-bold`}
                                        >
                                            Verify Credential
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCertificates;
