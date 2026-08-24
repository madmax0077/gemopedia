import type { Sport } from "@/lib/types";

export const australianFootball: Sport = {
  id: "australian-rules-football",
  slug: "australian-rules-football",
  name: "Australian Rules Football",
  officialName: "Australian Rules Football",
  aliases: ["Aussie rules", "Footy", "AFL"],
  shortDescription:
    "Australia's homegrown 18-a-side contact sport played on a huge oval with a red leather ball — a fast, high-scoring blend of kicking, marking and long running.",
  longDescription:
    "Australian Rules football was codified in Melbourne in 1859, making it one of the oldest football codes on Earth. Eighteen players a side play on a huge grass oval (usually a cricket ground) using a distinctive red leather ball, roughly twice the length it is wide. Any part of the body may touch the ball; running with it requires a bounce every 15 metres. Scoring is done by kicking through vertical goal posts. Governed by the AFL (Australian Football League), the sport dominates southern Australia and has an emerging women's competition (AFLW) since 2017.",

  category: "ball-sports",
  subCategory: "football code",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "regional",

  countryOfOrigin: "AU",
  regionOfOrigin: "Melbourne, Victoria",
  estimatedOrigin: "1858–1859 (codified)",

  players: { perTeam: 18, min: 15, max: 18, substitutes: 4, note: "Modern AFL sides list 22 (18 on-field + 4 interchange)." },
  field: {
    surfaceName: "oval",
    dimensions: "135–185 m long × 110–155 m wide — the largest playing surface of any team sport.",
    description: "An oval grass field, usually a cricket ground during winter. Four vertical goal posts at each end — the tall centre two are the goal posts, the shorter outer two are the behind posts.",
  },
  equipment: [
    { name: "Sherrin ball", description: "Prolate spheroid red leather ball, 720–735 mm circumference at the long axis." },
    { name: "Four goal posts per end", description: "Two tall centre posts (~11 m) and two behind posts (~6.4 m)." },
    { name: "Guernsey, shorts, boots", description: "Sleeveless jersey ('guernsey'), studded boots — no helmets or padding at senior level." },
  ],
  duration: {
    approximateMinutes: 100,
    structure: "4 quarters × 20 min + time-on for stoppages (roughly 25–30 min real time per quarter).",
  },
  objective: "Score more points than the opposition by kicking the ball through the tall centre posts.",
  matchStructure:
    "Play is continuous. Players kick, handball (punching the ball off a fist) or run with the ball (must bounce it every 15 m). A 'mark' is a clean catch from a kick of 15+ m — the marker earns an unimpeded kick.",

  basicRules: [
    { title: "Handball & kicks", body: "You may kick the ball anywhere, or 'handball' it by punching it off your fist. Throwing is illegal." },
    { title: "The mark", body: "Catch a ball cleanly from a kick of 15+ metres → you take an unhindered kick. Marks are the most spectacular skill in the sport." },
    { title: "Running", body: "You can run with the ball but must bounce it every 15 metres." },
    { title: "Tackling", body: "You may tackle between the shoulders and the knees. Above-the-shoulder or below-the-knee contact = free kick + report." },
    { title: "Scoring", body: "Between the two tall centre posts = goal (6 pts). Between a centre post and a behind post, or off a defender = behind (1 pt)." },
  ],
  advancedRules: [
    { title: "Deliberate rushed behind", body: "A defender deliberately putting the ball across their own goal line for a behind concedes a free kick from the goal square." },
    { title: "50-metre penalty", body: "Serious infractions after the mark (dissent, holding, delay) advance the mark 50 metres." },
    { title: "Interchange cap", body: "Each team is limited to ~90 interchanges per match to prevent unlimited fresh-legs rotations." },
  ],
  scoring: {
    summary: "Goal = 6 points; behind = 1 point. Scoreline is written 'goals.behinds (total)' — e.g. 15.10 (100).",
    breakdown: [
      { action: "Goal (between the two centre posts)", points: "6 pts" },
      { action: "Behind (between a centre and behind post)", points: "1 pt" },
    ],
    winCondition: "Highest total after 4 quarters wins.",
  },
  penalties: [
    { title: "Free kick", body: "For high tackles, holding, in-the-back, deliberate out-of-bounds, chopping the arms." },
    { title: "Yellow / red cards", body: "Introduced in the AFLW; yellow = 15-minute sin bin, red = send-off." },
  ],

  positions: [
    { name: "Full-forward", role: "The primary goal-scorer, deep in the attacking 50.", count: 1 },
    { name: "Ruckman", role: "The tallest player — contests centre bounces and stoppages.", count: 1 },
    { name: "Midfielders", role: "8 rotating around the ground; the sport's engine room.", count: 8 },
    { name: "Full-back", role: "Anchors the defensive 50 against the opposition full-forward.", count: 1 },
    { name: "Interchange", role: "4-strong bench that rotates on and off through the game.", count: 4 },
  ],
  officiating: {
    officials: ["3 field umpires", "2 boundary umpires", "2 goal umpires", "1 emergency"],
    summary: "Multiple umpires enforce rules across the enormous oval. The goal umpire, in a white coat, signals scores with two flags overhead.",
  },

  governingBodies: [
    { name: "Australian Football League", acronym: "AFL", founded: 1897, headquarters: "Melbourne, Australia", website: "https://www.afl.com.au" },
  ],
  majorCompetitions: [
    { name: "AFL Grand Final", frequency: "annual", founded: 1897, region: "Australia" },
    { name: "AFLW Grand Final", frequency: "annual", founded: 2017, region: "Australia" },
    { name: "AFL International Cup", frequency: "triennial", founded: 2002, region: "worldwide" },
  ],
  countriesPlayed: ["AU", "NZ", "PG", "US", "GB", "IE", "ZA"],
  famousAthletes: ["Ted Whitten", "Ron Barassi", "Leigh Matthews", "Chris Judd", "Gary Ablett Jr", "Erin Phillips"],

  variants: ["nine-a-side-footy", "beach-footy", "kick-to-kick"],
  relatedSports: ["gaelic-football", "rugby-union"],

  skills: ["kicking accuracy", "aerial contest", "endurance", "spatial awareness", "hand-eye coordination"],

  terminology: [
    { term: "Mark", meaning: "A clean catch from a kick travelling 15+ metres." },
    { term: "Goal", meaning: "A kick through the tall centre posts — 6 points." },
    { term: "Behind", meaning: "A kick between a centre post and behind post, or off a defender — 1 point." },
    { term: "Sherrin", meaning: "The Australian rules football — a prolate spheroid, made by the Sherrin brand since 1880." },
    { term: "Speccy", meaning: "A 'spectacular' mark taken by leaping off another player's back." },
    { term: "Handpass", meaning: "Punching the ball off the open palm with a closed fist." },
  ],

  learningPaths: [{ level: "beginner", steps: [
    { title: "What is Aussie rules?", body: "An 18-a-side football code on a huge oval, using a red leather ball and vertical goal posts.", anchor: "hero" },
    { title: "How scoring works", body: "6 points for a goal (between the tall posts), 1 for a behind.", anchor: "scoring" },
    { title: "Kicking, handballing & marking", body: "You can kick, punch (handball) or run with the ball (bouncing every 15 m).", anchor: "rules" },
    { title: "The mark", body: "Catch a kick clean from 15+ metres → unimpeded kick.", anchor: "rules" },
  ] }],
  diagrams: [
    {
      id: "afl-oval",
      title: "The oval & goal posts",
      component: "afl-oval",
      slot: "scoring",
    },
  ],
  faq: [
    { question: "How is AFL different from rugby?", answer: "AFL uses no scrums, no rucks, no offside — and you score by kicking through vertical goal posts, not by touching the ball down." },
    { question: "What is a 'speccy'?", answer: "A spectacular mark — usually taken by launching off another player's back and catching the ball metres above the pack." },
    { question: "How long is an AFL game?", answer: "4 × 20-minute quarters plus time-on for stoppages — roughly 2 hours of real time." },
  ],

  sources: [
    { label: "AFL Laws of Australian Football", publisher: "AFL", url: "https://www.afl.com.au/laws" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
