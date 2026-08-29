import type { Sport } from "@/lib/types";

export const dragonQuestXi: Sport = {
  id: "dragon-quest-xi",
  slug: "dragon-quest-xi",
  name: "Dragon Quest XI: Echoes of an Elusive Age",
  officialName: "Dragon Quest XI S: Echoes of an Elusive Age — Definitive Edition",
  aliases: ["DQ11", "DQXI", "ドラゴンクエストXI 過ぎ去りし時を求めて"],
  shortDescription:
    "Traditional JRPG (Square Enix, PS4/3DS 2017; Switch S 2019; PC/Xbox/PS5 2020) — 11th mainline Dragon Quest set in Erdrea; Luminary quest to save world from Mordegon. Series-signature Akira Toriyama character design + Koichi Sugiyama score. Definitive Edition adds 2D + orchestral audio.",
  longDescription:
    "Dragon Quest XI: Echoes of an Elusive Age is the 11th mainline entry in Square Enix's Dragon Quest series — originally released 2017 for PS4 (Japan-only for 6 months, then localised globally September 2018) + Nintendo 3DS (Japan-exclusive with dual-screen 2D+3D mode). 'Definitive Edition' (DQ11 S) released September 2019 for Nintendo Switch with new orchestral audio, 2D visual toggle, expanded storylines for each party member, and new class-changing mechanics. Ported to PS4/PS5/Xbox One/Xbox Series/PC December 2020. Set in the land of Erdrea, player controls the Luminary — reincarnated hero prophesied to defeat the Lord of Shadows Mordegon. Signature Akira Toriyama character design (Dragon Ball creator, veteran Dragon Quest artist), Koichi Sugiyama orchestral score (until his 2021 passing). Turn-based combat with 6-character party, character-specific skill trees, and forge crafting system. 6M+ units sold across all versions.",
  category: "video-games",
  subCategory: "traditional JRPG",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Square Enix Tokyo)",
  estimatedOrigin: "PS4/3DS 2017 (Japan) → Sep 2018 (West); Switch Definitive Sep 2019; multi-platform Dec 2020",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS4/PS5, Xbox One/Series, PC, Switch, 3DS (JP)", description: "Multi-platform Definitive Edition." },
    { name: "Standard controller or M+KB (PC)", description: "Turn-based combat playable with any input." },
  ],
  duration: { approximateMinutes: 60, structure: "Main story ~60 hrs; postgame ~40 hrs; 100% ~130 hrs." },
  objective: "Guide the Luminary + party to defeat Mordegon + save Erdrea from the Lord of Shadows.",
  matchStructure: "Single-player turn-based JRPG with 6-character rotating party.",
  basicRules: [
    { title: "6-character party (4 active)", body: "Rotate 6 party members; 4 active in battle." },
    { title: "Turn-based combat with tension boost", body: "Enemies + allies act in speed-based turn order; Psyche Up boosts damage." },
    { title: "Character-specific skill panels", body: "Each character has multi-branch skill panel unlocked with skill points." },
  ],
  advancedRules: [
    { title: "Definitive Edition draconian mode", body: "Optional Draconian Quest settings (no armour, no shop, extra strong enemies) for challenge." },
    { title: "Zoom fast-travel + campsite forge", body: "Zoom teleports to visited locations; campsite forge for crafting/upgrading equipment." },
  ],
  scoring: {
    summary: "Story completion + postgame world save + party level ~99 + all skills unlocked + all quest completion.",
    winCondition: "Defeat Mordegon; postgame reveals additional storyline + Timewyrm true final boss.",
    breakdown: [{ action: "Main story completion", points: "Credits + postgame unlock" }],
  },
  penalties: [
    { title: "Party wipe (all HP 0)", body: "Lose half gold; respawn at last church." },
    { title: "Casino losses", body: "Casino chips lost — no gameplay penalty beyond." },
  ],
  positions: [{ name: "Luminary + party (Erik, Veronica, Serena, Sylvando, Rab, Jade, Hendrik)", role: "Main hero + 7 recruitable companions.", count: 4 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Square Enix Holdings", founded: 2003, headquarters: "Tokyo, Japan" },
    { name: "Armor Project (Yuji Horii)", founded: 1983, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com DQ11 leaderboards", frequency: "ongoing", founded: 2017, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "ES", "AU", "BR"],
  famousAthletes: ["Community speedrunners; DQ series voice cast + composers"],
  records: [
    { title: "Total sales as of 2024", holder: "Square Enix", value: "6+ million units across all versions", year: 2024 },
    { title: "Koichi Sugiyama final DQ score", holder: "Koichi Sugiyama (1931-2021)", value: "DQ11 was Sugiyama's last mainline DQ score before his 2021 passing", year: 2017 },
    { title: "Definitive Edition (Switch) enhancements", holder: "Square Enix", value: "Added 2D toggle + orchestral audio + expanded character storylines", year: 2019 },
  ],
  variants: ["dq11-ps4-original", "dq11-3ds-2d-3d", "dq11-s-definitive-edition"],
  relatedSports: ["dragon-quest-monsters", "final-fantasy-vii-rebirth", "persona-5"],
  skills: ["turn-based tactics", "party composition", "skill panel optimisation", "forge crafting"],
  strategies: [
    { title: "Psyche Up chain for boss burst", body: "Multiple Psyche Ups (up to 100 tension) unleash massive damage on turn." },
    { title: "Weakness targeting per element", body: "Erdreans have specific weaknesses; scout via Serena Analyze or Rab telepathy." },
    { title: "Draconian Quest challenge modes", body: "Enable Definitive Edition draconian settings for tighter, more strategic play." },
  ],
  terminology: [
    { term: "Luminary", meaning: "Player-hero title in DQ11" },
    { term: "Erdrea", meaning: "Game world" },
    { term: "Draconian Quest", meaning: "Optional challenge modes" },
    { term: "Timewyrm", meaning: "True final boss (postgame)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Main story + party recruitment", body: "Play through main story; recruit all 7 companions." }] },
    { level: "intermediate", steps: [{ title: "Postgame + Timewyrm", body: "Complete postgame Erdwin's Lantern storyline + defeat Timewyrm." }] },
    { level: "advanced", steps: [{ title: "Draconian + speedrun", body: "Draconian Quest challenge run + speedrun.com Any% leaderboards." }] },
  ],
  faq: [
    { question: "Do I need to play other Dragon Quest games?", answer: "No — DQ11 is standalone; references DQ1-3 in postgame Nostalgia-nod segments but no prior knowledge required." },
    { question: "Which edition should I play?", answer: "Definitive Edition (S — Switch, PS4/PS5, Xbox, PC) has all extra content: orchestral audio, 2D toggle, expanded character storylines." },
  ],
  wikipediaTitle: "Dragon Quest XI",
  sources: [{ label: "Wikipedia — Dragon Quest XI", url: "https://en.wikipedia.org/wiki/Dragon_Quest_XI", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default dragonQuestXi;
