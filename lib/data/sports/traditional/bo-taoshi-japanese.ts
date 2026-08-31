import type { Sport } from "@/lib/types";

export const boTaoshiJapanese: Sport = {
  id: "bo-taoshi-japanese",
  slug: "bo-taoshi-japanese",
  name: "Bō-Taoshi (Pole-Toppling)",
  officialName: "Bō-Taoshi — Japan National Defense Academy",
  aliases: ["棒倒し", "Pole Pulling Down", "Bo-Taoshi"],
  shortDescription:
    "Chaotic Japanese team sport — 150 vs 150 — one team defends a 3-4m wooden pole while other team attacks to tip it below 30° angle within 2 minutes; annual signature event at National Defense Academy of Japan (NDA); one of world's most physically intense team sports.",
  longDescription:
    "Bō-Taoshi (棒倒し, literally 'pole-toppling') is a Japanese team sport of extraordinary chaos + physicality, most famously performed as the signature annual event at the National Defense Academy of Japan (NDA, Yokosuka). Two teams of 75-150 players each — one attacking, one defending — engage in a violent 2-minute battle over a 3-4 meter tall wooden pole planted vertically in the ground. Defenders form defensive formations around the pole: (a) 'Pole Support' cluster clinging to the pole itself + pushing back attackers; (b) 'Human Barrier' layer of interlocked defenders forming a wall + human platform ('scrum'); (c) 'Interference' outer ring blocking attackers from reaching the pole; (d) 'Ninja' — one designated defender standing on top of the pole using body weight + kicks to fend off climbers. Attackers charge in coordinated waves attempting to: (1) topple defensive formations; (2) climb on teammates' backs to reach pole top; (3) grab + pull pole down. Attackers win if they tip the pole below a 30-degree angle from vertical within 2 minutes. Extraordinarily physical — players regularly suffer bruises, sprains, dislocations, and occasional broken bones; requires cadets to abandon self-preservation instinct in favor of team objective. Annual NDA Bō-Taoshi held every November at Kaikōsai (school festival); featured in Japanese TV documentaries + viral international videos. Also played at other Japanese universities + military academies (Air Self-Defense Force Academy, Maritime Self-Defense Force Academy). Traces to Edo-period samurai training drills; formalized in modern form early 1900s at Imperial Japanese Army Academy. Not widely played outside Japan; occasional attempts at foreign universities as novelty event. Symbolic of Japanese team-first + endurance-training culture.",
  category: "traditional-cultural-sports",
  subCategory: "Japanese extreme team combat sport at military academies",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "early-modern", popularity: "niche",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (National Defense Academy — Yokosuka; military academy tradition)",
  estimatedOrigin: "Edo-period samurai training origins; formalized early 1900s at Imperial Japanese Army Academy; NDA annual event since 1961",
  players: { min: 150, max: 300, note: "Typically 150 per team = 300 total; scaled to school size." },
  equipment: [{ name: "Wooden pole (3-4m tall)", description: "Vertical wooden pole planted in ground; ~3.5-4m tall; ~15cm diameter." }, { name: "Marked circular field (30-40m diameter)", description: "Round playing area with pole planted at center." }, { name: "Team uniforms (traditional matching)", description: "NDA cadets wear uniform tops distinguishing attacking vs defending teams (typically white vs colored)." }, { name: "Helmets + gloves (optional per school)", description: "Some schools now use padded helmets + gloves to reduce injuries." }],
  duration: { approximateMinutes: 2, structure: "Single 2-minute round per matchup; typically 4 matches (2 attacking + 2 defending per team) with class-wide standings." },
  objective: "Attacking team must tip defending pole below 30° angle within 2 minutes; defenders keep pole upright.",
  matchStructure: "Two teams alternate attack/defense across 4 matches; time-limited chaos combat around fixed pole.",
  basicRules: [
    { title: "Attackers win if pole tips below 30° in 2 min", body: "Angle measured from vertical; defenders win if pole remains above 30° when time expires." },
    { title: "No striking with fists (grabbing + pushing only)", body: "No punches or kicks to face; grabbing, pushing, tackling, climbing on teammates all allowed." },
    { title: "Ninja defender permitted on top of pole", body: "One designated defender may stand on pole top using body weight + legs to fend off climbers." },
    { title: "Team formations (Support, Barrier, Interference, Ninja)", body: "Traditional defensive roles: pole-huggers, human-wall barrier, outer interference, top ninja." },
  ],
  scoring: { summary: "Binary — pole toppled below 30° in time = attack win; else defense win.", winCondition: "Pole angle at time-out." },
  positions: [{ name: "Pole Support (defender)", role: "Cluster clinging directly to pole to keep it upright.", count: 20 }, { name: "Human Barrier (defender)", role: "Interlocked defenders forming wall + human platform around pole.", count: 40 }, { name: "Interference (defender)", role: "Outer ring blocking attackers from reaching pole.", count: 89 }, { name: "Ninja (defender)", role: "Single defender standing atop pole using body weight + kicks to fend off climbers.", count: 1 }, { name: "Attacker", role: "Charging + climbing to reach pole top + pull it over.", count: 150 }],
  officiating: { officials: ["Referee (Angle Judge)", "Timekeeper", "Safety Marshals"], summary: "School officials monitor safety + measure pole angle at end." },
  governingBodies: [{ name: "National Defense Academy of Japan (NDA)", founded: 1952, headquarters: "Yokosuka, Kanagawa, Japan" }],
  majorCompetitions: [{ name: "NDA Kaikōsai Bō-Taoshi (Annual)", frequency: "annual (November)", founded: 1961, region: "Yokosuka, Japan — National Defense Academy" }],
  countriesPlayed: ["JPN (predominantly NDA + military academies)"],
  famousAthletes: ["N/A — team event by student class year"],
  records: [
    { title: "Annual NDA event since 1961", holder: "National Defense Academy of Japan", value: "Bō-Taoshi held annually at NDA Kaikōsai school festival since 1961 — continuously for 60+ years", year: 1961 },
    { title: "150 vs 150 largest team format", holder: "National Defense Academy", value: "NDA Bō-Taoshi format features 150 vs 150 players — one of world's largest simultaneous-participation team sports", year: 2024 },
  ],
  variants: ["nda-bo-taoshi-150-vs-150", "university-bo-taoshi-smaller-format", "field-day-bo-taoshi-schools"],
  relatedSports: ["kabaddi", "rugby-scrum", "capture-the-flag"],
  skills: ["scrum formation coordination", "climbing on teammates (human ladder)", "high pain tolerance", "team-first sacrificial mindset"],
  wikipediaTitle: "Bō-taoshi",
  sources: [{ label: "Wikipedia — Bō-taoshi", url: "https://en.wikipedia.org/wiki/B%C5%8D-taoshi", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default boTaoshiJapanese;
