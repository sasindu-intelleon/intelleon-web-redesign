/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Static export වලදී Next.js image optimization පහසුකම නැති නිසා මෙය අත්‍යවශ්‍යයි
  },
};

module.exports = nextConfig;
