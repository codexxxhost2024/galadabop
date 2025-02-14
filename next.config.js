/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Improves debugging and performance
  swcMinify: true, // Enables SWC compiler for faster builds
  experimental: {
    appDir: true, // Enables Next.js 13 App Router
  },
  images: {
    domains: [
      "res.cloudinary.com", // Cloudinary (Storage)
      "images.unsplash.com", // High-quality Unsplash images
      "cdn.pixabay.com", // Pixabay free images
      "clerk.dev", // Clerk Authentication
      "images.clerk.dev", // Clerk profile images
    ],
  },
  compiler: {
    styledComponents: true, // Enables better performance for styled-components
  },
  env: {
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API, // Clerk API Key
    CLERK_BACKEND_API: process.env.CLERK_BACKEND_API, // Clerk Backend Key
    DATABASE_URL: process.env.DATABASE_URL, // Vercel PostgreSQL Database URL
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Cloudinary Cloud Name
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET, // Cloudinary Upload Preset
  },
};

module.exports = nextConfig;