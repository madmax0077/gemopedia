import type { Sport } from "@/lib/types";

export const kabaddi: Sport = {
  id: "kabaddi",
  slug: "kabaddi",
  name: "Kabaddi",
  officialName: "Kabaddi",
  aliases: ["Hu-Tu-Tu", "Chedugudu", "Sadugudu"],
  shortDescription:
    "A high-tempo South Asian contact sport in which a solo 'raider' crosses into enemy territory to tag defenders and return home — all in a single breath.",
  longDescription:
    "Kabaddi is one of the oldest continuously-played team sports on Earth, rooted in ancient India. Two teams of seven face off across a rectangular court. Turn by turn, one player from each side — the 'raider' — must run into the opponents' half, tag as many defenders as possible, and return to their own half before being tackled — all while continuously chanting 'kabaddi, kabaddi, kabaddi' to prove they haven't inhaled. It is the national sport of Bangladesh, a state sport in seven Indian states, and drives one of the world's fastest-growing professional leagues (Pro Kabaddi League).",

  category: "traditional-cultural-sports",
  subCategory: "contact team sport",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "IN",
  regionOfOrigin: "South Asia",
  estimatedOrigin: "c. 4th century BCE (referenced in Vedic literature)",

  players: { perTeam: 7, min: 5, max: 12, substitutes: 5, note: "Standard team is 12 players — 7 on court, 5 substitutes." },
  field: {
    surfaceName: "court",
    dimensions: "13 m × 10 m (men) — split by a midline. Bonus line, baulk line and lobbies inside each half.",
    description:
      "A hard, non-slippery court (usually a mat in the professional league) divided into two halves by a centre line. Each half contains a baulk line (parallel to midline, 3.75 m in), a bonus line (further in) and end/side lobbies.",
  },
  equipment: [
    { name: "Court markings", description: "Midline, baulk lines, bonus lines and lobbies painted onto the mat." },
    { name: "Sports uniform", description: "Shorts + jersey (numbered)." },
    { name: "Shoes", description: "Non-marking rubber-soled sports shoes — mandatory on modern mats." },
  ],
  duration: {
    approximateMinutes: 40,
    structure: "Two halves of 20 minutes with a 5-minute half-time. Time is running (raid-clock in the professional league is 30 seconds).",
  },
  objective:
    "Score more points than the opposing team by tagging defenders on a raid and by tackling raiders — all while managing your seven players on court.",
  matchStructure:
    "Teams alternate turns sending a raider into the opposition half. A raid is complete when the raider (a) returns to their half after tagging, (b) is tackled, or (c) runs out of breath / the 30-second raid clock expires. Defenders who are 'out' leave the court; they can be revived when their team scores a point.",

  basicRules: [
    { title: "The raid", body: "A raider crosses the midline into enemy territory and must return to their own half without being tackled. The raider chants 'kabaddi, kabaddi, kabaddi' throughout — proving they haven't taken a fresh breath." },
    { title: "The cant", body: "The continuous chant of 'kabaddi' is called the cant. Losing the cant (breathing in and stopping) makes the raider out." },
    { title: "The baulk & bonus", body: "The raider must cross the baulk line to make a legal raid attempt. Crossing the bonus line (when 6+ defenders are on court) scores a bonus point if they return safely." },
    { title: "Tackling", body: "Any defender who touches a raider can attempt a tackle. To score, the defence must prevent the raider from returning to their own half — the raider's body must be stopped on the defence's side." },
    { title: "Getting a defender out", body: "The raider scores 1 point per defender they tag with any part of the body, provided they return safely." },
    { title: "All-out", body: "If a team loses all 7 on-court players, the opposition is awarded 2 bonus points and all players are revived." },
  ],
  advancedRules: [
    { title: "Do-or-die raid", body: "If a team fails to score on two consecutive raids, the next raid is 'do-or-die': the raider must score a point or their team loses a player." },
    { title: "Super raid", body: "A raid that scores 3+ points in one attempt — worth a heavy tactical swing." },
    { title: "Super tackle", body: "When the defence tackles a raider while having only 3 or fewer players on court, they score 2 points instead of 1." },
    { title: "Empty raid", body: "A raid that scores no points and results in no defenders being out (and the raider returns safely). Counts towards the two-empty-raid trigger for do-or-die." },
  ],
  scoring: {
    summary: "One point per tag (touch), one point per tackle, one point per bonus, 2 points per super tackle, 2 points per all-out bonus.",
    breakdown: [
      { action: "Touch (raider tags a defender & returns)", points: "1 point per defender tagged" },
      { action: "Bonus point", points: "1 point (raider crosses bonus line safely)" },
      { action: "Tackle", points: "1 point (2 if super tackle)" },
      { action: "All-out", points: "2 bonus points" },
    ],
    winCondition: "Highest score at full time wins. In knockouts a golden raid decides tied matches.",
  },
  penalties: [
    { title: "Line out", body: "A player stepping over any boundary line (except during a struggle) is declared out." },
    { title: "Time-outs", body: "Each team is allowed two 30-second time-outs per half." },
  ],
  fouls: [
    { title: "Delaying the raid", body: "A raider must cross the baulk line within 5 seconds; failure results in an unsuccessful raid." },
    { title: "Holding by hair or clothes", body: "Illegal for defenders — the raider is declared safe and awarded a point." },
    { title: "Physical roughness", body: "Punching, kicking or intentional injury draws a warning card, then a yellow (5 min), then a red (send-off)." },
  ],
  winningConditions: ["Highest total points at full time.", "In knockout ties: extra 7-minute period, then a golden raid tiebreaker."],

  positions: [
    { name: "Raider", role: "The player currently attacking in the opposition half.", count: 1 },
    { name: "Left / Right Corner", role: "Anchors at the back — usually the strongest solo tacklers.", count: 2 },
    { name: "Left / Right In", role: "Mid-court defenders who form ankle-holds and initiate tackles.", count: 2 },
    { name: "Left / Right Cover", role: "Between the corners and ins — the most mobile defenders.", count: 2 },
    { name: "All-rounder", role: "A player equally capable of raiding and defending — typically the captain.", count: 1 },
  ],
  officiating: {
    officials: ["1 referee", "2 umpires (one per half)", "1 scorer", "2 assistant scorers"],
    summary: "The referee has authority over the whole match. Umpires patrol one half each and make on-the-spot decisions. In the Pro Kabaddi League a 3-second TV umpire review is available.",
  },

  governingBodies: [
    { name: "International Kabaddi Federation", acronym: "IKF", founded: 2004, headquarters: "Bhilai, India" },
    { name: "Amateur Kabaddi Federation of India", acronym: "AKFI", founded: 1950, headquarters: "New Delhi, India" },
  ],
  majorCompetitions: [
    { name: "Kabaddi World Cup", frequency: "quadrennial", founded: 2004, region: "worldwide" },
    { name: "Pro Kabaddi League (PKL)", frequency: "annual", founded: 2014, region: "India" },
    { name: "Asian Games — Kabaddi", frequency: "quadrennial", founded: 1990, region: "Asia" },
  ],
  countriesPlayed: ["IN", "BD", "PK", "LK", "NP", "IR", "JP", "KR"],
  famousAthletes: ["Pardeep Narwal", "Rakesh Kumar", "Ajay Thakur", "Pawan Sehrawat", "Rahul Chaudhari"],
  records: [
    { title: "Most raid points in PKL history", holder: "Pardeep Narwal", value: "1,600+ points", year: 2024 },
    { title: "Most Asian Games gold (nation)", holder: "India", value: "8 golds", year: 2018 },
  ],

  variants: ["circle-kabaddi", "punjabi-kabaddi", "beach-kabaddi"],
  relatedSports: ["kho-kho", "sumo"],

  skills: ["breath control", "agility", "explosive speed", "grip strength", "spatial awareness"],

  terminology: [
    { term: "Cant", meaning: "The continuous chant of 'kabaddi' — proves the raider has not taken a breath." },
    { term: "Raid", meaning: "A single trip by a raider into the opposition half." },
    { term: "Baulk line", meaning: "3.75 m inside each half — the raider must cross this for a legal raid." },
    { term: "Bonus line", meaning: "A line further inside the opposition half — crossing it earns a bonus point." },
    { term: "Do-or-die raid", meaning: "A raid that follows two empty raids — the raider must score or a player is out." },
    { term: "Super tackle", meaning: "Tackling a raider when the defence has 3 or fewer players — worth 2 points." },
    { term: "All-out", meaning: "Wiping out all 7 opposition players on court — 2 bonus points." },
  ],
  strategies: [
    { title: "Chain tackle", body: "Corners lock the raider's ankles while covers pull them backwards — the most reliable multi-defender tackle." },
    { title: "Raid selection", body: "Save the star raider for do-or-die situations; use utility raiders to score bonus points early." },
    { title: "Managing all-outs", body: "Aggressive defence in the final minute of a half can trigger a match-swinging all-out." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "What is kabaddi?", body: "Two teams of seven. One player at a time raids the opposition — tagging and escaping without a fresh breath.", anchor: "hero" },
        { title: "The court", body: "A 13 × 10 m mat split into two halves. Baulk and bonus lines are drawn inside each half.", anchor: "playing-area" },
        { title: "How the raid works", body: "Cross the midline chanting 'kabaddi', tag defenders, return home safely.", anchor: "how-it-works" },
        { title: "How defenders score", body: "By stopping the raider from returning — often via a chain tackle at the ankles.", anchor: "rules" },
        { title: "Do-or-die & all-out", body: "Two important pressure moments that can decide a match.", anchor: "advanced-rules" },
      ],
    },
  ],
  faq: [
    { question: "Is kabaddi India's national sport?", answer: "India does not have an officially declared national sport. Kabaddi is however the national sport of Bangladesh, and a state sport in seven Indian states." },
    { question: "How is a bonus point scored?", answer: "The raider crosses the 'bonus line' inside the opposition half (when 6+ defenders are on court) and returns safely — 1 point." },
    { question: "How long is a kabaddi match?", answer: "Two halves of 20 minutes with a 5-minute break — around 45 minutes in total." },
    { question: "Do you have to be big to play kabaddi?", answer: "No — raiders are typically lean and quick; only the anchor defenders (corners) tend to be heavier for grip and power." },
  ],

  animations: [
    { id: "raid", title: "Anatomy of a kabaddi raid", component: "KabaddiRaid", description: "Follow a raider across the baulk line, past defenders, and back home in one breath." },
  ],

  diagrams: [
    {
      id: "kabaddi-court",
      title: "The court",
      component: "kabaddi-court",
      slot: "playing-area",
    },
  ],

  sources: [
    { label: "International Kabaddi Federation — Rules", publisher: "IKF" },
    { label: "Pro Kabaddi League — Rulebook", publisher: "Mashal Sports", url: "https://www.prokabaddi.com" },
    { label: "Britannica — Kabaddi", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/kabaddi" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
