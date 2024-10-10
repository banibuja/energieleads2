// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_IPINFO_TOKEN: process.env.NEXT_PUBLIC_IPINFO_TOKEN,
    },
    images: {
      domains: ['framerusercontent.com'], // Add your domain here
      unoptimized: true, // Disable Image Optimization
    },
  };
  
  export default nextConfig;


  