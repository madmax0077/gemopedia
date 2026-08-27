import type { Sport } from "@/lib/types";

export const sushiGo: Sport = {
  id: "sushi-go",
  slug: "sushi-go",
  name: "Sushi Go!",
  officialName: "Sushi Go! / Sushi Go Party!",
  aliases: ["Sushi Go!", "Sushi Go Party!"],
  shortDescription:
    "DELIGHTFUL PICK-AND-PASS CARD GAME by PHIL WALKER-HARDING + GAMEWRIGHT (2013). 2-5 players draft cards from constantly-rotating hands (Nigiri, Sashimi, Tempura, Dumpling, Maki Rolls, Wasabi, Pudding); score points via set-collection over 3 rounds. SIMPLE + PORTABLE + CUTE illustrations. 15-min games. Deluxe SUSHI GO PARTY! (2016) adds 4-8 players + more variety cards. Bestseller — 3M+ copies. Family gateway drafting game + genre-defining light drafter.",
  longDescription:
    "SUSHI GO! is a DELIGHTFUL PICK-AND-PASS CARD DRAFTING GAME designed by PHIL WALKER-HARDING (also Bärenpark, Cacao, Silver & Gold, Gizmos) + published by GAMEWRIGHT (2013). 2-5 PLAYERS draft cards from constantly-rotating hands (each player has 7-10 cards; keep 1, pass rest to next player, repeat until all cards drafted); score points based on drafted card types over 3 ROUNDS. CARDS include: NIGIRI (Egg = 1pt, Salmon = 2pt, Squid = 3pt; scale with Wasabi ×3), SASHIMI (set of 3 = 10pts, alone = 0pt), TEMPURA (set of 2 = 5pts, alone = 0pt), DUMPLING (scaling: 1=1, 2=3, 3=6, 4=10, 5=15), MAKI ROLLS (most rolls per round = 6pt, 2nd most = 3pt), WASABI (put down; next Nigiri you draft is ×3), CHOPSTICKS (draft 2 cards next turn), PUDDING (scored at end of GAME, not round; most = +6pt, fewest = -6pt). SIMPLE + PORTABLE + CUTE illustrations by Sarah Skeate. 15-MIN GAMES. DELUXE VERSION: SUSHI GO PARTY! (2016) — bigger box with menu of 20+ card types (you choose 8 per game); scales to 2-8 players; considered upgraded version. BESTSELLER — 3M+ COPIES sold combined. Family gateway drafting game + genre-defining light drafter for Kids + Adults. Won multiple family game awards including Kinderspiel des Jahres 2016 nominee (Sushi Go Party).",
  category: "card-games",
  subCategory: "drafting / set collection / family / Gamewright / Phil Walker-Harding",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Phil Walker-Harding designer) / USA (Gamewright publisher, MA)",
  estimatedOrigin: "2013 Sushi Go!; 2016 Sushi Go Party! deluxe",
  players: { min: 2, max: 8, note: "Sushi Go!: 2-5 players. Sushi Go Party!: 2-8 players." },
  field: {
    surfaceName: "Small tabletop",
    dimensions: "Small tabletop or coffee table (~40cm × 60cm)",
    description: "Home tabletop; portable (small box), travel-friendly.",
  },
  equipment: [
    { name: "Sushi Go! ($12 USD)", description: "Base 2-5 player game; adorable little tin" },
    { name: "Sushi Go Party! ($25)", description: "Deluxe 2-8 player upgrade with 20+ card types" },
    { name: "Sushi Roll (dice version, $20)", description: "Dice-based spinoff by same designer" },
  ],
  duration: { approximateMinutes: 15, structure: "10-20 minutes per game." },
  objective: "Score most points across 3 rounds via strategic card drafting (nigiri, sashimi sets, dumplings, maki, etc.).",
  basicRules: [
    { title: "3 rounds; each round players draft cards (pick 1, pass hand)", body: "Standard drafting mechanic." },
    { title: "Score cards based on collection type per round", body: "Sashimi = need 3 for 10pt, Dumpling scales, Maki most-rolls." },
    { title: "Wasabi ×3 Nigiri if placed first", body: "Combo trick." },
    { title: "Chopsticks draft 2 cards next turn", body: "Action card." },
    { title: "Pudding scored at end of GAME only", body: "Long-term scoring." },
  ],
  scoring: {
    summary: "Point-based across 3 rounds.",
    breakdown: [
      { action: "Nigiri (Egg=1, Salmon=2, Squid=3; ×3 with Wasabi)", points: "1-9 pts" },
      { action: "Sashimi (set of 3 = 10pts, alone = 0)", points: "0 or 10 pts" },
      { action: "Tempura (set of 2 = 5pts, alone = 0)", points: "0 or 5 pts" },
      { action: "Dumpling (scaling 1/3/6/10/15)", points: "1-15 pts" },
      { action: "Maki (most rolls = 6pt, 2nd = 3pt)", points: "0-6 pts per round" },
      { action: "Pudding (game end: most = +6, fewest = -6)", points: "-6 to +6 pts" },
    ],
    winCondition: "Most points after 3 rounds + Pudding endgame.",
  },
  governingBodies: [
    { name: "Gamewright (publisher)", founded: 1994, headquarters: "Newton, Massachusetts, USA" },
    { name: "Ceaco (parent of Gamewright)", founded: 1987, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Casual family game; no formal competitions", frequency: "N/A", founded: 2013, region: "worldwide" },
    { name: "Kinderspiel des Jahres 2016 nomination (Sushi Go Party)", frequency: "annual", founded: 2016, region: "Germany" },
  ],
  countriesPlayed: ["AU", "US", "GB", "DE", "FR", "IT", "ES", "SE", "PL", "CA", "BR", "JP", "KR", "NL"],
  famousAthletes: [
    "Phil Walker-Harding (AU) — Designer; also Bärenpark, Cacao, Silver & Gold",
    "Sarah Skeate (AU) — Illustrator; iconic cute style",
  ],
  variants: [
    "sushi-go-2013-original",
    "sushi-go-party-2016-deluxe-2-8-players",
    "sushi-go-mini-holiday-editions",
    "sushi-roll-dice-version-2019",
  ],
  relatedSports: ["7-wonders", "coup", "love-letter", "codenames", "bohnanza"],
  skills: ["drafting evaluation", "opportunistic play", "opponent hand tracking", "set collection", "combo timing"],
  strategies: [
    { title: "Prioritize Dumplings; they scale to 15 pts", body: "Big returns." },
    { title: "Sashimi needs 3 — high risk, high reward", body: "Only pursue if achievable." },
    { title: "Wasabi before high-value Nigiri", body: "×3 combo." },
    { title: "Deny opponent Maki + Dumpling", body: "Draft cards you don't need to block." },
    { title: "Track opponent hands as they pass", body: "Deduce their strategies." },
  ],
  terminology: [
    { term: "Draft (pick + pass)", meaning: "Take 1 card, pass hand to left." },
    { term: "Nigiri", meaning: "Egg/Salmon/Squid; base scoring cards." },
    { term: "Wasabi", meaning: "×3 next Nigiri (chain combo)." },
    { term: "Sashimi", meaning: "Set of 3 = 10pts, alone = 0." },
    { term: "Dumpling", meaning: "Scaling: 1/3/6/10/15 pts." },
    { term: "Maki Rolls", meaning: "Most rolls per round = 6, 2nd = 3." },
    { term: "Tempura", meaning: "Set of 2 = 5pts." },
    { term: "Chopsticks", meaning: "Draft 2 cards next turn." },
    { term: "Pudding", meaning: "End-game scoring (+6 most, -6 fewest)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Sushi Go! ($12) — cute tin", body: "Simple + fast." },
    ]},
    { level: "intermediate", steps: [
      { title: "Upgrade to Sushi Go Party! ($25) for more variety + 2-8 players", body: "Deluxe experience." },
    ]},
    { level: "advanced", steps: [
      { title: "Try Sushi Roll dice version", body: "Different mechanics + same theme." },
    ]},
  ],
  faq: [
    { question: "What is Sushi Go!?", answer: "DELIGHTFUL PICK-AND-PASS CARD GAME by PHIL WALKER-HARDING + GAMEWRIGHT (2013). 2-5 players draft cards from constantly-rotating hands (Nigiri, Sashimi, Tempura, Dumpling, Maki Rolls, Wasabi, Pudding); score points via set-collection over 3 rounds. SIMPLE + PORTABLE + CUTE illustrations. 15-min games. Deluxe SUSHI GO PARTY! (2016) adds 4-8 players + more variety cards. Bestseller — 3M+ copies. Family gateway drafting game + genre-defining light drafter for kids + adults." },
    { question: "Sushi Go! vs Sushi Go Party! — which to buy?", answer: "BOTH WORK BUT PARTY IS UPGRADED. Sushi Go! ($12) = original small tin, 2-5 players, ~20 cards. Sushi Go Party! ($25) = deluxe box, 2-8 players, MENU of 20+ cards where you choose 8 per game (huge variety). RECOMMENDATION: Get SUSHI GO PARTY! for $25 unless budget is very tight — provides much more variety + higher player count + is the definitive experience. Sushi Go! is fine as the small $12 travel version. Both share the same core drafting mechanic." },
  ],
  wikipediaTitle: "Sushi Go!",
  sources: [
    { label: "Gamewright — Sushi Go!", url: "https://gamewright.com/product/Sushi-Go", publisher: "Gamewright" },
    { label: "Wikipedia — Sushi Go!", url: "https://en.wikipedia.org/wiki/Sushi_Go!", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
