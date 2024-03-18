/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['user-data-images.s3.ap-south-1.amazonaws.com', 'example.com', 'ibb.co'],
    },
}
output: "export",
module.exports = nextConfig
