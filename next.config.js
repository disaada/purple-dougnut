const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
