/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse', 'sharp'],
  },
  api: {
    bodyParser: false,
  },
}

module.exports = nextConfig
