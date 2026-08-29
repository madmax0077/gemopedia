import type { Sport } from "@/lib/types";

export const volo: Sport = {
  id: "volo",
  slug: "volo",
  name: "Volo (Bocce Volo)",
  officialName: "Bocce Volo (FIB / CMSB)",
  aliases: ["Bocce Volo", "Aerial Bocce", "Boccia Volo (Italian aerial)"],
  shortDescription:
    "Italian aerial boules specialty featuring aerial shooting technique similar to French Boules Lyonnaise's rafle — heavier metal balls, 27m × 4m clay lane; contested internationally under FIB/CMSB alongside its Italian cousins raffa and punto.",
  longDescription:
    "Volo (Bocce Volo, 'aerial bocce') is the Italian counterpart to French Boules Lyonnaise — sharing the aerial rafle shooting technique and heavy metal balls but codified within the Italian boules system alongside raffa (rolled shooting) and punto (pointing skill). Played with metal balls ~1000-1100g on a 27m × 4m clay lane, Volo requires the same 3-step running approach for shooting throws as Boules Lyonnaise, but is governed under Italian federation rules with slightly different scoring and lane specifications. Contested at the FIB World Championships, World Games (since 1985), and Italian national championships. Strongholds: Piedmont, Liguria, and northeastern Italy; also strong scenes in France (bilingual border regions), Slovenia, Croatia. Historically Italian pros compete in both Volo and Boules Lyonnaise cross-tournaments due to near-identical technique.",

  category: "precision-sports",
  subCategory: "Italian aerial boules (throw + target)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (northern regions Piedmont + Liguria); shared French border tradition with Boules Lyonnaise",
  estimatedOrigin: "19th-20th century Italy; FIB world confederation 1946; World Games 1985+",

  players: { min: 1, max: 4, note: "Singles (1v1), doubles (2v2), triples (3v3), quadruples (4v4)." },
  field: {
    surfaceName: "Volo lane (27m × 4m clay strip)",
    dimensions: "27m × 4m; near-identical to French Boules Lyonnaise",
    description: "Clay/sand rectangular lane; approach line + throwing zone at both ends; marked landing zones for pointing throws.",
  },
  equipment: [
    { name: "Volo balls (metal)", description: "Metal balls 1000-1100g; near-identical to Boules Lyonnaise." },
    { name: "Pallino (jack)", description: "Small target ball ~35mm." },
    { name: "Measuring string + chalk", description: "For distance disputes." },
    { name: "Court shoes", description: "Non-marking soft-soled." },
  ],
  duration: { approximateMinutes: 90, structure: "Match to 12 (singles) or 15 (doubles/triples) pts; 60-120 min." },
  objective: "Score by placing team's balls closer to pallino than opposing team's closest ball; race to target.",
  matchStructure: "Race to 12/15. Each round: both teams throw; nearest-ball team scores 1 pt per closer ball.",

  basicRules: [
    { title: "Pallino placement", body: "Round starter throws pallino 12-20m from throwing zone." },
    { title: "Pointing (accosto)", body: "Balls thrown to land near pallino." },
    { title: "Volo (aerial shooting)", body: "Ball thrown aerial with 3-step running approach; aims to knock opposing ball or move pallino." },
    { title: "Score end of round", body: "Team with balls closest to pallino scores 1 pt per closer ball than opponent's closest." },
  ],
  advancedRules: [
    { title: "3-step approach mandatory", body: "Shooting throws require 3-step running approach identical to Boules Lyonnaise rafle." },
    { title: "Pallino displacement rule", body: "Shot must displace target at least 40cm (similar to raffa)." },
    { title: "Ball must not exit lane", body: "Balls outside lane = invalid." },
    { title: "Volo vs. Raffa distinction", body: "Same player often specialty in one — volo (aerial) or raffa (rolled) — but pros develop both." },
  ],
  scoring: {
    summary: "1 pt per ball closer to pallino than opponent's closest, per round. Race to target.",
    winCondition: "First team to 12/15 wins match.",
    breakdown: [
      { action: "Ball closer than opponent's closest", points: "1" },
      { action: "Multiple balls closer", points: "1 per closer ball" },
    ],
  },
  penalties: [
    { title: "Ball outside lane", body: "Invalid — no score." },
    { title: "False start", body: "Throw invalidated." },
    { title: "Pallino knocked out", body: "Round replayed." },
  ],

  positions: [
    { name: "Puntatore (pointer)", role: "Pointing specialist.", count: 1 },
    { name: "Bocciatore (shooter/volo specialist)", role: "Aerial shooting specialist.", count: 1 },
    { name: "Mezzano (middle, triples+)", role: "Flexible team role.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Line judges (2)", "Scorekeeper"],
    summary: "3-4 officials at FIB events.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Boules (FIB)", founded: 1946, headquarters: "Turin, Italy", website: "https://www.fibsl.com" },
    { name: "Federazione Italiana Bocce (FIB-Italia)", founded: 1897, headquarters: "Rome, Italy" },
    { name: "Confédération Mondiale des Sports de Boules (CMSB)", founded: 1985, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "FIB World Championship Volo", frequency: "quadrennial", founded: 1946, region: "worldwide" },
    { name: "World Games (Volo)", frequency: "quadrennial", founded: 1985, region: "worldwide" },
    { name: "Italian National Championship Volo (FIB-Italia)", frequency: "annual", founded: 1897, region: "Italy" },
    { name: "European Championship", frequency: "biennial", founded: 1975, region: "Europe" },
  ],
  countriesPlayed: ["IT", "FR", "SI", "HR", "MC", "SM", "AR", "MA", "TN", "BR", "UY", "CH"],
  famousAthletes: [
    "Diego Rizzi (Italy — multi-discipline PRV champion)",
    "Luigi Poggi (Italy — Serie A legend)",
    "Various Italian regional volo specialists",
    "Argentine national team volo competitors",
  ],
  records: [
    { title: "Volo + Boules Lyonnaise combined dominance", holder: "France + Italy", value: "Every FIB World Championship + World Games volo/lyonnaise title since 1946 has gone to France or Italy", year: 2025 },
    { title: "Italian PRV multi-discipline champion", holder: "Various Italian pros", value: "Top Italians hold titles across punto + raffa + volo simultaneously (rare multi-discipline achievement)", year: 2023 },
  ],

  variants: ["singles-1v1-race-to-12", "doubles-2v2-race-to-15", "triples-3v3-race-to-15", "volo-only-italian-tournament-format"],
  relatedSports: ["boules-lyonnaise", "raffa", "punto", "bocce", "petanque", "lawn-bowls"],

  skills: ["3-step running approach precision", "aerial ball trajectory reading", "pointing (accosto) accuracy", "team role coordination", "pallino positioning"],
  strategies: [
    { title: "Volo when raffa insufficient", body: "Aerial shooting excels when target ball is protected by other balls; volo can reach shielded targets that raffa cannot." },
    { title: "3-step approach precision", body: "Consistency of 3-step run-up is the fundamental skill; deviations ruin volo accuracy." },
    { title: "Combined team specialty", body: "Team of pointer + volo shooter + raffa shooter covers all shooting scenarios." },
    { title: "Pallino placement", body: "Long pallino (16-18m) favors volo specialists; short pallino (12-14m) balances raffa/pointing." },
  ],

  terminology: [
    { term: "Volo", meaning: "Italian for 'aerial' — signature technique of this discipline." },
    { term: "Pallino", meaning: "Target ball (Italian jack)." },
    { term: "Bocciatore", meaning: "Shooter/volo specialist (Italian)." },
    { term: "Accosto", meaning: "Pointing throw." },
    { term: "Mano", meaning: "Round / end of throws by both teams." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join Italian FIB-Italia bocciofila", body: "Northern Italian clubs (Piedmont, Liguria) most active in volo." },
      { title: "Learn pointing first", body: "Master accosto before aerial shooting." },
      { title: "Practice 3-step approach", body: "Long process — 6-12 months to consistency; coach + video review recommended." },
    ]},
    { level: "advanced", steps: [
      { title: "Italian Serie A/B pro league (volo section)", body: "Italian pro league competes across punto/raffa/volo." },
      { title: "FIB World Championship Volo", body: "Via national federation quota." },
      { title: "World Games volo event", body: "Every 4 years." },
    ]},
  ],

  faq: [
    { question: "Is Volo the same as Boules Lyonnaise?", answer: "Nearly — Volo (Italian) and Boules Lyonnaise (French) share the aerial 3-step shooting technique, ~1kg metal balls, and 27m × 4m lane. Italian volo is codified under FIB-Italia with slight scoring + lane rule differences from French codification. Pros often compete in both cross-tournaments; the two disciplines are considered a shared European tradition split by federation." },
    { question: "What is the PRV system?", answer: "PRV = Punto Raffa Volo — the Italian umbrella of three related bocce specialties: PUNTO (pointing skill event only), RAFFA (rolled shooting specialty), and VOLO (aerial shooting specialty). Italian championships often contest all three separately + combined. Top Italian competitors specialize in one but often hold titles across multiple." },
    { question: "Is Volo Olympic?", answer: "No — but Volo is contested at the World Games (since 1985) alongside its cousins Punto, Raffa, and Boules Lyonnaise as part of the Sport-Boules program." },
  ],

  wikipediaTitle: "Bocce",
  sources: [
    { label: "FIB", url: "https://www.fibsl.com", publisher: "Fédération Internationale de Boules" },
    { label: "Wikipedia — Bocce", url: "https://en.wikipedia.org/wiki/Bocce", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
