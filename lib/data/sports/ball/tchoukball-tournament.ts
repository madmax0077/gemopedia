import type { Sport } from "@/lib/types";

export const tchoukballTournament: Sport = {
  id: "tchoukball-tournament",
  slug: "tchoukball-tournament",
  name: "Tchoukball Tournament",
  officialName: "FITB Tchoukball World Championships",
  aliases: ["Tchoukball WC", "FITB Tournament"],
  shortDescription:
    "Swiss-invented (1970 by Dr. Hermann Brandt) 7v7 non-contact team ball sport played on 27×17m court with 2 trampoline-like inclined frames at each end; scored by rebounding ball off frame + evading opponents' catches. FITB World Championships since 1984.",
  longDescription:
    "Tchoukball is a non-contact team ball sport invented in 1970 by Swiss biologist Dr. Hermann Brandt as a response to violent sports; designed to have zero physical contact + emphasis on cooperation + skill. Played 7v7 on a 27 m × 17 m indoor court with two 90 cm × 90 cm inclined trampoline-like frames (tchoukball frames, angled at 55°) mounted at each baseline. Attacking team throws ball at the opponent's or their own goal (either can be attacked from either half — 'tchouk' = onomatopoeia of ball hitting frame). Ball must rebound off frame, then land in-bounds without opposing player catching it (this scores 1 point). If defending team catches rebound before it touches floor, no score. If ball lands out-of-bounds or hits frame border, throwing team loses possession. Match: 3 × 15 min periods with 2 min breaks. Governed by Fédération Internationale de Tchoukball (FITB, founded 1971, HQ Geneva Switzerland). World Championships every 4 years since 1984 (currently 2004 → 2008 → 2011 → 2015 → 2019 → 2023). Strongholds: Switzerland (dominant Europe), Taiwan (dominant Asia + multi-time world champions incl. men + women), Japan, Singapore, Philippines, UK, Argentina, Brazil, Italy. Also popular as school PE sport in Switzerland + UK + Taiwan.",
  category: "ball-sports",
  subCategory: "non-contact team ball sport",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland (Geneva, Dr. Hermann Brandt, 1970)",
  estimatedOrigin: "Invented 1970 by Hermann Brandt in Geneva; FITB founded 1971; WC since 1984",
  players: { min: 7, max: 12, note: "7 on court + up to 5 substitutes per team." },
  equipment: [{ name: "Tchoukball ball", description: "Similar to handball; ~500 g, ~55 cm circumference." }, { name: "Two tchoukball frames (90 cm × 90 cm)", description: "Angled trampoline-like frames at 55° at each baseline." }, { name: "27 m × 17 m indoor court", description: "Standard court dimensions." }],
  duration: { approximateMinutes: 50, structure: "3 × 15 min periods with 2 min breaks; no OT in group stage." },
  objective: "Score more goals than opponent by rebounding ball off frame landing in-bounds without defender catch.",
  matchStructure: "3 × 15 min periods; possession alternates; team may attack either frame.",
  basicRules: [
    { title: "No contact + no defense at frame", body: "Zero physical contact allowed; defenders cannot obstruct throw or block near frame." },
    { title: "3-step + 3-second rule", body: "Player with ball may take max 3 steps + hold ball max 3 seconds." },
    { title: "Max 3 consecutive passes", body: "Team must shoot at frame within 3 passes." },
    { title: "May attack either frame", body: "Unique — attacking team may choose either frame to shoot at." },
    { title: "Same frame max 3 consecutive attacks", body: "Cannot attack same frame more than 3 times consecutively." },
  ],
  scoring: {
    summary: "1 point per successful score (rebound off frame lands in-bounds without defender catch).",
    winCondition: "More points at end of 45 min play time.",
    breakdown: [{ action: "Successful score", points: "+1" }, { action: "Missed frame / out-of-bounds", points: "possession lost" }, { action: "Defender catches rebound", points: "possession switches, no score" }],
  },
  positions: [{ name: "Attacker (Wing/Center)", role: "Field players who throw + score; positions rotate.", count: 7 }],
  officiating: { officials: ["Referee", "2 Line Judges", "Scorekeeper", "Timekeeper"], summary: "1 referee + line judges panel." },
  governingBodies: [{ name: "Fédération Internationale de Tchoukball (FITB)", founded: 1971, headquarters: "Geneva, Switzerland" }],
  majorCompetitions: [{ name: "FITB Tchoukball World Championships", frequency: "every 4 years", founded: 1984, region: "rotating global" }, { name: "European Tchoukball Championships (ETC)", frequency: "annual", founded: 2004, region: "Europe" }, { name: "Asian-Pacific Tchoukball Championships", frequency: "biennial", founded: 1997, region: "Asia-Pacific" }],
  countriesPlayed: ["CHE", "TWN", "JPN", "SGP", "PHL", "GBR", "ITA", "AUT", "ARG", "BRA", "IND"],
  famousAthletes: ["Taiwan men's + women's national teams (dominant Asia + multi-WC winners)", "Swiss national teams (Europe dominant)", "Dr. Hermann Brandt (inventor, 1970)"],
  records: [
    { title: "FITB founded 1971", holder: "Federation Internationale de Tchoukball", value: "FITB founded 1971 in Geneva by Hermann Brandt", year: 1971 },
    { title: "Taiwan multiple WC titles", holder: "Taiwan national teams", value: "Taiwan men + women national teams have won multiple World Championship titles", year: 2023 },
  ],
  variants: ["beach-tchoukball", "youth-tchoukball", "3v3-tchoukball"],
  relatedSports: ["handball", "volleyball", "netball"],
  skills: ["accurate frame targeting", "rebound-angle prediction", "passing without contact", "spatial awareness"],
  wikipediaTitle: "Tchoukball",
  sources: [{ label: "Wikipedia — Tchoukball", url: "https://en.wikipedia.org/wiki/Tchoukball", publisher: "Wikipedia" }, { label: "FITB official", url: "https://www.tchoukball.org", publisher: "FITB" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default tchoukballTournament;
