import type { Sport } from "@/lib/types";

export const englishBilliards: Sport = {
  id: "english-billiards",
  slug: "english-billiards",
  name: "English Billiards",
  officialName: "English Billiards (WPBSA / EBSA)",
  aliases: ["Billiards (English)", "3-Ball Billiards"],
  shortDescription:
    "Classical 3-ball cue sport played on a full-size snooker table (12 × 6 ft) using 2 cue balls and 1 red — scoring via cannons, pots, and in-offs; still contested at the IBSF World Billiards Championship annually.",
  longDescription:
    "English Billiards is the oldest cue sport played competitively today, dating to 16th-century England. Two players (or teams) share a full-size snooker table (12 × 6 ft) using 3 balls — white cue ball, spot-white cue ball (the opponent's cue), and 1 red. Scoring is achieved through three types of strokes: cannons (hitting both other balls, 2 pts), pots (potting a ball, 2-3 pts), and in-offs/hazards (potting your own cue ball off another, 2-3 pts). Once dominant in the British Empire (India, Australia, South Africa, New Zealand) prior to snooker's rise in the 1930s, English Billiards remains alive through the IBSF World Billiards Championship (contested annually since 1926 in various formats), World Professional Billiards + Snooker Association (WPBSA) events, and strong scenes in India (multi-time World Champions Geet Sethi, Pankaj Advani, Chetan Vishwanath), England, and Australia. Match formats include points (up to 1,500 or 2,500) and time (varying between 2-4 hours).",

  category: "precision-sports",
  subCategory: "cue sport (3-ball billiards)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "England (16th century); codified 1770s; IBSF founded 1971; WPBSA governs professional",
  estimatedOrigin: "16th century England (ancestor of all cue sports); modern rules codified 1770s-1800s; IBSF World Championship since 1926",

  players: { min: 2, max: 2, note: "Traditionally 1v1; doubles occasionally played." },
  field: {
    surfaceName: "Full-size snooker table (12 × 6 ft)",
    dimensions: "3.6m × 1.8m playing surface; 6 pockets (4 corner + 2 middle); cushioned rails",
    description: "Same table as snooker but with only 3 balls in play; balk line at 29 inches from bottom cushion; D-shape marked for starting position." ,
  },
  equipment: [
    { name: "3 balls (2 cue + 1 red)", description: "White cue ball, spot-white (opponent's cue ball, marked with red dot or similar), and red object ball; each 52.5mm dia." },
    { name: "Cue stick", description: "Traditional cue ~150cm long; leather-tipped." },
    { name: "Rest / spider / rake bridges", description: "Various rests for long shots; brought to table as needed." },
    { name: "Chalk", description: "Applied to cue tip to grip cue ball at contact." },
  ],
  duration: { approximateMinutes: 180, structure: "Points format: race to target (e.g., 150, 300, 1,000, or 2,500). Time format: fixed duration (2-4 hours), highest score wins." },
  objective: "Score more points than opponent via cannons, pots (red or opponent's cue), and in-offs (potting own cue ball off another).",
  matchStructure: "Points target format most common at amateur + IBSF; timed format used in some pro events. Player continues break while scoring; miss = opponent's turn.",

  basicRules: [
    { title: "3-ball setup", body: "Red on spot; own cue in D; opponent's cue on stringline until first shot." },
    { title: "Cannon (2 pts)", body: "Cue ball contacts both other balls in same shot." },
    { title: "Pot red (3 pts) / pot white (2 pts)", body: "Sending red or opponent's cue into pocket." },
    { title: "In-off red (3 pts) / in-off white (2 pts)", body: "Cue ball enters pocket after striking a ball." },
    { title: "Break continuation", body: "Player continues break while scoring; miss/foul = opponent's turn." },
    { title: "Baulk-line rule", body: "Consecutive shots between balls confined behind baulk line limited to prevent repetitive play." },
  ],
  advancedRules: [
    { title: "75 hazards / 15 cannons rule", body: "To prevent repetitive one-stroke breaks: max 75 consecutive hazards or 15 consecutive cannons without a variation." },
    { title: "In-off then cannon combination", body: "Advanced players combine cannons + in-offs for multi-scoring strokes." },
    { title: "Nursery cannon (banned)", body: "Repetitive cannon play near cushion — banned by 15-cannon limit rule." },
    { title: "Timed vs. points format", body: "Timed format rewards consistent break-building; points format allows unlimited match length." },
  ],
  scoring: {
    summary: "Cannons 2, pot-white/in-off-white 2, pot-red/in-off-red 3.",
    winCondition: "Reach target score (points format) or hold higher total at end of time (time format).",
    breakdown: [
      { action: "Cannon", points: "2" },
      { action: "Pot red", points: "3" },
      { action: "Pot white (opponent's cue)", points: "2" },
      { action: "In-off red", points: "3" },
      { action: "In-off white", points: "2" },
      { action: "Combined (cannon + pot + in-off in one shot)", points: "Sum of components (max 10 in single stroke)" },
    ],
  },
  penalties: [
    { title: "Foul (2 pts to opponent, minimum)", body: "Miss all balls, jump cue, potting cue ball without hitting object ball, etc." },
    { title: "Ball off table", body: "Ball respotted + foul awarded to opponent." },
    { title: "Push shot / double hit", body: "Cue in contact with ball too long or hit twice; foul." },
  ],

  positions: [
    { name: "Player 1", role: "First break player; both compete for same table.", count: 1 },
    { name: "Player 2", role: "Alternates with Player 1 after miss/foul.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Scorekeeper", "Timekeeper (time format only)"],
    summary: "Single referee at professional events; scorekeeper + timekeeper support.",
  },

  governingBodies: [
    { name: "World Professional Billiards & Snooker Association (WPBSA)", founded: 1968, headquarters: "Bristol, England", website: "https://wpbsa.com" },
    { name: "IBSF (International Billiards & Snooker Federation)", founded: 1971, headquarters: "New Delhi, India" },
    { name: "Billiards & Snooker Federation of India (BSFI)", founded: 1962, headquarters: "New Delhi, India" },
  ],
  majorCompetitions: [
    { name: "IBSF World Billiards Championship", frequency: "annual", founded: 1926, region: "worldwide (rotating hosts)" },
    { name: "World Professional Billiards Championship (WPBSA)", frequency: "annual", founded: 1980, region: "worldwide" },
    { name: "Asian Billiards Championship", frequency: "annual", founded: 1984, region: "Asia" },
    { name: "United Kingdom Billiards Championship", frequency: "annual", founded: 1934, region: "UK" },
  ],
  countriesPlayed: ["IN", "GB", "AU", "ZA", "NZ", "MY", "SG", "MM", "PK", "IE", "MT", "US"],
  famousAthletes: [
    "Pankaj Advani (India — record 25+ IBSF World Championships across billiards + snooker)",
    "Geet Sethi (India — 8× World Billiards Champion; padma shri award)",
    "Michael Ferreira (India — 3× IBSF World Amateur Billiards Champion)",
    "Michael Russell (England — WPBSA World Professional Billiards Champion multiple times)",
    "Peter Gilchrist (England — WPBSA World Professional Billiards Champion)",
    "Chetan Vishwanath (India — IBSF World Champion multiple)",
    "Sourav Kothari (India — IBSF World Champion 150-up format)",
  ],
  records: [
    { title: "Most IBSF World Billiards Championships (any format)", holder: "Pankaj Advani (India)", value: "25+ world titles across billiards + snooker; unprecedented multi-discipline record", year: 2024 },
    { title: "Highest recorded break", holder: "Walter Lindrum (Australia)", value: "4,137 unfinished (1932) — considered greatest break in history under old rules; modern rules prevent this scale", year: 1932 },
    { title: "Longest career at world level", holder: "Michael Ferreira + Geet Sethi + Pankaj Advani", value: "Multi-decade India dynasty spanning 1970s-2020s", year: 2024 },
  ],

  variants: ["points-format-race-to-target", "timed-format-fixed-duration", "150-up-short-match", "300-up-medium-match", "1500-up-long-match", "team-billiards-doubles"],
  relatedSports: ["snooker", "carom-billiards", "three-cushion-billiards", "pool", "russian-pyramid"],

  skills: ["cannon geometry + angle calculation", "in-off (screw + spin) control", "long-pot potting", "cushion play + safety exchange", "break-building continuation", "mental focus over long matches (2-4 hours)"],
  strategies: [
    { title: "Nursery cannons (limited)", body: "Once popular strategy — clustering balls near cushion for repeated small-scoring cannons; now capped at 15 consecutive." },
    { title: "In-off + cannon combos", body: "Advanced players link multiple in-offs + cannons for high multi-point strokes." },
    { title: "Safety play", body: "When break-building not possible, leave balls in awkward positions forcing opponent difficult next stroke." },
    { title: "Ball positioning", body: "Every stroke considers next 2-3 strokes; break continuation is key skill." },
  ],

  terminology: [
    { term: "Cannon", meaning: "Cue ball contacts both other balls in one shot." },
    { term: "In-off", meaning: "Cue ball pocketed after striking another ball (also 'hazard')." },
    { term: "Pot", meaning: "Sending object ball into pocket." },
    { term: "Break", meaning: "Consecutive scoring strokes by one player." },
    { term: "Spot", meaning: "Fixed position where a potted red is respotted." },
    { term: "Baulk", meaning: "Zone between baulk line and bottom cushion, where cue ball starts." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find a snooker club with billiards facilities", body: "Full-size snooker table required; India + UK + Australia + South Africa have accessible clubs." },
      { title: "Learn cannon geometry first", body: "Cannon is the base scoring stroke; understanding contact-first-then-second angles takes weeks." },
      { title: "Study in-off control", body: "Requires precise cue-ball spin control; use screw + side to route cue ball into pocket." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in state + national championships", body: "India + UK + Australia have deep national structures; BSFI hosts Indian championships." },
      { title: "Qualify for IBSF World Championship", body: "Amateur pathway via national federation; annual world championship in 150-up + point formats." },
      { title: "WPBSA Professional Billiards Tour", body: "Professional pathway; small tour but with prestigious world championship." },
    ]},
  ],

  faq: [
    { question: "Is English Billiards the same as snooker?", answer: "No — English Billiards is played on a snooker table but with only 3 balls (2 cue + 1 red) and scoring via cannons, pots, and in-offs. Snooker uses 22 balls (15 reds + 6 colors + 1 cue) and scores only by potting. Historically English Billiards preceded snooker (invented 1875) as the dominant British cue sport." },
    { question: "Why is India so dominant in billiards?", answer: "British colonial billiards culture took deep root in India, and post-independence Indian billiards continued to flourish through dedicated academies + federation support (BSFI). Legends like Wilson Jones, Michael Ferreira, Geet Sethi, and Pankaj Advani established generational dominance. Pankaj Advani's 25+ world titles across billiards + snooker is the modern peak." },
    { question: "Is English Billiards played anywhere outside India + UK?", answer: "Yes — strong scenes exist in Australia, South Africa, New Zealand, Malaysia, Singapore, Myanmar, Pakistan, and Ireland. IBSF World Championship attracts 30-40 nations. However India is by far the strongest and most numerous federation." },
  ],

  wikipediaTitle: "English billiards",
  sources: [
    { label: "WPBSA", url: "https://wpbsa.com", publisher: "World Professional Billiards & Snooker Association" },
    { label: "IBSF", url: "https://ibsf.info", publisher: "International Billiards & Snooker Federation" },
    { label: "Wikipedia — English billiards", url: "https://en.wikipedia.org/wiki/English_billiards", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
