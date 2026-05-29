import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsHidden(false);
      
      // Target position
      const x = e.clientX;
      const y = e.clientY;

      setDotPosition({ x, y });
      
      // Soft lagging main cursor
      setTimeout(() => {
        setPosition({ x, y });
      }, 50);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Listen to all interactive tags for cursor scaling
    const addHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea, .hover-glow');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add hover events after initial load and periodically (for dynamically rendered items)
    addHoverEvents();
    const interval = setInterval(addHoverEvents, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '50px' : '22px',
          height: isHovered ? '50px' : '22px',
          backgroundColor: isHovered ? 'rgba(0, 243, 255, 0.08)' : 'transparent',
          borderColor: isHovered ? 'var(--color-neon-pink)' : 'var(--color-neon-blue)',
          boxShadow: isHovered ? '0 0 15px var(--color-neon-pink)' : '0 0 8px var(--color-neon-blue)',
        }}
      />
      {/* Inner Pinpoint */}
      <div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? 'var(--color-neon-blue)' : 'var(--color-neon-pink)',
          boxShadow: '0 0 10px var(--color-neon-pink)',
        }}
      />
    </>
  );
};

export default CustomCursor;
