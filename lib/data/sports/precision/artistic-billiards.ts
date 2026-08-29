import type { Sport } from "@/lib/types";

export const artisticBilliards: Sport = {
  id: "artistic-billiards",
  slug: "artistic-billiards",
  name: "Artistic Billiards",
  officialName: "Artistic Billiards (UMB)",
  aliases: ["Trick Billiards", "Fantasia Classica", "Fancy Billiards"],
  shortDescription:
    "Carom billiards trick-shot discipline where competitors attempt 100 preset shots of increasing difficulty from a standardized catalog — each shot scored on completion; UMB World Championship since 1986; Belgium's Frédéric Caudron dominant.",
  longDescription:
    "Artistic Billiards is a carom billiards trick-shot competition where players attempt a standardized catalog of ~100 preset shots (each with a specific ball setup + goal + point value), ranging from 4-point elementary caroms to 11-point extreme trick shots. Competitors get 3 attempts per shot; successful completion earns the shot's full point value. Total possible score ~500 points. Codified by the UMB (Union Mondiale de Billard) with formal shot catalog in the 1980s, artistic billiards is contested at the UMB World Artistic Billiards Championship (biennial since 1986) and the World Games. The discipline blends the mechanical precision of carom billiards with the spectator appeal of trick shots — a marketable spectacle discipline compared to three-cushion. Belgium's Frédéric Caudron (5+ World Championships) is the modern dominant player; Xavier Fonellosa (Spain), Serdar Gümüş (Turkey), and Walter Bax (Belgium) are historic legends.",

  category: "precision-sports",
  subCategory: "carom billiards trick-shot discipline",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Belgium (1900s trick-shot traditions); UMB codification 1980s",
  estimatedOrigin: "Early 20th century trick shot traditions in French billiards halls; UMB formal catalog + championship 1986",

  players: { min: 2, max: 2, note: "1v1 head-to-head; also tournament individual scoring format (highest total wins)." },
  field: {
    surfaceName: "Carom billiards table (2.84m × 1.42m; pocketless)",
    dimensions: "2.84m × 1.42m; same as three-cushion / one-cushion table",
    description: "Standard carom table; shots specify exact ball positions relative to marked table points.",
  },
  equipment: [
    { name: "3 carom balls (2 cues + 1 red)", description: "Standard 61.5mm carom balls." },
    { name: "Cue stick", description: "Carom cue; some players use multiple cues for different shot types." },
    { name: "Chalk", description: "Applied liberally between shots." },
    { name: "Ball placement guides", description: "Referees use marked templates for exact ball positioning as per shot catalog." },
  ],
  duration: { approximateMinutes: 240, structure: "Standard tournament: attempt all 100 catalog shots — 4 hours total. Match format: head-to-head with predetermined shot list." },
  objective: "Score the highest total from successful preset shot attempts; head-to-head format wins more shots than opponent.",
  matchStructure: "Individual: attempt entire 100-shot catalog, highest total wins. Head-to-head: predetermined shot list, both attempt same shots, higher successful count wins.",

  basicRules: [
    { title: "100 preset shots", body: "UMB catalog contains ~100 shots with fixed ball positions + goal (single carom, double carom, kiss shot, jump shot, etc.)." },
    { title: "3 attempts per shot", body: "Player has 3 tries per shot; successful attempt earns full points, failure = 0." },
    { title: "Points 4-11 per shot", body: "Elementary shots worth 4 pts; extreme shots worth 8-11 pts. Total max ~500 pts." },
    { title: "Ball positioning by referee", body: "Referee places balls exactly per catalog specification; player has no setup input." },
    { title: "Shot order fixed", body: "Player attempts shots in catalog sequence (some tournaments allow player selection of order)." },
  ],
  advancedRules: [
    { title: "Massé shots (extreme cue spin)", body: "Highest-difficulty shots require massé (vertical cue elevation) creating extreme curve." },
    { title: "Jump shots", body: "Cue ball elevated to jump over intervening ball — requires precise elevation + power." },
    { title: "Multi-cushion shots", body: "Some shots require 5-7 cushion contacts before contacting balls." },
    { title: "Combination + kiss shots", body: "Ball-to-ball propagation shots requiring precise timing." },
  ],
  scoring: {
    summary: "Sum of successful shot values from catalog attempts.",
    winCondition: "Highest total score (individual) or most shots won (head-to-head).",
    breakdown: [
      { action: "4-point shot successful", points: "4" },
      { action: "6-point shot successful", points: "6" },
      { action: "8-point shot successful", points: "8" },
      { action: "10-11 point shot successful", points: "10 or 11" },
      { action: "Shot failed (all 3 attempts)", points: "0" },
    ],
  },
  penalties: [
    { title: "Ball movement outside shot", body: "Foul — attempt lost." },
    { title: "Cue miscue", body: "Attempt failed." },
    { title: "Illegal ball contact", body: "Attempt failed." },
  ],

  positions: [
    { name: "Player (solo attempts)", role: "Sole competitor; referee places balls; player attempts.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee (ball placement + shot judgment)", "Assistant referee", "Scorekeeper"],
    summary: "2-3 officials per player; ball placement precision requires expert referee.",
  },

  governingBodies: [
    { name: "Union Mondiale de Billard (UMB)", founded: 1959, headquarters: "Sint-Martens-Latem, Belgium", website: "https://www.umb-carom.org" },
    { name: "Confédération Européenne de Billard (CEB)", founded: 1958, headquarters: "Belgium" },
  ],
  majorCompetitions: [
    { name: "UMB World Artistic Billiards Championship", frequency: "biennial", founded: 1986, region: "worldwide (rotating hosts)" },
    { name: "European Artistic Billiards Championship", frequency: "biennial", founded: 1990, region: "Europe" },
    { name: "World Games (Artistic Billiards)", frequency: "quadrennial", founded: 1997, region: "worldwide (Wroclaw 2017, Chengdu 2025)" },
  ],
  countriesPlayed: ["BE", "ES", "TR", "NL", "FR", "IT", "DE", "SE", "KR", "JP", "MX", "US"],
  famousAthletes: [
    "Frédéric Caudron (Belgium — 5+ World Artistic Championships; carom multi-discipline great)",
    "Xavier Fonellosa (Spain — multiple World Artistic Championship medalist)",
    "Serdar Gümüş (Turkey — long-career artistic champion)",
    "Walter Bax (Belgium — historic pioneer of artistic billiards)",
    "Jean-Jacques Sarthou (France — multi-discipline carom champion)",
  ],
  records: [
    { title: "Most UMB World Artistic Championships", holder: "Frédéric Caudron (Belgium)", value: "5+ titles; modern era dominant player", year: 2023 },
    { title: "Highest single-championship score", holder: "Top pros at UMB Worlds", value: "~350-400/500 points at top tier; perfect score never achieved", year: 2022 },
    { title: "World Games inclusion since 1997", holder: "Artistic Billiards", value: "Contested at every World Games since Lahti 1997; part of core carom program", year: 2025 },
  ],

  variants: ["100-shot-catalog-standard", "50-shot-short-format", "head-to-head-match-format", "national-catalog-variants-brazil-japan"],
  relatedSports: ["three-cushion-billiards", "carom-billiards", "one-cushion-billiards", "balkline", "trick-shot-pool"],

  skills: ["massé (vertical elevation cue) technique", "extreme spin generation (english + draw + follow at max)", "jump shot execution", "shot catalog memorization (100 shots)", "under-pressure execution (3 attempts + audience)", "cue selection for shot type"],
  strategies: [
    { title: "Practice weak shots to full success", body: "A single missed shot loses 4-11 points; consistency > flash." },
    { title: "Order high-value shots strategically", body: "In player-choice order formats, attempt high-value shots early while fresh." },
    { title: "Reset between shots", body: "Long attempt cycles (100 shots over 4 hours) require mental reset routines between attempts." },
    { title: "Match cue to shot type", body: "Some players carry 2-3 cues — power cue for jump shots, precision cue for massé, standard for caroms." },
  ],

  terminology: [
    { term: "Massé", meaning: "Vertical cue elevation shot creating extreme curve." },
    { term: "Jump shot", meaning: "Cue ball elevated to jump over intervening ball." },
    { term: "Kiss shot", meaning: "Ball-to-ball propagation shot." },
    { term: "Catalog", meaning: "UMB standardized 100-shot list defining artistic tournament content." },
    { term: "Placement", meaning: "Exact ball position specified by catalog + placed by referee." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master standard carom fundamentals first", body: "Straight carom + one-cushion foundation required; artistic is a specialty on top." },
      { title: "Study UMB shot catalog videos", body: "YouTube archives of UMB World Artistic Championships teach shot technique." },
      { title: "Practice basic massé + jump shots", body: "Extreme cue elevation shots require dedicated practice; start with low-difficulty catalog shots." },
    ]},
    { level: "advanced", steps: [
      { title: "Enter national artistic championships", body: "Belgium, Spain, Turkey, France, Netherlands host annual artistic events." },
      { title: "UMB World Artistic Championship qualification", body: "Via national federation quota; ~40 international competitors per edition." },
      { title: "World Games artistic billiards", body: "Every 4 years; artistic + three-cushion contested." },
    ]},
  ],

  faq: [
    { question: "How is artistic billiards different from trick shots?", answer: "Trick shots are informal spectacle shots without standardized rules. Artistic billiards is the codified competitive form — UMB defines exactly 100 preset shots with fixed ball positions + goal + point value. Every player attempts the same catalog, making comparison objective. Trick shots for entertainment + YouTube content are separate from artistic billiards competition." },
    { question: "How does someone learn 100 catalog shots?", answer: "The UMB shot catalog is publicly available; competitive players spend years drilling each shot until high-consistency execution. Top players achieve 70-80% success rates across the full catalog. Weak shots are practiced most until performance stabilizes." },
    { question: "Is artistic billiards popular outside Europe?", answer: "Belgium + Spain + Turkey are historic strongholds; Korea + Japan have growing scenes. USA + Latin America have limited artistic scenes but strong casual trick-shot culture. Total worldwide competitive base is small (~500 serious competitors) but the World Games spotlight raises awareness." },
  ],

  wikipediaTitle: "Artistic billiards",
  sources: [
    { label: "UMB", url: "https://www.umb-carom.org", publisher: "Union Mondiale de Billard" },
    { label: "Wikipedia — Artistic billiards", url: "https://en.wikipedia.org/wiki/Artistic_billiards", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
