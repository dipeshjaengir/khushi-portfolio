/**
 * Generates an elegant SVG museum-style gallery placeholder for artwork.
 * This is used when actual client artwork photos are not yet uploaded.
 * 
 * @param {string} title - The title of the artwork.
 * @param {string} category - The category of the artwork.
 * @returns {string} - Data URL string containing the SVG.
 */
export const generateArtworkPlaceholder = (title, category) => {
  const width = 800;
  const height = 1000; // Portrait grid orientation
  
  // Format category for presentation
  const formattedCategory = category.replace("-", " ").toUpperCase();

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8F6F2" />
      <stop offset="100%" stop-color="#EFE8DE" />
    </linearGradient>
    <filter id="canvasNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
      <feComposite operator="in" in2="SourceGraphic" />
    </filter>
  </defs>
  
  <!-- Canvas Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="#ffffff" filter="url(#canvasNoise)" opacity="0.4" />
  
  <!-- Outer Terracotta Border Frame -->
  <rect x="25" y="25" width="${width - 50}" height="${height - 50}" fill="none" stroke="#B86B4B" stroke-width="1.5" opacity="0.35" />
  
  <!-- Inner Gold Accent Border Frame -->
  <rect x="45" y="45" width="${width - 90}" height="${height - 90}" fill="none" stroke="#C9A86A" stroke-width="1" opacity="0.4" />
  
  <!-- Central Exhibition Title and Frame -->
  <g transform="translate(${width / 2}, ${height / 2})">
    <!-- Fine wireframe geometric art logo -->
    <circle cx="0" cy="-140" r="45" fill="none" stroke="#B86B4B" stroke-width="0.75" opacity="0.4" />
    <path d="M-65 -140 L65 -140" stroke="#B86B4B" stroke-width="0.75" opacity="0.4" />
    <path d="M0 -205 L0 -75" stroke="#B86B4B" stroke-width="0.75" opacity="0.4" />
    <polygon points="0,-185 45,-140 0,-95 -45,-140" fill="none" stroke="#C9A86A" stroke-width="0.75" opacity="0.4" />

    <!-- Typography -->
    <text text-anchor="middle" font-family="'Cormorant Garamond', 'Georgia', serif" font-size="34" font-weight="300" letter-spacing="1" fill="#1F1F1F" y="-20">${title}</text>
    <text text-anchor="middle" font-family="'Inter', 'Helvetica', sans-serif" font-size="13" letter-spacing="5" font-weight="600" fill="#B86B4B" y="25">${formattedCategory}</text>
    
    <path d="M-60 60 L60 60" stroke="#C9A86A" stroke-width="1.5" opacity="0.5" />
    
    <text text-anchor="middle" font-family="'Inter', sans-serif" font-size="11" letter-spacing="2" fill="#1F1F1F" opacity="0.4" y="95">COLLECTION PREVIEW</text>
    <text text-anchor="middle" font-family="'Cormorant Garamond', serif" font-size="16" font-style="italic" fill="#1F1F1F" opacity="0.7" y="125">Image Pending Client Upload</text>
  </g>
  
  <!-- Floating watermarks / details -->
  <text x="65" y="${height - 65}" font-family="'Inter', sans-serif" font-size="10" letter-spacing="3" fill="#1F1F1F" opacity="0.5">KHUSHI CHOUDHARY</text>
  <text x="${width - 65}" y="${height - 65}" text-anchor="end" font-family="'Inter', sans-serif" font-size="10" letter-spacing="2" fill="#1F1F1F" opacity="0.5">BFA PRINTMAKING</text>
</svg>
`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};
