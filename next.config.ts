import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any aliases needed for font loading
      },
    },
  },
};

export default nextConfig;
