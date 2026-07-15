import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { artistConfig } from '../data/config';
import { getArtworkImage } from '../utils/assets';

const Instagram = () => {
  // We use clean museum image template placeholders to simulate Instagram items
  const instagramMockups = [
    { 
      id: "ig-1", 
      title: "Moon Creation Process", 
      path: "/src/assets/artworks/pop-putty/moon.jpg", 
      cat: "pop-putty",
      url: "https://www.instagram.com/p/DEbyXIRv7lk/"
    },
    { 
      id: "ig-2", 
      title: "Landscape Painting Reel", 
      path: "/src/assets/artworks/landscape/landscape.jpg", 
      cat: "landscape",
      url: "https://www.instagram.com/reel/DS0Nt3WgTq7/"
    },
    { 
      id: "ig-3", 
      title: "Most Popular Reel", 
      path: "/src/assets/artworks/acrylic/two-ducks.jpg", 
      cat: "acrylic",
      url: "https://www.instagram.com/reel/DXewKifj0D3/"
    },
    { 
      id: "ig-4", 
      title: "Studio Process Reel", 
      path: "/src/assets/artworks/pencil-shading/rope-study.jpg", 
      cat: "pencil-shading",
      url: "https://www.instagram.com/reel/DWWvhkDjxXT/"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-paper-light dark:bg-paper-dark/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
              Social Gallery
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
              Studio Chronicles
            </h2>
          </div>
          <a
            href={artistConfig.contact.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-terracotta dark:border-gold hover:bg-terracotta hover:text-white dark:hover:bg-gold dark:hover:text-black text-customText-light dark:text-customText-dark font-sans text-[10px] tracking-[0.2em] uppercase py-2.5 px-6 transition-all duration-300 font-semibold"
          >
            <FaInstagram className="text-sm" /> Follow {artistConfig.contact.instagram}
          </a>
        </div>

        {/* IG Simulated Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramMockups.map((item) => {
            const resolvedImage = getArtworkImage(item.path, item.title, item.cat);

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white dark:bg-canvas-dark border border-terracotta/10 dark:border-gold/10 p-3 group shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-square bg-paper-light dark:bg-paper-dark border border-terracotta/5">
                  <img
                    src={resolvedImage}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* IG Hover Cover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <FaInstagram className="text-white text-2xl" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Instagram;
