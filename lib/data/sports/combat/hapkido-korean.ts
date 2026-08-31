import type { Sport } from "@/lib/types";

export const hapkidoKorean: Sport = {
  id: "hapkido-korean",
  slug: "hapkido-korean",
  name: "Hapkido (Korean Self-Defense)",
  officialName: "Korea Hapkido Federation (KHF) — 대한합기도협회",
  aliases: ["합기도", "Way of Coordinated Energy", "Korean Aikido"],
  shortDescription:
    "Korean self-defense martial art founded 1948 by Choi Yong-sool combining Daito-ryu Aiki-jujutsu (learned in Japan) with Korean kicking traditions; features joint locks, throws, striking, weapon defense; 3 principles Hwa (harmony) + Won (circle) + Yu (flow); ~3 million practitioners worldwide across 100+ countries.",
  longDescription:
    "Hapkido (합기도, hangul spelling; literally 'way of coordinated energy') is a Korean self-defense martial art founded 1948 by Choi Yong-sool (1904-1986) — who had trained extensively in Japan under Takeda Sokaku (grandmaster of Daitō-ryū Aiki-jūjutsu, the same art that later gave rise to Aikido). Choi returned to Korea after WWII + synthesized Japanese joint-lock + throw techniques with Korean kicking traditions (particularly from Taekkyon), later adding weapon techniques + striking to create a comprehensive self-defense system. Distinctive from other Korean martial arts (Taekwondo, Tang Soo Do) which emphasize competition sport striking — Hapkido remains primarily a practical self-defense system without significant tournament sparring emphasis. Core principles: (1) Hwa (harmony) — blending with attacker's force rather than opposing; (2) Won (circle) — using circular movement to redirect + generate force; (3) Yu (flow) — continuous fluid technique without break. Techniques comprehensive: (a) Joint locks — wrist locks, arm bars, shoulder locks, finger locks; (b) Throws — hip throws, sweeps, sacrifice throws; (c) Ground control + submissions; (d) Kicks — spinning kicks, jumping kicks, low kicks (heavier Korean influence than Aikido); (e) Punches + hand strikes; (f) Weapon techniques — cane (Ji Pang I), short stick, sword, rope, belt, pen; (g) Weapon disarms — knife defense, gun defense (advanced). Belt ranks: white → yellow → orange → green → blue → red → 1st-9th dan black belt. Notable early spread: (1) 1950s Korea via Choi's original dojang (school); (2) 1960s US military stationed Korea learned Hapkido, brought to USA; (3) 1970s ubiquitous Korean immigration spread globally; (4) 1970s-80s starred in Bruce Lee films (Bruce trained briefly with Hapkido master Han Bong-soo) + Chuck Norris movies. Multiple governing bodies (major schism): (a) Korea Hapkido Federation (KHF) — founded 1965, largest; (b) International Hapkido Federation (Han Bong-soo lineage); (c) Combat Hapkido (John Pellegrini USA modernized branch); (d) Sin Moo Hapkido (Ji Han-jae founder branch); (e) Kuk Sool Won (In Hyuk Suh — sometimes considered Hapkido cousin). Estimated 3+ million practitioners worldwide across 100+ countries. Notable masters: (i) Choi Yong-sool (founder); (ii) Ji Han-jae (student who globalized; taught Bruce Lee); (iii) Han Bong-soo (founder Han's Hapkido USA); (iv) Kim Yun-sang (former KHF president); (v) Lim Hyun-soo (grandmaster).",
  category: "combat-sports",
  subCategory: "Korean self-defense martial art with joints + throws + kicks",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "South Korea (founded 1948 by Choi Yong-sool — combining Daito-ryu Aiki-jujutsu Japan + Korean kicking)",
  estimatedOrigin: "Founded 1948 by Choi Yong-sool in Daegu Korea; synthesized Daito-ryu Aiki-jujutsu (Japan) with Korean kicking; Korea Hapkido Federation founded 1965; globalized 1970s via US military + Korean immigration",
  players: { min: 1, max: 2, note: "Solo forms + partner drills + self-defense scenarios." },
  equipment: [{ name: "Dobok (Korean martial arts uniform)", description: "White cotton uniform similar to karategi + jujutsu-gi; some schools use black or blue upper for advanced ranks." }, { name: "Belt ranking system (white through 9th dan black)", description: "10 kup (color) ranks below black belt + 9 dan levels above; visible ranking system." }, { name: "Traditional weapons (cane, short stick, sword, rope)", description: "Advanced students train with traditional weapons: Ji Pang I (cane), Dan Bong (short stick), Kum (sword), Po Bak (rope)." }, { name: "Training mats (padded)", description: "Padded training mats for throws + falls; essential for joint-lock + throw practice." }],
  duration: { approximateMinutes: 90, structure: "Class 60-120 min; belt tests 60-180 min; demonstrations 60-90 sec routines." },
  objective: "Master comprehensive self-defense system integrating joints + throws + strikes + weapon defense; belt promotion via technical demonstration.",
  matchStructure: "Traditional class + belt promotion tests; no significant tournament sparring scene unlike Taekwondo; some schools run self-defense demonstrations + limited grappling competitions.",
  basicRules: [
    { title: "3 principles: Hwa (harmony) + Won (circle) + Yu (flow)", body: "Foundational principles applied to all techniques: blend with attacker's force (Hwa), use circular redirection (Won), maintain continuous flow (Yu)." },
    { title: "Comprehensive self-defense — no single dominant technique", body: "Hapkido emphasizes balanced curriculum of joints + throws + strikes + kicks + weapon defense; no single specialty (unlike Judo's throws or Taekwondo's kicks)." },
    { title: "Belt promotion via technical demonstration", body: "Rank advancement requires demonstrating specific techniques + forms + self-defense scenarios before qualified panel; no competitive scoring like Judo shiai." },
    { title: "Weapon training standard curriculum", body: "Traditional weapons (cane, short stick, sword, rope) part of curriculum from mid-color-belt levels + emphasized at black belt." },
    { title: "Multiple governing bodies (schism-tolerant)", body: "Hapkido has multiple governing bodies (KHF, IHF, Combat Hapkido, Sin Moo Hapkido) — practitioners generally accept multi-lineage nature." },
  ],
  scoring: { summary: "Traditional belt promotion scored via technical demonstration; competitive elements (rare) score self-defense scenario responses or forms performance.", winCondition: "Belt promotion: demonstrate techniques to satisfaction of promotion panel." },
  positions: [{ name: "Hapkidoin (Hapkido practitioner)", role: "Sole competitor/practitioner.", count: 1 }, { name: "Kwan Jang Nim (Grandmaster)", role: "Highest-ranked teacher supervising promotions.", count: 1 }, { name: "Sabom Nim (Master Teacher)", role: "Head instructor of dojang.", count: 1 }],
  officiating: { officials: ["Promotion Panel (3-5 Masters)", "Traditional Ceremony Master", "Rank Recorder"], summary: "KHF certified masters conduct belt promotions; multiple governing bodies recognized." },
  governingBodies: [{ name: "Korea Hapkido Federation (KHF)", founded: 1965, headquarters: "Seoul, South Korea" }, { name: "International Hapkido Federation (Han Bong-soo lineage)", founded: 1974, headquarters: "USA" }, { name: "Combat Hapkido (John Pellegrini USA)", founded: 1990, headquarters: "USA" }, { name: "Sin Moo Hapkido (Ji Han-jae founder)", founded: 1980, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "Korea Hapkido Federation National Championships", frequency: "annual", founded: 1968, region: "South Korea" }, { name: "World Hapkido Championships (KHF)", frequency: "biennial", founded: 1980, region: "rotating international" }, { name: "US Open Hapkido Championships", frequency: "annual", founded: 1985, region: "USA" }],
  countriesPlayed: ["KOR (origin + dominant)", "USA (major diaspora)", "CAN", "GBR", "AUS", "DEU", "FRA", "BRA", "MEX", "worldwide 100+ countries"],
  famousAthletes: ["Choi Yong-sool (founder; 1904-1986)", "Ji Han-jae (student who globalized; taught Bruce Lee)", "Han Bong-soo (founder Han's Hapkido USA)", "Kim Yun-sang (former KHF president)", "Lim Hyun-soo (grandmaster)", "John Pellegrini (Combat Hapkido founder USA)"],
  records: [
    { title: "Founded 1948 by Choi Yong-sool", holder: "Choi Yong-sool (founder)", value: "Hapkido founded 1948 by Choi Yong-sool in Daegu, Korea — synthesized Daito-ryu Aiki-jujutsu (learned under Takeda Sokaku Japan) with Korean kicking traditions", year: 1948 },
    { title: "Bruce Lee trained briefly under Ji Han-jae", holder: "Ji Han-jae + Bruce Lee", value: "Bruce Lee trained briefly under Hapkido master Ji Han-jae; Ji appeared in Lee's Game of Death (1972) — helped globalize Hapkido awareness", year: 1972 },
    { title: "~3 million practitioners worldwide 100+ countries", holder: "Global Hapkido community", value: "Estimated 3+ million Hapkido practitioners worldwide across 100+ countries — one of largest Korean martial arts globally", year: 2024 },
  ],
  variants: ["khf-korea-hapkido-federation-mainstream", "sin-moo-hapkido-ji-han-jae-branch", "combat-hapkido-modernized-john-pellegrini", "hankido-modern-korean-derivative", "kuk-sool-won-cousin-korean-martial-art"],
  relatedSports: ["aikido-japanese", "jiu-jitsu-brazilian", "judo", "taekwondo", "krav-maga"],
  skills: ["joint lock technique (wrist + arm + shoulder)", "circular redirection (using attacker's force)", "throwing + sweeping technique", "weapon defense + disarms"],
  wikipediaTitle: "Hapkido",
  sources: [{ label: "Wikipedia — Hapkido", url: "https://en.wikipedia.org/wiki/Hapkido", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default hapkidoKorean;
