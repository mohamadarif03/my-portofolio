import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../data';
import { Link } from 'react-router-dom';

const Projects = () => {
    const targetRef = useRef(null);
    // Saya sedikit menaikkan persentase scroll karena start-nya sekarang lebih ke kanan (masuk container)
    // Kamu mungkin perlu menyesuaikan angka ini lagi (-50% atau -60%) agar card terakhir terlihat penuh
    const [endValue, setEndValue] = useState("-55%"); 

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setEndValue("-85%"); 
            } else if (window.innerWidth < 1024) {
                setEndValue("-70%"); 
            } else {
                setEndValue("-65%"); 
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", endValue]);

    return (
        <section ref={targetRef} className="relative h-[300vh]" id="projects">
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center w-full overflow-hidden">
                
                {/* PERUBAHAN UTAMA DI SINI:
                   Saya membungkus Header dan Motion Div dalam satu container yang sama.
                   Ini menjamin 'Get Skill' selalu sejajar dengan 'My Project'.
                */}
                <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl w-full">
                    
                    {/* Header Section */}
                    <div className="flex flex-col mb-8 md:mb-12">
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">My Project</h2>
                        <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold glow-text">Selected Projects</h3>
                    </div>

                    {/* Cards Slider */}
                    <motion.div
                        style={{ x }}
                        className="flex gap-6 w-max"
                    >
                        {projectsData.map((project, index) => {
                            const MotionLink = motion(Link);
                            return (
                                <MotionLink
                                    to={`/project/${project.id}`}
                                    key={index}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    className="group relative rounded-2xl overflow-hidden w-[280px] md:w-[500px] aspect-video flex-shrink-0 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                                >
                                    {/* Image Background */}
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={project.title}
                                        src={project.image}
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-1 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            {project.tag}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm line-clamp-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                            {project.description}
                                        </p>
                                    </div>
                                </MotionLink>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;