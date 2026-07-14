import React from 'react';
import { motion } from 'framer-motion';
import { artistConfig } from '../data/config';

const Timeline = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Aesthetic Growth
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            Exhibition & Academic Timeline
          </h2>
          <p className="font-sans text-xs md:text-sm opacity-60 tracking-wide mt-3 max-w-md mx-auto">
            A linear progression of Khushi Choudhary's milestones, exhibiting works at Lalit Kala Academy and pursuing fine arts specialization.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-terracotta/20 dark:border-gold/20 ml-6 md:ml-32 py-6">
          {artistConfig.timeline.map((item, index) => {
            // Determine custom tag details based on title keyword to represent academic vs exhibit
            const isAcademic = item.title.includes("College") || item.title.includes("Arts");
            const isExhibit = item.title.includes("Exhibition") || item.title.includes("Lalit Kala");
            const categoryLetter = isAcademic ? "A" : isExhibit ? "E" : "J"; // Academic, Exhibit, Journey

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="mb-12 md:mb-20 relative pl-10 md:pl-16 group text-left"
              >
                {/* Custom timeline node containing letter indicator */}
                <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-paper-light dark:bg-paper-dark border border-terracotta/40 dark:border-gold/40 flex items-center justify-center font-serif text-[10px] text-terracotta dark:text-gold font-bold shadow-sm group-hover:bg-terracotta group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-black transition-colors duration-300">
                  {categoryLetter}
                </div>
                
                {/* Year tag for Desktop */}
                <div className="absolute left-[-150px] top-1 hidden md:block w-28 text-right font-serif text-2xl text-terracotta dark:text-gold font-light tracking-wide">
                  {item.year}
                </div>

                {/* Mobile Year Badge */}
                <span className="md:hidden inline-block text-[10px] font-sans tracking-widest text-terracotta dark:text-gold uppercase font-bold mb-2">
                  {item.year}
                </span>

                {/* Content Panel Card */}
                <div className="bg-white dark:bg-paper-dark border border-terracotta/5 dark:border-gold/5 p-6 shadow-sm hover:shadow-md transition-shadow relative">
                  {/* Micro corner accent */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-terracotta/20 dark:border-gold/20" />
                  
                  <h3 className="font-serif text-lg md:text-xl font-light tracking-wide text-customText-light dark:text-customText-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans opacity-60 leading-relaxed tracking-wide max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
