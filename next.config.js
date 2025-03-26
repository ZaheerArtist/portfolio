/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Add trailing slashes to URLs
  trailingSlash: true,
  // Disable React StrictMode for smoother animations
  reactStrictMode: false,
  // Configure base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // Add asset prefix for production mode
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

module.exports = nextConfig; 