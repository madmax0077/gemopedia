import type { Sport } from "@/lib/types";

export const palioHorsebackArchery: Sport = {
  id: "palio-horseback-archery",
  slug: "palio-horseback-archery",
  name: "Horseback Archery (Yabusame + IHAA)",
  officialName: "International Horseback Archery Alliance (IHAA)",
  aliases: ["Mounted Archery", "Yabusame (Japanese)", "Kyudo Yabusame", "Mounted Bow"],
  shortDescription:
    "Ancient equestrian sport combining archery + horseback riding — shooting arrows at targets while riding at gallop; multiple traditions: Japanese Yabusame (ceremonial, 12th century), Hungarian Lajos Kassai method (revived 1980s), Korean Gungdo, Turkish/Mongolian traditions; IHAA World Championships biennial since 2008.",
  longDescription:
    "Horseback Archery (Mounted Archery) is one of the oldest sports in the world — practiced by virtually every horse-riding culture historically (Scythian, Parthian, Mongolian, Turkic, Persian, Korean, Japanese) — where archers shoot arrows at stationary or moving targets while riding at gallop. Multiple distinct competitive + ceremonial traditions preserved: (1) Japanese Yabusame (流鏑馬) — ceremonial Shinto tradition dating to 1187 CE, formal courtly ritual + still practiced at Kamakura Tsurugaoka Hachimangu Shrine annually + Nikko + Meiji Shrine; ridden at gallop shooting 3 sequential wooden targets on 218m track using traditional daikyū bow; formal courtly costume required. (2) Hungarian Kassai Method — modern revival by Lajos Kassai (Hungary, 1980s+) as sport form; 99m track with target at midpoint; scored by count of arrows shot + hits during single pass; standardized rules; largest global federation base. (3) Korean Gungdo Yabusame — Traditional Korean mounted archery, revived 1990s+ by Korean Traditional Archery Association. (4) Turkish + Mongolian traditions — practiced at Nadaam Games (Mongolia, annual). Modern global sport competitive tradition governed by International Horseback Archery Alliance (IHAA, founded 2003) + World Horseback Archery Federation (WHAF, founded 2008). IHAA World Championships biennial since 2008 (recent: South Korea 2018, Hungary 2020, Turkey 2022, Iran 2024). Strongholds: Korea (dominant), Hungary, Iran, Mongolia, Turkey, Japan (ceremonial), USA. Signature difficulty: shooting at gallop requires huge core stability + arrow-shot timing to horse's rhythm.",
  category: "precision-sports",
  subCategory: "mounted archery (ancient equestrian sport)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "MN",
  regionOfOrigin: "Central Asia (Scythian/Mongolian origins ~1000 BCE); modern sport codified Hungary 1980s+",
  estimatedOrigin: "Ancient Central Asian horse-archer traditions ~1000 BCE; Japanese Yabusame 1187 CE; Kassai Hungarian revival 1980s; IHAA founded 2003",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Traditional recurve bow (composite or wood)", description: "Yabusame uses daikyū (longbow); Kassai uses Hungarian recurve; Korean gakgung; Mongolian composite." }, { name: "Bamboo/wood arrows (traditional)", description: "Traditional wooden or bamboo arrows; not modern carbon; ceremonial versions have wooden turnip-heads." }, { name: "Trained horse (Central Asian breed / Anglo-Arab)", description: "Horse trained for gallop-stability + not spook at bow-draw + arrow-loose." }, { name: "Traditional saddle + attire", description: "Yabusame: Kamakura-era hunting costume; Kassai + modern: sport-modern archery clothing + safety." }, { name: "Track + targets", description: "Yabusame: 218m track + 3 wooden targets; Kassai: 99m + central target; Korean: 260m + 5 targets." }],
  duration: { approximateMinutes: 1, structure: "Single pass ~15-25 seconds at gallop; competition = multiple passes over hours." },
  objective: "Yabusame: hit all 3 sequential targets. Kassai: hit central target + shoot maximum arrows in single pass. Korean: hit maximum targets in sequence.",
  matchStructure: "Multi-pass event; scoring accumulates over qualifying + finals rounds.",
  basicRules: [
    { title: "Shoot at gallop only", body: "Arrows must be shot while horse at gallop; walking/trotting not permitted in competition." },
    { title: "Reins may only be held with left hand OR mouth", body: "Bow requires both hands — reins held via left hand while drawing OR held in mouth (traditional Yabusame technique)." },
    { title: "Yabusame: 3 sequential targets 218m track", body: "3 wooden targets spaced along 218m track; hit all 3 = 'inatani' full success." },
    { title: "Kassai: 99m course with central target", body: "Central target + count of arrows shot during single pass; scored by hits + arrow count." },
  ],
  scoring: { summary: "Hits × difficulty × pass count; competition-specific scoring formulas.", winCondition: "Highest score across passes." },
  positions: [{ name: "Horseback archer (competitor)", role: "Sole rider-archer.", count: 1 }, { name: "Ground crew (target replacement + horse handler)", role: "Between-pass support.", count: 2 }],
  officiating: { officials: ["Chief Judge", "Track Judges", "Target Judges", "Timekeeper"], summary: "IHAA/WHAF certified officials." },
  governingBodies: [{ name: "International Horseback Archery Alliance (IHAA)", founded: 2003, headquarters: "worldwide (multi-national board)" }, { name: "World Horseback Archery Federation (WHAF)", founded: 2008, headquarters: "Korea" }, { name: "Ogasawara Ryu (traditional Yabusame lineage)", founded: 1187, headquarters: "Kamakura, Japan" }, { name: "Kassai Archery Association (Hungarian sport form)", founded: 1985, headquarters: "Kaposmérő, Hungary" }],
  majorCompetitions: [{ name: "IHAA World Horseback Archery Championship", frequency: "biennial", founded: 2008, region: "rotating (Korea, Hungary, Turkey, Iran)" }, { name: "Yabusame Shinto ceremonies (Kamakura, Nikko, Meiji)", frequency: "annual", founded: 1187, region: "Japan" }, { name: "Nadaam Games — Mongolian Mounted Archery", frequency: "annual (July 11-13)", founded: 1206, region: "Ulaanbaatar, Mongolia" }, { name: "Kassai World Cup", frequency: "annual", founded: 1990, region: "Hungary + international" }],
  countriesPlayed: ["KOR (dominant)", "HUN", "IRN", "MNG", "TUR", "JPN (ceremonial)", "USA", "GER", "AUT", "ITA"],
  famousAthletes: ["Lajos Kassai (HUN — modern revival founder 1985)", "Kim Young Sook (KOR — women's world champion)", "Jae-Wook Lee (KOR — men's world champion)", "Yabusame masters of Ogasawara Ryu lineage (Japan)"],
  records: [
    { title: "Yabusame practiced since 1187 CE", holder: "Ogasawara Ryu (traditional Japan)", value: "Japanese Yabusame formalized 1187 CE by Ogasawara Ryu lineage during Kamakura shogunate; continuously practiced ~840 years", year: 1187 },
    { title: "Kassai method revived 1985 Hungary", holder: "Lajos Kassai (HUN)", value: "Modern sport horseback archery revived by Lajos Kassai in Hungary 1985; established modern global framework", year: 1985 },
    { title: "IHAA World Championship since 2008", holder: "International Horseback Archery Alliance", value: "First IHAA World Championship 2008 in Korea; biennial since", year: 2008 },
  ],
  variants: ["yabusame-japanese-ceremonial", "kassai-hungarian-sport", "korean-gungdo-mounted", "mongolian-traditional-naadam", "turkish-tirendaz-tradition", "modern-ihaa-sport-3-shot-standard"],
  relatedSports: ["archery-recurve-target", "kyudo-japanese", "buzkashi-afghan", "polo"],
  skills: ["horse-galloping stability + rhythm reading", "no-look reins (mouth or single-hand)", "quick arrow-nock at gallop", "core stability during gallop-turn"],
  wikipediaTitle: "Mounted archery",
  sources: [{ label: "Wikipedia — Mounted archery", url: "https://en.wikipedia.org/wiki/Mounted_archery", publisher: "Wikipedia" }, { label: "Wikipedia — Yabusame", url: "https://en.wikipedia.org/wiki/Yabusame", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default palioHorsebackArchery;
