import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { artistConfig } from '../data/config';

/**
 * Animated stat counter component that triggers when it enters the viewport.
 */
const StatCounter = ({ value, label, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number from value string (e.g. "50+" -> 50)
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (!isInView || target === 0) return;

    let start = 0;
    const duration = 2.0; // Seconds
    const end = target;
    const increment = Math.ceil(end / (duration * 60)); // 60 FPS
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white dark:bg-canvas-dark border border-terracotta/10 dark:border-gold/10 p-6 md:p-8 flex flex-col justify-center shadow-sm relative group hover:shadow-md transition-shadow"
    >
      {/* Decorative luxury corners */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-terracotta/30 dark:border-gold/30" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-terracotta/30 dark:border-gold/30" />
      
      <span className="font-serif text-3.5xl md:text-5xl text-terracotta dark:text-gold font-light tracking-wider mb-2">
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[10px] md:text-xs tracking-widest opacity-60 uppercase font-semibold">
        {label}
      </span>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-paper-light dark:bg-paper-dark/40 transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic background accents */}
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-terracotta/5 dark:bg-terracotta/3 blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Biography
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            {artistConfig.about.title}
          </h2>
        </div>

        {/* Staggered Bio & Count details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Biography Text (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-sm md:text-base leading-relaxed opacity-80 tracking-wide"
            >
              {artistConfig.about.bio}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="italic text-terracotta dark:text-gold font-serif text-base md:text-xl border-l-2 border-terracotta/20 dark:border-gold/20 pl-6 my-4 leading-relaxed"
            >
              "Art is not just a study of forms; it is a search for silent dialogues between distinct mediums, expressing concepts that escape vocabulary."
            </motion.p>

            {/* Cursive Signature Motif */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="mt-4 flex flex-col items-start gap-1"
            >
              <span className="font-serif text-2xl font-light tracking-widest italic opacity-95 text-customText-light dark:text-customText-dark">
                Khushi Choudhary
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] opacity-40 uppercase">
                BFA Student, College of Art
              </span>
            </motion.div>
          </div>

          {/* Interactive Statistics Grid (Right) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 w-full">
            {artistConfig.statistics.map((stat, index) => (
              <StatCounter
                key={index}
                index={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
