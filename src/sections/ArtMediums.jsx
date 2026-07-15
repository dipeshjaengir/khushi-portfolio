import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { artistConfig } from '../data/config';
import { artworks } from '../data/artworks';
import { getArtworkImage } from '../utils/assets';

const ArtMediums = () => {
  // Filter categories to only display those that contain at least one real artwork in the database
  const activeCategories = artistConfig.categories.filter((cat) =>
    artworks.some((art) => art.category === cat.id)
  );

  return (
    <section id="mediums" className="py-24 md:py-36 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-28">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Creative Disciplines
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            Exhibition Mediums
          </h2>
          <p className="font-sans text-xs md:text-sm opacity-65 tracking-wide mt-4 max-w-xl leading-relaxed">
            Khushi Choudhary specializes in printmaking, while actively exploring forms ranging from clay modeling to mixed media canvases. Explore each dynamic collection.
          </p>
        </div>
 
        {/* Asymmetric Staggered Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {activeCategories.map((cat, index) => {
            // Determine card layouts: alternate heights and columns to make it look like a premium gallery catalogue
            const isEven = index % 2 === 0;
            
            // Resolve cover path or fallback to placeholder
            const coverImagePath = `/src/assets/artworks/${cat.id}/cover.jpg`;
            const resolvedImage = getArtworkImage(coverImagePath, cat.name, cat.id);

            // Dynamically calculate artwork count for this category
            const categoryArtworks = artworks.filter((art) => art.category === cat.id);
            const countText = `${categoryArtworks.length} ${categoryArtworks.length === 1 ? 'Artwork' : 'Artworks'}`;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between bg-white dark:bg-paper-dark border border-terracotta/10 dark:border-gold/10 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative ${
                  isEven ? 'md:mt-0' : 'md:mt-16'
                }`}
              >
                {/* Large Background Exhibit Number Indicator */}
                <div className="absolute top-4 right-6 font-serif text-5xl md:text-6xl text-terracotta/5 dark:text-gold/5 font-extralight select-none pointer-events-none group-hover:text-terracotta/10 dark:group-hover:text-gold/10 transition-colors">
                  {`0${index + 1}`}
                </div>

                {/* Cover Image Area */}
                <div className="relative overflow-hidden aspect-[16/10] bg-paper-light dark:bg-canvas-dark border border-terracotta/5 mb-6">
                  <img
                    src={resolvedImage}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner framing accent */}
                  <div className="absolute inset-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Card Details Info */}
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-terracotta/5 pb-2">
                    <span className="text-[10px] font-sans tracking-[0.25em] text-terracotta dark:text-gold uppercase font-bold">
                      {`EXHIBIT 0${index + 1}`}
                    </span>
                    <span className="text-[10px] font-sans tracking-widest opacity-60 uppercase font-semibold">
                      {countText}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-light tracking-wide text-customText-light dark:text-customText-dark mb-3">
                    {cat.name}
                  </h3>
                  
                  <p className="text-xs font-sans opacity-60 leading-relaxed tracking-wide mb-8 min-h-[36px]">
                    {cat.description}
                  </p>

                  <div className="pt-4 border-t border-terracotta/5 flex justify-between items-center">
                    <span className="text-[9px] font-sans tracking-widest opacity-40 uppercase">
                      COLLEGE OF ART &bull; DELHI
                    </span>
                    
                    <Link
                      to={`/collection/${cat.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-customText-light dark:text-customText-dark hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
                    >
                      Explore Collection <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Top/Bottom Micro Gold Border Lines on hover */}
                <div className="absolute left-0 top-0 h-[1.5px] w-0 bg-gold/50 group-hover:w-full transition-all duration-700" />
                <div className="absolute right-0 bottom-0 h-[1.5px] w-0 bg-gold/50 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArtMediums;
