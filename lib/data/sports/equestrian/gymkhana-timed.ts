import type { Sport } from "@/lib/types";

export const gymkhanaTimed: Sport = {
  id: "gymkhana-timed",
  slug: "gymkhana-timed",
  name: "Equestrian Gymkhana (Timed Events)",
  officialName: "NBHA / NPBA Barrel Racing + Timed Speed Events",
  aliases: ["Gymkhana", "Timed Speed Events", "Barrel Racing Championship", "Ranch Rodeo"],
  shortDescription:
    "Timed western-style equestrian events (barrel racing, pole bending, keyhole race, flag race) contested at gymkhana meets + NBHA (National Barrel Horse Association) championships; fastest time wins.",
  longDescription:
    "Equestrian Gymkhana (timed events) is a family of Western-style timed horse-and-rider speed events popular in USA, Canada, Australia, UK, and worldwide. Named 'gymkhana' from Anglo-Indian meaning 'sporting field', modern gymkhana events include: (1) Barrel Racing — cloverleaf pattern around 3 barrels, standard NBHA distances (20 yd between barrels 1+2, 35 yd to barrel 3); top competitors run under 14 seconds. (2) Pole Bending — weave through 6 poles + return. (3) Keyhole Race — enter/exit a small keyhole-shaped area. (4) Flag Race — grab + place a flag. (5) Stake Race — figure-8 around 2 stakes. Governed for barrel racing by NBHA (National Barrel Horse Association, USA — founded 1992; largest barrel racing organization globally with 25,000+ members). Also WPRA (Women's Professional Rodeo Association — barrel racing exclusive for women pros in PRCA rodeos), NHSRA (National High School Rodeo Association). Signature events: NBHA World Championships (Perry, GA), WPRA National Finals Barrel Race, NFR (National Finals Rodeo) Barrel Racing Championships. Notable athletes: Brittany Pozzi Tonozzi (multi-time WPRA World Champion), Lisa Lockhart, Hailey Kinsel (2018 NFR Champion), Sherry Cervi (WPRA legend, 4x WC), Carlee Pierce.",
  category: "equestrian-sports",
  subCategory: "Western timed speed events",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Western tradition); modern NBHA 1992",
  estimatedOrigin: "Western frontier traditions late 1800s; modern gymkhana organized 1930s+; NBHA founded 1992",
  players: { min: 1, max: 1, note: "Individual timed events; horse + rider pair." },
  equipment: [{ name: "Trained gymkhana horse (Quarter Horse most common)", description: "Athletic horse breed for speed + agility; often American Quarter Horse." }, { name: "Western saddle + bridle", description: "Standard western tack; specialized barrel-racing saddles common." }, { name: "Barrels / poles / flags (event-specific)", description: "55-gallon barrels for barrel racing; poles for pole bending; flags for flag race." }, { name: "Timing beam / electronic timer", description: "Laser beam start/finish for precise timing to 0.001s." }],
  duration: { approximateMinutes: 1, structure: "Single run per rider per event; ~14-30 seconds per run typical." },
  objective: "Complete event pattern in fastest time.",
  matchStructure: "Individual timed runs; ranking by fastest time; multiple runs at some events for average.",
  basicRules: [
    { title: "Fastest time wins", body: "Ranking by fastest single run (or average of multiple runs)." },
    { title: "Knockdowns = time penalty", body: "Tipping/knocking barrel or pole = +5 second penalty (or DQ per event rules)." },
    { title: "Broken pattern = no time", body: "Failing to complete correct pattern = disqualification (no time recorded)." },
  ],
  scoring: { summary: "Time-based (0.001s precision); lowest time wins.", winCondition: "Fastest time to complete event pattern." },
  positions: [{ name: "Rider", role: "Sole rider.", count: 1 }, { name: "Horse", role: "Trained gymkhana horse.", count: 1 }],
  officiating: { officials: ["Arena Judge", "Timekeeper (electronic)", "Announcer"], summary: "Judge + electronic timing." },
  governingBodies: [{ name: "NBHA (National Barrel Horse Association)", founded: 1992, headquarters: "Augusta, Georgia, USA" }, { name: "WPRA (Women's Professional Rodeo Association)", founded: 1948, headquarters: "Colorado Springs, USA" }, { name: "PRCA (Professional Rodeo Cowboys Association)", founded: 1936, headquarters: "Colorado Springs, USA" }],
  majorCompetitions: [{ name: "NBHA World Championships", frequency: "annual", founded: 1992, region: "Perry, Georgia, USA" }, { name: "NFR (National Finals Rodeo) Barrel Racing", frequency: "annual", founded: 1959, region: "Las Vegas, Nevada, USA" }, { name: "WPRA National Finals Barrel Race", frequency: "annual", founded: 1978, region: "Las Vegas / Waco (rotating)" }],
  countriesPlayed: ["USA", "CAN", "AUS", "MEX", "BRA", "ARG", "GBR"],
  famousAthletes: ["Brittany Pozzi Tonozzi (multi-time WPRA World Champion)", "Lisa Lockhart", "Hailey Kinsel (2018 NFR Champion)", "Sherry Cervi (4x WPRA WC)", "Carlee Pierce", "Charmayne James (11x WPRA WC record)"],
  records: [
    { title: "Charmayne James 11x WPRA World Champion", holder: "Charmayne James (USA)", value: "11x WPRA Barrel Racing World Champion (1984-1993, 2002) — most WPRA titles all-time", year: 2002 },
    { title: "NBHA founded 1992", holder: "National Barrel Horse Association", value: "NBHA founded 1992 in Augusta, GA; now 25,000+ members globally", year: 1992 },
  ],
  variants: ["barrel-racing", "pole-bending", "keyhole-race", "flag-race", "stake-race"],
  relatedSports: ["rodeo", "cutting-horse", "reining", "ranch-riding"],
  skills: ["horse control at speed", "cornering technique", "pattern accuracy", "start-line explosiveness"],
  wikipediaTitle: "Barrel racing",
  sources: [{ label: "Wikipedia — Barrel racing", url: "https://en.wikipedia.org/wiki/Barrel_racing", publisher: "Wikipedia" }, { label: "NBHA official", url: "https://www.nbha.com", publisher: "NBHA" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default gymkhanaTimed;
