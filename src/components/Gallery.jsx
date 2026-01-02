import React, { useState } from 'react';
import Reveal from './Reveal';
import { galleryData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section className="w-full pt-20" id="gallery">
            <Reveal>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Moments</h2>
                    <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold glow-text">Gallery</h3>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.map((item, index) => (
                    <Reveal key={item.id} delay={index * 0.1}>
                        <div 
                            className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/30 border border-white/5 hover:border-primary/50 transition-all duration-300 transform hover:scale-[1.02]"
                            onClick={() => setSelectedItem(item)}
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-primary text-xs font-semibold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    View Detail
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedItem(null)}
                        />
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                            animate={{ opacity: 1, scale: 1, y: 0 }} 
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#1e2330] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button 
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors"
                                onClick={() => setSelectedItem(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="w-full md:w-1/2 bg-black/20 self-center">
                                <div className="w-full aspect-video">
                                    <img 
                                        src={selectedItem.image} 
                                        alt={selectedItem.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
                                <h3 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h3>
                                <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {selectedItem.detail || "No details available."}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
