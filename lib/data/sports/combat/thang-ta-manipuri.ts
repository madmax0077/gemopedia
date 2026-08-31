import type { Sport } from "@/lib/types";

export const thangTaManipuri: Sport = {
  id: "thang-ta-manipuri",
  slug: "thang-ta-manipuri",
  name: "Thang-Ta (Manipuri Sword & Spear)",
  officialName: "Thang-Ta Federation of India (TFI)",
  aliases: ["Huyen Langlon", "Manipuri Martial Art", "Meitei Martial Art"],
  shortDescription:
    "Ancient Manipuri (Northeast India) martial art of sword (thang) + spear (ta) — traditional Meitei warrior discipline; Huyen Langlon parent art; includes armed + unarmed forms + spiritual meditative practice; recognized by Indian Olympic Association 2010; national gold medal sport at Indian National Games since 2009.",
  longDescription:
    "Thang-Ta (তাং তা, literally 'sword-spear' in Meitei/Manipuri) is the traditional martial art of Manipur — northeastern Indian state historically ruled by Meitei kings. The comprehensive parent art 'Huyen Langlon' (হুয়েন লাংলোন, 'martial method') encompasses two divisions: (1) Thang-Ta — armed combat with sword (thang), spear (ta), shield (chungoi), and other traditional weapons (dagger 'thangjou', mace, throwing dart 'meiraba'); (2) Sarit Sarak — unarmed grappling + striking. Origins traced to Meitei kingdom of Kangleipak (established 33 CE per Meitei texts); flourished under monarchs 15th-19th century as royal warrior training; suppressed by British after Anglo-Manipur War 1891 but preserved in secret by traditional families; revived post-Indian independence + formalized as martial art institution 1950s-60s. Signature elements: (a) Chak — foundational stance training; (b) Leng — flowing sword patterns emphasizing spiritual + physical unity; (c) Ta khousaba — spear techniques; (d) Sarit Sarak unarmed forms with distinctive circular grappling; (e) Cheibi Gadga — sword + shield sparring competition format; (f) Ritual + meditation elements including 'Thengourol' (invocation dance before practice). Modern competition formats: (i) Cheibi Gadga sword + shield 1v1; (ii) Individual weapon demonstration; (iii) Group choreographed performance. Introduced at Indian National Games 2009 (Ranchi); Thang-Ta Federation of India (TFI) founded 1998 governs national scene; recognized by Indian Olympic Association 2010. Notable teachers: Guru Ranjit Singh Ningthouja (foundational modern master), Guru Bira Singh Kh (Cheibi Gadga specialist), Guru Yumjao Singh (Sarit Sarak master). Approximately 5,000-10,000 active practitioners primarily in Manipur, spreading to other Indian states + international schools in USA + UK + Malaysia via Meitei diaspora.",
  category: "combat-sports",
  subCategory: "Manipuri sword + spear traditional martial art",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "niche",
  countryOfOrigin: "IN",
  regionOfOrigin: "Manipur, Northeast India (Meitei kingdom of Kangleipak — 33 CE Meitei tradition)",
  estimatedOrigin: "Traced to Meitei kingdom foundation 33 CE per Meitei texts; flourished 15th-19th century Manipuri royal court; British suppression 1891; revived 1950s-60s; TFI founded 1998",
  players: { min: 1, max: 2, note: "Solo forms + partner sparring." },
  equipment: [{ name: "Thang (traditional sword)", description: "Straight single-edged Meitei sword; modern practice uses wooden or blunt-metal training sword." }, { name: "Ta (traditional spear)", description: "Long wooden spear with metal or wooden tip; ~2m long; distinctive Meitei design." }, { name: "Chungoi (traditional shield)", description: "Circular shield ~50-60cm diameter; leather or metal traditional; used in Cheibi Gadga sparring." }, { name: "Cheibi (foam-covered stick, competition)", description: "Modern Cheibi Gadga competition uses foam-covered flexible stick + protective shield for safe sparring." }, { name: "Traditional Meitei uniform (Phanek + Ninggol)", description: "Traditional Meitei clothing worn in ceremonial demonstrations." }],
  duration: { approximateMinutes: 60, structure: "Practice session 60-120 min; Cheibi Gadga bout 3×2 min rounds; demonstration form 90 sec." },
  objective: "Master traditional Meitei weapons + unarmed techniques + spiritual meditative aspects; competition: score valid strikes on opponent using Cheibi sword + shield.",
  matchStructure: "Cheibi Gadga competition: 3×2 min rounds 1v1 with foam sword + shield; forms scored 0-100 by judges.",
  basicRules: [
    { title: "Thang-Ta = armed division; Sarit Sarak = unarmed", body: "Huyen Langlon parent art divides into Thang-Ta (weapons) + Sarit Sarak (unarmed grappling + striking)." },
    { title: "Cheibi Gadga competition format", body: "Modern sport competition uses foam-covered Cheibi sword + traditional shield for 1v1 sparring with points-based scoring." },
    { title: "Chak (stance) + Leng (flowing patterns) foundational", body: "Chak stances + Leng flowing sword patterns form foundational curriculum; must master before advanced." },
    { title: "Thengourol invocation dance precedes practice", body: "Traditional Thengourol invocation dance performed before formal practice sessions — spiritual + preparatory." },
  ],
  scoring: { summary: "Cheibi Gadga: 1 point per legal strike to target zone; forms: 0-100 judge score across execution + tradition + difficulty.", winCondition: "Cheibi: highest points across 3 rounds; forms: highest judge score." },
  positions: [{ name: "Thang-Ta practitioner (Sadhak)", role: "Sole competitor.", count: 1 }, { name: "Guru (Master)", role: "Traditional master + corner support.", count: 1 }],
  officiating: { officials: ["Chief Judge", "Cheibi Ring Judges", "Forms Judges (4)", "Scorer"], summary: "TFI certified officials at Indian National Games + national tournaments." },
  governingBodies: [{ name: "Thang-Ta Federation of India (TFI)", founded: 1998, headquarters: "Imphal, Manipur, India" }, { name: "International Thang-Ta Federation (ITTF)", founded: 2005, headquarters: "Imphal, Manipur, India" }],
  majorCompetitions: [{ name: "Indian National Games — Thang-Ta", frequency: "biennial", founded: 2009, region: "India — rotating host state" }, { name: "National Thang-Ta Championships (India)", frequency: "annual", founded: 1999, region: "India" }, { name: "International Thang-Ta Championships", frequency: "biennial", founded: 2007, region: "Imphal, Manipur + international" }],
  countriesPlayed: ["IND (dominant — Manipur)", "USA (Meitei diaspora)", "GBR", "MYS", "MMR (border regions)", "worldwide small niche"],
  famousAthletes: ["Guru Ranjit Singh Ningthouja (foundational modern master)", "Guru Bira Singh Kh (Cheibi Gadga specialist)", "Guru Yumjao Singh (Sarit Sarak master)", "Multi-time Indian National Champions"],
  records: [
    { title: "Indian Olympic Association recognition 2010", holder: "Thang-Ta Federation of India", value: "Thang-Ta recognized by Indian Olympic Association 2010 — enabled inclusion in Indian National Games since 2009 Ranchi", year: 2010 },
    { title: "Ancient Meitei origin traced 33 CE", holder: "Meitei tradition (Manipur)", value: "Thang-Ta traced to Meitei kingdom foundation of Kangleipak in 33 CE per traditional Meitei texts + royal training tradition", year: 33 },
    { title: "British suppressed after Anglo-Manipur War 1891", holder: "British Raj suppression", value: "Thang-Ta suppressed by British colonial authorities after Anglo-Manipur War 1891; preserved in secret by Meitei families through 20th century", year: 1891 },
  ],
  variants: ["thang-ta-armed-division", "sarit-sarak-unarmed-division", "cheibi-gadga-modern-sport-format", "huyen-langlon-parent-art"],
  relatedSports: ["silambam-tamil", "kalaripayattu-championship", "gatka-sikh-punjabi", "kobudo-okinawan-weapons"],
  skills: ["thang sword forms", "ta spear technique", "cheibi + chungoi sword-shield combat", "sarit sarak unarmed grappling"],
  wikipediaTitle: "Thang-ta",
  sources: [{ label: "Wikipedia — Thang-Ta", url: "https://en.wikipedia.org/wiki/Thang-ta", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default thangTaManipuri;
