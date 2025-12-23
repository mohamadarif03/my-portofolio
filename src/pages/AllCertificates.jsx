import React from 'react';
import Reveal from '../components/Reveal';
import { certificatesData } from '../data';
import { Link } from 'react-router-dom';

const AllCertificates = () => {

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

                                    <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={cert.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border ${cert.btnBorder} ${cert.btnText} ${cert.btnHover} hover:text-white transition-all text-sm font-bold bg-transparent`}
                                        >
                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            View
                                        </a>
                                        <a
                                            href={cert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-sm font-medium"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">verified</span>
                                            Verify
                                        </a>
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
