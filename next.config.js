/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.petz.com.br',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },

}

module.exports = nextConfig
