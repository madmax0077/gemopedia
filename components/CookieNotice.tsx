"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gemopedia-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // The notice can still be closed for this visit if storage is blocked.
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-ink-200 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-ink-900 sm:inset-x-6">
      <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
        Gemopedia uses cookies to measure how the site is used and, when advertising is turned on,
        to show and measure ads. Read the{" "}
        <Link href="/cookies" className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300">
          cookie policy
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="font-semibold text-brand-600 underline-offset-2 hover:underline dark:text-brand-300">
          privacy policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="mt-3 rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-ink-900"
      >
        Got it
      </button>
    </div>
  );
}
