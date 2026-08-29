import type { Sport } from "@/lib/types";

export const spikeballDoublesTournament: Sport = {
  id: "spikeball-doubles-tournament",
  slug: "spikeball-doubles-tournament",
  name: "Spikeball (Roundnet) Doubles Tournament",
  officialName: "Spikeball Roundnet Association (SRA) World Championship",
  aliases: ["Roundnet Championship", "Spikeball Nationals", "SRA World Series"],
  shortDescription:
    "Fast-paced 2v2 net sport played around a small circular ground-level trampoline-like net (~90 cm diameter); Spikeball Inc. + Roundnet Association crown national + world champions annually across USA + international series since 2015.",
  longDescription:
    "Spikeball (also called Roundnet) is a fast-paced 2v2 or 4v4 net sport invented by Jeff Knurek in 1989, revived + popularized by Chris Ruder + Spikeball Inc. from 2008 onwards. Played around a small circular ground-level trampoline-like net (~90 cm / 36\" diameter) using a soft rubber ball similar in size to a lacrosse ball. Players stand around the net in 2v2 formation. Serving team hits ball down onto net; opposing team must return within 3 touches (like volleyball) by hitting ball back down onto net for opposing team to receive. Point continues until team fails to return ball onto net or ball hits net's rim/pocket. First team to 21 points wins (must win by 2). Modern game standardized as 'Roundnet' by International Federation for Roundnet (IFR, founded 2018) to allow trademark-neutral international sport growth. Governed by Spikeball Roundnet Association (SRA, founded 2015 by Spikeball Inc.). Signature events: SRA Nationals + World Championship (Chicago/Atlanta rotating), international Roundnet Federation series. Notable players: Peter Jon Showalter (USA), Tyler Cisek (USA), Skyler Boles (USA), Sunday LeBlanc (USA women's), John Roberts, Bogdan Kicaj (POL — European champion).",
  category: "ball-sports",
  subCategory: "2v2 net sport (roundnet)",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Jeff Knurek invented 1989 as toy; Spikeball Inc. revived 2008; sport 2015+)",
  estimatedOrigin: "Invented 1989 as toy; revived 2008 by Chris Ruder / Spikeball Inc.; competitive scene 2015+",
  players: { min: 2, max: 4, note: "Standard 2v2; 4v4 variant also played." },
  equipment: [{ name: "Spikeball / Roundnet set", description: "Circular ~90 cm diameter net with rim + hard plastic support; portable + ground-level." }, { name: "Spikeball ball (rubber, ~12 cm)", description: "Slightly inflated soft rubber ball; specific tension." }, { name: "Athletic shoes + comfortable clothing", description: "Playable on grass/sand/court/hardwood." }],
  duration: { approximateMinutes: 20, structure: "Match to 21 points, win by 2; typically 15-25 min per match; tournament ~4-8 hrs across bracket." },
  objective: "Reach 21 points first (must win by 2) by successfully returning ball onto opponent's net-side while opponent fails to return.",
  matchStructure: "Round-robin group play → single-elimination bracket; some tournaments best-of-3 sets.",
  basicRules: [
    { title: "3-touch return limit", body: "Team may use max 3 touches to return ball onto net (like volleyball)." },
    { title: "No consecutive touches (same player)", body: "Same player cannot touch ball twice consecutively (except on 1-touch strike)." },
    { title: "Net-rim = replay (let)", body: "Ball hitting rim/pocket = replay (let)." },
    { title: "360° play (no back-court boundary)", body: "Play continues 360° around net; no out-of-bounds except on net-strike itself." },
  ],
  scoring: {
    summary: "1 point per rally; rally-scoring format (either team scores).",
    winCondition: "First team to 21 points, win by 2.",
    breakdown: [{ action: "Successful net-strike + opponent fails to return", points: "+1" }, { action: "Rim hit / pocket", points: "let (replay)" }],
  },
  positions: [{ name: "Doubles partner", role: "2 players per team; both alternate attack/defense.", count: 2 }],
  officiating: { officials: ["Referee (major events)"], summary: "Casual: self-officiated; major events: 1 head referee per match." },
  governingBodies: [{ name: "Spikeball Roundnet Association (SRA)", founded: 2015, headquarters: "Chicago, USA" }, { name: "International Federation for Roundnet (IFR)", founded: 2018, headquarters: "USA" }],
  majorCompetitions: [{ name: "SRA Nationals", frequency: "annual", founded: 2015, region: "USA (rotating)" }, { name: "Roundnet World Championship", frequency: "annual", founded: 2019, region: "USA / Europe (rotating)" }, { name: "European Roundnet Championship", frequency: "annual", founded: 2018, region: "Europe (rotating)" }],
  countriesPlayed: ["USA", "GER", "POL", "CAN", "AUS", "SWE", "MEX", "JPN"],
  famousAthletes: ["Peter Jon Showalter (USA)", "Tyler Cisek (USA)", "Skyler Boles (USA)", "Sunday LeBlanc (USA — women's)", "Bogdan Kicaj (POL — European champion)"],
  records: [
    { title: "Spikeball Inc. revival 2008", holder: "Chris Ruder / Spikeball Inc.", value: "Chris Ruder revived Spikeball toy from 1989; founded company 2008", year: 2008 },
    { title: "SRA founded 2015", holder: "Spikeball Roundnet Association", value: "SRA founded 2015 to formalize competitive roundnet in USA", year: 2015 },
  ],
  variants: ["2v2-standard-doubles", "4v4-teams", "beach-roundnet", "youth-roundnet"],
  relatedSports: ["volleyball", "beach-volleyball", "tchoukball", "sepak-takraw"],
  skills: ["reflex reaction", "spike-angle control", "team coordination", "reading opponent"],
  wikipediaTitle: "Roundnet",
  sources: [{ label: "Wikipedia — Roundnet", url: "https://en.wikipedia.org/wiki/Roundnet", publisher: "Wikipedia" }, { label: "Spikeball official", url: "https://www.spikeball.com", publisher: "Spikeball Inc." }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default spikeballDoublesTournament;
