import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2200); // Total duration of loading screen
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[999] bg-[#0B0F19] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
            >
                <div className="flex flex-col items-center">
                   <div className="text-5xl md:text-7xl font-bold text-white tracking-tighter flex items-center">
                        <span>Mohamad</span>
                        <span className="text-primary ml-2">Arif</span>
                        <motion.div 
                            className="w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full ml-2"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                   </div>
                   <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                        className="h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
                   />
                </div>
            </motion.div>

            {/* Ambient Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
                    animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                />
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"
                    animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 12 }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
