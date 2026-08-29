import type { Sport } from "@/lib/types";

export const logLiftWsm: Sport = {
  id: "log-lift-wsm",
  slug: "log-lift-wsm",
  name: "Log Lift",
  officialName: "Log Lift (Log Press)",
  aliases: ["Log Press", "Log Clean & Press", "Timber Press"],
  shortDescription:
    "Strongman overhead pressing event using a large cylindrical steel log (~14+ inch diameter, 100-230+ kg); tests clean + overhead lockout power with neutral grip and thick handle.",
  longDescription:
    "Log Lift (also called Log Press or Log Clean & Press) is a hallmark strongman event testing overhead pressing strength using a large hollow cylindrical steel log with neutral (parallel) hand grips. The log diameter (~12-14 inches / 30-36 cm) forces a thick front-loaded rack position, making it markedly harder than a barbell press. Formats: (a) Max Log for weight (one-rep max, ascending); (b) Log for reps (fixed weight, max reps in ~60-75 seconds). Technique: clean (ground to shoulder), jerk-press or push-press to full lockout overhead with straight arms + locked knees. Modern world records exceed 220 kg (500+ lb) max, and 200 kg+ multi-rep events. Log design standards vary (Rogue Fitness, Slater Log). Featured at World's Strongest Man since ~1990s; Arnold Strongman Classic Log Lift for Max (single rep max) is signature event. Zydrunas Savickas + Zydrunas dominated 2000s-2010s; Cheick 'Iron Biby' Sanou set 229 kg WR (2021); Mitchell Hooper + Tom Stoltman currently lead.",
  category: "strength-sports",
  subCategory: "strongman overhead press",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Slater Log 1980s); developed as competition event 1990s",
  estimatedOrigin: "1980s-90s modern strongman era; regular WSM event from 1990s",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Competition log", description: "Cylindrical steel log ~30-36 cm diameter with neutral grip handles." }, { name: "Chalk", description: "For grip." }],
  duration: { approximateMinutes: 1, structure: "Single attempt (max) or 60-75s AMRAP (reps)." },
  objective: "Press heaviest log overhead (max) OR complete most reps at fixed weight.",
  matchStructure: "Individual event; either single-attempt ascending max, or fixed-weight AMRAP.",
  basicRules: [
    { title: "Full lockout required", body: "Arms straight, knees locked, judge's signal to lower." },
    { title: "Clean-first per rep (reps event)", body: "Log must return to ground for each rep." },
    { title: "Belts + suits + straps permitted", body: "Standard strongman gear allowed." },
  ],
  scoring: { summary: "Max lift or rep count.", winCondition: "Heaviest successful lift or most reps." },
  positions: [{ name: "Strongman athlete", role: "Sole competitor.", count: 1 }],
  governingBodies: [{ name: "World's Strongest Man", founded: 1977, headquarters: "USA/UK" }, { name: "Arnold Strongman Classic", founded: 2002, headquarters: "USA" }],
  majorCompetitions: [{ name: "Arnold Strongman Classic — Max Log", frequency: "annual", founded: 2002, region: "Columbus, Ohio" }, { name: "World's Strongest Man Log Lift", frequency: "annual", founded: 1977, region: "worldwide" }],
  famousAthletes: ["Žydrūnas Savickas", "Brian Shaw", "Cheick 'Iron Biby' Sanou", "Mitchell Hooper", "Tom Stoltman", "Eddie Hall"],
  records: [
    { title: "Cheick Sanou 229 kg log WR", holder: "Cheick 'Iron Biby' Sanou (BUR)", value: "229 kg (505 lb) — Giants Live World's Strongest Man Log Press WR (Aug 2021)", year: 2021 },
    { title: "Žydrūnas Savickas — most WSM log wins", holder: "Žydrūnas Savickas (LTU)", value: "Multiple WSM Log Lift event victories; 4x WSM overall champion", year: 2014 },
  ],
  relatedSports: ["atlas-stones-wsm", "farmers-walk-strongman", "olympic-lifting", "push-press"],
  skills: ["overhead pressing", "clean technique", "core bracing", "thick-grip strength"],
  wikipediaTitle: "Log lift",
  sources: [{ label: "Wikipedia — Log lift", url: "https://en.wikipedia.org/wiki/Log_lift", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default logLiftWsm;
