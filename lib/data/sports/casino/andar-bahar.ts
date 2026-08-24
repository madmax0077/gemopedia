import type { Sport } from "@/lib/types";

export const andarBahar: Sport = {
  id: "andar-bahar",
  slug: "andar-bahar",
  name: "Andar Bahar",
  officialName: "Andar Bahar",
  aliases: ["Katti", "Mangatha"],
  shortDescription:
    "Simple Indian card-guessing casino game — dealer draws a 'joker' card, then alternately places cards on two piles (Andar = inside, Bahar = outside); winner is whichever side gets a matching-rank card first. Players bet on Andar or Bahar.",
  longDescription:
    "Andar Bahar (Hindi: अंदर बाहर, meaning 'inside/outside') is a card-guessing casino game that originated in Bangalore, Karnataka (southern India) in the 18th century. Also called Katti in Karnataka + Mangatha in Tamil Nadu. Uses a standard 52-card deck. Play: dealer places one card face-up in the middle called the 'joker' (or 'house' card). Players bet on either ANDAR (inside pile, dealer's left) or BAHAR (outside pile, dealer's right). Dealer then alternately deals cards to Andar and Bahar piles, one at a time. First pile to receive a card matching the joker's RANK (any suit) wins — that side's bettors win 1:1 (Andar wins 1:0.9 house edge in some rules). Simple ~50/50 game with tiny house edge (2.15% traditional / 1.79% Bahar-first / 2.5% Andar-first). Extremely popular in India — bar/party game + major online casino category since 2010s. Live-dealer online versions (Evolution Gaming, Ezugi, Pragmatic Play) drove massive growth. Regional variants: side bets on first-3-cards, exact match count, joker suit. Simple to learn (30 seconds), quick rounds (30-60 sec per game). Common at Indian weddings + Diwali gatherings + gambling parties (informal + real-money variants).",
  category: "casino-games", subCategory: "card / guessing",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true, season: "year-round", era: "early-modern", popularity: "regional",
  countryOfOrigin: "IN", regionOfOrigin: "Bangalore, Karnataka, India (18th century)",
  estimatedOrigin: "18th century Bangalore, Karnataka; folk gambling game centuries before formal casino version; online live-dealer boom 2010s-2020s",
  players: { min: 1, max: 20, note: "1 dealer + unlimited players betting on Andar or Bahar. Common at parties + casinos + live-dealer online." },
  field: {
    surfaceName: "Andar Bahar table",
    dimensions: "Standard casino table with two betting zones + central joker slot; single 52-card deck.",
    description: "Table has central slot for joker card + two betting zones labeled ANDAR (left/inside) and BAHAR (right/outside). Cards dealt alternately after joker placed.",
  },
  equipment: [
    { name: "Standard 52-card deck", description: "Single deck with 4 suits × 13 ranks. No jokers used in game." },
    { name: "Andar Bahar table (casino)", description: "Betting zones + joker slot; ~$500-2000 casino version. Home version = any table." },
    { name: "Casino chips (real-money version)", description: "Denominations $1, $5, $25, $100 typical." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Each round 30-60 seconds; casino sessions 1-3 hours; online live-dealer 24/7.",
  },
  objective: "Correctly predict whether Andar or Bahar side will receive a card matching the joker's rank first.",
  matchStructure: "Dealer places joker card face-up. Players bet on Andar or Bahar. Dealer alternately deals cards to Andar + Bahar until match found. Winning side's bettors paid 1:1 (or 1:0.9 depending on which side).",
  basicRules: [
    { title: "Joker card drawn first", body: "Dealer draws one card face-up as 'joker'/'house' card — this is what next cards must match by rank." },
    { title: "Players bet Andar or Bahar", body: "Andar = inside/left pile. Bahar = outside/right pile. Bet minimum + maximum limits set by casino." },
    { title: "Cards dealt alternately", body: "Dealer places cards alternately to Andar + Bahar piles, one card each turn." },
    { title: "First matching rank wins", body: "First side to receive a card of same RANK as joker (any suit) wins for its bettors." },
    { title: "Payout 1:1 (or 1:0.9)", body: "Winning bet doubles (payoff = bet). Some versions: Andar pays 0.9:1 + Bahar pays 1:1 (Andar has slight advantage of getting first card)." },
    { title: "Joker suit determines starting side", body: "In traditional variants: if joker is red (hearts/diamonds), Andar gets first card; if black, Bahar first. Modern casinos: Andar first always." },
  ],
  advancedRules: [
    { title: "Side bets", body: "Modern casino versions offer side bets: exact number of cards dealt before match (3-cards, 5-cards, etc.), suit of matching card, both piles match on same card." },
    { title: "Multi-deck versions", body: "Some casino Andar Bahar uses 6-8 decks combined to reduce card-counting; traditional single-deck." },
    { title: "House edge", body: "1.79% (Bahar first) to 2.15% (traditional balance); low compared to slots. Andar-first version 2.5%." },
    { title: "Progressive jackpot variants", body: "Online casino side-bet jackpots for matching card within first 3-5 deals." },
    { title: "Live-dealer online", body: "Evolution Gaming's Andar Bahar (2019) massively popular in India; real dealer on video stream, players bet via web/app." },
    { title: "Bonus payouts", body: "Some versions offer 10:1 or higher payouts for match within first 3 cards on either side." },
  ],
  scoring: {
    summary: "Simple win/loss per hand — winning bet pays 1:1 (or 1:0.9); losing bet lost.",
    breakdown: [
      { action: "Win (correct side)", points: "Bet returned + 1× profit (or 0.9× Andar)" },
      { action: "Loss (wrong side)", points: "Bet lost" },
      { action: "Side bet win (match within N cards)", points: "10:1 or higher (varies)" },
    ],
    winCondition: "Bet on the side that receives matching-rank card first.",
  },
  officiating: {
    officials: ["Casino dealer", "Pit boss (overseeing multiple tables)", "Online: live streamer dealer + software validators"],
    summary: "Dealer manages cards + payouts. Online: RNG-verified or live-video-verified deals with software escrow.",
  },
  governingBodies: [
    { name: "No formal governing body — regional folk gambling game", founded: 0, headquarters: "n/a" },
    { name: "State gambling boards (India — Goa, Sikkim licensed)", founded: 1976, headquarters: "India" },
    { name: "eCOGRA (online casino gaming regulator)", founded: 2003, headquarters: "UK/international" },
  ],
  majorCompetitions: [
    { name: "No formal tournaments — pure gambling game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Live-dealer online (24/7 tables on Evolution, Ezugi, Pragmatic Play)", frequency: "continuous", founded: 2019, region: "worldwide online (India-focused)" },
  ],
  countriesPlayed: ["IN", "NP", "BD", "PK", "GB", "AE", "SG", "MY"],
  famousAthletes: [
    "No named professional players — casino game",
    "Live-dealer Andar Bahar celebrities: various presenters on Evolution + Ezugi live streams (India-focused)",
  ],
  records: [
    { title: "Largest online Andar Bahar market", holder: "India", value: "estimated 40+ million players monthly (2023)", year: 2023 },
    { title: "Most consecutive cards dealt before match", holder: "Statistical extreme", value: "40+ cards possible (rare) — matching card is one of 3 remaining of that rank", year: 2020 },
  ],
  variants: ["classic-single-deck-Andar-first", "traditional-red-joker-Andar-black-Bahar", "6-8-deck-casino-version", "online-live-dealer-Evolution-Ezugi", "with-side-bets-3-card-match", "Katti-Karnataka-name", "Mangatha-Tamil-name"],
  relatedSports: ["teen-patti", "baccarat", "blackjack", "flush-3-patti"],
  skills: ["basic probability", "bankroll management", "pattern recognition (statistically limited value)"],
  strategies: [
    { title: "No skill can beat house edge", body: "Pure luck game — no strategy improves odds. Any 'system' is gambler's fallacy." },
    { title: "Bet on lower-house-edge side", body: "Bahar-first version has 1.79% house edge; Andar-first 2.5%. Bahar has slight statistical advantage." },
    { title: "Avoid side bets", body: "Side bets carry 6-15% house edge — much worse than main bet's 2%." },
    { title: "Set stop-loss + win limits", body: "Bankroll management — set fixed loss + win amounts, quit at either." },
    { title: "Card-counting mostly ineffective", body: "Single-deck could theoretically be counted; casinos use 6-8 decks + shuffle frequently to prevent." },
  ],
  terminology: [
    { term: "Andar", meaning: "Inside pile — dealer's left; 'inside' in Hindi." },
    { term: "Bahar", meaning: "Outside pile — dealer's right; 'outside' in Hindi." },
    { term: "Joker / House card", meaning: "First card drawn face-up that other cards must match by rank." },
    { term: "Match", meaning: "Card of same rank as joker; wins for its pile." },
    { term: "Rank", meaning: "Card value (Ace, 2-10, Jack, Queen, King) — matches ignore suit." },
    { term: "Katti", meaning: "Alternate name in Karnataka." },
    { term: "Mangatha", meaning: "Alternate name in Tamil Nadu." },
    { term: "House edge", meaning: "Casino's statistical advantage; ~1.79-2.5% for Andar Bahar." },
    { term: "Side bet", meaning: "Additional bets on specific outcomes (match within N cards, matching suit, etc.)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the 30-second rules", body: "Understand joker + Andar/Bahar sides + match rule. Try online free-play or family game night." },
      { title: "Play social version first", body: "Play at parties + weddings before real-money casino." },
    ] },
    { level: "intermediate", steps: [
      { title: "Try live-dealer online", body: "Evolution Gaming + Ezugi + Pragmatic Play offer live dealer tables 24/7 targeting Indian market." },
      { title: "Bankroll management", body: "Set fixed limits; don't chase losses; understand 2% house edge means long-term loss." },
    ] },
    { level: "advanced", steps: [
      { title: "Understand house edge + variance", body: "Study probability + game theory; no skill can beat house edge — pure entertainment gambling." },
    ] },
  ],
  faq: [
    { question: "How do you play Andar Bahar?", answer: "Dealer places one card face-up as 'joker'. Players bet on Andar (inside/left) or Bahar (outside/right). Dealer alternately deals cards to Andar + Bahar. First pile to receive a card matching the joker's RANK (any suit) wins. Winners paid 1:1 (or 1:0.9 for Andar in some versions). Simple 50/50 guess with tiny house edge." },
    { question: "Where does Andar Bahar come from?", answer: "18th-century Bangalore, Karnataka in southern India. Also called Katti (Karnataka) + Mangatha (Tamil Nadu). Traditional folk gambling game for centuries; formal casino version emerged in Goa + Sikkim (India's licensed gambling states). Massive online resurgence 2019 when Evolution Gaming launched live-dealer version targeting Indian market — now available on hundreds of online casinos worldwide." },
    { question: "What are the odds?", answer: "House edge ~1.79% (Bahar-first version) to 2.5% (Andar-first version). Traditional balanced version ~2.15%. Compared to other casino games: Blackjack ~0.5% (with strategy), Baccarat ~1.06%, Roulette ~2.7% (European) / 5.26% (American), Slots 5-15%. Andar Bahar is one of lowest-edge casino games. Winning odds nearly 50/50 with slight house edge from tie/no-match rare scenarios." },
    { question: "Is Andar Bahar legal?", answer: "Legality varies: India — legal in Goa, Sikkim, Daman (licensed casinos); illegal for real money in most other states + online. Nepal — legal in Kathmandu casinos. UK/EU — legal via licensed online casinos with Andar Bahar. USA — offered by some online casinos in New Jersey/Nevada/Pennsylvania. Social play (no money) legal everywhere. Enforcement of online gambling laws in India inconsistent — grey market huge with 40M+ estimated players." },
    { question: "Are online Andar Bahar games rigged?", answer: "Reputable live-dealer versions (Evolution Gaming, Ezugi, Pragmatic Play) use real physical cards + human dealers on video stream — cannot be rigged in play. RNG (random number generator) versions require licensed certification (eCOGRA, iTech Labs). Unlicensed offshore casinos are risky — avoid. Look for MGA (Malta), UKGC (UK), Curacao licenses + third-party audit certificates. Always play at licensed regulated casinos." },
  ],
  wikipediaTitle: "Andar Bahar",
  sources: [
    { label: "Wikipedia — Andar Bahar", url: "https://en.wikipedia.org/wiki/Andar_Bahar", publisher: "Wikipedia" },
    { label: "Evolution Gaming Andar Bahar", url: "https://evolution.com/games/andar-bahar/", publisher: "Evolution Gaming" },
  ],
  lastVerified: "2026-08-25",
  confidence: "community",
};
