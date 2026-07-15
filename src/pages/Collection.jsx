import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FiArrowLeft, FiMaximize2, FiArrowRight } from 'react-icons/fi';
import { artistConfig } from '../data/config';
import { artworks } from '../data/artworks';
import { getArtworkImage } from '../utils/assets';
import Transition from '../components/Transition';

const Collection = () => {
  const { category } = useParams();
  
  // Find category config
  const categoryInfo = artistConfig.categories.find((cat) => cat.id === category);
  
  // Filter artworks belonging to this category
  const categoryArtworks = artworks.filter((art) => art.category === category);

  if (!categoryInfo) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-serif text-3xl font-light mb-4">Collection Not Found</h2>
        <p className="font-sans text-sm opacity-60 mb-6">The requested medium category does not exist.</p>
        <Link to="/" className="text-terracotta dark:text-gold uppercase tracking-widest text-xs font-semibold hover:opacity-85 transition-opacity">
          Back to Gallery Home
        </Link>
      </div>
    );
  }

  return (
    <Transition>
      <Helmet>
        <title>{`${categoryInfo.name} Collection | Khushi Choudhary`}</title>
        <meta name="description" content={`Explore the fine art collection of ${categoryInfo.name} by Khushi Choudhary. ${categoryInfo.description}`} />
      </Helmet>

      {/* Hero Banner Section */}
      <section className="bg-paper-light dark:bg-paper-dark py-24 md:py-36 border-b border-terracotta/10 dark:border-gold/10 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-terracotta dark:text-gold hover:opacity-85 transition-opacity mb-8"
          >
            <FiArrowLeft /> Back to Entrance
          </Link>
          
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-4">
            {`${categoryArtworks.length} ${categoryArtworks.length === 1 ? 'Artwork' : 'Artworks'}`}
          </span>
          
          <h1 className="font-serif text-4xl md:text-7xl font-light mb-6 tracking-wide text-customText-light dark:text-customText-dark">
            {categoryInfo.name}
          </h1>
          
          <p className="font-sans text-sm md:text-base max-w-2xl mx-auto opacity-70 leading-relaxed tracking-wide">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Pinterest-style Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {categoryArtworks.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-terracotta/20 rounded-md">
            <p className="font-serif text-lg italic opacity-60">This collection is currently empty.</p>
            <p className="font-sans text-xs opacity-40 mt-1">Exhibition items will be uploaded shortly.</p>
          </div>
        ) : (
          <PhotoProvider
            speed={() => 300}
            maskOpacity={0.9}
            loadingElement={
              <div className="flex items-center justify-center text-xs tracking-widest text-white uppercase font-sans">
                Curating Image...
              </div>
            }
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {categoryArtworks.map((art) => {
                // Resolve image (uses real assets if uploaded, otherwise falls back to museum template SVG)
                const resolvedImage = getArtworkImage(art.image, art.title, art.category);

                return (
                  <div
                    key={art.id}
                    className="break-inside-avoid bg-white dark:bg-canvas-dark border border-terracotta/10 dark:border-gold/10 p-5 shadow-sm hover:shadow-xl transition-all duration-500 relative group flex flex-col justify-between"
                  >
                    {/* Image Viewer Container */}
                    <div className="relative overflow-hidden mb-5 aspect-[4/5] bg-paper-light dark:bg-paper-dark flex items-center justify-center border border-terracotta/5">
                      <PhotoView 
                        src={resolvedImage}
                        overlay={
                          <div className="absolute bottom-0 left-0 w-full glass-effect text-customText-light dark:text-customText-dark p-6 md:p-8 font-sans border-t border-terracotta/15 dark:border-gold/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <span className="text-[10px] tracking-widest uppercase font-semibold text-terracotta dark:text-gold">
                                {art.medium}
                              </span>
                              <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide mt-1">
                                {art.title}
                              </h3>
                              <p className="text-xs opacity-75 mt-2 max-w-xl font-sans leading-relaxed">
                                {art.description}
                              </p>
                            </div>
                            <div className="text-left md:text-right border-l md:border-l-0 md:border-r border-terracotta/20 dark:border-gold/20 pl-4 md:pl-0 md:pr-6 py-1">
                              <p className="text-[10px] tracking-widest opacity-60 uppercase">Details</p>
                              <p className="text-xs font-medium tracking-wider mt-1">{art.dimensions}</p>
                              <p className="text-xs opacity-75 mt-0.5">{art.year}</p>
                              {art.price && art.price !== "N/A" && (
                                <p className="text-xs font-semibold text-terracotta dark:text-gold mt-1">{art.price}</p>
                              )}
                            </div>
                          </div>
                        }
                      >
                        <img
                          src={resolvedImage}
                          alt={art.title}
                          loading="lazy"
                          className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </PhotoView>

                      {/* Expand overlay icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 dark:bg-black/80 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <FiMaximize2 className="text-sm text-customText-light dark:text-customText-dark" />
                      </div>
                    </div>

                    {/* Metadata Card Details */}
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-lg tracking-wide text-customText-light dark:text-customText-dark">
                          {art.title}
                        </h3>
                        <span className="text-[9px] font-sans tracking-widest opacity-50 uppercase font-semibold">
                          {art.year}
                        </span>
                      </div>
                      
                      <p className="text-xs font-sans opacity-60 line-clamp-2 leading-relaxed mb-4">
                        {art.description}
                      </p>

                      <div className="flex justify-between items-center pt-3 border-t border-terracotta/5">
                        <span className="text-[10px] font-sans tracking-widest text-terracotta dark:text-gold uppercase font-medium">
                          {art.medium}
                        </span>
                        
                        <Link
                          to={`/artwork/${art.id}`}
                          className="text-[10px] tracking-widest uppercase font-semibold inline-flex items-center gap-1.5 text-customText-light dark:text-customText-dark hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
                        >
                          View Details <FiArrowRight className="text-[11px]" />
                        </Link>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </PhotoProvider>
        )}
      </section>
    </Transition>
  );
};

export default Collection;
