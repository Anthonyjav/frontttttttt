import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'sg-studio-backend.onrender.com',
      'res.cloudinary.com',
    ],
  },
   env: {
    NEXT_PUBLIC_API_URL: 'https://tu-backend-en-render.com/',
  },
};

export default nextConfig;
