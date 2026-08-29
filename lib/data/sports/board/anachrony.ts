import type { Sport } from "@/lib/types";

export const anachrony: Sport = {
  id: "anachrony",
  slug: "anachrony",
  name: "Anachrony",
  officialName: "Anachrony (Mindclash Games)",
  aliases: ["Anachrony Base Game", "Anachrony Essential Edition"],
  shortDescription:
    "Heavy Eurogame worker-placement + time-travel resource-management by Mindclash Games (2017); players lead post-apocalyptic factions competing to build a New Earth using giant Exosuit workers + Time Travel loans. 2-4 players; 2-3 hrs.",
  longDescription:
    "Anachrony is a heavy Eurogame by Mindclash Games (Hungary), released 2017 (base game) with several expansions (Fractures of Time 2020, Classic + Essential Editions 2022+). Designed by Dávid Turczi + Viktor Peter + Richárd Amann. Players lead one of four post-apocalyptic factions (Path of Harmony — Balanced, Path of Progress — Tech-focused, Path of Salvation — Religion-focused, Path of Dominance — Aggressive) competing to build a New Earth using worker-placement + resource-management mechanics enhanced by a signature Time Travel loan system. Central mechanic: giant mechanical Exosuit workers augment normal workers to reach premium locations. Time Travel loans allow players to borrow future resources (with anachrony/paradox risk if unpaid by future turn). Rich hex-map + engine-building. Playtime 2-3 hours; complexity 4.03/5 on BoardGameGeek; ranked ~Top 50 games all-time on BGG. Not a competition-heavy tournament game (unlike CCGs) — competitive scene primarily leaderboard-focused via Board Game Arena + Yucata + community Discord tournaments. Considered a modern classic of the heavy Eurogame + resource-management genre.",
  category: "board-games",
  subCategory: "heavy Eurogame worker-placement",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "HU",
  regionOfOrigin: "Hungary (Mindclash Games, Budapest)",
  estimatedOrigin: "Kickstarter 2017; original release 2018; Classic + Essential Editions 2022",
  players: { min: 1, max: 4, note: "1-4 players (solo variant via Chronobot AI); 4 players adds ~30 min." },
  equipment: [{ name: "Anachrony base game", description: "MSRP ~$100; heavy component load (large hex map + exosuit minis)." }, { name: "Fractures of Time expansion (2020)", description: "Adds 2 new factions + additional Exopath tech." }, { name: "Classic + Essential Editions (2022+)", description: "Reissued streamlined + full-fat versions." }],
  duration: { approximateMinutes: 150, structure: "2-3 hours playtime (2 hrs 2P, 3 hrs 4P); 7 turns typically." },
  objective: "Score most Victory Points across 7 turns via building infrastructure + Timeline Anomaly management.",
  matchStructure: "7 turns of worker + exosuit placement + Time Travel loans; final scoring at end.",
  basicRules: [
    { title: "Worker + Exosuit placement", body: "Place normal workers on standard locations; Exosuits reach premium locations." },
    { title: "Time Travel loans (Warp)", body: "Borrow resources from future turn; must repay or face paradox penalty." },
    { title: "Faction-unique abilities", body: "Each of 4 factions has unique Chief + Path abilities." },
    { title: "Impact = end-of-game major event", body: "Impact turn 6 - one-time massive event affecting scoring." },
  ],
  scoring: { summary: "VP from Buildings + Resources + Timelines + Achievements at end of 7 turns.", winCondition: "Most VP after final scoring." },
  positions: [{ name: "Faction Leader (player)", role: "Controls one of 4 factions.", count: 1 }],
  governingBodies: [{ name: "Mindclash Games", founded: 2015, headquarters: "Budapest, Hungary" }],
  majorCompetitions: [{ name: "Board Game Arena Anachrony Leaderboard", frequency: "ongoing", founded: 2020, region: "worldwide (online)" }, { name: "SPIEL Essen Anachrony demo tournaments", frequency: "annual", founded: 2017, region: "Essen, Germany" }],
  countriesPlayed: ["HUN", "USA", "GER", "GBR", "FRA", "ITA", "POL"],
  famousAthletes: ["Dávid Turczi (designer)", "Viktor Peter (designer)", "Richárd Amann (designer)"],
  records: [
    { title: "Kickstarter 2017 huge success", holder: "Mindclash Games", value: "Anachrony Kickstarter Jan 2017 raised $460,000 (30x goal); shipping 2018", year: 2017 },
    { title: "BGG top-50 all-time ranking", holder: "Mindclash Games", value: "Anachrony ranked ~Top 50 games all-time on BoardGameGeek (~4.03/5 complexity)", year: 2024 },
  ],
  variants: ["anachrony-essential-edition", "anachrony-classic-edition", "anachrony-fractures-of-time"],
  relatedSports: ["ark-nova", "brass-birmingham", "gaia-project", "terra-mystica"],
  skills: ["worker-placement optimization", "engine-building", "loan management (Time Travel paradox)", "faction-specific strategy"],
  wikipediaTitle: "Anachrony (game)",
  sources: [{ label: "BoardGameGeek — Anachrony", url: "https://boardgamegeek.com/boardgame/213460/anachrony", publisher: "BoardGameGeek" }, { label: "Mindclash Games official", url: "https://mindclashgames.com", publisher: "Mindclash Games" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default anachrony;
