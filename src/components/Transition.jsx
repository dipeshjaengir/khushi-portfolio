import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable page transition wrapper using Framer Motion.
 * Features a soft fade and upward slide for editorial page entries.
 */
const Transition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
