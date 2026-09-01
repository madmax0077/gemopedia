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

  /**
   * Aggressive shared-cache directives so Vercel's regional CDN edge caches
   * hold pages for effectively "forever" and only revalidate in the
   * background. This drastically reduces cache-miss requests that fall
   * through to durable ISR storage (which are billed as ISR Reads at
   * 8 KB/unit — a ~200 KB sport page costs ~25 units per miss).
   *
   * All routes here are fully-static SSG (see `export const dynamic =
   * "force-static"` in each app/**\/page.tsx). Content only changes on
   * redeploy, so caching them for a year is safe — a new deploy busts the
   * cache automatically via the Next.js build ID in the asset URLs.
   *
   * Headers explained:
   * - `public`                     — CDN + browsers may cache.
   * - `max-age=0`                  — browsers always revalidate (we still
   *                                  want fresh HTML for the user).
   * - `s-maxage=31536000`          — shared cache (Vercel CDN) holds for
   *                                  up to 1 year.
   * - `stale-while-revalidate=86400` — serve stale for up to 1 day while
   *                                  revalidating in the background.
   */
  async headers() {
    const longEdgeCache = {
      key: "Cache-Control",
      value:
        "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400, must-revalidate",
    };
    return [
      // All app-router pages (excluding _next assets which Vercel already
      // handles with immutable caching via content-hashed filenames).
      { source: "/", headers: [longEdgeCache] },
      { source: "/sports", headers: [longEdgeCache] },
      { source: "/sports/:slug*", headers: [longEdgeCache] },
      { source: "/categories", headers: [longEdgeCache] },
      { source: "/categories/:slug*", headers: [longEdgeCache] },
      { source: "/countries", headers: [longEdgeCache] },
      { source: "/countries/:code*", headers: [longEdgeCache] },
      { source: "/compare", headers: [longEdgeCache] },
      { source: "/compare/:pair*", headers: [longEdgeCache] },
      { source: "/learn", headers: [longEdgeCache] },
      { source: "/sitemap.xml", headers: [longEdgeCache] },
      { source: "/robots.txt", headers: [longEdgeCache] },
    ];
  },
};

export default nextConfig;
