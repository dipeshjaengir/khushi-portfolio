import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Transition from '../components/Transition';

const NotFound = () => {
  return (
    <Transition>
      <Helmet>
        <title>404: Gallery Path Missing | Khushi Choudhary</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-4">
          Exhibition Error
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide text-customText-light dark:text-customText-dark">
          Exhibit Not Found
        </h1>
        <p className="font-sans text-sm max-w-md mx-auto opacity-70 leading-relaxed tracking-wide mb-8">
          The artwork collection or page path you are attempting to visit does not exist or has been relocated to another wing of the digital gallery.
        </p>
        
        <Link 
          to="/"
          className="inline-block border border-terracotta dark:border-gold hover:bg-terracotta hover:text-white dark:hover:bg-gold dark:hover:text-black text-customText-light dark:text-customText-dark font-sans text-[10px] tracking-[0.3em] uppercase py-3 px-8 transition-all duration-300 font-semibold"
        >
          Return to Entrance
        </Link>
      </div>
    </Transition>
  );
};

export default NotFound;
