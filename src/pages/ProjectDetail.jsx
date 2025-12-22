import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data';
import Reveal from '../components/Reveal';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/projects" className="text-primary hover:underline">Back to Projects</Link>
            </div>
        );
    }

    const isNotebook = ["Data Science", "Machine Learning", "AI"].includes(project.tag);
    const linkLabel = isNotebook ? "View Notebook" : "Visit Website";

    return (
        <div className="min-h-screen pt-32 px-4 pb-20">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <Link to="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to Projects
                    </Link>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-white/10 group">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10`}></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-8">
                        <Reveal delay={0.2}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white mb-6">
                                {project.tag}
                            </span>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-300">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    <div className="md:col-span-1">
                        <Reveal delay={0.4}>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-32">
                                <h3 className="text-xl font-bold text-white mb-6">Project Info</h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <a
                                            href={project.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 rounded-xl h-12 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/25"
                                        >
                                            {linkLabel}
                                            <span className="material-symbols-outlined">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
