import type { Sport } from "@/lib/types";

export const poleSport: Sport = {
  id: "pole-sport",
  slug: "pole-sport",
  name: "Pole Sport",
  officialName: "Pole Sports (IPSF)",
  aliases: ["Competitive Pole", "Pole Fitness", "Pole Athletics"],
  shortDescription:
    "Aerial athletic + acrobatic discipline performed on vertical rotating + static poles — competitive federation IPSF runs World Pole Sports Championships since 2012; categorised by age + gender + Pole Sports / Ultra Pole / Aerial Hoop / Aerial Silks. GAISF-recognised 2017; Olympic candidate.",
  longDescription:
    "Pole Sport is a competitive athletic + acrobatic discipline performed on vertical poles (typically 45 mm brass or 42/40 mm stainless steel; both static + spinning configurations). Athletes execute strength holds (planches, iron X), spins, climbs, drops, transitions, and aerial acrobatics on the pole while performing a choreographed routine to music. Distinct from pole dance (recreational/entertainment) — Pole Sport is codified with points-per-skill difficulty scoring similar to gymnastics. International Pole Sports Federation (IPSF) founded 2009 by Katie Coates + others; runs World Pole Sports Championships annually since 2012. GAISF (Global Association of International Sports Federations) recognised IPSF as observer member 2017 — significant step toward Olympic recognition. IPSF has been actively pursuing Olympic inclusion. Categories: Pole Sports (traditional discipline), Ultra Pole (competition-battle format), Aerial Hoop (lyra), Aerial Silks — all under IPSF umbrella. Sub-categories by age (Youth, Junior, Senior, Masters) + gender + amateur/elite. Scoring 100-point scale: Technical (60 pts) + Artistic (40 pts). Strong national federations in UK, USA, Russia, Australia, Japan, Netherlands, Italy.",
  category: "gymnastics",
  subCategory: "aerial pole (competitive)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "Global (IPSF UK-founded 2009)",
  estimatedOrigin: "IPSF founded 2009; World Pole Sports Championships since 2012; GAISF observer 2017",
  players: { min: 1, max: 4, note: "Solo, Doubles, Group (3-4) categories." },
  equipment: [
    { name: "Competition pole (45 mm brass / 42 mm stainless)", description: "IPSF-certified pole with static + spin configurations. Height ~3.5-4 m." },
    { name: "Grip aids", description: "Rosin, chalk, iTac grip aid; IPSF-regulated grip products only." },
    { name: "Costume + character concept", description: "Choreographed routine music + costume; Artistic score judges character portrayal." },
    { name: "Crash mats + safety spotter", description: "IPSF-certified crash mat below pole; safety spotter during dismount." },
  ],
  duration: { approximateMinutes: 5, structure: "Routine 3.5-4.5 min (age/category dependent); competition day 6-8 hrs." },
  objective: "Execute choreographed routine with maximum Technical (skill difficulty) + Artistic (choreography, execution, presentation) scores.",
  matchStructure: "Preliminary rounds (national qualifiers) → Continental Championships → World Championships. Each round: single routine judged 100 pts.",
  basicRules: [
    { title: "Routine duration 3.5-4.5 min", body: "Category-specific time limits; over-run = deductions." },
    { title: "Technical + Artistic score (60/40 split)", body: "Technical: skill difficulty + execution. Artistic: choreography + musicality + character portrayal." },
    { title: "Compulsory skills per category", body: "Each category has 3-5 compulsory skills (aerial invert, split, climb, spin) that must be included." },
  ],
  advancedRules: [
    { title: "Skill difficulty tiering", body: "Skills tiered A/B/C/D/E by difficulty; higher tiers score more Technical points." },
    { title: "Deductions for missed grip / falls", body: "Fall = 2-5 point deduction; missed grip on skill = 0.5-2 point deduction." },
    { title: "Ultra Pole battle format", body: "1v1 elimination format — 2 athletes trade freestyle rounds; audience + judge combined vote." },
  ],
  scoring: {
    summary: "Technical (60) + Artistic (40) = 100 max per routine.",
    winCondition: "Highest total score wins category.",
    breakdown: [{ action: "Technical routine score", points: "0-60 based on skill difficulty + execution" }, { action: "Artistic routine score", points: "0-40 based on choreography + musicality" }],
  },
  penalties: [
    { title: "Fall from pole", body: "2-5 point deduction per fall." },
    { title: "Missed compulsory skill", body: "Category-specific deduction." },
    { title: "Time overrun", body: "Deduction per second over limit." },
    { title: "Costume violation (IPSF codes)", body: "Point deduction." },
  ],
  positions: [
    { name: "Solo Pole Athlete", role: "Individual routine performer.", count: 1 },
    { name: "Doubles Pole Athletes", role: "Two-person synchronised routine.", count: 2 },
    { name: "Group Pole Athletes", role: "3-4 person group routine.", count: 4 },
  ],
  officiating: { officials: ["IPSF-certified Technical Judges (3-5)", "IPSF-certified Artistic Judges (2-3)", "Head Judge", "Timekeeper"], summary: "IPSF-certified judges score Technical + Artistic components separately." },
  governingBodies: [
    { name: "International Pole Sports Federation (IPSF)", founded: 2009, headquarters: "London, UK" },
    { name: "British Pole Sports (national federation)", founded: 2009, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "IPSF World Pole Sports Championships", frequency: "annual", founded: 2012, region: "worldwide" },
    { name: "IPSF Continental Championships (Europe / Americas / Asia-Pacific)", frequency: "annual", founded: 2013, region: "continental" },
    { name: "Pole Theatre (recreational + performance)", frequency: "annual multi-city", founded: 2014, region: "worldwide" },
  ],
  countriesPlayed: ["GB", "US", "RU", "AU", "JP", "NL", "IT", "DE", "FR", "BR", "CA"],
  famousAthletes: ["Katie Coates (GB) — IPSF co-founder", "Anastasia Skukhtorova (RUS) — multi-time World Champion", "Bendik Nordmoen (NOR)", "Marion Crampe (FR)"],
  records: [
    { title: "First WC 2012", holder: "IPSF", value: "Inaugural IPSF World Pole Sports Championships held 2012", year: 2012 },
    { title: "GAISF observer 2017", holder: "GAISF", value: "IPSF granted GAISF observer status 2017 — key step toward Olympic recognition", year: 2017 },
  ],
  variants: ["pole-sports-solo", "pole-sports-doubles", "pole-sports-group", "ultra-pole-battle", "aerial-hoop", "aerial-silks"],
  relatedSports: ["aerial-silks", "acrobatic-gymnastics", "artistic-gymnastics", "rhythmic-gymnastics"],
  skills: ["upper-body + grip strength", "aerial inversion control", "flexibility + splits", "musicality + choreography", "trick execution + landing"],
  strategies: [
    { title: "Compulsory-skills-first routine design", body: "Choreograph compulsory skills into early routine; save signature high-difficulty skills for climax." },
    { title: "Grip management for full routine", body: "Excess grip aid causes slip; too little causes drop — practice grip consistency across 4-min routine." },
    { title: "Character + musicality for Artistic score", body: "Strong character concept + musical phrasing = 5-10 extra Artistic points vs weak concept." },
  ],
  terminology: [
    { term: "Static / Spin pole", meaning: "Fixed vs rotating pole configurations" },
    { term: "Invert", meaning: "Upside-down aerial position on pole" },
    { term: "Iron X", meaning: "Advanced strength hold with body horizontal to pole" },
    { term: "Ultra Pole", meaning: "IPSF's 1v1 battle format" },
    { term: "Compulsories", meaning: "Required skills per category" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic climb + spin + invert", body: "Learn pole climb, basic spins, first invert positions." }] },
    { level: "intermediate", steps: [{ title: "Amateur competition routines", body: "Compete in IPSF national amateur categories." }] },
    { level: "advanced", steps: [{ title: "IPSF Elite Senior / World Championships", body: "Compete at IPSF World Pole Sports Championships elite category." }] },
  ],
  faq: [
    { question: "How is Pole Sport different from pole dance?", answer: "Pole Sport is a codified athletic discipline with skill-difficulty scoring similar to gymnastics — governed by IPSF, judged on Technical + Artistic components. Pole dance is broader recreational/entertainment practice without formal competition scoring. Many athletes practice both." },
    { question: "Will Pole Sport be in the Olympics?", answer: "Not currently on Olympic programme, but IPSF has been actively pursuing recognition since 2017 GAISF observer status. Olympic inclusion is possible in a future cycle but not confirmed." },
  ],
  wikipediaTitle: "Pole sports",
  sources: [{ label: "Wikipedia — Pole sports", url: "https://en.wikipedia.org/wiki/Pole_sports", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default poleSport;
