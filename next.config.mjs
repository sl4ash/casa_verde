// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  env: {
    API_KEY: process.env.EMAIL_APY_KEY
  }
};

export default nextConfig;
