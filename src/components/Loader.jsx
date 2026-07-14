import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      
      // Animate counter from 0 to 100
      gsap.to(counter, {
        val: 100,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          setProgress(Math.floor(counter.val));
        },
      });

      // Title character reveal
      gsap.fromTo('.loader-letter', 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out' }
      );

      // Slide up container and exit
      gsap.to('.loader-container', {
        yPercent: -100,
        duration: 1.0,
        delay: 2.2,
        ease: 'power4.inOut',
        onComplete: onComplete
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[99999] bg-canvas-light dark:bg-canvas-dark text-customText-light dark:text-customText-dark flex flex-col justify-center items-center select-none overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Editorial Heading */}
        <h1 className="overflow-hidden flex text-4xl md:text-6xl font-light tracking-[0.2em] font-serif mb-6">
          {"KHUSHI".split("").map((letter, i) => (
            <span key={`l-${i}`} className="loader-letter inline-block transform">{letter}</span>
          ))}
        </h1>
        
        {/* Modern Minimalist Line Loader */}
        <div className="w-64 h-[1.5px] bg-terracotta/20 dark:bg-gold/20 relative overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-terracotta dark:bg-gold transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="text-[10px] font-sans tracking-[0.3em] text-terracotta dark:text-gold uppercase opacity-85">
          CURATING EXHIBITION &bull; {progress}%
        </div>
      </div>
      
      {/* Decorative Canvas Texture Details */}
      <div className="absolute bottom-10 text-[9px] font-sans tracking-widest opacity-40 uppercase">
        COLLEGE OF ART &bull; FINE ARTS PORTFOLIO
      </div>
    </div>
  );
};

export default Loader;
