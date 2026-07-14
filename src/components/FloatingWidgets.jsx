import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp, FaCopy, FaCheck } from 'react-icons/fa';
import { artistConfig } from '../data/config';

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  // Monitor scroll for Back-To-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(artistConfig.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 items-end">
      
      {/* Copy Email Button */}
      <button
        onClick={copyEmail}
        className="w-11 h-11 rounded-full glass-effect flex items-center justify-center text-customText-light dark:text-customText-dark hover:text-gold dark:hover:text-gold shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-terracotta/20 dark:border-gold/20"
        title="Copy Email Address"
        aria-label="Copy Email Address"
      >
        {copied ? (
          <FaCheck className="text-sm text-green-600 dark:text-green-400 animate-scale" />
        ) : (
          <FaCopy className="text-sm" />
        )}
        
        {/* Tooltip */}
        <span className="absolute right-14 bg-customText-light dark:bg-customText-dark text-canvas-light dark:text-canvas-dark text-[10px] tracking-wider py-1 px-3 rounded shadow opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase">
          {copied ? "Copied!" : "Copy Email"}
        </span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${artistConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
        <span className="absolute right-14 bg-customText-light dark:bg-customText-dark text-canvas-light dark:text-canvas-dark text-[10px] tracking-wider py-1 px-3 rounded shadow opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase">
          WhatsApp Chat
        </span>
      </a>

      {/* Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-terracotta text-canvas-light flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group relative"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-sm" />
          <span className="absolute right-14 bg-customText-light dark:bg-customText-dark text-canvas-light dark:text-canvas-dark text-[10px] tracking-wider py-1 px-3 rounded shadow opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase">
            Back To Top
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingWidgets;
