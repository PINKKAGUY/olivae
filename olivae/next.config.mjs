/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from /<repo>, so a base path is required.
// Enabled only in CI (GITHUB_PAGES=true) so local dev/build stay at the root.
const isPages = process.env.GITHUB_PAGES === 'true';
const repo = 'olivae';

const nextConfig = {
  output: 'export',
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
