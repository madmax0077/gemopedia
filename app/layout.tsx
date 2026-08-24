import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gemopedia — Every game. Explained.",
    template: "%s | Gemopedia",
  },
  description:
    "The visual encyclopedia of the world's sports and games. Rules, scoring, diagrams and animations for cricket, football, kabaddi, sumo, chess, F1, hurling, sepak takraw, buzkashi and more — free, ad-free, and made to be understood.",
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
      "A visual encyclopedia of the world's sports and games. Free. Ad-free. Sourced.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Gemopedia — Every game. Explained.",
    description: "A visual encyclopedia of the world's sports and games.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-white text-ink-900 antialiased dark:bg-ink-950 dark:text-ink-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
