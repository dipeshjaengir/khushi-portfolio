import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { artistConfig } from '../data/config';
import { getProfileImage } from '../utils/assets';

const Hero = () => {
  const profileImg = getProfileImage(artistConfig.about.profileImage);

  // Mouse coordinates for premium 3D Parallax Tilt effect on the portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for lag-free cursor tracking
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 15 });

  // Map mouse coordinates to angles of tilt rotation
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate offset relative to the center of the viewport
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    // GSAP slow organic particles
    const particles = document.querySelectorAll('.hero-particle');
    particles.forEach((part, i) => {
      gsap.to(part, {
        y: 'random(-40, 40)',
        x: 'random(-30, 30)',
        rotation: 'random(0, 360)',
        duration: `random(8, 14)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      });
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split title into words and characters for staggered reveal
  const titleWords = artistConfig.title.split(" ");

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center bg-canvas-light dark:bg-canvas-dark py-28 md:py-36 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Canvas Texture & Watercolor Spots */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30 dark:opacity-10">
        <div className="hero-particle absolute top-[20%] left-[12%] w-4 h-4 rounded-full bg-terracotta/40" />
        <div className="hero-particle absolute top-[65%] left-[6%] w-6 h-6 rounded-full bg-gold/30 blur-[0.5px]" />
        <div className="hero-particle absolute top-[12%] right-[22%] w-3 h-3 rounded-full bg-terracotta/50" />
        <div className="hero-particle absolute top-[75%] right-[32%] w-5 h-5 rounded-full bg-gold/40" />
        <div className="hero-particle absolute top-[35%] right-[50%] w-7 h-7 rounded-full bg-terracotta/25 blur-[1.5px]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold/10 dark:bg-gold/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-terracotta/5 dark:bg-terracotta/3 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left: Premium Editorial Title & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-terracotta dark:text-gold font-sans text-xs md:text-sm tracking-[0.35em] font-semibold uppercase">
              {artistConfig.subtitle}
            </span>
            <div className="h-[1px] w-12 bg-terracotta/40 dark:bg-gold/40" />
          </motion.div>
          
          {/* Awwwards-style staggered text reveal */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-wide leading-[1.1] mb-6 text-customText-light dark:text-customText-dark overflow-hidden">
            {titleWords.map((word, wIdx) => (
              <span key={`w-${wIdx}`} className="inline-block mr-3 md:mr-4 overflow-hidden py-1">
                {word.split("").map((char, cIdx) => (
                  <motion.span
                    key={`c-${cIdx}`}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.15 + (wIdx * 0.1) + (cIdx * 0.02)
                    }}
                    className="inline-block transform origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.7 }}
            className="font-sans text-sm md:text-base leading-relaxed opacity-75 max-w-lg mb-10 tracking-wide"
          >
            {artistConfig.tagline}
          </motion.p>
          
          {/* Micro-interaction CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection('mediums')}
              className="border border-terracotta dark:border-gold bg-terracotta dark:bg-gold text-white dark:text-black hover:bg-transparent hover:text-customText-light dark:hover:text-customText-dark font-sans text-[11px] tracking-[0.3em] uppercase py-4 px-9 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0"
            >
              Explore Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-terracotta/40 dark:border-gold/40 hover:border-terracotta dark:hover:border-gold hover:bg-terracotta/5 dark:hover:bg-gold/5 font-sans text-[11px] tracking-[0.3em] uppercase py-4 px-9 transition-all duration-300 font-semibold hover:translate-y-[-2px] active:translate-y-0"
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Right: Portrait with 3D Parallax Tilt Effect */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full max-w-[380px] aspect-[3/4] bg-paper-light dark:bg-paper-dark p-4 md:p-5 shadow-2xl border border-terracotta/15 dark:border-gold/15 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(184,107,75,0.15)] dark:hover:shadow-[0_20px_50px_rgba(201,168,106,0.08)] cursor-pointer"
          >
            {/* Museum Inner Frame Grid Lines */}
            <div className="absolute inset-2 md:inset-3 border border-terracotta/10 pointer-events-none" />
            <div className="absolute inset-3.5 md:inset-4.5 border border-gold/15 pointer-events-none" />
            
            <div className="w-full h-full overflow-hidden relative">
              <img
                src={profileImg}
                alt={artistConfig.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Floating Artwork Label */}
            <div className="absolute bottom-8 left-8 text-white z-10 font-serif">
              <p className="text-xl font-light tracking-wide">{artistConfig.name}</p>
              <p className="text-[9px] font-sans tracking-[0.22em] uppercase opacity-75 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
                BFA Exhibition, Delhi
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
