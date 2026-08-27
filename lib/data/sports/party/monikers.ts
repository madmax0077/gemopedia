import type { Sport } from "@/lib/types";

export const monikers: Sport = {
  id: "monikers",
  slug: "monikers",
  name: "Monikers",
  officialName: "Monikers",
  aliases: ["Monikers"],
  shortDescription:
    "PARTY WORD-DEDUCTION GAME (2015) by ALEX HAGUE + JUSTIN VICKERS (CMYK Games) + KEVIN HOVDESTAD. 4-16 players in 2 teams describe FAMOUS PEOPLE, characters, and cultural references across 3 ESCALATING ROUNDS: Round 1 = describe with words; Round 2 = ONE WORD ONLY; Round 3 = CHARADES. Same card pool re-used across rounds (heightening humor via callback). Descended from tabletop classic PSYCHIATRIST / CELEBRITY / DESCRIBE THE NAMES. Considered THE ORIGINAL modern celebrity party game. HELD BGG top-30 party. 30-60 min.",
  longDescription:
    "MONIKERS is a PARTY WORD-DEDUCTION GAME (2015) designed by ALEX HAGUE + JUSTIN VICKERS (CMYK Games founders, later Wavelength) + KEVIN HOVDESTAD. 4-16 PLAYERS in 2 TEAMS describe FAMOUS PEOPLE, characters, historical figures, memes, and cultural references across 3 ESCALATING ROUNDS. Ancient TABLETOP CLASSIC (public domain concept from CELEBRITY / PSYCHIATRIST / DESCRIBE THE NAMES) polished + revitalized with CURATED cards + irreverent humor cards. UNIQUE THREE-ROUND STRUCTURE: (1) ROUND 1 — describe with any words except the actual name; (2) ROUND 2 — describe with ONLY ONE WORD; (3) ROUND 3 — CHARADES only (no words). SAME CARD POOL re-used across all 3 rounds — heightens humor via CALLBACK to Round 1 descriptions. Considered THE MODERN CLASSIC celebrity party game. HELD BGG TOP-30 PARTY consistently since release. Kickstarted 2014 successfully. Multiple expansion decks. 30-60 MIN. GAMEPLAY: Each player gets 10 CARD ALLOCATION — draws 10 cards, keeps 5, passes 5 (drafting). Combined draft-pool becomes GAME DECK. TEAMS play 3 ROUNDS of TIMED TURNS (60 seconds per turn). Round 1: describe as many cards as possible with any words. Round 2: same cards, describe with ONE WORD ONLY. Round 3: same cards, CHARADES ONLY. Each correct guess = 1 point. Highest team score wins after Round 3. GENIUS FEATURE: SAME 50-100 CARDS re-used through 3 rounds — cards you saw in Round 1 have TEAM CONTEXT (in-jokes) for Rounds 2 + 3. Cards include Ada Lovelace, Zaphod Beeblebrox, John Cena, Sisyphus, Dora the Explorer, Wonder Woman, Napoleon, JFK, David Bowie, Nikola Tesla, Groot, and irreverent entries like 'furries', 'a man kissing a horse', 'JNCO jeans'. RECEPTION: BGG top-30 party since 2015; Golden Geek Best Party Game 2016 nominee; considered THE modern celebrity party game + benchmark.",
  category: "party-games",
  subCategory: "party word-guessing / celebrity theme / drafting / 3-round escalation / CMYK",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (CMYK Games; Alex Hague + Justin Vickers + Kevin Hovdestad)",
  estimatedOrigin: "Kickstarted 2014; released 2015 CMYK Games; multiple expansions since",
  players: { min: 4, max: 16, note: "4-16 players; BEST AT 6-10. Scales well up to large parties." },
  field: {
    surfaceName: "Table for card play",
    dimensions: "~60×60cm",
    description: "Central card pool + timer + team score tracker. Players draft cards initially.",
  },
  equipment: [
    { name: "Monikers base box", description: "$30 USD; 210+ cards" },
    { name: "Monikers: Serious Nonsense expansion (2016)", description: "$20; more cards + irreverent humor" },
    { name: "Monikers: Something Something expansion", description: "$20; expansion deck" },
    { name: "Monikers: Ninja vs Justin Bieber deck", description: "$20; themed expansion" },
    { name: "60-second timer (or phone)", description: "For turn timing" },
  ],
  duration: { approximateMinutes: 45, structure: "30-60 min per full 3-round game." },
  objective: "Score most correct guesses across 3 escalating rounds (words → 1 word → charades) using the same card pool.",
  basicRules: [
    { title: "Drafting: each player draws 10, keeps 5, passes 5", body: "Combined kept cards = game deck." },
    { title: "3 rounds; teams alternate turns", body: "Each turn = 60 seconds." },
    { title: "Round 1: describe with any words (except actual name)", body: "Any hints allowed." },
    { title: "Round 2: describe with ONE WORD ONLY", body: "Cards from Round 1 re-used." },
    { title: "Round 3: CHARADES only (no words)", body: "Cards from Round 2 re-used again." },
    { title: "Highest team score after 3 rounds wins", body: "Count all correct guesses." },
  ],
  scoring: {
    summary: "Highest team score wins after 3 rounds (each correct card = 1 point).",
    breakdown: [
      { action: "Card correctly guessed", points: "+1 to team score" },
      { action: "Skip / pass", points: "Card returns to deck for next turn/round" },
    ],
    winCondition: "Highest team score after all 3 rounds wins.",
  },
  governingBodies: [
    { name: "CMYK Games (publisher)", founded: 2015, headquarters: "USA" },
    { name: "Alex Hague + Justin Vickers + Kevin Hovdestad (designers)", founded: 2014, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Golden Geek Best Party Game 2016 nominee", frequency: "annual", founded: 2016, region: "worldwide" },
    { name: "BGG top-30 party consistently 2015-2026", frequency: "ongoing", founded: 2015, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "PL", "AU", "CA", "SE", "NL"],
  famousAthletes: [
    "Alex Hague (USA) — Co-designer; also Wavelength, CMYK founder",
    "Justin Vickers (USA) — Co-designer; also Wavelength, CMYK founder",
    "Kevin Hovdestad (USA) — Co-designer",
  ],
  variants: [
    "monikers-base-2015",
    "monikers-serious-nonsense-expansion-2016",
    "monikers-something-something-expansion",
    "monikers-ninja-vs-justin-bieber-deck",
    "monikers-public-domain-celebrity-classic-heritage",
  ],
  relatedSports: ["wavelength", "codenames", "just-one", "decrypto", "cards-against-humanity"],
  skills: ["cultural knowledge", "creative description", "charades/mime", "team communication", "audience reading"],
  strategies: [
    { title: "Draft cards you'll clue well", body: "Skip cards you don't know; keep signature cards." },
    { title: "Round 1 sets Round 2/3 vocabulary", body: "Describe carefully with in-joke callbacks in mind." },
    { title: "One-word clues via callback", body: "Round 2's one word ideally references Round 1 description." },
    { title: "Skip strategically", body: "If stuck, skip + return next turn — no penalty." },
    { title: "Team communication style", body: "Some teams describe methodically; others frantically." },
  ],
  terminology: [
    { term: "Round 1 (Full Description)", meaning: "Describe with any words except name." },
    { term: "Round 2 (One Word)", meaning: "Same cards; only one word to clue." },
    { term: "Round 3 (Charades)", meaning: "Same cards; no words at all." },
    { term: "Draft", meaning: "Each player picks 5 of 10 cards; kept cards make game deck." },
    { term: "Skip", meaning: "Pass on card; returns to deck for later turn." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Monikers ($30)", body: "5-min learning; instant party game classic." },
    ]},
  ],
  faq: [
    { question: "What is Monikers?", answer: "PARTY WORD-DEDUCTION GAME (2015) by CMYK Games. 4-16 players in 2 teams describe FAMOUS PEOPLE + characters + cultural references across 3 ESCALATING ROUNDS: Round 1 = describe with words; Round 2 = ONE WORD ONLY; Round 3 = CHARADES. Same card pool re-used (huge in-joke potential). Considered THE modern celebrity party game. HELD BGG top-30 party. 30-60 min." },
  ],
  wikipediaTitle: "Monikers",
  sources: [
    { label: "CMYK Games — Monikers", url: "https://cmyk.games/products/monikers", publisher: "CMYK" },
    { label: "BoardGameGeek — Monikers", url: "https://boardgamegeek.com/boardgame/156546/monikers", publisher: "BGG" },
    { label: "Wikipedia — Monikers", url: "https://en.wikipedia.org/wiki/Monikers", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
