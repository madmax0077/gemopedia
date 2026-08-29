import type { Sport } from "@/lib/types";

export const shinMegamiTenseiV: Sport = {
  id: "shin-megami-tensei-v",
  slug: "shin-megami-tensei-v",
  name: "Shin Megami Tensei V",
  officialName: "Shin Megami Tensei V (真・女神転生V) / SMT V: Vengeance",
  aliases: ["SMT V", "SMT5", "SMTVV"],
  shortDescription:
    "Fifth mainline Shin Megami Tensei JRPG (Atlus + Sega, Nov 12, 2021 Switch original; June 14, 2024 SMT V: Vengeance PS5/Xbox/PC/Switch) — high school student summons demons in post-apocalyptic Da'at Tokyo. Trademark morally-grey Law/Chaos alignment; hardest mainline SMT.",
  longDescription:
    "Shin Megami Tensei V is the fifth mainline entry in Atlus's Shin Megami Tensei series (the parent franchise to Persona spinoffs) — developed by Atlus P-Studio + published by Sega. Original released November 12, 2021 as Nintendo Switch exclusive. 'Shin Megami Tensei V: Vengeance' expanded remaster released June 14, 2024 for PS5, PS4, Xbox Series X|S, Xbox One, PC, and Switch — adding new second route (Vengeance route parallel to Canon of Creation route), voiced protagonist, expanded demons + skills, quality-of-life upgrades. Story: Tokyo high school student thrust into Da'at (post-apocalyptic angel/demon-invaded Tokyo); fuses with Aogami to become Nahobino. Combat: turn-based Press Turn system (weakness hits + criticals grant extra turns; misses drain turns). Trademark Law/Chaos/Neutral alignment endings. Hardest mainline SMT to date — Magatsuhi Skills + demon negotiation + skill inheritance are core to survival.",
  category: "video-games",
  subCategory: "traditional JRPG (SMT dark theology)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Atlus P-Studio Tokyo)",
  estimatedOrigin: "Original Switch Nov 12, 2021; Vengeance expanded remaster June 14, 2024",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "PS5/PS4, Xbox Series/One, PC, Switch (Vengeance)", description: "Vengeance is multi-platform; original 2021 was Switch-exclusive." },
    { name: "Standard controller or M+KB (PC)", description: "Turn-based combat with any input." },
  ],
  duration: { approximateMinutes: 50, structure: "Main story 50-70 hrs; Vengeance route + Canon route separately playable ~50 hrs each; 100% ~150 hrs." },
  objective: "Guide the Nahobino through Da'at Tokyo; align with Law/Chaos/Neutral to shape final ending (multiple endings).",
  matchStructure: "Single-player open-region JRPG with Press Turn combat + demon negotiation + fusion.",
  basicRules: [
    { title: "Press Turn combat system", body: "Actions grant/consume 'turn icons'; weakness/crit = extra icon; miss = lose 2 icons." },
    { title: "Demon negotiation", body: "Talk to demons in battle; recruit via dialogue + gift-giving." },
    { title: "Demon fusion in World of Shadows", body: "Combine two demons into new one; carry-over skills strategy critical." },
  ],
  advancedRules: [
    { title: "Magatsuhi Skills (Miracles)", body: "Charge Magatsuhi gauge for character/demon special mega-attacks." },
    { title: "Alignment endings (Law/Chaos/Neutral)", body: "Player choices during story shape ending alignment; multiple runs required for all endings." },
    { title: "Vengeance route alternate storyline", body: "SMT V: Vengeance adds parallel Vengeance route featuring Yoko Hiromine + new characters." },
  ],
  scoring: {
    summary: "Story completion + all alignments seen + Compendium 100% + Magatsuhi Skills mastered.",
    winCondition: "Complete any of 5 endings; 100% = all 5 endings + Compendium + all Magatsuhi Skills.",
    breakdown: [{ action: "Ending unlock", points: "1 of 5 alignments" }],
  },
  penalties: [
    { title: "Game Over (protagonist HP 0)", body: "Reload autosave; demon deaths do not trigger Game Over unless protagonist falls." },
    { title: "Failed negotiation loss", body: "Wasted turn + macca/gems given to demon." },
  ],
  positions: [{ name: "Nahobino (Protagonist + Aogami)", role: "Fused human/god main character.", count: 1 }],
  officiating: { officials: ["Speedrun.com moderators"], summary: "Single-player only." },
  governingBodies: [
    { name: "Sega Sammy Holdings", founded: 1960, headquarters: "Tokyo, Japan" },
    { name: "Atlus P-Studio", founded: 1986, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com SMT V + Vengeance leaderboards", frequency: "ongoing", founded: 2021, region: "global (community)" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "KR", "AU", "BR"],
  famousAthletes: ["Community speedrunners establishing Law/Chaos/Neutral route WRs"],
  records: [
    { title: "First mainline SMT on Switch", holder: "Atlus / Sega", value: "Original 2021 launch was first mainline SMT on Nintendo Switch", year: 2021 },
    { title: "Vengeance multi-platform expansion", holder: "Atlus / Sega", value: "SMT V: Vengeance (June 14, 2024) added PS5/Xbox/PC + parallel Vengeance route", year: 2024 },
  ],
  variants: ["shin-megami-tensei-v-original-switch", "shin-megami-tensei-v-vengeance-multi-platform"],
  relatedSports: ["persona-3-reload", "persona-5", "shin-megami-tensei-iv"],
  skills: ["Press Turn optimisation", "demon fusion", "negotiation dialogue", "alignment planning"],
  strategies: [
    { title: "Press Turn extra-icon farming", body: "Chain weakness/crit hits to double/triple turn count per round." },
    { title: "Skill inheritance during fusion", body: "Carry critical skills (Magatsuhi charging, healing) across fusions." },
    { title: "Alignment lock timing", body: "Note story point where alignment locks; save before decision to unlock all endings." },
  ],
  terminology: [
    { term: "Nahobino", meaning: "Fused human + Aogami protagonist form" },
    { term: "Da'at", meaning: "Post-apocalyptic Tokyo setting" },
    { term: "Press Turn", meaning: "Turn-icon combat system" },
    { term: "Magatsuhi", meaning: "Super gauge for Miracle attacks" },
    { term: "Compendium", meaning: "Demon collection registry" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First region + basic Press Turn", body: "Learn Press Turn mechanic, first demon fusions, negotiation basics." }] },
    { level: "intermediate", steps: [{ title: "Alignment choices + endings", body: "Play through main story making alignment decisions; unlock initial endings." }] },
    { level: "advanced", steps: [{ title: "All endings + Vengeance route + 100%", body: "Complete Canon of Creation + Vengeance routes; unlock all 5 endings + fill Compendium." }] },
  ],
  faq: [
    { question: "Is SMT V connected to Persona series?", answer: "Same publisher (Atlus + Sega) and shared design elements (demon fusion, Persona of course originating from SMT). SMT V has NO story connection to Persona 3/4/5; standalone." },
    { question: "Should I play original SMT V or Vengeance?", answer: "Vengeance (2024) is the definitive version — adds Vengeance route, expanded content, multi-platform, and QoL improvements. Original Switch version is superseded." },
  ],
  wikipediaTitle: "Shin Megami Tensei V",
  sources: [{ label: "Wikipedia — Shin Megami Tensei V", url: "https://en.wikipedia.org/wiki/Shin_Megami_Tensei_V", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default shinMegamiTenseiV;
