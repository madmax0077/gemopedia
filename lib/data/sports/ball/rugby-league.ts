import type { Sport } from "@/lib/types";

export const rugbyLeague: Sport = {
  id: "rugby-league",
  slug: "rugby-league",
  name: "Rugby League",
  officialName: "Rugby League Football",
  aliases: ["League", "13-a-side rugby"],
  shortDescription:
    "13-a-side rugby code with faster, more open play — a team keeps possession for six tackles, then must score, kick, or hand the ball over.",
  longDescription:
    "Rugby league is a 13-a-side, full-contact team sport that split from rugby union in 1895 over payment for working-class players in northern England. The teams differ from union: 13 players (no flankers), no lineouts, no rucks or mauls, and a six-tackle rule — after being tackled the attacker plays the ball back with the foot to a team-mate and if the team is tackled six times without scoring or kicking, possession is handed over. Points: try 4, conversion 2, penalty goal 2, drop-goal 1 (or 2 in some leagues). Rugby league is the dominant winter sport in New South Wales and Queensland (Australia), massively popular in northern England (Super League) and internationally strong in Papua New Guinea, France, New Zealand, Tonga and Samoa.",

  category: "ball-sports",
  subCategory: "rugby football",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Northern England (Yorkshire, Lancashire)",
  estimatedOrigin: "1895 (split from the Rugby Football Union at Huddersfield's George Hotel)",

  players: { perTeam: 13, min: 13, max: 13, substitutes: 4, note: "13 on the field; typically 4 interchanges with a set number of exchanges (10 in NRL) per match." },
  field: {
    surfaceName: "pitch",
    dimensions: "100 m long × 68 m wide between goal lines; in-goal area 6-11 m deep; H-shaped goalposts 5.5 m wide with a crossbar 3 m high.",
    description: "Rectangular grass pitch with goalposts on each try line. Ten-metre and twenty-metre lines mark restart and defensive zones.",
  },
  equipment: [
    { name: "Rugby league ball", description: "Oval leather ball similar to union but slightly more pointed and often lighter." },
    { name: "Boots with studs", description: "Studded footwear for grip." },
    { name: "Mouthguard", description: "Mandatory at all professional levels." },
    { name: "Shoulder pads / head-guard", description: "Optional, thinner than in gridiron.", optional: true },
    { name: "Team kit", description: "Jersey, shorts, socks — with heavy sponsor branding at professional level." },
  ],
  duration: {
    approximateMinutes: 80,
    structure: "Two 40-minute halves with a 10-15 minute half-time; clock runs continuously with limited stoppage-time relative to union.",
    note: "Elite competitions may use golden-point extra time (first score wins) or short 10-minute overtime periods.",
  },
  objective: "Score more points than the opposition by grounding the ball over the try line (try, 4 pts), kicking conversions and drop-goals, and successful penalty kicks.",
  matchStructure:
    "Play starts with a kickoff. The attacking side gets six tackles in a set — after each tackle, the tackled player plays the ball backwards through their legs to a team-mate (the 'play-the-ball'). On the sixth tackle the team usually kicks (bomb, grubber, or long kick for territory) to hand the ball over safely. Possession then swaps and the process repeats. Scoring restarts the game with a kickoff from the halfway line by the non-scoring team.",

  basicRules: [
    { title: "Six-tackle rule", body: "Attacking side has 6 tackles to advance or score; a 7th tackle without a score, kick, or penalty turns over possession." },
    { title: "Play-the-ball", body: "After a tackle, the ball carrier stands, plays the ball backwards under the foot to a team-mate to restart play." },
    { title: "10-metre rule", body: "Defenders must be at least 10 metres behind the play-the-ball before advancing." },
    { title: "No rucks or mauls", body: "Play never stops in a scramble; the play-the-ball keeps possession under a clear structure." },
    { title: "Forward pass", body: "Passes must go backward or laterally; a forward pass is a knock-on and a scrum is awarded." },
    { title: "Knock-on", body: "Dropping the ball forward is a knock-on; a scrum results (or a play-the-ball penalty on the 5th tackle)." },
    { title: "Scrum", body: "Uncontested scrum of 6 forwards each — used to restart play after knock-ons or forward passes; possession usually retained by the attacking side." },
  ],
  advancedRules: [
    { title: "Zero tackle", body: "If the defence forces a knock-on or intercepts, the receiving team's next play is 'tackle zero' — a fresh set of six begins." },
    { title: "Bunker (video referee)", body: "Video review used for tries and foul play; on-field ref signals for a review." },
    { title: "40/20 kick", body: "A kick taken from inside the attacker's own 40-metre line that bounces before going into touch inside the opposition 20 — the attacking team gets the scrum feed." },
    { title: "Golden point", body: "Sudden-death extra time in knockout matches — first score wins." },
    { title: "Six again", body: "Instead of a penalty for a ruck infringement, referees may award a fresh set of six tackles to keep the game flowing (NRL 2020+)." },
  ],
  scoring: {
    summary: "Points from tries, conversions, penalty goals and drop-goals.",
    breakdown: [
      { action: "Try", points: "4", note: "Grounding the ball over the opponent's try line." },
      { action: "Conversion", points: "2", note: "Successful kick after a try, taken from a line perpendicular to where the try was scored." },
      { action: "Penalty goal", points: "2", note: "Kick from a penalty award." },
      { action: "Drop-goal", points: "1", note: "Drop-kicked over the crossbar in open play; some competitions award 2 for kicks beyond 40 m." },
    ],
    winCondition: "Team with more points at full time wins; competition-specific tiebreakers apply for finals (golden point or extra time).",
  },
  penalties: [
    { title: "Penalty kick", body: "Awarded for offside, high tackles, holding down in the play-the-ball, dissent, etc. — kicked for goal, into touch, or tapped to restart." },
    { title: "Sin bin", body: "Ten-minute suspension for repeated or dangerous fouls; team plays a man short." },
    { title: "Send-off (red card)", body: "Serious foul play — player leaves for the remainder of the match; disciplinary review may add suspensions." },
    { title: "On-report", body: "Referee flags an incident for post-match review by the judiciary; suspensions may follow." },
  ],

  positions: [
    { name: "Fullback (1)", role: "Last line of defence; sweeps kicks and often runs support lines in attack.", count: 1 },
    { name: "Wing (2, 5)", role: "Fast outside backs — finishers on the wing.", count: 2 },
    { name: "Centre (3, 4)", role: "Powerful outside backs; create tries for wings.", count: 2 },
    { name: "Stand-off / Five-eighth (6)", role: "Second playmaker; runs and passes.", count: 1 },
    { name: "Scrum-half / Halfback (7)", role: "Primary organiser — often the kicker.", count: 1 },
    { name: "Props (8, 10)", role: "Front-row forwards — big ball-carriers and defenders.", count: 2 },
    { name: "Hooker (9)", role: "Rakes the ball in scrums and acts as a running dummy-half from play-the-balls.", count: 1 },
    { name: "Second-row (11, 12)", role: "Athletic forwards — carry, tackle, edge defenders.", count: 2 },
    { name: "Loose-forward / Lock (13)", role: "Anchoring back-row forward; ball-playing role.", count: 1 },
  ],
  officiating: {
    officials: ["One referee (on field)", "Two touch judges", "Video referee (bunker) in top leagues"],
    summary: "One referee has sole on-field authority; touch judges signal ball-into-touch and unsportsmanlike behaviour; a video referee reviews tries and foul play.",
  },

  governingBodies: [
    { name: "International Rugby League", acronym: "IRL", founded: 1948, headquarters: "London, UK", website: "https://www.intrl.sport" },
    { name: "National Rugby League", acronym: "NRL", founded: 1998, headquarters: "Sydney, Australia", website: "https://www.nrl.com" },
    { name: "Rugby Football League", acronym: "RFL", founded: 1895, headquarters: "Manchester, UK", website: "https://www.rugby-league.com" },
    { name: "Super League Europe", founded: 1996, headquarters: "Leeds, UK", website: "https://www.superleague.co.uk" },
  ],
  majorCompetitions: [
    { name: "Rugby League World Cup", frequency: "quadrennial", founded: 1954, region: "worldwide" },
    { name: "NRL Telstra Premiership", frequency: "annual", founded: 1908, region: "Australia / New Zealand" },
    { name: "Super League", frequency: "annual", founded: 1996, region: "Europe (UK / France)" },
    { name: "State of Origin", frequency: "annual", founded: 1980, region: "Australia (NSW vs QLD)", note: "Considered the pinnacle of representative rugby league." },
    { name: "Challenge Cup", frequency: "annual", founded: 1897, region: "England (knockout)" },
  ],
  countriesPlayed: ["AU", "NZ", "GB", "FR", "PG", "TO", "WS", "FJ", "US", "LB", "SA", "IE"],
  famousAthletes: [
    "Andrew Johns",
    "Wally Lewis",
    "Cameron Smith",
    "Johnathan Thurston",
    "Billy Slater",
    "Ellery Hanley",
    "Ryan Papenhuyzen",
    "Sam Burgess",
    "Kalyn Ponga",
    "Ali Brigginshaw",
  ],
  records: [
    { title: "Most NRL games", holder: "Cameron Smith", value: "430", year: 2020 },
    { title: "Most tries in a season (NRL)", holder: "Josh Addo-Carr / others", value: "28", year: 2020 },
    { title: "Most World Cup titles", holder: "Australia", value: "12", year: 2022 },
  ],

  parentSlug: "rugby-union",
  variants: ["nines", "wheelchair-rugby-league", "masters-rugby-league", "touch-rugby"],
  relatedSports: ["rugby-union", "american-football", "australian-rules-football", "gaelic-football"],

  skills: [
    "tackling technique",
    "ball-carrying under pressure",
    "kicking (grubbers, bombs, 40/20s)",
    "passing accuracy",
    "explosive speed",
    "fitness (continuous 80-minute play)",
    "defensive positioning",
  ],
  strategies: [
    { title: "Yardage sets", body: "Early tackles in a set are used to run the ball out from your own goal-line before a long kick on tackle 5 or 6." },
    { title: "Attacking bombs", body: "High kick to a wing forces a contested aerial catch and often a tap-back opportunity for a try." },
    { title: "40/20 kick", body: "Field-position weapon that changes the possession dynamic." },
    { title: "Sliding defence", body: "Outside defenders slide across on wide plays to shut down passes to the wing." },
  ],

  terminology: [
    { term: "Play-the-ball", meaning: "The way play restarts after each tackle — the tackled player rolls the ball backward with the foot." },
    { term: "Set of six", meaning: "The six tackles a team has to advance or score before turning over possession." },
    { term: "Bomb", meaning: "A high, hanging kick contested aerially by the receiving fullback or wing." },
    { term: "Grubber", meaning: "A low kick that skims and rolls along the ground, often through the try line." },
    { term: "Chip kick", meaning: "A small over-the-defence kick that a team-mate chases and re-gathers." },
    { term: "Dummy-half", meaning: "The player receiving the ball at the play-the-ball, usually the hooker." },
    { term: "Try", meaning: "Grounding the ball with downward pressure over the try line — worth 4 points." },
    { term: "Conversion", meaning: "A kick after a try, taken from perpendicular to where the try was scored." },
    { term: "Sin bin", meaning: "10-minute suspension for a professional foul; team plays a man short." },
    { term: "State of Origin", meaning: "Annual best-of-three between NSW and QLD; players eligible for the state where they first played senior rugby league." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "The six-tackle rule", body: "Understand possession changes every six tackles.", anchor: "basicRules" },
      { title: "How to play-the-ball", body: "Practise the standing motion and the backward foot-roll to the dummy-half.", anchor: "terminology" },
      { title: "Scoring", body: "Learn tries (4), conversions (2), penalty goals (2), drop-goals (1).", anchor: "scoring" },
      { title: "Passing", body: "All passes must go backward or laterally." },
    ] },
    { level: "intermediate", steps: [
      { title: "Kicking arsenal", body: "Bomb, grubber, chip and long kick for territory." },
      { title: "Reading defensive lines", body: "Identify sliding vs up-and-in defence to pick the right pass." },
      { title: "Playing dummy-half", body: "Fast service to the halves and picking your moments to run." },
      { title: "Fitness base", body: "Repeated 40-metre sprints with quick recovery." },
    ] },
    { level: "advanced", steps: [
      { title: "Attacking structures", body: "Left-side / right-side shape, second-phase plays and edge attacks." },
      { title: "Set-piece kicks", body: "40/20s, cross-field bombs to a leaping winger." },
      { title: "Defensive systems", body: "Slide, up-and-in, umbrella — situational choices per opposition." },
    ] },
  ],
  faq: [
    { question: "How is rugby league different from rugby union?", answer: "13 players vs 15, six-tackle rule vs contested rucks/mauls, no lineouts, faster restart via play-the-ball, and different scoring values (try = 4 in league, 5 in union)." },
    { question: "What is a 'dummy-half'?", answer: "The player who receives the ball at each play-the-ball — usually the hooker, though anyone can fill in." },
    { question: "How is State of Origin played?", answer: "Best-of-three annual series between New South Wales and Queensland representative sides, with players selected based on where they first played senior rugby league." },
    { question: "What happens on the 6th tackle if a team doesn't kick?", answer: "The defence tackles the attacker to the ground and gets possession (a hand-over)." },
    { question: "Is rugby league played in the Olympics?", answer: "No — the sport is not currently in the Olympic programme, but wheelchair rugby league has grown internationally." },
  ],

  wikipediaTitle: "Rugby league",
  sources: [
    { label: "Wikipedia — Rugby league", url: "https://en.wikipedia.org/wiki/Rugby_league", publisher: "Wikipedia" },
    { label: "International Rugby League Laws", url: "https://www.intrl.sport", publisher: "International Rugby League" },
    { label: "NRL Rules", url: "https://www.nrl.com/rules", publisher: "National Rugby League" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
