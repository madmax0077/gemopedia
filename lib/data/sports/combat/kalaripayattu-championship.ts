import type { Sport } from "@/lib/types";

export const kalaripayattuChampionship: Sport = {
  id: "kalaripayattu-championship",
  slug: "kalaripayattu-championship",
  name: "Kalaripayattu (Championship)",
  officialName: "International Kalaripayattu Federation (IKF) Championships",
  aliases: ["Kalari", "Kalaripayat", "Kerala Martial Art"],
  shortDescription:
    "Ancient Kerala (South India) martial art (~3rd century BCE); considered oldest surviving martial art in the world; features 4 stages — Meithari (body), Kolthari (wooden weapons), Angathari (metal weapons), Verumkai (bare-hand); IKF Championships since 1958.",
  longDescription:
    "Kalaripayattu is an ancient Indian martial art from Kerala (South India), often cited as the oldest surviving martial art in the world with roots dating to ~3rd century BCE (some scholars trace to Dhanurveda Vedic texts). Traditionally taught in a specialised training space (kalari, a pit-like arena 42×21 ft, oriented east-west), Kalaripayattu is a comprehensive martial system covering four stages of progressive mastery: (1) Meithari — foundational body exercises (uzhichil oil massage + flexibility + posture forms); (2) Kolthari — wooden weapons (kettukari long staff, cheruvadi short stick, otta curved club); (3) Angathari — metal weapons (sword-shield puttara, urumi flexible whip-sword, katara punch-dagger, kuruvadi mace); (4) Verumkai — bare-hand combat + marma vidya (vital pressure points, ~108 marmas). Three major regional styles: (a) Northern Style (Vadakkan) — flexible, high leaping; (b) Southern Style (Thekkan) — grounded, hand focus; (c) Central Style (Madhya) — synthesis. Modern governance: International Kalaripayattu Federation (IKF, founded 1958 by CVN Kalari founder Sri C.V. Narayanan Nair). Ayurveda-integrated healing traditions parallel the fighting arts. Recognized as intangible cultural heritage of Kerala. Considered ancestor to Chinese Kung Fu via Bodhidharma legend (5th century CE — Kerala prince taught Shaolin monks).",
  category: "combat-sports",
  subCategory: "ancient Kerala martial art (oldest surviving MA)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "Kerala, India (traditional kalari training pits statewide)",
  estimatedOrigin: "~3rd century BCE Dhanurveda origins; CVN Kalari revival 1930s; IKF 1958",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Kettukari (long staff, ~5-6 ft)", description: "Primary Kolthari weapon; typically teak or rosewood." }, { name: "Cheruvadi (short stick, 2-3 ft)", description: "Second-stage Kolthari weapon." }, { name: "Urumi (flexible whip-sword)", description: "Signature Angathari weapon; single or multi-blade flexible steel." }, { name: "Puttara (sword + shield)", description: "Standard combat pair." }, { name: "Kalari training pit (42×21 ft, oriented east-west)", description: "Traditional training arena." }],
  duration: { approximateMinutes: 5, structure: "Kata/Meithari demonstration ~3-5 min; sparring bouts 2-3 min rounds." },
  objective: "Kata/form: highest technical + spiritual score; Sparring: point-contact within safety rules.",
  matchStructure: "Championship: preliminary kata + sparring bouts across 4 stages divisions.",
  basicRules: [
    { title: "Stage-progression syllabus", body: "Practitioner must master Meithari → Kolthari → Angathari → Verumkai in order." },
    { title: "Ritual + spiritual dimensions", body: "Sessions begin with Kalari puja (prayer) invoking Kali + Bhagavati; ritual not optional." },
    { title: "Master (Gurukkal) lineage tradition", body: "Training tied to specific gurus + kalaris — lineage integrity paramount." },
  ],
  scoring: { summary: "Kata: 5-judge panel; Sparring: point-contact per stage.", winCondition: "Highest score across events." },
  positions: [{ name: "Kalari student (Shishya)", role: "Practitioner under Gurukkal.", count: 1 }, { name: "Gurukkal (Master)", role: "Teacher + judge.", count: 1 }],
  governingBodies: [{ name: "International Kalaripayattu Federation (IKF)", founded: 1958, headquarters: "Kerala, India" }, { name: "Kerala Kalarippayattu Association", founded: 1958, headquarters: "Thiruvananthapuram, India" }],
  majorCompetitions: [{ name: "IKF All India Kalaripayattu Championship", frequency: "annual", founded: 1958, region: "Kerala + rotating Indian venues" }, { name: "Kerala State Kalaripayattu Championship", frequency: "annual", founded: 1958, region: "Kerala" }],
  countriesPlayed: ["IND (Kerala)", "USA", "GBR", "GER", "ITA", "SGP", "MYS", "FRA"],
  famousAthletes: ["Sri C.V. Narayanan Nair (CVN Kalari founder)", "Meenakshi Amma (nonagenarian Gurukkal, still teaching at 80+)", "S.R.D. Prasad Gurukkal"],
  records: [
    { title: "Meenakshi Amma teaching at 80+", holder: "Meenakshi Amma (Kerala)", value: "Nonagenarian Kalaripayattu Gurukkal still actively teaching + demonstrating urumi flexible sword; Padma Shri 2017", year: 2024 },
    { title: "Bodhidharma-Shaolin legend link", holder: "traditional lore", value: "Kerala prince Bodhidharma (5th century CE) traditionally credited with introducing martial arts to Chinese Shaolin monks — cultural link", year: 500 },
  ],
  variants: ["vadakkan-northern-style", "thekkan-southern-style", "madhya-central-style"],
  relatedSports: ["silambam-tamil", "kung-fu-shaolin", "krav-maga", "muay-boran"],
  skills: ["flexibility + leg splits", "weapon mastery across 4 stages", "marma (vital point) knowledge", "ritual discipline"],
  wikipediaTitle: "Kalaripayattu",
  sources: [{ label: "Wikipedia — Kalaripayattu", url: "https://en.wikipedia.org/wiki/Kalaripayattu", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default kalaripayattuChampionship;
