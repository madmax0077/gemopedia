import type { Sport } from "@/lib/types";

export const coasteeringUk: Sport = {
  id: "coasteering-uk",
  slug: "coasteering-uk",
  name: "Coasteering (UK Origin)",
  officialName: "British Canoeing Coasteering Standards / TYF Adventure",
  aliases: ["Coasteering", "Sea Cliff Traversing"],
  shortDescription:
    "UK-invented (1985+, Pembrokeshire Wales) adventure sport traversing rocky coastlines by climbing + jumping + swimming + wave riding — combines scrambling with cliff-jumping (5-15m into ocean) + swell riding; commercial guided activity since 1985 (TYF Adventure); growing niche global scene.",
  longDescription:
    "Coasteering is an adventure sport that involves traversing rocky sea-cliff coastlines through a combination of scrambling + climbing + swimming + jumping + wave-riding along tidal + wave-exposed shorelines. Invented + commercialized in the mid-1980s (particularly 1985+) at TYF Adventure in Pembrokeshire, Wales (UK) by outdoor educator Andy Middleton + team — considered the modern origin point of the sport. Signature elements: (1) Scrambling along coastal rocks + traversing narrow ledges; (2) Cliff jumps into deep water (5-15m typical guided; extreme jumps 20m+); (3) Swimming between headlands + through sea caves; (4) 'Riding the swell' — using ocean waves to lift + move across rock features; (5) Exploring sea caves + arches. Requires wetsuit (5mm neoprene), climbing helmet, buoyancy aid (PFD), rock shoes or old trainers, gloves. Extremely tide + swell dependent — timing critical. UK safety industry regulated by AALA (Adventure Activities Licensing Authority) + British Canoeing Coasteering Standards (issued 2005; updated 2018). Global expansion: hotspots include Pembrokeshire + Cornwall + Anglesey (UK), Algarve Portugal, Menorca Spain, Turks & Caicos, USA (Maine + Oregon coast), Australia, New Zealand, Croatia. Not standardly competitive — safety-critical + tide-dependent — but small event scene exists (Pembrokeshire Coasteering Championships, Menorca Coasteering Cup). Cultural + guide certification through NGB Coasteering Standard; commercial guides insured + certified in UK. Considered founding sport of the 'wet adventure' genre alongside canyoning + coasteering-adjacent kloofing (South Africa).",
  category: "adventure-extreme-sports",
  subCategory: "sea cliff traversing adventure sport",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "20th-century", popularity: "niche",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom / Wales (Pembrokeshire — TYF Adventure invented 1985)",
  estimatedOrigin: "Invented / commercialized 1985 by TYF Adventure (Andy Middleton), Pembrokeshire, Wales; NGB standards issued 2005",
  players: { min: 2, max: 12, note: "Minimum 2 for safety; typical guided group 4-8; commercial trips up to 12." },
  equipment: [{ name: "Wetsuit (5mm neoprene, hooded)", description: "Long-sleeve + long-leg wetsuit with hood; often over-jacket for warmth." }, { name: "Climbing / water-rescue helmet", description: "Certified helmet with drainage." }, { name: "Buoyancy aid / PFD (50N)", description: "Personal flotation device essential — often only means of staying afloat in swell." }, { name: "Old trainers or rock shoes", description: "Grip + protection for rock scrambling; specialized coasteering-specific shoes emerging." }, { name: "Gloves (neoprene)", description: "Warmth + rock-grip protection." }],
  duration: { approximateMinutes: 180, structure: "Typical commercial trip: 2-3 hours; endurance sessions up to 6+ hours; not typically all-day." },
  objective: "Traverse coastline section safely + enjoyably; not typically competitive.",
  matchStructure: "Guided or self-led traverses; some event/competition formats exist as time trials.",
  basicRules: [
    { title: "Tide + swell check mandatory", body: "Coasteering only during specific tidal windows + safe swell conditions." },
    { title: "Buddy system + minimum 2 people", body: "Never coasteer alone; group of 2+ for safety." },
    { title: "Cliff-jump depth check before every jump", body: "Water depth verified before every jump — 4m+ typical minimum for 15m jumps." },
    { title: "Marine conservation + wildlife awareness", body: "Disturb no wildlife; some areas restricted during seabird breeding." },
  ],
  scoring: { summary: "Not typically scored; some events use time-trial format with penalties.", winCondition: "Safe completion = success." },
  positions: [{ name: "Coasteerer (participant)", role: "Team member.", count: 6 }, { name: "Guide / instructor (commercial)", role: "Lead + safety supervisor.", count: 1 }, { name: "Sweep (last)", role: "Ensures no one left behind.", count: 1 }],
  officiating: { officials: ["No competitive officials — commercial guide + AALA/NGB certified oversight"], summary: "Not competitively officiated; commercial guides regulated." },
  governingBodies: [{ name: "British Canoeing (Coasteering standards)", founded: 1936, headquarters: "Nottingham, UK" }, { name: "AALA (Adventure Activities Licensing Authority — UK)", founded: 1996, headquarters: "Cardiff, UK" }, { name: "TYF Adventure (originator / de facto NGB)", founded: 1985, headquarters: "St Davids, Pembrokeshire, UK" }],
  majorCompetitions: [{ name: "Pembrokeshire Coasteering Championships", frequency: "annual", founded: 2005, region: "Pembrokeshire, Wales, UK" }, { name: "Menorca Coasteering Cup", frequency: "annual", founded: 2015, region: "Menorca, Spain" }],
  countriesPlayed: ["GBR (birthplace)", "PRT (Algarve)", "ESP (Menorca)", "TCA (Turks & Caicos)", "USA (Maine + Oregon)", "AUS", "NZL", "HRV"],
  famousAthletes: ["Andy Middleton (GBR — TYF Adventure founder, sport originator)", "Rob Nash (GBR — early commercial coasteering guide)"],
  records: [
    { title: "TYF Adventure invented 1985 Pembrokeshire", holder: "TYF Adventure / Andy Middleton", value: "Coasteering commercially invented + standardized by TYF Adventure in Pembrokeshire, Wales, 1985 — considered modern origin", year: 1985 },
    { title: "British Canoeing Coasteering Standard 2005", holder: "British Canoeing", value: "British Canoeing published first Coasteering NGB Standard 2005; industry standard for UK commercial coasteering", year: 2005 },
  ],
  variants: ["commercial-guided-coasteering", "expedition-multi-day-coasteering", "extreme-coasteering-high-jumps", "gentle-family-coasteering-3-5m-jumps"],
  relatedSports: ["canyoning-technical", "sea-swimming", "cliff-jumping", "climbing-scrambling"],
  skills: ["rock scrambling on wet + slippery surfaces", "cliff-jump technique + depth reading", "swimming in swell + surf", "tide + swell forecasting", "hypothermia + cold-water awareness"],
  wikipediaTitle: "Coasteering",
  sources: [{ label: "Wikipedia — Coasteering", url: "https://en.wikipedia.org/wiki/Coasteering", publisher: "Wikipedia" }, { label: "TYF Adventure — Coasteering", url: "https://www.tyf.com/coasteering", publisher: "TYF Adventure" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default coasteeringUk;
