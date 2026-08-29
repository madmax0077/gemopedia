import type { Sport } from "@/lib/types";

export const boulesLyonnaise: Sport = {
  id: "boules-lyonnaise",
  slug: "boules-lyonnaise",
  name: "Boules Lyonnaise",
  officialName: "Sport-Boules (Boule Lyonnaise)",
  aliases: ["Sport-Boules", "Boule Lyonnaise", "Bocce Volo (Italian equivalent)", "Jeu Lyonnais"],
  shortDescription:
    "The French classical form of boules — heavier metal balls (~1kg), played on a strict 27m × 4m lane with 3-step run-up (rafle), 15m throwing distances; contested at CBI World Championships since 1946 and FIB-run circuits across France + Italy + Balkans.",
  longDescription:
    "Boules Lyonnaise (Sport-Boules), also called Boule Lyonnaise, is the classical French form of boules — a bowling-target sport where players throw metal balls (~900-1200g each) toward a small target ball (cochonnet / jack), aiming closest wins. Unlike its cousin pétanque (played casually anywhere), Boules Lyonnaise is played on a strict 27m long × 4m wide lane with formal rules: pointing throws must land in a marked 12-15m zone; shooting throws (raffle) require a 3-step running approach before release; balls are much heavier (~1 kg vs pétanque's 700g); throws are 15+ m distances (vs. pétanque's typical 6-10m). Codified in Lyon in the mid-19th century, Boules Lyonnaise is contested at the CBI (Confédération Mondiale des Sports de Boules) World Championships since 1946, is a World Games regular (since 1985), and has strong scenes in France (especially Rhône-Alpes region), Italy (called Bocce Volo), Balkans (Slovenia, Croatia, Serbia), and Switzerland. FIB (Fédération Internationale de Boules) governs the discipline.",

  category: "precision-sports",
  subCategory: "boules (throw + target lane sport)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "Lyon, France (mid-19th century codification); CBI + FIB since mid-20th century",
  estimatedOrigin: "Mid-19th century Lyon; CBI (world confederation) founded 1946; FIB governance ongoing; World Games 1985+",

  players: { min: 1, max: 4, note: "Singles (1v1), doubles (2v2), triples (3v3), quadruples (4v4)." },
  field: {
    surfaceName: "Boules Lyonnaise lane (27m × 4m rectangular strip)",
    dimensions: "27m long × 4m wide (standard); marked throwing + landing zones",
    description: "Rectangular clay/sand lane; approach line at one end; 12.5m mid-zone for pointing landings; free zone rest of lane for shooting.",
  },
  equipment: [
    { name: "Boules Lyonnaise balls", description: "Metal balls 900-1200g (much heavier than pétanque); 90-110mm diameter; unique to the sport." },
    { name: "Cochonnet (jack)", description: "Small target ball ~30-35mm; thrown to establish target position at start of each round." },
    { name: "Marker chalk / string", description: "Referees use string + chalk to measure ball distances from cochonnet." },
    { name: "Soft-soled shoes", description: "Non-marking court shoes for grip on clay lane." },
  ],
  duration: { approximateMinutes: 90, structure: "Match to fixed score (typically 13 points in singles; 15 in doubles/triples). Total 60-120 min." },
  objective: "Score points by placing your team's balls closer to the cochonnet (jack) than the closest opposing ball at end of each round (mène).",
  matchStructure: "Match to 13 or 15 pts. Each round (mène): both teams throw all their balls; team with balls closest to cochonnet scores 1 pt per ball closer than opponent's closest.",

  basicRules: [
    { title: "Cochonnet placement", body: "First-round starter throws cochonnet 12-20m from throwing zone." },
    { title: "Pointing throw", body: "Balls thrown to stop close to cochonnet; must land in marked 12.5m zone (unlike shooting)." },
    { title: "Shooting throw (raffle)", body: "Balls thrown with 3-step running approach before release; aims to knock opposing ball away from cochonnet." },
    { title: "Score by closest ball at end of round", body: "Team with ball closest to cochonnet scores 1 pt per ball closer than opponent's closest." },
    { title: "Player throw order", body: "Team behind in the mène throws next; strategic order rotation." },
  ],
  advancedRules: [
    { title: "Rafle (running shoot)", body: "3-step running approach required for shooting throws; ball released after step 3; huge power + distance advantage." },
    { title: "Balls must not exit lane", body: "Balls leaving lane boundaries = no score." },
    { title: "Pointing zone landing rule", body: "Pointing throws must land within marked 12.5m zone; landing outside = no score." },
    { title: "Cochonnet knock-out", body: "If cochonnet is knocked out of lane by shot, round is replayed with cochonnet respotted." },
  ],
  scoring: {
    summary: "1 pt per ball closer to cochonnet than opponent's closest, per round. Race to 13 or 15.",
    winCondition: "First team to reach target score (13 singles, 15 doubles/triples) wins.",
    breakdown: [
      { action: "Ball closer than opponent's closest", points: "1" },
      { action: "Multiple balls closer than opponent's closest", points: "1 per closer ball (max = balls per player × team size)" },
    ],
  },
  penalties: [
    { title: "Ball outside lane", body: "No score — ball invalid." },
    { title: "Pointing throw outside marked zone", body: "No score." },
    { title: "False start on shooting", body: "Throw invalidated." },
    { title: "Cochonnet knocked out", body: "Round replayed." },
  ],

  positions: [
    { name: "Pointer (pointeur)", role: "Specialist in placing balls near cochonnet.", count: 1 },
    { name: "Shooter (tireur)", role: "Specialist in shooting throws (raffle) to knock opposition away.", count: 1 },
    { name: "Middle (milieu, triples+)", role: "Flexible role in triples/quadruples formats.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Line judges (2)", "Scorekeeper"],
    summary: "3-4 officials at FIB events; casual play self-refereed.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Boules (FIB)", founded: 1946, headquarters: "Turin, Italy", website: "https://www.fibsl.com" },
    { name: "Confédération Mondiale des Sports de Boules (CMSB)", founded: 1985, headquarters: "France" },
    { name: "Fédération Française du Sport-Boules (FFSB)", founded: 1933, headquarters: "Lyon, France" },
  ],
  majorCompetitions: [
    { name: "FIB World Championship Boules Lyonnaise", frequency: "quadrennial", founded: 1946, region: "worldwide (rotating hosts)" },
    { name: "World Games (Sport-Boules)", frequency: "quadrennial", founded: 1985, region: "worldwide" },
    { name: "European Championship", frequency: "biennial", founded: 1970, region: "Europe" },
    { name: "French National Championship (FFSB)", frequency: "annual", founded: 1933, region: "France" },
  ],
  countriesPlayed: ["FR", "IT", "SI", "HR", "RS", "SM", "CH", "MC", "AR", "MA", "TN", "BE"],
  famousAthletes: [
    "Philippe Suchaud (France — multiple World Champion + FFSB legend)",
    "Christian Fazzino (France — pointer specialist)",
    "Diego Rizzi (Italy — Italian national champion multi-year)",
    "Various Slovenian + Croatian national team members",
  ],
  records: [
    { title: "Most FIB World Championships (France)", holder: "France", value: "Dominant nation since 1946; multiple team + individual titles across categories", year: 2023 },
    { title: "Longest lane sport", holder: "Boules Lyonnaise", value: "27m lane length + 15m+ throwing distance are longest in any boules-family sport", year: 2020 },
    { title: "World Games appearances", holder: "Sport-Boules", value: "Contested at every World Games since Los Angeles 1985 (11+ editions)", year: 2025 },
  ],

  variants: ["singles-1v1-race-to-13", "doubles-2v2-race-to-15", "triples-3v3-race-to-15", "quadruples-4v4-race-to-15", "italian-bocce-volo-variant"],
  relatedSports: ["petanque", "bocce", "raffa", "volo", "boules-de-fort", "lawn-bowls", "curling"],

  skills: ["heavy ball throwing precision (~1 kg)", "3-step running rafle technique", "clay lane reading (bumps + speed)", "pointing vs. shooting decision", "cochonnet knock defense", "team strategy (pointer/shooter roles)"],
  strategies: [
    { title: "Pointing first, shooting when needed", body: "Standard opening: place balls near cochonnet with pointing throws; use shooting when opponent has taken close position." },
    { title: "Master rafle for shooting", body: "3-step running rafle is high-difficulty precision skill; separates elite from amateur." },
    { title: "Cochonnet placement matters", body: "Throwing cochonnet to favorable position (own team's comfort distance) is often 1st-round advantage." },
    { title: "Team role specialization", body: "Doubles/triples teams typically have 1 pointer specialist + 1-2 shooter specialists." },
    { title: "Bank + carom on knock", body: "Shot ball can carom into other balls after knocking primary target — plan for secondary damage." },
  ],

  terminology: [
    { term: "Cochonnet / Jack", meaning: "Small target ball; establishing round's aiming point." },
    { term: "Pointeur", meaning: "Pointing throw specialist (French)." },
    { term: "Tireur", meaning: "Shooting throw (rafle) specialist (French)." },
    { term: "Rafle", meaning: "3-step running shooting throw." },
    { term: "Mène", meaning: "Round / end of throws by both teams." },
    { term: "Piquet", meaning: "Ball landing perfectly on cochonnet." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join French or Italian sport-boules club", body: "Lyon, Marseille, Turin, Genoa, Nice have historic clubs; annual membership €50-100." },
      { title: "Practice pointing throws first", body: "Master consistent pointing before attempting rafle shooting technique." },
      { title: "Learn rafle 3-step approach", body: "Requires coach guidance + video review; foundation of competitive play." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in French + Italian regional championships", body: "FFSB regional pyramid feeds into national + international competition." },
      { title: "European Championship qualifier", body: "Via national federation." },
      { title: "FIB World Championship + World Games", body: "Quadrennial peak events; France + Italy dominant." },
    ]},
  ],

  faq: [
    { question: "How is Boules Lyonnaise different from pétanque?", answer: "Boules Lyonnaise uses heavier metal balls (~1 kg vs. pétanque's ~700g), a much longer lane (27m × 4m vs. pétanque's flexible ~15m surface), requires marked landing zones for pointing throws, and uses a 3-step running rafle for shooting (pétanque players throw stationary). Boules Lyonnaise is the classical Lyon-region formal sport; pétanque is the casual Provence-region version played anywhere. Both share French roots but are distinct disciplines with separate world championships." },
    { question: "Is Boules Lyonnaise Olympic?", answer: "No — but Sport-Boules is a permanent World Games sport (since Los Angeles 1985). All boules disciplines (pétanque, boules Lyonnaise, raffa, volo) have been proposed for Olympic inclusion multiple times without success." },
    { question: "Where can I play Boules Lyonnaise outside France?", answer: "Italy (called Bocce Volo — same game with Italian rules variations), Slovenia, Croatia, Serbia, Switzerland, Monaco, Argentina, and North Africa (Morocco, Tunisia — French colonial legacy) all have dedicated Boules Lyonnaise scenes. Northeast Italy + Rhône-Alpes France are the strongest regions." },
  ],

  wikipediaTitle: "Boule lyonnaise",
  sources: [
    { label: "FIB", url: "https://www.fibsl.com", publisher: "Fédération Internationale de Boules" },
    { label: "Wikipedia — Boule lyonnaise", url: "https://en.wikipedia.org/wiki/Boule_lyonnaise", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
