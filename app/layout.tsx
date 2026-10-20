import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gemopedia — Every game. Explained.",
    template: "%s | Gemopedia",
  },
  description:
    "The visual encyclopedia of the world's sports and games. Rules, scoring, diagrams and animations for cricket, football, kabaddi, sumo, chess, F1, hurling, sepak takraw, buzkashi and more — free to read and made to be understood.",
  applicationName: SITE_NAME,
  keywords: [
    "sports encyclopedia",
    "how to play cricket",
    "how does kabaddi work",
    "football offside rule",
    "chess rules",
    "sumo rules",
    "hurling rules",
    "traditional sports of India",
    "traditional sports of Japan",
    "buzkashi Afghanistan",
    "sepak takraw rules",
    "world sports",
    "sports of the world",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gemopedia — Every game. Explained.",
    description:
      "A visual encyclopedia of the world's sports and games. Free to read. Sourced.",
    // No `url` here: this block is inherited by every page that doesn't set
    // its own, so a hard-coded root URL made /sports, /about etc. all claim
    // the homepage as their og:url.
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemopedia — Every game. Explained.",
    description: "A visual encyclopedia of the world's sports and games.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: "reference",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07070b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "Gemopedia is a visual encyclopedia of the world's sports and games — rules, scoring, history, animations and diagrams.",
};

// Tells Google the site name to show above the title in results. There is no
// on-site search, so no SearchAction is declared.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Gemopedia sports and games encyclopedia",
  url: SITE_URL,
  inLanguage: "en",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Google AdSense site-verification / ad loader. A plain tag in <head>
            (not next/script) so Google's crawler sees it in the static HTML. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5084738834329206"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-ink-900 antialiased dark:bg-ink-950 dark:text-ink-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <CookieNotice />
      </body>
      {GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null}
    </html>
  );
}
