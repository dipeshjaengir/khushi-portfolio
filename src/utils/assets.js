import { generateArtworkPlaceholder } from './placeholders';

// Vite eager glob imports for artwork and profile assets
const artworkImages = import.meta.glob('/src/assets/artworks/**/*.{jpg,jpeg,png,webp,svg,JPG}', { eager: true });
const profileImages = import.meta.glob('/src/assets/profile/**/*.{jpg,jpeg,png,webp,svg,JPG}', { eager: true });

/**
 * Resolves artwork image path using Vite dynamic globbing.
 * Falls back to an elegant SVG placeholder if the file does not exist.
 * 
 * @param {string} path - The path specified in the artwork object.
 * @param {string} title - The title of the artwork (for fallback).
 * @param {string} category - The category of the artwork (for fallback).
 * @returns {string} - The resolved image URL or data URI.
 */
export const getArtworkImage = (path, title = "Untitled", category = "Fine Art") => {
  // Clean path to match glob pattern formatting if needed
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const resolved = artworkImages[formattedPath];
  
  if (resolved) {
    return resolved.default || resolved;
  }
  
  // Return elegant SVG placeholder
  return generateArtworkPlaceholder(title, category);
};

/**
 * Resolves profile image path using Vite dynamic globbing.
 * 
 * @param {string} path - The path specified in the config object.
 * @returns {string} - The resolved image URL or the original local file link.
 */
export const getProfileImage = (path) => {
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const resolved = profileImages[formattedPath];
  
  if (resolved) {
    return resolved.default || resolved;
  }
  
  // Return direct path as fallback
  return path;
};
