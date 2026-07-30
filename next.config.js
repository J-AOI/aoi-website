/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/insights/:slug",
        destination: "/research/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
