import type { Sport } from "@/lib/types";

export const raffa: Sport = {
  id: "raffa",
  slug: "raffa",
  name: "Raffa (Boules)",
  officialName: "Raffa Bocce (FIB / CMSB)",
  aliases: ["Raffa Bocce", "Punto Raffa Volo (encompassing)", "Italian Boules — Raffa"],
  shortDescription:
    "Italian boules specialty — synthetic balls (~1kg) played on 26.5m × 4.5m clay lane; features unique 'raffa' shooting technique (ball rolled with hand-arc past thigh) making Italian raffa distinct from French Boules Lyonnaise.",
  longDescription:
    "Raffa is the Italian codified specialty of boules, part of the broader Punto Raffa Volo (PRV) system encompassing Italian precision boules disciplines. Played with synthetic (composite/polymer) balls ~1000-1100g on a 26.5m × 4.5m clay lane, Raffa is distinguished by its unique shooting technique — 'raffa' — a rolling arc thrown from below thigh height with the palm facing up (not the aerial throw of French Boules Lyonnaise). Codified by FIB (Fédération Internationale de Boules) with Italian federation FIB-Italia as national body, Raffa is contested at the CBI World Championships (annual, since 1946), World Games (since 1985), and pan-Italian professional Serie A + B leagues. Italian regions Piedmont, Liguria, Emilia-Romagna, and Sardinia dominate. Distinct from bocce (small, family/backyard) and from Boules Lyonnaise (French classical). Argentine + Uruguayan raffa scenes are strong via Italian immigrant history.",

  category: "precision-sports",
  subCategory: "Italian boules (throw + target)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (Piedmont + Liguria region origins; modern rules codified 20th century); FIB governance since 1946",
  estimatedOrigin: "19th-20th century Italy; FIB world confederation 1946; World Games 1985+",

  players: { min: 1, max: 4, note: "Singles (1v1), doubles (2v2), triples (3v3), quadruples (4v4)." },
  field: {
    surfaceName: "Raffa lane (26.5m × 4.5m clay strip)",
    dimensions: "26.5m × 4.5m; slightly different from Boules Lyonnaise 27m × 4m",
    description: "Clay/sand playing surface; approach line + throwing zone at each end; symmetric play from either end.",
  },
  equipment: [
    { name: "Raffa balls (synthetic)", description: "Composite polymer balls 1000-1100g; distinct from Boules Lyonnaise metal balls." },
    { name: "Pallino (jack)", description: "Small target ball ~35mm; thrown to establish target position." },
    { name: "Measuring string", description: "Referees use for distance disputes." },
    { name: "Court shoes", description: "Non-marking soft-soled." },
  ],
  duration: { approximateMinutes: 90, structure: "Match to 12 (singles) or 15 (doubles/triples) pts; 60-120 min." },
  objective: "Score by placing team's balls closer to pallino than opposing team's closest ball; race to target score.",
  matchStructure: "Race to 12/15. Each round (mano): both teams throw all balls; nearest-ball team scores 1 pt per ball closer than opponent's nearest.",

  basicRules: [
    { title: "Pallino placement", body: "Round starter throws pallino 6-10m from throwing zone." },
    { title: "Accosto (pointing throw)", body: "Balls thrown to stop close to pallino." },
    { title: "Raffa (shooting throw)", body: "Ball rolled at speed with hand-arc from below thigh height; must displace target ball at least 40cm." },
    { title: "Bocciata (aerial shooting)", body: "Full aerial shot allowed in some rulesets; must hit target directly." },
    { title: "Score end of round", body: "Team with balls closest to pallino scores 1 pt per closer ball." },
  ],
  advancedRules: [
    { title: "Raffa vs. bocciata distinction", body: "Raffa is rolled; bocciata is aerial. Raffa is signature Italian technique; distinct from French rafle." },
    { title: "Pallino minimum distance", body: "Pallino must land at minimum 6m from throwing zone in Raffa; different from Boules Lyonnaise's 12m." },
    { title: "Marked landing zones", body: "Some tournaments mark specific pointing landing zones like Boules Lyonnaise." },
    { title: "40cm displacement rule", body: "For a shot to be legal 'raffa', target ball must be displaced at least 40cm." },
  ],
  scoring: {
    summary: "1 pt per ball closer than opponent's closest per round; race to target.",
    winCondition: "First team to 12 (singles) or 15 (doubles/triples) wins match.",
    breakdown: [
      { action: "Ball closer than opponent's closest", points: "1" },
      { action: "Multi-ball closer", points: "1 per closer ball" },
    ],
  },
  penalties: [
    { title: "Ball outside lane", body: "Ball invalid — no score." },
    { title: "Illegal raffa (below 40cm displacement)", body: "Shot invalid — target replaced." },
    { title: "Pallino knocked out", body: "Round replayed." },
  ],

  positions: [
    { name: "Puntatore (pointer)", role: "Specialist in accosto (pointing throws).", count: 1 },
    { name: "Bocciatore (shooter)", role: "Specialist in raffa / bocciata (shooting throws).", count: 1 },
    { name: "Mezzano (middle, triples+)", role: "Flexible role in team formats.", count: 1 },
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
    { name: "FIB World Championship Raffa", frequency: "quadrennial", founded: 1946, region: "worldwide" },
    { name: "World Games (Raffa)", frequency: "quadrennial", founded: 1985, region: "worldwide" },
    { name: "Italian National Championship (FIB-Italia)", frequency: "annual", founded: 1897, region: "Italy" },
    { name: "European Championship Raffa", frequency: "biennial", founded: 1975, region: "Europe" },
  ],
  countriesPlayed: ["IT", "FR", "AR", "UY", "SI", "HR", "MC", "SM", "BR", "MA", "TN", "MT"],
  famousAthletes: [
    "Diego Rizzi (Italy — multiple Italian national champion + FIB World)",
    "Luigi Poggi (Italy — Serie A legend)",
    "Enrico Birolo (Italy — Italian champion multi-year)",
    "Various Argentine national team members (immigrant Italian raffa community)",
  ],
  records: [
    { title: "Most Italian raffa titles", holder: "Various Italian pros", value: "Serie A + national championship dominance rotates across top clubs", year: 2023 },
    { title: "Longest continuous Italian bocce federation", holder: "FIB-Italia", value: "Founded 1897 as world's oldest national bocce federation", year: 2024 },
    { title: "World Games participation", holder: "Raffa", value: "Contested at every World Games since 1985", year: 2025 },
  ],

  variants: ["singles-1v1-race-to-12", "doubles-2v2-race-to-15", "triples-3v3-race-to-15", "raffa-only-vs-bocciata-mixed"],
  relatedSports: ["boules-lyonnaise", "petanque", "bocce", "volo", "punto-raffa-volo", "lawn-bowls"],

  skills: ["accosto (pointing) precision", "raffa (rolled shooting) technique", "distance judgment on clay", "team role coordination", "pallino positioning strategy"],
  strategies: [
    { title: "Accosto first, raffa on threat", body: "Start with pointing throws; raffa (shoot) only when opponent takes closer position." },
    { title: "Raffa vs. bocciata choice", body: "Raffa (rolled) more controlled but shorter range; bocciata (aerial) faster + longer but harder." },
    { title: "Pallino distance advantage", body: "Throw pallino to your team's comfort distance (6-8m typical for Italian raffa)." },
    { title: "Team role assignment", body: "Doubles: 1 pointer + 1 shooter. Triples: pointer + shooter + flex." },
  ],

  terminology: [
    { term: "Pallino", meaning: "Small target ball (Italian equivalent of French cochonnet)." },
    { term: "Accosto", meaning: "Pointing throw." },
    { term: "Raffa", meaning: "Signature Italian rolled shooting technique." },
    { term: "Bocciata", meaning: "Aerial shooting throw." },
    { term: "Mano", meaning: "Round / end of throws by both teams." },
    { term: "Punto Raffa Volo (PRV)", meaning: "Umbrella of Italian precision boules disciplines." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join Italian FIB-Italia club (Bocciofila)", body: "Every Italian town has a bocciofila (bocce club); 1000+ nationally; casual + competitive available." },
      { title: "Learn accosto pointing first", body: "Master consistent pointing before raffa shooting." },
      { title: "Practice raffa technique", body: "Rolled shooting from below thigh — signature Italian technique different from French rafle." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in Italian Serie B → Serie A", body: "Italy's professional raffa league pyramid." },
      { title: "Italian national championship qualifier", body: "Regional → provincial → national pathway." },
      { title: "FIB World Championship + World Games", body: "Quadrennial peak events." },
    ]},
  ],

  faq: [
    { question: "What's the difference between raffa, volo, and punto?", answer: "These are three related Italian boules disciplines under the Punto Raffa Volo (PRV) umbrella. PUNTO is pointing-only skill contest; RAFFA is the rolled shooting technique specialty; VOLO is the aerial shooting (French Boules Lyonnaise-style) specialty. All three are contested at Italian championships as separate events + combined." },
    { question: "How is Raffa different from Boules Lyonnaise?", answer: "Raffa uses synthetic polymer balls (vs. Lyonnaise's metal); shorter lane (26.5m vs. 27m); Italian rolled raffa shooting technique (vs. French aerial rafle); pallino at 6m minimum (vs. 12m in Lyonnaise); Italian rule sets. Both are FIB-governed and share history but are distinct competitive disciplines." },
    { question: "Is Raffa played outside Italy?", answer: "Strong scenes in Argentina + Uruguay (Italian immigrant heritage), France, Slovenia, Croatia, Morocco, Tunisia, San Marino, and Monaco. Italy remains dominant with ~1M FIB-Italia members." },
  ],

  wikipediaTitle: "Bocce",
  sources: [
    { label: "FIB", url: "https://www.fibsl.com", publisher: "Fédération Internationale de Boules" },
    { label: "Wikipedia — Bocce", url: "https://en.wikipedia.org/wiki/Bocce", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
