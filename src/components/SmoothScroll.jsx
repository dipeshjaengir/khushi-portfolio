import React from 'react';
import { ReactLenis } from 'lenis/react';

/**
 * Global smooth scrolling wrapper using official Lenis React integration.
 */
const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.2, 
        lerp: 0.08, 
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
