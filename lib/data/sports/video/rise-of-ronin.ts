import type { Sport } from "@/lib/types";

export const riseOfRonin: Sport = {
  id: "rise-of-ronin",
  slug: "rise-of-ronin",
  name: "Rise of the Ronin",
  officialName: "Rise of the Ronin",
  aliases: ["ROTR", "Rise of Ronin"],
  shortDescription:
    "Team Ninja open-world action-RPG (Mar 22, 2024 PS5 exclusive; PC Oct 2025) — Boshin War-era 1860s Japan; masterless samurai (ronin) fighter with 4-weapon combat + faction system + open Yokohama/Edo/Kyoto worlds.",
  longDescription:
    "Rise of the Ronin is an open-world action-RPG developed by Team Ninja (Koei Tecmo) and published by Sony Interactive Entertainment, released March 22, 2024 as a PS5 timed exclusive; PC (Steam) version released October 2025. Set in 1860s Bakumatsu-era Japan during the Boshin War (period of transformation from feudal Tokugawa shogunate to modern Meiji era, coinciding with the opening of Japan to Western influence). Player creates a customizable ronin (masterless samurai) fighter navigating the political divide between pro-shogunate + anti-shogunate factions across three open-world regions: Yokohama (Western trading port), Edo (later Tokyo), Kyoto (imperial capital). Real historical figures interact with the player-character: Ryōma Sakamoto, Katsu Kaishū, Ii Naosuke, William Adams, John Rutherford Alcock. Combat system: choose 4 weapon styles from ~10 options (katana, dual katana, spear, bayonet-rifle, glaive, etc.), each with 3 fighting stances (Ten/Chi/Jin) and counter-parry (Counterspark). Grappling hook + horse traversal + team-based mission structure allowing solo or 3-player co-op. Team Ninja's first-ever open-world game. Received strong reviews (79 Metacritic) though lacking Nioh's punishing difficulty rep.",
  category: "video-games",
  subCategory: "open-world action-RPG (historical samurai)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Team Ninja / Koei Tecmo)",
  estimatedOrigin: "Announced Sep 2022; PS5 launch Mar 22, 2024; PC release Oct 2025",
  players: { min: 1, max: 3, note: "Single-player primary; up to 3-player co-op missions." },
  equipment: [{ name: "PS5 (launch platform)", description: "PS5 timed-exclusive at launch." }, { name: "PC (Steam) — Oct 2025", description: "PC release October 2025 (about 18 months after launch)." }, { name: "Standard controller", description: "Complex counter-parry timing benefits from controller." }],
  duration: { approximateMinutes: 3000, structure: "Main story ~40-50 hrs; 100% completion 80-100 hrs." },
  objective: "Navigate Bakumatsu Japan political turmoil + master 4 weapon styles across open-world Yokohama/Edo/Kyoto.",
  matchStructure: "Single-player primary; co-op mission structure for 3-player group play.",
  basicRules: [
    { title: "4 weapon slots + 3 stances each", body: "Customize 4 weapon loadout from ~10 options; each weapon has 3 stances." },
    { title: "Counterspark (parry mechanic)", body: "Signature timed parry; successful parry chains reset stamina + counter damage." },
    { title: "Faction alignment (Pro-Shogunate vs Anti-Shogunate)", body: "Choices align with either faction; affects story branches + character interactions." },
    { title: "Historical figures + Bond system", body: "Build Bonds with historical figures; higher bonds unlock unique abilities + side missions." },
  ],
  advancedRules: [
    { title: "Team-based mission structure", body: "Missions can be tackled solo or with 3-player co-op; scaling difficulty." },
    { title: "Grappling hook traversal", body: "Vertical mobility across urban environments." },
    { title: "Photo mode + character customization", body: "Extensive character customization (male/female, all body types)." },
  ],
  scoring: { summary: "Story progression + character level + Bond levels; no PvP." },
  positions: [{ name: "Blade Twin (protagonist)", role: "Player-created ronin; customizable." }],
  governingBodies: [{ name: "Team Ninja (Koei Tecmo)", founded: 1995, headquarters: "Yokohama, Japan" }, { name: "Sony Interactive Entertainment (publisher)", founded: 1993, headquarters: "Tokyo, Japan" }],
  majorCompetitions: [{ name: "Speedrun.com Rise of the Ronin", frequency: "ongoing", founded: 2024, region: "worldwide" }],
  famousAthletes: ["Yosuke Hayashi (Team Ninja head)", "Fumihiko Yasuda (director)"],
  records: [
    { title: "Team Ninja's first open-world game", holder: "Team Ninja / Koei Tecmo", value: "Rise of the Ronin — Team Ninja's first-ever open-world game (previously Nioh + Ninja Gaiden linear)", year: 2024 },
    { title: "PS5 launch Mar 22, 2024", holder: "Sony Interactive Entertainment", value: "PS5 exclusive launch March 22, 2024; PC release October 2025", year: 2024 },
  ],
  variants: ["rise-of-ronin-standard", "rise-of-ronin-digital-deluxe"],
  relatedSports: ["ghost-of-tsushima", "nioh-2", "sekiro-shadows-die-twice", "assassins-creed-shadows"],
  skills: ["counterspark timing", "weapon style mastery", "open-world exploration", "bond-building narrative choice"],
  wikipediaTitle: "Rise of the Ronin",
  sources: [{ label: "Wikipedia — Rise of the Ronin", url: "https://en.wikipedia.org/wiki/Rise_of_the_Ronin", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default riseOfRonin;
