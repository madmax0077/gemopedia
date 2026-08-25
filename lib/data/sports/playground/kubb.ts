import type { Sport } from "@/lib/types";

export const kubb: Sport = {
  id: "kubb",
  slug: "kubb",
  name: "Kubb",
  officialName: "Kubb",
  aliases: ["Viking Chess", "Vikingaschack"],
  shortDescription:
    "Swedish lawn game played with wooden BLOCKS (kubbs) + THROWING STICKS (kastpinnar). Objective: knock down all opponent's kubbs + finally the KING (larger central block). Also called 'VIKING CHESS'. Modern popularity dates to 1990s Gotland, Sweden. WORLD CHAMPIONSHIP annually in Rönneby, Sweden. Highly strategic + accessible.",
  longDescription:
    "Kubb (rhymes with 'tube') is SWEDISH LAWN GAME played with wooden BLOCKS (KUBBS, 6cm × 6cm × 15cm) + WOODEN THROWING STICKS (KASTPINNAR, ~30cm cylinders). Also called 'VIKING CHESS' due to Nordic heritage + strategic depth. Origins uncertain — some claim medieval Viking origin (unproven); MODERN POPULARITY dates to 1990s GOTLAND, SWEDEN where game was revived + spread rapidly. GAMEPLAY: Rectangular playing field ~5m × 8m; 10 KUBBS positioned in 2 baselines (5 each side); KING (larger central block ~30cm tall) at center. Each team gets 6 throwing sticks per round. OBJECTIVE: (1) THROW sticks from own baseline attempting to KNOCK DOWN opponent's baseline kubbs. (2) Fallen kubbs are TOSSED into opponent's half + set upright as 'FIELD KUBBS' — MUST BE KNOCKED DOWN BEFORE knocking baseline kubbs (creates strategic depth). (3) Once all opponent's kubbs down, KNOCK DOWN THE KING to win. (4) KNOCKING KING PREMATURELY (before all kubbs) = INSTANT LOSS. WORLD CHAMPIONSHIP annually in RÖNNEBY, SWEDEN (started 1995, called 'Kubb VM'). US KUBB CHAMPIONSHIP + national tournaments Sweden, Germany, USA, UK. Highly strategic (throwing accuracy + placement) + accessible (all ages). Popular BACKYARD + FESTIVAL game.",
  category: "playground-games",
  subCategory: "Swedish lawn throwing/knockdown game",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "summer",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden (Gotland — modern revival 1990s)",
  estimatedOrigin: "Claimed medieval Viking origin (unproven); modern revival Gotland 1990s; World Championship 1995",
  players: { min: 2, max: 12, note: "Typically 2v2 or 3v3; can be 1v1 up to 6v6." },
  field: { surfaceName: "grass or dirt lawn", dimensions: "5m × 8m rectangular field", description: "Rectangular field marked with 10 kubbs on each baseline + King at center." },
  equipment: [
    { name: "Kubb set (10 kubbs + 6 throwing sticks + 1 king + 4 corner markers)", description: "€30-100" },
    { name: "Traditional wooden Swedish set", description: "€60-200 hand-crafted" },
  ],
  duration: { approximateMinutes: 30, structure: "Games typically 15-60 min depending on skill." },
  objective: "Knock down all opponent's kubbs (baseline + field kubbs) THEN knock down the King.",
  basicRules: [
    { title: "10 kubbs on baselines (5 each side), King in center", body: "Field ~5m × 8m; 6 throwing sticks per team per round." },
    { title: "Take turns throwing sticks OVERHAND from own baseline", body: "UNDERHAND throws mandatory (rotating vertically end-over-end)." },
    { title: "Knocked-down opponent's kubbs → tossed into opponent's half + stood as FIELD KUBBS", body: "Field kubbs MUST be knocked down before baseline kubbs." },
    { title: "Once all opponent kubbs down, knock down KING to win", body: "Careful — knocking King prematurely = INSTANT LOSS." },
    { title: "Alternate rounds; strategy involves placement of field kubbs", body: "Advanced play requires tossing kubbs to strategic locations." },
  ],
  scoring: {
    summary: "Elimination-style — knock down all opponent's kubbs then King.",
    breakdown: [
      { action: "Knock down opponent's kubb", points: "Toss into opponent's half + set upright as field kubb" },
      { action: "Knock down opponent's King (after all kubbs)", points: "WIN" },
      { action: "Knock down opponent's King PREMATURELY", points: "INSTANT LOSS" },
    ],
    winCondition: "Knock down all opponent's kubbs + King (in that order).",
  },
  governingBodies: [
    { name: "Swedish Kubb Federation", founded: 1995, headquarters: "Rönneby, Sweden" },
    { name: "US National Kubb Championship", founded: 2007, headquarters: "Eau Claire, Wisconsin, USA" },
  ],
  majorCompetitions: [
    { name: "World Kubb Championship (Kubb VM)", frequency: "annual", founded: 1995, region: "Rönneby, Sweden" },
    { name: "US National Kubb Championship", frequency: "annual", founded: 2007, region: "Eau Claire, Wisconsin" },
    { name: "European Kubb Championships", frequency: "annual", founded: 2000, region: "Europe" },
  ],
  countriesPlayed: ["SE", "NO", "DK", "FI", "DE", "US", "UK", "AU", "NZ", "CA"],
  famousAthletes: [
    "Various Swedish Kubb World Champions (Gotland-based teams historically dominant)",
    "US teams from Eau Claire, Wisconsin — American kubb hub",
  ],
  variants: [
    "kubb-standard-5-vs-5-competitive",
    "kubb-3-vs-3-common-tournament",
    "kubb-1-vs-1-individual",
    "kubb-family-casual-any-team-size",
    "kubb-tournament-6-per-side-elimination",
  ],
  relatedSports: ["molkky", "horseshoes", "cornhole", "petanque", "bocce"],
  skills: ["throwing accuracy", "distance judgment", "strategy of field kubb placement", "team coordination"],
  strategies: [
    { title: "Field kubb placement critical — place strategically", body: "Toss kubbs to hard-to-hit angles for opponent." },
    { title: "Save King attempt for confident throws", body: "Premature King attempt = instant loss." },
    { title: "Balance offense (knocking down) vs defense (field kubb placement)", body: "Strategic depth." },
    { title: "Team coordination — communicate throwing order", body: "Sticks must be shared efficiently." },
  ],
  terminology: [
    { term: "Kubb (кубб)", meaning: "Wooden block; game name; plural 'kubbs'." },
    { term: "Kastpinnar", meaning: "Wooden throwing sticks (~30cm cylinders)." },
    { term: "King", meaning: "Larger central block; final target; premature strike = loss." },
    { term: "Field kubbs", meaning: "Tossed kubbs standing in opponent's half; must be knocked first." },
    { term: "Baseline", meaning: "5m line where kubbs originally stand + where throwers throw from." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Kubb set (Amazon $40-80) or Swedish traditional ($100+)", body: "Standard 10-kubb set with king." },
      { title: "Learn underhand throwing technique — sticks rotate vertically", body: "Illegal to spin horizontally." },
      { title: "Practice knocking baseline kubbs at ~5m", body: "Basic accuracy." },
    ]},
    { level: "intermediate", steps: [
      { title: "Learn field kubb placement strategy", body: "Where to toss for maximum difficulty." },
      { title: "Team play + tournament rules", body: "6v6 competitive format." },
    ]},
    { level: "advanced", steps: [
      { title: "Enter Swedish Kubb World Championship", body: "Annual Rönneby event." },
      { title: "US Kubb Championship (Eau Claire, Wisconsin)", body: "American national event." },
    ]},
  ],
  faq: [
    { question: "What is Kubb?", answer: "SWEDISH LAWN GAME played with wooden BLOCKS (kubbs) + THROWING STICKS (kastpinnar). Also called 'VIKING CHESS'. Objective: Knock down all opponent's kubbs (baseline + field kubbs) then knock down the KING. Modern revival dates to 1990s GOTLAND, SWEDEN. World Championship in Rönneby, Sweden annually. Highly strategic (throwing accuracy + field kubb placement) + accessible (all ages, quick learn). Popular BACKYARD + FESTIVAL game across Scandinavia, Germany, USA, UK." },
    { question: "How is Kubb different from Cornhole or Horseshoes?", answer: "SIMILAR CATEGORY of throwing/precision lawn games but DIFFERENT MECHANICS. KUBB uses WOODEN STICKS to knock down BLOCKS + FINAL KING; game ends with king strike. CORNHOLE uses BEAN BAGS thrown at HOLE in tilted board; scoring points. HORSESHOES throws HORSESHOES at STAKE; ringers score points. KUBB has DEEPER STRATEGY due to field kubb placement + King mechanic. All three are backyard/lawn games; different equipment + rules; all festive social." },
    { question: "Is Kubb really Viking?", answer: "CLAIMED but UNPROVEN. Some sources claim medieval VIKING ORIGIN (hence nickname 'Viking Chess'); no clear historical evidence traces game beyond ~19th century. MODERN POPULARITY dates definitively to 1990s GOTLAND, SWEDEN where game was revived. Whether authentically Viking or 19th-century Scandinavian folk game — MODERN KUBB is 1990s+ phenomenon. Rules formalized 1995 with founding of Kubb VM (World Championship). Cultural connection to Scandinavia is authentic even if Viking connection is romantic." },
  ],
  wikipediaTitle: "Kubb",
  sources: [
    { label: "Wikipedia — Kubb", url: "https://en.wikipedia.org/wiki/Kubb", publisher: "Wikipedia" },
    { label: "Kubb VM (World Championship)", url: "https://www.vmikubb.com/", publisher: "Kubb VM" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
