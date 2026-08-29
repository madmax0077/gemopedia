import type { Sport } from "@/lib/types";

export const nierAutomata: Sport = {
  id: "nier-automata",
  slug: "nier-automata",
  name: "NieR: Automata",
  officialName: "NieR: Automata",
  aliases: ["ニーア オートマタ", "N:A"],
  shortDescription:
    "Action-RPG (PlatinumGames + Square Enix, Feb 23, 2017 PS4/PC; June 2018 Xbox; Oct 2022 Switch) — post-apocalyptic dystopia; androids 2B, 9S, A2 fight machines. Director Yoko Taro's masterpiece with multiple endings (A-Z), philosophy themes. 8M+ units sold; 2022 anime + Ver 1.1a series.",
  longDescription:
    "NieR: Automata is a critically-acclaimed action-RPG developed by PlatinumGames + published by Square Enix — released February 23, 2017 for PS4/PC, June 2018 for Xbox, October 2022 for Switch. Directed by Yoko Taro, composed by Keiichi Okabe. Post-apocalyptic Earth invaded by alien Machine Lifeforms; androids 2B (combat), 9S (scanner), A2 (attacker) fight to reclaim planet for humanity. Blends fast-paced Platinum combat (like Bayonetta) with RPG progression, bullet-hell shooter sequences, top-down + side-scrolling perspective shifts, and RPG loot + chip skill customisation. Famous for narrative structure: 26 possible endings labelled A-Z, with first playthrough (Ending A) being the surface layer; full story requires 3+ full playthroughs (Endings A, B, C/D). Explores philosophy themes: existentialism, absurdism, meaning of consciousness. 8M+ units sold as of 2024. 2022 NieR: Automata Ver 1.1a anime adaptation (A-1 Pictures).",
  category: "video-games",
  subCategory: "action-role-playing (auteur direction)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (PlatinumGames Osaka + Square Enix Tokyo)",
  estimatedOrigin: "Released Feb 23, 2017 (PS4/PC); Xbox June 2018; Switch Oct 2022; 2022 Ver 1.1a anime adaptation",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS4/PS5, Xbox One/Series, PC, Switch", description: "Multi-platform (Switch runs 60 FPS docked)." },
    { name: "DualSense/DualShock 4/Xbox controller", description: "Standard controllers; PC keyboard+mouse supported." },
  ],
  duration: { approximateMinutes: 25, structure: "First route (Ending A) ~25 hrs; full endings A/B/C/D ~50 hrs; 100% + all 26 endings ~80-100 hrs." },
  objective: "Complete all main endings (A, B, C/D) to experience full narrative; optional 100% for all 26 endings + weapons + records.",
  matchStructure: "Single-player 3-route campaign — Route A (2B), Route B (9S same events new perspective), Routes C+D (A2/9S post-Route B narrative continuation).",
  basicRules: [
    { title: "3 playable characters", body: "2B (combat, first route), 9S (scanner, second route), A2 (attacker, endgame)." },
    { title: "Chip system customisation", body: "Equip chips (HP boost, auto-heal, damage boost) with limited slots — critical: HUD/UI chips optional." },
    { title: "26 endings A-Z", body: "Endings A/B/C/D are main story; E-Z are joke endings triggered by specific actions." },
  ],
  advancedRules: [
    { title: "New Game+ features (Chapter Select)", body: "After beating Ending A, can Chapter Select to specific points for joke endings." },
    { title: "Bullet-hell shooter sequences", body: "Regular Platinum combat interrupted by top-down or side-scrolling bullet-hell sections." },
  ],
  scoring: {
    summary: "Story routes A/B/C/D completion; 100% = all 26 endings + all weapons + all records + all documents.",
    winCondition: "Complete Endings A + B + C + D for full canonical story.",
    breakdown: [{ action: "Ending unlock", points: "1 of 26 total endings" }],
  },
  penalties: [
    { title: "Death (Game Over)", body: "Reload autosave; can retrieve dropped chips from body." },
    { title: "OS chip removal", body: "Removing OS chip = instant death (joke ending W)." },
  ],
  positions: [{ name: "Android (2B / 9S / A2)", role: "YoRHa combat android.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators for community leaderboards"], summary: "Single-player only." },
  governingBodies: [
    { name: "Square Enix Holdings", founded: 2003, headquarters: "Tokyo, Japan" },
    { name: "PlatinumGames", founded: 2006, headquarters: "Osaka, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com NieR: Automata leaderboards", frequency: "ongoing", founded: 2017, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR"],
  famousAthletes: ["Community speedrunners establishing Any% + Ending A/B/C/D routes"],
  records: [
    { title: "Total sales as of 2024", holder: "PlatinumGames + Square Enix", value: "8+ million units sold worldwide across all platforms", year: 2024 },
    { title: "2022 anime adaptation", holder: "A-1 Pictures", value: "Ver 1.1a anime adaptation aired 2022; season 2 confirmed", year: 2022 },
  ],
  variants: ["nier-automata-standard", "nier-automata-game-of-yorha-edition"],
  relatedSports: ["nier-replicant", "bayonetta-3", "final-fantasy-vii-rebirth"],
  skills: ["combat combos", "chip optimization", "bullet-hell dodging", "route memorization"],
  strategies: [
    { title: "Chip loadout optimization", body: "Balance HP/damage/utility chips within limited slots; strip HUD chips for slot space if experienced." },
    { title: "Pod ability chaining", body: "Pod fires vary (laser, hammer, gravity) — swap between fights for optimum vs enemy type." },
    { title: "Route order for full narrative", body: "Play A → B → C/D in order; joke endings (E-Z) can be done via Chapter Select after Ending A." },
  ],
  terminology: [
    { term: "YoRHa", meaning: "Android military organisation" },
    { term: "Machine Lifeform", meaning: "Enemy alien invaders" },
    { term: "Pod", meaning: "Support drone attached to android" },
    { term: "Chip", meaning: "Customisation module for android abilities" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Route A (2B first playthrough)", body: "Learn basic combat, pod attacks, chip system, first bosses." }] },
    { level: "intermediate", steps: [{ title: "Route B (9S second playthrough)", body: "Same events new perspective + hacking sequences." }] },
    { level: "advanced", steps: [{ title: "Routes C+D + all 26 endings", body: "Narrative continuation + joke ending chapter-select run." }] },
  ],
  faq: [
    { question: "Do I need to play prior NieR games?", answer: "No — NieR: Automata is a standalone sequel; prior NieR (2010) knowledge enriches but not required." },
    { question: "How many endings are there really?", answer: "26 endings labelled A-Z. Main story = A + B + C + D (~50 hrs); E-Z are joke endings triggered by specific actions." },
  ],
  wikipediaTitle: "Nier: Automata",
  sources: [{ label: "Wikipedia — Nier: Automata", url: "https://en.wikipedia.org/wiki/Nier:_Automata", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default nierAutomata;
