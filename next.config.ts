const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_BACKEND_URL!).hostname ,      
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
