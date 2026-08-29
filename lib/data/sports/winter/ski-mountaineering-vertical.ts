import type { Sport } from "@/lib/types";

export const skiMountaineeringVertical: Sport = {
  id: "ski-mountaineering-vertical",
  slug: "ski-mountaineering-vertical",
  name: "Ski Mountaineering — Vertical Race",
  officialName: "ISMF Ski Mountaineering Vertical Race",
  aliases: ["Skimo Vertical", "Uphill Race", "Vertical Kilometer (VK) Skimo"],
  shortDescription:
    "Sprint-format ski mountaineering discipline — uphill-only race ascending ~500-1,000 m vertical over ~3-5 km trail with light race skis + skins; new Olympic sport confirmed for Milan-Cortina 2026 Winter Games (Sprint + Individual + Mixed Relay).",
  longDescription:
    "Ski Mountaineering Vertical Race is one of the sprint-format disciplines of ski mountaineering (skimo), governed by the International Ski Mountaineering Federation (ISMF, founded 2008; formerly ISMC 1999). Racers wearing ultra-light race skis (typically 65-85 mm underfoot, ~1-1.6 kg/pair) attach climbing skins to the bases and race uphill only, ascending ~500-1,000 m vertical over ~3-5 km trail. No descent segment (distinguishes from Individual + Sprint disciplines). Signature race: Vertical Kilometer (VK) — exactly 1,000 m vertical gain — most famous of which is Kilómetro Vertical Fully (Switzerland, since 1994). Ski Mountaineering was added to Olympic Winter Games program for Milan-Cortina 2026 across 3 disciplines: Sprint (short high-intensity), Individual (long-course with uphill + downhill + technical sections), Mixed Relay (team). Vertical Race itself is not an Olympic event but is a key ISMF World Cup + World Championship discipline (biennial WC). Notable athletes: Kilian Jornet (ESP — greatest skimo athlete + trail runner all-time; multiple ISMF gold + numerous VK records), Rémi Bonnet (SUI — currently dominant), Robert Antonioli (ITA), Michele Boscacci (ITA), Axelle Gachet-Mollaret (FRA — women's dominant), Emily Harrop (FRA).",
  category: "winter-sports",
  subCategory: "ski mountaineering — uphill-only race",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy + Switzerland + France (Alpine tradition; ISMF founded 2008)",
  estimatedOrigin: "Ski mountaineering competitive tradition Alpine 1900s; ISMF founded 2008; Olympic debut Milan-Cortina 2026",
  players: { min: 1, max: 1, note: "Individual race; mixed relay + team events at ISMF World Cup." },
  equipment: [{ name: "Race skis (ultra-light, 65-85 mm underfoot)", description: "Typically 1-1.6 kg/pair; carbon or ultra-light wood core; e.g., Movement Session Race, Ski Trab Piuma, Dynafit Blacklight." }, { name: "Climbing skins (mohair or synthetic)", description: "Attached to ski bases for uphill grip; typically 60 mm width for race skis." }, { name: "Race boots (~500-800 g each)", description: "Ultra-light carbon fiber race boots (Scarpa Alien, La Sportiva Skorpius); AT+walk mode + tour lever." }, { name: "Race bindings (tech / pin bindings)", description: "Light pin bindings (~50-150 g/pair); e.g., Dynafit Superlite." }, { name: "Race suit + safety kit", description: "Ultra-light lycra race suit; whistle + emergency blanket + basic first aid (per ISMF requirements)." }],
  duration: { approximateMinutes: 40, structure: "Individual VK ~30-50 min depending on gradient; shorter Vertical Sprint races 3-8 min." },
  objective: "Fastest ascent time up designated uphill race course.",
  matchStructure: "Mass start (typical) or wave-start based on qualifying; single ascent, no descent.",
  basicRules: [
    { title: "Uphill-only race format", body: "No downhill segment; only ascent skinning up." },
    { title: "Skins on for entire race", body: "Skins must be attached to ski bases for entire race (no boot-packing for extended sections)." },
    { title: "Mandatory safety equipment", body: "Whistle, emergency blanket, basic first aid must be carried per ISMF rules." },
    { title: "Course marking + gates strict", body: "Must pass all course gates in order; missed gate = DQ." },
  ],
  scoring: { summary: "Fastest ascent time.", winCondition: "First across summit finish line." },
  positions: [{ name: "Ski Mountaineer (Skimo racer)", role: "Sole competitor.", count: 1 }, { name: "Race Coach + Support Team", role: "Ground support (waxing + course prep).", count: 2 }],
  officiating: { officials: ["Race Director", "Course Marshals (checkpoint)", "Timekeeper", "Chief Referee"], summary: "ISMF-sanctioned officials panel." },
  governingBodies: [{ name: "ISMF (International Ski Mountaineering Federation)", founded: 2008, headquarters: "Milan, Italy" }, { name: "IOC (International Olympic Committee — added 2020)", founded: 1894, headquarters: "Lausanne, Switzerland" }],
  majorCompetitions: [{ name: "ISMF Ski Mountaineering World Championships", frequency: "biennial", founded: 2002, region: "rotating Alpine venues" }, { name: "ISMF World Cup", frequency: "annual (Dec-Mar)", founded: 2000, region: "Alpine venues" }, { name: "Kilómetro Vertical Fully (VK)", frequency: "annual", founded: 1994, region: "Fully, Switzerland" }, { name: "Milan-Cortina 2026 Winter Olympics", frequency: "quadrennial", founded: 2026, region: "Cortina d'Ampezzo, Italy" }],
  countriesPlayed: ["ITA", "FRA", "SUI", "ESP", "AUT", "GER", "NOR", "SWE", "USA (limited)"],
  famousAthletes: ["Kilian Jornet (ESP — GOAT status)", "Rémi Bonnet (SUI — currently dominant)", "Robert Antonioli (ITA)", "Michele Boscacci (ITA)", "Axelle Gachet-Mollaret (FRA — women's dominant)", "Emily Harrop (FRA)", "Alba de Silvestro (ITA)"],
  records: [
    { title: "ISMF founded 2008", holder: "ISMF", value: "International Ski Mountaineering Federation founded 2008 (from ISMC 1999); headquartered Milan", year: 2008 },
    { title: "Olympic debut Milan-Cortina 2026", holder: "IOC / ISMF", value: "Ski Mountaineering added to Milan-Cortina 2026 Winter Olympics — 3 events: Sprint + Individual + Mixed Relay", year: 2026 },
    { title: "Kilian Jornet ~29 min Vertical KM records", holder: "Kilian Jornet (ESP)", value: "Kilian Jornet holds numerous Vertical KM ski + trail-run records ~29 min for 1,000 m gain", year: 2018 },
  ],
  variants: ["vertical-race-uphill-only", "sprint-race-short-course", "individual-race-uphill-downhill-technical", "mixed-relay-team", "team-race"],
  relatedSports: ["ski-mountaineering-individual", "ski-mountaineering-sprint", "trail-running-vertical-kilometer", "alpine-touring"],
  skills: ["aerobic capacity", "skinning technique (uphill efficiency)", "kick-turn on switchbacks", "boot + binding transition speed", "altitude adaptation"],
  wikipediaTitle: "Ski mountaineering",
  sources: [{ label: "Wikipedia — Ski mountaineering", url: "https://en.wikipedia.org/wiki/Ski_mountaineering", publisher: "Wikipedia" }, { label: "ISMF official", url: "https://www.ismf-ski.org", publisher: "International Ski Mountaineering Federation" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default skiMountaineeringVertical;
