import type { Sport } from "@/lib/types";

export const vovinamVietnamese: Sport = {
  id: "vovinam-vietnamese",
  slug: "vovinam-vietnamese",
  name: "Vovinam (Việt Võ Đạo)",
  officialName: "World Vovinam Federation (WVVF)",
  aliases: ["Việt Võ Đạo", "VVD", "Vietnamese Martial Art"],
  shortDescription:
    "Vietnamese national martial art founded 1938 by Nguyễn Lộc — signature flying-scissor takedowns (đòn chân tấn công), full-contact sparring, forms (quyền), and self-defense; SEA Games medal sport since 2013; ~2.5 million practitioners in 60+ countries.",
  longDescription:
    "Vovinam (Việt Võ Đạo, 'Way of the Vietnamese Martial Art') is the modern national martial art of Vietnam, founded 1938 by Grandmaster Nguyễn Lộc (1912-1960) in Hanoi. It synthesizes traditional Vietnamese fighting arts with elements of Chinese kung fu, Korean taekwondo, and Western wrestling into a unified system. Signature techniques: (1) Đòn chân tấn công — the celebrated 21 flying-scissor leg-lock takedowns (numbers 1-21) where practitioner jumps + scissors opponent's neck/torso/legs to bring them down; visually spectacular + defining Vovinam trademark; (2) Song luyện — pre-arranged 2-person combat sets; (3) Quyền — solo forms (28 empty-hand forms + 12+ weapon forms including long staff, machete, single sword, double sword, sickle); (4) Self-defense (phản đòn) — 30+ pre-defined counter-attack sequences. Uniform: distinctive blue gi (võ phục) with belt ranking system: white → blue (multiple degrees) → yellow (multiple degrees) → red (multiple degrees) → white (Bạch Đai Thượng Đẳng — grandmaster). Modern competition formats: (a) Sparring (đối kháng) — full-contact with padding, points for strikes + takedowns; (b) Forms (quyền) — solo + pair; (c) Weapons demonstrations. SEA Games sport since 2013 (Myanmar hosting). World Vovinam Federation (WVVF) governs ~2.5 million practitioners across 60+ countries — especially strong in Vietnam, France, Belgium, Germany, USA, Cambodia, Laos, Thailand. World Championships biennial since 2009. Notable grandmasters: Nguyễn Lộc (founder), Lê Sáng (successor grandmaster 1960-2010), Nguyễn Văn Chiếu (major SEA Games advocate).",
  category: "combat-sports",
  subCategory: "Vietnamese hybrid martial art with signature flying-scissor takedowns",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "VN",
  regionOfOrigin: "Hanoi, Vietnam (founded 1938 by Nguyễn Lộc)",
  estimatedOrigin: "Founded 1938 in Hanoi by Nguyễn Lộc; WVVF founded 2008; SEA Games sport since 2013",
  players: { min: 1, max: 2, note: "Solo forms + partner drills + 1v1 sparring." },
  equipment: [{ name: "Blue Vovinam uniform (võ phục)", description: "Distinctive light-blue cotton gi with belt; distinguishes Vovinam from other martial arts." }, { name: "Ranked belt system (đai)", description: "White → blue (4 degrees) → yellow (4 degrees) → red (5 degrees) → white grandmaster." }, { name: "Sparring protective gear", description: "Head guard, chest protector, groin guard, shin guards, hand pads for competition sparring." }, { name: "Traditional weapons (weapons forms)", description: "Long staff (côn), machete (mã tấu), single sword (đơn kiếm), double sword (song kiếm), sickle (liềm)." }],
  duration: { approximateMinutes: 90, structure: "Class 60-120 min; competition sparring 2×90 sec rounds; forms 60-90 sec." },
  objective: "Master 21 signature flying-scissor takedowns + forms + defense sequences + competitive sparring skill.",
  matchStructure: "Competition sparring: 2×90 sec rounds continuous full-contact; points for scoring strikes + takedowns + flying scissors.",
  basicRules: [
    { title: "21 signature flying-scissor takedowns (đòn chân)", body: "Numbered 1-21 systematic scissor-takedown techniques targeting neck, torso, legs; core Vovinam identity." },
    { title: "Full-contact sparring with padding", body: "Modern competition uses head guard + chest protector + gloves; points for strikes + takedowns + scissor-takedowns." },
    { title: "Belt promotion via forms + technique + sparring", body: "Rank tests require demonstrating quyền (forms), self-defense sequences, and free sparring." },
    { title: "Traditional Yin-Yang philosophy (Cương Nhu Phối Triển)", body: "'Hard + soft in harmony' — core Vovinam philosophical principle blending hard strikes + soft flowing techniques." },
  ],
  scoring: { summary: "Sparring: 1 point normal strike; 2 points spinning technique; 3 points scissor-takedown; 5 points knockdown.", winCondition: "Highest points after 2 rounds; or knockout." },
  positions: [{ name: "Vovinam practitioner (Võ sinh)", role: "Sole competitor.", count: 1 }, { name: "Master (Võ sư)", role: "Instructor/coach corner support.", count: 1 }],
  officiating: { officials: ["Chief Referee", "Center Judge", "4 Corner Judges", "Scoring Recorder"], summary: "WVVF certified officials for international competition." },
  governingBodies: [{ name: "World Vovinam Federation (WVVF)", founded: 2008, headquarters: "Ho Chi Minh City, Vietnam" }, { name: "Vietnam Vovinam Federation", founded: 1966, headquarters: "Ho Chi Minh City, Vietnam" }],
  majorCompetitions: [{ name: "Vovinam World Championships", frequency: "biennial", founded: 2009, region: "rotating (Vietnam, France, Algeria, Iran)" }, { name: "SEA Games — Vovinam", frequency: "biennial", founded: 2013, region: "Southeast Asia" }, { name: "Asian Vovinam Championships", frequency: "biennial", founded: 2003, region: "Asia" }],
  countriesPlayed: ["VNM (dominant)", "FRA", "BEL", "DEU", "USA", "KHM", "LAO", "THA", "DZA", "IRN", "IND", "RUS"],
  famousAthletes: ["Nguyễn Lộc (founder + grandmaster; 1912-1960)", "Lê Sáng (successor grandmaster 1960-2010)", "Nguyễn Văn Chiếu (SEA Games advocate + WVVF founder)"],
  records: [
    { title: "Founded 1938 by Nguyễn Lộc", holder: "Grandmaster Nguyễn Lộc", value: "Vovinam founded 1938 in Hanoi by Grandmaster Nguyễn Lộc — Vietnamese modern national martial art", year: 1938 },
    { title: "SEA Games medal sport since 2013", holder: "Southeast Asian Games", value: "Vovinam introduced as SEA Games medal sport at 2013 Games in Myanmar", year: 2013 },
    { title: "~2.5 million practitioners 60+ countries", holder: "World Vovinam Federation", value: "Approximately 2.5 million Vovinam practitioners across 60+ countries — largest Vietnamese martial art globally", year: 2024 },
  ],
  variants: ["vovinam-viet-vo-dao-traditional", "vovinam-competition-sport-format"],
  relatedSports: ["taekwondo", "wushu-sanda", "judo", "karate"],
  skills: ["flying-scissor takedown technique (all 21)", "quyền forms performance", "full-contact striking", "weapon forms mastery"],
  wikipediaTitle: "Vovinam",
  sources: [{ label: "Wikipedia — Vovinam", url: "https://en.wikipedia.org/wiki/Vovinam", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default vovinamVietnamese;
