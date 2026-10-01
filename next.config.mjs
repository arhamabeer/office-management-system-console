/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ems/config', '@ems/types', '@ems/validation', '@ems/api-client'],
};

export default nextConfig;
