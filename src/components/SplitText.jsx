import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text = '',
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'power2.out',
  splitType = 'chars',
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
  textAlign = 'left',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView && containerRef.current) {
      const elements = containerRef.current.querySelectorAll(`.${splitType === 'chars' ? 'split-char' : splitType === 'words' ? 'split-word' : 'split-line'}`);
      
      gsap.fromTo(
        elements,
        { ...from, opacity: 0 }, // Ensure starting opacity is 0
        {
          ...to,
          opacity: 1, // Ensure ending opacity is 1
          duration,
          ease,
          stagger: 0.05,
          delay: delay / 1000,
          onComplete: onLetterAnimationComplete,
        }
      );
    }
  }, [inView, from, to, duration, ease, delay, onLetterAnimationComplete, splitType]);

  const renderContent = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, i) => (
        <span key={i} className="split-char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char}
        </span>
      ));
    } else if (splitType === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="split-word inline-block mr-2">
          {word}
        </span>
      ));
    }
    return <span className="split-line inline-block">{text}</span>;
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign, display: 'inline-block' }}
    >
      {renderContent()}
    </div>
  );
};

export default SplitText;
