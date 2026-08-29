import type { Sport } from "@/lib/types";

export const touchFootball: Sport = {
  id: "touch-football",
  slug: "touch-football",
  name: "Touch Football (American)",
  officialName: "Touch Football (American / NFL Flag Adjacent)",
  aliases: ["No-Contact Football", "One-Hand-Touch", "Two-Hand-Touch", "American Touch Football"],
  shortDescription:
    "Non-contact variant of American gridiron football where 'tackles' are made by touching (one or two hands) below the neck — massively popular recreational form in US high schools, colleges, backyards, and intramural leagues.",
  longDescription:
    "Touch football is a non-contact variant of American football where a defensive stop is achieved by touching the ball-carrier (with one or two hands, depending on rules) rather than tackling. It emerged in US urban and college settings in the 1920s-1940s as a safer street/park alternative to full-contact football, and is now the dominant recreational form of American football in the United States. Team sizes range from 5 to 11 per side, played on shorter fields (typically 40-70 yards long, 30-40 wide). Governed at competitive level by various regional and national bodies (International Federation of American Football — IFAF hosts touch/flag variants; NFL FLAG for youth), touch football also served as the training and social form of the sport for generations of American athletes. Notably distinct from Australian 'touch rugby' (which is a codified international sport with its own federation).",

  category: "ball-sports",
  subCategory: "gridiron football variant (non-contact)",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (developed 1920s-1940s in urban/college recreation); NFL FLAG founded 1990s",
  estimatedOrigin: "1920s-1940s US recreational parks + colleges; NFL FLAG 1994; IFAF flag football World Championships since 2002",

  players: { perTeam: 7, min: 5, max: 11, substitutes: 6, note: "5v5, 7v7, or 8v8 most common; 4v4 also played." },
  field: {
    surfaceName: "Grass or turf field",
    dimensions: "40-70 yards long × 30-40 yards wide (shorter than full field); end zones 5-10 yards deep",
    description: "Rectangular field with two end zones; markings identical to full football but scaled down. Sidelines and end lines demarcate playing area.",
  },
  equipment: [
    { name: "Football", description: "Standard American football (adult, youth, or junior size)." },
    { name: "Optional mouthguard + soft cleats", description: "No pads or helmets required; some leagues permit soft protective wear." },
    { name: "Belt with flags (flag football variant)", description: "In flag football, ball-carrier wears a belt with two velcro-attached flags; defender pulls flag to end play." },
    { name: "Field cones / markers", description: "Used to demarcate first-down zones and boundaries in casual play." },
  ],
  duration: { approximateMinutes: 40, structure: "2 × 20-min halves typical; league play varies (4 × 8-min quarters common in youth)." },
  objective: "Score more points than the opponent by advancing the ball into the end zone via passing and running (limited).",
  matchStructure: "Two halves or four quarters; each team has 4 downs to advance past midfield (or a set yard mark), then 4 more to score. No punts in most formats.",

  basicRules: [
    { title: "Touch (or flag pull) = down", body: "Ball-carrier is 'down' when defender touches (one or two hands, below neck) or pulls flag." },
    { title: "No contact", body: "No blocking with hands (screen blocks allowed in some leagues); no tackling." },
    { title: "First downs by midfield mark", body: "4 downs to reach midfield; 4 more to score (most 7v7 formats)." },
    { title: "Passing-heavy", body: "Most touch formats restrict or eliminate running plays; QB must pass within 5-7 seconds." },
    { title: "No blitzing (some formats)", body: "Rush counted to 5-Mississippi before defensive lineman may cross line." },
  ],
  advancedRules: [
    { title: "Rush count rules", body: "Defender counts '1-Mississippi... 5-Mississippi' before rushing the QB, unless ball is handed off." },
    { title: "Interceptions", body: "Live plays — interceptor may return the ball to end zone." },
    { title: "Sacks", body: "If QB is touched behind line of scrimmage, loss of down + yardage." },
    { title: "Fumbles = dead ball", body: "Most touch formats rule fumbles as dead where they hit the ground; no live-ball recovery." },
    { title: "Extra points", body: "1-pt (5-yard try) or 2-pt (10-yard try) after touchdowns; varies by league." },
  ],
  scoring: {
    summary: "Touchdowns and conversions; higher point total wins.",
    winCondition: "Team with higher score at end of regulation; overtime formats vary by league (often college-style alternating possessions).",
    breakdown: [
      { action: "Touchdown", points: "6" },
      { action: "Extra point (short try)", points: "1" },
      { action: "Extra point (long try)", points: "2" },
      { action: "Safety (defense tackles ball-carrier in own end zone)", points: "2" },
    ],
  },
  penalties: [
    { title: "Offensive holding / illegal block", body: "5-10 yards from line of scrimmage." },
    { title: "Pass interference", body: "10 yards + automatic first down." },
    { title: "Illegal contact", body: "Contact with intent to tackle = 10-yard penalty + potential ejection for repeat." },
    { title: "Unsportsmanlike conduct", body: "10 yards + potential ejection." },
  ],

  positions: [
    { name: "Quarterback (QB)", role: "Passes ball on nearly every down; game's primary decision-maker.", count: 1 },
    { name: "Center", role: "Snaps ball to QB.", count: 1 },
    { name: "Receivers (2-4)", role: "Run passing routes; primary point-scorers.", count: 3 },
    { name: "Rusher / Blitzer (defense)", role: "Counts rush before crossing line to pressure QB.", count: 1 },
    { name: "Defensive Backs (3-5)", role: "Cover receivers; make touches/flag pulls to end plays.", count: 4 },
  ],
  officiating: {
    officials: ["Referee (1-3)", "Down/yardage marker crew", "Scorekeeper"],
    summary: "1-3 referees typical for organized league play; officiating simpler than full football due to no-contact.",
  },

  governingBodies: [
    { name: "International Federation of American Football (IFAF)", founded: 1998, headquarters: "New York, USA", website: "https://ifaf.org" },
    { name: "USA Football (governs flag/touch football in USA)", founded: 2002, headquarters: "Indianapolis, USA" },
    { name: "NFL FLAG", founded: 1994, headquarters: "USA (NFL youth program)" },
  ],
  majorCompetitions: [
    { name: "IFAF Flag Football World Championships", frequency: "biennial", founded: 2002, region: "worldwide (Los Angeles 2028 Olympics debut)" },
    { name: "NFL FLAG National Championship", frequency: "annual", founded: 1995, region: "USA (youth)" },
    { name: "USA Football National Championships", frequency: "annual", founded: 2005, region: "USA" },
    { name: "World Games (Flag Football)", frequency: "quadrennial", founded: 2022, region: "worldwide" },
  ],
  countriesPlayed: ["US", "MX", "CA", "AT", "IT", "DE", "PA", "GB", "JP", "AU", "IL", "ES"],
  famousAthletes: [
    "Diana Flores (Mexico — women's flag football superstar; Super Bowl LVII ad; national team captain)",
    "Vanita Krouch (USA — 3× Flag Football World Champion)",
    "Bruce Mapp (USA — men's team world champion)",
    "Darrell Doucette (USA — men's flag football QB legend)",
    "Multiple NFL players (touch football as offseason training)",
  ],
  records: [
    { title: "Olympic debut", holder: "Flag football (5v5)", value: "Confirmed as medal sport at Los Angeles 2028 Olympics", year: 2023 },
    { title: "Most participants (USA)", holder: "NFL FLAG + adult leagues", value: "~7 million Americans play flag/touch football annually (SFIA data)", year: 2023 },
    { title: "Most Flag Football World Championships (men)", holder: "USA + Mexico + Panama", value: "USA dominant historically; Mexico won 2022 World Championship", year: 2022 },
  ],

  variants: ["nfl-flag-5v5-youth", "ifaf-flag-5v5-international", "touch-football-7v7-recreational", "one-hand-touch-8v8-street", "two-hand-touch-full-field-college-intramural"],
  relatedSports: ["american-football", "flag-football", "touch-rugby", "canadian-football", "arena-football"],

  skills: ["quick-read quarterback play", "route-running precision", "man-and-zone coverage in tight space", "flag-pull technique", "5-Mississippi rush timing", "route-tree memorization"],
  strategies: [
    { title: "Spread the field", body: "5v5 flag / 7v7 touch reward passing to open space; use 3-4 wide receiver sets." },
    { title: "Quick releases beat blitzes", body: "5-Mississippi rush countdown means QB must be decisive; slant + hitch routes preferred." },
    { title: "Zone coverage in short fields", body: "Man coverage struggles because there's no help; zone-under with a deep safety works better." },
    { title: "Trick plays flourish", body: "Reverses, flea-flickers, and WR-passes are staples of touch football because there's no pass-rush penalty for handoffs." },
  ],

  terminology: [
    { term: "Touch", meaning: "A one-hand or two-hand contact below the neck that ends the play." },
    { term: "Flag pull", meaning: "In flag football, removal of the belt-mounted flag to end the play." },
    { term: "5-Mississippi", meaning: "Rush count spoken aloud before defensive line may cross the line of scrimmage." },
    { term: "No-huddle", meaning: "Offensive tempo strategy — snap ball quickly to prevent defensive substitutions." },
    { term: "Pick play (illegal)", meaning: "Offensive receiver intentionally screens defender — banned in most leagues." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join a local park / rec league", body: "Every US city has adult and youth flag football leagues; costs $50-150 per season." },
      { title: "Learn a basic route tree", body: "Slant, hitch, out, corner, post, go — memorize these 6 routes to be an effective receiver." },
      { title: "Practice flag-pull technique", body: "Approach receiver at correct angle, break down feet, pull flag with strong hand — not tackling." },
    ]},
    { level: "advanced", steps: [
      { title: "IFAF Flag Football National Team trials", body: "USA Football + national federations select flag football national teams for World Championships and Los Angeles 2028 Olympics." },
      { title: "Adult national tournaments", body: "AAU + USA Football + independent circuits host annual championship events with $10K+ prize purses." },
    ]},
  ],

  faq: [
    { question: "What's the difference between touch football and flag football?", answer: "In touch football, defenders end a play by touching the ball-carrier (one or two hands, depending on rules). In flag football, defenders end a play by pulling a velcro-attached flag from a belt worn by the ball-carrier. Flag football is more objective and now used at IFAF and Olympic level; touch football remains the dominant recreational American backyard form." },
    { question: "Will flag football be in the Olympics?", answer: "Yes — 5v5 flag football will debut as a medal sport at the Los Angeles 2028 Summer Olympics, with both men's and women's tournaments. This is expected to accelerate international federation development." },
    { question: "Is touch football only played in the USA?", answer: "The US has by far the largest participation base, but flag/touch football is growing rapidly in Mexico (2022 World Champion women), Panama, Austria, Italy, Japan, Australia, and Israel. IFAF has 30+ member federations that field flag football national teams." },
  ],

  wikipediaTitle: "Touch football (American)",
  sources: [
    { label: "IFAF", url: "https://ifaf.org", publisher: "International Federation of American Football" },
    { label: "USA Football", url: "https://usafootball.com", publisher: "USA Football" },
    { label: "Wikipedia — Touch football (American)", url: "https://en.wikipedia.org/wiki/Touch_football_(American)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
