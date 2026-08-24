import type { Sport } from "@/lib/types";

/**
 * Card & tile games (sports 202+).
 *
 * These sit under the `mind-sports` category alongside chess, Go and
 * bridge — the same taxonomy the atlas already uses for competitive
 * board games. Each entry ships with a `wikipediaTitle` so the hero
 * pulls a real editorial photo.
 *
 * Covered here:
 *   • Casino games        — poker, blackjack, baccarat
 *   • Rummy family        — rummy, gin rummy, canasta
 *   • Trick-taking        — spades, hearts, euchre, cribbage, belote, skat, french tarot
 *   • Tile game           — mahjong
 *   • Trading card games  — Magic, Yu-Gi-Oh!, Pokémon
 */

const TODAY = "2026-08-24";

export const SPORT_STUBS_CARDS: Sport[] = [
  // ────────────────────────────────────────────────────────────────
  //  Casino card games
  // ────────────────────────────────────────────────────────────────
  {
    id: "poker", slug: "poker", name: "Poker",
    aliases: ["Texas Hold'em"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "19th-century",
    countryOfOrigin: "US", estimatedOrigin: "Early 19th-century Mississippi River; WSOP founded 1970, Las Vegas",
    players: { min: 2, max: 10, note: "2–10 at a table; large tournaments field thousands via multi-table play." },
    shortDescription: "Family of vying card games in which players bet on the strength of their five-card hand — Texas Hold'em is the flagship tournament format.",
    longDescription: "Poker is a family of card games combining private cards, community cards and betting rounds to make the best five-card hand — or bluff opponents into folding. Texas Hold'em is by far the dominant modern form, powering both cash games and multi-table tournaments. The World Series of Poker in Las Vegas has crowned the game's world champions annually since 1970, and its Main Event routinely draws over 8,000 entrants.",
    wikipediaTitle: "Poker", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "blackjack", slug: "blackjack", name: "Blackjack",
    aliases: ["Twenty-One", "Vingt-et-un"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "early-modern",
    countryOfOrigin: "FR", estimatedOrigin: "18th-century France as \"Vingt-et-un\"; modern blackjack popularised in 20th-century USA",
    players: { min: 1, max: 7, note: "Each player plays independently against the dealer." },
    shortDescription: "Casino card game where each player independently tries to beat the dealer's hand by getting as close to 21 without going over.",
    longDescription: "Blackjack is the world's most widely played casino banking game. Players receive two cards and can hit (draw more), stand, split, double-down or take insurance, trying to beat the dealer's hand without exceeding 21. Its blend of luck and provably solvable basic strategy has spawned professional card-counting teams (the MIT Blackjack Team) and remains a fixture of every casino floor.",
    wikipediaTitle: "Blackjack", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "baccarat", slug: "baccarat", name: "Baccarat",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "medieval",
    countryOfOrigin: "IT", estimatedOrigin: "15th-century Italy (\"baccara\"); refined in 19th-century France",
    players: { min: 2, max: 14, note: "Punto Banco: any number of players bet on Player, Banker or Tie." },
    shortDescription: "High-stakes casino card game where players wager on which of two hands — Player or Banker — will finish closest to 9.",
    longDescription: "Baccarat is a casino card game with roots in 15th-century Italy. In the dominant Punto Banco variant, two hands (\"Player\" and \"Banker\") are dealt by fixed drawing rules; players simply bet on which hand will finish closer to a total of 9 (tens count as 0, only the last digit of the total counts). Its high stakes and simple format make it the highest-revenue table game in the world's biggest casinos.",
    wikipediaTitle: "Baccarat", lastVerified: TODAY, confidence: "verified",
  },

  // ────────────────────────────────────────────────────────────────
  //  Rummy family
  // ────────────────────────────────────────────────────────────────
  {
    id: "rummy", slug: "rummy", name: "Rummy",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "19th-century",
    countryOfOrigin: "MX", estimatedOrigin: "Likely from 19th-century Mexican \"Conquian\"; global variants throughout the 20th century",
    players: { min: 2, max: 6 },
    shortDescription: "Family of matching-card games — draw and discard until you form all your cards into legal sets and runs.",
    longDescription: "Rummy is a family of matching-card games in which players draw and discard cards, trying to arrange their hand into valid sets (three or four of a kind) and runs (consecutive same-suit sequences). Variants include Indian Rummy, 500 Rummy, Rummikub (tile-based), Rummy 21 and dozens more — many of them the national card game of their region.",
    wikipediaTitle: "Rummy", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "gin-rummy", slug: "gin-rummy", name: "Gin Rummy",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1909, Brooklyn, USA (Elwood T. Baker)",
    players: { perTeam: 1, note: "Strictly a two-player game." },
    shortDescription: "Two-player rummy classic — form all ten cards into melds, then knock or go gin to end the hand.",
    longDescription: "Gin rummy is the two-player showpiece of the rummy family, devised by Elwood T. Baker in Brooklyn in 1909. Each player is dealt ten cards and races to arrange them into sets and runs. A player can \"knock\" once the count of unmatched cards drops to 10 or fewer, or \"go gin\" for a bonus by melding every card. Its speed, simplicity and depth made it a Hollywood-era fixture and it remains a widely-played competitive game.",
    wikipediaTitle: "Gin rummy", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "canasta", slug: "canasta", name: "Canasta",
    category: "mind-sports", sportType: "team",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "20th-century",
    countryOfOrigin: "UY", estimatedOrigin: "1939, Montevideo, Uruguay (Segundo Santos & Alberto Serrato)",
    players: { perTeam: 2, note: "Standard four-player partnership game." },
    shortDescription: "South American partnership rummy game — race to build \"canastas\" of seven or more same-rank cards.",
    longDescription: "Canasta is a rummy-family partnership card game invented in Uruguay in 1939 that swept the world in the 1950s. Four players form two partnerships, drawing and melding cards to build \"canastas\" — melds of seven or more cards of the same rank — with wild cards (jokers and twos) contributing bonus scoring. Games are played to 5,000 points across several deals.",
    wikipediaTitle: "Canasta", lastVerified: TODAY, confidence: "verified",
  },

  // ────────────────────────────────────────────────────────────────
  //  Trick-taking classics
  // ────────────────────────────────────────────────────────────────
  {
    id: "spades", slug: "spades", name: "Spades",
    category: "mind-sports", sportType: "team",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1930s Midwestern USA (Cincinnati, Ohio)",
    players: { perTeam: 2, note: "Standard four-player partnership game." },
    shortDescription: "American partnership trick-taking card game — bid the number of tricks you'll win, with spades always trump.",
    longDescription: "Spades is a trick-taking partnership card game that emerged in the American Midwest in the 1930s. Four players in two partnerships each bid the number of tricks they will win, with the spade suit always trump. Meeting the combined partnership bid scores points; falling short is a heavy penalty (a \"set\"). It became a fixture of US college and military life and is played by tens of millions online.",
    wikipediaTitle: "Spades (card game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "hearts", slug: "hearts", name: "Hearts",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "19th-century",
    countryOfOrigin: "ES", estimatedOrigin: "Late 19th-century Spain (\"Reversis\"); modern hearts crystallised in USA",
    players: { perTeam: 1, note: "Standard four-player game; each plays for themselves." },
    shortDescription: "Trick-avoidance card game — every heart costs a point and the Queen of Spades costs 13, so lowest total wins.",
    longDescription: "Hearts is a \"reverse\" trick-taking card game in which players try to avoid winning tricks that contain hearts (1 penalty point each) or the Queen of Spades (13 points). A player who scoops up every penalty in a hand — \"shooting the moon\" — instead dumps 26 points onto each opponent. Games run until someone hits 100 points; lowest total wins.",
    wikipediaTitle: "Hearts (card game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "euchre", slug: "euchre", name: "Euchre",
    category: "mind-sports", sportType: "team",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "regional", era: "19th-century",
    countryOfOrigin: "DE", estimatedOrigin: "Alsace / south-west Germany (~1820s); huge in the American Midwest and Ontario",
    players: { perTeam: 2, note: "Four-player partnership game with a 24-card deck." },
    shortDescription: "Fast partnership trick-taking game played with a stripped 24-card deck — the Jack of trumps is the mighty \"right bower\".",
    longDescription: "Euchre is a lively partnership trick-taking card game played with a stripped 24-card deck (9 through Ace). Four players in two partnerships bid to name the trump suit, with the Jack of trumps (\"right bower\") and the other same-colour Jack (\"left bower\") the two highest cards. Winning three of five tricks scores; sweeping all five is a \"march\". It is the state card game of Indiana and a Midwestern / Ontarian fixture.",
    wikipediaTitle: "Euchre", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "cribbage", slug: "cribbage", name: "Cribbage",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "early-modern",
    countryOfOrigin: "GB", estimatedOrigin: "Early 17th-century England (Sir John Suckling)",
    players: { min: 2, max: 4, note: "Typically two-player; three- and four-hand variants exist." },
    shortDescription: "English card game with a scoring peg board — count 15s, pairs, runs and flushes to be first to 121 points.",
    longDescription: "Cribbage is an English card game traditionally attributed to the 17th-century poet Sir John Suckling. Uniquely, it is scored on a small pegged board rather than pen and paper. Players score points during the play (fifteens, pairs, runs and \"go\") and during a scoring show, racing to be first around the board to 121 points. It remains hugely popular in British pubs and the Royal Navy.",
    wikipediaTitle: "Cribbage", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "belote", slug: "belote", name: "Belote",
    category: "mind-sports", sportType: "team",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "20th-century",
    countryOfOrigin: "FR", estimatedOrigin: "1920s France (from earlier Dutch \"Klaverjas\")",
    players: { perTeam: 2, note: "Standard four-player partnership game with a 32-card deck." },
    shortDescription: "France's national card game — a four-player partnership trick-taker with bidding, declarations and a 32-card deck.",
    longDescription: "Belote is the most widely played card game in France, played four-handed in two partnerships with a stripped 32-card deck (7 through Ace). Players bid for the trump suit, then take tricks, score bonuses for card combinations (\"declarations\") and for holding the King-Queen of trumps (the \"belote-rebelote\"). Games are played to 501, 701 or 1001 points.",
    wikipediaTitle: "Belote", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "skat", slug: "skat", name: "Skat",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "19th-century",
    countryOfOrigin: "DE", estimatedOrigin: "1810, Altenburg, Germany",
    players: { perTeam: 1, note: "Strictly a three-player game; each plays independently, one as declarer per hand." },
    shortDescription: "Germany's national card game — three-player bidding and trick-taking with a 32-card deck and a devilishly deep scoring system.",
    longDescription: "Skat is the national card game of Germany, first played in 1810 in the town of Altenburg. Three players use a 32-card deck; each hand one player bids to become the \"declarer\" and either play against the other two or declare a null / grand contract. Its layered scoring (matadors, base value, multipliers) is deep enough that Germany has a professional Skat league and a formal tournament calendar.",
    wikipediaTitle: "Skat (card game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "french-tarot", slug: "french-tarot", name: "French Tarot",
    aliases: ["Tarot"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "major", era: "early-modern",
    countryOfOrigin: "FR", estimatedOrigin: "18th-century France (from Italian tarocchini); modern rules codified 1973 (FFT)",
    players: { perTeam: 1, note: "Four- and five-player versions are most common; three-player is the classic." },
    shortDescription: "France's premier trick-taking card game — 78-card tarot deck with a permanent trump suit and the powerful Excuse.",
    longDescription: "French tarot is the most popular tarot-based card game, played competitively across France under the Fédération Française de Tarot (formed 1973). It uses a 78-card tarot deck containing 21 trumps (\"atouts\") plus the wild Excuse. The taker bids to reach a point target against the other players, with bonus points for capturing the trump 1, the highest trump (21) and the Excuse.",
    wikipediaTitle: "French tarot", lastVerified: TODAY, confidence: "verified",
  },

  // ────────────────────────────────────────────────────────────────
  //  Tile game
  // ────────────────────────────────────────────────────────────────
  {
    id: "mahjong", slug: "mahjong", name: "Mahjong",
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "19th-century",
    countryOfOrigin: "CN", estimatedOrigin: "Mid-19th-century Qing dynasty China (Ningbo region)",
    players: { perTeam: 1, note: "Standard four-player game; three-player variants exist in Korea and Japan." },
    shortDescription: "Chinese four-player tile game — draw and discard to complete a legal winning hand of four sets and a pair.",
    longDescription: "Mahjong is a four-player tile-based game originating in mid-19th century China. Players draw and discard from a wall of 144 tiles (suits, honours and bonuses) to complete a winning hand of four sets plus a pair. Major variants include Chinese Classical, Hong Kong, Japanese Riichi (with declarations and betting-style scoring), American (with an annual League card) and World Series Mahjong.",
    wikipediaTitle: "Mahjong", lastVerified: TODAY, confidence: "verified",
  },

  // ────────────────────────────────────────────────────────────────
  //  Trading card games (competitive)
  // ────────────────────────────────────────────────────────────────
  {
    id: "magic-the-gathering", slug: "magic-the-gathering", name: "Magic: The Gathering",
    aliases: ["MTG", "Magic"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1993, Wizards of the Coast, Renton, Washington (Richard Garfield)",
    players: { perTeam: 1, note: "1v1 in tournament play; multiplayer Commander is casual." },
    shortDescription: "The original trading card game — build a deck from thousands of cards and reduce your opponent from 20 life to zero.",
    longDescription: "Magic: The Gathering, launched in 1993 by Wizards of the Coast, was the world's first trading card game. Each player builds a customised deck from a card pool of tens of thousands and plays 1v1 to reduce the opponent's starting 20 life to zero using lands, creatures, spells and enchantments. The Pro Tour, World Championship and MagicCon events crown the top competitive players annually.",
    wikipediaTitle: "Magic: The Gathering", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "yu-gi-oh", slug: "yu-gi-oh", name: "Yu-Gi-Oh!",
    aliases: ["Yu-Gi-Oh! TCG"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1999, Konami (based on 1996 manga by Kazuki Takahashi)",
    players: { perTeam: 1 },
    shortDescription: "Japanese trading card game — summon Monster Cards and unleash Spell / Trap combos to drop your opponent's 8,000 life points.",
    longDescription: "Yu-Gi-Oh! is a competitive trading card game published by Konami since 1999, based on Kazuki Takahashi's manga. Each player builds a Main Deck (40–60 cards) and Extra Deck (up to 15) and plays 1v1, using Monster, Spell and Trap cards to bring an opponent from 8,000 life points to zero. The Yu-Gi-Oh! World Championship Series (WCS) is the annual pinnacle of competitive play.",
    wikipediaTitle: "Yu-Gi-Oh! Trading Card Game", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "pokemon-tcg", slug: "pokemon-tcg", name: "Pokémon Trading Card Game",
    aliases: ["Pokémon TCG"],
    category: "mind-sports", sportType: "individual",
    indoorOutdoor: "indoor", isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1996, Media Factory, Japan (based on the Pokémon franchise)",
    players: { perTeam: 1 },
    shortDescription: "Trading card game based on the Pokémon franchise — knock out six of your opponent's Pokémon to win the match.",
    longDescription: "The Pokémon Trading Card Game launched in Japan in 1996 and grew into one of the best-selling TCGs ever produced. Players build 60-card decks of Pokémon, Energy and Trainer cards and play 1v1; the first player to knock out six of their opponent's Pokémon (or empty their hand or deck) wins. The annual Pokémon World Championships crowns junior, senior and masters division champions.",
    wikipediaTitle: "Pokémon Trading Card Game", lastVerified: TODAY, confidence: "verified",
  },
];
