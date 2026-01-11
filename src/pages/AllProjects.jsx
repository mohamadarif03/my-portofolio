import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data';
import { Link } from 'react-router-dom';

const filters = ["All", "Web Developer", "Machine Learning"];

const AllProjects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeProjectId, setActiveProjectId] = useState(null);

    const filteredProjects = projectsData.filter(project => {
        if (project.tag === "Certificate") return false;
        if (activeFilter === "All") return true;
        if (activeFilter === "Web Developer") {
            return ["Backend", "Frontend", "Full-Stack", "Website"].includes(project.tag);
        }
        if (activeFilter === "Machine Learning") {
            return ["Data Science", "Machine Learning", "AI"].includes(project.tag);
        }
        return false;
    });

    // Reset active project when filter changes
    useEffect(() => {
        if (filteredProjects.length > 0) {
            setActiveProjectId(filteredProjects[0].id);
        } else {
            setActiveProjectId(null);
        }
    }, [activeFilter]);


    const handleMouseEnter = (id) => {
        setHoveredProject(id);
        // Small delay to prevent jittery transitions
        setTimeout(() => {
            setActiveProjectId(id);
        }, 50);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="w-full pt-32 px-4 mb-20 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                             <span className="w-8 h-[2px] bg-primary"></span>
                             My Portfolio
                        </h2>
                        <h3 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-4">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Works</span>
                        </h3>
                        <p className="text-slate-400 max-w-lg text-lg">
                            Hover over any project to see it in detail.
                        </p>
                    </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                     >
                        <Link to="/#projects" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm">
                            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Back to Home
                        </Link>
                    </motion.div>
                </div>

                <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start border-b border-white/10 pb-6">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === filter
                                ? "text-white"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {filter}
                            {activeFilter === filter && (
                                <motion.div 
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => {
                            const isActive = activeProjectId === project.id;
                            return (
                                <motion.div
                                    layout
                                    key={project.id}
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ 
                                        opacity: 1, 
                                        scale: 1,
                                        filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.7) saturate(0.8)',
                                    }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ 
                                        layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                        filter: { duration: 0.3 }
                                    }}
                                    className={`group relative rounded-3xl overflow-hidden bg-[#121212] border border-white/5 cursor-pointer
                                        ${isActive ? 'md:col-span-2 border-primary/50 shadow-2xl shadow-primary/10 z-10' : 'md:col-span-1 border-white/5 hover:border-white/20 z-0'}
                                    `}
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                         <div className={`absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-10 transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-90'}`}></div>
                                        <motion.img
                                            layoutId={`img-${project.id}`}
                                            className="w-full h-full object-cover"
                                            alt={project.title}
                                            src={project.image}
                                            animate={{ scale: isActive ? 1.05 : 1 }}
                                            transition={{ duration: 0.7 }}
                                        />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
                                        <motion.div 
                                            layout
                                            className="flex flex-col items-start gap-4"
                                        >
                                            {isActive && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="flex flex-wrap gap-2"
                                                >
                                                    {project.tech.slice(0, 3).map((t, i) => (
                                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </motion.div>
                                            )}
                                            
                                            <motion.h3 
                                                layout="position"
                                                className={`font-bold text-white leading-tight ${isActive ? 'text-3xl md:text-5xl mb-2' : 'text-xl md:text-2xl'}`}
                                            >
                                                {project.title}
                                            </motion.h3>
                                            
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <p className="text-slate-300 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
                                                        {project.description}
                                                    </p>

                                                    <Link 
                                                        to={`/project/${project.id}`} 
                                                        className="inline-flex items-center gap-3 bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
                                                    >
                                                        View Case Study
                                                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                     <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <span className="material-symbols-outlined text-3xl text-slate-500">search_off</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
                        <p className="text-slate-400">Try adjusting your filters.</p>
                     </div>
                )}
            </div>
        </section>
    );
};

export default AllProjects;
