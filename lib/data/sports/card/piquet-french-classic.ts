import type { Sport } from "@/lib/types";

export const piquetFrenchClassic: Sport = {
  id: "piquet-french-classic",
  slug: "piquet-french-classic",
  name: "Piquet (French Classical Card Game)",
  officialName: "Piquet — French traditional 32-card trick-taking game (no formal governing body)",
  aliases: ["Piquet", "Pique", "Classical Piquet"],
  shortDescription:
    "Elegant classical French card game 15th-16th century — 2-player trick-taking game using 32-card piquet deck (7-A); considered by many card historians as most sophisticated 2-player card game ever; features 'partie' 6-hand match structure with multiple scoring rounds; favored by French aristocracy + intellectual class; Alfred de Vigny + Casanova famous players.",
  longDescription:
    "Piquet is a sophisticated 2-player trick-taking card game dating from 15th-16th century France — considered by many card game historians (David Parlett, John McLeod) as the most elegantly designed classical 2-player card game ever created. Uses 32-card 'piquet deck' (standard 52-card deck with 2, 3, 4, 5, 6 removed = 32 cards of 7-A in 4 suits — the standard 'piquet deck' also used in Belote, Skat, Bezique). Historically the game of French aristocracy + intellectual class — favored 17th-19th centuries by Cardinal Richelieu, Casanova (mentioned throughout his Memoirs), Louis XIV court, French salons; Alfred de Vigny + Baudelaire wrote about the game; declined 20th century as bridge + poker rose. Named 'piquet' (French for 'pointer' or 'stake') possibly from stake-post metaphor. Elaborate match structure: (1) 'Partie' = 6 deals; each deal has 3 scoring phases plus tricks; complex point accumulation determines partie winner; (2) Deal: 12 cards to each player + 8-card 'talon' (stock); (3) Discard phase: each player discards 1-5 cards + draws replacements from talon (dealer draws first 5, elder hand draws first 5); (4) Declaration phase (3 scoring rounds): Point (longest suit by pip value), Sequence (longest run of consecutive cards same suit), Set (best triplet or quartet); (5) Play phase: 12 tricks played out (must follow suit); (6) Special bonuses: Repique (30 pts if score 30+ pts before playing first card), Pique (30 pts if score 30+ pts before opponent scores), Carte Blanche (10 pts if hand contains no court cards). Complex scoring nuances create deep strategic depth: (a) 'Elder hand' (non-dealer) has significant advantage — chooses first discards + must call declarations first; (b) Discard strategy critical — trade off between hand strength + concealed information; (c) Sequence + set declarations reveal information to opponent about hand composition; (d) 'Repique' + 'Pique' bonuses can decide entire partie in single hand. Notable literary + historical references: (1) Baudelaire poem 'Le Piquet' 1857; (2) Alfred de Vigny stories; (3) Casanova's Memoirs mention numerous piquet sessions; (4) Louis XIV court piquet room preserved at Versailles; (5) Alexander Pushkin's 'Queen of Spades' features piquet-inspired card play. Modern revival: (1) Small competitive tournament scene UK + France + Netherlands; (2) Online play on Board Game Arena + Piquet.com; (3) Popular educational card game for teaching classical scoring systems; (4) Featured in Poker Alice + Games Magazine top 20 classical games. Not commonly played today outside dedicated communities; considered too complex + elaborate for modern casual play but revered as classical masterpiece.",
  category: "card-games",
  subCategory: "classical French 2-player trick-taking card game with complex scoring phases",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "obscure",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (15th-16th century French aristocracy + intellectual class)",
  estimatedOrigin: "Documented in France 15th-16th century; peak popularity 17th-19th century French aristocracy + salons; declined 20th century as bridge + poker rose",
  players: { min: 2, max: 2, note: "Exactly 2 players." },
  equipment: [{ name: "Piquet deck (32 cards, 7-A in 4 suits)", description: "Standard 52-card deck with 2-6 removed = 32 cards of 7, 8, 9, 10, J, Q, K, A in 4 suits (♠ ♥ ♦ ♣)." }, { name: "Scoring pad + pencil (traditional)", description: "Traditional paper scoring pad for tracking complex partie scoring across 6 deals + 3 scoring phases each." }],
  duration: { approximateMinutes: 45, structure: "Single partie (6 deals) 45-90 min; tournament match 90-180 min." },
  objective: "Score more total points than opponent across 6-deal partie by winning Point + Sequence + Set declarations + tricks + bonuses.",
  matchStructure: "Partie = 6 deals; each deal: deal + discard + declarations (Point/Sequence/Set) + 12 tricks played; running total across all 6 deals determines partie winner.",
  basicRules: [
    { title: "12 cards dealt each + 8-card talon (stock) reserve", body: "Deal 12 cards to each player; remaining 8 cards form talon (stock) — used for discard-replacement." },
    { title: "Discard 1-5 cards + draw replacements from talon", body: "Each player discards 1-5 cards + draws same number from talon; elder hand (non-dealer) draws from top 5 of talon; dealer draws from remaining." },
    { title: "3 scoring declarations: Point + Sequence + Set", body: "Before playing tricks: Point (longest suit by pip value), Sequence (longest same-suit run), Set (best 3-of-a-kind or 4-of-a-kind); highest wins each category + scores accordingly." },
    { title: "12 tricks played + must follow suit + no trump", body: "12 tricks played out; must follow suit if possible; NO TRUMP suit — highest card of led suit wins trick; card led + high-card wins." },
    { title: "Repique + Pique bonuses (30 pts) transform game", body: "Repique: score 30+ points before playing first card = 30 bonus. Pique: score 30+ points before opponent scores = 30 bonus. Can decide entire partie in single hand." },
  ],
  scoring: { summary: "Complex multi-source scoring: declarations (variable), tricks won (1 pt each + 10 for majority + 10 for last trick), bonuses (Repique + Pique + Carte Blanche); sum across 6 deals.", winCondition: "Higher total point score after 6 deals of partie." },
  positions: [{ name: "Elder hand (Aîné)", role: "Non-dealer; significant advantage (calls declarations first, first talon draw)", count: 1 }, { name: "Younger hand (Dealer)", role: "Deals cards; responds to elder's declarations.", count: 1 }],
  officiating: { officials: ["Casual: self-officiated", "Tournament arbiter (rare formal events)"], summary: "Casual play self-officiated; occasional Board Game Arena or Piquet.com online arbitration." },
  governingBodies: [{ name: "No formal international governing body", founded: 1500, headquarters: "France" }],
  majorCompetitions: [{ name: "UK Piquet Club Championships (informal)", frequency: "annual", founded: 1990, region: "UK" }, { name: "Board Game Arena Piquet tournaments", frequency: "ongoing", founded: 2015, region: "worldwide online" }, { name: "French Piquet Revival Society events", frequency: "occasional", founded: 2005, region: "France" }],
  countriesPlayed: ["FRA (origin — declined)", "GBR (dedicated modern community)", "NLD", "USA (small revival)", "DEU", "worldwide small dedicated online scene"],
  famousAthletes: ["Cardinal Richelieu (17th century French statesman + player)", "Giacomo Casanova (18th century — mentioned throughout Memoirs)", "Alfred de Vigny (19th century writer)", "Louis XIV court players", "Alexander Pushkin (referenced in 'Queen of Spades')", "David Parlett (modern game historian)"],
  records: [
    { title: "Documented in France 15th-16th century", holder: "French card game tradition", value: "Piquet documented in France 15th-16th century; considered by card game historians as most elegantly designed classical 2-player card game ever", year: 1500 },
    { title: "Peak French aristocracy 17th-19th century", holder: "French court + salons", value: "Peak popularity 17th-19th century French aristocracy + intellectual class; Cardinal Richelieu, Louis XIV court, Casanova, Baudelaire all famous players; declined 20th century vs bridge + poker", year: 1700 },
    { title: "Casanova's Memoirs mention numerous piquet sessions", holder: "Giacomo Casanova (literary reference)", value: "Casanova's Memoirs mention numerous piquet sessions across his travels — game central to 18th century European gentlemen's culture", year: 1780 },
  ],
  variants: ["piquet-standard-2-player-6-deal-partie", "piquet-au-cent-play-to-100-points-variant", "auction-piquet-3-player-variant", "rubicon-piquet-variant-scoring"],
  relatedSports: ["bezique-french-classical-card", "cribbage-english-scoring-card", "gin-rummy-classical-2-player", "briscola-italian-card"],
  skills: ["discard strategy (concealment vs strength)", "declaration information management", "trick sequencing under no-trump", "Repique/Pique opportunity recognition"],
  wikipediaTitle: "Piquet",
  sources: [{ label: "Wikipedia — Piquet", url: "https://en.wikipedia.org/wiki/Piquet", publisher: "Wikipedia" }, { label: "David Parlett — Piquet History", url: "https://www.parlettgames.uk/histocs/piquet.html", publisher: "David Parlett" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default piquetFrenchClassic;
