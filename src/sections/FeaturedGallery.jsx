import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMaximize2 } from 'react-icons/fi';
import { artistConfig } from '../data/config';
import { artworks } from '../data/artworks';
import { getArtworkImage } from '../utils/assets';

const FeaturedGallery = () => {
  // Extract up to 6 featured artworks from database registry
  const featuredArtworks = artworks.filter((art) => art.featured).slice(0, 6);

  // Find first active category dynamically to avoid broken / empty redirects
  const activeCategories = artistConfig.categories.filter((cat) =>
    artworks.some((art) => art.category === cat.id)
  );
  const galleryLinkTarget = activeCategories[0] ? `/collection/${activeCategories[0].id}` : '/';

  return (
    <section className="py-24 md:py-36 bg-paper-light dark:bg-paper-dark/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
              Curated Showcase
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
              Featured Creations
            </h2>
          </div>
          <Link
            to={galleryLinkTarget}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-terracotta dark:text-gold hover:opacity-80 transition-opacity group"
          >
            Go to Gallery Collections <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Masonry Featured Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {featuredArtworks.map((art, index) => {
            const resolvedImage = getArtworkImage(art.image, art.title, art.category);

            return (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="break-inside-avoid bg-white dark:bg-canvas-dark border border-terracotta/10 dark:border-gold/10 p-5 shadow-sm hover:shadow-xl transition-all duration-500 relative group flex flex-col justify-between"
              >
                {/* Image Container with Hover zoom and overlay slides */}
                <div className="relative overflow-hidden aspect-[4/5] bg-paper-light dark:bg-paper-dark border border-terracotta/5 mb-5">
                  <img
                    src={resolvedImage}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Detailed Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-sans tracking-widest text-gold uppercase font-semibold">
                        {art.category.replace("-", " ")}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur">
                        <FiMaximize2 className="text-xs" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-sans tracking-widest text-gold/80 uppercase font-semibold">
                        {art.medium}
                      </span>
                      <h3 className="font-serif text-xl font-light text-white tracking-wide mt-1.5 mb-2">
                        {art.title}
                      </h3>
                      <p className="text-[11px] font-sans text-white/70 line-clamp-2 leading-relaxed mb-4">
                        {art.description}
                      </p>
                      
                      <Link
                        to={`/artwork/${art.id}`}
                        className="text-[10px] tracking-widest uppercase text-white font-semibold inline-flex items-center gap-1 hover:text-gold transition-colors"
                      >
                        Exhibition view <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Normal details visible when not hovered (Mobile friendly) */}
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <h3 className="font-serif text-base tracking-wide text-customText-light dark:text-customText-dark">
                      {art.title}
                    </h3>
                    <p className="text-[10px] font-sans opacity-50 uppercase tracking-widest mt-0.5">
                      {art.medium}
                    </p>
                  </div>
                  <span className="text-[10px] font-sans tracking-wider text-terracotta dark:text-gold font-bold">
                    {art.year}
                  </span>
                </div>

                {/* Accent border corners */}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-terracotta dark:bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedGallery;
