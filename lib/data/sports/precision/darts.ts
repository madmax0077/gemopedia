import type { Sport } from "@/lib/types";

export const darts: Sport = {
  id: "darts",
  slug: "darts",
  name: "Darts",
  officialName: "Darts",
  aliases: ["501 Darts", "'01 Darts"],
  shortDescription:
    "Precision throwing sport in which players hurl small missiles at a segmented circular board, aiming to reduce a starting score (usually 501) to exactly zero, finishing on a double.",
  longDescription:
    "Darts is a competitive throwing sport where players stand 7 ft 9¼ in (2.37 m) from a circular sisal-fibre board 5 ft 8 in (1.73 m) off the ground and throw metal-tipped darts to score points. The board is divided into 20 numbered segments (1-20) plus a bullseye (25 outer, 50 inner). Each segment has a triple-ring (inner, 3× score) and double-ring (outer, 2× score). The most common professional game is '501' — players start at 501 and race to exactly zero by subtracting the score of each throw; the winning throw must land on a double. Modern darts was codified in early-20th-century English pubs and grew into a global professional sport with the PDC (Professional Darts Corporation) hosting the PDC World Championship at Alexandra Palace, London, each Christmas — one of the biggest annual TV sporting events in the UK.",

  category: "precision-sports",
  subCategory: "throwing / target",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England",
  estimatedOrigin: "Late medieval as arrow-throwing at wine casks; modern board layout attributed to Brian Gamlin (Bury, England) in 1896; codified in English pubs early 1900s",

  players: { min: 1, max: 4, note: "Singles (1v1) and doubles (2v2) are standard. Practice can be solo." },
  field: {
    surfaceName: "oche and dartboard",
    dimensions: "Board: 17.75 in (45.1 cm) diameter; height to bullseye 5 ft 8 in (1.73 m). Throw line (oche): 7 ft 9¼ in (2.37 m) from board face.",
    description: "Bristle (sisal-fibre) dartboard with 20 numbered segments in a specific non-sequential order (20-1-18-4-13-6-10-15-2-17-3-19-7-16-8-11-14-9-12-5). Concentric rings: triple (inner narrow), double (outer narrow), bullseye (25 outer, 50 inner).",
  },
  equipment: [
    { name: "Darts", description: "3 per turn. Weight 18-50 g (pro standard 20-25 g). Materials: tungsten (elite), brass, or nickel-silver barrel; flights (paper or nylon) at tail; shaft in nylon or aluminium." },
    { name: "Dartboard", description: "Bristle (sisal fibre) for professional play; some casual boards use cork or plastic 'soft-tip' with electronic scoring." },
    { name: "Oche", description: "Throw line 7 ft 9¼ in from board." },
    { name: "Scoreboard / scoring", description: "Chalk board in pubs; electronic display in pro venues." },
  ],
  duration: {
    approximateMinutes: 25,
    structure: "One 501 leg = 3-8 minutes (12-24 darts). Sets = best of 5-7 legs; matches = best of 5-11 sets.",
    note: "PDC World Championship final: best of 13 sets, first to 7, can run 3+ hours.",
  },
  objective: "Reduce your score from 501 (or other agreed start) to exactly zero, with the final dart landing in a double or the inner bullseye (bull double).",
  matchStructure:
    "Both players start at 501. In turn, each player throws 3 darts and subtracts the total scored from their remaining total. Play continues until one player reaches exactly zero — but the winning dart MUST land on a double (or the bull double, 50). Exceeding zero, or leaving 1 point remaining (impossible finish), is a 'bust' — the throw doesn't count and the score reverts. First player to zero wins the leg. Legs win sets; sets win matches (best-of format).",

  basicRules: [
    { title: "Throw 3 darts per turn", body: "Alternate turns; each player throws 3 darts and the total is subtracted from their remaining score." },
    { title: "Start from 501", body: "Standard singles = 501. Doubles = 701 or 1001. Some leagues use 301 with double-in start." },
    { title: "Double-out finish", body: "Winning dart must land on a double (2× ring) or the inner bull (50, which is a double 25)." },
    { title: "Bust rule", body: "If a throw brings your score below 2, or leaves 1, or overshoots zero, the turn is 'bust' and the score reverts to pre-turn total." },
    { title: "Order of play", body: "Winner of previous leg throws first in the next leg (some formats alternate throw regardless)." },
    { title: "Dart must stay", body: "A dart that bounces out, sticks in another dart, or falls before removal doesn't score." },
  ],
  advancedRules: [
    { title: "Checkout finishing", body: "The route to zero on 170 max checkout (T20-T20-Bull) or common ones (170, 167, 164, 161, 160). Professionals memorise 100+ finishing combinations." },
    { title: "Double-in start", body: "Some leagues require starting with a double before any score counts (rare in pro play)." },
    { title: "Setup shots", body: "A pro on 82 points might throw T14 (42) to leave 40 — an easier double 20 finish." },
    { title: "9-dart finish", body: "The perfect leg from 501 in only 9 darts. Requires precise 3-dart combinations like T20-T20-T20 / T20-T20-T20 / T20-T19-D12. Only ~60 have been televised." },
    { title: "Soft-tip and electronic", body: "Soft-tip darts use plastic tips on electronic boards popular in USA/Japan. Scoring is automatic; game modes are more varied (Cricket, Count-Up, etc.)." },
  ],
  scoring: {
    summary: "Each dart scores its segment value × multiplier (single = 1×, double = 2×, triple = 3×). Bullseye: 25 outer / 50 inner.",
    breakdown: [
      { action: "Single segment (large area)", points: "Segment number (1-20)" },
      { action: "Double ring (thin outer)", points: "Segment number × 2 (2-40)" },
      { action: "Triple ring (thin inner)", points: "Segment number × 3 (3-60)" },
      { action: "Outer bullseye", points: "25" },
      { action: "Inner bullseye (bull)", points: "50 (counts as double 25)" },
      { action: "Miss (outside scoring area)", points: "0" },
      { action: "Maximum 3-dart score", points: "180 (T20-T20-T20)" },
    ],
    winCondition: "Reduce score to exactly zero with a double or inner bull for the final dart; win agreed number of legs, sets, or matches.",
  },

  officiating: {
    officials: ["Referee (calls scores)", "Chalker (records)", "MC / Master of Ceremonies"],
    summary: "Professional matches have a referee who calls each player's score after they throw ('One hundred and EIGHTYYY!' for a max), and a chalker who records on-screen totals.",
    signals: [
      { name: "'One hundred and eighty!'", description: "Referee's dramatic call for the maximum 3-dart score of 180." },
      { name: "'Game shot!'", description: "Called when a player finishes a leg with a double." },
    ],
  },
  governingBodies: [
    { name: "Professional Darts Corporation", acronym: "PDC", founded: 1992, headquarters: "Milton Keynes, UK", website: "https://www.pdc.tv/" },
    { name: "British Darts Organisation (defunct 2020)", acronym: "BDO", founded: 1973, headquarters: "London, UK" },
    { name: "World Darts Federation", acronym: "WDF", founded: 1976, headquarters: "Sallanches, France", website: "https://www.dartswdf.com/" },
  ],
  majorCompetitions: [
    { name: "PDC World Darts Championship (Alexandra Palace)", frequency: "annual", founded: 1994, region: "worldwide (held in London)" },
    { name: "Premier League Darts", frequency: "annual (Feb-May)", founded: 2005, region: "UK / Europe touring" },
    { name: "World Matchplay (Blackpool Winter Gardens)", frequency: "annual", founded: 1994, region: "UK" },
    { name: "World Grand Prix (double-in double-out)", frequency: "annual", founded: 1998, region: "Ireland / UK" },
    { name: "Grand Slam of Darts", frequency: "annual", founded: 2007, region: "UK" },
  ],
  countriesPlayed: ["GB", "NL", "AU", "DE", "US", "AT", "BE", "IE", "NZ", "SE", "FI", "PH", "JP", "CA", "PL"],
  famousAthletes: [
    "Phil 'The Power' Taylor (England) — 16× World Champion, GOAT",
    "Michael van Gerwen (Netherlands) — 3× World Champion, dominant 2010s",
    "Luke Humphries (England) — reigning World Champion 2024",
    "Luke Littler (England) — 17-year-old 2024 World Final runner-up; 2025 World Champion",
    "Peter Wright (Scotland) — 2× World Champion; flamboyant persona 'Snakebite'",
    "Fallon Sherrock (England) — first woman to beat a man at PDC World Championship (2019)",
    "Eric Bristow (England) — 5× BDO World Champion, 'Crafty Cockney', founding legend",
    "John Lowe (England) — first televised 9-dart finish (1984)",
    "Raymond van Barneveld (Netherlands) — 5× World Champion (4 BDO, 1 PDC)",
  ],
  records: [
    { title: "Most World Championships (all-time)", holder: "Phil Taylor", value: "16 (8 BDO + 8 PDC)", year: 2013 },
    { title: "Youngest ever PDC World Champion", holder: "Luke Littler", value: "17 years 347 days (2025)", year: 2025 },
    { title: "First televised 9-dart finish", holder: "John Lowe", value: "1984 MFI World Matchplay", year: 1984 },
    { title: "First PDC televised 9-dart finish", holder: "Phil Taylor", value: "2002 World Matchplay", year: 2002 },
    { title: "Highest 3-dart average in a televised match", holder: "Michael van Gerwen", value: "123.40 vs Michael Smith, 2016 Premier League", year: 2016 },
    { title: "First woman to win PDC ranked event", holder: "Beau Greaves / Fallon Sherrock", value: "Sherrock beat Ted Evetts 2019 PDC World Champs (first female win at Ally Pally)", year: 2019 },
  ],

  variants: ["501", "301", "cricket-darts", "around-the-clock", "shanghai", "killer", "soft-tip-darts", "electronic-darts"],
  relatedSports: ["shooting-sports", "archery", "axe-throwing"],

  skills: [
    "consistent throw mechanics",
    "mental arithmetic (checkout calculation)",
    "focus and composure",
    "eye-hand coordination",
    "memorising checkout combinations",
    "pressure management",
  ],
  strategies: [
    { title: "Aim for T20 (treble 20)", body: "The highest single-dart score. Most pros aim for treble 20 (60 points) as their first two darts every visit." },
    { title: "Setup on 32 or 40", body: "If your 3rd dart leaves 32 or 40, you're on a favourable double-16 or double-20 next visit." },
    { title: "Avoid 169, 168, 166, 165, 163, 162, 159", body: "These scores are impossible to check out in 3 darts (no combination reaches with a final double)." },
    { title: "Bull-out on 50", body: "If left on 50, hit the bull (double 25) for the finish — some pros always prefer bull; others avoid it." },
    { title: "Play the opponent's leg-throw", body: "Under pressure, know exactly what number the opponent will throw first (usually T20)." },
  ],

  terminology: [
    { term: "Oche", meaning: "The throw line, 7 ft 9¼ in from the board." },
    { term: "180", meaning: "The maximum 3-dart score: three treble 20s." },
    { term: "Ton (100+)", meaning: "Any 3-dart score of 100 or more." },
    { term: "Ton 80", meaning: "180 — the maximum score." },
    { term: "Treble 20 (T20)", meaning: "The treble ring of the 20 segment: 60 points." },
    { term: "Bullseye / Bull", meaning: "Inner bullseye = 50 (double 25); outer bull = 25." },
    { term: "Double out / Checkout", meaning: "The final dart must land on a double or bull to win the leg." },
    { term: "Leg", meaning: "One complete 501 game." },
    { term: "Set", meaning: "First to N legs (usually 3) wins a set." },
    { term: "9-darter", meaning: "The perfect 501 leg finished in only 9 darts." },
    { term: "Bust", meaning: "Overshooting zero, or leaving 1 remaining — turn is void." },
    { term: "Bed", meaning: "Grouping darts tightly together in the same segment ('all three in the bed')." },
    { term: "Robin Hood", meaning: "A dart that sticks into the flight of another dart. Doesn't count." },
    { term: "3-dart average", meaning: "The average score per 3-dart visit — the primary metric of skill. Pros average 95-105+; elite 105-115." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Grip and stance", body: "Stand with front foot on the oche; grip dart with 2-3 fingers; keep elbow high and steady." },
      { title: "Throwing motion", body: "Smooth forward release from ear/eye level; follow through pointing at target." },
      { title: "Aim for the 20", body: "Beginner target: single 20; graduate to treble 20." },
      { title: "Understand scoring", body: "Learn segment values, doubles, trebles, bullseye. Practice mental subtraction from 501." },
    ] },
    { level: "intermediate", steps: [
      { title: "Consistency drills", body: "Throw 100 darts at treble 20; track grouping and adjust." },
      { title: "Common checkouts", body: "Memorise checkouts for scores 40-100: 40 = D20, 60 = T20 or 20-D20, 100 = T20-D20." },
      { title: "Around the clock", body: "Hit 1, 2, 3, ... 20, bull in order. Builds accuracy across all segments." },
      { title: "Play in a pub league", body: "Weekly matches build competitive tempo and pressure handling." },
    ] },
    { level: "advanced", steps: [
      { title: "Full checkout chart mastery", body: "Memorise all checkouts 41-170 including alternative routes for tactical leaves." },
      { title: "Setup shots", body: "Plan the 3-dart visit to end on a preferred double (16 or 20 typically)." },
      { title: "Practice averaging 90+", body: "Elite recreational target: 100+ average. Requires 30-50 sessions of 1-2 hrs per week." },
      { title: "Compete on the WDF / Q-School", body: "Enter WDF ranking events and PDC Q-School (Qualifying School) for a Tour Card." },
    ] },
  ],
  faq: [
    { question: "How high is a dartboard?", answer: "The bullseye must be 5 ft 8 in (1.73 m) from the floor. The oche (throw line) is 7 ft 9¼ in (2.37 m) from the face of the board." },
    { question: "Why is 20 at the top?", answer: "The numbers are arranged to punish inaccuracy — high-value segments are flanked by low-value ones (20 is between 1 and 5). The arrangement was attributed to Brian Gamlin of Bury, England in 1896." },
    { question: "What is a 9-darter?", answer: "The theoretical minimum darts needed to finish a 501 leg. Requires two 3-dart 'maximum' visits of 180 (T20-T20-T20) followed by a 141 checkout (T20-T19-D12). Fewer than 100 televised 9-darters have ever been thrown." },
    { question: "Why must you finish on a double?", answer: "Rule tradition from early 20th-century pub darts. The double-out requirement adds skill and drama — many exciting matches turn on 'who can find double 16'." },
    { question: "How much do darts weigh?", answer: "Legal darts are 12-50 g total; professional darts typically weigh 20-26 g and are 90%+ tungsten for a slim, dense barrel." },
    { question: "Is Luke Littler really the youngest World Champion?", answer: "Yes — Luke Littler won the 2025 PDC World Darts Championship aged 17 years, 347 days, making him the youngest World Champion in the sport's history." },
  ],

  wikipediaTitle: "Darts",
  sources: [
    { label: "Wikipedia — Darts", url: "https://en.wikipedia.org/wiki/Darts", publisher: "Wikipedia" },
    { label: "Professional Darts Corporation (PDC)", url: "https://www.pdc.tv/", publisher: "PDC" },
    { label: "World Darts Federation (WDF)", url: "https://www.dartswdf.com/", publisher: "WDF" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
