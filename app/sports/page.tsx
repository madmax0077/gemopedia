import type { Metadata } from "next";
import { getAllSports } from "@/lib/data";
import { SportsDirectory } from "@/components/SportsDirectory";

export const metadata: Metadata = {
  title: "All sports — filter by country, category, format",
  description:
    "Browse every sport in Gemopedia — filter by country, category, team or individual, Olympic status and more.",
  alternates: { canonical: "/sports" },
};

export default function SportsPage() {
  const sports = getAllSports();
  return (
    <div className="container-page pb-20 pt-6 sm:pt-10">
      <header className="mb-6">
        <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          Every sport in Gemopedia
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          A living catalog of the world's sports and games — from the global giants to the
          extraordinary regional traditions. Filter by country, category, or format and pick a
          sport to see its rules, scoring, diagrams and animations.
        </p>
      </header>
      <SportsDirectory sports={sports} />
    </div>
  );
}
