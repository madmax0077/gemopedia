import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for using Gemopedia, including how the explanations may be read and what the site does not provide.",
  alternates: { canonical: "/terms" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of use"
      lede="By using Gemopedia you agree to these terms. If you do not agree, do not use the site."
    >
      <PolicySection title="The service">
        <p>
          Gemopedia publishes explanations of sports and games. The text is for general information.
          It is not an official rulebook, coaching certificate, legal opinion, or betting advice.
          Rules change. Confirm anything that matters for a competition with the governing body.
        </p>
      </PolicySection>
      <PolicySection title="Acceptable use">
        <p>
          You may read the site and share links to it. You may not copy the articles wholesale onto
          another site, scrape the catalog to republish it, or interfere with the service. Names
          and logos of sports, leagues, and games belong to their owners. Our use of a name is to
          identify the game being explained.
        </p>
      </PolicySection>
      <PolicySection title="No gambling service">
        <p>
          Pages about casino games, card games, or sports that people sometimes bet on are
          educational. Gemopedia does not offer real-money gambling, does not accept wagers, and
          does not broker accounts with betting operators.
        </p>
      </PolicySection>
      <PolicySection title="Advertising">
        <p>
          Pages may show third-party ads. An ad is not an endorsement of the advertiser, and an
          advertiser does not review the rules on the page. The{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/advertising">
            advertising disclosure
          </Link>{" "}
          explains how ads are handled.
        </p>
      </PolicySection>
      <PolicySection title="Liability">
        <p>
          The site is provided as available. We do not warrant that every sentence is complete or
          current. To the extent the law allows, we are not liable for decisions you make from an
          explanation, including training, competition, or wagering decisions.
        </p>
      </PolicySection>
      <PolicySection title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="mailto:hello@gemopedia.dev">
            hello@gemopedia.dev
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
