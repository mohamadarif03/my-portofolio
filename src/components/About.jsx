import React from 'react';
import Reveal from './Reveal';

const timelineData = [
   {
      year: "2023 - 2024",
      title: "Web Developer Intern – PT Hummatech",
      description: "Worked as a Web Developer Intern, frequently using Laravel and JavaScript to develop and maintain dynamic, responsive web applications. Collaborated with the team to implement features, improve functionality, and ensure clean, maintainable code.",
      color: "bg-primary",
      shadow: "shadow-[0_0_10px_#8B5CF6]",
      borderHover: "hover:border-primary/30"
   },

   {
      year: "2024 - 2025",
      title: "Web Developer & Technical Mentor – PT Hummatech",
      description: "Worked as a Web Developer while mentoring interns and vocational high school students (SMK). Developed web applications, guided students in real-world projects, and introduced best practices in web development and teamwork.",
      color: "bg-secondary",
      shadow: "shadow-[0_0_10px_#06B6D4]",
      borderHover: "hover:border-secondary/30"
   },
   {
      year: "2025",
      title: "Web Developer – Jobnation.id",
      description: "Worked as a Web Developer at Jobnation.id, developing and maintaining web applications with a focus on performance, scalability, and user experience. Collaborated with cross-functional teams to deliver reliable and efficient digital solutions.",
      color: "bg-primary",
      shadow: "shadow-[0_0_10px_#8B5CF6]",
      borderHover: "hover:border-primary/30"
   },
   {
      year: "2025 - Present",
      title: "Information Systems – Brawijaya University",
      description: "Currently pursuing a Bachelor's degree in Information Systems at Universitas Brawijaya with a current GPA of 3.86. Actively learning Data Science and Machine Learning, focusing on applying data-driven approaches to web-based systems.",
      color: "bg-secondary",
      shadow: "shadow-[0_0_10px_#06B6D4]",
      borderHover: "hover:border-secondary/30"
   },

];

const About = () => {
   return (
      <section id="about" className="w-full max-w-5xl flex flex-col gap-12 py-10">

         {/* --- Bagian 1: Dual Expertise --- */}
         <div className="w-full">
            <Reveal>
               <div className="flex flex-col items-center mb-8 text-center">
                  <h2 className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
                  <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold glow-text">My Dual Expertise</h3>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
               {/* Card 1: Web Dev */}
               <Reveal width="100%">
                  <div className="group flex flex-1 flex-col gap-4 rounded-2xl border border-white/10 glassmorphism p-8 hover:border-primary/50 transition-colors h-full">
                     <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl">code</span>
                     </div>
                     <div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Web Development</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                           Building responsive, scalable web applications with modern technologies like React, Laravel, and Golang.
                        </p>
                     </div>
                  </div>
               </Reveal>

               {/* Card 2: Data Science */}
               <Reveal width="100%" delay={0.2}>
                  <div className="group flex flex-1 flex-col gap-4 rounded-2xl border border-white/10 glassmorphism p-8 hover:border-secondary/50 transition-colors h-full">
                     <div className="size-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl">model_training</span>
                     </div>
                     <div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-secondary transition-colors">Data Science & ML</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                           Transforming data into insights and building predictive models using Pandas, Scikit-learn, and TensorFlow.
                        </p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>

         {/* --- Bagian 2: Timeline Journey --- */}
         <div className="w-full pt-10">
            <Reveal>
               <div className="flex flex-col items-center mb-12 text-center">
                  <h3 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold glow-text">My Journey</h3>
               </div>
            </Reveal>

            <div className="relative w-full">
               {/* Garis Tengah */}
               <div className="absolute left-7 top-0 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>

               {/* Looping Data Timeline */}
               {timelineData.map((item, index) => (
                  <Reveal key={index} width="100%" delay={index * 0.1}>
                     <div className={`relative mb-8 flex w-full items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                        {/* Spacer untuk Desktop (Supaya zigzag) */}
                        <div className="hidden md:block md:w-5/12"></div>

                        {/* Titik Bulat di Tengah */}
                        <div className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-8 ring-slate-50 dark:ring-background-dark ${item.color} ${item.shadow}`}></div>

                        {/* Kotak Konten */}
                        <div className={`w-[calc(100%-4rem)] md:w-5/12 pl-4 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                           <div className={`rounded-xl border border-slate-200 dark:border-white/10 glassmorphism p-5 shadow-lg transition-all ${item.borderHover} hover:-translate-y-1`}>
                              <p className={`mb-1 text-xs font-bold uppercase tracking-wider ${item.color === 'bg-primary' ? 'text-primary' : 'text-secondary'}`}>
                                 {item.year}
                              </p>
                              <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {item.description}
                              </p>
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

export default About;