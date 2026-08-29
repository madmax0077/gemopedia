import type { Sport } from "@/lib/types";

export const deadOrAlive6: Sport = {
  id: "dead-or-alive-6",
  slug: "dead-or-alive-6",
  name: "Dead or Alive 6",
  officialName: "Dead or Alive 6",
  aliases: ["DOA6"],
  shortDescription:
    "3D fighting game (Team Ninja + Koei Tecmo, Mar 1, 2019 PS4/Xbox One/PC) — sixth mainline Dead or Alive with triangle system + break gauge + reactive combat. Featured at EVO 2019 + 2020. Post-launch DLC characters + costumes.",
  longDescription:
    "Dead or Alive 6 is the sixth mainline entry in Koei Tecmo's Dead or Alive fighting game series — developed by Team Ninja + released March 1, 2019 for PS4, Xbox One, and PC (Steam). Continues DOA's signature rock-paper-scissors triangle system (strikes beat throws, throws beat holds, holds beat strikes) with new Break Gauge mechanic enabling Break Blow (super attack) + Break Hold (defensive counter). Dynamic reactive stages (breakables, fall-through floors, environmental hazards). 27 base characters + 7 DLC characters. Featured at EVO Championship Series 2019 + 2020 + 2021. Roster mixes returning cast (Kasumi, Ayane, Ryu Hayabusa, Bass, Bayman, Zack) with new (NiCO, Diego). Free-to-play 'Core Fighters' version released day one with limited character roster + separately-purchased characters. Also runs Dead or Alive World Championship annual tournament.",
  category: "video-games",
  subCategory: "3D fighting game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Team Ninja Tokyo + Koei Tecmo)",
  estimatedOrigin: "Released Mar 1, 2019 for PS4/Xbox One/PC; free-to-play Core Fighters version same day",
  players: { min: 2, max: 2, note: "1v1 fighter." },
  equipment: [
    { name: "PS4/Xbox One/PC", description: "Cross-platform TCG-style match support." },
    { name: "Fight stick or controller", description: "Standard fighting-game input; Hori/Qanba/Razer fight sticks preferred at pro level." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 round match; each round 60-99 sec." },
  objective: "Win by KO or higher HP at time-out; deplete opponent HP to zero.",
  matchStructure: "Best-of-3 rounds (60 sec each); tournament typically Bo5 games.",
  basicRules: [
    { title: "Triangle system (strike/throw/hold)", body: "Rock-paper-scissors: strikes beat throws, throws beat holds, holds beat strikes." },
    { title: "Break Gauge (super meter)", body: "Charge Break Gauge via damage/damage-taken; spend for Break Blow (super attack) or Break Hold (defensive counter)." },
    { title: "Reactive stages", body: "Breakable environments, fall-through floors, environmental hazards deal bonus damage." },
  ],
  advancedRules: [
    { title: "Stagger + juggle system", body: "Hits stagger opponent; follow with juggle combo for extended damage." },
    { title: "Fatal Rush 4-hit auto combo", body: "New DOA6 auto-combo string reduces execution barrier for beginners." },
  ],
  scoring: {
    summary: "Best-of-3 rounds; KO or higher HP at time-out. Tournament brackets Bo3/Bo5 games.",
    winCondition: "KO opponent or higher HP at 60-sec time-out; 2 round wins = game.",
    breakdown: [{ action: "Round KO", points: "1 round win" }],
  },
  penalties: [
    { title: "Ring-out damage", body: "Falling off stage causes damage; some stages have ring-out fatality." },
    { title: "Tournament rule violation", body: "Illegal controller macros or unsportsmanlike conduct = DQ." },
    { title: "Timeout", body: "60-sec timer; higher HP wins the round." },
  ],
  positions: [{ name: "Fighter", role: "1v1 fighting-game player controlling character.", count: 1 }],
  officiating: {
    officials: ["Tournament Organizer (Koei Tecmo events, EVO)", "Head Judge", "Floor Judges"],
    summary: "Koei Tecmo + EVO tournament staff; algorithmic online matchmaking.",
  },
  governingBodies: [
    { name: "Koei Tecmo Games", founded: 2009, headquarters: "Yokohama, Japan" },
    { name: "Team Ninja", founded: 1995, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Dead or Alive World Championship", frequency: "annual", founded: 2019, region: "global" },
    { name: "EVO Championship Series (DOA6)", frequency: "annual (2019-2021)", founded: 1996, region: "global" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "MX", "BR"],
  famousAthletes: [
    "Emanuel 'MASTER' Rodriguez (USA) — DOA World Champion",
    "Various Japanese + American DOA circuit champions",
  ],
  records: [
    { title: "DOA6 at EVO 2019, 2020, 2021", holder: "EVO Championship Series", value: "Featured game at EVO 2019, 2020, 2021", year: 2019 },
    { title: "Dead or Alive World Championship inaugural", holder: "Koei Tecmo", value: "First DOA6 World Championship held 2019", year: 2019 },
  ],
  variants: ["dead-or-alive-6-full", "dead-or-alive-6-core-fighters-free"],
  relatedSports: ["tekken", "street-fighter", "guilty-gear-strive", "mortal-kombat"],
  skills: ["triangle system prediction", "combo execution", "stage awareness", "matchup knowledge"],
  strategies: [
    { title: "Triangle system prediction", body: "Read opponent tendency + counter with correct triangle option (strike/throw/hold)." },
    { title: "Break Gauge conservation", body: "Save Break Blow for finishing round or critical Break Hold defense." },
    { title: "Stage hazard positioning", body: "Push opponent toward breakable walls + environmental damage bonuses." },
  ],
  terminology: [
    { term: "Break Gauge", meaning: "Super meter chargeable via combat" },
    { term: "Break Blow", meaning: "Cinematic super attack" },
    { term: "Break Hold", meaning: "Defensive counter via Break Gauge" },
    { term: "Fatal Rush", meaning: "4-hit auto-combo string" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Core Fighters free trial", body: "Learn triangle system + basic character (Kasumi/Hayate) via Core Fighters free version." }] },
    { level: "intermediate", steps: [{ title: "Combo execution + Ranked", body: "Master 1-2 characters + Ranked ladder climb." }] },
    { level: "advanced", steps: [{ title: "Tournament circuit + WC qualifying", body: "Regional qualifiers + Dead or Alive World Championship." }] },
  ],
  faq: [
    { question: "Is DOA6 free to play?", answer: "Partially — 'Core Fighters' free version has limited roster + no story mode. Full game paid ($60 base). Additional characters + costumes as DLC." },
    { question: "Is DOA6 still supported?", answer: "Support scaled back after 2021 EVO cycle; Koei Tecmo focus shifted to Dead or Alive Xtreme Venus Vacation + future DOA7 rumors." },
  ],
  wikipediaTitle: "Dead or Alive 6",
  sources: [{ label: "Wikipedia — Dead or Alive 6", url: "https://en.wikipedia.org/wiki/Dead_or_Alive_6", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default deadOrAlive6;
