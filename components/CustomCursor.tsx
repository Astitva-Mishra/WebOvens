'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null; // Don't show on mobile devices
  }

  // Offset so the absolute visual tip of the SVG (at 4,2) aligns with the real mouse click point
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 5,
        y: mousePosition.y - 3,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.2,
      }}
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="#FFAB40"
        stroke="#FFFFFF" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{
          filter: isHovering 
            ? 'drop-shadow(0px 0px 12px rgba(255, 171, 64, 1)) drop-shadow(0px 4px 8px rgba(0,0,0,0.6)) brightness(1.2)' 
            : 'drop-shadow(0px 0px 8px rgba(255, 171, 64, 0.6)) drop-shadow(0px 2px 4px rgba(0,0,0,0.4))',
          transform: isHovering ? 'scale(1.25)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <path d="M4 2L20 10L13 13L10 20L4 2Z" />
      </svg>
    </motion.div>
  );
}
