import type { Sport } from "@/lib/types";

export const koiKoi: Sport = {
  id: "koi-koi",
  slug: "koi-koi",
  name: "Koi-Koi",
  officialName: "Koi-Koi (こいこい)",
  aliases: ["Hanafuda Koi-Koi", "こいこい", "Koi Koi"],
  shortDescription:
    "Japan's most popular hanafuda flower-card game — 2-player capture game with the signature 'koi-koi' declaration (Japanese for 'come on!') to continue a round for higher stakes; featured prominently in the film 'Summer Wars' (2009).",
  longDescription:
    "Koi-Koi (こいこい, 'come on!') is the most popular hanafuda-based card game in Japan — a 2-player capture game where players match played + drawn cards to captured cards on the table to build 'yaku' (scoring combinations). After completing any yaku, the player can either STOP (collect points immediately, ending the round) or declare 'KOI-KOI!' (double or nothing — continue playing to build higher yaku, but if opponent scores first they get double points). This risk-reward mechanic gives Koi-Koi its distinct psychology and drama. Hanafuda cards ('flower cards', 花札) are a 48-card deck of 12 monthly suits × 4 cards each, featuring flowers, animals, and calligraphy from each month of the year (January = Pine + Crane; February = Plum + Warbler; ... December = Paulownia + Chinese Phoenix). Koi-Koi was popularized nationally through Nintendo's early hanafuda card business (1889 founding product), remains ubiquitous in Japanese homes + smartphone apps, and gained international recognition via the anime film 'Summer Wars' (2009) which climaxes in a Koi-Koi match.",

  category: "card-games",
  subCategory: "hanafuda flower-card matching game (2-player)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (hanafuda cards evolved 1700s; Koi-Koi rules crystallized late 19th century; Nintendo's 1889 hanafuda business popularized)",
  estimatedOrigin: "Hanafuda cards 18th century; Koi-Koi rules crystallized late 1800s; Nintendo hanafuda business 1889",

  players: { min: 2, max: 2, note: "Strictly 2 players; also 3-player variant 'sanma koi-koi'." },
  equipment: [
    { name: "Hanafuda deck (48 cards)", description: "12 suits (one per calendar month) × 4 cards each. Each suit features a signature flower + seasonal imagery. Distinctive small (~54×32mm) thick cards with intricate wood-block-style art." },
    { name: "Score sheet or tokens", description: "Track cumulative score across rounds; games typically 6 or 12 rounds." },
    { name: "Cloth playing surface (optional)", description: "Traditional cloth mat to muffle card slaps + protect thick hanafuda cards." },
  ],
  duration: { approximateMinutes: 30, structure: "One game = 6 or 12 rounds; each round ~2-5 min. Total ~15-40 min per game." },
  objective: "Score more points than opponent across the game's rounds by building high-value yaku (scoring combinations) with captured cards.",
  matchStructure: "6 or 12 rounds total. Each round: deal 8 cards to each player, 8 face-up on table; players alternate turns matching + drawing. Round ends when a player Stops or opponent completes higher yaku after Koi-Koi.",

  basicRules: [
    { title: "Deal 8+8+8", body: "8 cards to each player, 8 face-up on table (field), rest form draw pile." },
    { title: "Match by suit (month)", body: "On turn: play card from hand matching table card by suit → capture both. Then draw top of pile; if it matches a table card, capture that too." },
    { title: "Build yaku from captures", body: "Yaku categories: Bright cards (5 special cards), Animal cards (10 cards), Ribbon cards (10 cards), Chaff cards (24 cards), specific themed sets (Sansake, Cherry Blossom Sake, Moon Viewing)." },
    { title: "Yaku triggers scoring", body: "Completing any yaku = eligibility to Stop or declare Koi-Koi." },
    { title: "Koi-Koi decision", body: "After yaku: STOP (collect current yaku points, round ends) OR declare KOI-KOI! (continue playing for higher score; if opponent scores first they DOUBLE)." },
    { title: "Round ends condition", body: "Round ends when: player Stops after yaku, someone reaches 8 hand cards played, or draw pile empty." },
  ],
  advancedRules: [
    { title: "Doubling on 7+ points", body: "If a round scores 7+ points, the point value doubles (compensating for Koi-Koi risk)." },
    { title: "Dealer bonus (tsuki-fuda)", body: "First round dealer gets minor bonus; alternates by season month." },
    { title: "Bright card yaku hierarchy", body: "Gokou (5 Brights) = 15 pts (huge); Shikou (4 Brights inc. Rain Man) = 8; Sankou (3 Brights excl. Rain) = 5. Rain Man devalues Bright yaku." },
    { title: "Special sake yaku", body: "Hanami-zake (Cherry Blossom + Sake Cup) = 5 pts; Tsukimi-zake (Moon + Sake Cup) = 5 pts. Elegant seasonal yaku." },
    { title: "Overriding Koi-Koi", body: "Player who called Koi-Koi loses double if opponent scores next; but this is the ONLY way to build 15+ pt hands." },
  ],
  scoring: {
    summary: "Points collected from yaku values; doubling rules apply at 7+ points and Koi-Koi failed.",
    winCondition: "Highest cumulative score after 6 or 12 rounds wins the game.",
    breakdown: [
      { action: "Gokou (5 Brights)", points: "15 pts (highest possible)" },
      { action: "Shikou (4 Brights)", points: "8 pts" },
      { action: "Ame-shikou (4 Brights inc. Rain Man)", points: "7 pts" },
      { action: "Sankou (3 Brights excl. Rain)", points: "5 pts" },
      { action: "Ino-Shika-Chou (Boar + Deer + Butterfly)", points: "5 pts" },
      { action: "Hanami-zake (Cherry Blossom + Sake)", points: "5 pts" },
      { action: "Tsukimi-zake (Moon + Sake)", points: "5 pts" },
      { action: "Aka-tan (3 red ribbons)", points: "5 pts" },
      { action: "Ao-tan (3 blue ribbons)", points: "5 pts" },
      { action: "Tane (5 animal cards)", points: "1 pt + 1 per extra animal" },
      { action: "Tan (5 ribbon cards)", points: "1 pt + 1 per extra ribbon" },
      { action: "Kasu (10 chaff cards)", points: "1 pt + 1 per extra chaff" },
    ],
  },
  penalties: [
    { title: "Illegal capture", body: "Rule violation — round replayed or opponent awarded default points." },
    { title: "Cheating detected", body: "Immediate DQ from tournament / social sanction." },
  ],

  positions: [
    { name: "Oya (dealer)", role: "Deals cards; alternates by round; gets minor bonus first round.", count: 1 },
    { name: "Ko (non-dealer)", role: "Non-dealer player; plays second.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (tournament only)", "Scorekeeper"],
    summary: "Casual + family play is self-refereed. Japanese national + prefectural tournaments use referees + scorekeepers.",
  },

  governingBodies: [
    { name: "Nintendo Co., Ltd. (historic hanafuda producer; founded on hanafuda in 1889)", founded: 1889, headquarters: "Kyoto, Japan", website: "https://www.nintendo.co.jp" },
    { name: "Japan Hanafuda Association (regional community body)", founded: 2010, headquarters: "Japan" },
  ],
  majorCompetitions: [
    { name: "Japan Hanafuda Koi-Koi Championship", frequency: "annual", founded: 2015, region: "Japan (Tokyo + Kyoto)" },
    { name: "Kyoto Hanafuda Festival Tournament", frequency: "annual", founded: 2018, region: "Kyoto (Nintendo hometown)" },
    { name: "Nintendo Hanafuda Cup (historic, corporate)", frequency: "irregular", founded: 1990, region: "Japan (Nintendo cultural events)" },
  ],
  countriesPlayed: ["JP", "KR", "HI (Hawaii/USA)", "BR", "US"],
  famousAthletes: [
    "Various regional Japanese tournament champions",
    "Featured in the film 'Summer Wars' (2009) climax as central plot device",
    "Nintendo's founding product — Fusajiro Yamauchi began Nintendo as a hanafuda card manufacturer 1889",
  ],
  records: [
    { title: "Oldest continuous card game company", holder: "Nintendo", value: "Founded 1889 as a hanafuda card manufacturer; still producing hanafuda decks today — 135+ years of continuous production", year: 2024 },
    { title: "Highest possible single-round score", holder: "Gokou + Koi-Koi doubling stacks", value: "Theoretical max ~30+ points in a single round via Gokou (15) then Koi-Koi doubles", year: 2020 },
    { title: "'Summer Wars' cultural impact", holder: "Mamoru Hosoda film (2009)", value: "Anime film prominently featured Koi-Koi in climax; drove global hanafuda awareness + Nintendo hanafuda sales spike", year: 2009 },
  ],

  variants: ["standard-koi-koi-2-player", "sanma-koi-koi-3-player-variant", "hachi-hachi-88-point-target-variant", "roku-hyaku-ken-600-yen-gambling-variant", "kabufuda-related-japanese-card-game"],
  relatedSports: ["go-stop", "hanafuda", "kabufuda", "mekuri-karuta", "hachi-hachi"],

  skills: ["yaku memorization (12 categories)", "opponent hand reading (via discarded + captured cards)", "risk-reward calculation for Koi-Koi decision", "probability tracking (24-card draw pile)", "table awareness (which cards remain accessible)", "psychological reading (facial tells during Koi-Koi call)"],
  strategies: [
    { title: "Prioritize Bright cards early", body: "Bright cards (5 special cards spread across months) score huge yaku (Gokou 15 pts, Sankou 5 pts). Capture them if possible early." },
    { title: "Koi-Koi discipline", body: "Only declare Koi-Koi with strong follow-up path (multiple close yaku); reflexive Koi-Koi often gives opponent double win." },
    { title: "Deny opponent yaku", body: "Track opponent captures; capture cards that would complete their yaku even if it doesn't help yours." },
    { title: "Chaff wins are stable", body: "Chaff yaku (10 chaff cards + 1 pt each extra) is unglamorous but low-risk; use when Brights are unavailable." },
    { title: "Round 5-6 aggression", body: "Late rounds require aggressive Koi-Koi + doubling to overcome cumulative deficit." },
  ],

  terminology: [
    { term: "Koi-Koi (こいこい)", meaning: "'Come on!' — declaration to continue round after yaku for double-or-nothing." },
    { term: "Hanafuda (花札)", meaning: "'Flower cards' — 48-card Japanese deck (12 suits × 4)." },
    { term: "Yaku (役)", meaning: "Scoring combination — 12+ named categories in Koi-Koi." },
    { term: "Bright (光, hikari)", meaning: "5 special high-value cards (Crane, Curtain, Moon, Rain Man, Phoenix)." },
    { term: "Rain Man (雨)", meaning: "Nov Bright card (Willow + Ono no Michikaze); devalues Bright yaku." },
    { term: "Sake Cup (酒, sakazuki)", meaning: "Special Sept card enabling Hanami + Tsukimi sake yaku." },
    { term: "Oya", meaning: "Dealer position (rotates each round)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the 12 month suits + Bright cards", body: "Memorize which month has which flowers + which cards are Brights (Jan Crane, Mar Curtain, Aug Moon, Nov Rain Man, Dec Phoenix)." },
      { title: "Practice with mobile apps + Nintendo Switch's 'Clubhouse Games' Koi-Koi mode", body: "Multiple free Koi-Koi apps + Nintendo's official implementation teach rules + AI opponents." },
      { title: "Play 6-round games with family", body: "Japanese-heritage families + hanafuda enthusiasts play regularly; social learning is best path." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in local Japanese hanafuda tournaments", body: "Regional tournaments across Japan (especially Kyoto — Nintendo hometown) — ask at hanafuda specialty shops." },
      { title: "Study yaku probability + Koi-Koi risk models", body: "Advanced players calculate expected value of Koi-Koi vs. Stop given remaining draw pile + opponent captures." },
      { title: "Compete at Kyoto Hanafuda Festival annual tournament", body: "Kyoto's annual festival is peak amateur Koi-Koi competition." },
    ]},
  ],

  faq: [
    { question: "How is Koi-Koi different from other hanafuda games?", answer: "Koi-Koi is unique for its 'koi-koi' declaration — after completing any yaku, the player can Stop (collect points) or declare Koi-Koi (continue for higher score with double-or-nothing risk). Other hanafuda games (Hachi-Hachi, Mekuri Karuta) use different scoring + capture rules. Korean Go-Stop is derived from Koi-Koi with different yaku values + additional 'go/stop' mechanics." },
    { question: "Is Koi-Koi Nintendo's founding game?", answer: "Nintendo was founded 1889 in Kyoto as a hanafuda card manufacturer — hanafuda + Koi-Koi were Nintendo's original business before video games. Nintendo still produces official hanafuda decks (including Mario-themed hanafuda) as a cultural product. The 2009 film 'Summer Wars' features Koi-Koi as its climactic plot device and helped introduce Koi-Koi to a global audience." },
    { question: "Is Koi-Koi gambling?", answer: "In casual + family play Koi-Koi is a pure skill/luck social game without money stakes. In some traditional Japanese contexts (especially older gambling parlors) it was played for small stakes historically. Modern tournament play is prize-based, not gambling. Japan has strict anti-gambling laws that permit skill-based prize tournaments but restrict cash-play in social settings." },
  ],

  wikipediaTitle: "Koi-Koi",
  sources: [
    { label: "Nintendo Hanafuda", url: "https://www.nintendo.co.jp", publisher: "Nintendo" },
    { label: "Wikipedia — Koi-Koi", url: "https://en.wikipedia.org/wiki/Koi-Koi", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
