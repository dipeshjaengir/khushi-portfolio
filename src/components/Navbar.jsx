import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkSide from '../hooks/useDarkSide';
import { artistConfig } from '../data/config';
import { artworks } from '../data/artworks';

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const activeCategories = artistConfig.categories.filter((cat) =>
    artworks.some((art) => art.category === cat.id)
  );

  // Monitor page scroll to add glassmorphic styling to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide((prev) => !prev);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-effect shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-light tracking-[0.2em] font-serif uppercase cursor-pointer text-customText-light dark:text-customText-dark hover:opacity-85 transition-opacity"
        >
          Khushi Choudhary
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase font-medium">
          <Link to="/" className="hover:text-terracotta dark:hover:text-gold transition-colors duration-300">
            Home
          </Link>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
          >
            About
          </button>

          {/* Dynamic Gallery Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-terracotta dark:hover:text-gold transition-colors duration-300">
              Gallery <HiChevronDown className="text-sm" />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 glass-effect border border-terracotta/10 dark:border-gold/10 rounded-md shadow-xl py-3 z-50 animate-fade-in">
                {activeCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/collection/${cat.id}`}
                    className="block px-6 py-2.5 text-[10px] text-customText-light dark:text-customText-dark hover:bg-terracotta/10 dark:hover:bg-gold/10 hover:text-terracotta dark:hover:text-gold transition-all duration-300 font-medium tracking-widest uppercase"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('experience')}
            className="hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-terracotta dark:hover:text-gold transition-colors duration-300"
          >
            Contact
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 ml-4 rounded-full border border-terracotta/20 dark:border-gold/20 hover:bg-terracotta/10 dark:hover:bg-gold/10 text-customText-light dark:text-customText-dark transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkSide ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-terracotta/20 dark:border-gold/20 text-customText-light dark:text-customText-dark"
            aria-label="Toggle Dark/Light Mode"
          >
            {darkSide ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-customText-light dark:text-customText-dark hover:text-terracotta dark:hover:text-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-effect shadow-xl border-t border-terracotta/10 dark:border-gold/10 py-6 px-8 flex flex-col gap-6 text-xs tracking-widest font-medium uppercase animate-fade-in z-50">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-terracotta dark:hover:text-gold transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              handleNavClick('about');
            }}
            className="text-left hover:text-terracotta dark:hover:text-gold transition-colors"
          >
            About
          </button>

          {/* Collapsible Gallery Sub-menu */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-widest opacity-50 uppercase font-semibold">
              Collections
            </span>
            <div className="grid grid-cols-2 gap-3 pl-3 mt-1">
              {activeCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/collection/${cat.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] hover:text-terracotta dark:hover:text-gold transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              handleNavClick('services');
            }}
            className="text-left hover:text-terracotta dark:hover:text-gold transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              handleNavClick('experience');
            }}
            className="text-left hover:text-terracotta dark:hover:text-gold transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              handleNavClick('contact');
            }}
            className="text-left hover:text-terracotta dark:hover:text-gold transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
