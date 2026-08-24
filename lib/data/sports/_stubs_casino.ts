import type { Sport } from "@/lib/types";

/**
 * Casino & gambling games — house-vs-player wagering games from around
 * the world. Distinct from card/dice games because the house-edge, chip
 * mechanics and social gambling context are integral to how the game is
 * played and understood.
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_CASINO: Sport[] = [
  {
    id: "roulette", slug: "roulette", name: "Roulette",
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "early-modern",
    countryOfOrigin: "FR", estimatedOrigin: "18th-century France — invented from earlier Italian and English wheel games",
    players: { min: 1, max: 8 },
    shortDescription: "The iconic casino wheel — place chips on numbers, colours or ranges and watch a small white ball fall into a numbered pocket.",
    longDescription: "Roulette (French for 'little wheel') is a casino table game invented in 18th-century France. Players wager on where a small white ball will land on a numbered spinning wheel — 37 pockets in European roulette (0 through 36), 38 in American roulette (extra 00). Bets range from single numbers (35:1) to red/black or odd/even (1:1). The signature centrepiece of every casino floor from Monte Carlo to Las Vegas to Macau.",
    wikipediaTitle: "Roulette", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "bingo", slug: "bingo", name: "Bingo",
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1929, Edwin S. Lowe adapted the Italian lotto game 'Beano' as 'Bingo'",
    players: { min: 5, max: 500 },
    shortDescription: "Classic community game — cross off numbers as a caller draws them; first to complete a row, column or full house shouts 'Bingo!'",
    longDescription: "Bingo is a game of chance descended from the 16th-century Italian lottery 'Il Gioco del Lotto d'Italia'. Modern bingo was popularised in the United States from 1929 by Edwin S. Lowe. Each player receives a card with a grid of numbers; a caller draws numbers at random and players mark them off, aiming to complete a designated pattern first (a row, column, X, or full house). Played in halls, churches, cruise ships and online worldwide.",
    wikipediaTitle: "Bingo (American version)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "keno", slug: "keno", name: "Keno",
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "medieval",
    countryOfOrigin: "CN", estimatedOrigin: "3rd-century-BCE Han-dynasty China; modern American keno since 19th century",
    players: { min: 1, max: 20 },
    shortDescription: "Casino lottery — pick between 1 and 20 numbers from 1–80; the house draws 20 balls and pays out based on matches.",
    longDescription: "Keno is a lottery-style casino game with roots in Han-dynasty China (legend says it funded the Great Wall). Players choose up to 20 numbers from the range 1–80; the house then draws 20 balls at random. Payouts depend on how many of the player's numbers were drawn and how many were picked. Played extensively in Chinese lottery halls and offered in most Western casinos as a low-stakes background game.",
    wikipediaTitle: "Keno", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "pai-gow", slug: "pai-gow", name: "Pai Gow",
    aliases: ["Pai Gow Poker"],
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "medieval",
    countryOfOrigin: "CN", estimatedOrigin: "Song-dynasty China — 32-tile game; Pai Gow Poker (Sam Torosian) invented 1985 California",
    players: { min: 2, max: 8 },
    shortDescription: "Chinese domino game — arrange four 32-tile dominoes into two hands to beat the banker; also survives as Pai Gow Poker.",
    longDescription: "Pai Gow (literally 'make nine') is a Chinese gambling game played with a set of 32 Chinese dominoes, dating to the Song dynasty. Each player receives four tiles and arranges them into a two-tile 'front hand' and a two-tile 'back hand' — the back hand must rank higher — then compares both hands to the banker's. Its 1985 American adaptation Pai Gow Poker (seven-card version using cards, invented by Sam Torosian) is now widespread in Nevada and California casinos.",
    wikipediaTitle: "Pai gow", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "teen-patti", slug: "teen-patti", name: "Teen Patti",
    aliases: ["Indian Poker", "Flush"],
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "IN", estimatedOrigin: "Indian adaptation of British three-card brag — a Diwali-night staple across South Asia",
    players: { min: 3, max: 7 },
    shortDescription: "'Three cards' — Indian bluffing card game descended from British brag, especially played on Diwali night.",
    longDescription: "Teen Patti (Hindi for 'three cards') is the Indian gambling card game descended from the British game three-card brag. Each player is dealt three cards face down; players bet blind or 'seen' in ascending ante rounds until only one remains or a showdown is called. Ranking is very close to poker (Trail > Pure Sequence > Sequence > Colour > Pair > High Card). A fixture of Diwali-night home games across South Asia and hugely popular in Indian mobile-poker apps.",
    wikipediaTitle: "Teen patti", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "andar-bahar", slug: "andar-bahar", name: "Andar Bahar",
    aliases: ["Katti"],
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "19th-century",
    countryOfOrigin: "IN", estimatedOrigin: "South India — 'Katti' in Karnataka; now spread across Indian casinos and apps",
    players: { min: 2, max: 20 },
    shortDescription: "Bengaluru bazaar game — the dealer reveals a middle card, then deals left ('andar') and right ('bahar') until a match; bettors picked the correct side.",
    longDescription: "Andar Bahar (Hindi for 'inside outside') is a fast-paced Indian card gambling game from Karnataka, also called Katti. The dealer places one 'joker' card face-up in the middle; players bet on whether the next card of the same rank will appear in the Andar (left, inside) or Bahar (right, outside) pile as the dealer alternates cards. Extremely simple, entirely luck-based, and now one of the most-played live-dealer games on Indian iGaming platforms.",
    wikipediaTitle: "Andar Bahar", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "pachinko", slug: "pachinko", name: "Pachinko",
    category: "casino-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1920s Japan (adapted from American 'Corinthian bagatelle'); explodes post-WWII",
    players: { min: 1, max: 1 },
    shortDescription: "Japanese vertical pinball-slot machine — fire steel balls at a pin-studded playfield to trigger jackpots.",
    longDescription: "Pachinko is a Japanese arcade gambling device — essentially a vertical pinball slot machine — that emerged in 1920s Nagoya from adaptations of the American Corinthian bagatelle. Players fire small steel balls into a pin-studded upright playfield; balls that fall into scoring pockets trigger prize payouts of more balls, which can be exchanged for prizes (or grey-market cash). Japan's pachinko parlours are a multi-trillion-yen industry and one of the world's largest gambling markets.",
    wikipediaTitle: "Pachinko", lastVerified: TODAY, confidence: "verified",
  },
];
