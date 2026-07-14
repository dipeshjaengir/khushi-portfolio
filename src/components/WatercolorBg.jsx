import React from 'react';

/**
 * Aesthetic organic watercolor blobs floating slowly in the background.
 * Creates a museum-exhibition, premium, layered layout.
 */
const WatercolorBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Terracotta/Peach blob top right */}
      <div className="absolute top-[-15%] right-[-15%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-terracotta/5 dark:bg-terracotta/3 watercolor-blob" />
      
      {/* Gold/Honey blob mid left */}
      <div 
        className="absolute top-[35%] left-[-20%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gold/5 dark:bg-gold/3 watercolor-blob" 
        style={{ animationDelay: '-6s', animationDuration: '24s' }} 
      />

      {/* Soft warm pink blob bottom right */}
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw] rounded-full bg-terracotta/4 dark:bg-terracotta/2 watercolor-blob" 
        style={{ animationDelay: '-12s', animationDuration: '28s' }} 
      />
    </div>
  );
};

export default WatercolorBg;
