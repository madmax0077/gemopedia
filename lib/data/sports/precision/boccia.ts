import type { Sport } from "@/lib/types";

export const boccia: Sport = {
  id: "boccia",
  slug: "boccia",
  name: "Boccia",
  officialName: "Boccia (Boccia International Sports Federation)",
  aliases: ["Boccia Paralympic", "Adapted Bocce", "BC1-BC4"],
  shortDescription:
    "Paralympic precision ball sport for athletes with severe physical disabilities — roll, throw, or use assistive ramp to launch balls closer to a target 'jack' than opponent; contested at Paralympic Games since New York 1984.",
  longDescription:
    "Boccia is a Paralympic precision ball sport designed for athletes with severe physical disabilities (originally cerebral palsy; now includes muscular dystrophy, spinal cord injury, and other conditions). Adapted from Italian bocce, it debuted at the New York/Stoke Mandeville Paralympics in 1984. Players roll, throw, or (for those with more severe disabilities) use a ramp with an assistant to launch six colored balls toward a target 'jack' (white ball). The team/player whose balls are closest to the jack scores. Boccia is one of two Paralympic sports (with goalball) that has no Olympic counterpart. Athletes are classified into four sport classes: BC1 (throw + kick with help of assistant); BC2 (throw with no assistance); BC3 (use assistive ramp with sport assistant); BC4 (non-cerebral-palsy disabilities). Portugal, Brazil, South Korea, Thailand, and Great Britain dominate historically. The Boccia International Sports Federation (BISFed) governs; World Championships biennial; World Cup annual. Elite athletes: Adriana de Souza (Brazil, multiple Paralympic golds), David Smith (GB, 4× Paralympic champion), Ye Jin-yong (Korea, multiple Paralympic medals).",

  category: "precision-sports",
  subCategory: "Paralympic precision ball sport / adapted bocce",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "IT",
  regionOfOrigin: "Ancient Italian bocce; adapted for disability sport 1970s Denmark + Portugal; Paralympic debut 1984",
  estimatedOrigin: "Adapted from Italian bocce; adaptation for disability sport 1970s Scandinavia + Portugal; Paralympic debut New York/Stoke Mandeville 1984",

  players: { min: 1, max: 3, note: "Individual (1v1), pairs (2v2), or teams (3v3) formats." },
  field: {
    surfaceName: "Indoor court — smooth wooden or plastic surface",
    dimensions: "12.5 m × 6 m court; throwing box 2.5 m × 1 m at one end",
    description: "Standardized indoor court with smooth surface (usually wood or hard rubber); throwing lines marked; V-shaped end where jack must be placed.",
  },
  equipment: [
    { name: "Boccia balls", description: "6 colored balls per side (red or blue) + 1 white 'jack' target ball. Balls are leather with cork center; ~275g each (competition regulation)." },
    { name: "Assistive ramp (BC3)", description: "Rollable ramp used by BC3 players; athlete directs ramp orientation, assistant releases ball. Ramp cannot exceed 2.5 m length." },
    { name: "Sport assistant (BC1 + BC3)", description: "For BC1: helps player position, retrieves balls. For BC3: operates ramp under athlete's direction (no independent decisions)." },
    { name: "Wheelchair", description: "Sport wheelchair; must meet BISFed specifications; padding + strapping allowed for stability." },
    { name: "Head pointer / mouth stick (BC3)", description: "Some BC3 players use head-mounted pointer or mouth stick to release ball from ramp." },
    { name: "Team uniform", description: "Numbered jersey with national colors + BISFed-approved cut." },
  ],
  duration: {
    approximateMinutes: 40,
    structure: "Individual match: 4 ends × 6 minutes per end = ~30-40 min. Pairs: 4 ends. Teams: 6 ends. Ties broken by extra 'tiebreaker end'.",
  },
  objective:
    "Score more points than opponent by placing your colored balls closer to the white jack than any of your opponent's balls. Each 'end' scores points; multiple ends per match.",
  matchStructure:
    "Each match has 4 (or 6) ends. Each end starts with a jack throw (alternating team). Teams alternate throws until all 6 balls are played. End scores: 1 point per closest ball to jack (if closest is your team's, count consecutive closest balls). Highest total after all ends wins.",

  basicRules: [
    { title: "6 balls per side per end", body: "Each team has 6 balls per end (BC1-BC3 individual: 6 balls; pairs: 3 per player; teams: 2 per player)." },
    { title: "Jack placement", body: "Start of end: team designated for that end throws white jack ball into playing area (must land in valid zone)." },
    { title: "Alternating throws", body: "Teams alternate throwing until both have played all 6 balls (or ball lands out of court)." },
    { title: "Score by closest balls", body: "End score: 1 point for closest ball to jack. If closest ball is your team's, count all consecutive-closest balls (multiple points possible per end)." },
    { title: "6-minute-per-end time limit", body: "Each team has 6 minutes per end to make all throws; time runs when throwing." },
    { title: "Balls displacing others", body: "Legal to knock opponent's balls or the jack; all balls stay where they end up." },
    { title: "Out-of-bounds balls", body: "Ball leaving court doesn't count for scoring; can be replayed depending on rule specifics." },
    { title: "Classification-specific rules", body: "BC1-BC4 classifications: BC1 uses assistant for retrieval; BC3 uses ramp + assistant for release; BC2 + BC4 fully independent." },
  ],
  advancedRules: [
    { title: "Ramp orientation (BC3)", body: "BC3 athlete directs assistant to position ramp (angle, elevation) via head/mouth signals; assistant must not make independent tactical decisions." },
    { title: "Team format (3v3)", body: "Each team has 3 players + 2 balls per player. Coordinated strategy: 1 defender, 1 shooter, 1 all-rounder often." },
    { title: "Tiebreaker end", body: "If match tied after regulation ends: 1 additional end played; jack thrown into designated tiebreaker zone." },
    { title: "Sport class integration", body: "Individual + pairs events grouped by classification (BC1, BC2, BC3, BC4); team events sometimes integrated across classes." },
    { title: "Replacement + substitution", body: "Substitutions allowed within end (BC1 + BC2); BC3 assistant may not be substituted mid-match." },
    { title: "Coach box + coaching signals", body: "Coach may signal from designated area but not touch players or equipment during play." },
  ],
  scoring: {
    summary: "1 point per closest ball to jack; consecutive closest balls all score. Highest total across all ends wins.",
    winCondition: "Highest total points after all ends. Ties broken by tiebreaker end.",
    breakdown: [
      { action: "Ball closest to jack", points: "1 pt to that team" },
      { action: "Additional consecutive-closest balls", points: "+1 pt each (multiple points possible per end)" },
      { action: "End total", points: "Sum of all scored points that end" },
      { action: "Match total", points: "Sum across all ends" },
      { action: "Tiebreaker end", points: "If tied, one additional end decides" },
    ],
  },
  penalties: [
    { title: "Delay of game (exceeding time limit)", body: "Warning first; forfeited throw if repeated." },
    { title: "Illegal assistant action", body: "BC3: assistant making independent decisions or shifting ramp beyond athlete's direction = forfeit." },
    { title: "Coach interference", body: "Warning; repeated = penalty against team." },
    { title: "Unsportsmanlike conduct", body: "Warning to DQ." },
    { title: "Illegal equipment (non-compliant ramp)", body: "Match forfeit." },
  ],

  positions: [
    { name: "Athlete (BC1)", role: "Throws or kicks ball; sport assistant helps position + retrieve.", count: 1 },
    { name: "Athlete (BC2)", role: "Throws ball independently; no sport assistant.", count: 1 },
    { name: "Athlete (BC3)", role: "Uses ramp + sport assistant; directs ramp orientation via signals.", count: 1 },
    { name: "Athlete (BC4)", role: "Throws independently; for non-cerebral-palsy disabilities.", count: 1 },
    { name: "Sport assistant (BC1 + BC3)", role: "BC1: retrieval + positioning. BC3: operates ramp under athlete direction.", count: 1 },
    { name: "Coach", role: "Team strategy + between-end advice; no touching players/equipment during play." },
  ],
  officiating: {
    officials: ["1 Referee (court)", "1 Line judge", "1 Timekeeper", "1 Scorer"],
    summary: "4-official system; referee controls end structure + ball placement decisions; line judge determines out-of-bounds; scorer + timekeeper handle stats.",
  },

  governingBodies: [
    { name: "Boccia International Sports Federation (BISFed)", founded: 2013, headquarters: "Nottingham, UK", website: "https://bisfed.com" },
    { name: "International Paralympic Committee (IPC)", founded: 1989, headquarters: "Bonn, Germany", website: "https://paralympic.org" },
    { name: "USA Boccia", founded: 2014, headquarters: "USA" },
    { name: "British Boccia", founded: 1996, headquarters: "Nottingham, UK" },
  ],
  majorCompetitions: [
    { name: "Paralympic Games (Boccia)", frequency: "quadrennial", founded: 1984, region: "worldwide" },
    { name: "BISFed World Boccia Championships", frequency: "biennial", founded: 1982, region: "worldwide" },
    { name: "BISFed Boccia World Cup", frequency: "annual", founded: 2013, region: "worldwide" },
    { name: "Continental Championships (Europe, Americas, Asia-Oceania)", frequency: "biennial", founded: 2000, region: "regional" },
  ],
  countriesPlayed: ["PT", "BR", "KR", "TH", "GB", "IE", "SP", "ES", "IT", "HK", "MY", "US", "AR", "AU", "CA", "GR"],
  famousAthletes: [
    "David Smith (GB — 4× Paralympic champion; sport's most-decorated player)",
    "Adriana de Souza (Brazil — multiple Paralympic golds; women's dominant)",
    "Ye Jin-yong (South Korea — Paralympic + World Championship medalist)",
    "Andreas Dias Martins (Portugal — multiple Paralympic medals)",
    "Watcharaphon Vongsa (Thailand — multiple Paralympic + World Championship medals)",
    "Karel Barbaix (Belgium — multiple Paralympic gold)",
    "Rachel Rodrigues (Brazil — Paralympic team gold)",
    "Ho Yuen Kei (Hong Kong — Paralympic medalist)",
    "José Carlos Chagas (Brazil — Paralympic + World Championship team medals)",
    "Marco Dispaltro (Canada — Paralympic bronze; long career)",
  ],
  records: [
    { title: "Most Paralympic Boccia gold medals", holder: "David Smith (GB)", value: "4 Paralympic golds (2008, 2012, 2016, 2020)", year: 2020 },
    { title: "Paralympic debut", holder: "New York/Stoke Mandeville 1984", value: "First Paralympic Games with Boccia medals", year: 1984 },
    { title: "Portugal dominance", holder: "Portugal national team", value: "Consistent Paralympic + World Championship medals since 1990s", year: 2020 },
    { title: "Brazil rise", holder: "Brazil national team", value: "Dominated Rio 2016 home Paralympics + continues 2020s", year: 2016 },
    { title: "Sport's growth", holder: "BISFed", value: "60+ member nations by 2023; growing globally", year: 2023 },
  ],

  variants: ["bisfed-boccia-standard", "individual-1v1", "pairs-2v2", "team-3v3", "bc1-bc4-classifications"],
  relatedSports: ["bocce", "lawn-bowls", "petanque", "curling", "shuffleboard"],

  skills: [
    "throwing/rolling accuracy (fine motor precision)",
    "spatial visualization (jack + balls positioning)",
    "tactical planning (which balls to target + block)",
    "consistency + repeatability",
    "assistant coordination (BC1 + BC3)",
    "mental focus + pressure management",
    "adaptive equipment mastery (BC3 ramp use)",
  ],
  strategies: [
    { title: "Defensive vs. offensive balls", body: "Some balls score close to jack (offensive); some block opponent access (defensive). Balance both roles per end." },
    { title: "Jack positioning", body: "First throw = jack. Placement creates game state. Central = symmetric; corner = one-side advantage." },
    { title: "Save last balls for high-impact plays", body: "Final balls in an end can be game-changers. Save your best positional balls for late in end." },
    { title: "Force displacement plays", body: "Aggressive throws can knock opponent's balls out of position; requires calculating angles + speeds." },
    { title: "Ramp precision (BC3)", body: "BC3 ramp positioning is decisive. Practice with assistant for micro-adjustments; small angle changes = large ball placement differences." },
    { title: "Team coordination (3v3)", body: "3 players per team; assign roles (1 shooter, 1 defender, 1 all-rounder). Coordinate ball order + strategy." },
    { title: "Study opponent tendencies", body: "Elite Boccia at Paralympic level = deep tactical chess. Study opponent tendencies + counter their patterns." },
  ],

  terminology: [
    { term: "Jack", meaning: "White target ball; players aim to land colored balls closest to it." },
    { term: "End", meaning: "Single round of play; each team throws all balls; end scored." },
    { term: "Set of 6", meaning: "Each team's set of 6 balls per end." },
    { term: "BC1", meaning: "Sport class: cerebral palsy with severe involvement; uses assistant for retrieval." },
    { term: "BC2", meaning: "Sport class: cerebral palsy with more independence; throws without assistant." },
    { term: "BC3", meaning: "Sport class: severe disability; uses ramp with assistant to release ball." },
    { term: "BC4", meaning: "Sport class: non-cerebral-palsy severe disability (muscular dystrophy, spinal cord)." },
    { term: "Sport assistant", meaning: "Person supporting BC1 + BC3 athletes; specific role varies by class." },
    { term: "Ramp", meaning: "Assistive device used by BC3 athletes to launch balls." },
    { term: "Displacement", meaning: "Ball knocking opponent's ball or jack; legal + often strategic." },
    { term: "BISFed", meaning: "Boccia International Sports Federation — world governing body (founded 2013)." },
    { term: "Sport class integration", meaning: "Grouping athletes for competition; some events combine multiple classes." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Contact national Paralympic Federation", body: "Every Paralympic nation has boccia development programs; welcome newcomers with all disability levels." },
      { title: "Try recreational boccia in Special Olympics + adaptive sports", body: "Special Olympics + community adaptive sports programs offer intro-level competition + coaching." },
      { title: "Get classification", body: "BISFed classifiers assess disability level + assign BC1-BC4 class; determines competition category." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at regional + national championships", body: "Once classified, enter regional tournaments; build ranking + technique." },
      { title: "Develop consistent throwing/rolling technique", body: "Practice daily; muscle memory + micro-adjustments critical for scoring." },
      { title: "Learn tactical strategy", body: "Study coaching videos + top player strategies; boccia is deeply tactical." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at BISFed World Cup + World Championships", body: "Global competition; rankings determine Paralympic squad selection." },
      { title: "Target Paralympic Games", body: "4-year Olympic cycle dedication; qualifying via World Championships + continental championships." },
      { title: "Cross-train with assistant (BC1 + BC3)", body: "Athlete + assistant partnership is core of BC1 + BC3 success; requires years of coordinated practice." },
    ] },
  ],

  faq: [
    { question: "What is Boccia?", answer: "A Paralympic precision ball sport designed for athletes with severe physical disabilities. Players roll, throw, or use assistive ramps to launch colored balls closer to a white 'jack' target than opponents. Adapted from Italian bocce, it debuted at the 1984 Paralympic Games (New York/Stoke Mandeville) and is one of two Paralympic sports (with goalball) that has no Olympic counterpart." },
    { question: "Who can play Boccia?", answer: "Boccia was originally designed for athletes with cerebral palsy; classification has expanded to include muscular dystrophy, spinal cord injury, and other disabilities. Athletes are classified into four sport classes: BC1 (cerebral palsy; throws + kicks with assistant help); BC2 (cerebral palsy; independent throwing); BC3 (severe disability; uses ramp with assistant); BC4 (non-cerebral-palsy disabilities; independent throwing)." },
    { question: "How is Boccia scored?", answer: "Each 'end' is scored separately. At end's conclusion: 1 point for the ball closest to the jack. If the closest ball is your team's, count all consecutive closest balls until an opponent's ball breaks the chain — multiple points possible per end. Highest total across all ends (4 or 6 depending on format) wins the match." },
    { question: "Is Boccia in the Olympics?", answer: "No — Boccia is EXCLUSIVELY a Paralympic sport. Along with goalball, it's one of two Paralympic sports without an Olympic counterpart. This makes it uniquely important to the Paralympic movement + athletes with severe disabilities. Sport has been Paralympic since 1984; growing globally with 60+ member nations." },
    { question: "Who is the greatest Boccia player?", answer: "David Smith (Great Britain) — 4× Paralympic champion (2008, 2012, 2016, 2020) in individual BC1. Also a World Championship multiple gold medalist. Considered the most-decorated Boccia player of all time. Contemporary women's greats include Adriana de Souza (Brazil, multiple Paralympic golds) and Rachel Rodrigues (Brazil, team gold)." },
    { question: "What is the assistive ramp (BC3)?", answer: "For BC3 athletes with severe disabilities (unable to independently throw), a ramp is used. The athlete directs their assistant to position the ramp (angle, elevation, orientation) via head signals, mouth stick, or verbal cues. The assistant then releases the ball down the ramp. Rule: the assistant must NOT make independent tactical decisions — they only execute the athlete's directions. Micro-adjustments in ramp positioning = decisive competitive differences." },
  ],

  wikipediaTitle: "Boccia",
  sources: [
    { label: "Boccia International Sports Federation (BISFed)", url: "https://bisfed.com", publisher: "BISFed" },
    { label: "Wikipedia — Boccia", url: "https://en.wikipedia.org/wiki/Boccia", publisher: "Wikipedia" },
    { label: "International Paralympic Committee — Boccia", url: "https://paralympic.org/boccia", publisher: "IPC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
