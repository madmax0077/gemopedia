import type { Sport } from "@/lib/types";

export const memoryLeague: Sport = {
  id: "memory-league",
  slug: "memory-league",
  name: "Memory League (Competitive Memorization)",
  officialName: "Memory League (Extreme Memory Championship) + World Memory Championships (IAM)",
  aliases: ["Speed Memory", "Extreme Memory", "IAM Memory Sports"],
  shortDescription:
    "Competitive mind sport where practitioners memorize + recall vast quantities of information (numbers, cards, faces, words) at extreme speed; International Association of Memory (IAM) governs World Memory Championships since 1991; Memory League (online) hosts fast-format matches; world records include 5,040 digits in 30 min + 2 shuffled decks of cards in 5 min.",
  longDescription:
    "Memory Sports is a competitive mind sport where practitioners ('memory athletes' or 'mnemonists') memorize + recall vast quantities of information under strict time limits — using memory techniques including the Method of Loci (Memory Palace), Person-Action-Object (PAO) system, Major System (number-consonant conversion), and Number-Rhyme systems. Modern competitive era launched 1991 with the first World Memory Championships (London, organized by Tony Buzan + Ray Keene). Governed by International Association of Memory (IAM, founded 2016 after WMSC split) with parallel World Memory Sports Council (WMSC) events. Two competitive formats: (1) Classical WMC/IAM — 10-discipline format over 3 days including 5 min binary digits, 15 min numbers, 60 min numbers, 30 min binary, 15 min images, 15 min names + faces, 15 min shuffled cards, 30 min cards, 5 min historical dates, 15 min random words; (2) Memory League — fast-format online + in-person: 5 disciplines (Names, Cards, Words, Numbers, Images) each in ~1-2 minutes; head-to-head bracketed format; started 2016; Memory League World Championship annual. World records: Ryan Judd (USA — 5,040 digits in 30 min 2023), Alex Mullen (USA — 5,000+ digits 30 min; 3x World Memory Champion 2015-2017), Wang Feng (CHN — 4,620 digits 60 min; 2x WMC), Muñoz Katie Kermode (GBR — 6 shuffled decks in 15 min; women's WMC), Simon Reinhard (GER — 20.44 seconds to memorize deck of shuffled cards). Boris Konrad (GER — memory researcher + competitor). Grand Master of Memory (GMM) title requires: memorize 1000 digits in 60 min, memorize 10 shuffled decks in 60 min, memorize shuffled deck in <2 min. Sport also popularized by Joshua Foer's 'Moonwalking with Einstein' (2011). Growing scene in USA (USA Memory Championship since 1997), UK, Germany, China, Mongolia (surprising strength), India.",
  category: "mind-sports",
  subCategory: "competitive memorization mind sport",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (First World Memory Championship London 1991 — Tony Buzan + Ray Keene)",
  estimatedOrigin: "First WMC London 1991; IAM founded 2016; Memory League 2016",
  players: { min: 1, max: 2, note: "Individual competition; Memory League head-to-head bracket format." },
  equipment: [{ name: "Standard playing cards (shuffled decks)", description: "For card memorization disciplines." }, { name: "Number/binary/word/image sheets", description: "Provided per discipline; recall on parallel answer sheets." }, { name: "Timer + stopwatch (competitive)", description: "Strict time limits per discipline." }, { name: "Memory Palace mental infrastructure (self-created)", description: "Athletes construct mental locations (memory palaces) for storage." }, { name: "Ear defenders (concentration)", description: "Silence critical during memorization phase." }],
  duration: { approximateMinutes: 240, structure: "Classical WMC: 3-day 10-discipline event; Memory League: ~30 min per head-to-head match." },
  objective: "Memorize + recall maximum information across disciplines at fastest speed with fewest errors.",
  matchStructure: "Classical: 10 discipline events with normalized scoring; Memory League: 5-discipline head-to-head elimination.",
  basicRules: [
    { title: "Time-limited memorization phase", body: "Fixed memorization time per discipline (30s to 60 min)." },
    { title: "Followed by recall phase (typically 2× memorization time)", body: "Recall on separate answer sheet; scored on correct items minus penalties." },
    { title: "Method of Loci + PAO permitted (any technique)", body: "Athletes free to use any memory technique." },
    { title: "No electronics + closed-book conditions", body: "Strictly no phones/computers during memorization or recall." },
  ],
  scoring: {
    summary: "Points per discipline normalized; Grand Master of Memory (GMM) title requires meeting specific thresholds.",
    winCondition: "Highest normalized total across 10 events (Classical) OR best-of-5 discipline wins (Memory League).",
    breakdown: [{ action: "Correct item recalled", points: "+1" }, { action: "Incorrect item (Classical)", points: "-0.5" }, { action: "Grand Master threshold (1000 digits 60min + 10 decks 60min + deck <2min)", points: "GMM title conferred" }],
  },
  positions: [{ name: "Memory athlete (competitor)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Arbiter", "Discipline Officials", "Timekeeper", "Scoring Panel"], summary: "IAM/WMSC certified officials." },
  governingBodies: [{ name: "International Association of Memory (IAM)", founded: 2016, headquarters: "Norway / worldwide" }, { name: "World Memory Sports Council (WMSC)", founded: 1991, headquarters: "London, UK" }, { name: "Memory League Community", founded: 2016, headquarters: "online" }],
  majorCompetitions: [{ name: "IAM World Memory Championships", frequency: "annual", founded: 1991, region: "rotating (China, UK, Germany, Sweden, Mongolia)" }, { name: "Memory League World Championship", frequency: "annual", founded: 2016, region: "rotating (USA, Germany, online)" }, { name: "USA Memory Championship", frequency: "annual", founded: 1997, region: "USA (rotating cities)" }, { name: "Extreme Memory Tournament (EMT)", frequency: "annual", founded: 2014, region: "USA" }],
  countriesPlayed: ["USA", "GER", "CHN", "MNG (surprising strength)", "GBR", "SWE", "IND", "IRN", "worldwide"],
  famousAthletes: ["Alex Mullen (USA — 3x World Memory Champion 2015-2017; multiple world records)", "Wang Feng (CHN — 2x WMC)", "Simon Reinhard (GER — deck memorization world record 20.44s)", "Katie Kermode (GBR — women's WMC + 6 decks 15min record)", "Boris Konrad (GER)", "Ryan Judd (USA — 5,040 digits 30min 2023)", "Nelson Dellis (USA — 4x USAMC champion)", "Joshua Foer (USA — 'Moonwalking with Einstein' author)"],
  records: [
    { title: "Alex Mullen 3x consecutive WMC 2015-2017", holder: "Alex Mullen (USA)", value: "3-time consecutive World Memory Champion (2015, 2016, 2017); considered greatest of era", year: 2017 },
    { title: "Simon Reinhard deck 20.44s", holder: "Simon Reinhard (GER)", value: "Fastest to memorize deck of shuffled cards: 20.44 seconds (WMC 2015)", year: 2015 },
    { title: "Ryan Judd 5,040 digits 30 min", holder: "Ryan Judd (USA)", value: "World record for most binary/decimal digits memorized in 30 minutes: 5,040 (2023)", year: 2023 },
    { title: "First WMC London 1991", holder: "Tony Buzan + Ray Keene", value: "First World Memory Championship organized 1991 in London by Tony Buzan (mind-mapping inventor) + Ray Keene (chess GM)", year: 1991 },
  ],
  variants: ["classical-wmc-iam-10-discipline", "memory-league-fast-5-discipline-head-to-head", "usa-memory-championship-national-usa", "extreme-memory-tournament-technical"],
  relatedSports: ["chess", "go-igo-baduk", "mathematical-olympiad", "mental-calculation-world-cup"],
  skills: ["Memory Palace construction + navigation", "PAO (Person-Action-Object) system", "Major System (number-consonant conversion)", "concentration under time pressure", "mental infrastructure (memory palaces stored long-term)"],
  strategies: [
    { title: "Memory Palace = spatial storage backbone", body: "Method of Loci — associate items with familiar physical locations for rapid recall." },
    { title: "PAO system for cards + numbers", body: "Assign Person + Action + Object to each card/2-digit number for 3× density compression." },
  ],
  wikipediaTitle: "Memory sport",
  sources: [{ label: "Wikipedia — Memory sport", url: "https://en.wikipedia.org/wiki/Memory_sport", publisher: "Wikipedia" }, { label: "IAM — International Association of Memory", url: "https://www.iam-memory.org", publisher: "IAM" }, { label: "Memory League", url: "https://memoryleague.com", publisher: "Memory League" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default memoryLeague;
