import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages: no Node.js image optimization runtime at edge
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
