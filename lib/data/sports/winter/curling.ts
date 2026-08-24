import type { Sport } from "@/lib/types";

export const curling: Sport = {
  id: "curling",
  slug: "curling",
  name: "Curling",
  officialName: "Curling",
  aliases: ["Chess on ice"],
  shortDescription:
    "A Scottish winter sport in which teams of four slide granite stones down a sheet of ice, sweeping ahead of the stone to control its path.",
  longDescription:
    "Curling is a strategic winter sport played on a long strip of pebbled ice. Two teams of four alternate delivering 20-kilogram polished granite stones toward a target — the 'house' — at the far end. Team-mates sweep the ice ahead of the stone with brooms to reduce friction and steer it. After all 16 stones are delivered (an 'end'), the team with stones closer to the centre of the house scores. Curling is a full-medal Winter Olympic sport since 1998; Canada and Scotland are the traditional powerhouses.",

  category: "winter-sports",
  subCategory: "precision ice sport",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  season: "winter",
  era: "medieval",
  popularity: "regional",

  countryOfOrigin: "GB",
  regionOfOrigin: "Scotland",
  estimatedOrigin: "16th century",

  players: { perTeam: 4, min: 4, max: 5, note: "Mixed doubles is 2-a-side. Traditional teams have a lead, second, third (vice-skip) and skip." },
  field: {
    surfaceName: "sheet",
    dimensions: "45.7 m long × 4.75 m wide.",
    description: "Pebbled ice sheet with a house (target) at each end — concentric circles of 12-, 8-, 4-foot and centre 'button'.",
  },
  equipment: [
    { name: "Stone", description: "Polished granite stone, 19.96 kg max, ~28.6 cm diameter — traditionally from Ailsa Craig, Scotland." },
    { name: "Broom", description: "For sweeping ahead of the stone to reduce friction and steer it." },
    { name: "Slider & gripper", description: "Two-shoe system — a Teflon slider on one foot, rubber gripper on the other." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "10 ends (8 in mixed doubles); international matches use a 38-minute thinking-time clock per team.",
  },
  objective: "Score more points than the opposition over 10 ends by placing stones closer to the centre of the house than the opposition's best stone.",
  matchStructure:
    "Teams alternate stones — 2 per player, 8 per team per end. After all 16 stones are delivered, only one team scores (the team with stones closer than the opposition's closest). Ends are played on alternating houses; the team that scored delivers first in the next end.",

  basicRules: [
    { title: "Delivery", body: "The player slides out of the hack with the stone in one hand and a broom or stabiliser in the other, releasing the stone before the hog line at the near end." },
    { title: "Sweeping", body: "Team-mates sweep in front of the moving stone with brooms — reducing friction to make the stone go further and travel straighter." },
    { title: "The house", body: "Only stones inside the house (12-foot outer circle) can score. Only stones closer than the opposition's closest count." },
    { title: "Free-guard zone", body: "For the first 5 stones of an end, opposition stones between the hog line and the top of the house cannot be knocked out — protecting early tactical guards." },
  ],
  advancedRules: [
    { title: "Hammer", body: "The 'hammer' is the last stone of an end — a huge tactical advantage, held by the team that did not score in the previous end." },
    { title: "Blank end", body: "A team with the hammer may choose to remove all stones without scoring, retaining the hammer for the next end." },
    { title: "Thinking time", body: "International matches use a thinking-time clock — 38 minutes per team per 10 ends." },
  ],
  scoring: {
    summary: "1 point per stone closer to the centre than the opposition's best stone.",
    breakdown: [
      { action: "Stone in the house closer than any opposition stone", points: "1 pt (max 8 per end)" },
    ],
    winCondition: "Higher total after 10 ends. Ties go to an extra end with hammer to the team without in the 10th.",
  },
  penalties: [
    { title: "Hog-line violation", body: "Releasing after the hog line = stone removed from play." },
    { title: "Touching a moving stone (burned stone)", body: "The non-offending team may replace or remove the stone." },
  ],

  positions: [
    { name: "Lead", role: "Delivers the first two stones — usually 'guards' (set outside the house).", count: 1 },
    { name: "Second", role: "Delivers stones 3 and 4 — hitting and running.", count: 1 },
    { name: "Third (vice-skip)", role: "Stones 5 and 6; helps the skip strategise, holds the broom while the skip shoots.", count: 1 },
    { name: "Skip", role: "The captain and last shooter — delivers stones 7 and 8, and calls every shot.", count: 1 },
  ],
  officiating: {
    officials: ["Chief umpire", "Line umpires (hog-line and back-line)", "Timekeeper"],
    summary: "Curling is largely self-officiated at recreational level; umpires oversee international matches.",
  },

  governingBodies: [
    { name: "World Curling Federation", acronym: "WCF", founded: 1966, headquarters: "Perth, Scotland", website: "https://worldcurling.org" },
  ],
  majorCompetitions: [
    { name: "Olympic Curling", frequency: "quadrennial", founded: 1998, region: "worldwide" },
    { name: "World Curling Championships", frequency: "annual", founded: 1959, region: "worldwide" },
    { name: "Continental Cup", frequency: "annual", founded: 2002, region: "worldwide" },
    { name: "Brier (Canadian championships)", frequency: "annual", founded: 1927, region: "Canada" },
  ],
  countriesPlayed: ["CA", "GB", "SE", "NO", "FI", "US", "JP", "KR", "CN"],
  famousAthletes: ["Kevin Martin", "Jennifer Jones", "Rachel Homan", "Kevin Koe", "Peja Lindholm"],

  variants: ["mixed-doubles-curling", "wheelchair-curling", "stick-curling"],
  relatedSports: ["shuffleboard", "bocce"],

  skills: ["stone weight control", "release rotation", "sweeping timing", "strategic thinking", "team communication"],

  terminology: [
    { term: "Hammer", meaning: "Last stone of the end — a big tactical advantage." },
    { term: "House", meaning: "The concentric-ring target at each end." },
    { term: "Button", meaning: "The central circle of the house — closest stone here scores." },
    { term: "Guard", meaning: "A stone placed short of the house to block the opposition." },
    { term: "Draw", meaning: "A stone delivered gently to stop in the house." },
    { term: "Takeout", meaning: "A stone delivered firmly to knock an opposition stone out of play." },
    { term: "Freeze", meaning: "A stone that stops in direct contact with another." },
  ],

  learningPaths: [{ level: "beginner", steps: [
    { title: "What is curling?", body: "Two teams take turns sliding stones down a sheet of ice toward a target.", anchor: "hero" },
    { title: "The house & scoring", body: "Only stones inside the house score; you score 1 per stone closer than your opponent's best.", anchor: "scoring" },
    { title: "Sweeping", body: "Team-mates sweep in front of the stone to reduce friction and control its path.", anchor: "how-it-works" },
    { title: "The hammer", body: "Last stone of the end — the biggest tactical piece on the board.", anchor: "advanced-rules" },
  ] }],
  diagrams: [
    {
      id: "curling-sheet",
      title: "The sheet & the house",
      component: "curling-sheet",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "Why do the sweepers sweep?", answer: "Sweeping melts a thin layer of ice, reducing friction — this makes the stone travel further AND straighter (less 'curl')." },
    { question: "How heavy is a curling stone?", answer: "19.96 kg (44 lbs) — polished granite, traditionally from Ailsa Craig off the Scottish coast." },
  ],

  sources: [
    { label: "WCF Rules of Curling & Rules of Competition", publisher: "World Curling Federation", url: "https://worldcurling.org/about/rules" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
