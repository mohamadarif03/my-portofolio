import React, { useEffect, useRef, useState } from 'react';

const LogoLoop = ({
  logos = [],
  speed = 50,
  direction = 'left', // 'left', 'right', 'up', 'down'
  logoHeight = 48,
  gap = 40,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = 'transparent', // Unused if using mask-image
  ariaLabel = "Logo Loop"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef(null);
  const [contentSize, setContentSize] = useState(0);

  const isHorizontal = direction === 'left' || direction === 'right';

  // Determine current speed based on hover
  const currentSpeed = (isHovered && hoverSpeed !== undefined) ? hoverSpeed : speed;

  const position = useRef(0);
  const lastTime = useRef(0);
  const animationFrame = useRef(null);

  // Measure content size for looping
  useEffect(() => {
    if (scrollerRef.current) {
        // We assume the content is duplicated at least once. 
        // Ideally we measure the SINGLE set width.
        // But simplified: we just need to reset when we've scrolled half the width/height (assuming double content)
        // Let's create enough duplicates to definitely fill screen + buffer.
        // For simplicity in this logical block, let's assume scrollerRef contains exactly "Sets" of logos.
        // If we render Triple, one set is 1/3 of scrollWidth.
        
        const total = isHorizontal 
            ? scrollerRef.current.scrollWidth 
            : scrollerRef.current.scrollHeight;
        
        // We reset after one "set" of logos moves out of view.
        // Since we render 3 sets, we traverse 1 set then jump back.
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
            // If we moved past one set size, reset (add set size)
            if (position.current <= -contentSize) {
                position.current += contentSize; 
            }
        } else {
            // right or down
            position.current += moveAmount;
            // If we moved "positive" past 0 (start), we need to snap back to -contentSize?
            // Wait. Initial position is 0. 
            // If 'right', we want to move towards positive X.
            // But we need to show content coming from left.
            // Usually we start at -contentSize (showing 2nd set) and move towards 0.
            
            // To simplify, let's keep position logic:
            if (position.current >= 0) {
                 position.current -= contentSize;
            }
        }
        
        // Apply transform
        if (scrollerRef.current) {
            // For right/down, we might need an offset to ensure we see the middle set initially?
            // Or simpler: Just init with some negative offset if needed.
            // Let's use standard logic: Translate.
            
            // If 'right', start at -contentSize and go up to 0.
            // Let's force position to be in range [-contentSize, 0] always? No.
            
            // Re-eval 'right':
            // We want logos to move --->
            // Start at -contentSize (showing 2nd set). 
            // Move +speed. 
            // When > 0, reset to -contentSize.
            
            // Initial render: 0. 
            // If 'right', we should probably set initial position logic outside loop?
            // But loop handles delta.
            
           if ((direction === 'right' || direction === 'down') && position.current > 0) {
                 position.current = -contentSize;
           }
           
           // Actually for 'right'/'down' we should probably initialize position at -contentSize?
           // I'll handle that via `initial` check logic or just letting it flow.
           
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
  
  // Set initial position for right/down directions to ensure smooth start
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
    height: isHorizontal ? 'auto' : '100%', // Respect container height if vertical
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
    
    // Add dark mode support for text colors within the loop if not specified
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

  // Render 3 sets for safety (1 visible, 1 buffer left, 1 buffer right logic)
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
