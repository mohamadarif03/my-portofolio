import React from 'react';
import Reveal from './Reveal';
import { projectsData } from '../data';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="w-full pt-20" id="projects">
      <Reveal>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">My Portfolio</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold glow-text">Selected Projects</h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.slice(0, 3).map((project, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <div className="project-card group flex flex-col gap-4 rounded-2xl p-5 glassmorphism relative overflow-hidden h-full hover:-translate-y-2 transition-transform duration-300">

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
                  {project.issuer && (
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                      {project.issuer}
                    </p>
                  )}
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

      <Reveal delay={0.4}>
        <div className="w-full flex justify-center mt-12">
          <Link to="/projects" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/30 bg-secondary/10 hover:bg-secondary/20 hover:border-secondary/60 transition-all text-white font-medium text-sm">
            View All Project
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;