import type { Sport } from "@/lib/types";

export const goStop: Sport = {
  id: "go-stop",
  slug: "go-stop",
  name: "Go-Stop",
  officialName: "Go-Stop (고스톱, 高-Stop)",
  aliases: ["Godori", "고스톱", "Matgo (2-player variant)", "Sam-Kwang"],
  shortDescription:
    "Korea's most popular family card game — 2-3 player hwatu (Korean hanafuda) capture game derived from Japanese Koi-Koi but with unique 'Go' or 'Stop' declaration mechanics, penalty rules, and Korean cultural traditions during Chuseok + Lunar New Year holidays.",
  longDescription:
    "Go-Stop (고스톱, from 'go' 高 = continue + 'stop' = end) is Korea's most popular card game, played with hwatu (화투) — the Korean version of Japanese hanafuda cards. Derived from Japanese Koi-Koi in the early 20th century but heavily localized, Go-Stop evolved unique rules: mandatory continuation ('Go') declaration for extra points, penalty payments ('mudda' 뭐 or 'ppuk' 뻑) for opponents when specific card combinations appear, 'shaking' (흔들기) declaration for holding 3-of-a-suit, and multi-player 3-way play (unlike Koi-Koi's strict 2-player format). Go-Stop is deeply embedded in Korean holiday culture — played by families at Chuseok (Korean Thanksgiving) and Seollal (Lunar New Year). Estimated 90%+ of Korean adults know how to play. 2-player Go-Stop is called 'Matgo' (맞고). While it's traditionally played for small money among family/friends, tournament play is prize-based. Mobile Go-Stop apps (NHN's Hangame + Netmarble's Pmang) are massively popular in Korea.",

  category: "card-games",
  subCategory: "hwatu (Korean hanafuda) capture game (2-3 player)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "Korea (adapted from Japanese hanafuda during Japanese occupation period 1910-1945; localized rules developed post-1950s)",
  estimatedOrigin: "Japanese hanafuda introduced to Korea during colonial period 1910-1945; Go-Stop rules crystallized 1960s-70s; mobile app boom 2000s",

  players: { min: 2, max: 3, note: "3-player Go-Stop is the standard tournament + social format. 2-player variant is called Matgo (맞고)." },
  equipment: [
    { name: "Hwatu deck (48 cards)", description: "Korean version of Japanese hanafuda — same 12-suit × 4-card structure but with slightly different art + more vibrant colors than Japanese hanafuda." },
    { name: "Score board / tokens", description: "Track points across rounds; often traditional coins or bills in family play." },
    { name: "Cloth mat", description: "Cushion for slapping cards; standard in Korean gaming culture." },
  ],
  duration: { approximateMinutes: 45, structure: "Games are typically first-to-target-score (e.g., first-to-100 or first-to-200 points across multiple rounds). Each round ~2-5 min; total game ~30-90 min." },
  objective: "Score 7+ points in a round then decide 'Go' (continue for more points) or 'Stop' (end round + collect points). Cumulative score across rounds determines winner.",
  matchStructure: "First-to-target format (100 or 200 points typical). Each round: deal cards, play until player scores 7+ points, then Go/Stop decision. Rounds continue until target reached.",

  basicRules: [
    { title: "3-player 10-card deal", body: "Each player dealt 10 cards; 8 cards face-up on table (field); rest form draw pile." },
    { title: "Match by suit (month)", body: "On turn: play card matching a table card's suit → capture both. Then draw top of pile; if matches, capture that too." },
    { title: "Score by captured card categories", body: "Bright cards (5 special), Animal cards, Ribbon cards, Junk cards. Each category has minimum count for scoring." },
    { title: "7-point threshold triggers decision", body: "Once you accumulate 7+ points, must decide: 'Go' (continue for potentially more points, opponents may catch up) OR 'Stop' (end round, collect all points)." },
    { title: "Consecutive Go bonus", body: "Each Go declaration doubles the round's point value ('Go 2', 'Go 3', 'Go 4' — Go 4+ = capped)." },
  ],
  advancedRules: [
    { title: "Mudda / Ppuk penalty (뭐 / 뻑)", body: "If 2 cards of same suit are played on 1 table card of that suit → 'Ppuk!' — those cards seal until another card of that suit arrives; opponent pays penalty when triggered." },
    { title: "Shaking (흔들기)", body: "Holding 3 cards of same suit → declare 'Shaking!' — the resulting yaku scores DOUBLE points if you complete it." },
    { title: "Sseul (썰다) — winning by pile-shift", body: "If drawing a card causes a specific pile-shift condition, extra bonus." },
    { title: "Godori (5 animals)", body: "Capture the 5 special animal cards (specific 5 suits' animal cards) = 5 pts + bonus." },
    { title: "Bomb (폭탄)", body: "Play 3 same-suit cards at once → immediate 1-point bonus + special animation in mobile version." },
    { title: "Nagari (nothing wins)", body: "If nobody reaches 7 points before draw pile empty → round is Nagari; dealer collects small penalty from all." },
  ],
  scoring: {
    summary: "Points from card categories multiplied by Go count + Shaking + special bonuses.",
    winCondition: "First player to reach target score (typically 100 or 200 points) across accumulated rounds wins game.",
    breakdown: [
      { action: "Godori (5 special animals)", points: "5 pts" },
      { action: "3 Brights (Sam-Kwang)", points: "3 pts" },
      { action: "4 Brights (Sa-Kwang)", points: "4 pts" },
      { action: "5 Brights (Oh-Kwang)", points: "15 pts" },
      { action: "5 Animals (Yeol-Kwang)", points: "1 pt + 1 per extra animal" },
      { action: "5 Ribbons (Danggeul)", points: "1 pt + 1 per extra ribbon" },
      { action: "10 Junks (Pi)", points: "1 pt + 1 per extra junk" },
      { action: "3 Junk of Sun (special ribbon set — Chungdan)", points: "3 pts" },
      { action: "3 Junk of Poem (Hongdan)", points: "3 pts" },
      { action: "3 Junk of Winter (Chodan)", points: "3 pts" },
      { action: "Go 1 / Go 2 / Go 3 / Go 4+", points: "×1 / ×2 / ×4 / ×8 (round score doubling)" },
      { action: "Shaking (흔들기)", points: "Additional ×2 on completed yaku from shake suit" },
    ],
  },
  penalties: [
    { title: "Piseul (피설사) — losing pi cards", body: "If drawing card causes 5+ 'pi' (junk cards) to redistribute unfavorably, penalty owed to opponents." },
    { title: "Illegal capture / miscount", body: "Point deduction; round may be replayed." },
    { title: "Cheating detected", body: "Immediate DQ; family game context = social embarrassment; tournament = formal ban." },
  ],

  positions: [
    { name: "Dealer (첫판)", role: "Deals cards; rotates each round; deals to 3 players 10 cards each.", count: 1 },
    { name: "Player 2", role: "Non-dealer; plays second turn.", count: 1 },
    { name: "Player 3", role: "Non-dealer; plays third turn (or absent in 2-player Matgo variant).", count: 1 },
  ],
  officiating: {
    officials: ["Referee (tournament only)", "Scorekeeper"],
    summary: "Family + social play is self-refereed. Korean online + mobile play is auto-refereed by the app. Tournament play uses referees.",
  },

  governingBodies: [
    { name: "Korean Go-Stop Association (informal community body)", founded: 2000, headquarters: "Seoul, South Korea" },
    { name: "NHN Hangame (largest mobile Go-Stop platform)", founded: 1999, headquarters: "Seongnam, South Korea", website: "https://www.hangame.com" },
    { name: "Netmarble Pmang (Go-Stop app operator)", founded: 2003, headquarters: "Seoul, South Korea" },
  ],
  majorCompetitions: [
    { name: "Hangame Go-Stop Championship (online tournament)", frequency: "annual", founded: 2005, region: "Korea (mobile + online)" },
    { name: "Pmang Go-Stop King Tournament", frequency: "annual", founded: 2007, region: "Korea (mobile)" },
    { name: "Various Korean regional tournaments", frequency: "annual", founded: 1985, region: "Korean provinces (various since 1980s)" },
  ],
  countriesPlayed: ["KR", "US (Korean-American diaspora)", "JP", "CN (Korean minority regions)"],
  famousAthletes: [
    "Various mobile Go-Stop pros with millions of app followers",
    "TV celebrities regularly featured playing Go-Stop on Korean variety shows",
    "Culturally embedded rather than star-driven — every Korean adult family has a 'Go-Stop master' member",
  ],
  records: [
    { title: "Estimated Korean adult participation", holder: "Go-Stop", value: "90%+ of Korean adults know how to play; most-played card game in Korea by wide margin", year: 2023 },
    { title: "Largest mobile Go-Stop DAU", holder: "Hangame Go-Stop + Netmarble Pmang", value: "Combined 10M+ daily active users at Korean market peak", year: 2015 },
    { title: "Chuseok/Seollal cultural centerpiece", holder: "Go-Stop", value: "Played by ~70% of Korean families during major holidays (Chuseok + Seollal Lunar New Year) since 1980s", year: 2024 },
  ],

  variants: ["3-player-go-stop-standard", "2-player-matgo-맞고-variant", "5-player-go-stop-expanded", "internet-go-stop-online-app-format", "gambling-go-stop-cash-stakes-in-family-context"],
  relatedSports: ["koi-koi", "hanafuda", "hwatu", "kabufuda", "japanese-mahjong"],

  skills: ["hwatu suit + Bright card memorization", "Go/Stop decision (expected value under uncertainty)", "opponent hand reading via discards", "penalty rule mastery (Mudda + Shaking + Bomb)", "family dynamic reading (social play skill)", "3-way play (Koi-Koi is only 2-player)"],
  strategies: [
    { title: "Prioritize Godori (5 animals)", body: "Godori is 5 pts + easy to build — capture the 5 special animal cards (Feb-Apr-Oct-Dec) whenever possible." },
    { title: "Bright card focus", body: "5 Brights = 15 pts (game-winning); 3 Brights = 3 pts minimum. Chase Bright cards when they appear on the table." },
    { title: "Go decision: risk vs. reward", body: "Go if you have clear path to more points AND opponents don't seem close to their own 7-point trigger. Otherwise Stop." },
    { title: "Ppuk defense", body: "Avoid discarding 2 same-suit cards on top of a 3rd of same suit on the table — triggers 'Ppuk' and pays penalty to opponents." },
    { title: "Shaking gamble", body: "Only declare Shaking with 3 cards from a suit you can realistically complete a yaku from; otherwise you commit to a double-loss risk." },
    { title: "Late-game aggression when trailing", body: "If you're behind cumulative score, aggressive Go declarations + Shaking are the only ways to catch up." },
  ],

  terminology: [
    { term: "Go / Stop (고 / 스톱)", meaning: "Continue round for more points (Go) or end + collect (Stop)." },
    { term: "Godori (고도리)", meaning: "5-animal yaku worth 5 pts + Korean pop cultural reference." },
    { term: "Shaking (흔들기)", meaning: "Declaring 3-of-a-suit in hand for double-score bonus." },
    { term: "Ppuk (뻑) / Mudda (뭐)", meaning: "Penalty triggers when 3+ same-suit cards stack on table; opponents pay when reactivated." },
    { term: "Sam-Kwang / Sa-Kwang / Oh-Kwang (3/4/5 Brights)", meaning: "Bright card yaku — Sam=3, Sa=4, Oh=5 (highest, 15 pts)." },
    { term: "Pi (피)", meaning: "Junk cards (double-junk cards = 2 pi each)." },
    { term: "Nagari (나가리)", meaning: "Round ends without a winner (rare)." },
    { term: "Matgo (맞고)", meaning: "2-player Go-Stop variant." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn hwatu suits + Bright cards", body: "Same 12-suit month structure as Japanese hanafuda but with Korean art + numbering conventions." },
      { title: "Play mobile Hangame or Pmang Go-Stop", body: "Both have free-to-play modes with AI + tutorial + rank matchmaking; best Korean-language learning platforms." },
      { title: "Play with Korean family during holidays", body: "Chuseok + Seollal are peak Go-Stop learning periods; family will teach with patience + real stakes (small money)." },
    ]},
    { level: "advanced", steps: [
      { title: "Reach 'King' rank on mobile Go-Stop platforms", body: "Hangame + Pmang have deep rank ladders; top ranks eligible for annual tournaments." },
      { title: "Compete in Hangame Go-Stop Championship", body: "Annual online + on-site tournaments crown 'King of Go-Stop' with cash prizes." },
      { title: "Local regional Korean Go-Stop tournaments", body: "Various senior centers + cultural organizations host regional championships." },
    ]},
  ],

  faq: [
    { question: "How is Go-Stop different from Japanese Koi-Koi?", answer: "Go-Stop is derived from Koi-Koi but heavily localized to Korea over 60+ years. Key differences: 3-player format (Koi-Koi is 2-player only), 7-point threshold triggers Go/Stop decision (vs. any yaku in Koi-Koi), unique Korean penalty rules (Mudda, Ppuk, Shaking, Bomb), different yaku values (Godori is Korean-specific), + 'Go' declaration multiplies round score exponentially (×2, ×4, ×8+). Culturally, Go-Stop is Korea's holiday game while Koi-Koi is Japan's family game." },
    { question: "Why is Go-Stop played during Korean holidays?", answer: "Chuseok (Korean Thanksgiving) + Seollal (Lunar New Year) bring extended families together for multiple days; Go-Stop has become the default multi-generational family activity during these gatherings, played for small stakes (often the money serves as pocket cash for younger family members). This cultural pattern is 40-50 years old and remains dominant." },
    { question: "Is Go-Stop online gambling?", answer: "In Korea, cash-play Go-Stop is technically restricted to specific parlors + family-context small stakes. Mobile Go-Stop apps (Hangame, Pmang) use in-app currency (not real money) to comply with strict Korean anti-gambling laws — though currency purchase + trading has been a legal gray area historically. Tournament play is prize-based, not gambling." },
  ],

  wikipediaTitle: "Go-Stop",
  sources: [
    { label: "Hangame Go-Stop", url: "https://www.hangame.com", publisher: "NHN Hangame" },
    { label: "Wikipedia — Go-Stop", url: "https://en.wikipedia.org/wiki/Go-Stop", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
