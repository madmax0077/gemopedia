import type { Sport } from "@/lib/types";

export const concept: Sport = {
  id: "concept",
  slug: "concept",
  name: "Concept",
  officialName: "Concept",
  aliases: ["Concept board game"],
  shortDescription:
    "COOPERATIVE PARTY COMMUNICATION GAME (2013) by ALAIN RIVOLLET + GAËTAN BEAUJANNOT, published by REPOS PRODUCTION. 4-12 players take turns SILENTLY communicating a word/phrase by placing colored pawns on a board of ~110 UNIVERSAL PICTOGRAMS (person, animal, color, size, action, etc.). Teammates guess. NO SPEAKING allowed by the clue-giver. Elegant, language-independent, works internationally. Spiel des Jahres 2014 NOMINEE. Available in Concept + Concept Kids (2018 kid-friendly). 40 min.",
  longDescription:
    "CONCEPT is a COOPERATIVE PARTY COMMUNICATION GAME (2013) designed by ALAIN RIVOLLET + GAËTAN BEAUJANNOT, published by REPOS PRODUCTION (Belgian publisher famous for 7 WONDERS + TIME'S UP!). Widely praised as an ELEGANT + LANGUAGE-INDEPENDENT party game that works across cultures + language barriers. GAMEPLAY: 4-12 players use a game board displaying ~110 UNIVERSAL PICTOGRAMS (icons for: person, animal, color, size, action, emotion, place, tool, direction, count, time, etc.). Players work in PAIRS as CLUE-GIVERS. On your turn, draw a WORD/PHRASE CARD (has 9 possible clues of 3 difficulty levels: easy, medium, hard). Choose one to convey (secret from teammates). Place the MAIN CUBE (green question mark) on the pictogram(s) that represent the CORE CONCEPT of the word. Add EXCLAMATION MARKS on pictograms that add SECONDARY details. Add CUBES + PAWNS in different colors to build additional SUB-CONCEPTS clustering pictograms. GUESSING: The rest of the group SHOUTS OUT guesses based on the pictogram arrangement. NO speaking allowed by the clue-giver. When someone guesses correctly, they + the clue-giver score points. GAME LENGTH: 40 MIN per full game (12 or so rounds). BEST AT 6-10 PLAYERS. SCORING: Correct guessers get 2 VP; clue-givers get 1 VP per successful guess. First to 12 VP (or agreed number) wins. Or play casually without scoring. RECEPTION: SPIEL DES JAHRES 2014 NOMINEE (top German mainstream game of year); AS D'OR (French game of year 2014); universally acclaimed for LANGUAGE-INDEPENDENT design + elegance. Works with mixed-language groups because pictograms are UNIVERSAL. EXPANSIONS + VARIANTS: CONCEPT KIDS: ANIMALS (2018) — kid-friendly version for younger players focused on animals; simpler pictogram board. CONCEPT KIDS variants translated to 20+ languages. INTERNATIONAL SUCCESS: Sold worldwide; often included in ESL/language-learning classroom sets due to language independence.",
  category: "party-games",
  subCategory: "cooperative communication / pictogram / language-independent / party",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "regional",
  countryOfOrigin: "BE",
  regionOfOrigin: "Belgium (Repos Production); French designers Rivollet + Beaujannot",
  estimatedOrigin: "2013 (Repos Production)",
  players: { min: 4, max: 12, note: "4-12 players; best at 6-10; scales well." },
  field: {
    surfaceName: "Concept board with ~110 pictograms",
    dimensions: "~60x40cm board with pictograms in grid",
    description: "Central board with universal pictograms; players cluster tokens on pictograms.",
  },
  equipment: [
    { name: "Concept game board (~110 pictograms)", description: "Universal iconography" },
    { name: "Word/phrase cards (~110 cards, 9 clues each)", description: "Prompts to convey" },
    { name: "Colored cubes + pawns + main green cube", description: "Placement tokens" },
    { name: "Score tokens", description: "Track VP" },
    { name: "Concept Kids: Animals variant", description: "Kid-friendly alternate" },
  ],
  duration: { approximateMinutes: 40, structure: "40 min for full game to target VP" },
  objective: "Cooperatively communicate + guess concepts via pictogram placement; score most VP.",
  basicRules: [
    { title: "Clue-giver picks a word from a card (3 difficulty levels)", body: "Secret from others." },
    { title: "Place green main cube on core-concept pictogram(s)", body: "Signal primary meaning." },
    { title: "Add colored cubes/pawns for sub-concepts", body: "Build detail." },
    { title: "Others shout out guesses; correct = points", body: "Guessing phase." },
    { title: "No speaking by clue-giver", body: "Silent visual clue only." },
    { title: "First to target VP wins", body: "Simple scoring." },
  ],
  scoring: {
    summary: "Correct guessers get 2 VP; clue-givers get 1 VP per successful guess.",
    breakdown: [
      { action: "Correct guess (guesser)", points: "2 VP" },
      { action: "Successful clue (clue-giver)", points: "1 VP per guess" },
      { action: "Difficulty bonuses (harder words = more VP)", points: "1-3 VP" },
    ],
    winCondition: "First player to reach target VP (usually 12 or agreed number).",
  },
  governingBodies: [
    { name: "Repos Production (publisher)", founded: 2001, headquarters: "Belgium" },
    { name: "Asmodee (global distribution)", founded: 1995, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Spiel Essen convention play", frequency: "annual", founded: 2013, region: "Germany" },
    { name: "Concept demos at gaming conventions", frequency: "periodic", founded: 2013, region: "Global" },
  ],
  countriesPlayed: ["BE", "FR", "DE", "US", "GB", "IT", "ES", "JP", "CN", "BR", "MX", "NL", "SE"],
  famousAthletes: [
    "Alain Rivollet (co-designer)",
    "Gaëtan Beaujannot (co-designer)",
    "Repos Production team",
  ],
  variants: [
    "concept-base-2013",
    "concept-kids-animals-2018",
    "concept-worldwide-multi-language-versions",
  ],
  relatedSports: ["dixit", "just-one", "codenames", "pictionary", "charades"],
  skills: ["visual thinking", "iconography interpretation", "cooperative communication", "creative pictogram clustering"],
  strategies: [
    { title: "Layer clues from most to least essential", body: "Start with core concept then refine." },
    { title: "Use pictogram opposites for negation", body: "e.g., 'not hot' via cold pictogram." },
    { title: "Cluster colored cubes for sub-groups", body: "Group related sub-concepts." },
    { title: "Adjust difficulty based on team", body: "Easy for warm-up; hard for expert players." },
  ],
  terminology: [
    { term: "Pictogram", meaning: "Universal icon on the board (~110 total)." },
    { term: "Main cube", meaning: "Green cube marking the core concept." },
    { term: "Sub-concept", meaning: "Colored cube clustering for a supporting detail." },
    { term: "Exclamation mark", meaning: "Modifier token indicating additional emphasis." },
    { term: "Card difficulty", meaning: "Easy, medium, or hard word options on each card." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play with easy words first", body: "Warm up with animals + objects." },
      { title: "Study the pictogram board for 5 min before playing", body: "Familiarity helps." },
    ]},
  ],
  faq: [
    { question: "What is Concept?", answer: "COOPERATIVE PARTY COMMUNICATION GAME (2013) by ALAIN RIVOLLET + GAËTAN BEAUJANNOT, published by REPOS PRODUCTION. 4-12 players take turns SILENTLY communicating a word/phrase by placing colored pawns on a board of ~110 UNIVERSAL PICTOGRAMS (person, animal, color, size, action, etc.). Teammates guess. NO SPEAKING allowed by the clue-giver. Elegant, language-independent, works internationally. Spiel des Jahres 2014 NOMINEE. Available in Concept + Concept Kids (2018 kid-friendly). 40 min." },
    { question: "Concept vs Codenames vs Just One — which party game is best?", answer: "All 3 are elegant guessing party games; each is DIFFERENT. CONCEPT (2013): SILENT visual pictogram-based; language-independent; works across cultures; requires abstract thinking; 4-12 players; 40 min. CODENAMES (2015): SINGLE-WORD verbal clues + word-grid guessing; TEAM VS TEAM; more strategic; 4-8+ players; 15-30 min; SPIEL DES JAHRES 2016 WINNER. JUST ONE (2019): COOPERATIVE single-word clues on a whiteboard; clues with duplicates get cancelled; ~20 min; SPIEL DES JAHRES 2019 WINNER. All are excellent. CODENAMES + JUST ONE are more accessible; CONCEPT is more visually creative + language-neutral. Modern casual groups → JUST ONE or CODENAMES. Cross-language groups → CONCEPT wins hands down." },
  ],
  wikipediaTitle: "Concept (board game)",
  sources: [
    { label: "Repos Production — Concept", url: "https://www.rprod.com/en/games/concept", publisher: "Repos" },
    { label: "BoardGameGeek — Concept", url: "https://boardgamegeek.com/boardgame/147151/concept", publisher: "BGG" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
