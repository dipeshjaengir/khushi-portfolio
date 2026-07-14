import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Transition from '../components/Transition';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Philosophy from '../sections/Philosophy';
import ArtMediums from '../sections/ArtMediums';
import FeaturedGallery from '../sections/FeaturedGallery';
import Timeline from '../sections/Timeline';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Instagram from '../sections/Instagram';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();

  // Scroll handler for navigating back from deep subpages
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay scroll slightly to ensure page mounting has completed
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <Transition>
      <Helmet>
        <title>Khushi Choudhary | Professional Artist & Printmaker Portfolio</title>
        <meta name="description" content="Discover the museum-grade digital art gallery and portfolio of Khushi Choudhary, showcasing fine art, printmaking, ceramics, charcoal, and experimental mixed media." />
      </Helmet>

      {/* Hero Section */}
      <Hero />
      
      {/* Biography Section */}
      <About />
      
      {/* Artist Philosophy Quote */}
      <Philosophy />
      
      {/* Art Mediums Grid Cards */}
      <ArtMediums />
      
      {/* Selected Featured Artworks */}
      <FeaturedGallery />
      
      {/* Academic & Exhibit Timeline */}
      <Timeline />
      
      {/* Offered Services */}
      <Services />
      
      {/* Animated Creative Roadmap */}
      <Process />
      
      {/* Instagram Previews Grid */}
      <Instagram />
      
      {/* Animated Contact Panel */}
      <Contact />
    </Transition>
  );
};

export default Home;
