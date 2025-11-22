import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options */
  experimental: {} as any // workaround to avoid TypeScript errors
};

export default nextConfig;
