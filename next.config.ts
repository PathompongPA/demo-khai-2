import type { NextConfig } from "next";
{
  /* <div className="">{item.id}</div> */
}

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pathompong.myddns.me",
        pathname: "/api/assets/**",
      },
    ],
  },
};

export default nextConfig;
