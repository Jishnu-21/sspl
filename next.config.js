/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // optional if you are running on this port
        pathname: '/uploads/**',
      },
    ],
  },
  // Explicitly expose environment variables to the browser and server
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
}

module.exports = nextConfig
