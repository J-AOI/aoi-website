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
      {
        source: "/frameworks/fw-001-runtime-domain",
        destination: "/frameworks/fw-001-runtime-governance-domain",
        permanent: true,
      },
      {
        source: "/frameworks/fw-003-ai-security-playbook",
        destination: "/frameworks/fw-003-authority-propagation",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
