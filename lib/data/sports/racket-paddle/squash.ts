import type { Sport } from "@/lib/types";

export const squash: Sport = {
  id: "squash",
  slug: "squash",
  name: "Squash",
  officialName: "Squash",
  aliases: ["Squash racquets"],
  shortDescription:
    "Racquet sport played on a four-walled indoor court where two players alternate hitting a small rubber ball against the front wall — fast, tactical, and endurance-demanding.",
  longDescription:
    "Squash is a fast racquet sport played by two (singles) or four (doubles) players in a four-walled court, alternately striking a small hollow rubber ball above the front-wall tin. The ball must hit the front wall (directly or indirectly via side/back walls) before returning; failure to do so loses the point. Matches are played best-of-five games to 11 points using rally-point scoring (PAR11). The game was invented at Harrow School in London around 1830 when boys discovered that a punctured racquets ball 'squashed' on impact, opening up more tactical shot-making. The World Squash Federation governs the international sport; the PSA World Tour organises professional competition. Squash is confirmed for the 2028 Los Angeles Olympics.",

  category: "racket-paddle-sports",
  subCategory: "wall-court racquet sport",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (Harrow School, London)",
  estimatedOrigin: "c. 1830 (Harrow School); modern rules 1911 (first codified); LA 2028 Olympic debut",

  players: { min: 2, max: 4, note: "Singles (1v1) is standard; doubles (2v2) is played in a wider court and less common professionally." },
  field: {
    surfaceName: "squash court",
    dimensions: "9.75 m long × 6.4 m wide × 5.64 m high (singles). Front wall marked with three lines: 43 cm tin at the bottom, 1.78 m service line, 4.57 m out-line.",
    description: "Four-walled indoor court with a hardwood or synthetic sprung floor. Front wall has the tin, service line and out-line; side and back walls are marked with lines defining out-of-court.",
  },
  equipment: [
    { name: "Squash racquet", description: "Composite frame ~215-235 g, teardrop or oval head, thin gauge strings." },
    { name: "Squash ball", description: "Small hollow rubber ball (40 mm diameter, ~24 g) with coloured dots indicating bounce speed: yellow dot (slowest, tournament), red (fast, warmer conditions), blue (very fast, beginners)." },
    { name: "Court shoes", description: "Non-marking gum-soled shoes with strong lateral support." },
    { name: "Protective eyewear", description: "Mandatory in doubles and for juniors; strongly recommended in singles." },
    { name: "Grip", description: "Overgrip on the handle for sweat management.", optional: true },
    { name: "Wristband / headband", description: "Sweat control accessories.", optional: true },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Best-of-5 games to 11 (win by 2) using PAR11 rally-point scoring; games typically last 8-15 minutes.",
    note: "Elite 5-game matches can run 60-120 minutes at extreme physical intensity.",
  },
  objective: "Win 3 games (best-of-5) by scoring more points than the opponent through legal shots that the opponent cannot return.",
  matchStructure:
    "Coin toss decides the first server. The server serves from a service box, sending the ball above the service line on the front wall to land beyond the short line in the opponent's back quarter. Rallies alternate until a player fails a legal return (ball hits tin, out, or bounces twice). Every rally scores a point (PAR11 scoring). At 10-10 play continues until a 2-point margin.",

  basicRules: [
    { title: "Legal serve", body: "Server stands with at least one foot in the service box; strikes the ball direct or with one bounce; ball must hit above the service line on the front wall and land in the opponent's back quarter." },
    { title: "Legal return", body: "Ball must be struck before its second bounce and must hit the front wall (directly or via side/back walls) above the tin, below the out-line." },
    { title: "Tin", body: "Bottom 43 cm strip of the front wall — hitting it is 'in the tin', a lost point." },
    { title: "Out", body: "Above the front-wall out-line or the side-wall out-lines is out of play." },
    { title: "Alternating hits", body: "Players alternate returning the ball; you cannot hit twice in succession." },
    { title: "Let / Stroke / No let", body: "If a player's swing is impeded, they request a 'let'. Referee awards: (a) let (replay), (b) stroke (rally-winning point) if the opponent completely blocked the winning shot, or (c) no let (continue play)." },
    { title: "Rally-point scoring (PAR11)", body: "Every rally awards a point to the winning side (no side-out); games to 11, win by 2." },
  ],
  advancedRules: [
    { title: "Interference & clearing", body: "The striker has the right to swing and hit the ball to the front wall. The non-striker must clear a fair path — inadequate clearing draws a stroke." },
    { title: "Turning", body: "A player who turns 180° to strike the ball must be able to hit it safely with no interference risk; unsafe turning is a let for interference or stroke for danger." },
    { title: "Conduct rules", body: "Warnings, conduct strokes, conduct games and match forfeitures for unsportsmanlike behaviour or dissent." },
    { title: "Injury", body: "Contact injury caused by an opponent — 15-min recovery time. Self-caused — 3-min recovery." },
    { title: "Video review", body: "Elite events use video review on line calls and interference; challenge system introduced in 2018." },
  ],
  scoring: {
    summary: "PAR11: rally-point scoring, every rally awards a point.",
    breakdown: [
      { action: "Legal winner", points: "1", note: "Opponent cannot return before second bounce." },
      { action: "Opponent's error (tin, out, double-bounce)", points: "1" },
      { action: "Stroke (interference)", points: "1", note: "Awarded when opponent obstructed a winning shot." },
    ],
    winCondition: "Best-of-5 games; each game to 11 (win by 2 from 10-10 onward).",
  },
  penalties: [
    { title: "Conduct warning", body: "Verbal warning for dissent, delay, ball-abuse, foul language." },
    { title: "Conduct stroke", body: "Point awarded to opponent for repeated offences." },
    { title: "Conduct game", body: "Game awarded to opponent for severe or repeated conduct violations." },
    { title: "Conduct match", body: "Match forfeited to opponent for extreme or dangerous behaviour." },
  ],

  officiating: {
    officials: ["Referee (on marker's platform above back wall)", "Marker (calls the score)", "Video Review Officer (elite events)"],
    summary: "Three-official system: the referee rules on lets and strokes; the marker calls the score and out; players can appeal to the referee.",
  },
  governingBodies: [
    { name: "World Squash Federation", acronym: "WSF", founded: 1966, headquarters: "London, UK", website: "https://www.worldsquash.org" },
    { name: "Professional Squash Association", acronym: "PSA", founded: 1975, headquarters: "London, UK", website: "https://www.psaworldtour.com" },
  ],
  majorCompetitions: [
    { name: "PSA World Championships", frequency: "annual", founded: 1976, region: "worldwide" },
    { name: "British Open", frequency: "annual", founded: 1922, region: "United Kingdom", note: "The oldest and most prestigious title; the sport's original 'grand slam'." },
    { name: "US Open Squash Championships", frequency: "annual", founded: 1954, region: "United States" },
    { name: "Windy City Open (Chicago)", frequency: "annual", founded: 1998, region: "United States" },
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 2028, region: "worldwide", note: "Debut at LA 2028." },
    { name: "Commonwealth Games", frequency: "quadrennial", founded: 1998, region: "Commonwealth of Nations" },
  ],
  countriesPlayed: ["EG", "GB", "AU", "NZ", "IN", "MY", "FR", "US", "CO", "MX", "PK", "PE", "ES", "DE", "HK"],
  famousAthletes: [
    "Jahangir Khan",
    "Jansher Khan",
    "Ramy Ashour",
    "Nick Matthew",
    "Ali Farag",
    "Mohamed ElShorbagy",
    "Nicol David",
    "Nour El Sherbini",
    "Nouran Gohar",
    "Peter Nicol",
  ],
  records: [
    { title: "Longest unbeaten run (all events)", holder: "Jahangir Khan", value: "555 matches (1981-86)", year: 1986 },
    { title: "Most PSA World Championships (men)", holder: "Jansher Khan", value: "8", year: 1996 },
    { title: "Most PSA World Championships (women)", holder: "Nicol David", value: "8", year: 2014 },
    { title: "Longest world No. 1 reign (women)", holder: "Nicol David", value: "108 months", year: 2015 },
  ],

  variants: ["doubles-squash", "hardball-squash", "racketball", "squash57"],
  relatedSports: ["racquetball", "real-tennis", "padel"],

  skills: [
    "quick lateral movement",
    "wrist snap and racquet control",
    "reading opponent's body language",
    "shot selection under fatigue",
    "T-court positioning",
    "endurance for long rallies",
    "reading side-wall angles",
  ],
  strategies: [
    { title: "Command the T", body: "Return to the intersection of the short and half-court lines after each shot — the most central position on court." },
    { title: "Length and width", body: "Deep, tight-to-wall shots pin the opponent in the back; volleys and boasts open the court." },
    { title: "Attack the boast", body: "Hit off the side wall to angle across court and pull the opponent forward." },
    { title: "Pace variation", body: "Mix hard drives with soft drops and lobs to disrupt rhythm." },
  ],

  terminology: [
    { term: "T", meaning: "Intersection of the half-court and short line — the ideal court position." },
    { term: "Tin", meaning: "Bottom 43 cm of the front wall — hitting it loses the point." },
    { term: "Rail (drive)", meaning: "Straight shot down the side wall, close to the wall." },
    { term: "Cross-court", meaning: "Diagonal drive across the court." },
    { term: "Boast", meaning: "Shot hit off the side wall to reach the front wall at an angle." },
    { term: "Drop shot", meaning: "Soft shot into the front corner just above the tin." },
    { term: "Lob", meaning: "High, soft shot that lands deep in the back court." },
    { term: "Nick", meaning: "Winning shot that hits the exact junction of side wall and floor, killing the bounce." },
    { term: "Let", meaning: "Replayed point due to interference (no fault)." },
    { term: "Stroke", meaning: "Point awarded due to interference that would have prevented a winning shot." },
    { term: "Volley", meaning: "Striking the ball before it bounces — used to seize the T." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Grip and stance", body: "Continental grip; feet shoulder-width, knees flexed, weight forward." },
      { title: "Racquet swing", body: "Compact take-back, wrist cock, contact in front of the body." },
      { title: "Basic drives", body: "Straight down-the-wall drives from front and back court." },
      { title: "Serve and return", body: "Legal serve above the service line; return with a straight drive to the back." },
    ] },
    { level: "intermediate", steps: [
      { title: "T-positioning", body: "Return to the T between shots; economise movement." },
      { title: "Boast, drop and lob", body: "Add short-court variations to your drive game." },
      { title: "Volley game", body: "Cut off cross-courts before they reach the back — attack the T." },
      { title: "Match play", body: "Play full 3-game matches to develop rally endurance." },
    ] },
    { level: "advanced", steps: [
      { title: "Deception", body: "Same racquet preparation for drive, drop and boast to disguise intent." },
      { title: "Endurance training", body: "Ghosting drills, court sprints and interval work to survive 5-game matches." },
      { title: "Reading opponent", body: "Anticipate shots from body position; return to a court zone that shortens your movement." },
    ] },
  ],
  faq: [
    { question: "Why is it called squash?", answer: "The rubber ball 'squashes' when it hits the wall (compressing significantly on impact), giving the game its distinctive slow bounce and tactical possibilities." },
    { question: "When is squash finally an Olympic sport?", answer: "Los Angeles 2028 — confirmed by the IOC in 2023 after decades of bids." },
    { question: "What do the coloured dots on the ball mean?", answer: "They indicate bounce speed and warmth: yellow (slowest, elite play), red (medium, warm courts), blue (fastest, beginner practice), green (medium slow)." },
    { question: "Why is squash so physically demanding?", answer: "Rallies at elite level average 12-18 shots; a 5-game match can require 8-12 km of high-intensity running in a confined space with quick direction changes." },
    { question: "What is a 'nick'?", answer: "A winning shot that lands exactly at the corner between side wall and floor, killing the bounce and making a return impossible." },
  ],

  wikipediaTitle: "Squash (sport)",
  sources: [
    { label: "Wikipedia — Squash (sport)", url: "https://en.wikipedia.org/wiki/Squash_(sport)", publisher: "Wikipedia" },
    { label: "World Squash Federation — Rules", url: "https://www.worldsquash.org/refereeing-rules/", publisher: "World Squash Federation" },
    { label: "PSA World Tour", url: "https://www.psaworldtour.com", publisher: "Professional Squash Association" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
