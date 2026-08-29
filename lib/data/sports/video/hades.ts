import type { Sport } from "@/lib/types";

export const hades: Sport = {
  id: "hades",
  slug: "hades",
  name: "Hades",
  officialName: "Hades",
  aliases: ["Hades (2020)"],
  shortDescription:
    "ROGUELIKE ACTION VIDEO GAME (2020) by SUPERGIANT GAMES. Play as ZAGREUS, son of Hades, attempting to escape the Greek underworld. Isometric hack-and-slash with 6 weapons + 200+ boons from Olympian gods (Zeus, Athena, Aphrodite, etc.) each run. Genre-defining ROGUELIKE with rich NARRATIVE built into repeated deaths — dialogue evolves each run. Won BAFTA GAME OF THE YEAR 2021, GDC Game of the Year, + Hugo Award (rare for a game). PS Blog Game of the Year. Praised for accessibility + storytelling in a notoriously punishing genre.",
  category: "video-games",
  subCategory: "roguelike / action / narrative / indie",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Supergiant Games, San Francisco)",
  estimatedOrigin: "2020 full release (Sep 2020 PC/Switch; PS/Xbox 2021)",
  players: { min: 1, max: 1, note: "Single-player." },
  equipment: [
    { name: "PC (Windows, Mac, Linux), Switch, PS4/5, Xbox One/Series", description: "Multi-platform" },
    { name: "Standard controller or keyboard + mouse", description: "Controller preferred by most" },
  ],
  duration: { approximateMinutes: 20, structure: "Individual runs 20-40 min; full game ~50 hours to true ending; endless play possible via Heat system." },
  objective: "Escape the underworld — reach the surface via defeating 4 biome bosses + Hades himself.",
  basicRules: [
    { title: "Isometric action combat with light attack, heavy attack, cast, dash", body: "Signature control scheme." },
    { title: "Each run selects from 6 weapons (Sword, Spear, Bow, Shield, Fist, Rail)", body: "Weapon variety." },
    { title: "After each room, choose 1 of 3 boons from a random Olympian god", body: "Roguelike progression." },
    { title: "Death sends Zagreus back to the House of Hades — story advances via dialogue", body: "Narrative continuity." },
    { title: "Beat game 10+ times to see true ending; Heat system adds ongoing challenge", body: "Endless progression." },
  ],
  scoring: {
    summary: "Speedrunning + Heat-count clears + Hell Mode challenges; no traditional scoring system.",
    breakdown: [
      { action: "Complete first run + escape", points: "Requires 15-40 hours" },
      { action: "See true ending", points: "10+ successful escape runs required" },
      { action: "High Heat clears (32 Heat max)", points: "Peak challenge for speedrunners" },
    ],
    winCondition: "Escape the underworld to see credits; true ending after multiple escapes.",
  },
  countriesPlayed: ["US", "GB", "DE", "AU", "JP", "KR", "CA", "IT", "FR", "MX"],
  famousAthletes: [
    "TheSphereHunter (streamer, popularized Hades on YouTube)",
    "Speedrun community (WR ~10min under specific rules)",
  ],
  variants: [
    "hades-1-original-2020",
    "hades-2-2024-melinoe-early-access-sequel",
    "hell-mode-permadeath-hardcore",
    "heat-1-32-scaling-difficulty",
  ],
  relatedSports: ["diablo", "elden-ring", "the-witcher-3", "roblox"],
  skills: ["reaction combat", "boon synergy planning", "boss pattern learning", "risk management"],
  terminology: [
    { term: "Zagreus", meaning: "Player character; son of Hades attempting to escape." },
    { term: "Boons", meaning: "Power-ups granted by Olympian gods each run." },
    { term: "Heat", meaning: "Difficulty modifier — up to 32 levels of stacked challenges." },
    { term: "Mirror of Night", meaning: "Meta-progression skill tree upgrading between runs." },
    { term: "Bouldy", meaning: "Zagreus's boulder companion." },
  ],
  governingBodies: [
    { name: "Supergiant Games (developer)", founded: 2009, headquarters: "San Francisco, USA" },
  ],
  majorCompetitions: [
    { name: "Games Done Quick speedrun events (Hades speedrun regular category)", frequency: "biannual", founded: 2010, region: "Global (charity)" },
  ],
  faq: [
    { question: "Why did Hades win so many awards?", answer: "Hades REVOLUTIONIZED THE ROGUELIKE genre by INTEGRATING RICH NARRATIVE with die-and-retry gameplay. Where traditional roguelikes are pure skill-mastery games, Hades makes DEATH ADVANCE THE STORY — each retry deepens character relationships + reveals more of the Greek mythology. Combined with tight combat + gorgeous art + Darren Korb's soundtrack, Hades broke through to mainstream (2M+ sales) + critical acclaim (BAFTA GOTY, DICE GOTY nominee, Hugo Award for narrative)." },
  ],
  wikipediaTitle: "Hades (video game)",
  sources: [{ label: "Wikipedia — Hades", url: "https://en.wikipedia.org/wiki/Hades_(video_game)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
