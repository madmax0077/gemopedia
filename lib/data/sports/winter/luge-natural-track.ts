import type { Sport } from "@/lib/types";

export const lugeNaturalTrack: Sport = {
  id: "luge-natural-track",
  slug: "luge-natural-track",
  name: "Natural Track Luge (Naturbahn)",
  officialName: "FIL Natural Track Luge (Naturbahnrodeln)",
  aliases: ["Naturbahn luge", "Naturbahnrodeln"],
  shortDescription:
    "Winter sledding on iced-in mountain roads or hiking paths — no artificial refrigeration or banked walls unlike artificial-track luge. FIL-governed with World Championships since 1979. Strong tradition in Austria, Italy, Germany, Russia; features hairpin turns steered by reins + spikes.",
  longDescription:
    "Natural Track Luge (Naturbahn) is winter sledding on iced-in mountain roads or hiking paths — distinct from Olympic artificial-track luge which uses refrigerated banked concrete tracks. No banked walls: athletes navigate hairpin turns by pulling reins attached to steel runners + dragging hobnailed boots for braking. Tracks 800-1500m long. Three disciplines: men's single, women's single, doubles. Each competitor takes 4 runs across 2 days; combined time determines winner. Strong tradition in Austria, Italy, Germany, Russia. Governed by Fédération Internationale de Luge de Course (FIL, HQ Berchtesgaden Germany) with World Championships biennial since 1979 + annual World Cup circuit since 1992. Not currently Olympic despite petitioning since the 2000s; only artificial-track luge is Olympic (since 1964).",
  category: "winter-sports",
  subCategory: "sledding (natural iced track)",
  sportType: "mixed",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austrian Alps (Tyrol)",
  estimatedOrigin: "Origins in Alpine sledding traditions; formalised late 19th century; FIL Naturbahn World Championships since 1979",
  players: { min: 1, max: 2, note: "Solo singles or 2-person doubles." },
  equipment: [
    { name: "Natural-track luge sled", description: "Wooden or composite base with 2 steel runners; reins for steering; max weight ~15 kg singles, 20 kg doubles." },
    { name: "Hobnailed boots (spikes)", description: "Braking + steering aid — hobnails on toe drag into ice." },
    { name: "Speed suit (Lycra)", description: "Aerodynamic thin suit worn under jacket." },
    { name: "Helmet + face shield", description: "Certified helmet with clear visor for ice-spray protection." },
  ],
  duration: { approximateMinutes: 1, structure: "Single run 40-90 sec; 4 runs per athlete across 2 days." },
  objective: "Achieve fastest combined 4-run time down natural iced track.",
  matchStructure: "Three disciplines: men's single, women's single, doubles. 4 runs across 2 days; combined time wins.",
  basicRules: [
    { title: "Feet-first supine position", body: "Athletes lie on back with feet forward for aerodynamics + steering leverage." },
    { title: "Steer via reins + spikes", body: "Pull reins attached to runners; drag hobnailed boot spikes for braking/steering." },
    { title: "4-run cumulative time", body: "4 runs across 2 days; fastest total wins." },
  ],
  advancedRules: [
    { title: "Runner temperature limit", body: "Runners must be within 5°C of ambient temp — heat-tuning is banned; DQ if violated." },
    { title: "Sled weight limit", body: "Max 15 kg singles, 20 kg doubles." },
    { title: "Pre-race walk-down inspection", body: "Athletes walk track pre-race to memorise ice conditions + rut lines." },
  ],
  scoring: {
    summary: "Combined time of 4 runs; fastest wins. Time penalties added for missed gates or protection violations.",
    winCondition: "Fastest combined 4-run time.",
    breakdown: [
      { action: "Fast run", points: "Time counted toward 4-run total" },
      { action: "Missed gate", points: "Time penalty added or run invalidated" },
    ],
  },
  penalties: [
    { title: "Sled weight over spec", body: "Disqualification from run." },
    { title: "Illegal runner temperature", body: "DQ if heat-tuning detected." },
    { title: "Missed gate", body: "Time penalty added or run invalidated." },
  ],
  positions: [{ name: "Luger (Naturbahn)", role: "Single rider or doubles pair steering sled down natural iced track.", count: 1 }],
  officiating: {
    officials: ["FIL Race Director", "Track Referee", "Timing Judges (electronic)", "Sled Scrutineer"],
    summary: "Electronic timing to 1/1000 second; scrutineer weighs sled + measures runners pre-race.",
  },
  governingBodies: [{ name: "Fédération Internationale de Luge de Course (FIL)", founded: 1957, headquarters: "Berchtesgaden, Germany" }],
  majorCompetitions: [
    { name: "FIL Natural Track World Championships", frequency: "biennial", founded: 1979, region: "global (Austria, Italy, Germany, Russia)" },
    { name: "FIL Natural Track World Cup", frequency: "annual (5-7 stops)", founded: 1992, region: "Europe" },
    { name: "European Championships (Naturbahn)", frequency: "biennial", founded: 1970, region: "Europe" },
  ],
  countriesPlayed: ["AT", "IT", "DE", "RU", "SI", "PL", "CZ", "US", "CA"],
  famousAthletes: [
    "Gerhard Pilz (Austria) — multi-time World Champion in singles + doubles across 1980s-90s",
    "Various Austrian + Italian federation champions",
  ],
  records: [
    { title: "Most World Championship medals", holder: "Gerhard Pilz (Austria)", value: "Multi-time World Champion in singles + doubles across 1980s-90s", year: 1990 },
    { title: "Most successful nation", holder: "Austria + Italy", value: "Dominant natural-track federations", year: 2024 },
  ],
  variants: ["mens-singles-naturbahn", "womens-singles-naturbahn", "doubles-naturbahn"],
  relatedSports: ["luge", "skeleton", "bobsleigh"],
  skills: ["rein steering", "spike braking", "ice reading", "aerodynamic tuck"],
  strategies: [
    { title: "Late-apex hairpin line", body: "Brake early with spikes, apex late, accelerate through exit." },
    { title: "Aerodynamic tuck between corners", body: "Chin tucked, arms tight, feet-first prone position minimises drag." },
    { title: "Pre-inspection walk-down", body: "Athletes walk track pre-race to memorise ice conditions + rut lines." },
  ],
  terminology: [
    { term: "Naturbahn", meaning: "German for 'natural track'" },
    { term: "Rein", meaning: "Steering cord attached to sled runner" },
    { term: "Hobnail", meaning: "Steel spike on boot toe for braking" },
    { term: "Runner", meaning: "Steel blade under sled contacting ice" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Youth training + junior level", body: "Base sledding, rein steering, spike braking, track familiarity." }] },
    { level: "intermediate", steps: [{ title: "Junior/senior national circuit", body: "Line optimisation on hairpins, aerodynamic tuck, sled setup." }] },
    { level: "advanced", steps: [{ title: "World Cup / World Championship", body: "Sled tuning per track, pre-run inspection, mental preparation." }] },
  ],
  faq: [
    { question: "How is natural-track luge different from artificial-track luge?", answer: "Natural-track uses mountain roads/hiking paths iced by natural conditions with no banked walls — riders steer with reins + drag spikes. Artificial-track luge (Olympic) uses refrigerated banked tracks; luger steers by shifting body weight." },
    { question: "Is natural-track luge Olympic?", answer: "No — only artificial-track luge is Olympic (since 1964). Natural-track luge has been petitioning for inclusion since 2000s; still governed by FIL." },
  ],
  wikipediaTitle: "Luge natural track",
  sources: [{ label: "Wikipedia — Luge (natural track)", url: "https://en.wikipedia.org/wiki/Luge_natural_track", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default lugeNaturalTrack;
