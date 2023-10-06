/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_OPEN_IA_KEY: process.env.NEXT_OPEN_IA_KEY,
    NEXT_COHERE_IA_KEY: process.env.NEXT_COHERE_IA_KEY,
  },
};

module.exports = nextConfig;
