const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/intelleon-web-redesign' : '',
  assetPrefix: isProd ? '/intelleon-web-redesign' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;