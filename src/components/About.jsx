import React from 'react';
import Reveal from './Reveal';

const About = () => {
   return (
      <section id="about" className="w-full max-w-5xl flex flex-col gap-12 py-10">


         <div className="w-full">
            <Reveal>
               <div className="flex flex-col items-center mb-8 text-center">
                  <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
                  <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold glow-text">My Dual Expertise</h3>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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

      </section>
   );
};

export default About;