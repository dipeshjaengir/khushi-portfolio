import React from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Palette, 
  Layers, 
  Smile, 
  Sparkles, 
  Wind, 
  Scissors, 
  Layers3, 
  Maximize 
} from 'lucide-react';
import { artistConfig } from '../data/config';

const iconMap = {
  "custom-art": Paintbrush,
  "canvas-paintings": Palette,
  "mixed-media": Layers,
  "caricatures": Smile,
  "face-painting": Sparkles,
  "sand-art": Wind,
  "pop-sculpture": Maximize,
  "linocut": Scissors,
  "woodcut": Layers3,
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-paper-light dark:bg-paper-dark/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            Professional Services
          </h2>
          <p className="font-sans text-xs md:text-sm opacity-65 tracking-wide mt-3 leading-relaxed">
            Available for commissions, live artistic performances, brand events, workshops, and custom physical installations globally.
          </p>
        </div>

        {/* Services Cards Grid with Glassmorphic Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artistConfig.services.map((srv, index) => {
            const IconComponent = iconMap[srv.id] || Paintbrush;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className="bg-white/80 dark:bg-canvas-dark/80 backdrop-blur-md border border-terracotta/10 dark:border-gold/10 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative border corners */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-terracotta/30 dark:border-gold/30" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-terracotta/30 dark:border-gold/30" />

                <div>
                  {/* Icon Panel with dynamic transitions */}
                  <div className="w-12 h-12 rounded-full bg-paper-light dark:bg-paper-dark/60 flex items-center justify-center text-terracotta dark:text-gold mb-6 group-hover:bg-terracotta group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-black transition-all duration-500 shadow-inner">
                    <IconComponent className="w-5 h-5 stroke-[1.25]" />
                  </div>

                  <h3 className="font-serif text-xl font-light tracking-wide text-customText-light dark:text-customText-dark mb-3">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs font-sans opacity-60 leading-relaxed tracking-wide">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-terracotta/5">
                  <a
                    href={`https://wa.me/917983868208?text=Hi%20Khushi,%20I'm%20inquiring%20about%20your%20"${encodeURIComponent(srv.title)}"%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-widest uppercase font-semibold text-terracotta dark:text-gold hover:opacity-85 transition-opacity inline-flex items-center gap-1"
                  >
                    Inquire Service &rarr;
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
