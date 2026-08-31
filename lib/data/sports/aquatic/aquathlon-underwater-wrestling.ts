import type { Sport } from "@/lib/types";

export const aquathlonUnderwaterWrestling: Sport = {
  id: "aquathlon-underwater-wrestling",
  slug: "aquathlon-underwater-wrestling",
  name: "Aquathlon (Underwater Wrestling)",
  officialName: "CMAS Underwater Wrestling (Aquathlon)",
  aliases: ["Underwater Wrestling", "Podvodnaya Bor'ba", "CMAS Aquathlon"],
  shortDescription:
    "Russian-invented (1980s) underwater grappling sport where 2 competitors wrestle in a 5×5m submerged ring aiming to remove opponent's ankle ribbon within 3 × 30s rounds; CMAS World Championship since 2007.",
  longDescription:
    "Aquathlon (Podvodnaya Bor'ba, 'underwater wrestling') is a competitive underwater grappling sport invented in the Soviet Union in the 1980s by Igor Ostrovsky (Moscow) as underwater self-defense training. Two competitors wearing mask + snorkel + fins wrestle inside a 5m × 5m ring set in a swimming pool at ~2.5-3.5m depth. Each competitor wears an ankle ribbon (~15cm long) which the opponent aims to grab + remove; winning that round. Fights consist of 3 rounds × 30 seconds underwater (total ~90s underwater grappling per bout), with 30s surface recovery between rounds. Techniques combine wrestling holds + Judo/Sambo throws (adapted for water resistance) with the ribbon-grab objective. Governed globally by CMAS (Confédération Mondiale des Activités Subaquatiques, founded 1959, HQ Rome). CMAS World Aquathlon Championships biennial since 2007. Weight classes: -60/-65/-70/-75/-85/+85 kg (men) + -50/-60/-70/+70 (women). Strongholds: Russia (dominant — birthplace + most world champions), Ukraine, Belarus, Kazakhstan, Egypt, Iran. Regarded as strategic + endurance sport — breath-hold + wrestling combined. Adaptive Aquathlon developed for para-athletes.",
  category: "aquatic-sports",
  subCategory: "underwater grappling / wrestling",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "RU",
  regionOfOrigin: "Soviet Union / Russia (Igor Ostrovsky, Moscow, 1980s)",
  estimatedOrigin: "Invented 1980s USSR; CMAS-sanctioned World Championships since 2007",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Mask + snorkel + fins", description: "Standard freediving/snorkeling gear." }, { name: "Ankle ribbon (~15cm)", description: "Target ribbon on each opponent; grabbing = win." }, { name: "5m × 5m underwater ring (marked bottom)", description: "Pool at 2.5-3.5m depth with marked ring boundary." }],
  duration: { approximateMinutes: 3, structure: "3 rounds × 30s underwater + 30s surface between; total ~3 min per bout." },
  objective: "Grab + remove opponent's ankle ribbon within round.",
  matchStructure: "Single-elimination bracket bouts within weight class; 2 of 3 rounds wins.",
  basicRules: [
    { title: "Ribbon removal wins round", body: "Grabbing + removing opponent's ankle ribbon = round win." },
    { title: "Surface = round loss", body: "Surfacing before round timer = automatic round loss." },
    { title: "Ring boundary enforced", body: "Leaving 5×5m ring = warning/round loss per repeat." },
    { title: "No striking / no chokes / no joint locks", body: "Wrestling holds + throws only — strikes/chokes/joint locks banned." },
  ],
  scoring: { summary: "Round-by-round: ribbon win OR judge decision if time expires.", winCondition: "Win 2 of 3 rounds." },
  positions: [{ name: "Aquathlete (Aquathlon wrestler)", role: "Sole competitor.", count: 1 }, { name: "Underwater referee", role: "Referee in-pool observing bout.", count: 1 }, { name: "Surface referee", role: "Timekeeper + backup referee.", count: 1 }],
  officiating: { officials: ["Head Referee", "Underwater Referee", "Timekeeper", "Chief Judge"], summary: "CMAS certified officials." },
  governingBodies: [{ name: "CMAS (Confédération Mondiale des Activités Subaquatiques)", founded: 1959, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "CMAS World Aquathlon Championships", frequency: "biennial", founded: 2007, region: "Russia + rotating (recent: Egypt, Belarus, Serbia)" }, { name: "CMAS European Aquathlon Championships", frequency: "biennial", founded: 2007, region: "Europe (rotating)" }],
  countriesPlayed: ["RUS (dominant)", "UKR", "BLR", "KAZ", "EGY", "IRN", "SRB", "CZE"],
  famousAthletes: ["Igor Ostrovsky (RUS — founder, 1980s Moscow)", "Russian national team (multi-time World Champions)"],
  records: [
    { title: "First CMAS World Championship 2007", holder: "CMAS", value: "First CMAS Aquathlon World Championship held 2007 in Moscow, Russia — birthplace of sport", year: 2007 },
    { title: "Founded 1980s by Igor Ostrovsky", holder: "Igor Ostrovsky (RUS)", value: "Sport invented mid-1980s by Igor Ostrovsky as USSR-military underwater self-defense training", year: 1985 },
  ],
  variants: ["classical-aquathlon-3-rounds", "beginner-single-round"],
  relatedSports: ["underwater-hockey", "underwater-rugby", "sambo", "freediving-no-limits"],
  skills: ["breath-hold under stress", "wrestling technique adapted for water resistance", "spatial orientation upside-down", "ribbon-grab timing"],
  wikipediaTitle: "Aquathlon (underwater wrestling)",
  sources: [{ label: "Wikipedia — Aquathlon (underwater wrestling)", url: "https://en.wikipedia.org/wiki/Aquathlon_(underwater_wrestling)", publisher: "Wikipedia" }, { label: "CMAS Aquathlon", url: "https://www.cmas.org/aquathlon", publisher: "CMAS" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default aquathlonUnderwaterWrestling;
