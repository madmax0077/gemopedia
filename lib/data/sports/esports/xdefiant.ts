import type { Sport } from "@/lib/types";

export const xdefiant: Sport = {
  id: "xdefiant",
  slug: "xdefiant",
  name: "XDefiant",
  officialName: "XDefiant",
  aliases: ["XD"],
  shortDescription:
    "Ubisoft free-to-play arcade FPS (May 21, 2024 PS5/Xbox/PC) — 6v6 factional shooter with characters from Ubisoft's Splinter Cell/Ghost Recon/Watch Dogs universes. Shut down June 3, 2025 after ~1 year of operation despite launch peaks.",
  longDescription:
    "XDefiant was a free-to-play arcade first-person shooter developed by Ubisoft San Francisco + published by Ubisoft — released May 21, 2024 for PS5, Xbox Series X/S, and PC (Ubisoft Connect + Epic Games). Signature concept: 6v6 factional shooter with character 'Factions' pulled from Ubisoft franchises — Cleaners (from The Division), Echelon (from Splinter Cell), Libertad (from Far Cry 6), Phantoms (from Ghost Recon), DedSec (from Watch Dogs), GSK (from Rainbow Six Siege). Each faction had unique passive + active + ultra abilities. Modes: Occupy (control zones), Zone Control, Escort, Domination, Hot Shot, Team Deathmatch. 14+ maps at launch. Positioned by Ubisoft as anti-'sweaty modern shooter' (no skill-based matchmaking, arcade-first pace). Announced shutdown December 3, 2024 — servers ceased June 3, 2025, ending game one year after launch. Reached 8M+ registered players in first month; struggled with retention + content pipeline. Cited as case study for challenges of new AAA F2P shooters entering saturated market against Call of Duty + Fortnite + Valorant.",
  category: "esports",
  subCategory: "arcade FPS (F2P, discontinued)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Ubisoft San Francisco)",
  estimatedOrigin: "Released May 21, 2024; discontinued June 3, 2025 after ~13 months of operation",
  players: { min: 6, max: 12, note: "6v6 competitive modes; matchmaking-based." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Ubisoft Connect / Epic)", description: "Cross-play across all platforms." },
    { name: "Standard controller or M+KB", description: "Fully cross-play with input-based matchmaking." },
  ],
  duration: { approximateMinutes: 10, structure: "Match ~8-12 min; competitive series ~30-45 min." },
  objective: "Complete mode-specific objectives (zone control, escort, kills) + eliminate enemy team.",
  matchStructure: "6v6 competitive modes; matchmaking-based; season + battle pass content updates.",
  basicRules: [
    { title: "6v6 factional teams", body: "Each player picks Faction character with passive + active + ultra abilities." },
    { title: "No skill-based matchmaking (arcade-first)", body: "Ubisoft deliberately avoided SBMM to preserve arcade feel." },
    { title: "Mode-specific objectives", body: "Occupy zones / escort payload / capture flags / team deathmatch." },
  ],
  advancedRules: [
    { title: "Faction ability rotation", body: "Actives on cooldown; ultras charge through match — save ultras for objective moments." },
    { title: "Weapon loadout + attachments", body: "Extensive weapon customisation similar to CoD; unlock via play." },
    { title: "Battle pass + seasonal factions", body: "New factions added per season (e.g., GSK from Season 1)." },
  ],
  scoring: {
    summary: "Objective + kill points win match.",
    winCondition: "Team with most objective points at match end wins.",
    breakdown: [{ action: "Objective control", points: "Match variable" }, { action: "Kill", points: "1 kill" }],
  },
  penalties: [
    { title: "Team-kill", body: "Warning; repeat = temp ban." },
    { title: "Griefing / stream sniping", body: "Reportable; ban tiers per Ubisoft ToS." },
  ],
  positions: [{ name: "Faction-Character Player", role: "Solo player in 6v6 team; picks Faction each match.", count: 6 }],
  officiating: { officials: ["Anti-cheat + report system"], summary: "Automated moderation." },
  governingBodies: [
    { name: "Ubisoft San Francisco", founded: 2009, headquarters: "San Francisco, California" },
    { name: "Ubisoft Entertainment SA", founded: 1986, headquarters: "Montreuil, France" },
  ],
  majorCompetitions: [
    { name: "In-game Ranked queue seasons (until shutdown)", frequency: "seasonal (2024-2025)", founded: 2024, region: "global" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "JP", "BR"],
  famousAthletes: ["Content creators + top-Ranked players from Season 1-4"],
  records: [
    { title: "8M+ registered first month", holder: "Ubisoft", value: "Reached 8 million+ registered players in first month post-launch", year: 2024 },
    { title: "Discontinued June 3, 2025", holder: "Ubisoft", value: "Announced shutdown December 3, 2024; servers ceased June 3, 2025 — one of the shortest-lived AAA F2P shooters", year: 2025 },
    { title: "Cross-franchise faction concept", holder: "Ubisoft SF", value: "Featured factions from The Division + Splinter Cell + Far Cry + Ghost Recon + Watch Dogs — unique Ubisoft-universe crossover", year: 2024 },
  ],
  variants: ["xdefiant-preseason", "xdefiant-season-1-3"],
  relatedSports: ["call-of-duty", "the-finals", "battlefield", "counter-strike-2", "valorant"],
  skills: ["arcade FPS aim + movement", "faction ability cooldown management", "objective mode positioning"],
  strategies: [
    { title: "Faction stack (team composition)", body: "Certain faction combinations synergise (Echelon vision + Cleaners suppress) — coordinate team faction picks." },
    { title: "Ultra economy management", body: "Save ultras for objective-defining moments (last-30-sec zone flip, escort choke)." },
    { title: "Movement + slide + wall-jump chains", body: "Utilise arcade movement to sprint-slide + wall-jump for angles." },
  ],
  terminology: [
    { term: "Faction", meaning: "Playable character group with unique abilities" },
    { term: "Passive / Active / Ultra", meaning: "Faction ability tiers" },
    { term: "SBMM", meaning: "Skill-Based Matchmaking (which XDefiant famously avoided)" },
    { term: "Occupy", meaning: "Signature zone-control mode" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Casual playlists + Faction unlock", body: "Play Team Deathmatch to learn maps + Factions." }] },
    { level: "intermediate", steps: [{ title: "Objective modes + weapon builds", body: "Master Occupy + Escort modes; unlock preferred weapons." }] },
    { level: "advanced", steps: [{ title: "Ranked queue climb (until shutdown)", body: "Climbed Ranked queue seasons; discontinued June 2025." }] },
  ],
  faq: [
    { question: "Why did XDefiant shut down?", answer: "Ubisoft announced Dec 3, 2024 shutdown due to insufficient player retention + revenue vs. investment required to sustain live-service AAA F2P shooter. Cited market saturation (CoD, Fortnite, Valorant, Apex) + content pipeline challenges. Servers ceased June 3, 2025." },
    { question: "Can I still play XDefiant?", answer: "No — all servers permanently offline as of June 3, 2025. Ubisoft offered refunds for premium purchases during shutdown wind-down period." },
  ],
  wikipediaTitle: "XDefiant",
  sources: [{ label: "Wikipedia — XDefiant", url: "https://en.wikipedia.org/wiki/XDefiant", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default xdefiant;
