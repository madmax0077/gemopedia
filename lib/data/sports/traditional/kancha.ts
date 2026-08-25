import type { Sport } from "@/lib/types";

export const kancha: Sport = {
  id: "kancha",
  slug: "kancha",
  name: "Kancha",
  officialName: "Kancha (कंचा)",
  aliases: ["Marbles (South Asian)", "Goli (Hindi)", "Lakhoti", "Gotay"],
  shortDescription:
    "Traditional South Asian marbles game. Popular children's game across INDIA, PAKISTAN, BANGLADESH. Small glass or clay marbles (~1.5cm) flicked from thumb + forefinger to strike target marbles. Multiple game variants: Ring game, Hole game, Tapping game. Ancient game; declining but nostalgic cultural staple.",
  longDescription:
    "Kancha (कंचा) is TRADITIONAL SOUTH ASIAN MARBLES GAME played across INDIA, PAKISTAN, BANGLADESH, NEPAL, SRI LANKA for centuries. GLASS OR CLAY MARBLES (~1.5cm diameter, various colors) flicked using THUMB + FOREFINGER technique. MANY REGIONAL NAMES + VARIANTS: KANCHA (Hindi general), GOLI (Hindi/Marathi), LAKHOTI, GOTAY (Bengali), LAAKHU (Kashmiri). GAMEPLAY VARIANTS: (1) RING GAME — draw circle; place stake marbles inside; players flick 'shooter' marble from outside to knock stakes out (kept). (2) HOLE GAME — small hole dug; players try to shoot marble into hole from distance. (3) TAPPING GAME — players take turns hitting opponent's marble; hitter keeps opponent's marble. TECHNIQUE: THUMB flick with FOREFINGER guide — power + accuracy critical. Considered CULTURAL STAPLE of Indian childhood 1960s-1990s; declining as MOBILE PHONES + video games dominate children's play. NOSTALGIC + featured in Bollywood films. ANCIENT VARIANTS documented in India 3000+ years ago (clay marbles found in Indus Valley archaeological sites). SIMILAR: European MARBLES games same era + technique. NOT organized competitively.",
  category: "traditional-cultural-sports",
  subCategory: "traditional South Asian children's marbles game",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "South Asia (India, Pakistan, Bangladesh, Nepal, Sri Lanka)",
  estimatedOrigin: "Ancient — clay marbles documented Indus Valley civilization 3000+ years ago; modern glass version 19th century",
  players: { min: 2, max: 6, note: "Typically 2-6 children; can be 1-vs-1 or free-for-all." },
  field: { surfaceName: "dirt / packed earth", dimensions: "circle ~1m diameter or hole in ground", description: "Traditional packed earth or dirt; ring game uses drawn circle." },
  equipment: [
    { name: "Marbles (kanchas) — glass or clay", description: "€1-5 for bag of 20+; various colors" },
    { name: "Shooter marble (larger, chosen)", description: "Player's preferred shooter" },
    { name: "Stick to draw circle", description: "Any" },
  ],
  duration: { approximateMinutes: 20, structure: "Games ~20 min informal; multiple rounds." },
  objective: "Win opponents' marbles by knocking them out of circle OR into hole OR by hitting them (variant-dependent).",
  basicRules: [
    { title: "Flick marble using thumb-forefinger technique", body: "Thumb propels; forefinger guides." },
    { title: "RING GAME: knock stake marbles out of circle to keep", body: "First strike misses = turn ends; hit = keep marble + shoot again." },
    { title: "HOLE GAME: shoot into hole from distance", body: "Success = points + next player's turn." },
    { title: "TAPPING GAME: hit opponent's marble to claim it", body: "Distance measured for turn eligibility." },
    { title: "Winners keep opponents' marbles", body: "Traditional 'gambling' element for children." },
  ],
  scoring: {
    summary: "Winners keep opponents' marbles as trophies. Not typically scored numerically.",
    breakdown: [
      { action: "Marble knocked out (ring game)", points: "Kept by shooter" },
      { action: "Marble in hole (hole game)", points: "1 point per hit" },
      { action: "Successful hit (tapping game)", points: "Opponent's marble claimed" },
    ],
    winCondition: "Most marbles at end of session; individual pride + physical marbles kept.",
  },
  governingBodies: [
    { name: "No official governing body", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Community events + school fairs", frequency: "irregular", founded: 1900, region: "South Asia" },
  ],
  countriesPlayed: ["IN", "PK", "BD", "NP", "LK"],
  famousAthletes: ["Traditional children's game; no famous players"],
  variants: [
    "kancha-ring-game-most-common",
    "kancha-hole-game",
    "kancha-tapping-game",
    "regional-variants-vary-by-community",
    "marbles-global-parallel-tradition",
  ],
  relatedSports: ["marbles", "conkers", "playground-games"],
  skills: ["thumb-forefinger dexterity", "aim + distance judgment", "friction assessment on surface"],
  strategies: [
    { title: "Choose good shooter marble", body: "Slightly larger + heavier marble flicks straighter." },
    { title: "Study surface friction", body: "Packed dirt behaves differently from tile." },
    { title: "Aim slightly high for gravity drop", body: "Marble arcs slightly." },
  ],
  terminology: [
    { term: "Kancha (कंचा)", meaning: "Marble (Hindi general term)." },
    { term: "Goli", meaning: "Marble (Hindi/Marathi)." },
    { term: "Shooter", meaning: "Player's preferred marble used to strike others." },
    { term: "Stake marble", meaning: "Marbles placed in circle as target." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy pack of 20-30 marbles ($3-5)", body: "Any local variety." },
      { title: "Learn thumb-forefinger flick technique", body: "5-10 min practice." },
      { title: "Play with siblings/friends outdoors", body: "Traditional social game." },
    ]},
    { level: "intermediate", steps: [
      { title: "Master shooter selection + surface reading", body: "Different surfaces need different technique." },
    ]},
  ],
  faq: [
    { question: "What is Kancha?", answer: "TRADITIONAL SOUTH ASIAN MARBLES GAME played across INDIA, PAKISTAN, BANGLADESH, NEPAL for centuries. Small glass or clay marbles (~1.5cm) flicked using THUMB + FOREFINGER technique. Multiple game variants: RING GAME (knock marbles from circle), HOLE GAME (shoot into hole), TAPPING GAME (hit opponent's marble). Winners keep opponents' marbles. Cultural staple of Indian childhood; declining as mobile phones + video games dominate. Ancient — clay marbles found Indus Valley archaeological sites 3000+ years ago." },
    { question: "How is Kancha different from Western marbles?", answer: "MECHANICALLY SIMILAR — both use small spherical marbles flicked to strike targets. TECHNICALLY SIMILAR — thumb-forefinger flick standard. CULTURALLY DIFFERENT — Western marbles has ORGANIZED tournaments (British Marbles Championship since 1300s at Tinsley Green); Kancha stays informal children's game. Modern marbles often GLASS; traditional kancha CLAY or GLASS. WESTERN scoring more formalized; KANCHA scoring varies wildly by community. Both DECLINING as children's outdoor play reduces globally." },
    { question: "Is Kancha still played?", answer: "DRAMATICALLY DECLINING in India + Pakistan + Bangladesh. Once dominant children's play activity 1960s-1990s; now rare in urban areas. RURAL AREAS still play informally. NOSTALGIC value strong — featured in Bollywood films + adult conversations about childhood. Global parallel: marbles declining across all cultures as SCREEN TIME dominates children's leisure. Not organized preservation body for Kancha specifically; considered CULTURAL HERITAGE at risk." },
  ],
  wikipediaTitle: "Marbles",
  sources: [
    { label: "Wikipedia — Marbles game", url: "https://en.wikipedia.org/wiki/Marbles", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "community",
};
