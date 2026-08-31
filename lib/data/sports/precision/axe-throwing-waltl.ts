import type { Sport } from "@/lib/types";

export const axeThrowingWaltl: Sport = {
  id: "axe-throwing-waltl",
  slug: "axe-throwing-waltl",
  name: "Axe Throwing (WATL + IATF)",
  officialName: "World Axe Throwing League (WATL) + International Axe Throwing Federation (IATF)",
  aliases: ["Urban Axe Throwing", "Hatchet Throwing", "Lumberjack Sport"],
  shortDescription:
    "Explosive growth precision sport 2010s-2020s — throw hatchet at wooden target from 12-15 feet aiming for bullseye + kill-shot dots; WATL founded 2017 Georgia USA; IATF founded 2016 Canada; 500+ commercial venues across USA + Canada + UK; ESPN + Discovery TV coverage; unifies traditional lumberjack sport with pub culture.",
  longDescription:
    "Axe Throwing is a precision throwing sport where competitors throw a hatchet (small axe) at a wooden target from ~12-15 feet, scoring by target zone hit — bullseye 6 points, next ring 4 points, next 3 points, next 2 points, outer edge 1 point, plus two special 'kill shot' or 'clutch' dots worth 7 or 8 points located outside the main target. Modern urban axe throwing exploded 2010s-2020s from traditional lumberjack festival competition into a mainstream urban leisure + sport activity — thousands of commercial 'axe throwing bars' opened globally (BATL Toronto pioneered 2011; Bad Axe Throwing Toronto; Kick Axe Throwing NYC; Whistle Punks London). Two competing global governing bodies: (1) International Axe Throwing Federation (IATF) — founded 2016 in Toronto, Canada by BATL (Backyard Axe Throwing League) as spin-off; original + larger league; standard 12-foot throw distance + kill shots. (2) World Axe Throwing League (WATL) — founded 2017 in Marietta, Georgia, USA; competing federation; standard 15-foot distance + slightly different scoring; heavier partnership with Bud Light + ESPN + Discovery TV rights. Major competitions: (a) WATL World Championship — annual, Marietta GA; ~$25,000+ prize; broadcast on ESPN + Discovery; (b) IATF World Championship — annual (usually Toronto); (c) WATL Big Axe League — larger 3-pound axes at longer 21-foot distance. Match format (WATL 1v1): each thrower throws 5 axes per round × 3 rounds = 15 throws total; final round throw may be at kill shot for bonus. Growth statistics: over 500 commercial axe throwing venues USA + Canada by 2024; ~$500 million industry; Groupon top-searched activity multiple years. Notable pros: Matt Wilson (WATL World Champion), Blaine Sinclair (IATF star), Kaylah Hall (women's champion), Krystian Rosandic (Canadian legend). TV: ESPN Ocho aired WATL World Championships repeatedly; Discovery Channel + The CW picked up rights.",
  category: "precision-sports",
  subCategory: "hatchet throwing precision sport with target scoring",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (BATL Backyard Axe Throwing League Toronto 2011 pioneered modern urban form) + USA (WATL Marietta Georgia 2017)",
  estimatedOrigin: "Traditional lumberjack sport centuries; modern urban form pioneered by BATL Toronto 2006-2011; IATF founded 2016 Toronto; WATL founded 2017 Georgia",
  players: { min: 1, max: 4, note: "1v1 individual; team formats 2v2 + 4-person teams; tournament brackets." },
  equipment: [{ name: "Hatchet (small throwing axe)", description: "Standard hatchet 1.25-1.75 lbs total weight, ~14-17 inches long; WATL standard weight range specified per league." }, { name: "Wooden target (bullseye + kill shots)", description: "Wooden target ~4 ft square with painted concentric rings (6-4-3-2-1 points) + 2 small kill-shot dots outside main target (7 or 8 pts)." }, { name: "Throwing lane (~10-15 ft)", description: "Marked throwing distance from target — IATF standard 12 ft; WATL standard 15 ft; safety barrier walls surround." }, { name: "Chain link or wooden safety enclosure", description: "Commercial venues use chain link cages + wooden walls surrounding throwing lanes for safety." }],
  duration: { approximateMinutes: 20, structure: "Match: 3 rounds × 5 throws = 15 throws per player; ~15-20 minutes per match; tournament day 4-8 hours." },
  objective: "Score higher point total than opponent across regulation throws.",
  matchStructure: "1v1 match: 3 rounds × 5 throws each; highest 3-round total wins; tiebreaker single throw at kill shot.",
  basicRules: [
    { title: "Standard scoring: 6-4-3-2-1 rings + 7 or 8 kill shot", body: "Bullseye 6 pts; next ring 4 pts; next 3 pts; next 2 pts; outer 1 pt; kill shot bonus 7 or 8 pts (must be called before throw)." },
    { title: "Kill shot only counts on 5th throw of round (WATL)", body: "In WATL rules, the 5th throw of each round may be called at kill shot for bonus 7 pts; must announce before throwing." },
    { title: "Axe must stick in target to score", body: "Axe must remain lodged in target — if axe falls out or fails to stick, score = 0 for that throw." },
    { title: "Split scoring: line touches = higher score (WATL) or lower (IATF)", body: "If axe blade touches line between two rings, WATL scores higher zone; IATF scores lower zone (key rule difference)." },
    { title: "Throwing form: 1-hand overhead or 2-hand over-shoulder", body: "Both single-hand overhead + two-hand over-shoulder throw styles legal; competitors choose based on preference." },
  ],
  scoring: { summary: "Concentric ring scoring 6-4-3-2-1 + kill shot bonus 7 or 8 pts; final round total across 15 throws determines winner.", winCondition: "Higher total points across 15 regulation throws; single kill-shot throw tiebreaker if tied." },
  positions: [{ name: "Axe thrower (Chopper)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Match Marshal", "Score Keeper", "Range Safety Officer"], summary: "WATL + IATF certified officials at tournaments; venue staff at commercial events." },
  governingBodies: [{ name: "World Axe Throwing League (WATL)", founded: 2017, headquarters: "Marietta, Georgia, USA" }, { name: "International Axe Throwing Federation (IATF)", founded: 2016, headquarters: "Toronto, Ontario, Canada" }, { name: "National Axe Throwing Federation (NATF, older)", founded: 2010, headquarters: "Toronto, Canada" }],
  majorCompetitions: [{ name: "WATL World Championship", frequency: "annual (December)", founded: 2017, region: "Marietta, Georgia, USA — ESPN + Discovery broadcast" }, { name: "IATF World Championship", frequency: "annual", founded: 2016, region: "Toronto, Canada + rotating" }, { name: "WATL Big Axe League", frequency: "annual", founded: 2019, region: "USA — larger 3lb axes at 21ft" }, { name: "Lumberjack World Championships (traditional axe throwing)", frequency: "annual", founded: 1960, region: "Hayward, Wisconsin, USA" }],
  countriesPlayed: ["USA (500+ venues)", "CAN (origin of modern form)", "GBR (Whistle Punks)", "AUS", "DEU", "NLD", "MEX", "worldwide urban entertainment"],
  famousAthletes: ["Matt Wilson (WATL World Champion 2017+)", "Blaine Sinclair (IATF star)", "Kaylah Hall (WATL Women's Champion)", "Krystian Rosandic (Canadian legend)", "Sam Beach (WATL Big Axe Champion)"],
  records: [
    { title: "500+ commercial venues USA + Canada by 2024", holder: "Global axe throwing industry", value: "Over 500 commercial axe throwing venues opened across USA + Canada by 2024 — one of fastest-growing entertainment industries of 2020s", year: 2024 },
    { title: "ESPN + Discovery Channel TV coverage", holder: "World Axe Throwing League", value: "WATL World Championship broadcast on ESPN Ocho + Discovery Channel + The CW — mainstream TV distribution", year: 2020 },
    { title: "Perfect 81-point round (all bullseyes + kill shot)", holder: "Various WATL competitors", value: "Perfect 81-point round (all bullseyes + kill shot = 5×6 + 5×6 + 4×6+7 = 81) achieved by multiple WATL competitors — extreme rarity", year: 2023 },
  ],
  variants: ["watl-standard-15ft-hatchet", "iatf-standard-12ft-hatchet", "watl-big-axe-21ft-3lb-axe", "traditional-lumberjack-underhand-axe-throw", "duals-2v2-team-format"],
  relatedSports: ["knife-throwing-competitive", "darts", "archery-target", "lumberjack-sports-timbersports"],
  skills: ["consistent throw arm mechanics", "distance calibration + rotation control", "kill-shot precision", "pressure management (final throw)"],
  wikipediaTitle: "Axe throwing",
  sources: [{ label: "Wikipedia — Axe throwing", url: "https://en.wikipedia.org/wiki/Axe_throwing", publisher: "Wikipedia" }, { label: "WATL World Axe Throwing League", url: "https://worldaxethrowingleague.com", publisher: "WATL" }, { label: "IATF International Axe Throwing Federation", url: "https://iatf-info.com", publisher: "IATF" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default axeThrowingWaltl;
