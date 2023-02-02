/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate_sitemap')
    }

    return config
  },
}

module.exports = nextConfig
