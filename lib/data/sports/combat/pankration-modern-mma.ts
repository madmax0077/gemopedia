import type { Sport } from "@/lib/types";

export const pankrationModernMma: Sport = {
  id: "pankration-modern-mma",
  slug: "pankration-modern-mma",
  name: "Modern Pankration (Revived)",
  officialName: "World Pankration Athlima Federation (WPAF) / IFMMAA Pankration",
  aliases: ["Pankration Athlima", "Modern Pankration", "Πανκράτιον"],
  shortDescription:
    "Modern revival of ancient Greek Pankration (Olympic event 648 BCE-393 CE) — hybrid submission grappling + striking similar to MMA; revived 1969 in Greece; sanctioned by WPAF; regular World Championships since 2010.",
  longDescription:
    "Modern Pankration (Πανκράτιον, 'all powers') is the modern revival of the ancient Greek combat sport of Pankration — one of the original Olympic Games events (introduced 33rd Olympiad, 648 BCE), consisting of hybrid submission grappling + striking with almost no rules (only biting + eye-gouging forbidden). Ancient Pankration matches lasted until submission or death; discontinued at the Olympics with the ban on pagan festivals by Emperor Theodosius in 393 CE. Modern revival began in 1969 by Greek strongman Jim Arvanitis (USA-Greek) who reconstructed rules based on classical sources; formal sport competition organized by World Pankration Athlima Federation (WPAF, founded 1996 in Athens) + Federation of International Pankration Athletic Associations (FIPAA) + International Federation of Mixed Martial Arts Associations (IFMMAA). Modern rules feature 3 rounds × 3 min (amateur) or 3 × 5 min (pro), allowing: strikes (punches, kicks, knees, elbows — modern gloves), takedowns, ground grappling, submissions (chokes, joint locks), but forbidding: strikes to spine/back of head, eye-gouging, biting, fish-hooking, small-joint manipulation. Substantially similar to modern MMA but explicitly rooted in Hellenic tradition + rule-set. WPAF World Championships biennial since 2010; Pankration also featured at Mediterranean Games + IWGA World Combat Games (proposed). Strongholds: Greece (dominant), Cyprus, Ukraine, Russia, USA, Romania, Bulgaria, Israel, India (huge grassroots scene).",
  category: "combat-sports",
  subCategory: "revived ancient Greek MMA-hybrid",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "GR",
  regionOfOrigin: "Greece (ancient origins 648 BCE Olympia; revived 1969 by Jim Arvanitis)",
  estimatedOrigin: "Ancient Olympic event 648 BCE-393 CE; modern revival 1969 by Jim Arvanitis; WPAF founded 1996 Athens",
  players: { min: 1, max: 2 },
  equipment: [{ name: "MMA-style padded gloves (4-6 oz)", description: "Open-fingered MMA gloves." }, { name: "Mouthguard + groin protector + shin pads (amateur)", description: "Amateur safety gear; pro allows fewer protectors." }, { name: "Regulation mat area (8m × 8m)", description: "Padded competition mat." }, { name: "Traditional Pankration attire (optional demonstrations)", description: "Ancient loincloth-style attire for ceremonial demonstrations." }],
  duration: { approximateMinutes: 15, structure: "Amateur: 3 rounds × 3 min; Pro: 3 rounds × 5 min; 1 min rests." },
  objective: "Win by submission, KO/TKO, or judges' decision at end of rounds.",
  matchStructure: "Best-of-3 rounds; winner by finish or aggregate points.",
  basicRules: [
    { title: "Strikes + submissions + takedowns allowed", body: "Punches, kicks, knees, elbows, takedowns, ground grappling, chokes, joint locks all legal." },
    { title: "Forbidden: eye-gouge + bite + strikes to spine", body: "Small-joint manipulation, fish-hooking, spine/back-of-head strikes banned." },
    { title: "Referee stoppage for safety", body: "Referee may stop match at any time for safety." },
    { title: "Weight classes strict", body: "-60/-66/-72/-79/-87/-95/-95+ kg (men); women's + junior divisions." },
  ],
  scoring: { summary: "Judges score rounds on aggression + effective striking + grappling; win by submission or KO ends match early.", winCondition: "Submission, KO/TKO, or 2-of-3 round decision." },
  positions: [{ name: "Pankratiast (competitor)", role: "Sole competitor per bout.", count: 1 }, { name: "Coach + cornerman", role: "Between-rounds support.", count: 2 }],
  officiating: { officials: ["Referee (mat)", "3 Judges", "Timekeeper", "Chief Referee"], summary: "WPAF certified officials panel." },
  governingBodies: [{ name: "World Pankration Athlima Federation (WPAF)", founded: 1996, headquarters: "Athens, Greece" }, { name: "Federation of International Pankration Athletic Associations (FIPAA)", founded: 1985, headquarters: "worldwide" }, { name: "International Federation of Mixed Martial Arts Associations (IFMMAA)", founded: 2016, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "WPAF World Pankration Championships", frequency: "biennial", founded: 2010, region: "rotating global (Athens, Kyiv, Bucharest)" }, { name: "European Pankration Championship", frequency: "annual", founded: 2000, region: "Europe (rotating)" }],
  countriesPlayed: ["GRC (dominant)", "CYP", "UKR", "RUS", "USA", "ROU", "BGR", "ISR", "IND", "IRN"],
  famousAthletes: ["Jim Arvanitis (USA-GRC — revival founder 1969)", "Ancient legends: Sostratus of Sicyon, Polydamas of Skotoussa, Arrhichion of Phigalia (won posthumously)"],
  records: [
    { title: "Ancient Olympic event 648 BCE", holder: "ancient Olympia", value: "Pankration introduced to Olympic Games at 33rd Olympiad (648 BCE); continued through 393 CE (banned by Theodosius)", year: 648 },
    { title: "Modern revival 1969 by Jim Arvanitis", holder: "Jim Arvanitis (USA-GRC)", value: "Modern Pankration revived 1969 by Greek strongman Jim Arvanitis based on classical sources", year: 1969 },
    { title: "WPAF founded 1996 Athens", holder: "World Pankration Athlima Federation", value: "WPAF founded 1996 in Athens to standardize + govern modern Pankration globally", year: 1996 },
  ],
  variants: ["ancient-pankration-reconstructed", "modern-pankration-athlima-amateur", "modern-pankration-pro", "traditional-pankration-demonstration"],
  relatedSports: ["mma-mixed-martial-arts", "sambo", "wrestling-freestyle", "muay-thai", "brazilian-jiu-jitsu"],
  skills: ["MMA-hybrid combat", "submission grappling", "striking + kicking", "takedown defense", "clinch work"],
  wikipediaTitle: "Pankration",
  sources: [{ label: "Wikipedia — Pankration", url: "https://en.wikipedia.org/wiki/Pankration", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default pankrationModernMma;
