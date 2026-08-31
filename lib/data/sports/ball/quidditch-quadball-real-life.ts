import type { Sport } from "@/lib/types";

export const quidditchQuadballRealLife: Sport = {
  id: "quidditch-quadball-real-life",
  slug: "quidditch-quadball-real-life",
  name: "Quadball (Real-Life Quidditch)",
  officialName: "International Quadball Association (IQA) — formerly International Quidditch Association",
  aliases: ["Quidditch", "Quadball", "Muggle Quidditch"],
  shortDescription:
    "Real-world sport adaptation of Harry Potter's fictional Quidditch (2005+) — 7v7 mixed-gender full-contact field sport played with brooms between legs, using volleyball (quaffle) + dodgeballs (bludgers) + a 'snitch runner' (person in yellow); renamed Quadball 2022 to distance from J.K. Rowling; ~400+ university teams globally.",
  longDescription:
    "Quadball (formerly Quidditch, renamed 2022) is the real-life sport adaptation of the fictional Quidditch from J.K. Rowling's Harry Potter novels. Adapted from fiction to real-life sport 2005 at Middlebury College (Vermont, USA) by Xander Manshel + Alex Benepe — students built it as an ironic novelty that grew into serious international competitive sport. Signature elements: players hold PVC 'brooms' between their legs throughout play (required); 7 players per team including 3 Chasers, 2 Beaters, 1 Keeper, 1 Seeker; played on rectangular pitch (~55×33 m) with 3 hoop goals at each end. Uses 4 balls simultaneously: (1) Quaffle (slightly deflated volleyball) — Chasers throw through hoops for 10 pts each; (2) Bludgers (3 dodgeballs) — Beaters throw at opposing players; hit players must dismount + return to their goal hoops before returning to play; (3) Snitch — a player in yellow (the 'Snitch runner') with tennis ball in sock at back — Seekers try to catch it for 30 pts, ends the game. Full-contact — physical tackles allowed by all players (like rugby/lacrosse hybrid). Explicit gender inclusive rule: max 4 players of same-gender on field simultaneously (encourages mixed-gender play). Renamed from Quidditch to Quadball 2022 by IQA + major national bodies (Major League Quidditch → Major League Quadball) to distance from J.K. Rowling's transphobic public statements + address trademark. International Quadball Association (IQA, founded 2010) governs; 400+ university + club teams globally across 40+ countries. IQA World Cup biennial since 2012 (rebranded to World Championship); recent host cities Frankfurt (2016), Florence (2018), Richmond USA (2023). USA + Canada + UK + Australia + Belgium consistently top performers.",
  category: "ball-sports",
  subCategory: "real-life adaptation of fictional Quidditch (Harry Potter)",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Middlebury College, Vermont — Xander Manshel + Alex Benepe 2005)",
  estimatedOrigin: "Invented 2005 Middlebury College; IQA founded 2010; renamed Quadball 2022",
  players: { min: 7, max: 21, note: "7 on field per team + reserves; rosters typically 15-21." },
  equipment: [{ name: "PVC brooms (~1m length)", description: "Held between legs at all times; violating = penalty." }, { name: "Quaffle (slightly deflated volleyball)", description: "Main scoring ball; thrown through opposing hoops for 10 pts." }, { name: "Bludgers (3 dodgeballs)", description: "Beaters throw at opposing players; hit forces dismount + goal-hoop return." }, { name: "Snitch (tennis ball in sock; worn by Snitch runner)", description: "Snitch runner is a person in yellow with tennis ball attached; Seekers wrestle to grab it for 30 pts + end game." }, { name: "Goal hoops (3 per end, ~2m high)", description: "PVC hoop structures at each end of pitch." }],
  duration: { approximateMinutes: 30, structure: "Games last variable — until Snitch catch; typically 20-40 min; averaged 25 min." },
  objective: "Score more points than opponent by throwing quaffle through hoops + catching Snitch (30 pt bonus + ends game).",
  matchStructure: "Continuous play until Snitch catch or forfeit; tournaments run round-robin + knockout.",
  basicRules: [
    { title: "Broom held between legs throughout", body: "Broom must remain between legs — dropping/removing = penalty." },
    { title: "Quaffle through hoop = 10 pts", body: "Chasers/Keeper thrown quaffle through opposing hoop = 10 pts." },
    { title: "Snitch catch = 30 pts + game ends", body: "Seeker grabs Snitch runner's tennis ball = 30 pts + game ends immediately." },
    { title: "Bludger hit = dismount + return to hoops", body: "Player hit by bludger must dismount + return to team's goal hoops before returning to play." },
    { title: "Max 4 same-gender on field simultaneously (inclusive)", body: "Explicit gender-inclusive rule — no more than 4 players of same gender on field; encourages mixed-gender play." },
  ],
  scoring: {
    summary: "10 pts per quaffle-through-hoop; 30 pts + game-end for Snitch catch.",
    winCondition: "Most points at Snitch catch = winner.",
    breakdown: [{ action: "Quaffle through opposing hoop", points: "+10" }, { action: "Snitch caught", points: "+30 + game ends" }],
  },
  positions: [{ name: "Chaser", role: "Scores with quaffle; 3 per team.", count: 3 }, { name: "Beater", role: "Throws bludgers at opponents; 2 per team.", count: 2 }, { name: "Keeper", role: "Defends hoops; 1 per team.", count: 1 }, { name: "Seeker", role: "Catches Snitch runner; 1 per team.", count: 1 }, { name: "Snitch runner (neutral)", role: "Yellow-shirt runner with tennis ball; ~1 per game.", count: 1 }],
  officiating: { officials: ["Head Referee", "3 Assistant Refs (Snitch Ref + Bludger Ref + Keeper Ref)", "Timekeeper", "Score Keeper"], summary: "IQA certified officials." },
  governingBodies: [{ name: "International Quadball Association (IQA)", founded: 2010, headquarters: "USA + rotating" }, { name: "Major League Quadball (MLQ — pro league USA/CAN)", founded: 2015, headquarters: "USA" }, { name: "US Quadball (national body USA)", founded: 2010, headquarters: "USA" }],
  majorCompetitions: [{ name: "IQA World Championship (formerly World Cup)", frequency: "biennial", founded: 2012, region: "rotating (Frankfurt 2016, Florence 2018, Richmond USA 2023)" }, { name: "MLQ Championship (USA/CAN pro)", frequency: "annual", founded: 2015, region: "USA/Canada" }, { name: "US Quadball Cup (US national college)", frequency: "annual", founded: 2007, region: "USA" }],
  countriesPlayed: ["USA (birthplace + dominant)", "CAN", "GBR", "AUS", "BEL", "GER", "FRA", "ITA", "MEX", "IND", "worldwide 40+ countries"],
  famousAthletes: ["Xander Manshel + Alex Benepe (co-inventors 2005 Middlebury)", "Team USA (multi-time World Cup winners)", "Kaci Erwin (USA — early star)"],
  records: [
    { title: "Invented 2005 Middlebury College", holder: "Xander Manshel + Alex Benepe (USA)", value: "Real-life Quidditch invented 2005 at Middlebury College (Vermont) by students Xander Manshel + Alex Benepe as ironic novelty; grew to global sport", year: 2005 },
    { title: "Renamed to Quadball 2022 (distance from Rowling)", holder: "IQA + Major League Quadball", value: "Sport renamed from Quidditch to Quadball 2022 by IQA + MLQ to distance from J.K. Rowling's transphobic public statements + address trademark", year: 2022 },
    { title: "400+ teams in 40+ countries", holder: "IQA", value: "400+ university + club teams active globally across 40+ countries as of 2024", year: 2024 },
  ],
  variants: ["quadball-standard-7v7-outdoor", "indoor-modified-quadball-5v5", "junior-quadball-under-18"],
  relatedSports: ["dodgeball", "rugby", "lacrosse", "handball-team"],
  skills: ["running with broom between legs (all skills adapt)", "quaffle throwing accuracy", "bludger throwing + dodging", "Snitch catch technique (wrestling for tennis ball)", "gender-inclusive team coordination"],
  wikipediaTitle: "Quidditch (real-life sport)",
  sources: [{ label: "Wikipedia — Quidditch (real-life sport)", url: "https://en.wikipedia.org/wiki/Quidditch_(real-life_sport)", publisher: "Wikipedia" }, { label: "IQA official", url: "https://iqasport.org", publisher: "International Quadball Association" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default quidditchQuadballRealLife;
