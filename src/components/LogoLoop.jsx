import React, { useEffect, useRef, useState } from 'react';

const LogoLoop = ({
  logos = [],
  speed = 50,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = 'transparent',
  ariaLabel = "Logo Loop"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef(null);
  const [contentSize, setContentSize] = useState(0);

  const isHorizontal = direction === 'left' || direction === 'right';


  const currentSpeed = (isHovered && hoverSpeed !== undefined) ? hoverSpeed : speed;

  const position = useRef(0);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);


  useEffect(() => {
    if (scrollerRef.current) {
 





        
        const total = isHorizontal 
            ? scrollerRef.current.scrollWidth 
            : scrollerRef.current.scrollHeight;
        


        setContentSize(total / 3);
    }
  }, [logos, gap, isHorizontal]);

  useEffect(() => {
    const loop = (time) => {
      if (!lastTime.current) lastTime.current = time;
      const delta = (time - lastTime.current) / 1000;
      lastTime.current = time;

      if (contentSize > 0) {
        const moveAmount = currentSpeed * delta;
        
        if (direction === 'left' || direction === 'up') {
            position.current -= moveAmount;

            if (position.current <= -contentSize) {
                position.current += contentSize; 
            }
        } else {

            position.current += moveAmount;

            if (position.current >= 0) {
                 position.current -= contentSize;
            }
        }
        

        if (scrollerRef.current) {

           
            if (isHorizontal) {
                scrollerRef.current.style.transform = `translateX(${position.current}px)`;
            } else {
                scrollerRef.current.style.transform = `translateY(${position.current}px)`;
            }
        }
      }

      animationFrame.current = requestAnimationFrame(loop);
    };

    animationFrame.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [currentSpeed, contentSize, direction, isHorizontal]);
  

  useEffect(() => {
      if ((direction === 'right' || direction === 'down') && contentSize > 0 && position.current === 0) {
          position.current = -contentSize;
      }
  }, [direction, contentSize]);


  const containerStyle = {
    ['--gap']: `${gap}px`,
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    userSelect: 'none',
    width: '100%',
    height: isHorizontal ? 'auto' : '100%',
    ...(fadeOut ? { 
        maskImage: isHorizontal 
            ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
            : 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: isHorizontal 
            ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
            : 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
    } : {})
  };

  const scrollerStyle = {
    display: 'flex',
    gap: `${gap}px`,
    flexDirection: isHorizontal ? 'row' : 'column',
    width: isHorizontal ? 'max-content' : '100%', 
    height: isHorizontal ? '100%' : 'max-content',
    willChange: 'transform'
  };

  const renderLogo = (item, index, keyPrefix) => {
    const content = item.node ? (
      <div className="flex items-center justify-center text-current" style={{ fontSize: logoHeight }}>
        {item.node}
      </div>
    ) : (
      <img src={item.src} alt={item.alt} style={{ height: logoHeight, width: 'auto', objectFit: 'contain' }} />
    );

    const Wrapper = item.href ? 'a' : 'div';
    const wrapperProps = item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {};
    

    return (
      <Wrapper 
        key={`${keyPrefix}-${index}`} 
        {...wrapperProps}
        className={`flex items-center justify-center transition-transform duration-300 ${scaleOnHover ? 'hover:scale-110 active:scale-95' : ''} text-slate-500 hover:text-slate-800 dark:hover:text-slate-200`}
        title={item.title || item.alt}
      >
        {content}
      </Wrapper>
    );
  };


  return (
    <div 
        style={containerStyle} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel}
        className="logo-loop-container"
    >
      <div ref={scrollerRef} style={scrollerStyle}>
        {logos.map((logo, idx) => renderLogo(logo, idx, 'set1'))}
        {logos.map((logo, idx) => renderLogo(logo, idx, 'set2'))}
        {logos.map((logo, idx) => renderLogo(logo, idx, 'set3'))}
      </div>
    </div>
  );
};

export default LogoLoop;
