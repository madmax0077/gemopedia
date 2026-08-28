import type { Sport } from "@/lib/types";

export const zombieDice: Sport = {
  id: "zombie-dice",
  slug: "zombie-dice",
  name: "Zombie Dice",
  officialName: "Zombie Dice",
  aliases: ["Zombie Dice game"],
  shortDescription:
    "PRESS-YOUR-LUCK DICE FILLER GAME (2010) by STEVE JACKSON, published by STEVE JACKSON GAMES. 2+ players (best at 3-6) take turns as ZOMBIES eating BRAINS + trying not to get SHOTGUNNED. Roll 3 of 13 dice from a bag; each die has 3 symbols: BRAIN (score, keep), SHOTGUN (bad, keep), FOOTPRINTS (runner, re-roll). Push your luck to accumulate brains but 3 shotguns busts your turn (lose all). First to 13 brains wins. 15-min filler. Ranked BGG Top 500 (family/party); 500,000+ sold. Simple, fast, hilarious.",
  longDescription:
    "ZOMBIE DICE is a PRESS-YOUR-LUCK DICE FILLER GAME (2010) designed by STEVE JACKSON, published by STEVE JACKSON GAMES (SJGames, Texas — publisher of GURPS, MUNCHKIN, ILLUMINATI). Widely praised as a PERFECT GATEWAY + FILLER game — simple to learn (2 minutes), fast to play (15 min), + genuinely engaging. Has sold OVER 500,000 UNITS + spawned multiple sequels + expansions. GAMEPLAY: 2+ players (best at 3-6). Each player is a ZOMBIE trying to eat 13 BRAINS. The game uses 13 CUSTOM DICE in a CARDBOARD CUP: 6 GREEN dice (easiest — mostly brains), 4 YELLOW dice (medium mix), 3 RED dice (hardest — mostly shotguns). Each die has 6 sides showing 3 SYMBOLS distributed differently: BRAIN (score 1 brain if kept), SHOTGUN (bad, damages zombie), FOOTPRINTS (runner escaped, re-roll die). TURN: (1) Shake the cup + draw 3 DICE at random. (2) ROLL those 3 dice. (3) Resolve results — set aside all BRAINS + SHOTGUNS (keep them); FOOTPRINTS dice are re-rolled next roll. (4) DECISION POINT: STOP + BANK your brains (score them + end turn) OR CONTINUE — draw more dice from the cup to bring your total roll to 3 (adding new dice to your footprints) + roll again. IF you accumulate 3 SHOTGUNS at any point during your turn, your zombie DIES + you lose ALL BRAINS scored this turn (0 for the turn). GAME END: First player to reach 13 BRAINS (or agreed target) triggers the FINAL ROUND — remaining players take one more turn to try to beat that score. Highest brains wins ties. GAME LENGTH: 15 MIN typical (4-6 rounds). VARIANTS + EXPANSIONS: ZOMBIE DICE 2: DOUBLE FEATURE (2012 — adds hero dice, energy drink, etc.); ZOMBIE DICE 3: SCHOOL BUS (2014 — adds school bus card + additional dice); ZOMBIE DICE HORDE MODE (2019 — team play). DESIGN: STEVE JACKSON has cited MARTIAN DICE (2011, his other press-your-luck) + PICKOMINO / HECK MECK (2005) as inspirations for the mechanic. STEVE JACKSON GAMES also uses zombie theme in ZOMBIE DICE consistently. RECEPTION: Universally acclaimed as a PERFECT LIGHT DICE FILLER; ranked BGG top-500 family/party consistently; still sold in stores 14+ years later. Great for BEER-AND-PRETZELS gaming, kids 8+, + as a warmup before longer games. STRATEGY: Track dice remaining in cup — early red dice = risky; accumulated footprints = more chances. Push luck when trailing; play conservatively when leading.",
  category: "dice-games",
  subCategory: "press-your-luck / filler / dice / party dice",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (Steve Jackson Games, Austin, Texas)",
  estimatedOrigin: "2010 (Steve Jackson Games)",
  players: { min: 2, max: 8, note: "2-8 players; best at 3-6 for pacing." },
  field: {
    surfaceName: "Table + dice cup",
    dimensions: "Small footprint (fits on any table)",
    description: "Cardboard cup + 13 dice + score sheet; portable filler game.",
  },
  equipment: [
    { name: "Zombie Dice base box ($15)", description: "13 dice + cup + rules" },
    { name: "13 custom dice (6 green + 4 yellow + 3 red)", description: "Different brain/shotgun ratios" },
    { name: "Cardboard cup", description: "For drawing dice randomly" },
    { name: "Score pad + pencil", description: "Track brains per player" },
    { name: "Expansions: Double Feature, School Bus, Horde Mode", description: "Alternate + additional variants" },
  ],
  duration: { approximateMinutes: 15, structure: "15 min typical for full game to 13 brains" },
  objective: "Be first to eat 13 BRAINS while avoiding 3 SHOTGUNS per turn.",
  basicRules: [
    { title: "Draw 3 dice from cup; roll them", body: "Standard start." },
    { title: "Keep brains + shotguns; re-roll footprints", body: "Symbol resolution." },
    { title: "Decide: bank brains + end turn OR push luck", body: "Press-your-luck core." },
    { title: "3 shotguns in one turn = zombie dies + lose all turn's brains", body: "Bust rule." },
    { title: "First to 13 brains triggers final round", body: "Endgame trigger." },
    { title: "Highest brains total wins", body: "Simple scoring." },
  ],
  scoring: {
    summary: "Brains kept + banked = score; 3 shotguns = bust (0 for turn).",
    breakdown: [
      { action: "Brain rolled + banked", points: "1 brain each" },
      { action: "3 shotguns accumulated in turn", points: "BUST — 0 brains scored this turn" },
      { action: "Reach 13 brains first", points: "Triggers final round" },
    ],
    winCondition: "Most brains at end of final round.",
  },
  governingBodies: [
    { name: "Steve Jackson Games (publisher)", founded: 1980, headquarters: "Austin, Texas, USA" },
    { name: "BoardGameGeek community", founded: 2000, headquarters: "Online" },
  ],
  majorCompetitions: [
    { name: "Casual party/family game play (widespread)", frequency: "ongoing", founded: 2010, region: "Global" },
    { name: "Convention demos (Origins, Gen Con, PAX)", frequency: "annual", founded: 2010, region: "USA" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "IT", "ES", "CA", "AU", "BR", "MX", "JP"],
  famousAthletes: [
    "Steve Jackson (designer + SJGames founder)",
    "Steve Jackson Games team (Austin, TX)",
  ],
  variants: [
    "zombie-dice-base-2010",
    "zombie-dice-2-double-feature-2012",
    "zombie-dice-3-school-bus-2014",
    "zombie-dice-horde-mode-2019-team-play",
    "martian-dice-2011-sjgames-companion",
  ],
  relatedSports: ["yahtzee", "farkle", "pig-game", "liars-dice", "pickomino"],
  skills: ["press-your-luck decision-making", "probability estimation", "dice composition awareness", "risk tolerance"],
  strategies: [
    { title: "Track red dice remaining in cup", body: "Fewer reds = safer to push." },
    { title: "Push aggressively when trailing", body: "Catch-up requires risk." },
    { title: "Bank early when leading late in game", body: "Preserve win." },
    { title: "Watch shotgun count — 2 shotguns = often stop", body: "One more roll high-risk." },
  ],
  terminology: [
    { term: "Brain", meaning: "Positive symbol; 1 point each." },
    { term: "Shotgun", meaning: "Bad symbol; 3 in a turn = bust." },
    { term: "Footprints", meaning: "Neutral symbol; die re-rolls next round." },
    { term: "Bust", meaning: "3 shotguns in a turn = 0 brains this turn + turn ends." },
    { term: "Bank", meaning: "Voluntarily end turn + keep accumulated brains." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play a full game — rules learn in 1 turn", body: "Fastest gateway game ever." },
    ]},
  ],
  faq: [
    { question: "What is Zombie Dice?", answer: "PRESS-YOUR-LUCK DICE FILLER GAME (2010) by STEVE JACKSON, published by STEVE JACKSON GAMES. 2+ players (best at 3-6) take turns as ZOMBIES eating BRAINS + trying not to get SHOTGUNNED. Roll 3 of 13 dice from a bag; each die has 3 symbols: BRAIN (score, keep), SHOTGUN (bad, keep), FOOTPRINTS (runner, re-roll). Push your luck to accumulate brains but 3 shotguns busts your turn (lose all). First to 13 brains wins. 15-min filler. Ranked BGG Top 500 (family/party); 500,000+ sold. Simple, fast, hilarious." },
    { question: "Zombie Dice vs Farkle vs Yahtzee — which press-your-luck dice game is best?", answer: "All 3 are press-your-luck dice classics. YAHTZEE (1956): Score-category focused; 13 rounds; deeper strategy in scoring; ~30 min; ancient classic. FARKLE (folk game 1980s+): Simple 6-dice press-your-luck; roll + score combinations; 15-20 min; free/casual. ZOMBIE DICE (2010): SIMPLEST + FASTEST; 3-symbol dice; theme-driven; 15 min; great gateway. Yahtzee has DEEPEST strategy; Farkle is FREE + fast; Zombie Dice is PORTABLE + hilarious. Kids/family → Yahtzee; casual → Farkle; parties + fillers → Zombie Dice. Different flavors of press-your-luck; all excellent." },
  ],
  wikipediaTitle: "Zombie Dice",
  sources: [
    { label: "Steve Jackson Games — Zombie Dice", url: "https://zombiedice.sjgames.com/", publisher: "SJGames" },
    { label: "BoardGameGeek — Zombie Dice", url: "https://boardgamegeek.com/boardgame/62871/zombie-dice", publisher: "BGG" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
