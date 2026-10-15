import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/disclosures",
        destination: "/paid",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
