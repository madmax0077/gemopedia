import type { Sport } from "@/lib/types";

export const helldivers2: Sport = {
  id: "helldivers-2",
  slug: "helldivers-2",
  name: "Helldivers 2",
  officialName: "Helldivers 2",
  aliases: ["HD2"],
  shortDescription:
    "Third-person co-op shooter (Arrowhead / Sony, Feb 8, 2024 PS5 + PC) — up to 4 Helldivers deploy Stratagems on procedural missions against Terminids + Automatons. Live-service Galactic War with community-wide objectives. 12M+ units first three months; #1 concurrent PS5 game 2024.",
  longDescription:
    "Helldivers 2 is a third-person cooperative shooter developed by Sweden's Arrowhead Game Studios + published by Sony Interactive Entertainment, released February 8, 2024 for PS5 + PC (Steam). Sequel to 2015 top-down Helldivers — reimagined as an over-the-shoulder shooter. Up to 4 Helldivers deploy onto procedurally-generated planets in Super Earth's endless war against Terminids (Starship Troopers-style bugs) + Automatons (robot fascists) + later Illuminate (returning from Helldivers 1). Signature mechanic: Stratagems — call in support weapons, sentries, orbital strikes, reinforcements via directional button-code inputs shouted in-game. Persistent 'Galactic War' meta-layer where entire player base wages one continuous war, with Community Manager 'Joel' orchestrating narrative moments as an in-fiction Game Master. Live-service model with Warbonds (paid + free battle passes). 12M+ units in first three months; became fastest-selling PS Studios game of all time. Enormous cultural moment — 'For Super Earth! For Democracy!' catchphrases + patriotic satire.",
  category: "video-games",
  subCategory: "third-person co-op shooter",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Arrowhead Game Studios, Stockholm)",
  estimatedOrigin: "Released Feb 8, 2024 for PS5 + PC (Steam); sequel to Helldivers (2015)",
  players: { min: 1, max: 4, note: "1-4 player online co-op; matchmaking + private lobbies." },
  equipment: [
    { name: "PS5 / PC", description: "Cross-platform co-op between PS5 + Steam." },
    { name: "Controller / M+KB", description: "Stratagem codes work with any input; PC has M+KB advantage for aiming." },
  ],
  duration: { approximateMinutes: 40, structure: "Missions typically 15-40 min; Operations (mission clusters) 45-90 min." },
  objective: "Complete mission objectives (rescue civilians, launch ICBM, destroy nests/fabricators) + extract. Contribute to Galactic War liberation of Super Earth's held planets.",
  matchStructure: "1-4 player procedural missions on Terminid/Automaton/Illuminate planets. Difficulty 1-10 (Trivial → Super Helldive). Persistent Galactic War meta-layer tracks community liberation progress.",
  basicRules: [
    { title: "Stratagem code inputs", body: "Call in Stratagems (turrets, orbital strikes, support weapons) via directional D-pad code sequences." },
    { title: "Friendly fire is always on", body: "All difficulties allow team-kills — creates chaotic hilarity + tactical caution." },
    { title: "Reinforcement budget", body: "Team shares limited reinforcements per mission — running out ends run on wipe." },
  ],
  advancedRules: [
    { title: "Difficulty tiers (1-10) unlock progressively", body: "Complete missions at each tier to unlock the next; Helldive+ (7+) has stalkers, chargers, hulks." },
    { title: "Warbond battle passes", body: "Free + paid Warbonds unlock capes, armour, weapons via medals earned in missions." },
    { title: "Galactic War liberation %", body: "Community-wide liberation % on each planet drives major-order rewards + narrative story progression." },
  ],
  scoring: {
    summary: "Mission success awards Requisition, Samples, Medals, XP + contributes to Galactic War liberation.",
    winCondition: "Complete mission objectives + extract via Pelican-1 dropship.",
    breakdown: [
      { action: "Primary objectives", points: "Major XP + Requisition" },
      { action: "Sample collection (Common/Rare/Super)", points: "Upgrade ship modules" },
      { action: "Extraction", points: "Preserves all Samples + gear" },
    ],
  },
  penalties: [
    { title: "Team wipe (all reinforcements exhausted)", body: "Mission fails; lose collected samples but keep unlocks earned before failure." },
    { title: "Failed extraction", body: "Samples lost even if objectives completed." },
  ],
  positions: [{ name: "Helldiver", role: "1-4 loadout-flexible soldiers with primary/secondary/support weapon + 4 Stratagems.", count: 4 }],
  officiating: { officials: ["No formal officials — PvE co-op"], summary: "Community moderation for exploits; no competitive PvP." },
  governingBodies: [
    { name: "Arrowhead Game Studios", founded: 2008, headquarters: "Stockholm, Sweden" },
    { name: "Sony Interactive Entertainment", founded: 1993, headquarters: "San Mateo, California / Tokyo" },
  ],
  majorCompetitions: [
    { name: "Community-wide Galactic War Major Orders", frequency: "ongoing weekly", founded: 2024, region: "global (in-game)" },
  ],
  countriesPlayed: ["US", "GB", "SE", "DE", "FR", "JP", "KR", "AU", "BR", "IN"],
  famousAthletes: ["Johan Pilestedt (former Arrowhead CEO / Chief Creative Officer)", "Joel (Community Manager / in-fiction Game Master)"],
  records: [
    { title: "12M+ units first three months", holder: "Sony / Arrowhead", value: "12 million+ units sold within first three months", year: 2024 },
    { title: "Fastest-selling PlayStation Studios game", holder: "Sony", value: "Surpassed God of War Ragnarök to become fastest-selling PS Studios title ever", year: 2024 },
    { title: "Peak 458k concurrent Steam players", holder: "Arrowhead", value: "Peaked 458,000+ concurrent Steam players in Feb 2024", year: 2024 },
  ],
  variants: ["helldivers-2-standard", "helldivers-2-super-citizen"],
  relatedSports: ["helldivers-1", "deep-rock-galactic", "starship-troopers-extermination"],
  skills: ["stratagem code execution", "kite-and-mount squad positioning", "loadout building", "friendly fire discipline"],
  strategies: [
    { title: "Stratagem role split", body: "Assign 1 orbital-strike Helldiver, 1 turret Helldiver, 1 support-weapon Helldiver, 1 backpack-support to cover all situations." },
    { title: "Kite + stratagem chain", body: "Kite Chargers/Hulks while teammate lines up Rail Cannon or 500kg bomb strike." },
    { title: "Extraction preparation", body: "Set turrets + mines around Pelican-1 landing zone before calling for evac." },
  ],
  terminology: [
    { term: "Stratagem", meaning: "Directional-code-input support call (weapon, turret, orbital, reinforcement)" },
    { term: "Terminid", meaning: "Insectoid enemy faction (Starship Troopers homage)" },
    { term: "Automaton", meaning: "Robotic Cyborg-descendant enemy faction" },
    { term: "Bile Titan", meaning: "Elite Terminid boss enemy" },
    { term: "Warbond", meaning: "Battle-pass unlock track (free + paid)" },
    { term: "Major Order", meaning: "Community-wide weekly Galactic War objective" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Difficulty 1-3 with Terminids", body: "Learn Stratagem inputs + basic loadout." }] },
    { level: "intermediate", steps: [{ title: "Difficulty 4-6 + Warbond progression", body: "Handle Chargers + Hulks; complete Warbond pages." }] },
    { level: "advanced", steps: [{ title: "Helldive+ (7-10) + Major Orders", body: "Full team-coordination difficulty; contribute to community Major Orders." }] },
  ],
  faq: [
    { question: "Do I need PS+ / online subscription?", answer: "Yes on PS5 (PlayStation Plus required for online). PC does not require subscription — only Steam account." },
    { question: "Can I play Helldivers 2 solo?", answer: "Yes, but difficulty scales for co-op — solo runs at high difficulty are extremely hard. Matchmaking usually finds squads quickly." },
  ],
  wikipediaTitle: "Helldivers 2",
  sources: [{ label: "Wikipedia — Helldivers 2", url: "https://en.wikipedia.org/wiki/Helldivers_2", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default helldivers2;
