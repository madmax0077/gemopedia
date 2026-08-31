import type { Sport } from "@/lib/types";

export const hanabiCooperative: Sport = {
  id: "hanabi-cooperative",
  slug: "hanabi-cooperative",
  name: "Hanabi (Cooperative Card Game)",
  officialName: "Hanabi — Antoine Bauza (Cocktail Games/R&R Games)",
  aliases: ["Hanabi", "花火", "Fireworks Card Game"],
  shortDescription:
    "Cooperative card game by Antoine Bauza (2010) where 2-5 players hold cards facing OUTWARD (you see teammates' hands, not your own); team must play fireworks cards in ascending order 1-5 across 5 colors using limited clue tokens; Spiel des Jahres 2013 winner; benchmark for cooperative + hidden-information games.",
  longDescription:
    "Hanabi (花火, Japanese for 'fireworks') is a landmark cooperative card game designed by Antoine Bauza (published 2010 by Cocktail Games France, R&R Games US) that revolutionized cooperative + hidden-information game design. Won Spiel des Jahres 2013 (German Game of the Year) — highest honor in tabletop games. Distinctive gimmick: each player holds their hand of cards FACING OUTWARD — you can see everyone else's cards but NOT your own; players must communicate cautiously through limited clue tokens to help teammates play cards correctly. Setup: 50-card deck consisting of 5 colored suits (white, yellow, green, blue, red) each with values 1×3, 2×2, 3×2, 4×2, 5×1 (10 cards per suit); 4-5 players get 4 cards each, 2-3 players get 5 cards each. Team starts with 8 blue clue tokens + 3 red fuse tokens. Turn options (choose 1): (a) Give clue — spend one blue token to tell a teammate 'you have exactly these cards of X color' or 'you have exactly these cards of Y value' — cannot lie, cannot mix info types; (b) Discard card — regain 1 blue clue token; (c) Play card — if it's the next number in ascending sequence for its color firework (1→2→3→4→5), it succeeds; if it's not, it fails and burns 1 red fuse. Game ends when: all 5 fireworks complete (perfect 25 score), OR 3 fuses burnt (immediate loss = fireworks factory explodes), OR deck runs out + one final round. Scoring: sum of highest card played in each color (0-25); 25 = 'legendary fireworks display'. Deep meta-game around information theory + convention systems — expert players use elaborate convention systems (e.g., 'H-group' conventions, 'Playbook' conventions) allowing extraction of far more info than base clue content. Multiplayer online scene at hanab.live (community platform). Referenced in academic AI research — DeepMind's Hanabi Challenge (2019) — considered benchmark for cooperative AI + theory of mind reasoning.",
  category: "card-games",
  subCategory: "cooperative card game with reverse-hand hidden information",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Antoine Bauza designer; Cocktail Games publisher 2010)",
  estimatedOrigin: "Published 2010 by Cocktail Games (France); won Spiel des Jahres 2013",
  players: { min: 2, max: 5 },
  equipment: [{ name: "Hanabi 50-card deck", description: "5 colored suits (white, yellow, green, blue, red) × values 1×3, 2×2, 3×2, 4×2, 5×1 = 50 cards; plus 6th 'rainbow' suit in Deluxe Edition." }, { name: "8 blue clue tokens", description: "Track available clues; regain by discarding." }, { name: "3 red fuse tokens", description: "Lose 1 per misplayed card; 3 lost = immediate game over." }, { name: "5 firework score cards", description: "Track highest number played in each color; game score = sum of these highest cards." }],
  duration: { approximateMinutes: 25, structure: "Single game 20-40 min; expert players finish faster; teaching game 45-60 min." },
  objective: "Play cards in ascending order 1-5 across all 5 colors to achieve maximum firework score (25 = perfect).",
  matchStructure: "Turn-based rotation until: 5 fireworks complete, OR 3 fuses lost, OR deck empty + final round.",
  basicRules: [
    { title: "Hold cards facing OUTWARD (see teammates, not yourself)", body: "Each player's hand held outward — you see every other player's cards but never your own; core mechanic." },
    { title: "Turn options: Give Clue, Discard, or Play", body: "On turn choose exactly one: (a) spend 1 blue token to give exact color OR value clue to one teammate; (b) discard 1 card + regain 1 blue token; (c) play 1 card." },
    { title: "Playing wrong card burns 1 red fuse token", body: "If played card is not next-in-ascending-sequence for its color, card is discarded + 1 red fuse burnt; 3 fuses lost = immediate loss." },
    { title: "Clues cannot lie + cannot mix color/value info", body: "You must give accurate info; single clue must be either all-of-one-color OR all-of-one-value in teammate's hand; must indicate ALL matching cards." },
  ],
  scoring: { summary: "Sum of highest card played per each of 5 colors; max 25 (5 colors × 5 max card); 25 = 'legendary fireworks display'.", winCondition: "Game achieves score of at least 25 (perfect) or high partial score before running out of fuses/deck." },
  positions: [{ name: "Hanabi player (Fireworks technician)", role: "One of 2-5 team members playing cooperatively.", count: 5 }],
  officiating: { officials: ["Rules Referee (tournament play)"], summary: "Community online tournaments use rules arbiters; casual play self-officiated." },
  governingBodies: [{ name: "Antoine Bauza (designer)", founded: 2010, headquarters: "France" }, { name: "Cocktail Games (publisher France)", founded: 2003, headquarters: "France" }, { name: "R&R Games (publisher USA)", founded: 1995, headquarters: "Lakeland, Florida, USA" }],
  majorCompetitions: [{ name: "Spiel des Jahres 2013 Winner", frequency: "one-time award", founded: 2013, region: "Germany" }, { name: "hanab.live online tournament series", frequency: "ongoing", founded: 2017, region: "worldwide online" }, { name: "DeepMind Hanabi Challenge 2019 (academic AI benchmark)", frequency: "one-time academic paper", founded: 2019, region: "AI research community" }],
  countriesPlayed: ["FRA (origin)", "DEU", "USA", "GBR", "JPN", "AUS", "worldwide tabletop community"],
  famousAthletes: ["Antoine Bauza (designer; also Takenoko, 7 Wonders Duel)", "hanab.live community high-scorers"],
  records: [
    { title: "Spiel des Jahres 2013 Winner", holder: "Antoine Bauza + Cocktail Games", value: "Hanabi won Spiel des Jahres 2013 (German Game of the Year) — highest honor in tabletop board/card games", year: 2013 },
    { title: "DeepMind Hanabi Challenge AI benchmark", holder: "DeepMind research (Nolan Bard et al.)", value: "DeepMind published 'The Hanabi Challenge' 2019 paper establishing Hanabi as benchmark for cooperative multi-agent AI + theory of mind research", year: 2019 },
    { title: "Deluxe Edition adds 6th rainbow suit", holder: "R&R Games", value: "Hanabi Deluxe Edition adds 6th 'rainbow' suit — cards count as ALL colors; increases difficulty + strategic depth", year: 2013 },
  ],
  variants: ["hanabi-standard-5-suit", "hanabi-deluxe-6-suit-rainbow", "hanabi-variants-6-suits-black-wildcards", "big-hanabi-8-players-multiple-decks"],
  relatedSports: ["mysterium-cooperative-deduction", "the-mind-cooperative-timing", "codenames-clue-word-game", "spirit-island-cooperative-board"],
  skills: ["information-theory clue optimization", "convention systems (H-group + Playbook)", "endgame counting (deck remaining)", "risk assessment for plays"],
  wikipediaTitle: "Hanabi (card game)",
  sources: [{ label: "Wikipedia — Hanabi (card game)", url: "https://en.wikipedia.org/wiki/Hanabi_(card_game)", publisher: "Wikipedia" }, { label: "hanab.live", url: "https://hanab.live", publisher: "Hanabi Community" }, { label: "DeepMind Hanabi Challenge (2019)", url: "https://arxiv.org/abs/1902.00506", publisher: "DeepMind + Google Research" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default hanabiCooperative;
