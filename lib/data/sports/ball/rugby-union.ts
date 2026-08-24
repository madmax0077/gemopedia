import type { Sport } from "@/lib/types";

export const rugbyUnion: Sport = {
  id: "rugby-union",
  slug: "rugby-union",
  name: "Rugby Union",
  officialName: "Rugby Union",
  aliases: ["Rugby (15-a-side)", "Union", "Fifteens"],
  shortDescription:
    "Fifteen-a-side full-contact team sport played with an oval ball — carry, pass and kick it to score tries and goals against the opposition.",
  longDescription:
    "Rugby Union is a full-contact team sport played between two teams of 15 players over two 40-minute halves on a rectangular pitch. Players carry, pass or kick an oval ball, aiming to score tries (touching the ball down over the opponent's try-line) and to add goals from conversions, penalties or drop-goals. The sport traces its origins to Rugby School, Warwickshire, England, in the early 19th century — legend has it William Webb Ellis picked up the ball and ran with it during a football match in 1823. Modern rugby union split from rugby league in the 1895 'Great Schism' over player payments. Governed globally by World Rugby (founded as the International Rugby Football Board in 1886), the sport's flagship event is the quadrennial Rugby World Cup, first held in 1987 and won by New Zealand, England, Australia and South Africa (four-time winners as of 2023).",

  category: "ball-sports",
  subCategory: "full-contact rugby football code",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Rugby School, Warwickshire, England",
  estimatedOrigin: "1823 (William Webb Ellis legend); International Rugby Football Board founded 1886; professional era from 1995",

  players: { perTeam: 15, min: 15, max: 15, substitutes: 8, note: "15 on the field: 8 forwards + 7 backs. 8 substitutes on the bench (typically 4-6 used per match)." },
  field: {
    surfaceName: "pitch",
    dimensions: "Maximum: 144 m long × 70 m wide, including two 22-metre in-goal areas. Field of play: 100 m × 70 m.",
    description: "Grass or approved artificial turf. Marked with try-lines, 22-metre lines, halfway line, 10-metre lines, 5-metre lines, and dashed lines at 5m and 15m from each touchline.",
  },
  equipment: [
    { name: "Rugby ball", description: "Oval, 28-30 cm long, 58-62 cm circumference, 410-460 g. Four panels of leather or synthetic material." },
    { name: "Jersey and shorts", description: "Numbered jersey, shorts, socks, and studded boots. Traditional numbers 1-15 correspond to specific positions." },
    { name: "Mouthguard", description: "Mandatory since 2020 in professional and elite amateur play." },
    { name: "Scrum cap and shoulder pads", description: "Optional soft protective gear.", optional: true },
    { name: "Kicking tee", description: "Held on the pitch for penalty and conversion kicks." },
  ],
  duration: {
    approximateMinutes: 80,
    structure: "Two 40-minute halves with a 10-15 minute half-time.",
    note: "Play only stops for the referee's whistle — clock does not stop for ball-in-touch or injuries in professional rugby. Full match ~90-100 minutes real-time.",
  },
  objective: "Score more points than the opposition through tries (5), conversions (2), penalties (3) and drop-goals (3).",
  matchStructure:
    "The game starts with a kick-off from the halfway line. Play flows continuously until the ball goes out of bounds, an infringement is committed, or a score is made. Play is restarted after infringements by scrums (for knock-ons and forward passes), lineouts (for ball out of touch), and penalty kicks/free kicks (for laws broken). Teams may kick for touch, tap and go, or scrum on penalty awards. Tries are converted with a place-kick from a point in line with the try; penalty goals may be attempted from anywhere.",

  basicRules: [
    { title: "Try", body: "Grounding the ball on or over the opponent's try-line — 5 points. Ball must be in downward pressure or contact from a player." },
    { title: "Conversion", body: "After a try, kick the ball between the posts from a point in line with where it was grounded — 2 points." },
    { title: "Penalty kick", body: "Awarded for infringements; can be kicked for goal (3 points), kicked to touch, or tapped and played." },
    { title: "Drop-goal", body: "Kicking the ball between the posts on the drop, from open play — 3 points." },
    { title: "Passing", body: "The ball must be passed backwards or laterally — never forwards. A forward pass is punished by a scrum." },
    { title: "Knock-on", body: "Dropping the ball forwards — punished by a scrum to the other team." },
    { title: "Offside", body: "In general play, players cannot be in front of a teammate who has last played the ball. Rucks, mauls and scrums each define their own offside lines." },
    { title: "Tackle", body: "Ball-carriers may be tackled below the shoulders. Tackled players must release the ball immediately after going to ground." },
  ],
  advancedRules: [
    { title: "Scrum", body: "Eight forwards from each team bind together and contest for the ball introduced by the scrum-half. Used after knock-ons and forward passes." },
    { title: "Ruck", body: "Formed when a tackled player is on the ground and one or more players from each side are on their feet over the ball, competing for possession." },
    { title: "Maul", body: "Formed when the ball-carrier is held up by an opponent and joined by teammates from both sides. Maul must move; if it stalls, the referee may award a scrum." },
    { title: "Lineout", body: "Ball goes into touch → players line up perpendicular to touch, ball thrown between them; opposing hookers/locks jump for possession, often lifted by teammates." },
    { title: "Advantage", body: "Referee allows play to continue after minor infringements if the non-offending team gains advantage; can be called back if advantage is not gained." },
    { title: "Yellow card / red card", body: "Yellow = 10 minutes in the sin-bin. Red = permanent removal from the game (team plays with 14)." },
    { title: "TMO", body: "Television Match Official can be consulted for try decisions, foul play and clear infringements — since 2001 at elite level." },
  ],
  scoring: {
    summary: "Try 5, Conversion 2, Penalty 3, Drop-goal 3. Highest score at 80 minutes wins.",
    breakdown: [
      { action: "Try", points: "5", note: "Grounding the ball over the opponent's try-line." },
      { action: "Conversion", points: "2", note: "Successful place-kick from in line with the try." },
      { action: "Penalty kick", points: "3", note: "Awarded for opponent infringements." },
      { action: "Drop-goal", points: "3", note: "From open play, on the drop." },
      { action: "Penalty try", points: "7", note: "Awarded when defensive foul play prevented a certain try — no conversion needed." },
    ],
    winCondition: "Highest score at 80 minutes. Knockout matches may go to extra time (2×10 minutes) and, if still tied, drop-goal kick-off duel.",
  },
  penalties: [
    { title: "Sin-bin (yellow card)", body: "10 minutes off the pitch — team plays with 14 for that duration." },
    { title: "Red card", body: "Permanent removal from the match; team may still substitute an off-pitch player back onto the field if minutes-based reforms allow." },
    { title: "Penalty kick", body: "Awarded to the non-offending team for offside, high tackle, holding on, killing the ball, etc." },
    { title: "Free kick", body: "For less serious infringements — cannot be kicked for goal, but can be tapped or kicked to touch." },
  ],

  positions: [
    { name: "Loosehead prop (1)", role: "Front row, scrum stability, ball-carrying support.", count: 1 },
    { name: "Hooker (2)", role: "Front row, throws lineout, hooks ball in scrum.", count: 1 },
    { name: "Tighthead prop (3)", role: "Front row, scrum stability on opposite side.", count: 1 },
    { name: "Locks (4-5)", role: "Second row, jump in lineouts, add scrum weight.", count: 2 },
    { name: "Flankers (6-7)", role: "Back row, high tackle count, break-down expertise.", count: 2 },
    { name: "Number 8", role: "Back row, ball-carrying from the base of the scrum.", count: 1 },
    { name: "Scrum-half (9)", role: "Link between forwards and backs, distributes from ruck/scrum.", count: 1 },
    { name: "Fly-half (10)", role: "Playmaker — decides between running, passing and kicking.", count: 1 },
    { name: "Wings (11, 14)", role: "Speed and finishing — score most tries.", count: 2 },
    { name: "Centres (12-13)", role: "Attack and defence in midfield.", count: 2 },
    { name: "Full-back (15)", role: "Last line of defence; catches high kicks; counter-attacks.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (in the field)", "Two assistant referees (touch judges)", "Television Match Official (TMO)", "Time-keeper (major matches)"],
    summary: "The referee has sole authority on the pitch. Assistant referees signal ball-in-touch, offside and foul play. The TMO reviews try scoring, foul play and factual disputes via video.",
  },
  governingBodies: [
    { name: "World Rugby", acronym: "WR", founded: 1886, headquarters: "Dublin, Ireland", website: "https://www.world.rugby" },
    { name: "Rugby Football Union (RFU)", founded: 1871, headquarters: "Twickenham, England" },
    { name: "New Zealand Rugby (NZR)", founded: 1892, headquarters: "Wellington, New Zealand" },
  ],
  majorCompetitions: [
    { name: "Rugby World Cup", frequency: "quadrennial", founded: 1987, region: "worldwide" },
    { name: "Six Nations Championship", frequency: "annual", founded: 1883, region: "Europe", note: "England, Scotland, Wales, Ireland, France, Italy." },
    { name: "The Rugby Championship", frequency: "annual", founded: 1996, region: "Southern Hemisphere", note: "Argentina, Australia, New Zealand, South Africa." },
    { name: "British & Irish Lions Tour", frequency: "quadrennial", founded: 1888, region: "GB/Ireland vs NZ/SA/Australia" },
    { name: "Rugby Sevens Olympics", frequency: "quadrennial", founded: 2016, region: "worldwide", note: "7-a-side, not 15." },
  ],
  countriesPlayed: ["NZ", "ZA", "AU", "GB", "IE", "FR", "AR", "IT", "JP", "FJ", "WS", "TO", "GE", "US"],
  famousAthletes: [
    "Jonah Lomu (NZL)",
    "Richie McCaw (NZL)",
    "Dan Carter (NZL)",
    "Brian O'Driscoll (IRE)",
    "Jonny Wilkinson (ENG)",
    "François Pienaar (RSA)",
    "Bryan Habana (RSA)",
    "Sergio Parisse (ITA)",
    "Antoine Dupont (FRA)",
    "Siya Kolisi (RSA)",
  ],
  records: [
    { title: "Most Rugby World Cup titles", holder: "South Africa", value: "4 (1995, 2007, 2019, 2023)", year: 2023 },
    { title: "Most Test points", holder: "Dan Carter (NZL)", value: "1598 points", year: 2015 },
    { title: "Most Test tries", holder: "Daisuke Ohata (JPN)", value: "69 tries", year: 2006 },
  ],

  variants: ["rugby-sevens", "rugby-league", "touch-rugby", "tag-rugby", "wheelchair-rugby", "beach-rugby"],
  relatedSports: ["rugby-league", "american-football", "australian-rules-football", "gaelic-football"],

  skills: ["ball handling", "tackling technique", "kicking", "positional awareness", "endurance", "physical strength", "team communication"],
  strategies: [
    { title: "Territorial kicking", body: "Kick for touch to gain field position when defending or in your own half." },
    { title: "Set-piece dominance", body: "Winning your own scrums and lineouts and disrupting the opposition's is a match-winner." },
    { title: "Blitz defence", body: "Line advances aggressively as a unit to smother attacks; risk of getting broken." },
    { title: "Off-loading game", body: "Keep the ball alive out of tackles with quick passes; created and popularised by New Zealand." },
    { title: "Rolling maul", body: "From a lineout, teams bind and drive forward — legal and hard to stop when done well." },
  ],

  terminology: [
    { term: "Try", meaning: "5-point score by grounding the ball over the try-line." },
    { term: "Conversion", meaning: "2-point kick after a try, taken from in line with where it was scored." },
    { term: "Ruck", meaning: "Contest for the ball on the ground after a tackle, players from both sides on their feet." },
    { term: "Maul", meaning: "Contest with the ball-carrier upright, joined by teammates from both sides." },
    { term: "Scrum", meaning: "Set-piece with 8 forwards from each side binding and contesting for the ball." },
    { term: "Lineout", meaning: "Set-piece restart after the ball goes into touch; players jump for the throw-in." },
    { term: "Offside", meaning: "Being in front of the ball or a teammate who last played it — punishable by penalty." },
    { term: "Knock-on", meaning: "Ball dropped forward — punished by scrum to the opposition." },
    { term: "Advantage", meaning: "Play continues after an infringement if the non-offending team gains ground." },
    { term: "TMO", meaning: "Television Match Official — video-review referee." },
    { term: "Sin-bin", meaning: "10-minute exclusion after a yellow card." },
    { term: "Sevens", meaning: "The 7-a-side abbreviated variant played on a full-size pitch in 7-minute halves." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the shape of the ball", body: "The oval means the ball spins and bounces unpredictably — practise catching and passing daily." },
      { title: "Passing and running lines", body: "The ball must go backwards. Learn to hold pass depth and run onto the ball." },
      { title: "Safe tackle technique", body: "Head to the side, wrap arms, drive with the legs — the single most important skill for safety and effectiveness." },
      { title: "Understand the try-line", body: "The line is what you're aiming for. First understand scoring before the complexities of scrums and lineouts." },
    ] },
    { level: "intermediate", steps: [
      { title: "Ruck technique", body: "Body position, arriving low, driving over the ball, and clearing threats." },
      { title: "Positional understanding", body: "Learn what each of the 15 positions does; specialise in one or two." },
      { title: "Set-piece basics", body: "Scrum binding, lineout jumping/lifting, restart kicking." },
      { title: "Kicking under pressure", body: "Practise place-kicking (goal kicks) and out-of-hand kicking (grubbers, chips, up-and-unders)." },
    ] },
    { level: "advanced", steps: [
      { title: "Decision-making", body: "Read defensive lines and pick when to run, pass, kick or go to ground." },
      { title: "Advanced attack shapes", body: "1-3-3-1, pods, decoy runners, and cross-field kicks." },
      { title: "Defensive systems", body: "Understand rush defence, drift defence, and choke-tackling." },
      { title: "Elite-level fitness", body: "Rugby demands both endurance and repeat-sprint power — periodised strength & conditioning is non-negotiable." },
    ] },
  ],
  faq: [
    { question: "What's the difference between rugby union and rugby league?", answer: "Union has 15 players, unlimited tackles until turnover, and uses scrums/rucks/mauls/lineouts. League has 13 players, a 6-tackle rule after which possession changes, and simpler tackles/play-the-balls. They split in 1895 over player payments." },
    { question: "How is rugby scored?", answer: "Try = 5 points (touch the ball down over the try-line). Conversion = 2 (kick after a try). Penalty = 3 (kick from an infringement). Drop-goal = 3 (kicked on the drop from open play). Penalty try = 7 (auto if defence prevents a clear try illegally)." },
    { question: "Who has won the most Rugby World Cups?", answer: "South Africa (4: 1995, 2007, 2019, 2023). New Zealand and Australia have both won three; England won once (2003)." },
    { question: "What's a scrum for?", answer: "Restarts play after a knock-on or forward pass. Eight forwards from each team bind and contest the ball introduced by the scrum-half. It's both a set-piece and a way to reset with structure." },
    { question: "Are dangerous tackles more strictly punished now?", answer: "Yes. World Rugby has progressively lowered the legal tackle height and increased sanctions for head contact since 2016. Any contact with the head is now a red-card offence in most jurisdictions." },
  ],

  wikipediaTitle: "Rugby union",
  sources: [
    { label: "Wikipedia — Rugby union", url: "https://en.wikipedia.org/wiki/Rugby_union", publisher: "Wikipedia" },
    { label: "World Rugby — Laws of the Game", url: "https://www.world.rugby/the-game/laws", publisher: "World Rugby" },
    { label: "Rugby Football Union — Beginners' Guide", url: "https://www.englandrugby.com", publisher: "RFU" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
