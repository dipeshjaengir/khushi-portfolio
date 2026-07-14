import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import WatercolorBg from '../components/WatercolorBg';
import FloatingWidgets from '../components/FloatingWidgets';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-canvas-light text-customText-light dark:bg-canvas-dark dark:text-customText-dark transition-colors duration-300 paper-texture overflow-hidden flex flex-col justify-between">
      {/* Background watercolor gradients */}
      <WatercolorBg />
      
      {/* Custom dynamic paintbrush cursor */}
      <CustomCursor />
      
      {/* Premium top navigation */}
      <Navbar />
      
      {/* Dynamic page content */}
      <main className="relative z-10 w-full flex-grow">
        <Outlet />
      </main>
      
      {/* Luxury footer */}
      <Footer />
      
      {/* Interactive floating widgets (WhatsApp, Scroll-To-Top) */}
      <FloatingWidgets />
    </div>
  );
};

export default MainLayout;
