import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import MainLayout from './layouts/MainLayout';
import { routesConfig } from './routes';

/**
 * Scroll Progress indicator bar.
 */
const ScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      const bar = document.getElementById('global-scroll-progress');
      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="global-scroll-progress" className="scroll-progress" aria-hidden="true" />;
};

/**
 * Reset scroll context on page navigation.
 */
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {/* Animated Entrance Loader Screen */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          {/* Scroll progress tracking */}
          <ScrollProgress />
          
          {/* Scroll reset helper */}
          <ScrollRestoration />
          
          {/* Dynamic route templates */}
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center font-sans text-xs tracking-[0.3em] uppercase text-terracotta dark:text-gold bg-canvas-light dark:bg-canvas-dark transition-colors duration-300">
              Gathering Gallery Exhibits...
            </div>
          }>
            <Routes>
              <Route element={<MainLayout />}>
                {routesConfig.map((route, idx) => (
                  <Route key={`route-${idx}`} path={route.path} element={route.element} />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </SmoothScroll>
      )}
    </BrowserRouter>
  );
}

export default App;
