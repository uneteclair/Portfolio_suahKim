
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // Use direct style update for position to bypass React's render loop and avoid movement lag
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is interactive (based on the HTML hoverTargets logic)
      const isInteractive = target.matches('a, button, h1, h2, h3, h4, h5, h6, p, span, img, .tag, .hover-target, [role="button"]');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-9 h-9 bg-[#FCFFA5] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity,mix-blend-mode] duration-300 ease-out ${
        isHovering ? 'mix-blend-difference scale-[1.3] rotate-[15deg]' : 'mix-blend-normal scale-100 rotate-0'
      }`}
      style={{
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        // Initialize off-screen
        left: '-100px',
        top: '-100px',
        // Critical: Ensure transform-origin is center for scale/rotate animations
        transformOrigin: 'center center'
      }}
    />
  );
};

export default CustomCursor;
