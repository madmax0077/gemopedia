import type { Sport } from "@/lib/types";

export const canadianFootball: Sport = {
  id: "canadian-football",
  slug: "canadian-football",
  name: "Canadian Football",
  officialName: "Canadian Football (Canadian Football League)",
  aliases: ["CFL Football", "Three-Down Football"],
  shortDescription:
    "Gridiron football variant played in Canada — 12 per side on a 110-yard field, three downs instead of four, and a single-point 'rouge' scored on missed field goals; the CFL is North America's second-oldest pro football league.",
  longDescription:
    "Canadian Football is the Canadian variant of gridiron football, distinct from American football in several defining ways: 12 players per side (vs. 11), a longer + wider field (110 × 65 yards vs. 100 × 53⅓), three downs to advance 10 yards (vs. four), and a unique 'rouge' single point for balls that die in the end zone. The sport descends from rugby brought to Canada in the 1860s; the Canadian Rugby Football Union formed 1884, evolving into the Canadian Football League (CFL) formally in 1958. The CFL's Grey Cup, contested annually since 1909, is Canada's oldest professional sports championship. American football + Canadian football coexisted parallel from the 1870s (Harvard–McGill 1874 played the first rugby-hybrid match). The Toronto Argonauts (est. 1873) are the CFL's oldest team + one of the oldest sports clubs in North America. Modern CFL stars: Doug Flutie, Anthony Calvillo, Damon Allen, Warren Moon (who won 5 Grey Cups before jumping to the NFL).",

  category: "ball-sports",
  subCategory: "gridiron football variant",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "19th-century",
  popularity: "major",

  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (McGill University, Montreal 1874); CFL codified 1958",
  estimatedOrigin: "Descended from rugby brought to Canada 1860s; Canadian Rugby Football Union 1884; CFL founded 1958; Grey Cup contested since 1909",

  players: { perTeam: 12, min: 12, max: 12, substitutes: 30, note: "12 players per side (vs. 11 in NFL); active game-day roster 44." },
  field: {
    surfaceName: "Football field",
    dimensions: "110 yards × 65 yards playing field + 20-yard end zones (150 total)",
    description: "Longer + wider than NFL (100 × 53⅓); 20-yard end zones (vs. 10). Goalposts on goal line (vs. back of end zone in NFL). Larger field = more room for creative passing offense.",
  },
  equipment: [
    { name: "Football", description: "Similar to NFL but slightly larger + less pointed (traditional CFL ball); recent standardization has narrowed differences." },
    { name: "Helmet + pads", description: "Standard gridiron equipment: helmet, shoulder pads, thigh + knee pads." },
    { name: "Cleats", description: "Molded or removable studs depending on surface (natural grass, FieldTurf artificial)." },
    { name: "Team uniforms", description: "Numbered jerseys; helmet decals; kicking specialists distinguished." },
  ],
  duration: {
    approximateMinutes: 180,
    structure: "4 × 15-minute quarters with 15-minute halftime + 2-minute breaks between quarters; overtime possible (2-min OT periods with 3-and-1 alternating possessions).",
  },
  objective:
    "Score more points than opponent by advancing the ball into the end zone (touchdown = 6 pts), kicking field goals (3 pts), or scoring rouges (1 pt on missed kicks that die in end zone).",
  matchStructure:
    "Game divided into 4 × 15-min quarters. Team on offense has 3 downs (attempts) to gain 10 yards or scores. If not converted → punt or field goal attempt. Tied game → overtime rounds until decided. Play stopped for scores, penalties, injuries.",

  basicRules: [
    { title: "3 downs to gain 10 yards", body: "Offense has THREE attempts to advance 10 yards (vs. NFL's four); if failed, ball turns over. This is the defining rule — creates pass-heavier offenses." },
    { title: "12 players per side", body: "One extra player vs. NFL — often used as an additional receiver in the offensive backfield." },
    { title: "Motion allowed in backfield", body: "All backfield players may be in motion at the snap (NFL restricts to 1 receiver + limited direction)." },
    { title: "20-second play clock", body: "Faster than NFL's 40-second clock — pace of play significantly quicker." },
    { title: "Goalposts on goal line", body: "Field goals kicked THROUGH the goal line goalposts; missed FGs land in end zone (potential rouge)." },
    { title: "Rouge (single point)", body: "1 point for ball that dies in end zone from kick (missed FG, punt); receiver may return to prevent." },
    { title: "Waggle / receiver motion", body: "Receivers may run laterally + forward before snap — impossible in NFL — creating dynamic pre-snap movement." },
    { title: "No fair catch on punts", body: "Punt returners must field the ball or concede 5-yard 'halo' — no fair catch to fair-play returns." },
  ],
  advancedRules: [
    { title: "Rouge / Single point scoring", body: "A punt or missed field goal that goes into the end zone but is not returned out = 1 point to kicking team. Unique to Canadian football." },
    { title: "2-point conversion + missed conversion attempt", body: "After TD: attempt 1-pt convert (kick) or 2-pt convert (run/pass); missed FG or convert may score rouge." },
    { title: "Overtime alternating possessions", body: "Each team gets ball at opponent's 35-yard line; alternate possessions; team ahead after equal chances wins. Multiple OTs until decided." },
    { title: "Backfield motion revolution", body: "Half-back + full-back may move forward BEFORE snap ('waggle') — creates offensive chess unavailable in NFL." },
    { title: "10-yard 'halo' on punts", body: "Defenders must stay 10 yards from returner as ball is received — no immediate contact." },
    { title: "Grey Cup format", body: "Season-ending championship game; oldest continuous North American pro football championship (since 1909)." },
  ],
  scoring: {
    summary: "Touchdown 6 + convert 1 or 2 pts; field goal 3 pts; safety 2 pts; rouge 1 pt.",
    winCondition: "Higher total score at end of regulation; overtime alternating possessions if tied.",
    breakdown: [
      { action: "Touchdown", points: "6" },
      { action: "1-point convert (kick)", points: "1" },
      { action: "2-point convert (run/pass)", points: "2" },
      { action: "Field goal", points: "3" },
      { action: "Safety (offense downed in own end zone)", points: "2 to defense" },
      { action: "Rouge (kick dies in end zone)", points: "1" },
    ],
  },
  penalties: [
    { title: "Holding / Interference", body: "10-yard penalty; automatic 1st down if defense." },
    { title: "Offside / False start", body: "5-yard penalty." },
    { title: "Roughing the passer", body: "15-yard penalty; automatic 1st down." },
    { title: "Personal foul (unsportsmanlike, unnecessary roughness)", body: "15-yard penalty + potential disqualification for repeated." },
    { title: "Objectionable conduct", body: "Player fined + potentially suspended for post-play conduct." },
  ],

  positions: [
    { name: "Quarterback (QB)", role: "Offensive leader; throws + hands off; wide open passing offense.", count: 1 },
    { name: "Slotback / Wide receiver (5 typical)", role: "Extra receiver via 12th player; multiple slotbacks in passing formations.", count: 5 },
    { name: "Running back / Fullback", role: "Rushing + short-yardage; less prominent than NFL due to pass-heavy game.", count: 2 },
    { name: "Offensive line", role: "5 blockers protecting QB + opening rushing lanes.", count: 5 },
    { name: "Defensive line + linebackers + secondary", role: "12-man defense; typically 4-3 base with extra defensive back.", count: 12 },
    { name: "Kicker + punter + long-snapper", role: "Special teams; kicker often doubles as punter in CFL." },
  ],
  officiating: {
    officials: ["Referee (crew chief)", "Umpire", "Line judge", "Head linesman", "Field judge", "Side judge", "Back judge"],
    summary: "7-official crew; replay official (Video Booth) reviews scoring plays + turnovers; command center in Toronto for replay support.",
  },

  governingBodies: [
    { name: "Canadian Football League (CFL)", founded: 1958, headquarters: "Toronto, Ontario, Canada", website: "https://cfl.ca" },
    { name: "Football Canada (amateur)", founded: 1884, headquarters: "Ottawa, Ontario, Canada", website: "https://footballcanada.com" },
    { name: "USports (university football)", founded: 1961, headquarters: "Richmond Hill, Ontario, Canada" },
  ],
  majorCompetitions: [
    { name: "Grey Cup (CFL championship)", frequency: "annual", founded: 1909, region: "Canada" },
    { name: "CFL Regular Season", frequency: "annual", founded: 1958, region: "Canada (9 teams East + West divisions)" },
    { name: "USports Vanier Cup (university)", frequency: "annual", founded: 1965, region: "Canada" },
    { name: "IFAF Canadian Football World Championship (informal)", frequency: "occasional", founded: 1999, region: "worldwide" },
  ],
  countriesPlayed: ["CA", "US", "MX", "DE", "FR", "GB", "JP"],
  famousAthletes: [
    "Doug Flutie (US → CFL → NFL — 3× Grey Cup MVP; 6× CFL MOP)",
    "Anthony Calvillo (CAN — CFL all-time passing yards leader — 79,816)",
    "Damon Allen (US → CFL — 4× Grey Cup champion; brother of Marcus Allen)",
    "Warren Moon (US → CFL → NFL — 5 consecutive Grey Cups with Edmonton 1978–1982; Hall of Fame)",
    "Ricky Ray (CAN — 4× Grey Cup MVP)",
    "Bo Levi Mitchell (US → CFL — 2× CFL MOP; current era top QB)",
    "Milt Stegall (US → CFL — CFL all-time receiving TDs leader — 144)",
    "Russ Jackson (CAN — 3× Grey Cup MOP; consensus greatest Canadian QB)",
  ],
  records: [
    { title: "CFL all-time passing yards", holder: "Anthony Calvillo (CAN)", value: "79,816 yards over 20-season career", year: 2013 },
    { title: "Most Grey Cup wins", holder: "Toronto Argonauts", value: "18 Grey Cups (as of 2022 update)", year: 2022 },
    { title: "Longest Grey Cup history", holder: "Grey Cup", value: "Contested continuously since 1909 — oldest North American pro football championship", year: 2024 },
    { title: "Warren Moon's Edmonton dynasty", holder: "Edmonton Elks (Eskimos)", value: "5 consecutive Grey Cups 1978–1982", year: 1982 },
    { title: "Fastest 100-yard run", holder: "Cam Wake / others", value: "Multiple 100+ yard TDs recorded", year: 2010 },
  ],

  variants: ["cfl-professional", "usports-university", "canadian-junior-football", "amateur-community-football"],
  relatedSports: ["american-football", "arena-football", "flag-football", "rugby-union", "australian-rules-football"],

  skills: [
    "quarterback arm strength + decision-making",
    "receiver route-running (larger field = more space)",
    "kicking (rouge + long field goals through goal-line posts)",
    "backfield motion timing (waggle setups)",
    "defensive coverage (12th man complicates coverage)",
    "3rd down conversion (pressure on passing game)",
  ],
  strategies: [
    { title: "3-down pass-heavy offense", body: "Only 3 downs = less time for rushing establishment; pass-first from the opening drive. Explains CFL's pass-heavy identity." },
    { title: "Waggle exploitation", body: "Backfield motion pre-snap disrupts defensive alignment. Elite CFL QBs read + exploit defensive reactions to motion." },
    { title: "Rouge management", body: "Punt strategy accounts for potential 1-point rouge. Long punts that force returners deep can score a critical point in tight games." },
    { title: "Fast pace", body: "20-sec play clock rewards no-huddle offenses. Manage QB fatigue while maintaining tempo." },
    { title: "12th man distribution", body: "Where to line up the extra offensive player (extra slot receiver? full-back? tight end?) is a distinctive Canadian offensive design decision." },
    { title: "Field position + halo rule", body: "10-yard halo on punts allows better return opportunities than NFL — return specialists are crucial." },
  ],

  terminology: [
    { term: "Rouge / Single", meaning: "1-point scoring on kick that dies in end zone; unique to Canadian football." },
    { term: "Waggle", meaning: "Backfield motion pre-snap; allowed for multiple players." },
    { term: "Grey Cup", meaning: "CFL championship game; oldest continuous North American pro football championship (since 1909)." },
    { term: "Slotback", meaning: "Receiver lined up 1-yard behind line of scrimmage; a CFL-specific position." },
    { term: "3-down (game/offense)", meaning: "The 3-down rule; distinctive from 4-down American football." },
    { term: "Halo rule", meaning: "10-yard defensive spacing on punt returns; enables higher-return opportunities." },
    { term: "Convert (1 or 2 pt)", meaning: "Post-touchdown scoring attempt; 1-pt kick or 2-pt play." },
    { term: "CFL Most Outstanding Player (MOP)", meaning: "Annual season MVP award; league's highest individual honor." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Watch Grey Cup + CFL Sunday games", body: "TSN + CBS Sports broadcast CFL games; watch a full game to see 3-down rules + rouges + waggle in action." },
      { title: "Learn 3-down + rouge rules", body: "Two key differences from NFL. Understanding them explains 90% of tactical differences." },
      { title: "Join amateur football program (Canada)", body: "Football Canada oversees community + youth football at national level; USports for university." },
    ] },
    { level: "advanced", steps: [
      { title: "Play university football (USports)", body: "9 university conferences across Canada feed CFL scouts; Vanier Cup is national university championship." },
      { title: "Attend CFL Combine / rookie training camps", body: "Regional combines feed CFL draft; roster spots for both Canadian + American players." },
      { title: "Cross to NFL after CFL success", body: "Multiple Warren Moon-style transitions; CFL success builds NFL draft profile." },
    ] },
  ],

  faq: [
    { question: "How is Canadian Football different from NFL?", answer: "Major differences: (1) 12 players per side (NFL: 11). (2) 3 downs to gain 10 yards (NFL: 4). (3) Larger field 110×65 yd (NFL: 100×53⅓). (4) 20-yard end zones (NFL: 10). (5) Goalposts on goal line (NFL: back of end zone). (6) Rouge single-point scoring on missed kicks. (7) Backfield motion allowed pre-snap. (8) 20-second play clock (NFL: 40). Result: more passing, faster pace, higher scoring." },
    { question: "What is a rouge?", answer: "A single point scored when a kick (punt or missed field goal) lands in the end zone but is not returned out. Unique to Canadian football. Kicking specialists strategically kick long punts to force returners deep, potentially generating a critical 1-point in close games." },
    { question: "Why 3 downs instead of 4?", answer: "Historical accident — Canadian football evolved from rugby (which had no downs); when downs were introduced c. 1880, Canadian football chose 3, US football chose 4. The 3-down rule creates a distinctive pass-first offensive identity: teams don't have time to establish rushing games as they do in NFL." },
    { question: "What is the Grey Cup?", answer: "The CFL championship game, contested annually since 1909 — Canada's oldest professional sports championship. Named after Earl Grey (then Governor General of Canada, 4th Earl Grey — of tea fame). Attracts 6+ million Canadian TV viewers; approximately 20% of Canada's population watches each year. Toronto Argonauts have won 18 Grey Cups, the most of any team." },
    { question: "Can American players play in the CFL?", answer: "Yes — CFL rosters typically have ~50/50 Canadian + American players. Roster rules require 21 'nationals' (Canadian) + 21 'internationals' (mostly American) plus other categories. Many Americans use CFL as a route to NFL (Warren Moon, Doug Flutie, Cam Wake all excelled in CFL first) or as a career in itself (Damon Allen, Bo Levi Mitchell)." },
  ],

  wikipediaTitle: "Canadian football",
  sources: [
    { label: "Canadian Football League (CFL)", url: "https://cfl.ca", publisher: "CFL" },
    { label: "Wikipedia — Canadian football", url: "https://en.wikipedia.org/wiki/Canadian_football", publisher: "Wikipedia" },
    { label: "Grey Cup history", url: "https://cfl.ca/history/", publisher: "CFL" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
