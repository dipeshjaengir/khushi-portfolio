import React from 'react';
import { motion } from 'framer-motion';
import { artistConfig } from '../data/config';

const Philosophy = () => {
  return (
    <section className="relative bg-customText-light dark:bg-[#0A0A0A] text-canvas-light py-28 md:py-44 overflow-hidden flex items-center justify-center border-y border-terracotta/25 dark:border-gold/25 transition-colors duration-500">
      
      {/* Dynamic Gold/Terracotta Ambient Light Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-terracotta/10 dark:bg-terracotta/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gold/10 dark:bg-gold/5 blur-[120px] pointer-events-none z-0" />

      {/* Large Backdrop Quotation Mark Motif */}
      <div 
        className="absolute top-[10%] left-[10%] font-serif text-[18rem] md:text-[28rem] text-gold/5 dark:text-gold/2 leading-none select-none pointer-events-none z-0"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        “
      </div>
      <div 
        className="absolute bottom-[-15%] right-[10%] font-serif text-[18rem] md:text-[28rem] text-terracotta/5 dark:text-terracotta/2 leading-none select-none pointer-events-none z-0"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        ”
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold font-sans text-xs md:text-sm tracking-[0.4em] font-semibold uppercase mb-8 block"
        >
          Artist Philosophy
        </motion.span>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-5xl font-light leading-[1.4] tracking-wide mb-10 text-canvas-light dark:text-customText-dark"
        >
          "{artistConfig.philosophy.quote}"
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-10 h-[1.5px] bg-gold/40" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            {artistConfig.philosophy.author}
          </span>
          <div className="w-10 h-[1.5px] bg-gold/40" />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Philosophy;
