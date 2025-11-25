import React, { useState } from 'react';
import Reveal from './Reveal'; 

const certificatesData = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services | Dec 2023",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop",
    color: "bg-primary",
    overlay: "bg-primary/20",
    btnBorder: "border-primary/50",
    btnText: "text-primary",
    btnHover: "hover:bg-primary"
  },
  {
    title: "Google Professional ML Engineer",
    issuer: "Google Cloud | Jun 2023",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    color: "bg-secondary",
    overlay: "bg-secondary/20",
    btnBorder: "border-secondary/50",
    btnText: "text-secondary",
    btnHover: "hover:bg-secondary"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "DeepLearning.AI | Jan 2023",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    color: "bg-orange-500",
    overlay: "bg-orange-500/20",
    btnBorder: "border-orange-500/50",
    btnText: "text-orange-500",
    btnHover: "hover:bg-orange-500"
  }
];

const filters = ["All", "Cloud Provider", "Technology", "Issuing Body"];

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="w-full pt-20" id="certificates">
      
      <Reveal>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
            Qualifications
          </h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold glow-text">
            Certifications
          </h3>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-all text-sm font-medium border ${
                activeFilter === filter
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

      <Reveal delay={0.4}>
        <div className="mt-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl glassmorphism p-6 border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <div className="w-full md:w-1/3 h-48 bg-center bg-no-repeat bg-cover rounded-xl shadow-lg relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Neural Network"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
            </div>
            
            <div className="flex flex-col justify-center gap-4 flex-1">
              <h3 className="text-white text-2xl font-bold leading-tight glow-text">
                Skills Validated
              </h3>
              <p className="text-slate-300 text-base font-normal leading-relaxed">
                A summary of key skills validated across the collection of certifications, demonstrating deep expertise in modern cloud and data technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS & GCP", "TensorFlow", "Kubernetes", "NLP", "ML Ops"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-800 text-secondary text-sm font-bold border border-secondary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="w-full flex justify-center mt-12">
          <a href="#" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/30 bg-secondary/10 hover:bg-secondary/20 hover:border-secondary/60 transition-all text-white font-medium text-sm">
            View All Certifications
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Certificates;