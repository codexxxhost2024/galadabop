/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "images.clerk.dev",
      "clerk.dev",
      "images.unsplash.com",
      "cdn.pixabay.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API || "",
    CLERK_BACKEND_API: process.env.CLERK_BACKEND_API || "",
    DATABASE_URL: process.env.DATABASE_URL || "",
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "GalaBooking",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://gala.vercel.app",
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV || "production",
    JWT_SECRET: process.env.JWT_SECRET || "default_secret",
  },
};

module.exports = nextConfig;