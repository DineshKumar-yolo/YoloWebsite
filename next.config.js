/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    // domains: ['user-data-images.s3.ap-south-1.amazonaws.com', 'example.com', 'ibb.co', 'user-data-images.s3.amazonaws.com', 'storage.googleapis.com'],
  },
}
output: "export",
  module.exports = nextConfig
