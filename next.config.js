/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://webmail.intelleon.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;