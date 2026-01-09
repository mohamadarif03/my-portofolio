import React from 'react';

import Reveal from './Reveal';

const Contact = () => {
    return (
        <section className="w-full max-w-5xl" id="contact">
            <Reveal>
                <div className="flex flex-col items-center my-12 text-center">
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-bold leading-tight glow-text">Let's Build Something Together</h1>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Form Section */}
                <div className="lg:col-span-3">
                    <Reveal delay={0.2} width="100%">
                        <div className="glassmorphism rounded-2xl p-8 border border-slate-200 dark:border-white/5">
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Name</label>
                                        <input
                                            className="w-full rounded-lg bg-slate-50 dark:bg-[#151022]/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none transition-colors p-3"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Email</label>
                                        <input
                                            className="w-full rounded-lg bg-slate-50 dark:bg-[#151022]/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none transition-colors p-3"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Message</label>
                                    <textarea
                                        className="w-full rounded-lg bg-slate-50 dark:bg-[#151022]/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none transition-colors p-3 min-h-[150px]"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    className="w-full rounded-lg h-12 bg-gradient-to-r from-primary to-violet-600 text-white font-bold tracking-wide shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    <Reveal delay={0.4} width="100%">
                        <div className="glassmorphism rounded-2xl p-4 md:p-8 flex flex-col gap-6 h-full justify-center">
                            <a href="mailto:mohamadarif5392@gmail.com" className="flex items-center gap-3 group p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Email Me</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-medium group-hover:text-primary transition-colors break-all">mohamadarif5392@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/6285889561705" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform shrink-0">
                                    <span className="material-symbols-outlined">chat</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">WhatsApp</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-medium group-hover:text-green-500 transition-colors">+62 858-8956-1705</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/mohamad-arif-68402627a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                <div className="size-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shrink-0">
                                    <span className="material-symbols-outlined">code</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-medium group-hover:text-secondary transition-colors">Mohamad Arif</p>
                                </div>
                            </a>

                            <a href="https://instagram.com/mhmdarif346" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                <div className="size-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform shrink-0">
                                    <span className="material-symbols-outlined">photo_camera</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Instagram</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-medium group-hover:text-pink-500 transition-colors">@mhmdarif346</p>
                                </div>
                            </a>

                            <div className="mt-4 pt-6 border-t border-slate-200 dark:border-white/10 text-center">
                                <p className="text-slate-500 text-sm">Location: Malang, East Java</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;