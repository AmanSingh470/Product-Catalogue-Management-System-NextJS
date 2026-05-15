const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: new URL(process.env.NEXT_PUBLIC_BACKEND_URL!).protocol.slice(0, -1),
        hostname: new URL(process.env.NEXT_PUBLIC_BACKEND_URL!).hostname ,      
        port: new URL(process.env.NEXT_PUBLIC_BACKEND_URL!).port,
        pathname: "/storage/**",
      },
    ],
  },
  allowedDevOrigins: ["10.250.32.47"],
};

module.exports = nextConfig;
