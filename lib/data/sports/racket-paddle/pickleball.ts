import type { Sport } from "@/lib/types";

export const pickleball: Sport = {
  id: "pickleball",
  slug: "pickleball",
  name: "Pickleball",
  officialName: "Pickleball",
  aliases: [],
  shortDescription:
    "Paddle sport on a small tennis-sized court using a perforated plastic ball and solid paddles — combines elements of tennis, badminton and table tennis. The fastest-growing sport in the United States.",
  longDescription:
    "Pickleball is a paddle sport played on a badminton-sized court (13.4 m × 6.1 m) with a lowered tennis-style net (86 cm at the sidelines), solid composite paddles and a perforated plastic ball. Two or four players hit the ball back and forth over the net; games are typically to 11 points (win by 2) with only the serving side scoring, though 'rally scoring to 15' is used in some pro tours. Invented in 1965 on Bainbridge Island, Washington by Joel Pritchard, Bill Bell and Barney McCallum for their bored children, it exploded in popularity after 2015 and is the fastest-growing sport in the United States, with the professional PPA and MLP tours and increasing global adoption.",

  category: "racket-paddle-sports",
  subCategory: "paddle sport",
  sportType: "mixed",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Bainbridge Island, Washington, USA",
  estimatedOrigin: "1965 (Pritchard, Bell, McCallum)",

  players: { min: 2, max: 4, note: "Singles (1v1) and doubles (2v2). Doubles is the more common competitive format." },
  field: {
    surfaceName: "pickleball court",
    dimensions: "Court 13.4 m × 6.1 m (44 × 20 ft); net 86 cm (34 in) at the sidelines / 91 cm at the posts; non-volley zone ('kitchen') 2.1 m (7 ft) from the net on each side.",
    description: "Small rectangular court with painted or taped lines. The 'kitchen' (non-volley zone) is a 7-ft area on either side of the net where players may not volley the ball.",
  },
  equipment: [
    { name: "Pickleball paddle", description: "Solid composite or graphite face, foam/honeycomb core; ~200-230 g, 40 cm long, 20 cm wide." },
    { name: "Pickleball", description: "Perforated plastic ball with 26-40 holes; indoor and outdoor versions with different weight and hole size." },
    { name: "Court shoes", description: "Non-marking court shoes with strong lateral support." },
    { name: "Net & posts", description: "Portable net setup similar to a lowered tennis net." },
    { name: "Eye protection", description: "Recommended, especially at the kitchen line.", optional: true },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Games typically to 11 points (win by 2); matches best-of-3 games. Pro tours often play best-of-5 with 15- or 21-point games.",
    note: "Recreational games last 10-20 minutes; competitive best-of-3 matches average 45-75 minutes.",
  },
  objective: "Win the point by making the opponent unable to legally return the ball, or by exploiting rally opportunities within the two-bounce rule.",
  matchStructure:
    "The serving side serves diagonally into the opposite service court. The ball must bounce once on each side (two-bounce rule) before either side may volley. Only the serving side scores points; if the serving side loses the rally, the serve goes to the other side (traditional scoring). Games to 11, win by 2. In doubles, both partners serve before the side-out (with an exception on the very first service turn of the game).",

  basicRules: [
    { title: "Underhand serve", body: "Server must strike the ball below the waist with an upward arc, from behind the baseline; both feet behind the line at contact." },
    { title: "Diagonal service", body: "Serve must land in the opponent's diagonal service court (past the kitchen line)." },
    { title: "Two-bounce rule", body: "After the serve, the returning team must let the ball bounce; the serving team must also let the return bounce before either side may volley." },
    { title: "Non-volley zone (kitchen)", body: "Players may not volley the ball while touching the kitchen or its line; may enter the kitchen only to play a ball after it bounces." },
    { title: "Rally continues", body: "After the two initial bounces, either team may volley (hit before bounce) as long as they aren't standing in the kitchen." },
    { title: "Scoring", body: "Traditional: only the server scores. Rally scoring (some pro tours since 2023): every rally scores." },
    { title: "Win the game", body: "First to 11 points, win by 2." },
  ],
  advancedRules: [
    { title: "Doubles serving sequence", body: "Both partners serve before the side-out (call the score as 'server number 1 or 2'). Exception: the first service turn of the game allows only one server (0-0-2)." },
    { title: "Line calls", body: "Ball landing on any part of the line is in. Players call their own lines in recreational play; officials call at pro level." },
    { title: "Serve rotation", body: "Server switches courts (left/right) after each point their side wins; the receiver's team does not rotate." },
    { title: "Let serve", body: "As of 2021, a serve that touches the net and lands in the correct service court is legal (no 'let')." },
    { title: "Drop serve", body: "Since 2021, an alternative underhand 'drop serve' is legal — ball dropped from any height and struck after one bounce." },
  ],
  scoring: {
    summary: "Traditional side-out scoring: only the serving side scores; game to 11, win by 2.",
    breakdown: [
      { action: "Winning a rally on serve", points: "1 to server", note: "Score called as 'server score-receiver score-server number' in doubles." },
      { action: "Winning a rally on return", points: "0 (side-out; serve changes)", note: "In doubles, second server tries after first server loses." },
      { action: "Reaching 11 with 2-point lead", points: "game win" },
    ],
    winCondition: "Best-of-3 (or best-of-5 pro) games to 11 (or 15/21 in pro), win by 2.",
  },

  officiating: {
    officials: ["Referee (pro/tournament)", "Line judges (pro tournaments)"],
    summary: "Recreational play is self-officiated. Tournament play uses a referee (calling non-volley zone, foot faults, serve legality) and line judges at pro level.",
  },
  governingBodies: [
    { name: "USA Pickleball", founded: 1984, headquarters: "Surprise, Arizona, USA", website: "https://usapickleball.org" },
    { name: "International Federation of Pickleball", acronym: "IFP", founded: 2010, headquarters: "Arizona, USA", website: "https://www.internationalpickleballfederation.org" },
    { name: "Professional Pickleball Association", acronym: "PPA", founded: 2018, headquarters: "Orlando, USA", website: "https://ppatour.com" },
    { name: "Major League Pickleball", acronym: "MLP", founded: 2021, headquarters: "Austin, USA" },
  ],
  majorCompetitions: [
    { name: "US Open Pickleball Championships", frequency: "annual", founded: 2016, region: "USA (Naples, Florida)" },
    { name: "PPA Tour", frequency: "annual", founded: 2019, region: "worldwide (mostly USA)" },
    { name: "Major League Pickleball", frequency: "annual", founded: 2021, region: "USA (team format)" },
    { name: "USA Pickleball National Championships", frequency: "annual", founded: 2009, region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "IN", "MX", "GB", "AU", "ES", "IT", "FR", "DE", "JP", "SG", "AE"],
  famousAthletes: [
    "Ben Johns",
    "Anna Leigh Waters",
    "Tyson McGuffin",
    "Jessie Irvine",
    "Simone Jardim",
    "Riley Newman",
    "Federico Staksrud",
    "Catherine Parenteau",
    "Jack Sock (crossover from tennis)",
    "Andrea Koop",
  ],
  records: [
    { title: "Most PPA singles titles (men, career)", holder: "Ben Johns", value: "60+", year: 2024 },
    { title: "Youngest US Open champion", holder: "Anna Leigh Waters", value: "12 years old (mixed doubles)", year: 2019 },
    { title: "Longest No. 1 ranking (women)", holder: "Anna Leigh Waters", value: "3+ years continuous", year: 2024 },
    { title: "Fastest-growing sport (USA)", holder: "USA Pickleball", value: "36.5M players (2023)", year: 2023 },
  ],

  variants: ["singles-pickleball", "doubles-pickleball", "wheelchair-pickleball", "beach-pickleball"],
  relatedSports: ["tennis", "badminton", "table-tennis", "padel", "racquetball"],

  skills: [
    "hand-eye coordination",
    "quick reflexes at the kitchen line",
    "soft-hand touch (dink and drop)",
    "spin and paddle-angle control",
    "shot placement and patience",
    "reading opponent's paddle angle",
    "positioning in doubles",
  ],
  strategies: [
    { title: "Get to the kitchen", body: "The team that controls the non-volley line usually wins — patient dink rallies until an attackable ball appears." },
    { title: "Third-shot drop", body: "After the serve and return, the serving side hits a soft drop shot into the kitchen to neutralise the returner's advantage." },
    { title: "Stack (doubles)", body: "Position both partners on the same side pre-serve to keep the stronger forehand in the middle." },
    { title: "Poach", body: "Cross the middle in doubles to intercept a slow ball across your partner's side." },
  ],

  terminology: [
    { term: "Kitchen (NVZ)", meaning: "The 7-ft non-volley zone on each side of the net; you may not volley while touching it." },
    { term: "Dink", meaning: "Soft shot that just clears the net and lands in the opponent's kitchen." },
    { term: "Third-shot drop", meaning: "Soft return of the return-of-serve into the opponent's kitchen — key strategic shot." },
    { term: "Drive", meaning: "Hard, flat shot with pace to force an error or set up the next shot." },
    { term: "Volley", meaning: "Shot struck before the ball bounces — legal only outside the kitchen." },
    { term: "Groundstroke", meaning: "Shot after the ball has bounced." },
    { term: "Ernie", meaning: "Aggressive volley by jumping around the kitchen to attack an angled shot." },
    { term: "ATP (Around the Post)", meaning: "Legal shot passing around, not over, the net post." },
    { term: "Stack", meaning: "Doubles pre-serve formation keeping preferred forehand players on advantageous sides." },
    { term: "Poach", meaning: "In doubles, cross the middle to intercept a ball going to your partner's side." },
    { term: "Side-out", meaning: "The receiving team wins the rally and gains the serve." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Continental grip", body: "The all-purpose grip — same for forehand, backhand, dinks and volleys." },
      { title: "Basic serve", body: "Underhand from behind the baseline, aimed diagonally past the kitchen line." },
      { title: "Two-bounce rule", body: "Let the ball bounce on both sides before starting to volley." },
      { title: "Dink at the kitchen", body: "Practice soft, arced shots that land in the opposite kitchen." },
    ] },
    { level: "intermediate", steps: [
      { title: "Third-shot drop", body: "Soft return with backspin that dies in the opponent's kitchen." },
      { title: "Doubles positioning", body: "Both partners at the kitchen line after each rally; retreat together." },
      { title: "Spin serves & returns", body: "Add slice and topspin for advantage; use paddle face angle." },
      { title: "Match play", body: "First tournaments in singles or doubles." },
    ] },
    { level: "advanced", steps: [
      { title: "Attacking dinks", body: "Rise the ball just above the net for a smashable ball — force the opponent to hit up." },
      { title: "Stack strategy", body: "Learn doubles stacking to protect a weaker side or exploit an opponent." },
      { title: "Ernies and ATPs", body: "Add aggressive shots that exploit ball position and net geometry." },
    ] },
  ],
  faq: [
    { question: "Where does the name 'pickleball' come from?", answer: "One story: named after the Pritchards' dog Pickles who chased loose balls. Another: from 'pickle boat', the boat with a rowing crew made of leftover rowers — reflecting the sport being made from tennis + badminton + ping-pong pieces." },
    { question: "How is pickleball different from tennis?", answer: "Smaller court, lower net, solid paddle (not strings), perforated plastic ball, underhand serve, two-bounce rule, and a non-volley zone at the net." },
    { question: "Why is the non-volley zone called the 'kitchen'?", answer: "Origin is unclear — possibly borrowed from shuffleboard where the losing zone was called the kitchen. The name stuck." },
    { question: "How popular is pickleball?", answer: "According to the Sports & Fitness Industry Association, participation in the USA grew from 3.5 M (2019) to 36.5 M (2023) — the fastest-growing sport in the country for four consecutive years." },
    { question: "Is pickleball at the Olympics?", answer: "Not yet — inclusion in future Games is being pursued but is not currently on the programme through 2028." },
  ],

  wikipediaTitle: "Pickleball",
  sources: [
    { label: "Wikipedia — Pickleball", url: "https://en.wikipedia.org/wiki/Pickleball", publisher: "Wikipedia" },
    { label: "USA Pickleball Official Rules", url: "https://usapickleball.org/what-is-pickleball/official-rules/", publisher: "USA Pickleball" },
    { label: "IFP", url: "https://www.internationalpickleballfederation.org", publisher: "International Federation of Pickleball" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
