import type { Sport } from "@/lib/types";

export const qwanKiDo: Sport = {
  id: "qwan-ki-do",
  slug: "qwan-ki-do",
  name: "Qwan Ki Do",
  officialName: "Qwan Ki Do (LMLF / Liên Đoàn Quần Ki Đô Việt Nam)",
  aliases: ["Quán Khí Đạo", "Vietnamese Traditional Kung Fu"],
  shortDescription:
    "Vietnamese-French synthesized traditional martial art founded 1981 in Paris by Grandmaster Pham Xuan Tong (Việt Kiều master) — blends Vietnamese Vovinam + Sino-Vietnamese Kung Fu + French sport traditions; full-contact + kata competitions worldwide.",
  longDescription:
    "Qwan Ki Do (Vietnamese: Quán Khí Đạo, 'the way of internal power'; French: Voie de la force intérieure) is a modern synthesized Vietnamese-French martial art founded in 1981 in Paris by Vietnamese Grandmaster Pham Xuan Tong (Việt Kiều master who emigrated to France in the 1960s). The style synthesizes traditional Vietnamese Vovinam + Sino-Vietnamese Kung Fu + French sport traditions with an emphasis on internal (nội công) + external (ngoại công) balance. Techniques include hand strikes, kicks (including flying kicks), sweeps, throws, joint locks, and weapons (bo staff, wooden broadsword, spear). Belt/ranking system: 10 grades (kyu-equivalent) leading to Đai Đen (Black Belt) + then master ranks (Sư Trưởng — First Master, Sư Cả — Grandmaster). Governed internationally by LMLF (Ligue Mondiale de Qwan Ki Do — Liên Đoàn Quần Ki Đô Việt Nam, headquartered France + Vietnam). Popular in France (largest membership), Vietnam, Italy, Belgium, Poland, Romania, USA. Competition formats: Kata (forms/quyền) + Sparring (kumite: point contact, semi-contact, full contact + protective gear), Weapons Kata. European Championships biennial; World Championships every 4 years.",
  category: "combat-sports",
  subCategory: "Vietnamese-French traditional martial art",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Vietnam (Grandmaster Pham Xuan Tong, Paris 1981)",
  estimatedOrigin: "Founded 1981 in Paris by Grandmaster Pham Xuan Tong",
  players: { min: 1, max: 2, note: "Kata (solo); Sparring/Song luyện (pairs)." },
  equipment: [{ name: "Traditional võ phục uniform", description: "Yellow-trim training uniform; belt color denotes rank." }, { name: "Protective sparring gear", description: "Mouthguard, headgear, chest protector, hand + foot pads." }, { name: "Wooden weapons (kata + partner)", description: "Bo staff, wooden broadsword (đao), spear (thương)." }],
  duration: { approximateMinutes: 5, structure: "Kata performance ~2-3 min; sparring rounds 2 × 2-3 min." },
  objective: "Kata: highest judge score for form + power + timing. Sparring: most points or KO within time limit.",
  matchStructure: "Kata: solo performance judged. Sparring: 2 rounds × 2-3 min; point contact or full contact per event category.",
  basicRules: [
    { title: "Point contact + semi-contact + full-contact categories", body: "Divisions by contact level for safety + skill progression." },
    { title: "Traditional Vietnamese kata syllabus", body: "Multiple kata from beginner to master level; syllabus includes empty-hand + weapons." },
    { title: "Belt-progression through 10 grades + master ranks", body: "White → Yellow → Orange → Green → Blue → Purple → Brown → Black; master ranks post-Black." },
  ],
  scoring: { summary: "Kata: judges score technique/power/rhythm 0-10; Sparring: point contact = 1-3 pts per hit; full-contact = KO/decision.", winCondition: "Kata: highest judge score. Sparring: most points or KO." },
  positions: [{ name: "Practitioner (Võ sinh)", role: "Solo or paired competitor.", count: 1 }, { name: "Master (Sư Trưởng / Sư Cả)", role: "Coach + judge.", count: 1 }],
  governingBodies: [{ name: "LMLF (Ligue Mondiale de Qwan Ki Do)", founded: 1981, headquarters: "France + Vietnam" }, { name: "Liên Đoàn Quần Ki Đô Việt Nam", founded: 1981, headquarters: "Hanoi + Ho Chi Minh City, Vietnam" }],
  majorCompetitions: [{ name: "World Qwan Ki Do Championships", frequency: "every 4 years", founded: 1994, region: "rotating (France, Vietnam, Italy)" }, { name: "European Qwan Ki Do Championships", frequency: "biennial", founded: 1992, region: "Europe (rotating)" }],
  countriesPlayed: ["FRA", "VNM", "ITA", "BEL", "POL", "ROU", "USA", "DEU", "MAR"],
  famousAthletes: ["Grandmaster Pham Xuan Tong (founder + first Sư Cả)", "Sư Cả Anthony Ngo (France)"],
  records: [
    { title: "Founded 1981 by Pham Xuan Tong", holder: "Grandmaster Pham Xuan Tong", value: "Founded 1981 in Paris by Vietnamese Grandmaster Pham Xuan Tong (Việt Kiều master)", year: 1981 },
    { title: "First World Championship 1994", holder: "LMLF", value: "First World Qwan Ki Do Championships held 1994 in France", year: 1994 },
  ],
  variants: ["kata-solo", "kata-with-weapons", "point-contact-sparring", "full-contact-sparring"],
  relatedSports: ["vovinam", "vietnamese-traditional-martial-arts", "sanda", "karate"],
  skills: ["kata precision", "flying kick technique", "weapons handling", "internal power (nội công)"],
  wikipediaTitle: "Qwan Ki Do",
  sources: [{ label: "Wikipedia — Qwan Ki Do", url: "https://en.wikipedia.org/wiki/Qwan_Ki_Do", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default qwanKiDo;
