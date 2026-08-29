import type { Sport } from "@/lib/types";

export const pathfinderSociety: Sport = {
  id: "pathfinder-society",
  slug: "pathfinder-society",
  name: "Pathfinder Society (Organized Play)",
  officialName: "Pathfinder Society Organized Play (PFS)",
  aliases: ["PFS", "Pathfinder Organized Play"],
  shortDescription:
    "Global organized-play network for Paizo's Pathfinder Roleplaying Game (2nd Edition) — thousands of shared-campaign adventurers earn XP + treasure across scenarios worldwide; sanctioned at conventions + FLGS + online since 2008.",
  longDescription:
    "Pathfinder Society (PFS) is the official global organized-play network for Paizo Publishing's Pathfinder Roleplaying Game (currently 2nd Edition, launched 2019). Established 2008 by Paizo shortly after the launch of Pathfinder 1st Edition (a fork of D&D 3.5 Open Game License). Thousands of players worldwide create Pathfinder Society characters (Pathfinders) who share a persistent campaign narrative + earn Experience Points + treasure + Fame + Reputation across sanctioned scenarios. Scenarios (~4-6 hours each) are written centrally by Paizo + run by volunteer Game Masters (VOs — Venture Officers) at conventions, friendly local game stores (FLGS), and online (Discord + Roll20 + Foundry VTT). Characters retire at 20th level; certain achievements + boons carry across characters. Modern setting: the Age of Lost Omens (world of Golarion) with new post-Godsrend narrative post-2023. PFS runs alongside sibling organized-play networks: Starfinder Society (sci-fi), Pathfinder Adventure Card Society (card game), Pathfinder Playtest events for new content. Signature conventions: PaizoCon (annual, Seattle), Gen Con (Indianapolis — biggest global convention), Origins, PAX East/Unplugged. Paizo also hosts Pathfinder Digital via Foundry VTT license.",
  category: "tabletop-rpg",
  subCategory: "organized-play network for Pathfinder RPG",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Paizo Publishing, Redmond, WA)",
  estimatedOrigin: "PFS founded 2008 (Season 0); PFS 2E launched 2019 alongside Pathfinder 2E",
  players: { min: 4, max: 7, note: "Standard: 4-6 players + 1 Game Master; scenarios support 3-6 players + GM." },
  equipment: [{ name: "Pathfinder 2E Core Rulebook", description: "Core rulebook (physical or PDF via Paizo)." }, { name: "Character sheet + dice", description: "PFS character sheet + polyhedral dice (d4, d6, d8, d10, d12, d20)." }, { name: "PFS scenario booklet (Paizo pdf)", description: "Downloaded scenarios ~50 pages each; typically $5-10 pdf." }, { name: "Miniatures + battle mat (optional but common)", description: "Miniatures + hex/square grid map." }, { name: "Digital VTT (Foundry / Roll20)", description: "Online play uses digital table-top platforms with Pathfinder 2E system module." }],
  duration: { approximateMinutes: 240, structure: "Single scenario ~4-6 hours; character can play dozens over months/years." },
  objective: "Complete scenarios + earn Experience Points + treasure + Fame + Reputation; retire character at 20th level; contribute to shared campaign narrative.",
  matchStructure: "Non-competitive collaborative storytelling; players + GM cooperate to overcome scenario challenges.",
  basicRules: [
    { title: "Sanctioned scenarios only", body: "Only Paizo-sanctioned PFS scenarios count for PFS advancement." },
    { title: "Standard 20-point-buy character generation", body: "PFS uses 20-point-buy stat generation (some seasons vary)." },
    { title: "Chronicle Sheet awarded per scenario", body: "GM issues signed Chronicle Sheet per scenario tracking XP + treasure + boons." },
    { title: "Character retires at 20th level", body: "At 20th level, character retires + earns retirement boons applicable to new characters." },
  ],
  scoring: { summary: "Experience Points (typically 4 XP = 1 level in PFS 2E); Fame + Reputation with 12 factions of Pathfinder Society.", winCondition: "Character advancement (levels) + Fame accumulation + narrative achievements." },
  positions: [{ name: "Player-Character (Pathfinder)", role: "Player's PFS character.", count: 5 }, { name: "Game Master (GM)", role: "Volunteer scenario runner (Venture Officer track for advanced GMs).", count: 1 }, { name: "Venture Officer (Venture Captain / Lieutenant)", role: "Paizo-sanctioned regional VO organizing local PFS events.", count: 1 }],
  officiating: { officials: ["Venture Officers (regional)", "Venture Captain (senior regional)", "Venture Lieutenant", "Paizo Organized Play team"], summary: "Volunteer VO network sanctioned by Paizo's official Organized Play program." },
  governingBodies: [{ name: "Paizo Publishing", founded: 2002, headquarters: "Redmond, Washington, USA" }],
  majorCompetitions: [{ name: "PaizoCon (PFS Special)", frequency: "annual", founded: 2008, region: "Seattle, USA" }, { name: "Gen Con (PFS Special)", frequency: "annual", founded: 2008, region: "Indianapolis, USA" }, { name: "PAX Unplugged / East (PFS)", frequency: "annual", founded: 2017, region: "USA (rotating)" }],
  countriesPlayed: ["USA", "CAN", "GBR", "GER", "AUS", "FRA", "ITA", "JPN", "BRA"],
  famousAthletes: ["Erik Mona (Paizo Chief Creative Officer + PFS steward)", "Tonya Woldridge (former PFS Organized Play Coordinator)", "Michael Sayre (current PFS Organized Play Lead)"],
  records: [
    { title: "PFS founded 2008", holder: "Paizo Publishing", value: "Pathfinder Society founded 2008 with Pathfinder 1st Edition launch (Season 0 introductory scenarios)", year: 2008 },
    { title: "PFS 2E launched 2019", holder: "Paizo Publishing", value: "PFS 2E launched Aug 2019 alongside Pathfinder 2nd Edition Core Rulebook release", year: 2019 },
  ],
  variants: ["pfs-1e-legacy-completed-2019", "pfs-2e-current", "starfinder-society-sibling", "pathfinder-adventure-card-society"],
  relatedSports: ["dungeons-and-dragons-adventurers-league", "starfinder-society", "shadowrun-organized-play"],
  skills: ["character-building optimization", "tactical combat", "roleplay + character voice", "collaborative storytelling", "rules mastery"],
  wikipediaTitle: "Pathfinder Roleplaying Game",
  sources: [{ label: "Wikipedia — Pathfinder Roleplaying Game", url: "https://en.wikipedia.org/wiki/Pathfinder_Roleplaying_Game", publisher: "Wikipedia" }, { label: "PFS official", url: "https://paizo.com/organizedplay", publisher: "Paizo Publishing" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pathfinderSociety;
