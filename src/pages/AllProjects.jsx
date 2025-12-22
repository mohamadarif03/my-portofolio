import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { projectsData } from '../data';
import { Link } from 'react-router-dom';

const filters = ["All", "Web Developer", "Machine Learning"];

const AllProjects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projectsData.filter(project => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Web Developer") {
            return ["Backend", "Frontend", "Full-Stack"].includes(project.tag);
        }
        if (activeFilter === "Machine Learning") {
            return ["Data Science", "Machine Learning", "AI"].includes(project.tag);
        }
        return false;
    });

    return (
        <section className="w-full pt-32 px-4 mb-20">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                        <div className="flex flex-col items-start">
                            <h2 className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">My Portfolio</h2>
                            <h3 className="text-white text-3xl md:text-4xl font-bold glow-text">All Projects</h3>
                        </div>
                        <Link to="/#projects" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm">
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
                                    ? "bg-secondary/20 border-secondary/50 text-white glow-cyan"
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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="project-card group flex flex-col gap-4 rounded-2xl p-5 glassmorphism relative overflow-hidden h-full hover:border-primary/30 transition-all duration-300">

                                <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10`}></div>
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={project.title}
                                        src={project.image}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider">
                                            {project.tag}
                                        </span>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-4 space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-2 py-1 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={`/project/${project.id}`} className="w-full flex items-center justify-center gap-2 rounded-lg h-10 bg-white/5 hover:bg-primary hover:text-white border border-white/10 text-sm font-bold transition-all group-hover:border-primary/50">
                                            View Details
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </Link>
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

export default AllProjects;
