import type { Sport } from "@/lib/types";

export const kendamaCompetitive: Sport = {
  id: "kendama-competitive",
  slug: "kendama-competitive",
  name: "Competitive Kendama",
  officialName: "Competitive Kendama (JKA + KendamaUSA + KWC)",
  aliases: ["Kendama Competition", "KWC", "Kendama World Cup"],
  shortDescription:
    "Modern competitive kendama scene combining Japanese traditional kendama (bilboquet-style ball + spike + cups toy) with Western freestyle tricks; Kendama World Cup (KWC) in Hatsukaichi Japan since 2014 is the premier global event.",
  longDescription:
    "Competitive Kendama is the modern global tournament scene for kendama — the traditional Japanese bilboquet-style skill toy consisting of a wooden handle (ken) with 3 cups + a spike, connected by a string to a ball (tama) with a small hole. Modern competitive kendama fuses traditional Japanese JKA (Japan Kendama Association, founded 1975) rank-based trick progression with Western/US freestyle 'trick genres' developed since ~2007 by Kendama USA + pioneer players. Signature global event: Kendama World Cup (KWC), founded 2014, held annually in Hatsukaichi, Hiroshima, Japan — features top ~200 players across Preliminary + Final rounds using a 100-trick tricklist with time limits. US Open, EU Open, other regional continental championships. Freestyle discipline focuses on tricks, combos, juggles ('taps', 'juggles', 'stalls', 'spikes', 'lunar', 'lighthouse', 'birdhouse', tornado etc.) rated by difficulty. Sponsored pro scene: KendamaUSA, Sweets Kendamas, Krom, Bonz, Terra, Sol, PROmusic — most sponsor athletes globally. Notable athletes: Bonz Atron, Zack Yourd, Nick Gallagher, Yusuke Iso, So Kubota, Kiya Babzani, Wyatt Bray, Nick Marto, Reid Haggerty (JKA + KWC winners). YouTube + Instagram + TikTok content drove massive popularity surge 2013-2020s.",
  category: "skill-toys",
  subCategory: "traditional Japanese skill toy (competitive)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (traditional origin); modern competitive Japan + USA post-2007",
  estimatedOrigin: "Traditional Japanese kendama ~1918; modern competitive scene ~2007-2014; KWC founded 2014",
  players: { min: 1, max: 1, note: "Individual event; team events at some regional tournaments." },
  equipment: [{ name: "Kendama", description: "Wooden handle with 3 cups + spike, connected by string to ball (tama)." }, { name: "Replacement tama + strings", description: "Consumables (strings especially)." }, { name: "Slip-resistant paint (tama)", description: "Modern tama use special paint for grip." }],
  duration: { approximateMinutes: 5, structure: "Per round: 3-10 min trick attempts; per event: 4-8 hours across preliminaries + finals." },
  objective: "Complete highest-difficulty tricks + combos within time limit OR beat opponent head-to-head.",
  matchStructure: "KWC format: 100-trick trick-list, each player has 3 attempts per trick; highest score progresses to finals; final = head-to-head Ken Trials trick battle.",
  basicRules: [
    { title: "Trick-list format (KWC)", body: "100 tricks in progressive difficulty; player has 3 attempts per trick." },
    { title: "Head-to-head format (finals)", body: "Ken Trials trick battle; each player alternates picking tricks the other must match." },
    { title: "Time limit per trick attempt", body: "Standard 60-second timeout per trick." },
    { title: "String must be attached (no wireless tricks)", body: "String integrity throughout trick required." },
  ],
  scoring: { summary: "Trick-list format: total tricks completed; head-to-head: first to lose 3 tricks eliminated.", winCondition: "Most tricks completed (list format) OR last player standing (head-to-head)." },
  positions: [{ name: "Kendama player", role: "Sole competitor.", count: 1 }],
  governingBodies: [{ name: "JKA (Japan Kendama Association)", founded: 1975, headquarters: "Tokyo, Japan" }, { name: "KendamaUSA", founded: 2007, headquarters: "USA" }, { name: "GKA (Global Kendamas Association)", founded: 2014, headquarters: "Japan" }],
  majorCompetitions: [{ name: "Kendama World Cup (KWC)", frequency: "annual", founded: 2014, region: "Hatsukaichi, Hiroshima, Japan" }, { name: "US Open Kendama Championships", frequency: "annual", founded: 2013, region: "USA (rotating)" }, { name: "EU Open", frequency: "annual", founded: 2015, region: "Europe (rotating)" }],
  countriesPlayed: ["JPN", "USA", "GER", "FRA", "GBR", "CAN", "AUS", "SWE", "DEN", "POL"],
  famousAthletes: ["Bonz Atron (USA)", "Zack Yourd (USA)", "Nick Gallagher (USA)", "Yusuke Iso (JPN)", "So Kubota (JPN)", "Kiya Babzani (USA)", "Wyatt Bray (USA)", "Reid Haggerty (USA)"],
  records: [
    { title: "KWC founded 2014", holder: "Kendama World Cup", value: "Kendama World Cup founded 2014, held annually in Hatsukaichi, Japan; largest global event", year: 2014 },
    { title: "Bonz Atron KWC Champion", holder: "Bonz Atron (USA)", value: "Multi-time KWC champion (2014 inaugural + subsequent years); pioneer American pro", year: 2014 },
  ],
  variants: ["freestyle-kendama", "traditional-jka-kyu-dan-progression"],
  relatedSports: ["yoyo-freestyle", "diabolo-competitive", "cup-stacking"],
  skills: ["hand-eye coordination", "muscle memory", "wrist snap timing", "string control", "trick chaining"],
  wikipediaTitle: "Kendama",
  sources: [{ label: "Wikipedia — Kendama", url: "https://en.wikipedia.org/wiki/Kendama", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default kendamaCompetitive;
