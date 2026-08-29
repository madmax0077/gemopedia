import type { Sport } from "@/lib/types";

export const expedition33: Sport = {
  id: "expedition-33",
  slug: "expedition-33",
  name: "Clair Obscur: Expedition 33",
  officialName: "Clair Obscur: Expedition 33",
  aliases: ["Expedition 33", "Clair Obscur", "E33"],
  shortDescription:
    "Sandfall Interactive turn-based RPG (April 24, 2025) — Belle Époque France-inspired dark fantasy with reactive real-time combat (parry/dodge/QTE), heavy narrative + surreal painterly art. Critical + commercial breakout of 2025, 3.3M+ copies sold in 33 days.",
  longDescription:
    "Clair Obscur: Expedition 33 is a turn-based RPG developed by Sandfall Interactive (Montpellier, France) + published by Kepler Interactive, released April 24, 2025 for PC (Steam + Epic + Game Pass PC), PS5, Xbox Series X/S; Switch 2 version 2026. Set in a surreal Belle Époque France-inspired dark fantasy world where the god-like Paintress paints a number on a monolith each year, and everyone that age dies (Gommage). Each 'Expedition' is sent by the last city Lumière to kill her — Expedition 33 (the player party) attempts as the number counts down (currently 33). Party of 6-8 characters incl. Gustave, Lune, Maelle, Sciel, Verso, Monoco. Combat innovation: turn-based structure combined with active real-time defense (parry / dodge / jump / QTEs). Composer Lorien Testard's orchestral score (with soprano Alice Duport-Percier) has been widely praised. Sold 1M copies in 3 days (fastest RPG debut of decade for a new IP); 3.3M copies in 33 days per Kepler; won 2025 Game Awards for Best RPG + Best Narrative + Best Music + Game of the Year at multiple ceremonies. Considered the leading indie/AA JRPG-style breakout of 2025.",
  category: "video-games",
  subCategory: "turn-based JRPG with real-time defense",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Montpellier, Sandfall Interactive)",
  estimatedOrigin: "Announced Xbox Showcase Jun 2024; released Apr 24, 2025 (PC + PS5 + Xbox Series); Switch 2 2026",
  players: { min: 1, max: 1 },
  equipment: [{ name: "PC / PS5 / Xbox Series X/S / Game Pass", description: "Multi-platform digital + physical launch." }, { name: "Standard controller", description: "Parry/dodge timing benefits from controller." }],
  duration: { approximateMinutes: 2100, structure: "Main story ~35-40 hrs; 100% completion ~60-80 hrs." },
  objective: "Defeat the Paintress + save the world of Lumière across a narrative-driven expedition.",
  matchStructure: "Single-player narrative campaign; turn-based combat with active real-time defense.",
  basicRules: [
    { title: "Turn-based combat with real-time defense", body: "Attack in turn order; defend with real-time parry/dodge/jump/QTE inputs." },
    { title: "Party of 3 active + 3-5 reserve", body: "Rotate party members with distinct combat styles." },
    { title: "Pictos + Luminas (equipment + skill upgrades)", body: "Progression system via unique equipment cards + skill trees." },
  ],
  advancedRules: [
    { title: "Parry chain multiplier", body: "Successful parry chains extend + amplify counter damage." },
    { title: "Elemental + Status combos", body: "Combining party abilities creates elemental + status chains." },
    { title: "Boss patterns require memorization", body: "Bosses have long attack chains; success is pattern-recognition." },
  ],
  scoring: { summary: "Story progression + character level + achievements; no PvP." },
  positions: [{ name: "Gustave (protagonist)", role: "Party leader; balanced fighter." }, { name: "Maelle", role: "Apprentice fencer; agile." }, { name: "Lune", role: "Elemental spellcaster." }, { name: "Sciel", role: "Support + healer." }, { name: "Verso", role: "Late-game reveal character." }, { name: "Monoco", role: "Support NPC." }],
  governingBodies: [{ name: "Sandfall Interactive", founded: 2020, headquarters: "Montpellier, France" }, { name: "Kepler Interactive (publisher)", founded: 2021, headquarters: "London, UK" }],
  majorCompetitions: [{ name: "Speedrun.com Expedition 33", frequency: "ongoing", founded: 2025, region: "worldwide" }],
  famousAthletes: ["Guillaume Broche (Sandfall CEO + director)", "Lorien Testard (composer)", "Alice Duport-Percier (vocalist)"],
  records: [
    { title: "1M copies in 3 days launch", holder: "Sandfall / Kepler", value: "Clair Obscur: Expedition 33 sold 1M copies in 3 days post-launch (Apr 2025) — fastest new-IP RPG debut of decade", year: 2025 },
    { title: "3.3M copies in 33 days", holder: "Sandfall / Kepler", value: "3.3M copies sold in the first 33 days (fitting narrative gimmick)", year: 2025 },
    { title: "TGA 2025 Game of the Year candidate", holder: "Sandfall", value: "Widely nominated + won multiple 2025 Game Awards (Best RPG, Best Narrative, Best Music)", year: 2025 },
  ],
  variants: ["expedition-33-standard-edition", "expedition-33-collectors-edition"],
  relatedSports: ["persona-5", "final-fantasy-16", "sea-of-stars", "chained-echoes"],
  skills: ["turn-based tactics", "real-time parry timing", "party composition", "pattern recognition"],
  wikipediaTitle: "Clair Obscur: Expedition 33",
  sources: [{ label: "Wikipedia — Clair Obscur: Expedition 33", url: "https://en.wikipedia.org/wiki/Clair_Obscur:_Expedition_33", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default expedition33;
