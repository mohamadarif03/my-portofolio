import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data';
import Reveal from '../components/Reveal';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const [activeImage, setActiveImage] = useState("");
    const [showPdf, setShowPdf] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (project) {
            setActiveImage(project.image);
        }
    }, [project]);

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

    // Use gallery if available, otherwise just use the single image
    const galleryImages = project.gallery ? project.gallery : [project.image];

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
                    <div className="flex flex-col gap-4 mb-10">
                        {/* Main View Data */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-slate-900">
                            {showPdf && project.pdf ? (
                                <iframe
                                    src={project.pdf}
                                    className="w-full h-full"
                                    title="PDF Preview"
                                />
                            ) : (
                                <>
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay z-10 pointer-events-none`}></div>
                                    <img
                                        src={activeImage || project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                </>
                            )}
                        </div>

                        {/* Controls & Thumbnails */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
                                {galleryImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setActiveImage(img);
                                            setShowPdf(false);
                                        }}
                                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === img && !showPdf
                                                ? "border-primary shadow-lg shadow-primary/25 scale-105"
                                                : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                                            }`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>

                            {/* PDF Toggle */}
                            {project.pdf && (
                                <button
                                    onClick={() => setShowPdf(!showPdf)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${showPdf
                                            ? "bg-red-500/10 text-red-400 border border-red-500/50"
                                            : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    <span className="material-symbols-outlined">
                                        {showPdf ? "image" : "picture_as_pdf"}
                                    </span>
                                    {showPdf ? "Close PDF" : "Preview PDF"}
                                </button>
                            )}
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-8">
                        <Reveal delay={0.2}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white">
                                    {project.tag}
                                </span>
                                {project.issuer && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                                        {project.issuer}
                                    </span>
                                )}
                            </div>
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
