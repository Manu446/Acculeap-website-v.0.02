/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export only for production builds — never during `next dev`
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
