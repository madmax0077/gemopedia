import type { Sport } from "@/lib/types";

export const iceHockey: Sport = {
  id: "ice-hockey",
  slug: "ice-hockey",
  name: "Ice Hockey",
  officialName: "Ice Hockey",
  aliases: ["Hockey (in Canada, US, and Northern Europe)"],
  shortDescription:
    "Six-a-side full-contact team sport played on an ice rink — pass and shoot a vulcanized rubber puck into the opponent's net using a straight stick.",
  longDescription:
    "Ice Hockey is a high-speed team sport played on an ice rink by two teams of six players (5 skaters + 1 goaltender). Players use J-shaped sticks to advance a vulcanized rubber disc — the puck — and try to shoot it into the opposition's net. The sport was codified at McGill University, Montreal, in 1877, drawing on earlier stick-and-ball games from the British Isles. The world's premier professional league — the National Hockey League (NHL) — was founded in 1917 and now hosts 32 teams across North America. The International Ice Hockey Federation (IIHF, founded 1908) governs international play; ice hockey has been an Olympic medal event since 1920 (men) and 1998 (women). Legendary sides — the Soviet 'Red Army' team, the Canadian Habs and Oilers dynasties, Detroit Red Wings, and the modern Tampa Bay Lightning — have defined the sport's history.",

  category: "ball-sports",
  subCategory: "puck-and-stick team sport",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "winter",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "CA",
  regionOfOrigin: "Montreal, Quebec (McGill Rules 1877)",
  estimatedOrigin: "First codified rules: McGill University, Montreal, 1877. First indoor game: Victoria Skating Rink, Montreal, 1875. NHL founded 1917.",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 12, note: "1 goaltender + 5 skaters (2 defencemen + 3 forwards). Lines change 'on the fly' every 30-60 seconds." },
  field: {
    surfaceName: "ice rink",
    dimensions: "IIHF international: 60 m × 30 m. NHL: 60 m × 26 m (61 m × 26 m with curved boards). Goal: 1.83 m wide × 1.22 m high, held to ice by magnets/pegs.",
    description: "Frozen-water rink (~-4 to -7 °C) with painted lines: red centre line, two blue lines (dividing offensive/neutral/defensive zones), goal lines, and faceoff circles.",
  },
  equipment: [
    { name: "Skates", description: "Rigid hockey skate with steel blade — very different from figure skates (no toe pick, more curve)." },
    { name: "Stick", description: "Composite (or wooden), 150-165 cm long, curved blade. Different curves and lie angles by position/preference." },
    { name: "Puck", description: "Vulcanized rubber, 76 mm diameter × 25 mm thick, 156-170 g. Frozen before games to prevent bouncing." },
    { name: "Helmet with visor / cage", description: "Mandatory in all leagues since the 1980s-2000s. Full cage in junior/college play; visor/half-shield in NHL." },
    { name: "Shoulder pads, elbow pads, gloves, shin guards, pants", description: "Full body protection — the sport is fast and physical." },
    { name: "Neck guard", description: "Mandatory in youth and international play; increasingly common in NHL after fatal neck injuries." },
    { name: "Goaltender equipment", description: "Leg pads, blocker, catcher (glove), chest protector, mask (fibreglass with steel cage), stick (wider blade). Vastly bigger than a skater's kit." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Three 20-minute periods with 15-17 minute intermissions between periods.",
    note: "Clock stops for stoppages (goals, penalties, icing, offside). Real-time ~2.5 hours per game. Regular-season ties broken by 5-minute 3v3 OT then shootout; playoffs use 20-minute sudden-death OTs.",
  },
  objective: "Score more goals than the opposition by shooting the puck into the opposition's net over three 20-minute periods.",
  matchStructure:
    "Each period begins with a faceoff at centre ice. Play flows continuously; the clock only stops for goals, penalties, offside, icing, or the puck leaving the rink. Line changes happen on the fly (no substitution stop). Body checks (shoulder-first contact) are legal against a puck-carrier. Penalties result in a player serving 2, 4, 5, or 10 minutes in the penalty box — during which the team plays a man down (power play for the opposition). Overtime and shootouts break tied games depending on league rules.",

  basicRules: [
    { title: "Goal", body: "Puck fully crosses the goal line into the net — 1 point. Reviewed by video for edge cases (kicking, high-sticking, goaltender interference)." },
    { title: "Offside", body: "An attacking player cannot precede the puck into the offensive zone (past the blue line). Play stops for a neutral-zone faceoff." },
    { title: "Icing", body: "Shooting the puck from behind your own centre line untouched over the opponent's goal line — play stops, faceoff in the icing team's defensive zone. No line changes for the icing team (2005 rule)." },
    { title: "Body checking", body: "Legal shoulder-first contact against a player with (or just after having) the puck. Checking from behind, boarding, or into the head is a penalty." },
    { title: "Penalties", body: "Minor: 2 min. Double minor (usually for high-sticking causing blood): 4 min. Major (typically fighting): 5 min. Misconduct: 10 min (personal, team stays at full strength). Match penalty: game ejection + suspension." },
    { title: "Faceoffs", body: "Restart play after stoppages. Players from each side line up on either side of the ref, who drops the puck between them." },
    { title: "The crease", body: "The blue semicircle in front of the goal; attackers cannot interfere with the goaltender inside this area." },
  ],
  advancedRules: [
    { title: "Delayed offside", body: "If an attacker is offside but doesn't play the puck, the defensive team can 'tag up' by touching the blue line, negating offside." },
    { title: "Delayed penalty", body: "If a penalty is called on the defence, play continues until they touch the puck — attacking team often pulls their goalie for an extra skater during this time." },
    { title: "Penalty shot", body: "Awarded for a foul that clearly denied a scoring chance — 1v1 attacker vs goalie from centre ice, unopposed." },
    { title: "Empty net / pulled goalie", body: "Trailing teams often pull their goaltender in the final 1-2 minutes for a 6-on-5 attacking advantage." },
    { title: "Video review", body: "Goals, offside, and goaltender interference reviewable. NHL 'Coach's Challenge' allows one review per game." },
    { title: "3-on-3 overtime", body: "Regular season NHL: 5-minute 3-on-3 OT after regulation, then shootout if still tied. Playoffs: 20-minute sudden-death 5-on-5 OTs indefinitely." },
  ],
  scoring: {
    summary: "1 point per goal. Standings: 2 points for a regulation win, 1 for OT/shootout loss, 0 for regulation loss (NHL 'OTL' system).",
    breakdown: [
      { action: "Regulation win", points: "2 (standings)" },
      { action: "Overtime / shootout win", points: "2 (standings)" },
      { action: "Overtime / shootout loss", points: "1 (standings)", note: "'Loser point' for reaching OT." },
      { action: "Regulation loss", points: "0" },
    ],
    winCondition: "Highest goal total after 60 minutes; if tied, 3-on-3 OT then shootout (regular season) or unlimited sudden-death OT (playoffs).",
  },
  penalties: [
    { title: "Minor penalty (2 min)", body: "Tripping, hooking, holding, high-sticking, roughing, delay of game." },
    { title: "Double minor (4 min)", body: "High-sticking that causes injury (e.g. blood)." },
    { title: "Major (5 min)", body: "Fighting, boarding, cross-checking with force, checking-from-behind. Player serves full 5 minutes even if goals scored." },
    { title: "Misconduct (10 min)", body: "Personal penalty for unsporting conduct — team doesn't lose a skater." },
    { title: "Game misconduct / match penalty", body: "Ejection from the game + potential suspension after DoPS review." },
  ],

  positions: [
    { name: "Goaltender / Goalie", role: "Blocks shots on the net; only player allowed to catch/hold the puck.", count: 1 },
    { name: "Defenceman (D)", role: "Pair on the ice — defensive-minded; break out puck to forwards; block shots.", count: 2 },
    { name: "Centre (C)", role: "Middle forward — takes most faceoffs; usually the primary playmaker.", count: 1 },
    { name: "Left Wing (LW) / Right Wing (RW)", role: "Wingers flanking the centre; goal-scorers and forecheckers.", count: 2 },
  ],
  officiating: {
    officials: ["Two on-ice referees (orange armbands)", "Two linesmen", "Off-ice officials: goal judge, penalty timekeeper, off-ice referee, video-review officials"],
    summary: "Referees call penalties and rule on goals. Linesmen call icing, offside, and drop faceoffs. Video review is used for goal disputes and coach's challenges.",
  },
  governingBodies: [
    { name: "International Ice Hockey Federation", acronym: "IIHF", founded: 1908, headquarters: "Zurich, Switzerland", website: "https://www.iihf.com" },
    { name: "National Hockey League", acronym: "NHL", founded: 1917, headquarters: "New York City, USA", website: "https://www.nhl.com" },
    { name: "USA Hockey", founded: 1937, headquarters: "Colorado Springs, USA", website: "https://www.usahockey.com" },
    { name: "Hockey Canada", founded: 1914, headquarters: "Calgary, Canada", website: "https://www.hockeycanada.ca" },
  ],
  majorCompetitions: [
    { name: "Stanley Cup Playoffs (NHL)", frequency: "annual", founded: 1893, region: "North America", note: "Oldest trophy in North American pro sport." },
    { name: "IIHF Ice Hockey World Championship", frequency: "annual", founded: 1920, region: "worldwide" },
    { name: "Winter Olympic Games", frequency: "quadrennial", founded: 1920, region: "worldwide", note: "Men 1920; women 1998." },
    { name: "World Cup of Hockey", frequency: "irregular", founded: 1996, region: "worldwide" },
    { name: "KHL (Kontinental Hockey League)", frequency: "annual", founded: 2008, region: "Russia/Belarus/Kazakhstan/China" },
  ],
  countriesPlayed: ["CA", "US", "RU", "SE", "FI", "CZ", "SK", "CH", "DE", "LV", "AT", "NO"],
  famousAthletes: [
    "Wayne Gretzky ('The Great One')",
    "Mario Lemieux",
    "Gordie Howe",
    "Bobby Orr",
    "Sidney Crosby",
    "Alex Ovechkin",
    "Connor McDavid",
    "Vladislav Tretiak",
    "Nikita Kucherov",
    "Hayley Wickenheiser",
    "Manon Rhéaume (first woman to play in an NHL game)",
  ],
  records: [
    { title: "Most career NHL points", holder: "Wayne Gretzky", value: "2857 points (894 G, 1963 A)", year: 1999 },
    { title: "Most career NHL goals", holder: "Alex Ovechkin (surpassed Gretzky's 894)", value: "895+ (April 2025)", year: 2025 },
    { title: "Most Stanley Cups won", holder: "Henri Richard (Montreal)", value: "11", year: 1973 },
    { title: "Fastest recorded slap shot", holder: "Denis Kulyash (KHL)", value: "177.58 km/h (110.3 mph)", year: 2011 },
  ],

  variants: ["field-hockey", "roller-hockey", "inline-hockey", "sledge-hockey", "pond-hockey", "bandy", "ball-hockey"],
  relatedSports: ["field-hockey", "bandy", "ringette", "lacrosse", "hurling"],

  skills: ["skating (forwards, backwards, edges)", "puck handling", "shooting (wrist, snap, slap, backhand)", "checking body position", "peripheral vision", "goaltending stance and glove work"],
  strategies: [
    { title: "Forecheck", body: "Pressure the opposing defence in their own zone — 1-2-2, 2-1-2, or 1-3-1 systems by team preference." },
    { title: "Neutral zone trap", body: "Stack players in the middle to force opponents wide and turn the puck over — perfected by the 1990s New Jersey Devils." },
    { title: "Power play", body: "1-3-1, 1-2-2 or umbrella formations with the extra skater — usually with the top playmaker at the top of the umbrella." },
    { title: "Penalty kill", body: "Wedge or box formation blocking shooting lanes; aggressive PK teams pressure the point men." },
    { title: "Pulled goaltender", body: "Trailing by 1-2 goals in the final minutes, pull the goalie for a 6-on-5 attack — risk of empty-net goal but ~30% goal-recovery success." },
  ],

  terminology: [
    { term: "Puck", meaning: "The vulcanized rubber disc — 76 mm × 25 mm, 156-170 g." },
    { term: "Slap shot", meaning: "The hardest shot in hockey — full wind-up, blade-on-ice for max force." },
    { term: "Wrist shot / snap shot", meaning: "Quicker, more accurate shots without a full wind-up." },
    { term: "Faceoff", meaning: "Ref drops the puck between two centres to restart play." },
    { term: "Icing", meaning: "Shooting from behind centre-red line untouched over the opponent's goal line — play stops." },
    { term: "Offside", meaning: "Attacker enters the offensive zone before the puck — play stops for a neutral-zone faceoff." },
    { term: "Power play", meaning: "Team with one or more extra skaters after a penalty against the opposition." },
    { term: "Penalty kill", meaning: "Playing a man down while a teammate serves a penalty." },
    { term: "Body check", meaning: "Legal shoulder-first contact against a puck-carrier." },
    { term: "Hat trick", meaning: "Three goals in one game by the same player — fans throw hats onto the ice." },
    { term: "Empty netter", meaning: "Goal scored into an unattended net after the opposing goalie is pulled." },
    { term: "Zamboni", meaning: "Ice-resurfacing machine — used between periods." },
    { term: "Two-line pass rule (removed 2005)", meaning: "Historically illegal to pass the puck across two lines; rule change opened up modern hockey." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Skating fundamentals", body: "Learn forward and backward skating, edges, stopping, and crossovers. Skate before you shoot." },
      { title: "Stick handling", body: "Control the puck at low speed — heads-up rather than watching your feet." },
      { title: "Passing and receiving", body: "Firm passes to the tape (blade of receiver's stick); cushion pass reception." },
      { title: "Basic shooting", body: "Wrist shot and snap shot before slap shot. Aim for low corners." },
    ] },
    { level: "intermediate", steps: [
      { title: "Positional play", body: "Learn your specific position's zone responsibilities in offensive, neutral, and defensive zones." },
      { title: "Body positioning", body: "Take the puck-carrier's ice; ride out along the boards; angle plays into low-danger areas." },
      { title: "Advanced shots", body: "Backhand, one-timer, deflection technique." },
      { title: "Understanding line changes", body: "30-60 second shifts, on-the-fly changes, matching lines against opponents." },
    ] },
    { level: "advanced", steps: [
      { title: "Systems understanding", body: "Learn multiple forecheck systems, neutral-zone forechecks, defensive-zone coverage." },
      { title: "Elite-level fitness", body: "Anaerobic power for shifts + aerobic base for recovery." },
      { title: "Scouting and analytics", body: "Modern pros study Corsi/Fenwick/xG advanced stats; positional players use video analysis daily." },
    ] },
  ],
  faq: [
    { question: "Why is fighting allowed in hockey?", answer: "It's not strictly 'allowed' — it's penalised with 5-minute majors (both fighters serve). But it's tolerated as a form of self-policing at the pro level, particularly in the NHL. It's banned outright in international (IIHF), Olympic, women's, and college hockey." },
    { question: "What's the difference between NHL and IIHF rules?", answer: "Rink size (NHL is narrower), overtime (NHL uses 3-on-3 in regular season), fighting (NHL tolerates, IIHF ejects immediately), touch-icing vs no-touch, and playoff format." },
    { question: "How many periods in a hockey game?", answer: "Three periods of 20 minutes each = 60 minutes of play. Regular-season NHL ties are broken by a 5-minute 3v3 OT then shootout. Playoff games use unlimited 20-minute sudden-death 5v5 OTs." },
    { question: "How fast is the puck when shot?", answer: "Top NHL slap shots hit 165+ km/h (100+ mph). The all-time record is Denis Kulyash's 177.6 km/h (110.3 mph) in a 2011 KHL skills competition." },
    { question: "How does the Stanley Cup work?", answer: "The oldest trophy in North American pro sport (1893). NHL playoff format: 16 teams (top 8 per conference) in a bracket, each round is best-of-7. Champion's name is engraved on the Cup — a physical trophy that travels with the team." },
  ],

  wikipediaTitle: "Ice hockey",
  sources: [
    { label: "Wikipedia — Ice hockey", url: "https://en.wikipedia.org/wiki/Ice_hockey", publisher: "Wikipedia" },
    { label: "IIHF Rule Book", url: "https://www.iihf.com/en/static/5324/iihf-rule-book", publisher: "IIHF" },
    { label: "NHL Official Rules", url: "https://www.nhl.com/info/rules", publisher: "National Hockey League" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
