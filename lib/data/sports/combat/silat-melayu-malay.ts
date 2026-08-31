import type { Sport } from "@/lib/types";

export const silatMelayuMalay: Sport = {
  id: "silat-melayu-malay",
  slug: "silat-melayu-malay",
  name: "Silat Melayu (Malay Martial Art)",
  officialName: "Persekutuan Silat Kebangsaan Malaysia (PESAKA) — International Silat Melayu Association",
  aliases: ["Silat", "Malay Silat", "Bersilat", "Seni Silat"],
  shortDescription:
    "Ancient Malay martial art of Malaysia + Singapore + Brunei — combines striking, joint locks, weapons (keris + tekpi + parang); traditionally practiced with ritual + dance ('Silat Pulut' ceremonial form); UNESCO Intangible Cultural Heritage 2019; ~150 documented Silat schools (perguruan) preserving diverse regional styles.",
  longDescription:
    "Silat Melayu is the ancient traditional martial art of the Malay peoples across Malaysia, Singapore, Brunei, and southern Thailand (Pattani region). Distinguished from broader Indonesian Pencak Silat by specifically Malay cultural context + ritual ceremonial dimensions. UNESCO recognized Silat Melayu as Intangible Cultural Heritage of Humanity 2019. Origins traced to pre-Islamic Malay Sultanate era (15th century Melaka Sultanate + earlier animist traditions); developed further under Islamic influence from 15th century + through anti-colonial resistance movements (Malay resistance against Portuguese Melaka 1511, Dutch/British 17th-19th century). Techniques: (a) Buah (fruit) — striking + kicking (hand strikes, elbow, knee, low kicks); (b) Jatuh (falls) — throws + sweeps + takedowns; (c) Kuncian (locks) — joint locks + submissions; (d) Sapuan (sweeps) — leg sweeps; (e) Guntingan (scissors) — scissor takedowns; (f) Bunga (flower) — ceremonial dance-like movements combining strategy + culture; (g) Belah (splitting) — weapon disarms + close-quarters combat. Traditional weapons: (i) Keris — famous wavy-bladed Malay dagger; (ii) Tekpi — trident-like short spear; (iii) Parang — machete; (iv) Golok — cleaver; (v) Tongkat — staff; (vi) Sundang — long sword; (vii) Sabit — sickle. Silat Pulut = ceremonial performance form combining martial art with traditional music (rebana drums, gamelan) + dance-like flow; performed at weddings, cultural festivals, royal court occasions; considered art form distinct from combat practice. Regional Malaysian styles include: (1) Silat Cekak (Kedah) — 'grip' focus; (2) Silat Gayong (Johor + Selangor) — comprehensive royal style; (3) Silat Lincah — 'agile'; (4) Silat Kalimah — spiritual; (5) Silat Tomoi (Kelantan) — Muay Thai crossover. Modern competitive scene: (a) PESAKA (Persekutuan Silat Kebangsaan Malaysia) national governing body; (b) SEA Games competition since 1987; (c) World Pencak Silat Championships biennial (broader Silat family); (d) Full-contact + Tanding sparring formats. Notable practitioners: Datuk Hj Wan Sulaiman Wan Ali (Silat Gayong grandmaster); Cikgu Ismail (Silat Cekak founder Ustaz Hanafi grandmaster). Estimated ~2 million practitioners across Malaysia + Singapore + Brunei + Malay diaspora. Popular cultural presence: featured in numerous Malay films (Merantau 2009 Iko Uwais); mandatory in Malaysian schools + military training; UNESCO Heritage listing drew renewed international attention.",
  category: "combat-sports",
  subCategory: "traditional Malay martial art with weapons + ceremonial dance",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "MY",
  regionOfOrigin: "Malay Peninsula + Malay Archipelago (Malaysia + Singapore + Brunei + southern Thailand)",
  estimatedOrigin: "Pre-Islamic Malay Sultanate era 15th century (Melaka Sultanate) + earlier animist traditions; developed through anti-colonial resistance; PESAKA founded 1983; UNESCO Intangible Cultural Heritage listing 2019",
  players: { min: 1, max: 2, note: "Solo forms + partner drills + full-contact + ceremonial dance." },
  equipment: [{ name: "Traditional Malay attire (baju kurung / baju melayu)", description: "Traditional cotton or silk Malay clothing; loose fit for movement; specific styles per school + ceremony." }, { name: "Keris (Malay wavy-bladed dagger)", description: "Signature Malay weapon: 20-40cm curved wavy-blade dagger with pistol-grip handle; deeply symbolic + spiritual; each keris has traditional meanings." }, { name: "Additional weapons: tekpi + parang + tongkat + sundang", description: "Wide traditional weapon curriculum: tekpi (trident short spear), parang (machete), tongkat (staff), sundang (long sword), sabit (sickle)." }, { name: "Rebana drums + gamelan (Silat Pulut ceremonial)", description: "Traditional Malay music: rebana drums + gamelan instruments accompany ceremonial Silat Pulut performances." }],
  duration: { approximateMinutes: 60, structure: "Class 60-120 min; ceremonial Silat Pulut performance 15-30 min; competition round 2-3 min; belt promotion 60-180 min." },
  objective: "Preserve + master traditional Malay martial techniques + weapons; competitive Tanding scored on point strikes + throws + control.",
  matchStructure: "Traditional class + belt promotion; competitive: Tanding (full-contact sparring), Tunggal (solo forms), Ganda (2-person choreographed forms).",
  basicRules: [
    { title: "Combines strikes + throws + joint locks + weapon defense", body: "Silat curriculum comprehensive: buah (strikes), jatuh (throws), kuncian (locks), sapuan (sweeps) plus weapon defense + weapon use." },
    { title: "Silat Pulut ceremonial form combines martial + dance + music", body: "Ceremonial 'Silat Pulut' form combines martial technique with dance-like flow + traditional music (rebana drums) — performed at weddings + festivals + royal occasions." },
    { title: "150+ regional schools ('perguruan') preserve diverse styles", body: "~150 documented Silat perguruan (schools) preserve distinct regional styles — Silat Cekak, Silat Gayong, Silat Lincah, Silat Kalimah, Silat Tomoi + many more." },
    { title: "Sparring formats: Tanding + Tunggal + Ganda", body: "Modern competition uses: Tanding (full-contact 3×2-min rounds), Tunggal (solo choreographed form), Ganda (2-person choreographed form), Regu (team form)." },
    { title: "UNESCO Intangible Cultural Heritage recognized 2019", body: "Silat Melayu inscribed on UNESCO Representative List of Intangible Cultural Heritage of Humanity 2019 — recognizes cultural + educational + spiritual importance." },
  ],
  scoring: { summary: "Tanding: 1-3 pts per legal strike/throw; Tunggal + Ganda: judge scores 0-10 for technique + rhythm + expressiveness.", winCondition: "Tanding: higher point total. Tunggal/Ganda: highest judge score." },
  positions: [{ name: "Silat practitioner (Pesilat)", role: "Sole competitor.", count: 1 }, { name: "Guru (Master Teacher)", role: "Senior teacher of perguruan (school).", count: 1 }, { name: "Pendekar (Silat Warrior/Elder)", role: "Highest honorific rank; recognized master.", count: 1 }],
  officiating: { officials: ["Chief Referee", "Corner Judges (3-5)", "Time Judges", "PESAKA Certified Officials"], summary: "PESAKA + Persilat (International Pencak Silat Federation) certified officials at SEA Games + World Championships." },
  governingBodies: [{ name: "Persekutuan Silat Kebangsaan Malaysia (PESAKA)", founded: 1983, headquarters: "Kuala Lumpur, Malaysia" }, { name: "Persilat (International Pencak Silat Federation)", founded: 1980, headquarters: "Jakarta, Indonesia" }, { name: "Singapore Silat Federation", founded: 1976, headquarters: "Singapore" }, { name: "Brunei Silat Federation", founded: 1970, headquarters: "Bandar Seri Begawan, Brunei" }],
  majorCompetitions: [{ name: "SEA Games — Pencak Silat", frequency: "biennial", founded: 1987, region: "rotating Southeast Asia" }, { name: "World Pencak Silat Championships", frequency: "biennial", founded: 1982, region: "rotating international" }, { name: "Malaysian National Silat Championship (PESAKA)", frequency: "annual", founded: 1985, region: "Malaysia" }, { name: "Silat Pulut cultural festivals", frequency: "annual (multiple)", founded: 1900, region: "Malaysia + Singapore + Brunei" }],
  countriesPlayed: ["MYS (origin + dominant)", "SGP", "BRN", "IDN (via broader Pencak Silat)", "THA (Pattani region)", "worldwide via Malay diaspora + SEA Games nations"],
  famousAthletes: ["Datuk Hj Wan Sulaiman Wan Ali (Silat Gayong grandmaster)", "Cikgu Ismail (Silat Cekak — Ustaz Hanafi grandmaster lineage)", "Iko Uwais (Indonesian actor featuring Pencak Silat in films like Merantau 2009)"],
  records: [
    { title: "UNESCO Intangible Cultural Heritage 2019", holder: "UNESCO + Malaysia", value: "Silat Melayu inscribed on UNESCO Representative List of Intangible Cultural Heritage of Humanity 2019 — global recognition of Malaysian cultural heritage", year: 2019 },
    { title: "~150 documented perguruan (schools)", holder: "Malaysian Silat community", value: "Approximately 150 documented Silat perguruan (schools) preserve diverse regional styles across Malaysia — largest documented Malay martial arts tradition", year: 2024 },
    { title: "Included in SEA Games since 1987", holder: "Southeast Asian Games Federation", value: "Pencak Silat (broader family including Silat Melayu) included in SEA Games since 1987 — regional multi-sport recognition", year: 1987 },
  ],
  variants: ["silat-cekak-kedah-grip-focus", "silat-gayong-johor-selangor-royal-comprehensive", "silat-lincah-agile-mobile-style", "silat-kalimah-spiritual-focused", "silat-tomoi-kelantan-muay-thai-crossover", "silat-pulut-ceremonial-dance-form", "silat-tanding-full-contact-sparring"],
  relatedSports: ["pencak-silat-indonesia", "eskrima-arnis-filipino", "muay-thai", "kali-tjakalele-indonesian"],
  skills: ["keris weapon technique", "flow-based body movement (bunga)", "close-quarters trapping + locks", "ceremonial performance rhythm"],
  wikipediaTitle: "Silat Melayu",
  sources: [{ label: "Wikipedia — Silat Melayu", url: "https://en.wikipedia.org/wiki/Silat_Melayu", publisher: "Wikipedia" }, { label: "UNESCO Intangible Cultural Heritage — Silat", url: "https://ich.unesco.org/en/RL/silat-01504", publisher: "UNESCO" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default silatMelayuMalay;
