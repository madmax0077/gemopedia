import type { Sport } from "@/lib/types";

export const yutNori: Sport = {
  id: "yut-nori",
  slug: "yut-nori",
  name: "Yut Nori",
  officialName: "Yut Nori (윷놀이)",
  aliases: ["Yunnori", "Nyout", "Cheukguk", "Sagoh"],
  shortDescription:
    "Traditional Korean board game played especially during LUNAR NEW YEAR (Seollal). 4 wooden STICKS (yut) tossed as dice; landing curved/flat determines move (Do 1, Gae 2, Geol 3, Yut 4, Mo 5, Back-do reverse). Race 4 pieces around cross-shaped board. Origins Three Kingdoms period Korea. UNESCO recognized cultural heritage.",
  longDescription:
    "Yut Nori (윷놀이, 'yut play') is TRADITIONAL KOREAN BOARD GAME played especially during LUNAR NEW YEAR (SEOLLAL). Considered signature Korean traditional game — played by families every Lunar New Year. Origins in THREE KINGDOMS PERIOD KOREA (57 BCE-668 CE). UNESCO IMMATERIAL CULTURAL HERITAGE recognized. GAMEPLAY: 4 wooden STICKS (yut) tossed as dice; each stick has FLAT SIDE + CURVED SIDE. Combinations of flat/curved landings determine move: DO (1 flat, 3 curved = move 1), GAE (2 flat = move 2), GEOL (3 flat = move 3), YUT (4 flat = move 4 + BONUS ROLL), MO (0 flat all curved = move 5 + BONUS ROLL), BACK-DO (special pattern = move BACKWARD 1). Race 4 PIECES (called MAL, 'horses') around CROSS-SHAPED BOARD (29 or 20 spots depending version). LANDING ON OPPONENT'S PIECE = capture (piece sent to start; player rolls again). LANDING ON OWN PIECE = STACK (both move together = more efficient race). FIRST PLAYER to move all 4 pieces around wins. TEAM PLAY common (couples vs couples). LUNAR NEW YEAR TRADITION nationwide + globally in Korean diaspora. Modern variants use plastic sticks + smaller boards; traditional wood sticks 30cm. Considered UNIQUELY KOREAN cultural touchstone.",
  category: "traditional-cultural-sports",
  subCategory: "traditional Korean race board game with stick dice",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "Korea (Three Kingdoms period, 57 BCE-668 CE)",
  estimatedOrigin: "Ancient Korean origins; documented Three Kingdoms period; Lunar New Year tradition maintained continuously; UNESCO cultural heritage recognition",
  players: { min: 2, max: 4, note: "2-4 individual players OR 2 teams of 2 (couples common at Lunar New Year)." },
  field: { surfaceName: "cross-shaped board with 29 spots", dimensions: "board ~30-60cm; cross shape", description: "Traditional Korean cross-shaped board with 29 landing spots (some variants 20-spot 5×5 grid)." },
  equipment: [
    { name: "Yut sticks (4 wooden sticks, ~30cm)", description: "€10-30 traditional set; flat side + curved side" },
    { name: "Yut board (cross-shaped)", description: "€10-30; traditional wood or fabric" },
    { name: "Mal (pieces) — 4 per player", description: "Called 'horses'; different colors per player/team" },
  ],
  duration: { approximateMinutes: 30, structure: "Games 20-60 min; team variants longer with strategic play." },
  objective: "Move all 4 of your pieces (mal) around cross-shaped board back to start.",
  basicRules: [
    { title: "Toss 4 yut sticks; count flat vs curved landings", body: "Do (1 flat), Gae (2), Geol (3), Yut (4 + bonus roll), Mo (0 flat = all curved, 5 + bonus roll)." },
    { title: "BACK-DO: special pattern (varies by tradition) = move backward 1", body: "Some traditions mark 1 stick with symbol for back-do." },
    { title: "Yut + Mo grant BONUS ROLL", body: "Continue rolling until non-bonus result." },
    { title: "LAND ON OPPONENT PIECE = CAPTURE (opponent restart)", body: "Captured piece returns to start; capturer gets bonus roll." },
    { title: "LAND ON OWN PIECE = STACK (both move together)", body: "Efficient race strategy; single roll moves both pieces." },
    { title: "First to move all 4 pieces around board = WIN", body: "Team variants: first team wins." },
  ],
  scoring: {
    summary: "Race game — first to move all 4 pieces around board wins. No point scoring.",
    breakdown: [
      { action: "Complete lap with 1 piece", points: "1 piece home" },
      { action: "All 4 pieces home", points: "Win" },
      { action: "Capture opponent piece", points: "Setback + bonus roll" },
    ],
    winCondition: "First player (or team) to bring all 4 pieces home.",
  },
  governingBodies: [
    { name: "Korean Traditional Games Federation", founded: 2000, headquarters: "Korea" },
    { name: "UNESCO recognition (Immaterial Cultural Heritage)", founded: 2015, headquarters: "worldwide" },
  ],
  majorCompetitions: [
    { name: "Community + family Lunar New Year (Seollal) tradition", frequency: "annual", founded: 100, region: "Korea + diaspora" },
    { name: "Korean traditional games festivals", frequency: "annual", founded: 1990, region: "Korea" },
  ],
  countriesPlayed: ["KR", "KP", "US (diaspora)", "JP", "CN (Korean minority)"],
  famousAthletes: ["Traditional community game; no famous players"],
  variants: [
    "yut-nori-standard-29-spot-cross-board",
    "yut-nori-20-spot-5x5-grid-variant",
    "team-yut-nori-couples-variant",
    "modern-yut-nori-plastic-sticks",
    "traditional-wooden-yut-30cm-sticks",
    "kids-yut-nori-simplified-rules",
  ],
  relatedSports: ["ludo", "pachisi", "snakes-and-ladders", "backgammon"],
  skills: ["basic dice strategy (yut stick reading)", "stacking optimization", "team coordination (team variant)"],
  strategies: [
    { title: "Stack pieces for efficient racing", body: "2+ pieces on same spot move together." },
    { title: "Bonus rolls (Yut/Mo) worth calculating risk", body: "Sometimes better to accept smaller move than push for bonus." },
    { title: "Capture opponents strategically", body: "Setback + bonus roll doubles advantage." },
    { title: "Corner shortcut", body: "Some paths cross board center for faster route." },
  ],
  terminology: [
    { term: "Yut (윷)", meaning: "The 4 sticks used as dice." },
    { term: "Mal (말)", meaning: "Playing piece ('horse')." },
    { term: "Do (도) / Gae (개) / Geol (걸) / Yut (윷) / Mo (모)", meaning: "Roll results: 1/2/3/4/5 spaces." },
    { term: "Back-do (뒷도)", meaning: "Special roll moving backward 1." },
    { term: "Seollal (설날)", meaning: "Korean Lunar New Year — traditional yut nori time." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy yut nori set ($15-30 online, Asian stores)", body: "Sticks + board + pieces." },
      { title: "Learn 5 stick combinations (Do, Gae, Geol, Yut, Mo, Back-do)", body: "Rule fundamental." },
      { title: "Play with family during Lunar New Year", body: "Traditional Korean context." },
    ]},
    { level: "intermediate", steps: [
      { title: "Master stacking + capture strategies", body: "Race strategy depth." },
    ]},
  ],
  faq: [
    { question: "What is Yut Nori?", answer: "TRADITIONAL KOREAN BOARD GAME played especially during LUNAR NEW YEAR (Seollal). Origins in Three Kingdoms period Korea (57 BCE-668 CE). 4 wooden STICKS (yut) tossed as dice; combinations of flat/curved landings determine move (Do 1, Gae 2, Geol 3, Yut 4+bonus, Mo 5+bonus, Back-do reverse). Race 4 PIECES (mal, 'horses') around cross-shaped board. Landing on opponent = capture; on own = stack. First to move all 4 pieces around board wins. UNESCO Immaterial Cultural Heritage. Beloved family + community game." },
    { question: "Why is Yut Nori played at Korean New Year?", answer: "LUNAR NEW YEAR (SEOLLAL) is Korea's most important family holiday. YUT NORI is TRADITIONAL FAMILY BONDING activity — accessible to all ages, groups of 4-8, requires no special skill, encourages laughter + competitive fun. Games considered SYMBOLIC of new year prosperity + family unity. Modern Koreans continue tradition even as families gather online. Many families own multiple yut nori sets specifically for New Year use. UNESCO recognized as cultural heritage." },
    { question: "How is Yut Nori different from Ludo or Pachisi?", answer: "SIMILAR RACE GAME MECHANICS. YUT NORI uses UNIQUE 4-STICK DICE (yut sticks) with 6 possible results; LUDO + PACHISI use standard dice (6 sides). YUT NORI board is CROSS-SHAPED (29 or 20 spots); LUDO + PACHISI are square with corner tracks. YUT NORI has STACKING mechanic (2+ pieces move together); Ludo doesn't. YUT NORI more STRATEGIC due to stacking + varied stick results. All three ancient race games with parallel evolution. Ludo (British colonial derivative from Pachisi); Pachisi (India ancient); Yut Nori (Korea ancient) — likely INDEPENDENT ORIGINS." },
  ],
  wikipediaTitle: "Yut",
  sources: [
    { label: "Wikipedia — Yut", url: "https://en.wikipedia.org/wiki/Yut", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
