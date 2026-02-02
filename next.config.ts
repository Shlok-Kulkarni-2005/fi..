import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Allow production builds to succeed even if there are ESLint
   * violations. This is useful when deploying to Vercel and you
   * have existing `no-explicit-any`, `no-unused-vars`, etc.
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /**
   * (Optional) If you ever hit TypeScript compile errors during
   * `next build`, you can also flip this to `true`. For now we
   * leave it at the default (false).
   */
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
