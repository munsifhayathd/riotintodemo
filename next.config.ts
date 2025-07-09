import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Environment variables for development
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'XuREoqt86ohVc3OfsEGli9vdJGp79PBbMPIpToRiXJs=',
  },
  
  // Deployment optimizations
  eslint: {
    // Allow production builds to complete even with ESLint errors
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // Allow production builds to complete even with TypeScript errors
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
  
  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Bundle analyzer (optional, for debugging)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      );
      return config;
    },
  }),
};

export default nextConfig;
