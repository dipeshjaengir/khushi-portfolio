import React from 'react';
import { motion } from 'framer-motion';
import { artistConfig } from '../data/config';

const Process = () => {
  return (
    <section className="py-24 md:py-36 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            The Creative Process
          </h2>
          <p className="font-sans text-xs md:text-sm opacity-65 tracking-wide mt-3 leading-relaxed">
            How a conceptual seed transforms into a finished museum-grade physical artwork. Every phase is executed with care, technical experimentation, and precision.
          </p>
        </div>

        {/* Dynamic Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-[32px] left-[5%] right-[5%] hidden lg:block h-[1px] bg-terracotta/20 dark:bg-gold/20 z-0" />

          {artistConfig.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 group"
            >
              
              {/* Step bubble marker with double ring borders */}
              <div className="w-16 h-16 rounded-full bg-paper-light dark:bg-paper-dark border border-terracotta/20 dark:border-gold/20 flex items-center justify-center font-serif text-lg text-terracotta dark:text-gold font-light mb-6 group-hover:bg-terracotta group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-black transition-all duration-300 shadow-sm relative">
                {step.step}
                {/* Micro accent outer hover circle */}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-terracotta/0 dark:border-gold/0 group-hover:border-terracotta/30 dark:group-hover:border-gold/30 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />
              </div>

              <h3 className="font-serif text-xl font-light tracking-wide text-customText-light dark:text-customText-dark mb-2">
                {step.name}
              </h3>
              
              <p className="text-[11px] font-sans opacity-60 leading-relaxed tracking-wide px-4 lg:px-0">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
