import type { Sport } from "@/lib/types";

export const yugiohMasterDuel: Sport = {
  id: "yugioh-master-duel",
  slug: "yugioh-master-duel",
  name: "Yu-Gi-Oh! Master Duel",
  officialName: "Yu-Gi-Oh! Master Duel",
  aliases: ["Master Duel", "MD", "遊戯王 マスターデュエル"],
  shortDescription:
    "Free-to-play digital adaptation of Yu-Gi-Oh! TCG (Konami, Jan 19, 2022 PS4/PS5/Xbox/Switch/PC/mobile) — full TCG ruleset, 11,000+ cards, ranked ladder + tournaments. First official Konami-made online Yu-Gi-Oh! platform to reach global feature parity.",
  longDescription:
    "Yu-Gi-Oh! Master Duel is Konami's free-to-play digital adaptation of the Yu-Gi-Oh! Trading Card Game — released January 19, 2022 for PS4/PS5, Xbox One/Series, Nintendo Switch, PC (Steam), and mobile (iOS/Android). First official Konami-made online Yu-Gi-Oh! platform to feature full TCG ruleset + global cross-platform play + comprehensive 11,000+ card library (as of 2024). Includes full evolution of Yu-Gi-Oh! mechanics: Normal/Effect/Ritual/Fusion/Synchro/Xyz/Pendulum/Link summoning; new cards added via Selection Packs + Secret Packs monthly. Ranked ladder (Rookie → Duelist King → Master 5-1) + weekly Duelist Cup tournaments + monthly banlist updates. Optional in-game purchases: gems for pack pulls (60-100 gems/pack, ~$1-$2 per pack real-money equivalent). Also runs seasonal events (Ranked, Duelist Cup, Domino City, WCS qualifier). 40M+ downloads within first year.",
  category: "video-games",
  subCategory: "digital trading card game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Konami Digital Entertainment Tokyo)",
  estimatedOrigin: "Released Jan 19, 2022 cross-platform globally",
  players: { min: 2, max: 2, note: "1v1 duel." },
  equipment: [
    { name: "PS4/PS5, Xbox One/Series, Switch, PC, mobile", description: "Cross-platform + cross-progression via Konami ID." },
    { name: "Konami ID", description: "Optional login enabling cross-platform progression + tournament entry." },
  ],
  duration: { approximateMinutes: 10, structure: "Ranked duel ~5-15 min; tournament matches Bo1 or Bo3." },
  objective: "Reduce opponent's 8,000 Life Points to 0 or achieve alt-win condition (Exodia, deck-out).",
  matchStructure: "Bo1 (ranked ladder) or Bo3 (tournaments) 1v1 duels; standard TCG ruleset.",
  basicRules: [
    { title: "8,000 Life Points per player", body: "Reduce opponent to 0 LP to win." },
    { title: "40-60 card main deck + 15 side deck", body: "Standard TCG deck construction." },
    { title: "Summoning types: Normal/Effect/Ritual/Fusion/Synchro/Xyz/Pendulum/Link", body: "Full modern Yu-Gi-Oh! summon mechanics." },
  ],
  advancedRules: [
    { title: "Extra Deck 15 cards (Fusion/Synchro/Xyz/Link/Pendulum extras)", body: "Special summon materials from Extra Deck." },
    { title: "Monthly banlist updates", body: "Konami updates Forbidden/Limited/Semi-Limited list monthly." },
    { title: "Duelist Cup tournament format", body: "Weekly Ranked seasons + monthly Duelist Cup Bo3 tournaments." },
  ],
  scoring: {
    summary: "LP tracking; ranked ladder ELO ranking; Duelist Cup medal count.",
    winCondition: "Reduce opponent to 0 LP; deck-out (opponent draws with empty deck); alt-win (Exodia 5-piece assembly, Vennominaga 3 counters).",
    breakdown: [
      { action: "Ranked win", points: "ELO gain in current season" },
      { action: "Duelist Cup point round", points: "Medal accumulation" },
    ],
  },
  penalties: [
    { title: "Cheating detected", body: "Instant account ban + tournament DQ." },
    { title: "Rope-scumming (stalling)", body: "In-game auto-timeout enforced; excessive slow-play detected + reported." },
    { title: "Deck construction rule violation", body: "Cannot join Ranked; deck flagged in build screen." },
  ],
  positions: [{ name: "Duelist", role: "Deck-builder + 1v1 competitive player.", count: 1 }],
  officiating: {
    officials: ["Konami tournament staff (WCS)", "Bot-detection + report review moderation team"],
    summary: "Ranked ladder is algorithmic + auto-moderated; WCS tournaments have human staff.",
  },
  governingBodies: [{ name: "Konami Digital Entertainment", founded: 2006, headquarters: "Tokyo, Japan" }],
  majorCompetitions: [
    { name: "Duelist Cup (monthly)", frequency: "monthly", founded: 2022, region: "global" },
    { name: "World Championship Series (WCS)", frequency: "annual", founded: 2003, region: "global" },
    { name: "Ranked Ladder Season", frequency: "monthly", founded: 2022, region: "global (algorithmic)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "BR", "AU", "KR", "MX", "IT"],
  famousAthletes: [
    "Aidan Blackwood (USA) — WCS competitor",
    "Various regional Duelist Cup winners",
  ],
  records: [
    { title: "40M+ downloads first year", holder: "Konami", value: "40+ million downloads within launch year (2022)", year: 2022 },
    { title: "First Konami-made global Yu-Gi-Oh! digital platform", holder: "Konami", value: "First to reach feature parity with paper TCG globally", year: 2022 },
  ],
  variants: ["yugioh-master-duel-standard", "yugioh-duel-links-mobile-focused"],
  relatedSports: ["yugioh-tcg", "yugioh-duel-links", "magic-the-gathering-arena", "hearthstone"],
  skills: ["deck-building", "combo lines", "board reading", "hand-management"],
  strategies: [
    { title: "Combo deck FTK/OTK optimisation", body: "Build multi-turn combo lines for first-turn kill or one-turn kill." },
    { title: "Hand traps (Ash Blossom, Nibiru)", body: "Include ~10-15 hand traps to disrupt opponent's opening combo." },
    { title: "Side deck for game 2/3", body: "Tournament Bo3 — side in 3-8 cards to counter opponent's identified strategy." },
  ],
  terminology: [
    { term: "LP", meaning: "Life Points (start 8,000)" },
    { term: "OTK", meaning: "One-Turn Kill" },
    { term: "FTK", meaning: "First-Turn Kill" },
    { term: "Hand trap", meaning: "Effect activated from hand to disrupt opponent" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Solo Mode tutorials + starter decks", body: "Learn summoning types + basic combos via Solo Mode." }] },
    { level: "intermediate", steps: [{ title: "Ranked ladder + meta decks", body: "Build meta archetype (Snake-Eye, Yubel, Kashtira, Purrely) + climb Ranked." }] },
    { level: "advanced", steps: [{ title: "Duelist Cup + WCS qualifying", body: "Monthly Duelist Cup Bo3 + WCS regional qualifiers." }] },
  ],
  faq: [
    { question: "Is Master Duel free to play?", answer: "Yes — free download; optional in-game purchases (gems for pack pulls, cosmetics)." },
    { question: "How does Master Duel differ from Duel Links?", answer: "Master Duel = full TCG ruleset (11,000+ cards, 40-card main deck, all summon types). Duel Links = simplified mobile format (20-card decks, restricted card pool, 4,000 LP, speed-focused)." },
  ],
  wikipediaTitle: "Yu-Gi-Oh! Master Duel",
  sources: [{ label: "Wikipedia — Yu-Gi-Oh! Master Duel", url: "https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Master_Duel", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default yugiohMasterDuel;
