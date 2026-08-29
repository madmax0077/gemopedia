import type { Sport } from "@/lib/types";

export const nineBall: Sport = {
  id: "nine-ball",
  slug: "nine-ball",
  name: "Nine-Ball Pool",
  officialName: "Nine-Ball (WPA World Rules)",
  aliases: ["9-Ball", "Nineball"],
  shortDescription:
    "The fastest cue sport — hit the lowest-numbered ball first, but pot the 9-ball at any moment to win the rack, making 9-ball the sport of clutch shots and lightning breaks.",
  longDescription:
    "Nine-ball was invented in the USA in the 1920s-1930s as a quicker alternative to straight pool. Its rotation rule (lowest ball first) creates escalating tension while the 'combination on the 9' (pot 9 legally at any moment) enables sudden dramatic wins. WPA governs the world championship circuit; the Mosconi Cup (US vs Europe) is the sport's Ryder Cup equivalent. Efren Reyes, Shane van Boening, and Ko Pin-yi are legends of the modern game.",

  category: "precision-sports",
  subCategory: "cue sport (rotation-based)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (evolved from straight pool 1920s-1930s)",
  estimatedOrigin: "Popularized 1930s USA; WPA standardized 1990s; Mosconi Cup founded 1994",

  players: { min: 2, max: 2, note: "1v1 standard; team formats in Mosconi Cup, US Open, and other pro events." },
  field: {
    surfaceName: "Pool table",
    dimensions: "9-foot pro table (2.54 × 1.27 m)",
    description: "Diamond-shape 9-ball rack (1-ball at apex, 9-ball at center); green baize." },
  equipment: [
    { name: "Cue stick", description: "57-58 in, 18-21 oz; break cue often separate for high-speed breaks." },
    { name: "9 object balls (1-9) + cue ball", description: "Solid-color balls 1-8, plus striped 9-ball." },
    { name: "Diamond rack", description: "Wooden or plastic diamond frame (1 at front, 9 at center)." },
    { name: "Break cue (optional)", description: "Stiffer cue with harder tip specifically for the break shot." },
    { name: "Bridge / rest", description: "Standard aids." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Casual rack: 3-8 min. Tournament race to 9: 45-60 min. Mosconi Cup match: 2-4 hours across multiple races." },

  objective:
    "Hit the lowest-numbered ball on table first each shot; pot the 9-ball (legally) to win the rack.",
  matchStructure:
    "Break → alternate innings hitting lowest ball first → 9-ball pot ends rack. Match = race to N racks (usually 7, 9, or 11 in pro play).",

  basicRules: [
    { title: "Break", body: "Cue ball behind head string; 1-ball first, then rack. Ball pocketed on break = shooter continues." },
    { title: "Lowest ball first", body: "Every shot must hit lowest-numbered ball on table first; illegal contact = ball-in-hand for opponent." },
    { title: "Combination on the 9", body: "If contact with lowest-ball is legal, pocket 9-ball via combo = win rack." },
    { title: "3-foul rule", body: "3 consecutive fouls in one turn = loss of rack (some rulesets)." },
    { title: "Push-out after break", body: "Immediately after break, shooter can 'push out' (hit any ball); opponent chooses to shoot or return." },
  ],
  advancedRules: [
    { title: "Ball-in-hand", body: "After foul, opponent places cue ball anywhere on table." },
    { title: "Break rules (WPA)", body: "1-ball must be racked at apex; cue ball must contact 1-ball first; either a ball pocketed or 4 balls to rail = legal." },
    { title: "3-foul warning", body: "Referee must warn after 2nd consecutive foul." },
    { title: "Call shot (some rules)", body: "Non-standard 9-ball 'call shot' rules require you to call each pot; standard 9-ball allows luck rolls." },
  ],
  scoring: {
    summary: "Rack won by potting 9-ball legally. Match won by first to reach race total.",
    winCondition: "First to win race total (7, 9, or 11 racks typical).",
    breakdown: [
      { action: "Rack won", points: "1 game" },
      { action: "Mosconi Cup event", points: "1 pt per match; team totals" },
    ],
  },
  penalties: [
    { title: "Not hitting lowest ball first", body: "Ball-in-hand for opponent." },
    { title: "Cue-ball scratch", body: "Ball-in-hand for opponent." },
    { title: "3 consecutive fouls", body: "Loss of rack." },
  ],

  positions: [
    { name: "Shooter", role: "Active player.", count: 1 },
    { name: "Opponent", role: "Seated; monitors rule compliance." },
  ],
  officiating: {
    officials: ["Referee (professional matches)"],
    summary: "WPA tournaments assign a referee per match; league play may use players themselves.",
  },

  governingBodies: [
    { name: "World Pool-Billiard Association (WPA)", founded: 1987, headquarters: "Sanford, Florida, USA", website: "https://wpapool.com" },
    { name: "Matchroom Sport (Mosconi Cup organizer)", founded: 1982, headquarters: "London, UK", website: "https://matchroompool.com" },
  ],
  majorCompetitions: [
    { name: "WPA World 9-Ball Championship", frequency: "annual", founded: 1990, region: "rotating" },
    { name: "US Open 9-Ball Championship", frequency: "annual", founded: 1976, region: "USA (Norfolk, Virginia)" },
    { name: "Mosconi Cup (USA vs Europe)", frequency: "annual (December)", founded: 1994, region: "Las Vegas rotating" },
    { name: "World Pool Championship (Matchroom)", frequency: "annual", founded: 2004, region: "rotating" },
  ],
  countriesPlayed: ["US", "PH", "TW", "GB", "DE", "ES", "PL", "AU", "JP", "AT"],
  famousAthletes: [
    "Efren 'Bata' Reyes (PHI, 4-time WPA 9-Ball World Champion)",
    "Shane van Boening (US, multi-time US Open champion)",
    "Ko Pin-yi (TW, WPA 9-Ball World Champion)",
    "Fedor Gorst (RU, US Open + WPA World Champion)",
    "Jayson Shaw (SCO, Mosconi Cup MVP + multiple worlds)",
  ],
  records: [
    { title: "Fastest race to 9 in professional play", holder: "Efren Reyes vs. Earl Strickland", value: "Classic 'Color of Money' 1996", year: 1996 },
    { title: "Highest single-tournament prize (WPA 9-Ball)", holder: "WPA World Championship", value: "$100K+ winner's share", year: 2024 },
    { title: "Most 9-ball breaks in one match", holder: "Various pros", value: "Break + run in every rack", year: 2020 },
  ],

  variants: ["ten-ball", "eight-ball", "seven-ball", "chinese-eight-ball"],
  relatedSports: ["eight-ball", "ten-ball", "snooker", "one-pocket"],

  skills: [
    "aggressive cue-ball control",
    "pattern play + run-out planning",
    "combination + kick shot recognition",
    "safety play + defensive positioning",
    "break power + accuracy",
  ],
  strategies: [
    { title: "Break for the 9", body: "Position break to potentially combo the 9-ball on the break for instant win." },
    { title: "Position on the 1-ball", body: "First shot after break sets up entire run — plan pattern immediately." },
    { title: "Kick shots for safety", body: "When no direct shot on lowest ball, bank cue ball off rail to leave opponent no shot." },
    { title: "Watch for combos", body: "Always scan for lowest-ball + 9-ball combos — game-winning shots hide in every rack." },
  ],

  terminology: [
    { term: "Push-out", meaning: "First shot after break — shooter may play any legal shot without hitting lowest ball." },
    { term: "Break + run", meaning: "Pocketing a ball on the break then running all remaining balls without missing." },
    { term: "Combination on the 9", meaning: "Legal shot on lowest ball that also pots the 9-ball, winning the rack." },
    { term: "Ghost / kick", meaning: "Banking the cue ball off rails to hit legal ball." },
    { term: "Safety", meaning: "Defensive shot leaving no clear shot for opponent." },
    { term: "Race to N", meaning: "First player to N racks wins the match." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play 100 racks solo", body: "Practice full run-outs; each rack < 5 min." },
        { title: "Learn 15 standard positional shots", body: "Follow / draw / stop shots to specific target zones." },
        { title: "Enter local weekly tournaments", body: "Most pool halls host $10-$40 weekly 9-ball tournaments." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Study Efren Reyes matches", body: "YouTube archives of 'Bata' vs. Earl Strickland (1996) are the sport's Bible." },
        { title: "Compete in US Open 9-Ball", body: "Open tournament with $100K+ prize purse (Norfolk, VA)." },
        { title: "Earn Mosconi Cup selection", body: "USA/Europe team selection based on WPA ranking + Matchroom points." },
      ],
    },
  ],

  faq: [
    { question: "Can I win by potting the 9-ball on the break?", answer: "Yes — legal 9-on-the-break wins the rack instantly (in standard WPA rules)." },
    { question: "What if the 9-ball is potted early but the shot is illegal?", answer: "9-ball is spotted back on the table; other pocketed balls stay pocketed." },
    { question: "How is 9-ball different from 8-ball?", answer: "9-ball: rotation-based (lowest ball first), 9 balls only. 8-ball: pot your group's 7 balls + then 8, all balls used." },
    { question: "Why is 9-ball considered the pro standard?", answer: "Faster racks (5-8 min), fewer objects to track, and dramatic combo-on-the-9 finishes make 9-ball TV-friendly." },
  ],

  sources: [
    { label: "Wikipedia — Nine-ball", url: "https://en.wikipedia.org/wiki/Nine-ball", publisher: "Wikipedia" },
    { label: "WPA 9-Ball Rules", url: "https://wpapool.com/rules-of-play/", publisher: "WPA" },
    { label: "Matchroom Pool", url: "https://matchroompool.com", publisher: "Matchroom" },
  ],
  wikipediaTitle: "Nine-ball",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
