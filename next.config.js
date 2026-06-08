/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoBasePath = '/Acculeap-website-v.0.02'

const nextConfig = {
  // Static export only for production builds — never during `next dev`
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  ...(isGithubPages ? { basePath: repoBasePath, assetPrefix: repoBasePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : '',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
