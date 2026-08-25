import type { Sport } from "@/lib/types";

export const oware: Sport = {
  id: "oware",
  slug: "oware",
  name: "Oware",
  officialName: "Oware / Awele / Warri / Wari",
  aliases: ["Ayo", "Awari", "Wari", "Awele", "Ourin (Nigeria)", "Adjito (Benin)"],
  shortDescription:
    "West African MANCALA-family board game. National game of GHANA (Akan people). 2-player strategy game using 2 rows of 6 pits + 48 seeds. Ancient — possibly 4000+ years old. Considered solved mathematically (2002) — first-player win with perfect play. Popular Ghana, Nigeria, Ivory Coast, Caribbean.",
  longDescription:
    "Oware (also AWALE, AYO, AWARI, WARRI) is WEST AFRICAN MANCALA-family board game. NATIONAL GAME OF GHANA — Akan people. Ancient — some scholars date back 4000+ years to ancient Egypt (though direct historical continuity uncertain). Sub-Saharan African + Caribbean cultural staple. Also popular NIGERIA (AYO), IVORY COAST (AWELE), CARIBBEAN (AWARI). 2-PLAYER strategy game using 2 ROWS OF 6 PITS + typically 48 SEEDS (4 per pit initially). MATHEMATICALLY SOLVED 2002 by John Romein + Henri Bal (Vrije Universiteit Amsterdam) — first-player wins with perfect play; game evaluated 899 billion positions. GAMEPLAY: (1) On turn, player picks all seeds from ONE OF OWN pits + SOWS (drops 1 seed each) counter-clockwise into subsequent pits. (2) If last seed lands in opponent's territory + that pit had 1 or 2 seeds (now 2 or 3) = CAPTURE those seeds (add to store). (3) If capture creates 2 or 3 in previous opponent pit, ALSO CAPTURE those (chain). (4) Cannot make move leaving opponent no seeds (starvation rule). GAME ENDS when player cannot move OR captures majority of seeds. WORLD OWARE CHAMPIONSHIPS held in Ghana + globally. Featured in ANANSI folk tales. INTELLECTUAL, EDUCATIONAL, ancient. Considered EXTREMELY DEEP for simple materials.",
  category: "board-games",
  subCategory: "traditional African mancala family strategy game",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "GH",
  regionOfOrigin: "Ghana (Akan people); throughout West Africa + Caribbean",
  estimatedOrigin: "Ancient — possibly 4000+ years old (some link to ancient Egypt); documented centuries in West Africa; solved mathematically 2002 (Romein + Bal)",
  players: { min: 2, max: 2, note: "Strictly 2 players." },
  field: { surfaceName: "Oware board (2 rows × 6 pits + 2 stores)", dimensions: "board ~30cm × 15cm", description: "Wooden board with 2 rows of 6 pits + 2 larger 'stores' at ends for captured seeds." },
  equipment: [
    { name: "Oware board (wooden, traditional carved)", description: "€20-100 traditional; €5-15 plastic" },
    { name: "48 seeds (traditionally cowrie shells or bean seeds)", description: "€5-15" },
  ],
  duration: { approximateMinutes: 20, structure: "Games 15-30 min typical." },
  objective: "Capture more than 24 seeds (majority of 48).",
  basicRules: [
    { title: "Setup: 4 seeds in each of 12 pits", body: "Player controls 6 pits on own side." },
    { title: "Turn: pick all seeds from one own pit + sow counter-clockwise", body: "Drop 1 seed per pit as you go." },
    { title: "Last seed in opponent's pit with 1 or 2 seeds (now 2 or 3) = CAPTURE", body: "Add captured seeds to own store." },
    { title: "Chain capture: previous opponent pit also 2 or 3 = capture too", body: "Continue chain until pit has ≠2 or 3." },
    { title: "STARVATION RULE: cannot make move leaving opponent no seeds", body: "Must play move that gives opponent seeds if possible." },
    { title: "Game ends when player cannot move OR captures majority (24+ of 48)", body: "Winner has most seeds captured." },
  ],
  scoring: {
    summary: "Player capturing 24+ of 48 seeds wins.",
    breakdown: [
      { action: "Capture (2 or 3 seeds in opponent pit after sowing)", points: "Seeds added to own store" },
      { action: "Chain capture", points: "Multiple captures in one move" },
      { action: "24+ seeds captured", points: "Win" },
      { action: "Both captures equal at end", points: "Tie" },
    ],
    winCondition: "Capture 24+ of 48 seeds (majority).",
  },
  governingBodies: [
    { name: "World Oware Federation", founded: 2002, headquarters: "Ghana" },
    { name: "Ghana Awale Federation", founded: 1990, headquarters: "Ghana" },
    { name: "African Mancala Federation", founded: 2000, headquarters: "Africa" },
  ],
  majorCompetitions: [
    { name: "World Oware Championship", frequency: "annual", founded: 2002, region: "worldwide" },
    { name: "Ghana National Awale Championship", frequency: "annual", founded: 1990, region: "Ghana" },
    { name: "Various African + Caribbean tournaments", frequency: "annual", founded: 1990, region: "Africa + Caribbean" },
  ],
  countriesPlayed: ["GH", "NG", "CI", "BJ", "TG", "SN", "BB (Barbados)", "TT (Trinidad)", "JM"],
  famousAthletes: [
    "John Romein + Henri Bal (Netherlands) — Solved Oware 2002 (899 billion positions)",
    "Various Ghanaian + Nigerian oware champions",
  ],
  variants: [
    "oware-standard-2-rows-6-pits-48-seeds",
    "awari-Caribbean-variant",
    "ayo-Nigerian-variant-Yoruba-people",
    "awele-Ivory-Coast-variant",
    "warri-Antigua-variant",
    "mancala-family-general-similar-games-across-Africa-Asia",
  ],
  relatedSports: ["mancala", "bao", "kalah", "gebeta", "sungka", "congkak"],
  skills: ["deep positional strategy", "seed counting", "chain capture planning", "opening theory"],
  strategies: [
    { title: "Control opponent's captures", body: "Manage seed flows to opponent's pits carefully." },
    { title: "Set up chain captures", body: "Multi-pit chain captures are game-winning moves." },
    { title: "Study solved openings (post-2002 analysis)", body: "Elite play informed by computer analysis." },
    { title: "Starvation rule creates positional traps", body: "Force opponent into losing moves." },
  ],
  terminology: [
    { term: "Sowing", meaning: "Distributing seeds from picked pit into subsequent pits." },
    { term: "Capture", meaning: "Taking opponent's seeds when landing creates 2 or 3." },
    { term: "Store / Kalah", meaning: "Larger end pit holding captured seeds." },
    { term: "Starvation", meaning: "Rule preventing move leaving opponent no seeds." },
    { term: "House", meaning: "Individual pit (6 per player)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Oware board (Amazon $15-30 or African cultural stores)", body: "Any 2×6 mancala board works." },
      { title: "Play online (BoardSpace, Board Game Arena)", body: "Free digital versions." },
      { title: "Learn sowing + basic capture", body: "20-30 min to grasp basics." },
    ]},
    { level: "intermediate", steps: [
      { title: "Study chain captures + starvation traps", body: "Deep strategy." },
      { title: "Ghana community events + African cultural centers", body: "Traditional context." },
    ]},
    { level: "advanced", steps: [
      { title: "World Oware Federation tournaments", body: "Global competitive scene." },
      { title: "Study post-2002 solver openings", body: "Modern theory." },
    ]},
  ],
  faq: [
    { question: "What is Oware?", answer: "WEST AFRICAN MANCALA-family board game. NATIONAL GAME OF GHANA (Akan people). Ancient — possibly 4000+ years old. 2 PLAYER using 2 rows of 6 pits + 48 seeds. Take turns picking seeds from own pit + sowing counter-clockwise; capture opponent seeds when last-seed pit has 2 or 3 total. MATHEMATICALLY SOLVED 2002 by John Romein + Henri Bal — first-player wins with perfect play. Also called AWALE, AYO (Nigeria), WARRI (Caribbean). Ghanaian cultural staple + global mancala champion." },
    { question: "How is Oware different from Mancala?", answer: "OWARE IS SPECIFIC VARIANT of MANCALA family. MANCALA = broad category of 200+ related games worldwide. KALAH (American Mancala, 1940s) most familiar to Westerners. BAO (East Africa) uses 4 rows. SUNGKA (Philippines) uses 7 pits per row + 98 seeds. OWARE uses 2 rows × 6 pits + 48 seeds; distinct capture rules (last seed in opponent pit with 1 or 2 → capture). All mancala games share COMMON ORIGIN or PARALLEL EVOLUTION; hundreds of regional variants across Africa + Middle East + Asia." },
    { question: "How is Oware 'solved'?", answer: "In 2002, JOHN ROMEIN + HENRI BAL at VRIJE UNIVERSITEIT AMSTERDAM used SUPERCOMPUTERS to evaluate 899 BILLION possible game positions in Oware. Proved GAME IS DRAW with perfect play from starting position (or first-player win depending exact rule variant used). This makes Oware ONE OF LARGEST GAMES EVER SOLVED (Chess still unsolved). MATHEMATICAL SOLUTION doesn't diminish HUMAN PLAY — analyzing optimal moves requires computers; humans still play with strategic imperfection. Considered LANDMARK computer science achievement." },
  ],
  wikipediaTitle: "Oware",
  sources: [
    { label: "Wikipedia — Oware", url: "https://en.wikipedia.org/wiki/Oware", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
