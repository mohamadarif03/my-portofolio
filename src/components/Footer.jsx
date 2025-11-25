import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 text-center">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-slate-500 text-sm"
      >
        © {new Date().getFullYear()} Mohamad Arif. Crafted with Tailwind & Code.
      </motion.p>
    </footer>
  );
};

export default Footer;