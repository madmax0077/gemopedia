import type { Sport } from "@/lib/types";

export const bao: Sport = {
  id: "bao",
  slug: "bao",
  name: "Bao",
  officialName: "Bao la Kiswahili",
  aliases: ["Bao la Kujifunza", "Bawo", "Bao (East African Mancala)"],
  shortDescription:
    "Complex East African mancala-family game. National game of ZANZIBAR + TANZANIA. Uses 4 rows × 8 pits (32 pits total) + 64 seeds. Considered ONE OF DEEPEST MANCALA GAMES — vastly more complex than Oware. Two forms: BAO LA KISWAHILI (competitive, deep strategy) + BAO LA KUJIFUNZA ('learning bao', simplified). Long tradition Swahili coast + Great Lakes.",
  longDescription:
    "Bao (BAO LA KISWAHILI, 'Swahili Bao') is COMPLEX EAST AFRICAN MANCALA-family game. NATIONAL GAME of ZANZIBAR + widely played across TANZANIA, KENYA, MALAWI, UGANDA, RWANDA, BURUNDI, DEMOCRATIC REPUBLIC OF CONGO. Also called BAWO. Considered ONE OF DEEPEST MANCALA GAMES — vastly more complex than Oware or Kalah due to LARGER BOARD, DEEPER RULES, MULTI-DIRECTIONAL SOWING. Long tradition SWAHILI COAST + GREAT LAKES region. Origins UNKNOWN — likely ancient; possibly 1000+ years. TWO FORMS: (1) BAO LA KISWAHILI = full competitive form, extremely deep. (2) BAO LA KUJIFUNZA = 'learning bao', simplified for beginners + children. BOARD: 4 ROWS × 8 PITS = 32 PITS TOTAL; each player controls 2 rows (front + back). 64 SEEDS TOTAL. Complex gameplay involving: NAMUA phase (introducing seeds one at a time from hand into own store pits), MTAJI phase (moving seeds around board with sowing + captures). SPECIAL SQUARE 'NYUMBA' or 'KUU' (house) has special rules — can only be broken with 6+ seeds. WORLD BAO CHAMPIONSHIP held in ZANZIBAR. TANZANIA + ZANZIBAR have professional players. Considered CULTURAL TREASURE + INTELLECTUAL GAME. Featured in Swahili literature + oral tradition. Reputation: 'MORE DIFFICULT THAN CHESS' among devotees due to hidden information + multiple capture rules.",
  category: "board-games",
  subCategory: "traditional East African complex mancala",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "TZ",
  regionOfOrigin: "Swahili coast (Tanzania/Zanzibar); Great Lakes East Africa",
  estimatedOrigin: "Origins unknown — likely 1000+ years old; documented Swahili literature centuries",
  players: { min: 2, max: 2, note: "Strictly 2 players." },
  field: { surfaceName: "Bao board (4 rows × 8 pits)", dimensions: "board ~60cm × 30cm", description: "Elaborately carved wooden board with 32 pits in 4 rows; each player controls 2 rows (front + back)." },
  equipment: [
    { name: "Bao board (traditional carved wooden)", description: "€50-500 elaborate hand-carved; €20-50 plain" },
    { name: "64 seeds (traditionally shells or nuts)", description: "€10-20" },
  ],
  duration: { approximateMinutes: 45, structure: "Serious games 30-90 min; deep strategic thinking." },
  objective: "Capture opponent's seeds until they cannot make legal move OR leave opponent with no seeds in front row.",
  basicRules: [
    { title: "Setup: 64 seeds initially in players' HANDS (nyumba/kuu pit has 6-8)", body: "Namua phase — introduce seeds one at a time." },
    { title: "Namua phase: introduce ONE seed per turn to own front row + sow", body: "Complex capture rules based on where seed lands." },
    { title: "Mtaji phase: after all seeds introduced, move seeds around board sowing", body: "Multi-directional; captures when landing in occupied opponent pit with matching in front row." },
    { title: "NYUMBA/KUU (house pit) has special rules — can only 'break' with 6+ seeds", body: "Preserving nyumba often key strategy." },
    { title: "Win by leaving opponent unable to make legal move OR no seeds in front row", body: "Elimination-style victory." },
  ],
  scoring: {
    summary: "No incremental scoring — pure elimination. Winner reduces opponent to zero-legal-moves state.",
    breakdown: [
      { action: "Capture opponent's seeds", points: "Add to own store" },
      { action: "Opponent cannot make legal move", points: "Immediate win" },
      { action: "Opponent has no seeds in front row", points: "Immediate win" },
    ],
    winCondition: "Opponent has no legal move OR no seeds in front row.",
  },
  governingBodies: [
    { name: "Chama cha Bao Tanzania (Bao Association Tanzania)", founded: 1970, headquarters: "Dar es Salaam, Tanzania" },
    { name: "World Bao Championships (Zanzibar-based)", founded: 1990, headquarters: "Zanzibar" },
  ],
  majorCompetitions: [
    { name: "World Bao Championship (Zanzibar)", frequency: "annual", founded: 1990, region: "worldwide (Swahili + international mancala circuit)" },
    { name: "Tanzania National Bao Championship", frequency: "annual", founded: 1970, region: "Tanzania" },
  ],
  countriesPlayed: ["TZ", "KE", "UG", "MW", "RW", "BI", "CD"],
  famousAthletes: [
    "Various Zanzibari + Tanzanian bao masters",
  ],
  variants: [
    "bao-la-kiswahili-competitive-full-rules",
    "bao-la-kujifunza-learning-bao-simplified",
    "bawo-Malawian-variant",
    "hus-Southern-African-variant",
  ],
  relatedSports: ["oware", "mancala", "kalah", "sungka", "gebeta"],
  skills: ["deep positional strategy", "multi-move planning", "seed counting", "endgame recognition"],
  strategies: [
    { title: "Protect NYUMBA (house pit)", body: "Key defensive structure; break carefully." },
    { title: "Namua phase seed introduction critical", body: "Poor placement in namua = losing structure for mtaji." },
    { title: "Capture chains", body: "Multi-pit chain captures very powerful in mtaji phase." },
    { title: "Force opponent into no-legal-move positions", body: "Elimination victory via positional strangulation." },
  ],
  terminology: [
    { term: "Bao (باؤ)", meaning: "'Board' in Swahili; game name." },
    { term: "Nyumba / Kuu", meaning: "'House' — special pit with unique rules." },
    { term: "Namua", meaning: "Opening phase — introducing seeds from hand." },
    { term: "Mtaji", meaning: "Main phase — moving seeds around board." },
    { term: "Kutakata", meaning: "Capture move." },
    { term: "Mbao / Kete", meaning: "Seeds (typically nuts or shells)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start with BAO LA KUJIFUNZA (learning bao)", body: "Simplified form; standard bao overwhelming for beginners." },
      { title: "Learn Swahili terminology", body: "Traditional context helps deep understanding." },
      { title: "Practice sowing + basic capture", body: "Foundation for full bao." },
    ]},
    { level: "intermediate", steps: [
      { title: "Transition to BAO LA KISWAHILI", body: "Full complex rules." },
      { title: "Study nyumba management + namua theory", body: "Key strategic areas." },
    ]},
    { level: "advanced", steps: [
      { title: "Travel to Zanzibar for World Championship", body: "Ultimate bao pilgrimage." },
      { title: "Study elite Tanzanian masters' games", body: "Deep endgame theory." },
    ]},
  ],
  faq: [
    { question: "What is Bao?", answer: "COMPLEX EAST AFRICAN MANCALA-family game. NATIONAL GAME of ZANZIBAR + TANZANIA. Uses 4 rows × 8 pits (32 pits total) + 64 seeds. Considered ONE OF DEEPEST MANCALA GAMES — vastly more complex than Oware. TWO FORMS: BAO LA KISWAHILI (full competitive) + BAO LA KUJIFUNZA (simplified 'learning'). Complex rules: NAMUA phase (introducing seeds one at a time), MTAJI phase (moving + capturing), special NYUMBA (house pit) rules. Win by leaving opponent unable to move. World Championship in Zanzibar. Considered more difficult than chess among devotees." },
    { question: "How is Bao different from Oware?", answer: "BOTH ARE MANCALA family. OWARE (West Africa, Ghana) uses 2 rows × 6 pits + 48 seeds; simpler rules; SOLVED MATHEMATICALLY 2002. BAO (East Africa, Tanzania) uses 4 rows × 8 pits + 64 seeds; VASTLY MORE COMPLEX rules with multi-directional sowing, nyumba pit, 2-phase gameplay (namua + mtaji). Bao considered much deeper strategically — NOT solved (too complex). Oware games ~20 min; Bao games 30-90 min. Both cultural treasures; different regional traditions." },
    { question: "Where is Bao played?", answer: "Primarily EAST AFRICA — TANZANIA (mainland + Zanzibar), KENYA, UGANDA, MALAWI, RWANDA, BURUNDI, DEMOCRATIC REPUBLIC OF CONGO. ZANZIBAR is spiritual home; hosts WORLD BAO CHAMPIONSHIP. Swahili coast + Great Lakes region cultural staple. Small but growing INTERNATIONAL mancala community adopting bao. Not popular outside East Africa + specialist mancala circles. Considered CULTURAL TREASURE + INTELLECTUAL GAME requiring years to master." },
  ],
  wikipediaTitle: "Bao (game)",
  sources: [
    { label: "Wikipedia — Bao (game)", url: "https://en.wikipedia.org/wiki/Bao_(game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
