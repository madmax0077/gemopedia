import type { Sport } from "@/lib/types";

export const tute: Sport = {
  id: "tute",
  slug: "tute",
  name: "Tute",
  officialName: "Tute (Spanish Card Game)",
  aliases: ["Spanish Tute", "Tute Cabrero", "Tute Habanero", "Tute Cubano"],
  shortDescription:
    "Iconic Spanish trick-taking + melding card game (2-4 players) using 40-card Spanish deck — 'tute' bonus for holding all 4 kings or knights; family + café + tapas bar staple across Spain + Cuba + Argentina + Philippines with regional variants.",
  longDescription:
    "Tute is one of the most popular card games in Spain and across the Spanish-speaking world — a trick-taking + melding game (2-4 players) using a 40-card Spanish suited deck (Copas/Oros/Espadas/Bastos — Cups/Coins/Swords/Clubs). Named for the game's signature bonus: 'tute' = holding all 4 kings (kings tute) or all 4 knights (knights tute), scoring +20 pts. Core mechanics: deal cards, trump established by turned-up card, play tricks capturing point-value cards (Ace=11, King=4, Knight=3, Jack=2, 7=10, others=0). Melds (secuencias, 20/40 for suit-sequences + tute for all-same-rank) add scoring depth. Multiple regional variants: Tute Cabrero (Spain, 2-player), Tute Habanero + Tute Cubano (Cuba), Tute Argentino, Filipino Tute (Philippines), and casino Tute in Spanish gaming halls. Family + café + tapas bar game across all Spanish + Latin American communities.",

  category: "card-games",
  subCategory: "trick-taking card game (bid + meld + partnership)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "early-modern",
  popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (evolved from Italian Tuttii 18th century); exported to Cuba + Argentina + Philippines via colonial era",
  estimatedOrigin: "18th century Spain (from Italian roots); regional variants developed 19th century in Cuba + Argentina + Philippines",

  players: { min: 2, max: 4, note: "2-player (Tute Cabrero), 4-player partnership (2v2), or 3-player individual most common." },
  equipment: [
    { name: "40-card Spanish suited deck", description: "Copas/Oros/Espadas/Bastos suits × Ace, 2-7, 10 (Jack/Sota), 11 (Knight/Caballo), 12 (King/Rey). No 8s/9s." },
    { name: "Score pad or chip pile", description: "Track cumulative scores across hands." },
  ],
  duration: { approximateMinutes: 45, structure: "Match to 101 (Spain) or 121 pts across multiple hands; ~30-90 min per match." },
  objective: "Score most points across hands via trick captures + melds + tute bonus; first to target score wins.",
  matchStructure: "Deal + trump indicator → play tricks capturing scoring cards + declaring melds → tallies final scores → repeat until target.",

  basicRules: [
    { title: "Deal 8-10 cards + turn trump indicator", body: "Deal all 40 cards among 2 players (8 each) or 4 players (10 each); top card face-up = trump indicator." },
    { title: "Trick play", body: "Highest card of led suit or trump wins trick + captures scoring value of cards played." },
    { title: "Card values", body: "Ace=11, Three=10 (variants), King=4, Knight=3, Jack=2, 7=some value in variants, others=0. Total 120 pts across all cards." },
    { title: "Meld declarations", body: "Player winning a trick may declare secuencias (King + Knight + Jack of a suit) for 20 pts (non-trump) or 40 pts (trump)." },
    { title: "Tute bonus", body: "Holding all 4 kings + declaring 'Tute!' = +20 pts. Similarly 4 knights = another 20 pts." },
    { title: "Last trick bonus", body: "Player winning last trick = +10 pts (10 de últimas)." },
  ],
  advancedRules: [
    { title: "Trump exchange", body: "Player holding 7 of trumps may exchange it for the trump indicator card (advanced positional play)." },
    { title: "Meld timing", body: "Melds must be declared immediately upon capturing a trick + before playing next lead." },
    { title: "Partnership melds (4-player)", body: "Partners combine meld possibilities; strategic hand division matters." },
    { title: "Tute Cabrero (2-player variant)", body: "Only 8 cards per player; simpler structure; folk game across rural Spain." },
    { title: "Cuban variants (Tute Cubano)", body: "Adds bidding phase similar to Trump games; more complex than Iberian Tute." },
  ],
  scoring: {
    summary: "Trick capture pts (120 total) + meld pts + tute bonus + last trick 10 = per-hand total.",
    winCondition: "First to 101 (Spain) or 121 pts wins match.",
    breakdown: [
      { action: "Ace captured", points: "11" },
      { action: "Three captured (some variants)", points: "10" },
      { action: "Ten (Sota / Jack) captured", points: "2" },
      { action: "Knight captured", points: "3" },
      { action: "King captured", points: "4" },
      { action: "Meld non-trump (secuencia)", points: "20" },
      { action: "Meld trump (secuencia trump)", points: "40" },
      { action: "Kings Tute (all 4 kings)", points: "20 bonus" },
      { action: "Knights Tute", points: "20 bonus" },
      { action: "Last trick", points: "10" },
    ],
  },
  penalties: [
    { title: "Renege (failure to follow suit)", body: "Hand loss + potential penalty." },
    { title: "Meld not immediately declared", body: "Meld forfeited (must be at trick capture)." },
  ],

  positions: [
    { name: "Partner (2 per team, 4-player)", role: "Partners across table.", count: 2 },
    { name: "Individual (2-3 player)", role: "1v1 (Tute Cabrero) or 3-way individual play.", count: 1 },
  ],
  officiating: {
    officials: ["Self-refereed (family + café)"],
    summary: "Casual play + café tournaments self-refereed; no formal international body.",
  },

  governingBodies: [
    { name: "No dedicated international Tute governing body", founded: 1750, headquarters: "N/A" },
    { name: "Federación Española de Tute (informal)", founded: 2000, headquarters: "Spain" },
  ],
  majorCompetitions: [
    { name: "Spanish Regional Tute Tournaments", frequency: "annual (community)", founded: 1950, region: "Spain (regional across Andalusia, Catalonia, Galicia)" },
    { name: "Cuban National Tute Championship", frequency: "annual", founded: 1980, region: "Cuba" },
    { name: "Argentine Tute Regional (community)", frequency: "annual", founded: 1970, region: "Argentina" },
  ],
  countriesPlayed: ["ES", "CU", "AR", "PH", "UY", "MX", "EC", "PE", "CO", "PY"],
  famousAthletes: [
    "Folk community game — no famous professional players",
    "Culturally embedded rather than star-driven",
  ],
  records: [
    { title: "Largest Spanish-speaking card game", holder: "Tute + Mus", value: "Tute + Mus (basque partner game) are the two dominant Spanish card games; each ~10M+ players across Spain + Latin America", year: 2023 },
    { title: "Café + tapas bar embedding", holder: "Tute", value: "Cultural institution in Spanish bars + Latin American cafés for 150+ years; particularly Andalusian + Catalan variants", year: 2024 },
  ],

  variants: ["tute-standard-4-player-partnership", "tute-cabrero-2-player-spain", "tute-habanero-cuban-variant", "tute-cubano-with-bidding-cuban", "tute-argentino-argentine-variant", "tute-filipino-philippines-colonial-variant"],
  relatedSports: ["mus", "brisca", "briscola", "tresette", "escoba", "guiñote"],

  skills: ["Spanish deck familiarity (Copas/Oros/Espadas/Bastos)", "meld recognition (secuencias + tute)", "trick-taking + trump strategy", "partnership signaling (4-player)", "card counting"],
  strategies: [
    { title: "Aim for tute bonus", body: "Collecting all 4 kings or knights = +20 pts each; huge scoring boost. Aggressive trick-taking on high-value cards enables this." },
    { title: "Declare melds ASAP", body: "Melds must be declared immediately upon capturing trick + before next lead; missed declarations = forfeited pts." },
    { title: "Trump 7 exchange", body: "If you hold 7 of trumps, consider exchange with trump indicator card for positional advantage." },
    { title: "Save trumps for high-value trick", body: "Aces + 10s + Kings + Knights of non-trump suits are worth 11-4 pts; capture them with trumps." },
    { title: "Partnership meld coordination (4-player)", body: "Partners strategically pool melds; one holds King + Knight while other holds Jack for combined secuencia." },
  ],

  terminology: [
    { term: "Tute", meaning: "Holding all 4 kings or all 4 knights; +20 pts bonus." },
    { term: "Secuencia", meaning: "Meld — King + Knight + Jack of same suit; 20 (non-trump) or 40 (trump)." },
    { term: "Copas / Oros / Espadas / Bastos", meaning: "Spanish deck suits — Cups / Coins / Swords / Clubs." },
    { term: "Sota / Caballo / Rey", meaning: "Jack / Knight / King in Spanish deck." },
    { term: "10 de últimas", meaning: "Last trick bonus (+10 pts)." },
    { term: "Cabrero", meaning: "2-player Tute variant." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn Spanish deck first (Copas/Oros/Espadas/Bastos)", body: "Different suits + values than French deck; Ace-2-3-4-5-6-7-Jack-Knight-King structure." },
      { title: "Play with Spanish or Latin American family", body: "Culturally embedded across Spain + Cuba + Argentina + Mexico; family game." },
      { title: "Start with 2-player Tute Cabrero", body: "Simpler than 4-player partnership; learn tricks + trump + tute bonus first." },
    ]},
    { level: "advanced", steps: [
      { title: "Master meld system + immediate declaration timing", body: "Secuencias + tute bonuses require precise timing." },
      { title: "Compete in Spanish regional tournaments", body: "Andalusian + Catalan + Galician regional Tute championships." },
    ]},
  ],

  faq: [
    { question: "What is a 'tute'?", answer: "'Tute' is both the game's name and its signature scoring bonus: holding all 4 kings (kings tute) or all 4 knights (knights tute) in your hand at some point during the hand = +20 bonus points. This is the hallmark scoring event of the game — hence the name." },
    { question: "How is Tute different from Brisca?", answer: "Both are Spanish trick-taking games using the 40-card Spanish deck, but Tute has meld declarations (secuencias for 20/40 pts) + tute bonus (20 pts) whereas Brisca is simpler trick-taking with no melds. Brisca is faster + more casual; Tute is more strategic. Both are family/café staples across the Spanish-speaking world." },
    { question: "Is Tute related to Italian Scopa?", answer: "Both use Latin-suited decks (Cups, Coins, Swords, Clubs) but Scopa is a capture-based game where you match card values on the table + capture, not a trick-taking game. Tute has traditional tricks + trump. Both are cultural staples of Iberian + Italian family gaming but structurally different." },
  ],

  wikipediaTitle: "Tute (card game)",
  sources: [
    { label: "Wikipedia — Tute (card game)", url: "https://en.wikipedia.org/wiki/Tute_(card_game)", publisher: "Wikipedia" },
    { label: "Pagat.com — Tute", url: "https://www.pagat.com/aceten/tute.html", publisher: "Pagat" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
