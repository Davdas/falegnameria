/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["thumbs.dreamstime.com", "images.prismic.io"],
  },
};

module.exports = nextConfig;
