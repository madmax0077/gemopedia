import type { Sport } from "@/lib/types";

export const skullKing: Sport = {
  id: "skull-king",
  slug: "skull-king",
  name: "Skull King",
  officialName: "Skull King",
  aliases: [],
  shortDescription:
    "PIRATE-THEMED TRICK-TAKING CARD GAME with BIDDING by BRENT BECK + published by GRANDPA BECK'S GAMES / SCHMIDT SPIELE (US/Germany, 2013). 2-8 players play 10 rounds where they BID exactly how many tricks they'll take that hand. Score = 20×bid if correct, -10×|bid diff| if wrong. Cards: 4 suits + Escape (worst), Pirates (beat suits), Mermaids (beat Pirates + Escape), Skull King (beats Mermaids). NEGATIVE POINTS possible! High Interaction + Pirate Theme + Fast 30-min games. Won 2022 Deutscher Spiele Preis + 2022 Kennerspiel des Jahres Recommended.",
  longDescription:
    "SKULL KING is a PIRATE-THEMED TRICK-TAKING CARD GAME with BIDDING designed by BRENT BECK + illustrated by GRANDPA BECK (Grandpa Beck's Games, US) + LATER PUBLISHED BY SCHMIDT SPIELE (Germany) with revised rules + editions. Original 2013; SCHMIDT SPIELE 2022 EDITION won multiple awards including DEUTSCHER SPIELE PREIS 2022 (2nd place) + KENNERSPIEL DES JAHRES 2022 RECOMMENDED. 2-8 PLAYERS play 10 ROUNDS where they BID exactly how many TRICKS they'll take that hand. GAMEPLAY: Round N = N cards dealt (Round 1 = 1 card, Round 2 = 2 cards, ..., Round 10 = 10 cards). Before playing, each player secretly BIDS the number of tricks they expect to win (0-N). Then play out the hand using trick-taking rules. SCORE = 20 × BID if EXACTLY correct (30 for higher bids in later rounds); -10 × |actual - bid| if WRONG. NEGATIVE POINTS POSSIBLE — get too many tricks OR too few tricks = penalties! CARDS: 4 SUITS (Yellow, Green, Purple, Black — Black is trump); ESCAPE cards (never win a trick — safe way to bid 0); PIRATES (beat all suits including trump; Pirate vs Pirate = first-played wins); MERMAIDS (beat Pirates + Escape); SKULL KING (single card; beats Mermaids). BLACK is trump suit; must follow suit if possible. BONUS POINTS for capturing Skull King (30) + Mermaids (20) + Pirates (30) with your Skull King. FAST 30-MIN games; HIGH INTERACTION + PIRATE THEME + accessible + rewarding skilled play. Small tin package. Perfect for family + gamer nights. Won 2022 Deutscher Spiele Preis + Kennerspiel des Jahres Recommendations = MODERN TRICK-TAKING CLASSIC. Multiple expansions + Legendary edition.",
  category: "card-games",
  subCategory: "trick-taking / bidding / pirate / party / Grandpa Beck / Schmidt Spiele",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Grandpa Beck's Games, Southern California) + Germany (Schmidt Spiele)",
  estimatedOrigin: "2013 Grandpa Beck's original; 2022 Schmidt Spiele award-winning refresh",
  players: { min: 2, max: 8, note: "2-8 players; 4-6 ideal for interaction." },
  field: {
    surfaceName: "Small tabletop",
    dimensions: "Small tabletop or coffee table",
    description: "Home tabletop; portable + travel-friendly.",
  },
  equipment: [
    { name: "Skull King (Schmidt Spiele) ($15-20 USD)", description: "2022 award-winning edition" },
    { name: "Skull King Legendary Edition ($25)", description: "Deluxe with additional cards" },
    { name: "Skull King App (iOS/Android)", description: "Digital adaptation" },
  ],
  duration: { approximateMinutes: 30, structure: "30-45 minutes per game (10 rounds)." },
  objective: "Score most points across 10 rounds by accurately bidding + winning tricks.",
  basicRules: [
    { title: "Round N = N cards dealt; bid before playing", body: "Round 1 = 1 card, Round 10 = 10 cards." },
    { title: "Secret simultaneous bid (0 to N)", body: "All reveal at same time." },
    { title: "Play trick-taking hand; must follow suit if possible", body: "Black is trump." },
    { title: "Cards: Yellow/Green/Purple/Black suits + Escape + Pirates + Mermaids + Skull King", body: "Card hierarchy: Skull King > Mermaids > Pirates > Trump > Suits > Escape." },
    { title: "Score: correct bid = 20 × bid; wrong = -10 × diff", body: "Reward precision, punish estimation error." },
    { title: "Bonus points for capturing special cards", body: "Pirate/Mermaid/Skull King capture rewards." },
  ],
  scoring: {
    summary: "Rounds accumulate points/penalties; highest total after 10 rounds wins.",
    breakdown: [
      { action: "Correct bid = 20 × bid", points: "+20/40/60/80/... pts per bid level" },
      { action: "Wrong bid = -10 × diff", points: "-10 per trick over/under" },
      { action: "Bid 0 correctly (in round N>1)", points: "10 × N (bonus for zero bid)" },
      { action: "Capture Pirate with Skull King", points: "+30 pts each" },
      { action: "Capture Mermaid with Skull King", points: "+20 pts each" },
    ],
    winCondition: "Most points after 10 rounds.",
  },
  governingBodies: [
    { name: "Grandpa Beck's Games (original publisher)", founded: 2005, headquarters: "USA" },
    { name: "Schmidt Spiele (award-winning publisher)", founded: 1907, headquarters: "Berlin, Germany" },
  ],
  majorCompetitions: [
    { name: "Deutscher Spiele Preis 2022 (2nd place)", frequency: "annual", founded: 2022, region: "Germany" },
    { name: "Kennerspiel des Jahres 2022 Recommendation", frequency: "annual", founded: 2022, region: "Germany" },
  ],
  countriesPlayed: ["US", "DE", "GB", "FR", "IT", "ES", "SE", "PL", "AU", "CA", "BR", "JP", "NL"],
  famousAthletes: [
    "Brent Beck (US) — Designer",
    "Grandpa Beck (Beck family, US) — Publisher + illustrator",
  ],
  variants: [
    "skull-king-2013-grandpa-becks-original",
    "skull-king-schmidt-spiele-2022-award-winning-refresh",
    "skull-king-legendary-2019-deluxe",
    "skull-king-rascal-2022-expansion",
    "skull-king-app-digital",
  ],
  relatedSports: ["hearts", "spades", "euchre", "whist", "the-crew"],
  skills: ["trick-taking fundamentals", "bidding estimation", "card counting", "opponent hand reading", "special card timing"],
  strategies: [
    { title: "Bid conservatively early rounds; more aggressively later", body: "More cards = more information." },
    { title: "Bid 0 with weak hand for round bonus", body: "Zero bid rewarded in higher rounds." },
    { title: "Skull King captures score bonus points", body: "Time SK for max captures." },
    { title: "Escape cards guarantee losing tricks", body: "Play Escape when you want to lose." },
    { title: "Track played Pirates/Mermaids", body: "Card counting for late round advantage." },
  ],
  terminology: [
    { term: "Bid", meaning: "Predict tricks you'll win (secret)." },
    { term: "Trick", meaning: "One round of card play; highest wins." },
    { term: "Trump", meaning: "Black suit (highest priority in normal cards)." },
    { term: "Escape card", meaning: "Never wins a trick." },
    { term: "Pirate card", meaning: "Beats suit cards; first-played wins Pirate vs Pirate." },
    { term: "Mermaid card", meaning: "Beats Pirates + Escape." },
    { term: "Skull King", meaning: "Single card; beats Mermaids; bonus for captures." },
    { term: "Round N", meaning: "N cards dealt per player." },
    { term: "Zero bid bonus", meaning: "10 × N points for correct 0 bid in round N (N>1)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Skull King Schmidt Spiele edition ($15-20)", body: "Award-winning modern refresh." },
      { title: "Play 4-6 players", body: "Ideal player count." },
    ]},
    { level: "intermediate", steps: [
      { title: "Learn bid estimation from card counting", body: "Skill develops with experience." },
    ]},
    { level: "advanced", steps: [
      { title: "Add Rascal expansion", body: "New card types." },
    ]},
  ],
  faq: [
    { question: "What is Skull King?", answer: "PIRATE-THEMED TRICK-TAKING CARD GAME with BIDDING by BRENT BECK + published by GRANDPA BECK'S GAMES / SCHMIDT SPIELE (US/Germany, 2013). 2-8 players play 10 rounds where they BID exactly how many tricks they'll take that hand. Score = 20×bid if correct, -10×|bid diff| if wrong. Cards: 4 suits + Escape (worst), Pirates (beat suits), Mermaids (beat Pirates + Escape), Skull King (beats Mermaids). NEGATIVE POINTS possible! High Interaction + Pirate Theme + Fast 30-min games. Won 2022 Deutscher Spiele Preis + Kennerspiel des Jahres Recommended." },
    { question: "Skull King vs traditional trick-taking (Hearts, Spades)?", answer: "SKULL KING IS MODERN + THEMATIC + STREAMLINED. Traditional trick-takers like HEARTS + SPADES + BRIDGE use standard 52-card deck + established rules; more classic. SKULL KING uses PIRATE-THEMED CARDS + BIDDING mechanic (like Oh Hell/Wizard but simpler) + special card interactions (Pirates capture, Mermaids beat Pirates, Skull King bonus). RECOMMENDATION: Traditional players → stick with Hearts/Spades/Bridge. NEWER players + families → Skull King ($15-20) is more fun + accessible + faster + rewarding. Both offer great trick-taking; Skull King is modern gateway." },
  ],
  wikipediaTitle: "Skull King (card game)",
  sources: [
    { label: "Grandpa Beck's Games — Skull King", url: "https://www.grandpabecks.com/products/skull-king", publisher: "Grandpa Beck's Games" },
    { label: "BoardGameGeek — Skull King", url: "https://boardgamegeek.com/boardgame/150145/skull-king", publisher: "BoardGameGeek" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
