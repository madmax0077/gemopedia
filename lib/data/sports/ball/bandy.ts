import type { Sport } from "@/lib/types";

export const bandy: Sport = {
  id: "bandy",
  slug: "bandy",
  name: "Bandy",
  officialName: "Bandy",
  aliases: ["Russian Hockey", "Field Bandy", "Rink Bandy"],
  shortDescription:
    "Winter team sport played on ICE with 11 players per team using sticks + BALL (not puck). Field size ~SOCCER PITCH. Ancient — direct ancestor of ice hockey. Massive popularity RUSSIA, SWEDEN, FINLAND, KAZAKHSTAN. World Championships since 1957. Traditional but declining in some regions.",
  longDescription:
    "Bandy is WINTER TEAM SPORT played on ICE with 11 PLAYERS PER TEAM using CURVED STICKS + SMALL BALL (not puck like ice hockey). Field size ~SOCCER PITCH (100m × 60m — much larger than ice hockey rink). Ancient origins — DIRECT ANCESTOR of MODERN ICE HOCKEY (bandy played in England 1800s; codified rules 1882). Sometimes called 'RUSSIAN HOCKEY'. MASSIVE POPULARITY: RUSSIA (bandy = huge — several thousand pro players), SWEDEN, FINLAND, KAZAKHSTAN. Smaller scenes NORWAY, US (Minneapolis), CANADA. GAMEPLAY: 11 field players + goalie per team. 2 halves × 45 min like soccer (matches match soccer duration + scale). Ball is small (~62g, orange colored). Goals ~3.5m wide × 2m high. Players wear skates + hockey-like equipment (helmets, shin pads). Corner kicks, free-hits, offsides — similar structure to SOCCER + hockey hybrid. Considered ORIGINAL FORM of ice hockey. Ice hockey grew from indoor rink adaptation (smaller field, no offside, puck instead of ball) but bandy remains traditional 'field on ice' form. FIB (Federation of International Bandy) governs. WORLD CHAMPIONSHIPS since 1957. Also RINK BANDY = smaller-court version resembling ice hockey. Popular winter tradition in cold climates.",
  category: "ball-sports",
  subCategory: "traditional winter team sport (ice + ball, soccer-scale)",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "England (Fenland region 1800s); massive adoption Russia + Nordic",
  estimatedOrigin: "England 1800s (Fenland region); codified rules 1882; FIB founded 1955; World Championships since 1957",
  players: { min: 22, max: 30, note: "11v11 on field + goalie; rosters up to 15." },
  field: { surfaceName: "ice field (soccer-scale)", dimensions: "100m × 60m", description: "Large rectangular ice field, ~soccer pitch size. Goals 3.5m × 2m." },
  equipment: [
    { name: "Bandy stick (curved wood/composite, ~127cm)", description: "€50-200" },
    { name: "Bandy ball (small orange, ~62g)", description: "€10-20" },
    { name: "Ice skates + hockey-like protective equipment", description: "€300-800" },
    { name: "Goalie: no stick, heavy pads + gloves", description: "€500-1000" },
  ],
  duration: { approximateMinutes: 90, structure: "2 halves × 45 min (like soccer); with breaks." },
  objective: "Score more goals than opponent by hitting ball into opponent's net with stick.",
  basicRules: [
    { title: "11 field players + goalie per team on soccer-sized ice field", body: "Ice conditions + skates required." },
    { title: "Ball (not puck) hit with curved stick into 3.5m × 2m goal", body: "Similar visual to soccer + hockey hybrid." },
    { title: "OFFSIDE rule (like soccer) — attacker must not be beyond last defender", body: "Differs from ice hockey." },
    { title: "Corner strokes, free-hits, penalty shots for fouls", body: "Rules structure mirrors soccer more than hockey." },
    { title: "2 halves × 45 min (~soccer duration)", body: "Long-endurance sport." },
    { title: "Goalie NO STICK — uses hands + body only", body: "Different from ice hockey." },
  ],
  scoring: {
    summary: "1 goal = 1 point. Team with more goals wins.",
    breakdown: [
      { action: "Goal (ball fully crosses goal line)", points: "1 point" },
      { action: "Penalty shot for fouls in penalty area", points: "1 shot" },
      { action: "Overtime + penalty shootout in playoffs", points: "Golden goal or shootout" },
    ],
    winCondition: "More goals than opponent after 90 min (or after OT/shootout in playoffs).",
  },
  governingBodies: [
    { name: "Federation of International Bandy (FIB)", founded: 1955, headquarters: "Sweden", website: "https://internationalbandy.com/" },
    { name: "Russian Bandy Federation", founded: 1957, headquarters: "Moscow, Russia" },
    { name: "Swedish Bandy Association", founded: 1925, headquarters: "Stockholm, Sweden" },
  ],
  majorCompetitions: [
    { name: "Bandy World Championship (Men + Women)", frequency: "annual", founded: 1957, region: "worldwide" },
    { name: "Russian Super League", frequency: "annual", founded: 1946, region: "Russia" },
    { name: "Swedish Elitserien", frequency: "annual", founded: 1931, region: "Sweden" },
  ],
  countriesPlayed: ["RU", "SE", "FI", "KZ", "NO", "US", "CA", "BY", "MN"],
  famousAthletes: [
    "Sergey Ivanov (Russia) — Bandy legend, multiple world champion",
    "Christoffer Fagerström (Sweden) — Modern star",
    "Kalle Sundvall (Sweden) — Elite forward",
  ],
  variants: [
    "bandy-standard-11v11-full-field-outdoor-ice",
    "rink-bandy-smaller-court-hockey-rink-size",
    "womens-bandy-full-11v11",
    "youth-bandy-modified-formats",
    "indoor-bandy-artificial-ice-modern",
  ],
  relatedSports: ["ice-hockey", "field-hockey", "floorball", "hurling"],
  skills: ["ice skating stamina (90 min)", "stick handling on skates", "long passing", "positional discipline"],
  strategies: [
    { title: "Soccer-like positioning (offside line, defensive shape)", body: "Not hockey tempo." },
    { title: "Long-range shooting (larger field + goals)", body: "Different from tight ice hockey scoring zones." },
    { title: "Corner strokes strategic (like soccer corners)", body: "Set-piece scoring." },
    { title: "Endurance-focused (90 min on ice)", body: "Very demanding fitness sport." },
  ],
  terminology: [
    { term: "Bandy", meaning: "Sport name; possibly from Welsh 'bando' or Irish 'bain' (to hit)." },
    { term: "Rink bandy", meaning: "Smaller ice hockey-rink-sized bandy variant." },
    { term: "FIB", meaning: "Federation of International Bandy — governing body." },
    { term: "Bandy stick", meaning: "Curved wooden/composite stick ~127cm long." },
    { term: "Center circle", meaning: "Where match starts (soccer-like)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find bandy club — Russia, Sweden, Finland dominant; small US scene", body: "Difficult outside Nordic/Russia." },
      { title: "Ice skating skill required first", body: "Sport-specific stick training second." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete in national leagues (Russian Super League, Swedish Elitserien)", body: "Highly professional in Russia + Sweden." },
    ]},
    { level: "advanced", steps: [
      { title: "National team + World Championship path", body: "Small elite pool globally." },
    ]},
  ],
  faq: [
    { question: "What is Bandy?", answer: "WINTER TEAM SPORT played on ICE with 11 PLAYERS PER TEAM using CURVED STICKS + SMALL BALL (not puck). Field size ~SOCCER PITCH (100m × 60m). DIRECT ANCESTOR of MODERN ICE HOCKEY (bandy in England 1800s; codified 1882). Sometimes called 'RUSSIAN HOCKEY'. Massive popularity RUSSIA, SWEDEN, FINLAND, KAZAKHSTAN. 2 halves × 45 min like soccer. Bandy has OFFSIDE rule (like soccer); ice hockey does not. Considered ORIGINAL FORM from which ice hockey evolved as smaller-rink adaptation." },
    { question: "How is Bandy different from Ice Hockey?", answer: "BANDY on huge SOCCER-SIZED ICE FIELD (100m × 60m); ICE HOCKEY on smaller RINK (60m × 30m). BANDY uses BALL; ICE HOCKEY uses PUCK. BANDY 11v11; ICE HOCKEY 6v6. BANDY 2 × 45 min halves; ICE HOCKEY 3 × 20 min periods. BANDY has OFFSIDE (like soccer); ICE HOCKEY has different offside/icing rules. BANDY goalies have NO STICK; ICE HOCKEY goalies have stick. BANDY is ORIGINAL FORM; ICE HOCKEY evolved as indoor-rink adaptation (smaller field, no offside, puck for tighter scoring). Bandy still huge in Russia + Nordic countries; ice hockey global." },
    { question: "Is Bandy in the Olympics?", answer: "NO — NOT CURRENTLY on Olympic program. Bandy featured as DEMONSTRATION SPORT at 1952 OSLO WINTER OLYMPICS but never permanent Olympic sport. FIB has lobbied for inclusion; challenges include HIGH INFRASTRUCTURE COST (large ice field), REGIONAL POPULARITY (small outside Russia/Nordic), + IOC preferences for global sports. World Championships since 1957 remain top competition. Winter World Games sometimes feature bandy." },
  ],
  wikipediaTitle: "Bandy",
  sources: [
    { label: "FIB — Federation of International Bandy", url: "https://internationalbandy.com/", publisher: "FIB" },
    { label: "Wikipedia — Bandy", url: "https://en.wikipedia.org/wiki/Bandy", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
