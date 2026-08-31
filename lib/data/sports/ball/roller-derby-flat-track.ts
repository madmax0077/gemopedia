import type { Sport } from "@/lib/types";

export const rollerDerbyFlatTrack: Sport = {
  id: "roller-derby-flat-track",
  slug: "roller-derby-flat-track",
  name: "Roller Derby (Flat Track)",
  officialName: "Women's Flat Track Derby Association (WFTDA)",
  aliases: ["Flat Track Roller Derby", "WFTDA Derby", "Modern Derby"],
  shortDescription:
    "Contact team sport on quad roller skates on flat oval track — 2 teams of 5 skate counter-clockwise; jammer scores points by lapping opposing team's blockers; DIY punk-rock modern revival originated 2001 Austin Texas; WFTDA governs 400+ leagues + annual World Championship.",
  longDescription:
    "Roller Derby (Flat Track) is a contact team sport played on quad roller skates on a flat oval track (~26m × 15m, marked with tape/paint anywhere). Traces back to 1930s Chicago Depression-era Transcontinental Roller Derby (Leo Seltzer 1935 — banked-track theatrical/sport hybrid); modern flat-track revival began 2001 in Austin, Texas by Devil Dan Policarpo + Bad Girl Good Woman Productions (BGGW) — the modern DIY punk-rock roller derby movement was born. Two teams of 5 skaters compete simultaneously counter-clockwise: (1) one designated 'jammer' per team wears a helmet cover with a star; (2) four 'blockers' (including one 'pivot' who wears striped helmet cover + can become jammer via helmet-swap 'star pass'). The pack of 8 blockers (4 per team) skate together; jammers start behind pack + fight through to score points by lapping opposing team's blockers. Match structure: 2 halves × 30 minutes; jams last max 2 minutes each with 30-second inter-jam breaks. Extremely fast + physical — legal contact via blocking with hip/butt/shoulder/chest (elbows/hands/head/back forbidden = penalty box for 30 seconds). Signature DIY culture: skaters use pseudonyms (Doom Hilda, Iron Maven, Suzy Hotrod) rather than legal names. Women's Flat Track Derby Association (WFTDA, founded 2004 Austin) is dominant global body with 400+ member leagues + skate names 200+ in Hall of Fame; WFTDA World Championships annual since 2006. Also Men's Roller Derby Association (MRDA, 2007). Signature venues: Texas Rollergirls (Austin — birthplace league), Rat City Rollergirls (Seattle), Gotham Girls (NYC), London Rollergirls (UK), Rose City Rollers (Portland OR — 4x WFTDA WC winner). Roller Derby World Cup international since 2011 (Team USA dominant). Featured in film 'Whip It' (2009, Drew Barrymore directed).",
  category: "ball-sports",
  subCategory: "flat-track quad-skate contact team sport",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Austin, Texas — modern flat-track revival 2001; original Chicago banked-track 1935)",
  estimatedOrigin: "Original Transcontinental Roller Derby 1935 Chicago (Leo Seltzer); modern flat-track revival 2001 Austin; WFTDA 2004",
  players: { min: 10, max: 15, note: "5 skaters per team on track (1 jammer + 4 blockers including 1 pivot); rosters typically 14 per team." },
  equipment: [{ name: "Quad roller skates (traditional 4-wheel)", description: "Not inline skates; traditional 4-wheel quad configuration; brands: Antik, Bont, Riedell." }, { name: "Full protective gear: helmet, mouthguard, knee pads, elbow pads, wrist guards", description: "Mandatory; extra pads common; helmet stars/stripes for role identification." }, { name: "Flat oval track (~26m × 15m)", description: "Any flat surface; taped or painted; hardwood + skate-park concrete common." }, { name: "Jammer star + pivot stripe helmet covers", description: "Star = jammer; stripe = pivot; interchangeable via star pass." }],
  duration: { approximateMinutes: 60, structure: "2 halves × 30 min; individual jams max 2 min; ~60 min total playing time + intermission." },
  objective: "Score more points than opponent by having jammer lap opposing blockers.",
  matchStructure: "60-minute bout in 2 halves; series of 2-min jams; scoring by jammer laps of opposing blockers.",
  basicRules: [
    { title: "Jammer scores 1 point per opposing blocker legally passed", body: "First pass through pack = 'lead jammer' status; subsequent passes = 1 pt per blocker." },
    { title: "Lead jammer can call off jam by tapping hips", body: "Strategic call-off before opposing jammer scores." },
    { title: "Blockers use body-checking (hip/butt/shoulder/chest)", body: "No hands/elbows/head/back contact; direction control critical." },
    { title: "Star pass: pivot can become jammer mid-jam", body: "Jammer hands star helmet cover to pivot; pivot becomes new jammer." },
    { title: "Penalty box 30 seconds per infraction", body: "Illegal contact + track cuts + false starts = 30-second sit-out." },
  ],
  scoring: {
    summary: "1 point per opposing blocker legally passed by jammer per lap.",
    winCondition: "Most points at end of 60-min bout.",
    breakdown: [{ action: "Jammer passes opposing blocker legally", points: "+1" }, { action: "Grand slam (all 4 opposing blockers passed)", points: "+4 per lap" }, { action: "Star pass jammer", points: "+1 for each remaining blocker passed" }],
  },
  positions: [{ name: "Jammer", role: "Scorer wearing star helmet cover.", count: 1 }, { name: "Blocker (Pivot)", role: "Striped-helmet blocker; can become jammer.", count: 1 }, { name: "Blocker", role: "Standard blocker.", count: 3 }],
  officiating: { officials: ["7 Skating Officials (Head Ref + Jammer Refs + Pack Refs)", "Non-Skating Officials (NSOs) — Penalty Trackers, Score Keepers, Timekeepers"], summary: "WFTDA certified officials — 7 skating officials + 6-10 NSOs per bout." },
  governingBodies: [{ name: "Women's Flat Track Derby Association (WFTDA)", founded: 2004, headquarters: "Austin, Texas, USA" }, { name: "Men's Roller Derby Association (MRDA)", founded: 2007, headquarters: "USA" }, { name: "Junior Roller Derby Association (JRDA)", founded: 2008, headquarters: "USA" }],
  majorCompetitions: [{ name: "WFTDA International Championships ('The Big O')", frequency: "annual", founded: 2006, region: "USA (rotating cities)" }, { name: "Roller Derby World Cup", frequency: "3-4 years", founded: 2011, region: "rotating (Toronto, Dallas, Manchester, Winnipeg)" }, { name: "MRDA Championship", frequency: "annual", founded: 2007, region: "USA" }],
  countriesPlayed: ["USA (birthplace + dominant)", "CAN", "GBR", "AUS", "GER", "ARG", "SWE", "FIN", "worldwide 40+ countries"],
  famousAthletes: ["Suzy Hotrod (USA — Gotham Girls legend + Hall of Fame)", "Iron Maven (USA)", "Doom Hilda (Rose City)", "Bonnie Thunders (USA — Gotham; WFTDA MVP multi-year)", "Team USA (WC dominant)"],
  records: [
    { title: "WFTDA founded 2004 Austin", holder: "Women's Flat Track Derby Association", value: "WFTDA founded 2004 in Austin Texas — 400+ member leagues globally by 2024, largest women's derby body", year: 2004 },
    { title: "Modern flat-track revival 2001 Austin", holder: "Bad Girl Good Woman Productions", value: "Modern DIY flat-track roller derby revival began 2001 in Austin Texas by BGGW Productions — punk-rock feminist reclamation of 1930s Roller Derby", year: 2001 },
    { title: "Roller Derby World Cup since 2011", holder: "Blood & Thunder magazine", value: "First Roller Derby World Cup held 2011 in Toronto — 13 national teams; USA has dominated all World Cups", year: 2011 },
  ],
  variants: ["wftda-flat-track-standard", "banked-track-classic-1930s-revival", "mrda-mens-derby", "junior-roller-derby-jrda", "co-ed-roller-derby-mixed"],
  relatedSports: ["speed-skating", "roller-hockey", "ice-hockey", "quad-derby-banked"],
  skills: ["quad-skate speed + agility", "body-check blocking with hip/butt/shoulder", "pack awareness + tactical positioning", "star-pass timing (jammer/pivot swap)"],
  wikipediaTitle: "Roller derby",
  sources: [{ label: "Wikipedia — Roller derby", url: "https://en.wikipedia.org/wiki/Roller_derby", publisher: "Wikipedia" }, { label: "WFTDA official", url: "https://wftda.com", publisher: "WFTDA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default rollerDerbyFlatTrack;
