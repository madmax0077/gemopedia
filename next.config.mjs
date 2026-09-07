/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Ship the whole site as plain static HTML.
   *
   * Every route here is already fully prerendered (`export const dynamic =
   * "force-static"` plus `dynamicParams = false` on the dynamic segments) and
   * the content only changes on redeploy. Despite that, App Router SSG pages
   * live in Vercel's *durable ISR store*: any regional CDN miss falls through
   * to that store and is billed as an ISR Read in 8 KB units. With ~1500 sport
   * pages plus country and category listings, one crawler sweep per day was
   * enough to blow through the Hobby plan's 1M read units.
   *
   * A static export sidesteps the ISR layer entirely — the build emits real
   * .html files that Vercel serves as CDN assets, which are counted as (much
   * more generous) Edge Requests instead. It also removes the serverless
   * function from the request path, so Fast Origin Transfer drops to zero.
   *
   * Constraints this imposes, all of which the app already satisfies:
   * no route handlers, no middleware, no server actions, no `searchParams`,
   * no `cookies()`/`headers()`, and no on-demand revalidation. Cache-Control
   * lives in vercel.json because `headers()` is unsupported in export mode.
   */
  output: "export",

  // `next/image` isn't used anywhere (hero photos are plain <img> tags
  // pointing at upload.wikimedia.org), but the optimizer endpoint is a
  // server route, so disable it explicitly to keep the export valid.
  images: { unoptimized: true },

  // A single sport page is cheap, but /sports, each /countries/[code], and each
  // /categories/[slug] page batch-fetches Wikipedia lead photos for every sport
  // it renders. Even with the in-process memo cache and the 8-way concurrency
  // limiter in lib/heroImages.ts, a cold build can take longer than the 60s
  // default before all image fetches finish. Bumping the per-page timeout
  // gives the fetches room to complete without falsely failing the build.
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
