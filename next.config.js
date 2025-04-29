/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  reactStrictMode: true,
   trailingSlash: true,

}

module.exports = nextConfig
