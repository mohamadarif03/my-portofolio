import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, width = "100%" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {

      threshold: 0.1,

      rootMargin: "0px 0px -50px 0px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: `${delay}s` }}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-10'
        }
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;