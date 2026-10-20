import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Cookies used by Gemopedia for site preferences, analytics, and advertising measurement.",
  alternates: { canonical: "/cookies" },
};

export const dynamic = "force-static";
export const revalidate = false;

export default function CookiesPage() {
  return (
    <PolicyPage
      title="Cookie policy"
      lede="Cookies are small text files stored by your browser. Gemopedia uses them to remember a notice you dismissed and to measure traffic. Advertising cookies are used only when ads are enabled."
    >
      <PolicySection title="Cookies we set">
        <p>
          A cookie notice choice may be stored in your browser as{" "}
          <span className="font-semibold">gemopedia-cookie-notice</span> so the notice does not
          appear on every page. That value stays on your device and is not sent to us as an account
          record.
        </p>
      </PolicySection>
      <PolicySection title="Analytics cookies">
        <p>
          When Google Analytics is enabled, Google sets cookies such as <span className="font-semibold">_ga</span>{" "}
          to distinguish browsers and to count visits. The measurement is used to see which sport
          pages are read. You can block these cookies in your browser or use Google&apos;s own
          analytics opt-out tools.
        </p>
      </PolicySection>
      <PolicySection title="Advertising cookies">
        <p>
          When Google AdSense is enabled, Google may set cookies such as those used by DoubleClick
          to choose and measure ads. Those cookies can remember that you visited this site. They are
          third-party cookies controlled by Google, not by a Gemopedia account. Manage them in{" "}
          <a className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="https://adssettings.google.com" rel="noreferrer">
            Google Ads Settings
          </a>
          .
        </p>
      </PolicySection>
      <PolicySection title="How to refuse cookies">
        <p>
          Browser settings can block or delete cookies. Blocking them may stop measurement and ads
          from working as the vendor designed, and the encyclopedia pages will still load. More on
          the data those cookies support is in the{" "}
          <Link className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300" href="/privacy">
            privacy policy
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
