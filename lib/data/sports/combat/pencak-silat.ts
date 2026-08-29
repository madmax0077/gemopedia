import type { Sport } from "@/lib/types";

export const pencakSilat: Sport = {
  id: "pencak-silat",
  slug: "pencak-silat",
  name: "Pencak Silat",
  officialName: "Pencak Silat",
  aliases: ["Silat", "Silat Melayu", "펜착실랏"],
  shortDescription:
    "Umbrella term for Indonesian/Malay martial arts featuring stylised strikes, throws, joint-locks, weapons + cultural dance (kembangan). Debuted as medal sport at 2018 Asian Games; 4 competition disciplines — tanding, tunggal, ganda, regu.",
  longDescription:
    "Pencak Silat is the standardised competitive + artistic umbrella for hundreds of regional silat martial arts from Indonesia, Malaysia, Brunei, Singapore + across the Nusantara (Malay archipelago). Governed internationally by PERSILAT (founded 1980, HQ Jakarta) with 60+ member federations. Four competition disciplines: tanding (full-contact sparring, 3×2-min rounds, point-scoring with body protector); tunggal (solo choreographed form, 3 min, with fixed weapons kris + golok + toya); ganda (choreographed duel, 3 min, two athletes performing preset attack-defense sequences); regu (team-of-3 synchronised form, 3 min). Debuted as medal sport at 2018 Asian Games (Jakarta) — Indonesia won 14 golds; part of SEA Games, Asian Indoor Games. Weapons: kris (wavy dagger), golok (machete), toya (staff), sabit (sickle), tekpi (trident), samping (waist cloth), celurit.",
  category: "combat-sports",
  subCategory: "traditional Indonesian/Malay martial art",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "major",
  countryOfOrigin: "ID",
  regionOfOrigin: "Nusantara (Indonesian archipelago + Malay Peninsula)",
  estimatedOrigin: "Pre-colonial origins; formalised competition 1948 (IPSI Indonesia); international federation PERSILAT 1980; Asian Games medal sport 2018",
  players: { min: 1, max: 3, note: "1 in tanding + tunggal; 2 in ganda; 3 in regu." },
  equipment: [
    { name: "Body protector (pelindung badan)", description: "Padded chest/back protector for tanding sparring — mandatory since 1994." },
    { name: "Kris", description: "Traditional wavy-bladed dagger used in tunggal/ganda forms." },
    { name: "Golok", description: "Short curved machete — cutting form weapon in ganda demonstrations." },
    { name: "Baju silat (uniform)", description: "Loose black or coloured uniform with samping waist cloth — samping doubles as weapon." },
  ],
  duration: { approximateMinutes: 6, structure: "Tanding: 3 rounds × 2 min. Forms: 3 min each." },
  objective: "Outscore opponent via strikes + throws in tanding, or achieve highest form score in tunggal/ganda/regu.",
  matchStructure: "Tanding: 3×2-min rounds with 1-min rest; scored 1/2/3 points for punches/kicks/throws. Forms: solo or team performance judged on technique, rhythm, spirit — max 100 points.",
  basicRules: [
    { title: "Body protector mandatory (tanding)", body: "All tanding competitors wear padded torso protector." },
    { title: "Scoring points", body: "1 pt punch, 2 pt kick, 3 pt throw/takedown, 4 pt knockdown." },
    { title: "Weapon forms allowed only in tunggal/ganda", body: "Tanding is empty-hand only; weapons appear in choreographed events." },
  ],
  advancedRules: [
    { title: "Median scoring in forms", body: "5-judge panel scores tunggal 0-100; final = median of 5." },
    { title: "Video review since 2018", body: "PERSILAT + Asian Games use video review for close bouts." },
  ],
  scoring: {
    summary: "Tanding: cumulative points across 3 rounds. Forms: median of 5-judge scores.",
    winCondition: "Higher point total in tanding; higher median score in forms.",
    breakdown: [
      { action: "Tanding punch", points: "1 pt" },
      { action: "Tanding kick", points: "2 pt" },
      { action: "Tanding throw/takedown", points: "3 pt" },
      { action: "Tanding knockdown", points: "4 pt" },
    ],
  },
  penalties: [
    { title: "Teguran (warning)", body: "Minor infraction; 3 accumulated = 1-point deduction." },
    { title: "Peringatan (formal warning)", body: "-5 points; 3 accumulated = disqualification." },
    { title: "Diskualifikasi", body: "Illegal strike or weapon = instant DQ + suspension." },
  ],
  positions: [{ name: "Pesilat (practitioner)", role: "Fighter or form performer.", count: 1 }],
  officiating: {
    officials: ["Ketua Pertandingan (chief referee)", "Wasit (mat referee)", "5 Juri (judges)", "Timekeeper", "Dewan Juri (jury council)"],
    summary: "1 mat referee + 5 judges scoring independently; final = median of 5.",
  },
  governingBodies: [
    { name: "PERSILAT (International Pencak Silat Federation)", founded: 1980, headquarters: "Jakarta, Indonesia" },
    { name: "IPSI (Ikatan Pencak Silat Indonesia)", founded: 1948, headquarters: "Jakarta, Indonesia" },
  ],
  majorCompetitions: [
    { name: "World Pencak Silat Championship", frequency: "biennial", founded: 1982, region: "global (host rotates)" },
    { name: "Asian Games Pencak Silat", frequency: "quadrennial", founded: 2018, region: "Asia" },
    { name: "SEA Games Pencak Silat", frequency: "biennial", founded: 1987, region: "Southeast Asia" },
  ],
  countriesPlayed: ["ID", "MY", "SG", "BN", "TH", "NL", "FR", "US", "AU"],
  famousAthletes: [
    "Various Indonesian + Malaysian world champions",
    "Indonesian delegation dominated 2018 Asian Games (14 golds)",
  ],
  records: [
    { title: "Most Asian Games gold (2018 Jakarta)", holder: "Indonesia", value: "14 gold medals in single edition (hosting)", year: 2018 },
    { title: "PERSILAT founding", holder: "Indonesia, Malaysia, Singapore, Brunei", value: "60+ member nations as of 2024", year: 1980 },
  ],
  variants: ["silat-melayu", "silat-minangkabau", "harimau-silat", "cimande-silat"],
  relatedSports: ["kalaripayattu", "kuntao", "eskrima", "muay-thai"],
  skills: ["strikes", "throws", "joint-locks", "weapon work", "kembangan artistic movement"],
  strategies: [
    { title: "Sapuan sweep chain", body: "Combine low kick + leg sweep for 3-point takedown then punish." },
    { title: "Sikap harimau (tiger stance)", body: "Low crouch for evasion + upward throws." },
    { title: "Jatuhan counter", body: "Off-balance opponent laterally, follow with hip throw for 3-point jatuhan." },
  ],
  terminology: [
    { term: "Pesilat", meaning: "Silat practitioner" },
    { term: "Tanding", meaning: "Sparring event" },
    { term: "Tunggal", meaning: "Solo form" },
    { term: "Ganda", meaning: "Choreographed duel" },
    { term: "Regu", meaning: "Team-of-3 form" },
    { term: "Kris", meaning: "Wavy-bladed traditional dagger" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Sikap Pasang (basic stances)", body: "Kuda-kuda, hand positions, basic tangan + kaki strikes." }] },
    { level: "intermediate", steps: [{ title: "Jurus (form) study", body: "100 jurus baku (Indonesia) + regional variations." }] },
    { level: "advanced", steps: [{ title: "Tanding + weapons", body: "Full-contact competition + kris/golok/toya weapons + adegan scenarios." }] },
  ],
  faq: [
    { question: "Difference between Pencak Silat and Silat?", answer: "Pencak Silat is the standardised competitive umbrella (Indonesia focus); Silat covers hundreds of regional styles across Indonesia, Malaysia, Brunei, Singapore." },
    { question: "Is Pencak Silat Olympic?", answer: "Not yet — but debuted as medal sport at 2018 Asian Games (Jakarta) and is part of SEA Games." },
  ],
  wikipediaTitle: "Pencak silat",
  sources: [{ label: "Wikipedia — Pencak silat", url: "https://en.wikipedia.org/wiki/Pencak_silat", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pencakSilat;
