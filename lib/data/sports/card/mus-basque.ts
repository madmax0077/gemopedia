import type { Sport } from "@/lib/types";

export const musBasque: Sport = {
  id: "mus-basque",
  slug: "mus-basque",
  name: "Mus (Basque Card Game)",
  officialName: "World Mus Championship — Federación Vasca de Mus",
  aliases: ["Mus", "Mus Bizkaia", "Basque Bluffing"],
  shortDescription:
    "National card game of Basque Country + Navarre — 4-player partnership bluffing card game using 40-card Spanish deck; four betting rounds (Grande, Chica, Pares, Juego) with heavy 'seña' (gesture signaling) between partners; huge social importance in Basque bars + festivals; World Mus Championship annual since 1978.",
  longDescription:
    "Mus (Basque + Spanish for the game) is the national card game of the Basque Country (Euskal Herria), Navarre, and neighboring regions of Spain — considered THE social game of Basque culture. Played in every Basque bar + at family gatherings + as national championship sport. 4-player partnership game using traditional 40-card Spanish deck (suits: Copas Cups, Espadas Swords, Bastos Clubs, Oros Coins; ranks 1-7 + Sota/Caballo/Rey). Two teams of 2 partners face across table; deal 4 cards each. Play proceeds through fixed structure: (1) 'Mus?' — players decide whether to draw new cards (mus = discard some, draw new); repeated until all agree no more mus; (2) Four sequential betting rounds: (a) Grande — highest cards win; (b) Chica — lowest cards win; (c) Pares — pairs/three-of-a-kind win; (d) Juego — cards totaling 31+ win (or closest to 30); (3) Reveal + score each round independently. Signature culture: 'seña' — 8-10 pre-agreed gestures partners make to secretly communicate card holdings across table; e.g., biting lower lip = 'I have kings', winking = 'ace pair', puffed cheek = 'game/31'. Elaborate bluffing possible — bets can be raised without holding claimed cards ('órdago' = bet the whole game); opponents must decide to call or fold. Games played to 30 or 40 points (called 'amarrako'). Origins: 18th century Basque country (first documented reference 1745 by Manuel Larramendi in his Basque dictionary); spread through Spanish-speaking world via Basque diaspora. World Mus Championship (Campeonato Mundial de Mus) held annually since 1978, typically in Bilbao or San Sebastián — attracts ~2,000 pairs from Spain + France Basque + Latin American Basque diaspora. Notable strongholds: Bilbao, San Sebastián, Vitoria-Gasteiz, Pamplona, Bayonne (France), Buenos Aires (Argentina Basque diaspora). Also: (a) Wildly popular Argentine 'Truco' descends from mus; (b) Cuban + Mexican variants; (c) Regional variants Mus a la Grande + Mus a la Chica.",
  category: "card-games",
  subCategory: "Basque partnership bluffing card game with gesture signaling",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "early-modern", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Basque Country + Navarre (northern Spain + southwestern France) — 18th century",
  estimatedOrigin: "First documented 1745 by Manuel Larramendi in Basque dictionary; spread through Spanish diaspora; World Championship since 1978",
  players: { min: 4, max: 4, note: "Exactly 4 players in 2 partnerships of 2." },
  equipment: [{ name: "Spanish 40-card deck", description: "4 suits (Copas, Espadas, Bastos, Oros) × 10 cards each (1-7 + Sota/8, Caballo/9, Rey/10)." }, { name: "Score chips or coins ('amarrakos')", description: "Physical tokens for tracking scores; games played to 30 or 40 points." }, { name: "Table for 4 players (partnerships facing)", description: "Round or square table with 4 chairs; partners sit across from each other; not adjacent." }],
  duration: { approximateMinutes: 60, structure: "Casual game 45-90 min; tournament rounds 45-60 min; multi-day championships." },
  objective: "Win 4 sequential betting rounds (Grande, Chica, Pares, Juego) by having winning card combinations OR successfully bluffing opponents into folding.",
  matchStructure: "Deal 4 cards → mus phase → 4 betting rounds → score → next hand → play to 30 or 40 points.",
  basicRules: [
    { title: "4 sequential betting rounds: Grande, Chica, Pares, Juego", body: "Each round is independent bet: Grande = highest cards win; Chica = lowest cards; Pares = pairs/three-of-a-kind; Juego = closest to 31+ (or 30)." },
    { title: "'Mus?' phase draws new cards before betting", body: "Before any betting, players decide if they want to swap cards ('mus'); repeat until all 4 decline more mus." },
    { title: "Seña (gestures) between partners is central + traditional", body: "Partners use pre-agreed subtle facial/hand gestures to communicate their card holdings — considered essential skill, NOT cheating (part of game culture)." },
    { title: "'Órdago' bets entire game on single round", body: "Any player may call 'órdago' during a betting round = wager entire game (all remaining points) on that round; opponent must call or fold conceding whole game." },
    { title: "Games played to 30 or 40 points ('amarrakos')", body: "Championship games typically played to 30 points; casual to 40 points; some to 2 games ('vacas'/cows)." },
  ],
  scoring: { summary: "Each of 4 betting rounds scores independently (typically 1-8 points depending on hand + bets); running total per team; first to 30 or 40 wins.", winCondition: "First partnership to reach 30 or 40 points (game target set beforehand)." },
  positions: [{ name: "Mano (dealer's opponent — 'hand')", role: "First to bet in each round; strategic position.", count: 1 }, { name: "Mus partnership team", role: "Two players in one team; sit across table facing each other.", count: 4 }],
  officiating: { officials: ["Tournament Arbiter", "Table Judges (championship)", "Scorekeepers"], summary: "Federación Vasca de Mus certified officials at World Mus Championship." },
  governingBodies: [{ name: "Federación Vasca de Mus", founded: 1975, headquarters: "Bilbao, Basque Country, Spain" }, { name: "World Mus Championship organizing committee", founded: 1978, headquarters: "rotating Bilbao / San Sebastián" }],
  majorCompetitions: [{ name: "World Mus Championship (Campeonato Mundial de Mus)", frequency: "annual", founded: 1978, region: "Bilbao or San Sebastián, Basque Country, Spain" }, { name: "Spanish Mus Championship", frequency: "annual", founded: 1980, region: "Spain" }, { name: "Basque Mus Championship", frequency: "annual", founded: 1970, region: "Basque Country" }, { name: "Fiesta de San Fermín Mus Tournament", frequency: "annual (July)", founded: 1985, region: "Pamplona, Navarre" }],
  countriesPlayed: ["ESP (dominant — Basque + Navarre)", "FRA (French Basque)", "ARG (Basque diaspora)", "URY", "CHL", "MEX", "CUB", "worldwide Basque diaspora"],
  famousAthletes: ["Multi-time World Mus Champion pairs (limited English-language records)", "Notable Basque cultural figures often champion Mus players"],
  records: [
    { title: "First documented 1745 by Manuel Larramendi", holder: "Manuel Larramendi (Basque lexicographer)", value: "Mus first documented in written record 1745 by Manuel Larramendi in his Basque-Spanish-Latin dictionary — earliest known reference to the game", year: 1745 },
    { title: "World Mus Championship since 1978 (~2,000 pairs)", holder: "Federación Vasca de Mus", value: "World Mus Championship held annually since 1978 in Bilbao/San Sebastián; ~2,000 pairs entered from Spain + France Basque + Latin American diaspora", year: 2024 },
    { title: "National card game of Basque Country", holder: "Basque cultural tradition", value: "Mus recognized as national card game of Basque Country + Navarre — played in essentially every Basque bar + family gathering", year: 2024 },
  ],
  variants: ["mus-standard-4-player-partnership", "mus-a-la-grande-scoring-variant", "mus-a-la-chica-scoring-variant", "argentine-truco-descendent-game", "cuban-mus-variant"],
  relatedSports: ["truco-argentine-card", "scopa-italian", "briscola-italian-card", "poker-texas-holdem"],
  skills: ["seña gesture signaling (partner communication)", "bluffing technique + bet sizing", "opponent tell reading", "card memory + statistical hand evaluation"],
  wikipediaTitle: "Mus (card game)",
  sources: [{ label: "Wikipedia — Mus (card game)", url: "https://en.wikipedia.org/wiki/Mus_(card_game)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default musBasque;
