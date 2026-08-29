import type { Sport } from "@/lib/types";

export const starfield: Sport = {
  id: "starfield",
  slug: "starfield",
  name: "Starfield",
  officialName: "Starfield",
  aliases: ["Starfield: Shattered Space"],
  shortDescription:
    "Open-world space RPG (Bethesda Game Studios + Xbox Game Studios, Sep 6, 2023 Xbox Series/PC) — 1,000+ procedurally-generated planets, first-person + third-person combat, ship-building. Bethesda's first new IP in 25 years. Post-launch DLC 'Shattered Space' (Sep 30, 2024).",
  longDescription:
    "Starfield is an open-world space role-playing game developed by Bethesda Game Studios + published by Xbox Game Studios — released September 6, 2023 for Xbox Series X|S and PC (Game Pass day one). Bethesda's first new IP in 25 years (since The Elder Scrolls: Arena preceded Fallout acquisition). Set in the year 2330 across 100+ star systems with 1,000+ procedurally-generated planets — combining hand-crafted major cities (New Atlantis, Akila, Neon) with procedural planetary exploration + resource gathering + outpost building + ship building/customisation. Player joins the Constellation faction investigating mysterious Artifacts. First-person + third-person combat with ballistic + energy + explosive weapons; ship space combat + boarding actions. Extensive skill tree (5 disciplines × 20 skills each) + digipick lockpicking mini-game. Mixed reception at launch — praised for scale + role-playing depth, criticised for loading screens + procedural repetition. 'Shattered Space' first major DLC released September 30, 2024. 15M+ players in first month via Game Pass.",
  category: "video-games",
  subCategory: "open-world space RPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Bethesda Game Studios Rockville, Maryland + Austin, Texas)",
  estimatedOrigin: "Released Sep 6, 2023 for Xbox Series + PC; 'Shattered Space' DLC Sep 30, 2024",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "Xbox Series X|S / PC", description: "Xbox exclusive; PC available on Steam + Microsoft Store. Not on PS5." },
    { name: "Game Pass subscription (optional)", description: "Included with Xbox Game Pass day one." },
    { name: "Xbox controller or M+KB", description: "PC supports both control schemes." },
  ],
  duration: { approximateMinutes: 30, structure: "Main story 30-40 hrs; 100% + all factions 100-150 hrs; procedural exploration = unlimited." },
  objective: "Investigate Constellation Artifacts; explore + colonise planets; build ships + outposts; complete faction storylines.",
  matchStructure: "Single-player open-world with main quest + 4 major factions (UC Vanguard, Freestar Rangers, Ryujin Industries, Crimson Fleet) + outpost building + ship customisation.",
  basicRules: [
    { title: "Main quest + 4 faction quests", body: "Constellation main quest + UC Vanguard + Freestar Rangers + Ryujin + Crimson Fleet — each ~10-15 hrs." },
    { title: "Ship-building + customisation", body: "Buy/build ships from modular components; combat + cargo tuning." },
    { title: "NG+ narrative twist", body: "New Game Plus reveals Starborn multiverse mechanic + expanded powers." },
  ],
  advancedRules: [
    { title: "Skill tree (5 disciplines × 20 skills)", body: "Physical, Social, Combat, Science, Tech — each with 20 skills unlockable via challenges." },
    { title: "Outpost mining automation", body: "Build outposts to auto-mine resources; supply cargo links between planets." },
  ],
  scoring: {
    summary: "Story progression + faction quests + outpost tier + ship class + NG+ counter.",
    winCondition: "Complete main story; optional NG+ resets progression but reveals multiverse layers.",
    breakdown: [{ action: "Main story completion", points: "Credits + NG+ unlock" }],
  },
  penalties: [
    { title: "Death (Game Over)", body: "Reload autosave; no permanent loss." },
    { title: "Crime + bounty", body: "Committing crimes triggers bounty; can pay off or evade to systems without contact." },
  ],
  positions: [{ name: "Player (custom character)", role: "Space explorer + Constellation member.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Xbox Game Studios", founded: 2019, headquarters: "Redmond, Washington, USA" },
    { name: "Bethesda Game Studios", founded: 2001, headquarters: "Rockville, Maryland, USA" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Starfield leaderboards", frequency: "ongoing", founded: 2023, region: "global (community)" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "AU", "JP", "BR"],
  famousAthletes: ["Community modding scene + speedrunners"],
  records: [
    { title: "Game Pass launch reach", holder: "Xbox Game Studios", value: "15+ million players in first month via Game Pass Day 1", year: 2023 },
    { title: "Bethesda's first new IP in 25 years", holder: "Bethesda Game Studios", value: "First new Bethesda-created IP since 1994 (Elder Scrolls: Arena)", year: 2023 },
    { title: "First major DLC — Shattered Space", holder: "Bethesda", value: "Released Sep 30, 2024; single hand-crafted planet with House Va'ruun storyline", year: 2024 },
  ],
  variants: ["starfield-base-2023", "starfield-shattered-space-dlc"],
  relatedSports: ["fallout-4", "elder-scrolls-skyrim", "elite-dangerous", "no-mans-sky"],
  skills: ["gunplay", "ship building", "outpost management", "planet exploration"],
  strategies: [
    { title: "Persuasion social system", body: "Build Persuasion + Ryujin storyline for non-combat dialogue solutions." },
    { title: "NG+ Starborn build", body: "Complete main story then NG+ for Starborn powers + narrative variation." },
    { title: "Outpost economy loop", body: "Chain outposts on high-yield planets + cargo-link to trade hubs for endless credits." },
  ],
  terminology: [
    { term: "Constellation", meaning: "Player-joined exploration faction" },
    { term: "Artifact", meaning: "Mysterious alien object driving main quest" },
    { term: "Starborn", meaning: "NG+ character class + multiverse reveal" },
    { term: "Grav Drive", meaning: "Faster-than-light ship engine" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Main quest + New Atlantis intro", body: "Learn combat, boostpack, first Constellation Artifact." }] },
    { level: "intermediate", steps: [{ title: "Faction quests + ship-building", body: "UC Vanguard/Freestar/Ryujin/Crimson Fleet + custom ship construction." }] },
    { level: "advanced", steps: [{ title: "NG+ + Starborn + Shattered Space", body: "Multiverse mechanic, all NG+ variations, DLC House Va'ruun content." }] },
  ],
  faq: [
    { question: "Is Starfield on PS5?", answer: "No — Xbox Series X|S + PC only (Microsoft acquired Bethesda; exclusive to Xbox ecosystem)." },
    { question: "How is 'Shattered Space' different from main game?", answer: "Shattered Space DLC is hand-crafted single planet (no procedural generation) featuring House Va'ruun storyline — a departure from base game's procedural approach." },
  ],
  wikipediaTitle: "Starfield (video game)",
  sources: [{ label: "Wikipedia — Starfield (video game)", url: "https://en.wikipedia.org/wiki/Starfield_(video_game)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default starfield;
