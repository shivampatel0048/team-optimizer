import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com'], // Add github.com to allowed image domains
  },
};

export default nextConfig;
