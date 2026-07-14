import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft } from 'react-icons/fi';
import { artworks } from '../data/artworks';
import { getArtworkImage } from '../utils/assets';
import Transition from '../components/Transition';

const Artwork = () => {
  const { id } = useParams();
  const artwork = artworks.find((art) => art.id === id);

  if (!artwork) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-serif text-3xl font-light mb-4">Artwork Not Found</h2>
        <p className="font-sans text-sm opacity-60 mb-6">The requested piece could not be located in our records.</p>
        <Link to="/" className="text-terracotta dark:text-gold uppercase tracking-widest text-xs font-semibold hover:opacity-85 transition-opacity">
          Back to Gallery Home
        </Link>
      </div>
    );
  }

  // Resolve artwork image (using glob imports or SVG placeholder fallback)
  const resolvedImage = getArtworkImage(artwork.image, artwork.title, artwork.category);

  return (
    <Transition>
      <Helmet>
        <title>{`${artwork.title} | Khushi Choudhary`}</title>
        <meta name="description" content={`${artwork.title} - ${artwork.medium} (${artwork.year}) by Khushi Choudhary. ${artwork.description}`} />
        <meta property="og:title" content={`${artwork.title} | Khushi Choudhary`} />
        <meta property="og:description" content={`${artwork.title} - ${artwork.medium} (${artwork.year})`} />
        <meta property="og:image" content={resolvedImage} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Back navigation */}
        <Link
          to={`/collection/${artwork.category}`}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-terracotta dark:text-gold hover:opacity-85 transition-opacity mb-8 md:mb-12"
        >
          <FiArrowLeft /> Back to {artwork.category.replace("-", " ")} Collection
        </Link>

        {/* Dynamic Detail Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Artwork Image Container */}
          <div className="lg:col-span-7 bg-paper-light dark:bg-paper-dark p-6 md:p-10 border border-terracotta/10 dark:border-gold/10 shadow-xl relative overflow-hidden group">
            {/* Elegant inner crop lines */}
            <div className="absolute inset-4 border border-terracotta/5 pointer-events-none" />
            <img
              src={resolvedImage}
              alt={artwork.title}
              loading="lazy"
              className="w-full h-auto object-contain mx-auto max-h-[75vh] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Artwork Information Board */}
          <div className="lg:col-span-5 flex flex-col justify-center border-l border-terracotta/15 dark:border-gold/15 pl-0 lg:pl-12 pt-6 lg:pt-0">
            <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.3em] font-semibold uppercase mb-2">
              {artwork.medium}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-6 text-customText-light dark:text-customText-dark">
              {artwork.title}
            </h1>
            
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-75 mb-8 tracking-wide">
              {artwork.description}
            </p>

            {/* Exhibit Details Card */}
            <div className="border-y border-terracotta/10 dark:border-gold/10 py-6 my-6 flex flex-col gap-4 font-sans text-xs">
              <div className="flex justify-between items-center py-1">
                <span className="opacity-50 uppercase tracking-widest">Year of Creation</span>
                <span className="font-medium tracking-wider">{artwork.year}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="opacity-50 uppercase tracking-widest">Dimensions</span>
                <span className="font-medium tracking-wider">{artwork.dimensions}</span>
              </div>
              {artwork.price && artwork.price !== "N/A" && (
                <div className="flex justify-between items-center py-1">
                  <span className="opacity-50 uppercase tracking-widest">Value / Price</span>
                  <span className="text-sm font-semibold text-terracotta dark:text-gold tracking-wider">{artwork.price}</span>
                </div>
              )}
            </div>

            {/* CTA Option */}
            <div className="mt-4">
              <a
                href={`https://wa.me/917983868208?text=Hi%20Khushi,%20I'm%20interested%20in%20your%20artwork%20"${encodeURIComponent(artwork.title)}"%20(${artwork.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center border border-terracotta dark:border-gold bg-terracotta dark:bg-gold text-white dark:text-black hover:bg-transparent hover:text-customText-light dark:hover:text-customText-dark font-sans text-[11px] tracking-[0.25em] uppercase py-3.5 px-8 transition-all duration-300 font-semibold"
              >
                Inquire About Piece
              </a>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Artwork;
