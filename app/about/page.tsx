import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "About Gemopedia",
  description:
    "Gemopedia is an independent encyclopedia of sports and games. Learn who writes it, how entries are checked, and how the site is funded.",
  alternates: { canonical: "/about" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function AboutPage() {
  return (
    <PolicyPage
      title="About Gemopedia"
      lede="Gemopedia explains how sports and games are played: the rules, the scoring, the equipment, and the words people use for them."
    >
      <PolicySection title="What this site is">
        <p>
          Gemopedia is an independent reference site. Each strong entry is written as an original
          explanation, not copied from a rulebook or from another website. Pages name the sport,
          where it comes from, how a match or a session works, and what a beginner needs to know.
        </p>
        <p>
          The catalog also keeps shorter notes for games we have not finished writing. Those notes
          stay available to readers, but they are marked so search engines do not treat them as
          finished articles.
        </p>
      </PolicySection>
      <PolicySection title="How entries are prepared">
        <p>
          Editors start from official rules, governing-body descriptions, and published references,
          then rewrite the explanation in plain language. A page is not treated as finished until it
          has a real description, a rules section, scoring, and supporting material such as terms,
          strategy, questions, or a learning path.
        </p>
        <p>
          Gemopedia is not the official publisher of any sport. If a rule here disagrees with the
          current laws of the game, the governing body&apos;s rulebook wins. Send corrections to{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="mailto:hello@gemopedia.dev">
            hello@gemopedia.dev
          </a>
          .
        </p>
      </PolicySection>
      <PolicySection title="How the site is funded">
        <p>
          Reading Gemopedia is free. The site is preparing to show advertising through Google
          AdSense so the encyclopedia can keep being written and hosted. Ads, when they appear,
          will be labeled by Google and will sit around the article, not inside the rules as if
          they were part of the explanation.
        </p>
        <p>
          We do not sell placements that pretend to be encyclopedia entries, and we do not take
          payment to change a sport&apos;s rules or score. See the{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/advertising">
            advertising disclosure
          </Link>
          .
        </p>
      </PolicySection>
      <PolicySection title="Games that involve wagering">
        <p>
          Some entries explain casino, card, and betting-themed games so a reader can understand
          the rules. Gemopedia does not take bets, hold player funds, or link to gambling
          operators. Those pages are reference, not an invitation to gamble.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
