/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A single sport page is cheap, but /sports, each /countries/[code], and each
  // /categories/[slug] page batch-fetches Wikipedia lead photos for every sport
  // in scope (up to ~1000). Even with the in-process memo cache and the 8-way
  // concurrency limiter in lib/heroImages.ts, a cold Vercel build can take
  // longer than the 60s default before all image fetches finish. Bumping the
  // per-page timeout gives the fetches room to complete without falsely
  // failing the build.
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
