/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This project is intended for a GitHub Pages repository named "mk-pov-next".
  // If you choose another repository name, update basePath and assetPrefix below.
  basePath: '/mk-pov-next',
  assetPrefix: '/mk-pov-next/',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
