import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { artistConfig } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper-light dark:bg-paper-dark text-customText-light dark:text-customText-dark border-t border-terracotta/15 dark:border-gold/15 py-12 md:py-16 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Details */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-lg md:text-xl font-light tracking-[0.25em] font-serif uppercase hover:opacity-85 transition-opacity">
            {artistConfig.name}
          </Link>
          <p className="text-[10px] tracking-[0.2em] opacity-60 font-sans uppercase mt-2">
            {artistConfig.subtitle}
          </p>
        </div>

        {/* Social Media Link Icons */}
        <div className="flex gap-6 items-center">
          <a
            href={artistConfig.contact.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center hover:bg-terracotta hover:text-white dark:hover:bg-gold dark:hover:text-black transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="text-base" />
          </a>
          <a
            href={`https://wa.me/${artistConfig.contact.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp className="text-base" />
          </a>
          <a
            href={`mailto:${artistConfig.contact.email}`}
            className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center hover:bg-terracotta hover:text-white dark:hover:bg-gold dark:hover:text-black transition-all duration-300"
            aria-label="Email Address"
          >
            <FaEnvelope className="text-base" />
          </a>
        </div>

        {/* Copyright Details */}
        <div className="text-center md:text-right">
          <p className="text-[10px] tracking-wider opacity-50 font-sans uppercase">
            &copy; {currentYear} {artistConfig.name}. All Rights Reserved.
          </p>
          <p className="text-[9px] tracking-widest opacity-35 font-sans uppercase mt-1">
            Curated Digital Exhibition &bull; Delhi, India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
