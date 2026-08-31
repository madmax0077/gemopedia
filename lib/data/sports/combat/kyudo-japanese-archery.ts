import type { Sport } from "@/lib/types";

export const kyudoJapaneseArchery: Sport = {
  id: "kyudo-japanese-archery",
  slug: "kyudo-japanese-archery",
  name: "Kyudo (Japanese Zen Archery)",
  officialName: "All Nippon Kyudo Federation (ANKF) — 全日本弓道連盟",
  aliases: ["弓道", "Kyūdō", "Way of the Bow", "Japanese Zen Archery"],
  shortDescription:
    "Japanese traditional archery emphasizing spiritual + technical perfection over target accuracy; uses distinctive 2m+ asymmetric yumi bow; 8-stage 'Hassetsu' shooting form; codified as modern discipline 1949 (ANKF); ~500,000 practitioners worldwide primarily Japan; deeply integrated with Zen Buddhism, samurai heritage, + spiritual cultivation.",
  longDescription:
    "Kyudo (弓道, 'way of the bow') is the traditional Japanese martial art of archery — evolved from ancient samurai battlefield + hunting archery (kyūjutsu) into a modern discipline emphasizing spiritual + technical perfection through refined form. Distinguished from Western archery + Olympic recurve by profound spiritual + aesthetic dimensions: purpose is not merely to hit target, but to achieve 'shin-zen-bi' (truth-goodness-beauty) through perfect form + mental state — the arrow's flight is considered 'a manifestation of the shooter's spirit'. Uses distinctive equipment: (1) Yumi — traditional Japanese longbow ~2-2.3m long, asymmetric (grip 1/3 up from bottom, unlike Western bow's centered grip); made from laminated bamboo + hardwood; (2) Ya — arrow ~85-100cm long with distinctive feather fletching (eagle, hawk, or turkey); (3) Kake — deer-skin shooting glove with reinforced thumb; (4) Matoba — target range 28m distance from firing line (kinteki close-range) or 60m distance (enteki long-range). Signature 'Hassetsu' (八節, '8 stages') shooting form — codified sequence: (1) Ashibumi — foot placement; (2) Dozukuri — body alignment; (3) Yugamae — bow readiness + arrow nocking; (4) Uchiokoshi — bow raising above head; (5) Hikiwake — drawing bow to full extension; (6) Kai — full draw hold; (7) Hanare — arrow release; (8) Zanshin — following-through pose. Each stage precisely defined + judged. Rank system: Kyu levels (6-1 kyu, beginner) then Dan levels (1-10 dan, expert) plus master titles Renshi + Kyoshi + Hanshi. Origins: (1) Ancient Japanese battlefield archery (yumi documented 4th century Kofun period); (2) Samurai training tradition 12th-17th century; (3) Ogasawara-ryu + Heki-ryu schools codified different forms; (4) Modernization + banning after WWII (1945-1949); (5) All Nippon Kyudo Federation (ANKF) founded 1949 formalizing modern discipline; (6) International Kyudo Federation (IKYF) founded 2006. Modern competition + practice includes: (a) Enteki — long-distance 60m; (b) Kinteki — close-range 28m; (c) Yabusame — mounted archery on galloping horse (traditional demonstration); (d) Sharei — ceremonial team shooting. Notable strongholds outside Japan: USA (~5,000 practitioners across ANKF-affiliated dojos), Germany, France, UK, Australia. Notable teachers: Awa Kenzo (subject of Eugen Herrigel's 'Zen in the Art of Archery' 1948 book that internationally popularized Kyudo); Kiyoshi Nakano; Onuma Hideharu.",
  category: "combat-sports",
  subCategory: "Japanese traditional archery — spiritual + technical martial art",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (ancient battlefield archery + samurai tradition; modern form codified 1949)",
  estimatedOrigin: "Ancient Japanese battlefield archery documented 4th century Kofun period; samurai tradition 12th-17th century; modern discipline codified 1949 by ANKF; IKYF founded 2006",
  players: { min: 1, max: 5, note: "Individual practice; team ceremonial (Sharei) uses 5-person team." },
  equipment: [{ name: "Yumi (Japanese asymmetric longbow)", description: "Traditional Japanese longbow ~2-2.3m long; asymmetric with grip 1/3 up from bottom (unlike centered Western bows); laminated bamboo + hardwood construction." }, { name: "Ya (arrows) ~85-100cm", description: "Long arrows ~85-100cm; distinctive feather fletching (eagle, hawk, or turkey); wooden or aluminum + carbon shafts." }, { name: "Kake (shooting glove)", description: "Deer-skin shooting glove with reinforced thumb; supports thumb-draw technique unique to kyudo (vs Western 3-finger draw)." }, { name: "Muneate (chest protector)", description: "Chest protector worn by women + some men to prevent bowstring impact on chest." }, { name: "Hakama + kimono (traditional attire)", description: "Traditional Japanese hakama (pleated pants) + white kimono; formal attire mandatory in most dojos + competitions." }, { name: "Matoba (target)", description: "Circular paper target 36cm diameter with concentric rings; placed at 28m (kinteki) or 60m (enteki) distance from firing line." }],
  duration: { approximateMinutes: 60, structure: "Practice session 60-180 min; competition round 8-20 arrows; ceremonial Sharei team shoot ~10 min." },
  objective: "Achieve 'shin-zen-bi' (truth-goodness-beauty) through perfect Hassetsu 8-stage shooting form + mental state; secondary: hit target.",
  matchStructure: "Individual competition: fixed number of arrows scored on target hits + form quality. Team Sharei: 5-person team shoots ceremonially with each member contributing.",
  basicRules: [
    { title: "Hassetsu 8-stage form must be followed precisely", body: "Every shot must follow 8 codified stages: Ashibumi, Dozukuri, Yugamae, Uchiokoshi, Hikiwake, Kai, Hanare, Zanshin — form quality often weighted equal to accuracy." },
    { title: "Thumb draw technique (not Western 3-finger)", body: "Draw uses thumb + index finger with kake glove for thumb protection — completely different from Western 3-finger draw." },
    { title: "Form + spiritual state weighted alongside accuracy", body: "Ranking + judging considers form execution + mental composure ('mushin' no-mind state) alongside physical target hits — 'shin-zen-bi' philosophy." },
    { title: "Traditional attire (hakama + kimono) mandatory", body: "Formal traditional Japanese attire (hakama pleated pants + white kimono) mandatory in most dojos + all competitions." },
    { title: "Ceremonial silence + bows preceding shots", body: "Precise ritual bows to teacher + kamiza (shrine) + target precede all formal shoots; ceremonial silence maintained throughout." },
  ],
  scoring: { summary: "Combined scoring: target hits (1 pt each) + form execution quality (judged 0-10 by masters) + zanshin (follow-through pose) held for count.", winCondition: "Highest combined target + form score across specified number of arrows (typically 8-20 in competition)." },
  positions: [{ name: "Kyudoka (Kyudo practitioner)", role: "Sole competitor.", count: 1 }, { name: "Sensei (Teacher)", role: "Master instructor + form corrector.", count: 1 }, { name: "Sharei team (5 members)", role: "Ceremonial team shooting formation.", count: 5 }],
  officiating: { officials: ["Chief Judge (Shinsain)", "Form Judges (multiple)", "Target Judge (Shitaba)", "Ceremony Master"], summary: "ANKF certified judges (Renshi/Kyoshi/Hanshi ranks) at official competitions." },
  governingBodies: [{ name: "All Nippon Kyudo Federation (ANKF)", founded: 1949, headquarters: "Tokyo, Japan" }, { name: "International Kyudo Federation (IKYF)", founded: 2006, headquarters: "Tokyo, Japan" }, { name: "American Kyudo Renmei (AKR)", founded: 1993, headquarters: "USA" }, { name: "European Kyudo Federation (EKF)", founded: 1980, headquarters: "Europe" }],
  majorCompetitions: [{ name: "All-Japan Kyudo Championships", frequency: "annual", founded: 1953, region: "Japan" }, { name: "World Kyudo Championships", frequency: "quadrennial", founded: 2010, region: "rotating international" }, { name: "European Kyudo Federation Seminars + Championships", frequency: "annual", founded: 1984, region: "rotating Europe" }, { name: "Yabusame ceremonial exhibitions (Kamakura + Tsurugaoka Hachimangu)", frequency: "annual (September)", founded: 1187, region: "Kamakura, Japan" }],
  countriesPlayed: ["JPN (dominant + origin)", "USA (~5,000 practitioners)", "DEU (largest European scene)", "FRA", "GBR", "AUS", "CAN", "worldwide 40+ IKYF member federations"],
  famousAthletes: ["Awa Kenzo (subject of Eugen Herrigel's Zen in the Art of Archery — famous Japanese teacher 1900s)", "Kiyoshi Nakano (post-war grandmaster)", "Onuma Hideharu (grandmaster + writer)", "Various contemporary Hanshi 10th dan grandmasters"],
  records: [
    { title: "All Nippon Kyudo Federation founded 1949", holder: "ANKF", value: "All Nippon Kyudo Federation founded 1949 in Tokyo — codified modern kyudo discipline after WWII banning + rebirth", year: 1949 },
    { title: "'Zen in the Art of Archery' book internationally popularized 1948", holder: "Eugen Herrigel (German philosopher)", value: "Eugen Herrigel's 1948 book 'Zen in the Art of Archery' documenting his training with Awa Kenzo internationally popularized Kyudo + its philosophical dimensions", year: 1948 },
    { title: "First World Kyudo Championships 2010 Tokyo", holder: "International Kyudo Federation", value: "First World Kyudo Championships held 2010 in Tokyo (IKYF founded 2006) — formalized international competitive tradition", year: 2010 },
  ],
  variants: ["kinteki-close-range-28m-standard", "enteki-long-range-60m", "yabusame-mounted-archery-horseback", "sharei-ceremonial-team-shooting", "kudo-tanshaku-short-arrow-modified"],
  relatedSports: ["archery-target", "olympic-archery-recurve", "compound-archery", "iaido-japanese-sword"],
  skills: ["Hassetsu 8-stage form mastery", "thumb-draw technique with kake glove", "mushin (no-mind) mental composure", "zanshin follow-through pose"],
  wikipediaTitle: "Kyūdō",
  sources: [{ label: "Wikipedia — Kyūdō", url: "https://en.wikipedia.org/wiki/Ky%C5%ABd%C5%8D", publisher: "Wikipedia" }, { label: "International Kyudo Federation", url: "https://www.ikyf.org", publisher: "IKYF" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default kyudoJapaneseArchery;
