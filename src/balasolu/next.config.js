/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.licdn.com',
        },
      ],
  }
}

module.exports = nextConfig
