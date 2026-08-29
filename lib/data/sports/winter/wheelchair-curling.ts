import type { Sport } from "@/lib/types";

export const wheelchairCurling: Sport = {
  id: "wheelchair-curling",
  slug: "wheelchair-curling",
  name: "Wheelchair Curling",
  officialName: "Wheelchair Curling (World Curling Federation - WCF)",
  aliases: ["WCC", "Para Curling"],
  shortDescription:
    "Paralympic winter team sport — curling played from wheelchairs; 4-person mixed-gender teams throw stones down ice sheet; no sweeping; contested at Winter Paralympics since Torino 2006.",
  longDescription:
    "Wheelchair Curling is a Paralympic winter team sport — curling played by athletes with lower-limb impairments from wheelchairs. Distinct from able-bodied curling: (1) No sweeping (players cannot sweep due to wheelchair); (2) Delivery from stationary wheelchair using a stick called a delivery stick + release cup; (3) Mixed-gender teams required (2 women + 2 men on each 4-person team). Standard 8-end game structure. WCF governs since 2000; Paralympic since Torino 2006. Countries with strong programs: Canada, Norway, Russia, South Korea, USA, China (Beijing 2022 host + gold medalists). Legendary competitors: Jim Armstrong (Canada — 2010 Paralympic gold), Sonja Gaudet (Canada — 3× Paralympic gold + world championship), Chen Jianxin (China — 2022 Paralympic gold at home Olympics), Norwegian team dominant era.",

  category: "winter-sports",
  subCategory: "paralympic winter team sport — curling in wheelchairs",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: false,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden + Switzerland (adaptation to curling in wheelchairs early 2000s); WCF-recognized 2000; Paralympic Torino 2006",
  estimatedOrigin: "Adaptation to curling in wheelchairs early 2000s; WCF recognition 2000; Paralympic Winter Games Torino 2006; first World Championship 2002",

  players: { perTeam: 4, min: 4, max: 4, substitutes: 1, note: "4v4 mixed-gender (2 women + 2 men); 5-person roster including alternate." },
  field: {
    surfaceName: "Curling ice sheet",
    dimensions: "45m × 4.75m; house (target) 3.66m diameter at each end",
    description: "Standard curling ice sheet; pebble ice surface + house target at each end.",
  },
  equipment: [
    { name: "Sport wheelchair", description: "Purpose-built curling wheelchair; low seating; wide stability base." },
    { name: "Delivery stick + release cup", description: "Extended stick with cup attaching to stone handle; athlete releases stone by pushing." },
    { name: "Curling stones", description: "Standard 20 kg granite stones; unchanged from able-bodied curling." },
    { name: "Team uniforms", description: "Standard sport gear." },
  ],
  duration: { approximateMinutes: 120, structure: "8-end game; ~15-20 min per end; total 2-3 hours." },
  objective: "Score more points across 8 ends by placing stones closer to center of house than opponents.",
  matchStructure: "8 ends; each end: alternating stone deliveries by both teams. End ends when all 8 stones per team delivered. Points scored by team with stones closest to center.",

  basicRules: [
    { title: "4 vs 4 mixed-gender", body: "Each 4-person team must include at least 1 woman + 1 man on ice." },
    { title: "No sweeping", body: "Unlike able-bodied curling, wheelchair curlers cannot sweep. Adds emphasis on precise delivery." },
    { title: "Stationary delivery using stick + cup", body: "Athlete delivers stone from stationary wheelchair using extended delivery stick + release cup." },
    { title: "Standard curling scoring", body: "Points scored at end of each end; team with stones closer to house center scores 1 point per stone closer than opponent's closest." },
    { title: "8 ends per game", body: "Standard game length; extra ends if tied." },
    { title: "Mixed-gender required", body: "Rule adopted 2018; reflects Paralympic gender-parity emphasis." },
  ],
  scoring: {
    summary: "Points scored at end of each end based on stone proximity to house center.",
    winCondition: "Higher total score after 8 ends; extra ends if tied.",
    breakdown: [
      { action: "Stone closest to center", points: "1 (for team with closest)" },
      { action: "Multiple stones closer than opponent's closest", points: "1 per stone closer" },
      { action: "Elite end score", points: "3-6 points per end possible; 2-3 typical" },
    ],
  },

  positions: [
    { name: "Skip", role: "Team captain; strategic play caller; typically 4th thrower.", count: 1 },
    { name: "Vice-skip", role: "Second-in-command; typically 3rd thrower.", count: 1 },
    { name: "Second", role: "Team member; typically 2nd thrower.", count: 1 },
    { name: "Lead", role: "Team member; typically 1st thrower.", count: 1 },
  ],
  officiating: {
    officials: ["Chief Umpire", "Chief Timer", "Line judges (multiple)"],
    summary: "WCF-certified officials; timekeeping + line judgments critical.",
  },

  governingBodies: [
    { name: "World Curling Federation (WCF)", founded: 1966, headquarters: "Perth, Scotland", website: "https://worldcurling.org" },
    { name: "Curling Canada", founded: 1935, headquarters: "Ottawa, Canada" },
    { name: "Norges Curlingforbund", founded: 1993, headquarters: "Norway" },
  ],
  majorCompetitions: [
    { name: "Winter Paralympic Games (Wheelchair Curling)", frequency: "quadrennial", founded: 2006, region: "worldwide" },
    { name: "World Wheelchair Curling Championships", frequency: "annual (except Paralympic years)", founded: 2002, region: "worldwide" },
    { name: "Wheelchair Curling World Cup", frequency: "annual", founded: 2013, region: "worldwide" },
  ],
  countriesPlayed: ["CA", "CN", "NO", "RU", "KR", "US", "SE", "SI", "CH", "GB", "FI", "JP"],
  famousAthletes: [
    "Jim Armstrong (Canada — 2010 Paralympic gold; team captain)",
    "Sonja Gaudet (Canada — 3× Paralympic gold + world championship)",
    "Chen Jianxin (China — 2022 Paralympic gold at home Olympics)",
    "Norwegian team dominant era (2010s multiple World Championships)",
    "Bruce Cameron (Canada — Paralympic gold + world champion)",
    "Kim Hakwei (South Korea — Paralympic contender)",
  ],
  records: [
    { title: "Most Paralympic wheelchair curling gold (Canada dominant)", holder: "Canada", value: "Multiple Paralympic golds since 2006 debut", year: 2018 },
    { title: "China 2022 gold at home Olympics", holder: "China", value: "Gold medal at Beijing 2022; historic first Chinese Winter Paralympic curling gold", year: 2022 },
    { title: "Paralympic debut", holder: "Torino 2006", value: "Full medal event debut", year: 2006 },
  ],

  variants: ["wcf-standard-8-end-wheelchair-curling", "national-wheelchair-curling-championships"],
  relatedSports: ["curling", "wheelchair-basketball", "wheelchair-rugby", "sitting-volleyball"],

  skills: ["precise stone delivery from wheelchair", "reading ice + stone paths", "strategic play (no sweeping)", "team coordination (skip → thrower)", "mental focus (deliberate slow-paced sport)"],

  terminology: [
    { term: "Wheelchair Curling", meaning: "Paralympic winter team sport; curling played from wheelchairs." },
    { term: "Delivery stick", meaning: "Extended stick with cup attaching to stone handle; used for delivery from wheelchair." },
    { term: "No sweeping", meaning: "Rule difference from able-bodied curling; wheelchair curlers cannot sweep." },
    { term: "Mixed gender", meaning: "Rule adopted 2018; teams must include both women + men on ice." },
    { term: "House", meaning: "3.66m diameter target; center is scoring goal." },
    { term: "End", meaning: "Round of play; 8 stones per team delivered." },
    { term: "Skip", meaning: "Team captain + play caller; typically 4th thrower." },
    { term: "Sonja Gaudet", meaning: "Canadian; 3× Paralympic gold; sport's dominant early star." },
  ],

  faq: [
    { question: "What is Wheelchair Curling?", answer: "Paralympic winter team sport — curling played from wheelchairs. Distinct from able-bodied curling: (1) No sweeping; (2) Delivery from stationary wheelchair using extended delivery stick + release cup; (3) Mixed-gender teams required (2 women + 2 men on 4-person team). Standard 8-end game structure. Paralympic since Torino 2006." },
    { question: "How is Wheelchair Curling different from able-bodied Curling?", answer: "Main differences: (1) NO SWEEPING allowed — wheelchair curlers cannot sweep due to chair positioning. Adds emphasis on precise delivery. (2) Delivery from STATIONARY wheelchair using extended delivery stick + release cup. Able-bodied curlers slide into delivery. (3) MIXED-GENDER teams required (2018 rule change). Otherwise same 8-end structure + scoring + strategy." },
    { question: "Who is the greatest wheelchair curler?", answer: "Multiple candidates: (1) Sonja Gaudet (Canada) — 3× Paralympic gold + world championship. (2) Jim Armstrong (Canada) — 2010 Paralympic gold team captain. (3) Chen Jianxin (China) — 2022 Paralympic gold at home Olympics. (4) Norwegian teams — multiple World Championships in 2010s. Canada + Norway + China dominant nations." },
    { question: "Is Wheelchair Curling in the Olympics?", answer: "No, but at every Winter Paralympics since Torino 2006. Paralympic Games run alongside Winter Olympic Games in same host city." },
  ],

  wikipediaTitle: "Wheelchair curling",
  sources: [{ label: "World Curling Federation", url: "https://worldcurling.org", publisher: "WCF" }, { label: "Wikipedia — Wheelchair curling", url: "https://en.wikipedia.org/wiki/Wheelchair_curling", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
