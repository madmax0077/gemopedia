import type { Sport } from "@/lib/types";

export const timesUp: Sport = {
  id: "times-up",
  slug: "times-up",
  name: "Time's Up!",
  officialName: "Time's Up!",
  aliases: ["Time's Up", "Time's Up! Title Recall"],
  shortDescription:
    "PARTY WORD-GUESSING GAME (1999, refined 2008) by PETER SARRETT, published by REPOS PRODUCTION / R&R GAMES. Teams take turns describing famous people/celebrity names within 30 seconds. PLAYED IN 3 ROUNDS with same 40 cards but ESCALATING RESTRICTIONS: (1) unlimited words, (2) only 1 word, (3) charades (silent). Team memory + shared vocabulary from Round 1 makes 2 + 3 hilarious. 4-16 players. Multiple variants: TIME'S UP! TITLE RECALL, DELUXE, ACADEMY. 45-60 min. Considered one of THE GREATEST PARTY GAMES OF ALL TIME.",
  longDescription:
    "TIME'S UP! is a PARTY WORD-GUESSING GAME first released in 1999 by PETER SARRETT + refined into the current definitive edition in 2008 (Repos Production / R&R Games). Considered by many the GREATEST PARTY GAME OF ALL TIME + a staple of adult game nights worldwide. GAMEPLAY: 4-16 players in TEAMS OF 2+ (usually 2 teams of 2-4). A deck of ~40 CARDS with famous people, characters, or names is shuffled. Play proceeds in 3 ROUNDS, using the SAME 40 CARDS each round: ROUND 1 (UNLIMITED WORDS): Active player has 30 seconds to describe as many names as possible; unlimited words allowed but CANNOT SAY the name itself or say synonyms. Teammates guess; pass or skip = card returns to deck. Pass card to next team when timer expires. Continue until all 40 cards are done; each team keeps cards they successfully guessed. Score = 1 point per card. RESHUFFLE all 40 cards for Round 2. ROUND 2 (ONE WORD): Same 40 cards; describer can only say ONE WORD. Since teams already saw all cards in Round 1, they now have shared context to work with subtle single-word hints. RESHUFFLE for Round 3. ROUND 3 (CHARADES): Same 40 cards; describer must act out silently (no words, no sounds). Shared memory + charades = HILARIOUS. FINAL SCORE: Sum of all 3 rounds. Highest score wins. GAME LENGTH: 45-60 MIN. BEST AT 6-10 PLAYERS (in 2 teams). DESIGN INNOVATION: The 3-ROUND ESCALATION mechanic — same cards, progressively harder rules — is a MASTERFUL DESIGN that turns memory into a party dynamic. Teams that lose Round 1 often WIN Round 3 due to memorable clues. VARIANTS + EXPANSIONS: TIME'S UP! TITLE RECALL (2008) — the DEFINITIVE modern edition, uses cards with 2 clues per card (choose easier for Round 1 warmup). TIME'S UP! DELUXE (2009) — larger edition with 400+ names. TIME'S UP! ACADEMY (2012) — themed around movies + culture. TIME'S UP! FAMILY (2016) — kid-friendly names. RECEPTION: Widely regarded as the DEFINITIVE PARTY GAME by hobbyists + casual players. TRICOULEUR ranking + AS D'OR nominee. Consistently BGG top-10 party. Perfect for large gatherings + game nights.",
  category: "party-games",
  subCategory: "party word-guessing / celebrity names / 3-round escalation / team",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (Peter Sarrett designer); Repos Production (Belgium) modern publisher",
  estimatedOrigin: "1999 original; 2008 definitive Title Recall edition",
  players: { min: 4, max: 16, note: "4-16 players in teams; best at 6-10 in 2 teams." },
  field: {
    surfaceName: "Table + 30-second timer",
    dimensions: "Living room / party space",
    description: "Central card deck + timer; teams sit facing each other.",
  },
  equipment: [
    { name: "Time's Up! Title Recall box ($25)", description: "~440 names in 2 mini-decks" },
    { name: "30-second timer (sand or digital)", description: "Round timer" },
    { name: "Card deck (~40 selected per game)", description: "Names to describe" },
    { name: "Score tracker", description: "Per round + total" },
    { name: "Time's Up! Family + Deluxe + Academy variants", description: "Alternate card sets" },
  ],
  duration: { approximateMinutes: 55, structure: "45-60 min for full 3-round game (15-20 min per round)" },
  objective: "Team with most guessed cards across 3 rounds wins.",
  basicRules: [
    { title: "3 rounds using SAME 40 cards", body: "Memory + escalation core mechanic." },
    { title: "Round 1: unlimited words (no card name/synonyms)", body: "Warmup round." },
    { title: "Round 2: only 1 word per card", body: "Same cards, harder rules." },
    { title: "Round 3: charades only (silent)", body: "Same cards, hardest." },
    { title: "30-second turns; pass to next team when timer expires", body: "Fast pace." },
    { title: "Score = correctly guessed cards per round", body: "Simple scoring." },
  ],
  scoring: {
    summary: "1 point per card correctly guessed each round; sum all 3 rounds.",
    breakdown: [
      { action: "Card guessed in Round 1", points: "1 point" },
      { action: "Card guessed in Round 2 (1 word)", points: "1 point" },
      { action: "Card guessed in Round 3 (charades)", points: "1 point" },
    ],
    winCondition: "Highest cumulative score across all 3 rounds.",
  },
  governingBodies: [
    { name: "Repos Production (publisher)", founded: 2001, headquarters: "Belgium" },
    { name: "R&R Games (US publisher)", founded: 1996, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Board game convention play (Spiel Essen, GenCon)", frequency: "annual", founded: 1999, region: "Global" },
    { name: "Casual party game nights (widespread)", frequency: "ongoing", founded: 1999, region: "Global" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "BE", "NL", "CA", "AU", "JP"],
  famousAthletes: [
    "Peter Sarrett (Time's Up! designer, 1999)",
    "Repos Production team",
    "R&R Games team",
  ],
  variants: [
    "times-up-1999-original",
    "times-up-title-recall-2008-definitive",
    "times-up-deluxe-2009-large-edition",
    "times-up-academy-2012-movies-culture",
    "times-up-family-2016-kid-friendly",
  ],
  relatedSports: ["charades", "taboo", "pictionary", "codenames", "monikers"],
  skills: ["quick description", "vocabulary retrieval", "team memory", "charades physical acting"],
  strategies: [
    { title: "Round 1: describe distinctly for team recall in Round 2/3", body: "Use memorable hooks." },
    { title: "Round 2: use the SAME single word your team best associates with the name from Round 1", body: "Memory alignment." },
    { title: "Round 3: exaggerate physical gestures", body: "Charades big + clear." },
    { title: "Skip strategically in Round 1 if stumped", body: "Save time for easier cards." },
  ],
  terminology: [
    { term: "Round", meaning: "1 pass through all 40 cards with a specific rule set." },
    { term: "Pass/skip", meaning: "Give up on a card; returns to deck." },
    { term: "Title Recall", meaning: "Definitive 2008 edition." },
    { term: "One word", meaning: "Round 2 restriction." },
    { term: "Charades", meaning: "Round 3 silent acting." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Time's Up! Title Recall ($25)", body: "Latest definitive edition." },
      { title: "Play first round with 30-45 easy names", body: "Warm up group." },
    ]},
  ],
  faq: [
    { question: "What is Time's Up?", answer: "PARTY WORD-GUESSING GAME (1999, refined 2008) by PETER SARRETT, published by REPOS PRODUCTION / R&R GAMES. Teams take turns describing famous people/celebrity names within 30 seconds. PLAYED IN 3 ROUNDS with same 40 cards but ESCALATING RESTRICTIONS: (1) unlimited words, (2) only 1 word, (3) charades (silent). Team memory + shared vocabulary from Round 1 makes 2 + 3 hilarious. 4-16 players. Multiple variants: TIME'S UP! TITLE RECALL, DELUXE, ACADEMY. 45-60 min. Considered one of THE GREATEST PARTY GAMES OF ALL TIME." },
    { question: "Time's Up vs Monikers vs Celebrity — differences?", answer: "All 3 use the 3-round-escalation mechanic (unlimited → 1 word → charades) originating from CELEBRITY (folk game, 1970s). CELEBRITY: Free-form; write names on scraps; play with same escalation; no purchase needed. TIME'S UP! (1999): Commercial version; pre-printed cards with 440 curated names; Title Recall (2008) is definitive. MONIKERS (2015, CMYK): Modern refined version with STYLISH ART + curated eclectic names from history, art, pop culture + jokes; considered by some the DEFINITIVE modern version. All 3 use identical mechanics. Serious hobbyists → MONIKERS for style + curation. Casual/beginner → TIME'S UP! TITLE RECALL for accessibility. Broke → CELEBRITY (free). All are amazing." },
  ],
  wikipediaTitle: "Time's Up! (game)",
  sources: [
    { label: "Repos Production — Time's Up! Title Recall", url: "https://www.rprod.com/", publisher: "Repos" },
    { label: "BoardGameGeek — Time's Up! Title Recall", url: "https://boardgamegeek.com/boardgame/35361/times-up-title-recall", publisher: "BGG" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
