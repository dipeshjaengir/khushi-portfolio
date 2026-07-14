import { lazy } from 'react';

// Lazy loading pages for optimized performance (code splitting)
export const Home = lazy(() => import('../pages/Home'));
export const Collection = lazy(() => import('../pages/Collection'));
export const Artwork = lazy(() => import('../pages/Artwork'));
export const NotFound = lazy(() => import('../pages/NotFound'));

export const routesConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/collection/:category',
    element: <Collection />
  },
  {
    path: '/artwork/:id',
    element: <Artwork />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
