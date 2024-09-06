/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "twinstar-bosskills.vercel.app" },
      { hostname: "flowbite.com" },
    ],
  },
};

module.exports = nextConfig;
