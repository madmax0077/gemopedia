import type { Sport } from "@/lib/types";

export const roulette: Sport = {
  id: "roulette",
  slug: "roulette",
  name: "Roulette",
  officialName: "Roulette",
  aliases: ["Little Wheel", "European Roulette", "American Roulette"],
  shortDescription:
    "Casino wheel game in which players bet on where a small ball will land among numbered pockets (0 or 00-36) spinning inside a wheel.",
  longDescription:
    "Roulette is a casino game named after the French word meaning 'little wheel'. It was invented in 18th-century France, likely by Blaise Pascal in his search for a perpetual-motion machine. A dealer (croupier) spins a wheel in one direction and rolls a small ball in the opposite direction; the ball loses momentum, falls through the ball track, and settles in one of the numbered pockets. European roulette has 37 pockets (0-36); American roulette has 38 (adds 00); French roulette shares the European layout but adds La Partage and En Prison rules. Players bet on a specific number, colour (red/black), parity (odd/even), high/low (1-18 or 19-36), dozens, columns, or combinations. Roulette embodies pure chance — with a house edge of 2.70% (European) to 5.26% (American, standard) to 7.89% (American five-number bet).",

  category: "casino-games",
  subCategory: "wheel / casino",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "France (later refined in Bad Homburg and Monte Carlo)",
  estimatedOrigin: "1655 (attributed to Pascal); 1796 first documented as a casino game in Paris; 1843 Louis and François Blanc add the single-zero wheel at Bad Homburg",

  players: { min: 1, max: 8, note: "Typically 6-8 players per table; individual play against the house." },
  field: {
    surfaceName: "roulette table",
    dimensions: "3.0 m × 1.5 m (10 ft × 5 ft) betting layout + spinning wheel 0.8 m diameter",
    description: "Betting layout with numbered grid (1-36), 0 (and 00 for American), outside bets (red/black, odd/even, dozens, columns). Wheel has 37 or 38 alternating red/black numbered pockets; 0 and 00 are green.",
  },
  equipment: [
    { name: "Roulette wheel", description: "37 (European) or 38 (American) pockets; spun by croupier." },
    { name: "Ivorine ball", description: "Small ball made of resin or Teflon (formerly ivory); dropped opposite the wheel's rotation." },
    { name: "Betting layout felt", description: "Marked grid where players place chips on numbers, groups, or outside bets." },
    { name: "Coloured chips", description: "Each player receives uniquely-coloured chips at the table to avoid confusion." },
    { name: "Marker (dolly)", description: "Placed on the winning number after each spin." },
  ],
  duration: {
    approximateMinutes: 2,
    structure: "Each spin cycle: bet placement (~90 sec), spin (~30 sec), payout (~30 sec) = ~2-3 min per round.",
    note: "Sessions typically last 1-3 hours in casinos; online spins are 15-30 sec.",
  },
  objective: "Correctly predict where the ball will land — either as a specific number ('straight up') or as part of a group (colour, dozen, column, high/low, odd/even).",
  matchStructure:
    "Players place chips on the layout before the croupier calls 'No more bets.' The wheel is spun and the ball is dropped in the opposite direction. When the ball settles, the croupier places a marker (dolly) on the winning number, clears losing bets, and pays winners. New betting begins.",

  basicRules: [
    { title: "Bet placement", body: "Place chips on the layout before 'no more bets' is called." },
    { title: "Inside bets", body: "Bets on specific numbers or small groups: straight-up, split, street, corner, six-line, top line (0-00-1-2-3)." },
    { title: "Outside bets", body: "Bets on large groups: red/black, odd/even, high (19-36) / low (1-18), dozens (1-12, 13-24, 25-36), columns." },
    { title: "Green 0/00 = house wins outside", body: "Outside bets lose when the ball lands on 0 (or 00 in American) — this is the source of the house edge." },
    { title: "Table limits", body: "Each table has a minimum and maximum for inside and outside bets." },
  ],
  advancedRules: [
    { title: "La Partage (French)", body: "If the ball lands on 0, half of even-money outside bets (red/black, odd/even, high/low) are returned. Lowers house edge on those bets to 1.35%." },
    { title: "En Prison (French)", body: "Alternative to La Partage: bet is 'imprisoned' and stays on the layout for the next spin; wins if the next spin matches." },
    { title: "Call bets (announced bets)", body: "European roulette allows section-of-wheel bets: Voisins du Zéro (17 numbers around 0), Tiers du Cylindre (12 opposite), Orphelins (8 remaining), Neighbours of a Number." },
    { title: "Surrender (US variant)", body: "Similar to La Partage — half returned on 0/00 for even-money bets. Available in some Atlantic City casinos." },
    { title: "Rules of biased wheels (historical)", body: "In the 1800s-1900s some wheels had mechanical bias; players like Joseph Jagger and the Pelayo family exploited this. Modern wheels are precisely balanced." },
  ],
  scoring: {
    summary: "Each bet has a fixed payout based on its probability; house edge is built into the payout being slightly less than true odds.",
    breakdown: [
      { action: "Straight-up (single number)", points: "35:1 (true 36:1 European; 37:1 American)" },
      { action: "Split (2 numbers)", points: "17:1" },
      { action: "Street (3 numbers)", points: "11:1" },
      { action: "Corner (4 numbers)", points: "8:1" },
      { action: "Six-line (6 numbers)", points: "5:1" },
      { action: "Dozen or Column (12 numbers)", points: "2:1" },
      { action: "Red/Black, Odd/Even, High/Low", points: "1:1", note: "European house edge 2.70%; American 5.26%." },
      { action: "Top line 0-00-1-2-3 (American only)", points: "6:1 — worst bet, 7.89% house edge" },
    ],
    winCondition: "Bankroll wins; no session 'endgame'.",
  },

  officiating: {
    officials: ["Croupier / Dealer", "Pit Boss", "Chef de Partie (French tables)"],
    summary: "Croupier operates the wheel and manages payouts; a pit boss supervises the table and resolves disputes.",
  },
  governingBodies: [
    { name: "Nevada Gaming Control Board", founded: 1955, headquarters: "Carson City, USA", website: "https://gaming.nv.gov/" },
    { name: "UK Gambling Commission", founded: 2005, headquarters: "Birmingham, UK", website: "https://www.gamblingcommission.gov.uk/" },
    { name: "French Comité Consultatif des Jeux", founded: 2011, headquarters: "Paris, France" },
  ],
  majorCompetitions: [
    { name: "Roulette Grand Prix (Monte Carlo, invitational)", frequency: "annual", region: "Monaco" },
  ],
  countriesPlayed: ["FR", "MC", "GB", "US", "DE", "MO", "SG", "AU", "IT", "ES", "AT", "CZ"],
  famousAthletes: [
    "Joseph Jagger — 'The man who broke the bank at Monte Carlo' (1873), exploited biased wheel",
    "The Pelayo family — Spanish family famous for biased-wheel exploitation, 1990s",
    "Ashley Revell — sold all possessions and bet £76,840 on red at Plaza Las Vegas in 2004; won",
  ],
  records: [
    { title: "Longest winning streak on a single number (documented)", holder: "Charles Wells (Monte Carlo)", value: "23 rounds unbroken (1891)", year: 1891 },
    { title: "Biggest single-spin win (documented)", holder: "Ashley Revell", value: "£153,680 (double or nothing on red, 2004)", year: 2004 },
    { title: "Historic biased-wheel exploit", holder: "Joseph Jagger", value: "£65,000 (~£7M today) at Monte Carlo, 1873", year: 1873 },
  ],

  variants: ["european-roulette", "american-roulette", "french-roulette", "mini-roulette", "multi-wheel-roulette", "double-ball-roulette", "lightning-roulette"],
  relatedSports: ["wheel-of-fortune", "boule", "big-six-wheel"],

  skills: [
    "bankroll discipline",
    "understanding house edge",
    "bet-selection knowledge",
    "recognising negative-expectation systems (Martingale, D'Alembert)",
  ],
  strategies: [
    { title: "Single-zero over double-zero", body: "Always play European (single-zero) roulette over American — halves the house edge from 5.26% to 2.70%." },
    { title: "La Partage tables", body: "Play French roulette with La Partage on even-money bets — house edge drops to 1.35%, the best in the casino for roulette." },
    { title: "Avoid the top line", body: "American 0-00-1-2-3 top-line bet has a house edge of 7.89% — the worst on the table." },
    { title: "Progression systems are traps", body: "Martingale (double after loss), D'Alembert, and Fibonacci all fail against table limits and long losing streaks. They don't change house edge." },
  ],

  terminology: [
    { term: "Croupier", meaning: "The dealer who spins the wheel and manages bets." },
    { term: "Straight-up", meaning: "A bet on a single specific number, paying 35:1." },
    { term: "Split", meaning: "A bet on two adjacent numbers, paying 17:1." },
    { term: "Corner (Square)", meaning: "A bet on four numbers meeting at a corner, paying 8:1." },
    { term: "Dozen", meaning: "A bet on 12 numbers (1-12, 13-24, or 25-36), paying 2:1." },
    { term: "Column", meaning: "A bet on 12 numbers in one of three vertical columns, paying 2:1." },
    { term: "Outside bet", meaning: "Bets on large groups (red/black, odd/even, high/low, dozens, columns)." },
    { term: "Inside bet", meaning: "Bets on specific numbers or small combinations." },
    { term: "En Prison", meaning: "French rule: bet is 'imprisoned' on a 0 spin, plays on the next spin." },
    { term: "La Partage", meaning: "French rule: half of even-money bets are returned on a 0 spin." },
    { term: "Voisins du Zéro", meaning: "'Neighbours of zero' — a call bet on 17 numbers around 0." },
    { term: "The wheel", meaning: "Bowl containing 37 (European) or 38 (American) numbered pockets." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Choose European roulette", body: "Play the single-zero (European) variant whenever possible — it has half the house edge of American." },
      { title: "Start with outside bets", body: "Red/black, odd/even, high/low pay 1:1 and are easiest to understand." },
      { title: "Learn the layout", body: "Familiarise yourself with the betting grid and the difference between inside and outside bets." },
      { title: "Buy in with coloured chips", body: "At a live table you receive uniquely-coloured chips — they're only valid at that table." },
    ] },
    { level: "intermediate", steps: [
      { title: "Combining bets", body: "Learn to combine inside and outside bets to cover more numbers per spin (with lower payouts)." },
      { title: "French rules", body: "Seek out tables with La Partage or En Prison — the best odds in the casino for roulette." },
      { title: "Bankroll rules", body: "Set win/loss limits per session; take breaks; avoid chasing losses." },
      { title: "Avoid betting systems", body: "Understand why Martingale-style systems fail — they don't beat the house edge." },
    ] },
    { level: "advanced", steps: [
      { title: "Call bets (European)", body: "Learn Voisins du Zéro, Tiers du Cylindre, Orphelins, and Neighbours bets." },
      { title: "Wheel section observation (historical)", body: "In the 1800s players exploited biased wheels; modern wheels are almost perfectly balanced but casinos still monitor for advantage play." },
      { title: "Live vs online RNG", body: "Live tables are true-random physical draws; online games use certified RNGs. Understand the difference." },
    ] },
  ],
  faq: [
    { question: "What's the difference between European and American roulette?", answer: "European has 37 pockets (0-36) with a 2.70% house edge. American has 38 pockets (0, 00, 1-36) with a 5.26% house edge — nearly double." },
    { question: "Can you beat roulette with a system?", answer: "No. Progression systems like Martingale eventually hit table limits and long losing streaks. The house edge is mathematically unbeatable in the long run on a fair wheel." },
    { question: "What is 'La Partage'?", answer: "A French rule: when the ball lands on 0, half of even-money outside bets are returned. This lowers the house edge on those bets to 1.35%." },
    { question: "Are red and black spins independent?", answer: "Yes — each spin is completely independent. Previous results don't influence future spins (this is the 'gambler's fallacy')." },
    { question: "Is online roulette rigged?", answer: "Licensed online casinos use certified random number generators audited by third parties (eCOGRA, iTech Labs). Illegal sites may cheat — always play only at licensed operators." },
  ],

  wikipediaTitle: "Roulette",
  sources: [
    { label: "Wikipedia — Roulette", url: "https://en.wikipedia.org/wiki/Roulette", publisher: "Wikipedia" },
    { label: "Wizard of Odds — Roulette", url: "https://wizardofodds.com/games/roulette/", publisher: "Wizard of Odds" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
