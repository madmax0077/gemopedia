import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Gemopedia handles analytics, cookies, and advertising data. The site does not require an account.",
  alternates: { canonical: "/privacy" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy policy"
      lede="Gemopedia is a public reference site. You can read it without creating an account, and we do not ask for your name to view a page."
    >
      <PolicySection title="Who this policy covers">
        <p>
          This policy applies to gemopedia.online. It describes the information that reaches us
          when you browse, and the information advertising and analytics partners may process when
          those tools are enabled. Questions go to{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="mailto:hello@gemopedia.dev">
            hello@gemopedia.dev
          </a>
          .
        </p>
      </PolicySection>
      <PolicySection title="Information we receive">
        <p>
          The hosting provider records standard server data such as IP address, browser type, the
          page requested, and the time of the request. That data is used to deliver the site and to
          detect abuse.
        </p>
        <p>
          If analytics is enabled, Google Analytics receives a cookie identifier, pages viewed,
          approximate location derived from the IP address, and device information. We use that to
          see which explanations are being read. We do not use it to build a profile for sale.
        </p>
        <p>
          Emails you send us contain whatever you include. We use them to answer you and to correct
          the site. We do not add you to a mailing list.
        </p>
      </PolicySection>
      <PolicySection title="Advertising">
        <p>
          Gemopedia intends to display ads through Google AdSense. When ads are active, Google and
          its advertising partners may use cookies and similar identifiers to show ads, to limit how
          often you see an ad, and to measure whether an ad was viewed. Google&apos;s use of
          advertising cookies is described by Google. You can control ad personalisation in{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="https://adssettings.google.com" rel="noreferrer">
            Google Ads Settings
          </a>{" "}
          and opt out of some third-party cookies at{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="https://www.aboutads.info/choices" rel="noreferrer">
            aboutads.info
          </a>
          .
        </p>
        <p>
          We do not sell personal information. We do not ask Google to share a visitor&apos;s name
          with us. Details of the cookies are in the{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/cookies">
            cookie policy
          </Link>
          .
        </p>
      </PolicySection>
      <PolicySection title="Children">
        <p>
          Gemopedia is a general-audience reference. It is not directed at children under 13, and
          we do not knowingly collect personal information from children.
        </p>
      </PolicySection>
      <PolicySection title="How long data is kept">
        <p>
          Analytics and advertising partners keep data under their own retention settings. Email we
          receive is kept long enough to handle the correction or question, then deleted when it is
          no longer needed.
        </p>
      </PolicySection>
      <PolicySection title="Your choices">
        <p>
          You can block cookies in your browser. Blocking them does not stop you from reading the
          encyclopedia. You can also use the advertising controls linked above. To ask what this
          policy means for a message you sent us, use the contact address.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
