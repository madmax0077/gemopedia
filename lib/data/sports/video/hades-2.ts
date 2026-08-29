import type { Sport } from "@/lib/types";

export const hades2: Sport = {
  id: "hades-2",
  slug: "hades-2",
  name: "Hades II",
  officialName: "Hades II",
  aliases: ["Hades 2", "H2"],
  shortDescription:
    "Supergiant Games isometric roguelike (Early Access May 6, 2024 PC; console 2025-26; full 1.0 TBA 2026) — play Melinoë (Persephone/Hades's daughter) fighting Titan Chronos across dual surface + underworld paths. Sequel to 2020 Game of the Year Hades.",
  longDescription:
    "Hades II is an isometric action-roguelike developed + published by Supergiant Games (Melbourne, AUS / San Francisco, USA) — released in Early Access on May 6, 2024 for PC (Steam + Epic); full 1.0 release + console versions (PS5, Xbox Series X/S, Switch 2) targeted 2026. Sequel to 2020's Hades (winner of numerous 2020 Game of the Year awards including BAFTA + DICE + TGA Best Action + Best Indie). Player controls Melinoë, Princess of the Underworld — Persephone + Hades's daughter, sister of Zagreus (Hades 1 protagonist). Titan Chronos has escaped from Tartarus + trapped Olympus + underworld; Melinoë must ascend to surface world Athens/Ephyra + descend deeper into the underworld to defeat Chronos. Dual-path structure (surface + underworld) — first Supergiant game with two distinct roguelike map trees. Combat is isometric action with Boons (Olympian gifts), Hexes (moon magic), Arcana Cards (deck-building meta-progression), and dozens of weapons. Voice acting by Amelia Tyler (Melinoë) + Logan Cunningham (Chronos + returning voice cast). Yasunori Nishiki-adjacent orchestral score by Darren Korb. Early Access received rave reviews; frequent seasonal content updates through 2024-25. Considered leading indie of 2024.",
  category: "video-games",
  subCategory: "isometric action-roguelike",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA / Australia (Supergiant Games)",
  estimatedOrigin: "Announced Dec 2022 TGA; Early Access May 6, 2024; console + full 1.0 targeted 2026",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PC (Steam + Epic) — Early Access", description: "PC-only Early Access; console versions 2025-26." },
    { name: "Standard controller or M+KB", description: "Controller recommended; M+KB fully supported." },
  ],
  duration: { approximateMinutes: 45, structure: "Single run ~30-60 min (successful run); full campaign 30-100+ hrs through story + meta progression." },
  objective: "Ascend to surface world + descend to deeper underworld; defeat Titan Chronos + free Olympus / underworld. Full story spans dozens of successful + failed runs.",
  matchStructure: "Single-player roguelike; each run = attempt to complete surface OR underworld path; death returns to Crossroads hub for meta-progression + relationships.",
  basicRules: [
    { title: "Roguelike run + die + retry loop", body: "Each run may end in success or death; permanent meta-progression via Arcana Cards + relationships + weapon aspects." },
    { title: "Two directional paths (Surface + Underworld)", body: "Choose direction at Crossroads; Surface = up through Ephyra + Athens; Underworld = down through Tartarus + deeper realms." },
    { title: "Boons from Olympian gods", body: "Zeus, Poseidon, Aphrodite, Apollo, Hera, Demeter, Hermes + more offer Boons enhancing weapons + magic." },
  ],
  advancedRules: [
    { title: "Arcana Cards meta-progression", body: "Deck-building meta-system: unlock + spend Ash + Psyche on Arcana Cards granting permanent buffs; card synergies define runs." },
    { title: "Hexes (moon magic)", body: "Melinoë's signature — charge Hex meter, unleash powerful Moon-based super attacks." },
    { title: "Relationships + character conversations", body: "Rich dialogue with Underworld + Olympian NPCs; relationships evolve across runs." },
    { title: "Weapon aspects + Nocturnal Arms", body: "Multiple weapons + aspects unlock through Nocturnal Arms system." },
  ],
  scoring: {
    summary: "Run completion + meta-progression via Ash/Psyche currencies + relationship gauges.",
    winCondition: "Complete both Surface + Underworld arcs + final Chronos battle across many runs.",
    breakdown: [{ action: "Successful run", points: "Story progression + max Ash/Psyche" }, { action: "Failed run", points: "Partial Ash/Psyche + relationship progress" }],
  },
  penalties: [
    { title: "Death (run failure)", body: "Return to Crossroads hub; lose most run-specific pickups; keep meta-progression currencies." },
  ],
  positions: [{ name: "Melinoë (Princess of the Underworld)", role: "Sole playable character throughout game.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Supergiant Games", founded: 2009, headquarters: "San Francisco, USA + Melbourne, Australia" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Hades 2 leaderboards", frequency: "ongoing", founded: 2024, region: "worldwide (community)" },
  ],
  countriesPlayed: ["global — PC digital"],
  famousAthletes: ["Amir Rao (Supergiant co-founder)", "Greg Kasavin (creative director)", "Darren Korb (composer)", "Amelia Tyler (Melinoë voice)"],
  records: [
    { title: "Hades 1 Game of the Year 2020", holder: "Supergiant", value: "Original Hades won 2020 Game of the Year at BAFTA + DICE + TGA Best Action + Best Indie", year: 2020 },
    { title: "Hades 2 Early Access May 6, 2024", holder: "Supergiant", value: "Hades 2 launched in Early Access May 6, 2024 — Supergiant's first-ever direct sequel", year: 2024 },
    { title: "First Supergiant direct sequel", holder: "Supergiant", value: "Supergiant's first direct sequel; previously all games were standalone (Bastion → Transistor → Pyre → Hades)", year: 2024 },
  ],
  variants: ["hades-2-early-access", "hades-2-1.0-full-release"],
  relatedSports: ["hades-1", "dead-cells", "returnal", "risk-of-rain", "enter-the-gungeon"],
  skills: ["action-combat pattern recognition", "Boon build synergy", "Arcana Card deckbuilding", "boss-pattern memorisation"],
  strategies: [
    { title: "Boon synergy chase", body: "Chase specific God Boons that synergise (e.g., Zeus chain + Poseidon knockback = triple-god synergy)." },
    { title: "Hex + Arcana Card combo builds", body: "Match Hex ability to Arcana Card build for signature run identity." },
    { title: "Path selection strategy", body: "Surface + Underworld paths have different biome + boss patterns — cycle both for narrative + variety." },
  ],
  terminology: [
    { term: "Melinoë", meaning: "Princess protagonist — Persephone + Hades daughter" },
    { term: "Chronos", meaning: "Titan antagonist (escaped from Tartarus)" },
    { term: "Boon", meaning: "Olympian god's gift enhancing weapons/abilities" },
    { term: "Hex", meaning: "Melinoë's moon magic super attack" },
    { term: "Arcana Card", meaning: "Meta-progression deckbuilding card" },
    { term: "Crossroads", meaning: "Hub between runs (Surface + Underworld directions)" },
    { term: "Nocturnal Arms", meaning: "Weapon set (multiple types + aspects)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First 10 runs learning combat + Boons", body: "Learn combat basics + Boon system + Arcana Cards intro." }] },
    { level: "intermediate", steps: [{ title: "Path completion + weapon aspect unlocks", body: "Complete both Surface + Underworld path first-clears; unlock weapon aspects." }] },
    { level: "advanced", steps: [{ title: "Heat / Difficulty scaling + speedrun", body: "Push Heat / Difficulty modifiers + attempt speedrun leaderboards." }] },
  ],
  faq: [
    { question: "Do I need to play Hades 1 to enjoy Hades 2?", answer: "Not required — Hades 2 stands alone. However, Hades 1 provides valuable emotional + narrative context (Zagreus is Melinoë's brother, key characters recur). Both games are Game-of-the-Year-caliber recommendations." },
    { question: "When will Hades 2 leave Early Access?", answer: "Full 1.0 release + console versions (PS5, Xbox Series X/S, Switch 2) targeted for 2026 per Supergiant. Early Access continues to receive frequent content updates through 2024-25." },
  ],
  wikipediaTitle: "Hades II",
  sources: [{ label: "Wikipedia — Hades II", url: "https://en.wikipedia.org/wiki/Hades_II", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default hades2;
