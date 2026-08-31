import type { Sport } from "@/lib/types";

export const muayBoranAncientThai: Sport = {
  id: "muay-boran-ancient-thai",
  slug: "muay-boran-ancient-thai",
  name: "Muay Boran (Ancient Thai Boxing)",
  officialName: "World Muaythai Council — Muay Boran Division",
  aliases: ["มวยโบราณ", "Ancient Muay", "Traditional Thai Boxing", "Muay Chaiya", "Muay Korat"],
  shortDescription:
    "Ancient parent art of modern Muay Thai — traditional Thai battlefield martial art centuries old featuring elbow strikes, knee strikes, throws, headbutts, and joint locks banned in modern sport Muay Thai; four regional styles Muay Chaiya, Muay Korat, Muay Lopburi, Muay Thasao; revived cultural + demonstration art; core of Thai national identity + Tony Jaa films.",
  longDescription:
    "Muay Boran (มวยโบราณ, 'ancient boxing') is the parent martial art from which modern sport Muay Thai descended — the traditional Thai battlefield fighting art dating back centuries in Siamese (Thai) military tradition. Distinguished from modern Muay Thai by inclusion of full arsenal of dangerous techniques banned in the modern sport: headbutts, elbow strikes to any target, knee strikes to head from clinch, throws + takedowns, joint locks, and 'nakkarat' (execution-style finishing techniques). Four regional styles preserve distinct heritage: (1) Muay Chaiya — southern Thailand (Chaiya province Surat Thani); defensive counter-focused with tight guard + precise elbow strikes; considered most technical; masters include Pinang + Kate Prayong; (2) Muay Korat — northeastern Thailand (Isan region); powerful straight punches like 'Man Whan' (throwing punch); Buffalo-swing knee attacks; (3) Muay Lopburi — central Thailand; clever + tricky style with fakes + deception; emphasis on hitting from angles; (4) Muay Thasao — northern Thailand (Uttaradit); fast + agile with jumping attacks. Traditional pre-fight rituals: (a) 'Wai Kru' — bowing to teacher + ancestors; (b) 'Ram Muay' — pre-fight dance representing fighter's style + heritage; (c) 'Mongkol' — sacred headband worn during Wai Kru + removed for fight; (d) 'Prajioud' — armband amulets tied around biceps; (e) 'Sarama' — traditional music (pi chawa + klong khaek drums) played throughout fight. Modernization: (1) Late 19th century King Rama V codified competitive form leading to modern Muay Thai; (2) 1929 rope-bound-hands replaced by boxing gloves; (3) Modern sport Muay Thai limits techniques for safety + international appeal; (4) Muay Boran preserved by traditional families + demonstration schools. Revival: (a) 2000s Tony Jaa films (Ong-Bak 2003, Warrior King 2005) internationally popularized authentic Muay Boran techniques + cultural context; (b) World Muaythai Council added Muay Boran demonstration division 2010s; (c) UNESCO Intangible Cultural Heritage recognition being pursued by Thailand. Notable teachers + preservers: Kruu Panya Kraitus (Muay Chaiya master), Ajahn Woody (Chaiya lineage), Kruu Praeng (Muay Korat master). Growing international academic + practical study — schools in USA, UK, France, Australia teaching alongside modern MMA.",
  category: "combat-sports",
  subCategory: "ancient traditional Thai battlefield martial art (parent of modern Muay Thai)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "TH",
  regionOfOrigin: "Thailand (Siamese kingdom — centuries-old military tradition; 4 regional styles across country)",
  estimatedOrigin: "Centuries-old Thai battlefield tradition; King Rama V codified competitive form late 1800s; modern sport Muay Thai diverged 1929; Muay Boran preserved by traditional families + demonstration schools",
  players: { min: 1, max: 2, note: "Solo forms + partner drills + demonstration bouts." },
  equipment: [{ name: "Rope-bound hand wraps (traditional)", description: "Traditional 'kard chuek' — hemp rope wrapped around hands + wrists; caused significant cutting damage; replaced by modern gloves 1929." }, { name: "Boxing gloves (modern demonstration)", description: "Modern demonstration bouts use standard boxing gloves for safety while preserving traditional techniques." }, { name: "Mongkol (sacred headband)", description: "Sacred braided headband worn during pre-fight Wai Kru ritual; blessed by monks + master." }, { name: "Prajioud (armband amulets)", description: "Sacred armbands tied around biceps; worn throughout fight for spiritual protection." }, { name: "Traditional shorts + sash", description: "Traditional Thai shorts + optional waist sash; specific colors/designs vary by regional style + camp." }],
  duration: { approximateMinutes: 30, structure: "Traditional bouts historically fought until knockout or exhaustion (hours possible); modern demonstration 3×3 min rounds; forms + Ram Muay 60-90 sec." },
  objective: "Demonstrate mastery of authentic traditional Thai battlefield techniques; competition (rare) scored on execution + strategy + cultural authenticity.",
  matchStructure: "Modern demonstration: 3-5 rounds of light-contact sparring or forms performance; historical: fought until decisive result.",
  basicRules: [
    { title: "Full arsenal including elbows to face + knees to head + throws + locks", body: "Muay Boran includes all techniques banned in modern Muay Thai: elbow strikes to any target, knee strikes to head from clinch, throws, joint locks, headbutts." },
    { title: "Pre-fight Wai Kru + Ram Muay mandatory", body: "Traditional pre-fight ritual bowing (Wai Kru) + individual style dance (Ram Muay) precedes all traditional bouts; identifies fighter's lineage." },
    { title: "Sarama traditional music throughout", body: "Traditional Thai music (pi chawa flute + klong khaek drums) plays throughout fight; sets rhythm + honors tradition." },
    { title: "Regional style must be identifiable in technique", body: "Traditional demonstrations must show identifiable regional style (Chaiya, Korat, Lopburi, or Thasao); judges evaluate style authenticity." },
    { title: "Mongkol removed only for fight itself", body: "Sacred headband worn during Wai Kru + Ram Muay; removed by master corner before fight begins; replaced after fight." },
  ],
  scoring: { summary: "Demonstration competitions scored on: technical authenticity + cultural performance + execution + strategy; not typically point-scored like modern sport.", winCondition: "Traditional: knockout or exhaustion. Modern demonstration: judge decision based on cultural authenticity + technique." },
  positions: [{ name: "Nak Muay Boran (Ancient Boxer)", role: "Sole competitor.", count: 1 }, { name: "Kruu (Master Teacher)", role: "Corner master + Wai Kru ritual conductor.", count: 1 }],
  officiating: { officials: ["Traditional Master (senior)", "Ritual Judge", "Technical Judge"], summary: "Traditional demonstrations judged by senior masters; modern WMC + IFMA judges at organized events." },
  governingBodies: [{ name: "World Muaythai Council (WMC) — Muay Boran Division", founded: 1995, headquarters: "Bangkok, Thailand" }, { name: "International Federation of Muaythai Amateur (IFMA)", founded: 1993, headquarters: "Bangkok, Thailand" }, { name: "Traditional Kruu (Master) lineages (informal preservation)", founded: 1900, headquarters: "Thailand — regional families" }],
  majorCompetitions: [{ name: "World Muay Boran Championships (demonstration)", frequency: "annual", founded: 2010, region: "Bangkok, Thailand" }, { name: "Traditional Regional Style Championships", frequency: "annual (regional)", founded: 1980, region: "Regional Thailand" }, { name: "Wai Kru Muay Thai Ceremony (Ayutthaya annual)", frequency: "annual (March)", founded: 2005, region: "Ayutthaya, Thailand — mass ceremony 1,000+ practitioners" }],
  countriesPlayed: ["THA (origin + dominant)", "USA", "GBR", "FRA", "AUS", "DEU", "worldwide via Muay Thai gyms teaching Boran heritage"],
  famousAthletes: ["Kruu Panya Kraitus (Muay Chaiya master + preserver)", "Ajahn Woody (Chaiya lineage master)", "Kruu Praeng (Muay Korat master)", "Tony Jaa (film actor + Muay Boran popularizer)", "Buakaw Banchamek (Muay Thai star with strong Boran fundamentals)"],
  records: [
    { title: "Parent art of modern Muay Thai (centuries old)", holder: "Thai national tradition", value: "Muay Boran is direct parent art from which modern sport Muay Thai descended — centuries-old Thai military tradition with 4 preserved regional styles", year: 1900 },
    { title: "Tony Jaa films 2000s popularized internationally", holder: "Tony Jaa + Sahamongkol Film International", value: "Tony Jaa's Ong-Bak (2003) + Warrior King (2005) films internationally popularized authentic Muay Boran techniques + Thai cultural context — massive impact on modern awareness", year: 2005 },
    { title: "4 regional styles preserved: Chaiya, Korat, Lopburi, Thasao", holder: "Traditional Thai families", value: "Four distinct regional Muay Boran styles preserved by traditional families: Muay Chaiya (south), Muay Korat (northeast), Muay Lopburi (central), Muay Thasao (north)", year: 2024 },
  ],
  variants: ["muay-chaiya-southern-defensive-technical", "muay-korat-northeastern-power-buffalo-swing", "muay-lopburi-central-clever-deceptive", "muay-thasao-northern-fast-jumping-attacks", "modern-muay-thai-sport-descendant"],
  relatedSports: ["muay-thai", "lethwei-burmese-bareknuckle", "pradal-serey-cambodian-boxing", "silat-indonesian-martial-art"],
  skills: ["rope-hand technique preservation", "regional style identification + performance", "clinch throws + elbow strikes", "traditional Wai Kru + Ram Muay performance"],
  wikipediaTitle: "Muay boran",
  sources: [{ label: "Wikipedia — Muay boran", url: "https://en.wikipedia.org/wiki/Muay_boran", publisher: "Wikipedia" }, { label: "World Muaythai Council", url: "https://wmcmuaythai.org", publisher: "WMC" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default muayBoranAncientThai;
