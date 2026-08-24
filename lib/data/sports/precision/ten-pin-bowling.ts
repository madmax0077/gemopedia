import type { Sport } from "@/lib/types";

export const tenPinBowling: Sport = {
  id: "ten-pin-bowling",
  slug: "ten-pin-bowling",
  name: "Ten-Pin Bowling",
  officialName: "Ten-Pin Bowling",
  aliases: ["Bowling (US)", "Tenpins"],
  shortDescription:
    "Precision sport in which players roll a heavy ball down a 60-foot wooden lane to knock down 10 pins arranged in a triangle at the far end, scoring across 10 frames.",
  longDescription:
    "Ten-pin bowling is the most-played bowling variant worldwide, especially in the USA. Players roll a 6-16 lb polyurethane, urethane, or reactive resin ball down a 60-foot lane (from the foul line to the head pin) to knock down 10 pins arranged in a triangular rack. Each player rolls 2 balls per frame (with a bonus ball on the 10th frame for a strike or spare). The maximum score is 300 — twelve strikes in a row (a 'perfect game'). Ten-pin bowling evolved from older European pin games in the mid-19th-century USA when the Connecticut legislature banned 9-pin bowling and a 10th pin was added as a legal workaround. Today the USBC certifies over 40 million recreational bowlers in the USA alone, and the PBA (Professional Bowlers Association) hosts a global professional tour.",

  category: "precision-sports",
  subCategory: "target / roll sport",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Connecticut / New York",
  estimatedOrigin: "1840s in the US (10th pin added to circumvent Connecticut's 1841 nine-pin bowling ban); formalised by ABC in 1895",

  players: { min: 1, max: 6, note: "Individual and 5-player team competition; per lane max ~6 in leagues; solo unlimited." },
  field: {
    surfaceName: "bowling lane",
    dimensions: "60 ft (18.29 m) from foul line to head pin; 41.5 in (105.4 cm) wide; gutters on each side.",
    description: "Long, narrow synthetic or wooden lane treated with oil pattern. Pins arranged in a 4-3-2-1 triangle at the pin deck; automatic pin-setter behind.",
  },
  equipment: [
    { name: "Bowling ball", description: "6-16 lb (2.7-7.3 kg), 8.5 in (21.6 cm) diameter, 3 finger holes; materials include plastic, urethane, and reactive resin." },
    { name: "Bowling pins", description: "10 pins, each 15 in tall, 4.75 in wide at widest, 3.3-3.6 lb weight." },
    { name: "Bowling shoes", description: "Special shoes: sliding sole on one foot (matching handedness) and traction sole on the other." },
    { name: "Ball rack / return", description: "Mechanical system that returns balls after each throw." },
    { name: "Oil pattern", description: "Lane oil applied in patterns (house, sport, PBA) that affect ball reaction." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "10 frames per game; recreational solo game ~15 min, 4-player game ~90 min. League/tournament: 3-game series in 2-3 hours.",
    note: "PBA telecast events run 4-6 hours across multiple qualifying rounds.",
  },
  objective: "Knock down all 10 pins in as few throws as possible over 10 frames; maximise cumulative score.",
  matchStructure:
    "A game consists of 10 frames. In each of the first 9 frames, a bowler has 2 throws to knock down all 10 pins. A 'strike' (all 10 down on the first throw) ends the frame immediately and awards bonus scoring on the next 2 throws. A 'spare' (all 10 down across 2 throws) awards a bonus of the next 1 throw. In the 10th frame, a strike earns 2 bonus balls, and a spare earns 1 bonus ball — allowing a possible 12 strikes in a row for a perfect 300 game.",

  basicRules: [
    { title: "Two balls per frame", body: "Roll two balls per frame; goal is to knock down all 10 pins." },
    { title: "Strike (X)", body: "All 10 pins down with the first ball — frame ends immediately; next 2 balls added as bonus." },
    { title: "Spare (/)", body: "All 10 pins down using both balls of the frame; next 1 ball added as bonus." },
    { title: "Open frame", body: "Fewer than 10 pins down after both balls — no bonus, just the pin count." },
    { title: "Foul line", body: "Crossing the foul line while releasing = 0 pins scored for that throw." },
    { title: "10th frame special rules", body: "Strike = 2 bonus balls; spare = 1 bonus ball; a perfect 10th frame is 3 strikes in a row." },
    { title: "Gutter ball", body: "Ball rolls into the side gutter — counts as a throw with 0 pins." },
  ],
  advancedRules: [
    { title: "Oil patterns", body: "Lanes are oiled in specific patterns (house, sport, PBA Cheetah/Chameleon/Scorpion/Shark/Viper) that dramatically affect ball motion." },
    { title: "Split conversion", body: "When leftover pins have a gap (e.g., 7-10 split), converting is extremely difficult — the 7-10 has ~2% success rate." },
    { title: "Ball hook", body: "Curving the ball creates a better entry angle to the pocket (1-3 pin gap for right-handers); requires reactive-resin balls and grip technique." },
    { title: "Sport bowling handicap", body: "Under sport oil patterns, average scores drop by 30-50 pins vs house patterns." },
    { title: "Approach and slide", body: "The 15-ft approach ends in a controlled slide-and-release; footwork rhythm (4- or 5-step approach) is critical." },
  ],
  scoring: {
    summary: "Sum of pins knocked down per frame + strike/spare bonuses over 10 frames. Perfect game = 300.",
    breakdown: [
      { action: "Open frame", points: "Sum of pins knocked down (0-9)" },
      { action: "Spare (/)", points: "10 + first ball of next frame" },
      { action: "Strike (X)", points: "10 + next 2 balls" },
      { action: "10th frame strike", points: "10 + 2 bonus balls (up to 30)" },
      { action: "10th frame spare", points: "10 + 1 bonus ball (up to 20)" },
      { action: "Perfect game", points: "12 strikes in a row = 300", note: "USBC-certified perfect games number in the tens of thousands annually." },
    ],
    winCondition: "Highest total pin score over 10 frames (individual match); series total in league/tournament play.",
  },

  positions: [
    { name: "Lead-off / #1 bowler (team)", role: "Sets tone; usually consistent, moderate power.", count: 1 },
    { name: "Anchor / #5 bowler (team)", role: "Bowls last; the highest-average, clutch bowler.", count: 1 },
  ],
  officiating: {
    officials: ["Tournament Director", "Head Judge", "Lane Marshal"],
    summary: "Recreational bowling has no on-lane officials. Tournament play (USBC/PBA) has a Tournament Director and marshals to verify scores, oil pattern integrity, and foul-line calls.",
  },
  governingBodies: [
    { name: "United States Bowling Congress", acronym: "USBC", founded: 2005, headquarters: "Arlington, USA", website: "https://bowl.com/" },
    { name: "World Bowling", acronym: "IBF (International Bowling Federation)", founded: 1952, headquarters: "Lausanne, Switzerland", website: "https://www.worldbowling.org/" },
    { name: "Professional Bowlers Association", acronym: "PBA", founded: 1958, headquarters: "Chicago, USA", website: "https://www.pba.com/" },
  ],
  majorCompetitions: [
    { name: "PBA Tournament of Champions", frequency: "annual", founded: 1965, region: "USA" },
    { name: "USBC Masters", frequency: "annual", founded: 1951, region: "USA" },
    { name: "World Bowling Championships", frequency: "biennial", founded: 1954, region: "worldwide" },
    { name: "World Bowling Tour", frequency: "annual", founded: 2013, region: "worldwide" },
  ],
  countriesPlayed: ["US", "JP", "KR", "GB", "AU", "SE", "FI", "DE", "SG", "MY", "TW", "PH", "CA", "MX"],
  famousAthletes: [
    "Walter Ray Williams Jr. (USA) — 47 PBA titles, most ever",
    "Earl Anthony (USA) — first PBA bowler to reach $1M in earnings",
    "Pete Weber (USA) — 37 PBA titles; famous 'Who do you think you are, I am!' celebration",
    "Jason Belmonte (Australia) — two-handed bowler; 15 major titles, most ever",
    "Kelly Kulick (USA) — first woman to win a PBA Tour event (2010 Tournament of Champions)",
    "Norm Duke (USA) — 40 PBA titles",
  ],
  records: [
    { title: "Most PBA titles", holder: "Walter Ray Williams Jr.", value: "47", year: 2010 },
    { title: "Most PBA major titles", holder: "Jason Belmonte", value: "15 (as of 2024)", year: 2024 },
    { title: "Highest career USBC average", holder: "Jesper Svensson", value: "244+ (sport pattern)", year: 2023 },
    { title: "Certified perfect games in USBC (single year)", holder: "USBC records", value: "60,000+ certified 300s annually", year: 2019 },
    { title: "Youngest PBA champion", holder: "Anthony Simonsen", value: "19 years, USBC Masters", year: 2016 },
  ],

  variants: ["nine-pin-bowling", "candlepin-bowling", "duckpin-bowling", "five-pin-bowling", "lawn-bowls"],
  relatedSports: ["candlepin-bowling", "duckpin-bowling", "nine-pin-bowling", "petanque", "bocce"],

  skills: [
    "hand-eye coordination",
    "consistent release technique",
    "reading lane oil patterns",
    "controlled slide and footwork",
    "mental focus over 10 frames",
    "ball speed and rev-rate control",
  ],
  strategies: [
    { title: "Aim for the pocket", body: "Right-handers target the 1-3 pin gap; left-handers target the 1-2 gap. This maximises pin action for strikes." },
    { title: "Play the oil pattern", body: "House patterns funnel the ball toward the pocket; sport patterns require precise entry angles. Adjust your line and ball choice." },
    { title: "Two-handed vs one-handed", body: "Two-handed (Belmonte style) generates more revolutions and hook; harder to control." },
    { title: "Spare shooting", body: "Use a plastic ball with a straight, accurate line for spares — reduces hook risk." },
  ],

  terminology: [
    { term: "Strike (X)", meaning: "Knocking down all 10 pins with the first ball of a frame." },
    { term: "Spare (/)", meaning: "Knocking down all 10 pins using both balls of a frame." },
    { term: "Turkey", meaning: "Three consecutive strikes." },
    { term: "Four-bagger, Five-bagger…", meaning: "Four, five, or more consecutive strikes." },
    { term: "Perfect game", meaning: "12 strikes in a row = 300 points, the maximum score." },
    { term: "Split", meaning: "Non-adjacent leftover pins after the first ball — hard to convert." },
    { term: "Baby split", meaning: "The 2-7 or 3-10 split — one of the easier splits." },
    { term: "Bedposts", meaning: "The 7-10 split — one of the hardest to convert (~2% success)." },
    { term: "Pocket", meaning: "The gap between pins 1-3 (right) or 1-2 (left) — the ideal entry point for strikes." },
    { term: "Hook", meaning: "The curved trajectory of the ball; created by grip, revs, and lane friction." },
    { term: "Foul line", meaning: "The line at the start of the lane; crossing it voids the throw." },
    { term: "Gutter (channel)", meaning: "Trough on each side of the lane that catches errant balls." },
    { term: "Rev rate", meaning: "How many revolutions per minute the ball generates — affects hook potential." },
    { term: "Dutch 200", meaning: "A 200 game bowled entirely with alternating strikes and spares." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Fit the ball", body: "Try balls until fingers fit comfortably in the holes. House balls (6-14 lb) are pre-drilled." },
      { title: "Learn the approach", body: "Practice a 4-step approach ending in a slide on your non-dominant foot." },
      { title: "Release straight", body: "Start with a straight ball; learn to aim at the arrows on the lane, not at the pins." },
      { title: "Follow through", body: "Swing arm all the way up; keep shoulders square to the target." },
    ] },
    { level: "intermediate", steps: [
      { title: "Add hook", body: "Curl the ball at release using a reactive resin ball — better entry angle for strikes." },
      { title: "Adjust to lane pattern", body: "Learn to read oil dry-outs and shift your line inside or outside." },
      { title: "Consistent spare shooting", body: "Use a straight plastic ball for spares; practice the 3-6-9 or 2-4-6 spare system." },
      { title: "Play in a league", body: "Weekly USBC league play gives certified average and consistent competitive practice." },
    ] },
    { level: "advanced", steps: [
      { title: "Two-handed technique", body: "Learn Jason Belmonte-style two-handed delivery for extreme rev rate." },
      { title: "Multiple balls in bag", body: "Elite bowlers carry 3-5 balls with different cover-stock reactions for different conditions." },
      { title: "Sport pattern mastery", body: "PBA and sport patterns require precise ball position; use bowling coaches, video analysis." },
    ] },
  ],
  faq: [
    { question: "What is the highest score in bowling?", answer: "300 — a 'perfect game' consisting of 12 consecutive strikes (10 in frames 1-10 plus 2 bonus in the 10th)." },
    { question: "Why 10 pins and not 9?", answer: "Nine-pin bowling was popular in mid-1800s USA, but Connecticut banned it in 1841 to curb gambling. Bowlers added a 10th pin to create a technically-different game, and it stuck." },
    { question: "What's a strike, spare, and turkey?", answer: "Strike = all 10 pins with the first ball. Spare = all 10 with both balls. Turkey = three consecutive strikes." },
    { question: "How heavy is a bowling ball?", answer: "Balls range from 6 lb (children) to 16 lb (max legal). Most adult bowlers use 12-16 lb; average adult recreational is 14 lb." },
    { question: "Why do bowlers use different balls?", answer: "Different core designs and cover stocks (plastic, urethane, reactive resin) hook differently on various oil patterns. Pros carry 3-5+ balls for lane condition changes." },
    { question: "How do oil patterns affect bowling?", answer: "Lanes are conditioned with oil in specific patterns. 'House' patterns are easy and funnel the ball to the pocket. 'Sport' and PBA patterns require precise line and speed control — pro averages drop 30+ pins on these." },
  ],

  wikipediaTitle: "Ten-pin bowling",
  sources: [
    { label: "Wikipedia — Ten-pin bowling", url: "https://en.wikipedia.org/wiki/Ten-pin_bowling", publisher: "Wikipedia" },
    { label: "USBC — United States Bowling Congress", url: "https://bowl.com/", publisher: "USBC" },
    { label: "PBA — Professional Bowlers Association", url: "https://www.pba.com/", publisher: "PBA" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
