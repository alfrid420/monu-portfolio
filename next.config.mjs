/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/monu-mishra-portfolio.html',
        },
      ],
    };
  },
};

export default nextConfig;
