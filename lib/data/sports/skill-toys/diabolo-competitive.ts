import type { Sport } from "@/lib/types";

export const diaboloCompetitive: Sport = {
  id: "diabolo-competitive",
  slug: "diabolo-competitive",
  name: "Competitive Diabolo",
  officialName: "IJA Diabolo Championships / EJC Diabolo Battle",
  aliases: ["Chinese Yo-Yo Competition", "Diabolo Battle", "IJA Diabolo Championship"],
  shortDescription:
    "Competitive juggling-adjacent skill toy where players perform tricks with a spinning hourglass-shaped diabolo on a string held between two sticks; International Jugglers' Association (IJA) + European Juggling Convention (EJC) sanction leading global championships.",
  longDescription:
    "Competitive diabolo is the modern tournament scene for the diabolo — a hourglass-shaped spinning skill toy manipulated on a string held between two handsticks (also called Chinese yo-yo, kong zhu 空竹, or Chinese top). Modern rubber/plastic composite diabolos (Sundia, Mister Babache, Play Juggling, Henry's) enable extreme spin rates + advanced tricks. Governed at highest level by the International Jugglers' Association (IJA, founded 1947, USA — annual IJA Festival hosts Diabolo Championship) and European Juggling Convention (EJC, founded 1978 — EJC Diabolo Battle is Europe's premier event). Chinese Yo-Yo (Kong Zhu) also has huge traditional + national scene in China (World Chinese Yo-Yo Championship since 2003). Trick genres: 1D (single diabolo — grinds, whips, satellites, suicides), 2D (two diabolos in shuffle, sync, or high-toss), 3D (three diabolos — advanced), Vertical Axis (VA), Off-String / Vertax, High-Toss + Cast. Signature tricks: Trapeze, Sun, Around the Leg, Satellite, Cats Cradle Escape, Fan, Shuffle, Sync-Whip, Vertax, Genocide, Cast (5+ diabolo cascade). Notable players: Priam Pierret (FRA, IJA gold multiple times), Jeremy Weiss (USA), Marcel Kimble (GER), Wei-Chen Lin (TWN, multi-time world champ), Kevin Yiao (Chinese Yo-Yo champion), Ashley Beattie (USA women's champion).",
  category: "skill-toys",
  subCategory: "diabolo (competitive freestyle)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (traditional Kong Zhu ~1st century BCE); modern circus discipline 19th century Europe",
  estimatedOrigin: "Traditional Chinese Kong Zhu ~1st century BCE; modern competitive scene 1980s-2000s",
  players: { min: 1, max: 1, note: "Individual freestyle; team + pair events at IJA + EJC." },
  equipment: [{ name: "Competition diabolo (Sundia, Babache, Play, Henry's)", description: "Rubber/plastic hourglass-shape ~100-150 g typical." }, { name: "Handsticks (paired)", description: "Aluminum, carbon fiber, or wood; typically 30-40 cm." }, { name: "Diabolo string (100% nylon or blend)", description: "Consumable; typical length 2-4 m." }],
  duration: { approximateMinutes: 3, structure: "Routine 2:00-3:00 typical; freestyle music-timed." },
  objective: "Perform highest-difficulty tricks + combos + cleanest execution in music-timed routine.",
  matchStructure: "IJA/EJC: preliminaries → finals; judged panel scoring; some events use head-to-head Battle format.",
  basicRules: [
    { title: "Music-timed freestyle routine", body: "Player performs choreographed routine (typically 2-3 min)." },
    { title: "Judged by TES + PES", body: "Technical Execution + Performance Execution scored 0-10 by panel." },
    { title: "Deductions for drops", body: "Each drop = deduction; multi-drop cascades penalized heavily." },
    { title: "Battle format head-to-head (some events)", body: "EJC Battle uses head-to-head rounds; audience + judge vote decides winner." },
  ],
  scoring: { summary: "TES + PES scoring 0-10 per judge; combined weighted; highest total wins.", winCondition: "Highest combined judge score." },
  positions: [{ name: "Diabolo player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Head Judge", "Technical Judges (3-5)"], summary: "3-5 judge panel per event." },
  governingBodies: [{ name: "IJA (International Jugglers' Association)", founded: 1947, headquarters: "USA" }, { name: "EJA (European Juggling Association)", founded: 1978, headquarters: "Europe" }, { name: "Chinese National Kong Zhu Association", founded: 2003, headquarters: "China" }],
  majorCompetitions: [{ name: "IJA Championships (Individual + Team Diabolo)", frequency: "annual", founded: 1947, region: "USA (rotating)" }, { name: "EJC Diabolo Battle", frequency: "annual", founded: 1978, region: "Europe (rotating)" }, { name: "World Chinese Yo-Yo Championship (Kong Zhu)", frequency: "biennial", founded: 2003, region: "China (rotating)" }],
  countriesPlayed: ["CHN", "TWN", "USA", "FRA", "GER", "JPN", "GBR", "CZE", "NLD"],
  famousAthletes: ["Priam Pierret (FRA — multi-time IJA gold)", "Jeremy Weiss (USA)", "Marcel Kimble (GER)", "Wei-Chen Lin (TWN — multi-time world champion)", "Ashley Beattie (USA — women's champion)", "Kevin Yiao (CHN — Kong Zhu champion)"],
  records: [
    { title: "IJA Diabolo Championship since 1947", holder: "IJA", value: "IJA Diabolo Championship — component of IJA Festival since 1947 (oldest juggling event)", year: 1947 },
    { title: "World Chinese Yo-Yo Championship since 2003", holder: "Chinese National Kong Zhu Association", value: "World Chinese Yo-Yo Championship biennial since 2003 in China", year: 2024 },
  ],
  variants: ["1-diabolo", "2-diabolo", "3-diabolo", "vertax-vertical-axis", "off-string-diabolo"],
  relatedSports: ["yoyo-freestyle", "kendama-competitive", "juggling-competitive"],
  skills: ["spin rate control", "stick coordination", "trick chaining", "recovery from near-drops", "high-toss + cast timing"],
  wikipediaTitle: "Diabolo",
  sources: [{ label: "Wikipedia — Diabolo", url: "https://en.wikipedia.org/wiki/Diabolo", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default diaboloCompetitive;
