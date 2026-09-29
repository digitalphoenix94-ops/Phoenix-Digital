import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the whole site to /out,
  // which can be uploaded to Vercel, Netlify or any cPanel/shared host.
  output: "export",
  // Each page is written as /page/index.html so plain Apache hosting resolves /page/ URLs.
  trailingSlash: true,
  images: {
    // No image server on static hosting. Images in /public are pre-sized (see scripts/process-brand.mjs).
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
