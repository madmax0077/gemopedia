import type { Sport } from "@/lib/types";

export const wheelchairTennis: Sport = {
  id: "wheelchair-tennis",
  slug: "wheelchair-tennis",
  name: "Wheelchair Tennis",
  officialName: "Wheelchair Tennis (International Tennis Federation - ITF)",
  aliases: ["ITF Wheelchair Tennis", "WCT"],
  shortDescription:
    "Paralympic racket sport — tennis played in specialized sport wheelchairs; only rule change from able-bodied tennis is 2-bounce rule; contested at Grand Slams (US Open, Australian Open, French Open, Wimbledon) + Paralympics since Barcelona 1992.",
  longDescription:
    "Wheelchair Tennis is a Paralympic racket sport — tennis played in specialized sport wheelchairs on standard tennis courts. Only rule change from able-bodied tennis: ball may bounce TWICE before return (versus once). Second bounce may be inside or outside court boundary. Invented in USA in 1976 by Brad Parks; became Paralympic sport at Barcelona 1992. ITF governs since 1998. Full inclusion at Grand Slams (US Open, Australian Open, French Open, Wimbledon) — contested alongside able-bodied Grand Slam events. Three divisions: Open (permanent lower-limb impairment) + Quad (permanent limitation in 3+ limbs, including racket-hand). Legendary players: Esther Vergeer (Netherlands — 470-match win streak; considered greatest ever), Shingo Kunieda (Japan — 28 Grand Slam singles + 4× Paralympic gold; men's GOAT), Diede de Groot (Netherlands — 2020 Golden Slam), Alfie Hewett (UK — 6× Grand Slam + Paralympic gold), Gordon Reid (UK — 2× Paralympic gold), Stéphane Houdet (France — 5× Grand Slam + Paralympic).",

  category: "racket-paddle-sports",
  subCategory: "paralympic racket sport — tennis in wheelchairs",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (Brad Parks 1976); Paralympic Barcelona 1992; ITF governs since 1998",
  estimatedOrigin: "Invented by Brad Parks USA 1976; International Wheelchair Tennis Federation 1988; Paralympic Barcelona 1992; full ITF integration 1998",

  players: { min: 1, max: 4, note: "Singles (1) + Doubles (2 per side); Quad Singles + Quad Doubles for athletes with 3-limb impairment." },
  field: {
    surfaceName: "Standard tennis court",
    dimensions: "ITF regulation: 23.77m × 8.23m singles; 10.97m wide doubles",
    description: "Standard tennis court dimensions; grass + clay + hard + carpet surfaces used at various events.",
  },
  equipment: [
    { name: "Sport wheelchair", description: "Purpose-built rigid frame; slanted rear wheels for tight turning + acceleration. Cost $3,000-$10,000." },
    { name: "Tennis racket", description: "Standard tennis racket; unmodified from able-bodied game." },
    { name: "Tennis balls (standard)", description: "Standard tennis balls; unchanged." },
    { name: "Athletic apparel", description: "Standard sport gear; players may wear compression sleeves + protective straps." },
    { name: "Anti-tip devices", description: "Small rear-wheel extensions preventing backward tips." },
  ],
  duration: { approximateMinutes: 90, structure: "Best of 3 sets typical; Grand Slam finals best of 3. Match duration: 60-180 min depending on level." },
  objective: "Win more sets than opponent by winning games by winning points.",
  matchStructure: "Standard tennis: 6-game sets; tiebreak at 6-6; best of 3 sets. Points: 15-30-40-game.",

  basicRules: [
    { title: "Same rules as able-bodied tennis EXCEPT 2-bounce rule", body: "Only rule change: ball may bounce TWICE before return." },
    { title: "Second bounce may be outside court", body: "Second bounce need not be within court boundaries." },
    { title: "Wheelchair is part of body", body: "Ball touching wheelchair = same as touching body." },
    { title: "Standard scoring", body: "15-30-40-game; 6-game sets; tiebreak at 6-6; best of 3 sets." },
    { title: "3 divisions", body: "Open (lower-limb impairment); Quad (3-limb impairment including racket-hand)." },
    { title: "Full Grand Slam integration", body: "Wheelchair events at all 4 Grand Slams; separate but same weekend as able-bodied events." },
  ],
  scoring: {
    summary: "Standard tennis scoring: points → games → sets → match. 2-bounce rule only change.",
    winCondition: "Best of 3 sets (or best of 5 for some men's Grand Slam finals).",
    breakdown: [
      { action: "Point", points: "15 → 30 → 40 → game" },
      { action: "Game", points: "6 games win set (2 games clear)" },
      { action: "Set", points: "Best of 3 typical; some finals best of 5" },
      { action: "Match", points: "First to win required sets" },
    ],
  },

  positions: [
    { name: "Player (singles)", role: "Solo competitor.", count: 1 },
    { name: "Doubles partner", role: "Team partner in doubles.", count: 1 },
    { name: "Coach", role: "Between-game advice + strategy." },
  ],
  officiating: {
    officials: ["Chair umpire", "Line judges (multiple)", "Net-cord judge"],
    summary: "Same officiating structure as able-bodied tennis; ITF-certified for international events.",
  },

  governingBodies: [
    { name: "International Tennis Federation (ITF)", founded: 1913, headquarters: "London, UK", website: "https://itftennis.com" },
    { name: "USTA Wheelchair Tennis", founded: 1980, headquarters: "USA" },
    { name: "LTA Wheelchair Tennis (UK)", founded: 1998, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "Summer Paralympic Games (Wheelchair Tennis)", frequency: "quadrennial", founded: 1992, region: "worldwide" },
    { name: "Wheelchair Tennis Grand Slams (US, Australian, French, Wimbledon Opens)", frequency: "annual (each of 4)", founded: 1998, region: "worldwide (progressive integration since 1990s)" },
    { name: "NEC Wheelchair Tennis Tour (ITF)", frequency: "annual", founded: 1992, region: "worldwide" },
    { name: "Wheelchair Tennis World Team Cup", frequency: "annual", founded: 1985, region: "worldwide" },
    { name: "Wheelchair Tennis Masters", frequency: "annual", founded: 1994, region: "worldwide" },
  ],
  countriesPlayed: ["NL", "JP", "GB", "FR", "US", "BE", "ES", "DE", "AT", "AR", "AU", "IL"],
  famousAthletes: [
    "Esther Vergeer (Netherlands — 470-match win streak; considered greatest ever wheelchair tennis player)",
    "Shingo Kunieda (Japan — 28 Grand Slam singles + 4× Paralympic gold; men's GOAT)",
    "Diede de Groot (Netherlands — 2020 Golden Slam + 20+ Grand Slam titles)",
    "Alfie Hewett (UK — 6× Grand Slam + Paralympic gold)",
    "Gordon Reid (UK — 2× Paralympic gold + multiple Grand Slam)",
    "Stéphane Houdet (France — 5× Grand Slam + Paralympic)",
    "Nicolas Peifer (France — Grand Slam titles)",
    "Yui Kamiji (Japan — women's Grand Slam multi-time)",
    "Michaël Jérémiasz (France — long career)",
    "Peter Norfolk (UK — Quad division dominant)",
  ],
  records: [
    { title: "Longest tennis winning streak", holder: "Esther Vergeer (Netherlands)", value: "470-match winning streak (2003-2013); considered greatest ever wheelchair tennis player", year: 2013 },
    { title: "Most men's Grand Slam singles wheelchair", holder: "Shingo Kunieda (Japan)", value: "28 Grand Slam singles + 4× Paralympic gold; men's GOAT", year: 2023 },
    { title: "Diede de Groot Golden Slam", holder: "Diede de Groot (Netherlands)", value: "2020 Golden Slam (all 4 Grand Slams + Paralympic gold in same year); one of tennis history's rare feats", year: 2020 },
    { title: "Paralympic debut", holder: "Barcelona 1992", value: "Full medal event debut", year: 1992 },
  ],

  variants: ["open-division-lower-limb-impairment", "quad-division-3-limb-impairment", "junior-wheelchair-tennis", "doubles-wheelchair-tennis"],
  relatedSports: ["tennis", "wheelchair-basketball", "wheelchair-rugby", "table-tennis"],

  skills: ["one-handed racket technique", "wheelchair mobility + positioning", "reading opponent + court coverage", "physical + mental endurance (long matches)", "shot placement + strategy"],

  terminology: [
    { term: "Wheelchair Tennis", meaning: "Tennis played in specialized sport wheelchairs." },
    { term: "2-bounce rule", meaning: "Only rule change from able-bodied tennis; ball may bounce twice before return." },
    { term: "Open division", meaning: "Athletes with lower-limb impairment; racket-hand function present." },
    { term: "Quad division", meaning: "Athletes with 3-limb impairment including racket-hand; racket may be strapped to hand." },
    { term: "ITF NEC Tour", meaning: "Annual international tour with 100+ tournaments." },
    { term: "Grand Slam", meaning: "US, Australian, French, Wimbledon Opens; all 4 include wheelchair events." },
    { term: "Esther Vergeer", meaning: "Dutch legend; 470-match win streak; greatest wheelchair tennis player ever." },
    { term: "Shingo Kunieda", meaning: "Japanese men's GOAT; 28 Grand Slam singles + 4× Paralympic gold." },
    { term: "Diede de Groot", meaning: "Dutch women's modern star; 2020 Golden Slam." },
  ],

  faq: [
    { question: "What is Wheelchair Tennis?", answer: "Paralympic racket sport — tennis played in specialized sport wheelchairs on standard tennis courts. Only rule change from able-bodied tennis: ball may bounce TWICE before return (versus once). Second bounce may be inside or outside court boundary. Invented in USA 1976 by Brad Parks; Paralympic since Barcelona 1992. Full inclusion at all 4 Grand Slams (US, Australian, French, Wimbledon)." },
    { question: "How does the 2-bounce rule work?", answer: "The only rule change from able-bodied tennis. Ball may bounce ONCE within court AND SECOND time anywhere (may bounce outside court). Player must strike ball before third bounce. This adaptation acknowledges the extra time needed to move wheelchair to ball. Otherwise all standard tennis rules apply — same court, scoring, points system, tiebreak, best of 3 sets format." },
    { question: "Who is the greatest wheelchair tennis player?", answer: "Multiple candidates: (1) Esther Vergeer (Netherlands) — 470-match win streak; considered greatest ever female tennis player (able-bodied or wheelchair); dominant 2000s-2010s. (2) Shingo Kunieda (Japan) — 28 Grand Slam singles + 4× Paralympic gold; men's GOAT. (3) Diede de Groot (Netherlands) — 2020 Golden Slam (all 4 Grand Slams + Paralympic gold same year); modern dominant." },
    { question: "Is Wheelchair Tennis in the Olympics?", answer: "No, but at every Summer Paralympics since Barcelona 1992. Full inclusion at all 4 Grand Slams — wheelchair events contested alongside able-bodied Grand Slam events in same venue same weekend. ITF NEC Wheelchair Tennis Tour is annual with 100+ tournaments worldwide." },
  ],

  wikipediaTitle: "Wheelchair tennis",
  sources: [{ label: "ITF Wheelchair Tennis", url: "https://itftennis.com/wheelchair", publisher: "ITF" }, { label: "Wikipedia — Wheelchair tennis", url: "https://en.wikipedia.org/wiki/Wheelchair_tennis", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
