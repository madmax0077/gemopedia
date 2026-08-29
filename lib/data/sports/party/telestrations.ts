import type { Sport } from "@/lib/types";

export const telestrations: Sport = {
  id: "telestrations",
  slug: "telestrations",
  name: "Telestrations",
  officialName: "Telestrations (2009, USAopoly / The Op)",
  aliases: ["Sketch-a-Message", "Broken Picture Telephone"],
  shortDescription:
    "The 'Telephone' game with drawings — players alternately sketch a word and then guess what a passed-around sketch depicts, generating hilariously distorted chains for 4-8 players.",
  longDescription:
    "Telestrations is a party drawing game published in 2009 by USAopoly (now The Op). The game revives the classic 'Broken Picture Telephone' pen-and-paper game for a commercial audience. Players start with a word (from card + die roll), sketch it on a spiral-bound whiteboard sketchbook, and pass it to the next player who tries to guess the word. That guess is then sketched by the next player, and so on around the table. The 'reveal' phase is the highlight — each book's original word is compared to the wild mutations that emerged. Adult (18+), Party Pack (up to 12 players), and NSFW versions exist. Sold 5M+ copies worldwide; a staple of family + party game shelves. Simple rules mask a hilarious social experience — no scoring is truly used competitively; the joy is the reveal.",
  category: "party-games",
  subCategory: "sketch-and-pass social (4-8+ players)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (USAopoly, San Diego)",
  estimatedOrigin: "Published 2009; based on centuries-old 'broken picture telephone' folk game",
  players: { min: 4, max: 8, note: "8 is optimal for full pass-cycle; Party Pack extends to 12." },
  field: {
    surfaceName: "Table with each player's sketchbook",
    dimensions: "8 sketchbooks (spiral-bound whiteboards, 8 pages each) + markers",
    description: "Each player has personal sketchbook that passes clockwise round the table." },
  equipment: [
    { name: "8 spiral-bound whiteboard sketchbooks", description: "Each player gets one, 8 pages for pass-around." },
    { name: "8 dry-erase markers", description: "Wipe-clean for reuse." },
    { name: "142+ word cards", description: "Each card has 6 words rated 1-3 difficulty." },
    { name: "8-sided die", description: "Rolled to select word from card." },
    { name: "Sand timer (~1 min)", description: "Enforces quick sketches." },
    { name: "Score chips (optional)", description: "Rare — most play un-scored." },
  ],
  duration: { approximateMinutes: 30, structure: "Each round = 8 passes; ~5-8 min per round; typically 1-3 rounds." },
  objective:
    "Enjoy the chaotic transformation of your original word through 7 sketches + guesses back to something wildly different. Optionally score points for accurate guesses.",
  matchStructure:
    "Setup: each player receives a sketchbook + marker + word card. Roll die to pick word 1-6 from card. Round 1: sketch your word (1 min timer). Pass clockwise. Round 2: guess what the sketch depicts, write on next page. Pass. Round 3: sketch that guess. Continue for 8 passes total (or until book returns to origin). Reveal: each book traced page-by-page for laughs.",
  basicRules: [
    { title: "Roll die to select word", body: "Card has 6 words in 3 difficulty tiers (2 easy, 2 medium, 2 hard)." },
    { title: "1-minute sketch timer", body: "Sketch your word before sand runs out." },
    { title: "Pass clockwise", body: "Always pass to next player after each page." },
    { title: "Write guesses, not describe", body: "You may only write a single guess word/phrase — no descriptions." },
    { title: "No words on sketches", body: "Cannot write letters, numbers, or symbols in drawings." },
    { title: "Reveal at end", body: "Each book's journey is read aloud dramatically — the payoff." },
  ],
  advancedRules: [
    { title: "Scoring variant", body: "3 chips awarded per successful guess-chain; used rarely." },
    { title: "Adult / NSFW versions", body: "18+ words for adult parties." },
    { title: "Party Pack (12-player)", body: "Adds 4 more sketchbooks + fixes 8-cap." },
    { title: "Family Edition", body: "Kid-friendly words for 8+." },
  ],
  scoring: {
    summary: "Formal scoring rare; awards 3 chips for successful guess-chain, 1 for 'you had one job' funniest.",
    winCondition: "Most chips (rare); usually 'everyone wins by laughing'.",
    breakdown: [
      { action: "Successful guess-through-chain", points: "+3 chips (rare)" },
      { action: "Funniest chain (group vote)", points: "+1 chip" },
    ],
  },
  penalties: [
    { title: "Writing letters in sketch", body: "Warning; usually overlooked." },
    { title: "Missing timer", body: "Sketch is incomplete — pass anyway." },
  ],
  positions: [
    { name: "Player", role: "Alternately sketches + guesses across 8 pages.", count: 8 },
  ],
  officiating: { officials: ["Host (informal)"], summary: "Casual party game — no formal officials." },
  governingBodies: [
    { name: "USAopoly / The Op", founded: 1994, headquarters: "San Diego, USA", website: "https://theop.games" },
  ],
  majorCompetitions: [
    { name: "Casual party events", frequency: "informal", founded: 2009, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "CA", "AU", "DE", "FR", "JP", "IT", "ES", "BR"],
  famousAthletes: [
    "None (party game — no professional scene)",
  ],
  records: [
    { title: "Sales", holder: "USAopoly/The Op", value: "5M+ copies sold worldwide by 2020", year: 2020 },
    { title: "Toy of the Year (TOTY) Award", holder: "Telestrations", value: "Party Game of Year 2011", year: 2011 },
  ],
  variants: ["Telestrations 12 Player Party Pack (2015)", "Telestrations After Dark (18+)", "Telestrations Family Edition (kids)", "Telestrations Upside Drawn (theme categories)"],
  relatedSports: ["pictionary", "cranium", "monikers", "codenames"],
  skills: [
    "quick sketching",
    "guessing at ambiguous visuals",
    "clear communication under time pressure",
    "sense of humor",
  ],
  strategies: [
    { title: "Sketch simple + iconic", body: "Stick figures + universal symbols survive best across 8 passes." },
    { title: "Guess broadly", body: "When guessing, pick common English words — obscure guesses derail chains." },
    { title: "Choose difficulty 1-2 for family", body: "Level 3 words (obscure) cause faster derailment — funnier or worse depending on group." },
    { title: "Don't over-explain guesses", body: "'Man sitting on horse' is worse than 'cowboy' — brevity wins." },
  ],
  terminology: [
    { term: "Sketchbook", meaning: "Spiral-bound whiteboard book with 8 pages." },
    { term: "Chain", meaning: "The full 8-page sequence one book travels." },
    { term: "Reveal", meaning: "The end-of-round comedy phase where each book is read aloud." },
    { term: "Roll", meaning: "8-sided die roll to select which of 6 words to sketch." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play with 6-8 friends", body: "Full chain (8 passes) delivers max comedy." },
        { title: "Pick difficulty 1", body: "Concrete nouns easier to draw + guess." },
        { title: "Enjoy the reveal", body: "The comedy is the point, not scoring." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Play with Adult version", body: "18+ words boost comedy for grown-ups." },
        { title: "Party Pack 12-player", body: "Longer chains = more chaos." },
        { title: "Speed-round variant", body: "30-second timer for extra chaos." },
      ],
    },
  ],
  faq: [
    { question: "How is this different from Pictionary?", answer: "Pictionary is guess-my-drawing timed teams; Telestrations is pass-and-transform for solo drawings — the comedy comes from the transformation chain." },
    { question: "Can 2-3 people play?", answer: "Not effectively — 4 minimum, 6+ recommended for max hilarity." },
    { question: "Any drawing skill required?", answer: "None — bad drawings are often funnier! Stick figures + simple shapes work best." },
    { question: "Family-friendly?", answer: "Base game yes (kids 12+); Adult version is 18+; Family Edition is 8+." },
    { question: "Playing time?", answer: "One round ~15-20 min; games usually 2-3 rounds for 45-60 min total." },
  ],
  sources: [
    { label: "BoardGameGeek — Telestrations", url: "https://boardgamegeek.com/boardgame/46213/telestrations", publisher: "BGG" },
    { label: "The Op — Telestrations", url: "https://theop.games/products/telestrations", publisher: "The Op" },
    { label: "Wikipedia — Telestrations", url: "https://en.wikipedia.org/wiki/Telestrations", publisher: "Wikipedia" },
  ],
  wikipediaTitle: "Telestrations",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
