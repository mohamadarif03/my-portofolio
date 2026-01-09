import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 text-center">
      <p 
        className="text-slate-500 text-sm"
      >
        © {new Date().getFullYear()} Mohamad Arif. Crafted with Tailwind & Code.
      </p>
    </footer>
  );
};

export default Footer;