import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Advertising disclosure",
  description:
    "How Gemopedia uses advertising, including Google AdSense, and what advertisers cannot buy.",
  alternates: { canonical: "/advertising" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function AdvertisingPage() {
  return (
    <PolicyPage
      title="Advertising"
      lede="Gemopedia is free to read. Advertising is how the site is funded once ads are enabled. Editorial explanations are not for sale."
    >
      <PolicySection title="Where ads come from">
        <p>
          Ads are planned through Google AdSense. Google chooses the ads and labels them as
          advertisements. Gemopedia does not write the ad copy and does not promise that an ad will
          relate to the sport on the page.
        </p>
        <p>
          We will not place ads in a way that imitates a rule, a score, or a navigation link.
          Clicking an ad is optional. Asking someone else to click ads, or clicking ads to support
          the site, is not allowed and can get the site removed from the ad program.
        </p>
      </PolicySection>
      <PolicySection title="What advertising does not change">
        <p>
          An advertiser cannot pay to have a rule rewritten, a sport promoted inside an article, or
          a competing game left out. Sponsored articles are not part of the catalog. If that ever
          changes, a sponsored page will be labeled as advertising before the first sentence.
        </p>
      </PolicySection>
      <PolicySection title="Restricted subjects">
        <p>
          Explanations of casino and wagering games stay educational. We do not accept ads that
          ask readers to place a bet with Gemopedia, because Gemopedia is not a gambling service.
          AdSense may also limit or refuse ads on those pages under Google&apos;s own rules.
        </p>
      </PolicySection>
      <PolicySection title="Cookies and privacy">
        <p>
          Ad measurement uses cookies described in the{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/cookies">
            cookie policy
          </Link>{" "}
          and the{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/privacy">
            privacy policy
          </Link>
          . You can opt out of personalized ads in Google&apos;s ad settings.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
