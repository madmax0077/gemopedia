import type { Sport } from "@/lib/types";

export const allFours: Sport = {
  id: "all-fours",
  slug: "all-fours",
  name: "All Fours",
  officialName: "All Fours (English Origin)",
  aliases: ["Seven Up", "High-Low-Jack", "Old Sledge", "Pitch (variant)"],
  shortDescription:
    "One of the oldest surviving English trick-taking card games (17th century), ancestor of Pitch and Auction Pitch — 2-4 player game scoring 4 categories: High, Low, Jack, Game; still played in Caribbean (Trinidad national game), Britain, and Appalachia.",
  longDescription:
    "All Fours is an English trick-taking card game dating to at least the 17th century — mentioned in Charles Cotton's 'The Compleat Gamester' (1674) — making it one of the oldest surviving English card games. The name 'All Fours' refers to the 4 scoring categories: HIGH (highest trump played), LOW (lowest trump played, must be by winner), JACK (Jack of trumps captured), and GAME (highest cumulative pip count of scoring cards captured). Play uses a standard 52-card deck (or 32-card variant); 2-4 players (2v2 partnership or 3-4 individual). Widely exported through the British Empire, All Fours remained popular through the 19th century as Seven Up (US) + Old Sledge (US), then evolved into Auction Pitch + Pitch (still played in US Midwest + Appalachia). Trinidad and Tobago adopted All Fours as its national card game — it is a cultural cornerstone of Caribbean gaming culture, with the World All Fours Championship held annually in Trinidad.",

  category: "card-games",
  subCategory: "trick-taking card game (English classical)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "early-modern",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "England (17th century — recorded 1674 in 'The Compleat Gamester'); exported to Caribbean + America via colonial period",
  estimatedOrigin: "17th century England (recorded 1674); Trinidad national game adopted 20th century; Seven Up (US) 19th century",

  players: { min: 2, max: 4, note: "2 players (1v1), 3 players (individual), 4 players (2v2 partnership)." },
  equipment: [
    { name: "Standard 52-card deck", description: "Full deck; suits + ranks A(high)-K-Q-J-10-9-8-7-6-5-4-3-2(low)." },
    { name: "Score pad", description: "Track 4-point-per-hand scoring across game." },
  ],
  duration: { approximateMinutes: 60, structure: "Games play to 7 or 14 points; ~8-15 hands = 45-90 min." },
  objective: "Score the required target points (7 or 14 typical) across hands by capturing High + Low + Jack + Game categories.",
  matchStructure: "Deal 6 cards per player + turn top card as 'trump indicator' → play 6 tricks → score 4 categories → repeat until target reached.",

  basicRules: [
    { title: "Deal 6 cards to each player", body: "6 cards each; top of deck turned face-up = trump suit indicator." },
    { title: "Beg / stand option", body: "Non-dealer may 'beg' if unsatisfied with trump; dealer must accept (1 pt to non-dealer) or 'give one' + re-deal." },
    { title: "6 tricks played", body: "Standard trick-taking; must follow suit if possible; highest trump/highest card of led suit wins." },
    { title: "Score 4 categories", body: "HIGH (highest trump played in hand = 1 pt to team), LOW (lowest trump played = 1 pt, must be by winning team), JACK (Jack of trumps captured = 1 pt), GAME (higher cumulative pip count of scoring cards captured = 1 pt)." },
    { title: "Max 4 points per hand", body: "Each of 4 categories = 1 pt = maximum 4 pts per hand." },
  ],
  advancedRules: [
    { title: "Beg / Stand mechanics", body: "Non-dealer may 'beg' → dealer either 'gives one' (1 pt to non-dealer, no re-deal) or 're-runs' the pack (redeal + new trump)." },
    { title: "Pip count for Game", body: "Ace=4, King=3, Queen=2, Jack=1, Ten=10, others=0; captured cards' pip total determines Game point winner." },
    { title: "Partnership variant (4-player)", body: "Partners across table share captured cards + score; team target 7 or 14 pts." },
    { title: "Trinidad Championship variant", body: "Trinidad All Fours has slightly modified rules — 14-point target, specific bidding, doubles emphasis." },
  ],
  scoring: {
    summary: "4 categories per hand: High + Low + Jack + Game = 1 pt each = max 4 pts per hand.",
    winCondition: "First to target score (7 or 14 points depending on rules) wins game.",
    breakdown: [
      { action: "High (capture highest trump)", points: "1" },
      { action: "Low (winner captures lowest trump)", points: "1" },
      { action: "Jack (capture Jack of trumps)", points: "1" },
      { action: "Game (highest pip count of scoring cards captured)", points: "1" },
      { action: "'Beg' negotiation", points: "1 (if dealer gives one)" },
    ],
  },
  penalties: [
    { title: "Renege (failure to follow suit)", body: "Hand loss + potential game penalty." },
    { title: "Miscount score", body: "Redress by consensus." },
  ],

  positions: [
    { name: "Player (2-4 seats)", role: "Individual or partnership.", count: 2 },
  ],
  officiating: {
    officials: ["Self-refereed (casual + Caribbean championship)"],
    summary: "Casual play + Trinidad championships mostly self-refereed; referees at large Trinidad World All Fours Championship.",
  },

  governingBodies: [
    { name: "Trinidad and Tobago Cardplayers Association", founded: 1970, headquarters: "Port of Spain, Trinidad" },
    { name: "No dedicated international body — folk game with regional variants", founded: 1650, headquarters: "N/A" },
  ],
  majorCompetitions: [
    { name: "Trinidad and Tobago World All Fours Championship", frequency: "annual", founded: 1985, region: "Trinidad (Port of Spain)" },
    { name: "Caribbean All Fours Championships", frequency: "annual", founded: 1990, region: "Trinidad, Barbados, Guyana, Jamaica" },
    { name: "Various regional US Pitch / Seven Up tournaments (Appalachia, Midwest)", frequency: "annual (community)", founded: 1900, region: "US Midwest + Appalachia" },
  ],
  countriesPlayed: ["TT", "GB", "US", "GY", "BB", "JM", "GD", "LC", "IE", "CA (Newfoundland)", "IN (colonial legacy)"],
  famousAthletes: [
    "Various Trinidad All Fours champions — culturally significant but not internationally famous",
    "Historically featured in Charles Dickens novels + colonial British literature as social context",
  ],
  records: [
    { title: "Trinidad national card game", holder: "All Fours", value: "Officially recognized as Trinidad and Tobago's national card game; annual World Championship in Port of Spain since 1985", year: 2023 },
    { title: "Oldest recorded English trick-taking game still played", holder: "All Fours", value: "Recorded 1674 in 'The Compleat Gamester'; continuous play in Britain + Caribbean + US for 350+ years", year: 2024 },
    { title: "Ancestor of modern American card games", holder: "All Fours", value: "Direct ancestor of Seven Up, Old Sledge, Pitch, Auction Pitch, Setback — dominant US card game families 1800s-1900s", year: 2020 },
  ],

  variants: ["all-fours-english-standard", "trinidad-all-fours-championship-variant", "seven-up-american-variant", "old-sledge-us-19th-century-variant", "auction-pitch-modern-us-variant", "pitch-us-simplification", "four-handed-partnership-variant"],
  relatedSports: ["pitch", "seven-up", "setback", "cinch", "euchre", "whist"],

  skills: ["6-card hand valuation", "trump-guessing (via turn-up + beg negotiation)", "trick-taking geometry", "pip-counting for Game category", "partnership signaling (4-player variant)"],
  strategies: [
    { title: "Beg strategically", body: "Beg when trump indicator is unfavorable; dealer usually gives 1 pt rather than re-deal." },
    { title: "Preserve Jack of trumps", body: "Jack of trumps captured = 1 pt (Jack point); protect it in hand OR force opponent to burn it." },
    { title: "Play for Low", body: "Winner of Low must be the team that captures the lowest trump — lead lowest trump to capture Low + High." },
    { title: "Save high pip cards", body: "Aces + Tens + Kings = high pip; capture them for Game point." },
    { title: "Track opponent trumps", body: "Count trumps as played; force opponent's remaining trumps into unfavorable tricks." },
  ],

  terminology: [
    { term: "Trump", meaning: "Suit of turned-up card at deal (unless 'begged')." },
    { term: "Beg", meaning: "Non-dealer's option to reject trump; dealer either gives 1 pt or re-deals." },
    { term: "High / Low / Jack / Game", meaning: "The 4 scoring categories that give the game its name." },
    { term: "Pip count", meaning: "Face-card value used for Game category (A=4, K=3, Q=2, J=1, 10=10)." },
    { term: "Set", meaning: "Failing to make expected tricks in Auction Pitch variant." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play with a British / Trinidadian / Caribbean group", body: "Trinidad + Barbados + Jamaica have thriving All Fours communities; Britain + Ireland still have pub players." },
      { title: "Learn the 4 scoring categories", body: "High + Low + Jack + Game are the core — memorize what each requires + how to win them." },
      { title: "Play 2-player All Fours first", body: "1v1 teaches fundamentals; 4-player partnership adds signaling complexity." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in Trinidad World All Fours Championship", body: "Annual event in Port of Spain; open to international competitors." },
      { title: "Learn variants (Pitch, Auction Pitch, Setback) for US play", body: "Same core game with regional twists." },
    ]},
  ],

  faq: [
    { question: "Why is Trinidad All Fours the national card game?", answer: "All Fours was introduced to Trinidad via British colonial rule in the 18th-19th century and became deeply embedded in Trinidadian culture — played in villages, cricket clubs, and family gatherings for 200+ years. Post-independence Trinidad recognized it as national card game; annual World All Fours Championship in Port of Spain is a major cultural event drawing 500+ competitors." },
    { question: "How is All Fours different from Pitch?", answer: "Pitch is a US derivative of All Fours that added bidding — players 'pitch' (bid) how many of the 4 points they'll capture; highest bidder plays contract. Auction Pitch made bidding formal. All Fours original has no bidding — the trump is fixed by turn-up (with 'beg' option). US Pitch + Auction Pitch dominate Midwest + Appalachia; original All Fours dominates Trinidad + Caribbean + Britain." },
    { question: "Where can I learn All Fours online?", answer: "Trinidad All Fours has active online communities via Facebook + WhatsApp groups. Pagat.com has detailed rulesets for All Fours + Pitch + Auction Pitch + Seven Up variants. Some Android apps offer AI All Fours (search 'Trinidad All Fours' in Play Store)." },
  ],

  wikipediaTitle: "All Fours",
  sources: [
    { label: "Trinidad and Tobago Cardplayers Association", url: "https://www.facebook.com", publisher: "TTCA (Facebook community)" },
    { label: "Wikipedia — All Fours", url: "https://en.wikipedia.org/wiki/All_Fours", publisher: "Wikipedia" },
    { label: "Pagat.com — All Fours", url: "https://www.pagat.com/allfours/allfours.html", publisher: "Pagat" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
