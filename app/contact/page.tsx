import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Contact Gemopedia",
  description:
    "Contact the Gemopedia editors to report an error, ask about a page, or write about privacy and advertising.",
  alternates: { canonical: "/contact" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function ContactPage() {
  return (
    <PolicyPage
      title="Contact"
      lede="Gemopedia does not use accounts or a contact form. Email is the way to reach the editors."
    >
      <PolicySection title="Email">
        <p>
          Write to{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="mailto:hello@gemopedia.dev">
            hello@gemopedia.dev
          </a>
          . Include the page address and, for a correction, the sentence you think is wrong and the
          source you are using.
        </p>
      </PolicySection>
      <PolicySection title="What to write about">
        <p>Use that address for factual corrections, broken links, privacy questions, and advertising questions.</p>
        <p>
          We read mail as editors, not as a support desk for a sport&apos;s governing body. Questions
          about eligibility, tickets, or official results belong with that sport&apos;s own organisation.
        </p>
      </PolicySection>
      <PolicySection title="What we cannot do by email">
        <p>
          We cannot place a bet, cash out winnings, or connect you with a gambling site. We also
          cannot promise a reply the same day. Messages about privacy are handled under the{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/privacy">
            privacy policy
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
