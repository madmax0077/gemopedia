import type { Sport } from "@/lib/types";

export const gatkaSikhPunjabi: Sport = {
  id: "gatka-sikh-punjabi",
  slug: "gatka-sikh-punjabi",
  name: "Gatka (Sikh Martial Art)",
  officialName: "World Gatka Federation (WGF) — Amritsar",
  aliases: ["ਗਤਕਾ", "Punjabi Stick Fighting", "Shastar Vidiya"],
  shortDescription:
    "Sikh Punjabi martial art of Guru-era origins — traditional wooden stick + sword + spear fighting; two forms — traditional Shastar Vidiya (combat) + modern sport Gatka (demonstration); performed at Sikh Nagar Kirtan festivals worldwide; national sport of Punjab since 2020; WGF organized World Championships since 2018.",
  longDescription:
    "Gatka (ਗਤਕਾ, Punjabi for 'wooden stick') is the traditional Sikh Punjabi martial art originating in the era of the Sikh Gurus (16th-18th centuries) and codified by the Khalsa (Sikh warrior order founded 1699 by Guru Gobind Singh). Two related forms coexist today: (1) Shastar Vidiya (ਸ਼ਸਤਰ ਵਿਦਿਆ, 'science of weapons') — the original combat-focused martial art taught to Sikh warriors; largely preserved in oral tradition + limited surviving lineage schools; battlefield-effective techniques with sword (Kirpan/Talwar), spear (Barcha), shield (Dhal), mace (Gurj), bow (Kaman), and unarmed grappling (Mukha). (2) Gatka (modern sport form) — codified 20th century as demonstration + sport art using wooden practice weapons (Lathi wooden stick, Marathi wooden sword). Signature techniques + concepts: (a) Panchi (5 positions) — foundational combat stances; (b) Baaj (attacking flow) — continuous flowing attack patterns; (c) Peer (defensive rotation) — 360-degree circular defense; (d) Shastar puja — spiritual weapon veneration + prayer before practice. Modern gatka performed extensively at Sikh festivals + Nagar Kirtan (religious processions) worldwide — signature Baisakhi + Guru Gobind Singh Jayanti + Hola Mohalla (Anandpur Sahib annual martial festival since 1701). Gatka became national sport of Punjab state 2020; recognized by Indian Olympic Association 2019. Modern competition: (i) Fari-Soti (stick + shield combat with points); (ii) Individual demonstration (choreographed weapon forms); (iii) Group demonstration (multi-person routines). Notable teachers/masters: Baba Fateh Singh (Shastar Vidiya lineage), Baba Deep Singh's tradition, Nihang Singh warrior order (living tradition), Sadhu Gulab Singh, Gurdev Singh Ranth (WGF founder). Global Sikh diaspora spread — UK (Southall, Birmingham), Canada (Brampton, Surrey), USA (California, New York), Malaysia, Singapore, Australia. World Gatka Federation (WGF) founded 2008; World Championships biennial since 2018 (Toronto inaugural).",
  category: "combat-sports",
  subCategory: "Sikh Punjabi weapons martial art",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "early-modern", popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "Punjab, India (Sikh Guru era 16th-18th century; codified by Khalsa 1699)",
  estimatedOrigin: "Sikh Guru era 16th-18th century; Khalsa founded 1699 codifying Shastar Vidiya; modern gatka sport form codified early-mid 1900s; WGF founded 2008",
  players: { min: 1, max: 2, note: "Solo forms + partner drills + 1v1 sparring." },
  equipment: [{ name: "Lathi (wooden practice stick)", description: "Long wooden staff ~4-5 ft; primary training weapon; represents traditional battle spear/staff." }, { name: "Marathi (wooden practice sword)", description: "Wooden sword for training; represents traditional Kirpan/Talwar sword." }, { name: "Fari (wooden shield)", description: "Circular wooden practice shield; represents traditional metal Dhal shield." }, { name: "Kirpan (traditional Sikh sword)", description: "Real steel Sikh sword worn by Khalsa Sikhs as one of 5 Ks (articles of faith); used in advanced Shastar Vidiya only." }, { name: "Dumala turban", description: "Warrior-style Sikh turban traditionally worn during gatka; distinctive tall wrapped style." }],
  duration: { approximateMinutes: 60, structure: "Class + demonstration 30-90 min; competition fari-soti bout 3 min; forms demonstration 90 sec." },
  objective: "Master traditional weapon combat forms + demonstrate techniques in flowing patterns + defend against multiple opponents; combat: score valid strikes on opponent.",
  matchStructure: "Competition Fari-Soti: 3-min 1v1 bout with wooden sword + shield, points for legal strikes; forms: choreographed weapon routines judged by execution + flow.",
  basicRules: [
    { title: "Weapons: Lathi + Marathi + Fari + Kirpan", body: "Traditional weapon set includes wooden stick (Lathi), wooden sword (Marathi), wooden shield (Fari), and traditional Kirpan sword." },
    { title: "Panchi (5 positions) foundational stances", body: "Five foundational combat stances (Panchi) form base for all techniques; must master before advanced work." },
    { title: "Fari-Soti competition: sword + shield 1v1", body: "Modern competition Fari-Soti pits two competitors with sword + shield for 3-min timed bouts scoring on legal strikes." },
    { title: "Shastar puja weapon veneration precedes practice", body: "Traditional spiritual practice of Shastar puja (weapon veneration + prayer) precedes formal training sessions." },
    { title: "Baaj + Peer flowing patterns", body: "Baaj (continuous attacking flow) + Peer (360-degree circular defense) core movement patterns of gatka." },
  ],
  scoring: { summary: "Fari-Soti competition: 1 point per legal touch to designated target zones (torso, arms, legs); forms scored 0-100 by judges.", winCondition: "Fari-Soti: highest points at time-out. Forms: highest judge score." },
  positions: [{ name: "Gatka practitioner (Gatkiya)", role: "Sole competitor.", count: 1 }, { name: "Ustad / Baba (Master)", role: "Traditional master teacher + corner support.", count: 1 }],
  officiating: { officials: ["Chief Judge", "Fari-Soti Ring Judges", "Forms Judges (4)", "Scorer"], summary: "WGF certified officials at World + national championships." },
  governingBodies: [{ name: "World Gatka Federation (WGF)", founded: 2008, headquarters: "Amritsar, Punjab, India" }, { name: "National Gatka Association of India", founded: 1982, headquarters: "Amritsar, Punjab, India" }, { name: "Punjab Gatka Association", founded: 1993, headquarters: "Amritsar, Punjab, India" }],
  majorCompetitions: [{ name: "World Gatka Championships", frequency: "biennial", founded: 2018, region: "rotating (Toronto, Amritsar, Birmingham)" }, { name: "National Gatka Championships (India)", frequency: "annual", founded: 1982, region: "India" }, { name: "Hola Mohalla Anandpur Sahib (traditional annual)", frequency: "annual (March)", founded: 1701, region: "Anandpur Sahib, Punjab, India" }, { name: "Punjab State Games (Gatka event since 2020)", frequency: "annual", founded: 2020, region: "Punjab, India" }],
  countriesPlayed: ["IND (dominant — Punjab)", "GBR (Southall + Birmingham diaspora)", "CAN (Brampton + Surrey)", "USA", "MYS", "SGP", "AUS", "worldwide Sikh diaspora"],
  famousAthletes: ["Baba Fateh Singh (Shastar Vidiya lineage master)", "Sadhu Gulab Singh (modern gatka master)", "Gurdev Singh Ranth (WGF founder)", "Multi-time Indian National Champions", "Nihang Singh warrior order (living tradition)"],
  records: [
    { title: "National sport of Punjab since 2020", holder: "Punjab State Government", value: "Gatka officially declared national sport of Punjab state 2020 — first traditional martial art to receive state sport status", year: 2020 },
    { title: "Hola Mohalla continuous since 1701", holder: "Anandpur Sahib Gurdwara", value: "Hola Mohalla (annual Sikh martial festival) held continuously since 1701 by Guru Gobind Singh's decree — one of oldest continuous martial arts festivals worldwide", year: 1701 },
    { title: "First World Championships 2018 Toronto", holder: "World Gatka Federation", value: "First WGF World Gatka Championships held 2018 in Toronto Canada — reflecting large Sikh Canadian population", year: 2018 },
  ],
  variants: ["shastar-vidiya-traditional-combat-form", "modern-sport-gatka-fari-soti", "gatka-demonstration-forms", "nagar-kirtan-processional-gatka"],
  relatedSports: ["kalaripayattu-championship", "silambam-tamil", "kung-fu-wushu", "kobudo-okinawan-weapons"],
  skills: ["Lathi stick fighting technique", "sword + shield combat (Fari-Soti)", "flowing Baaj + Peer patterns", "traditional Kirpan sword forms"],
  wikipediaTitle: "Gatka",
  sources: [{ label: "Wikipedia — Gatka", url: "https://en.wikipedia.org/wiki/Gatka", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default gatkaSikhPunjabi;
