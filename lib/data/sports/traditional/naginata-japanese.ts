import type { Sport } from "@/lib/types";

export const naginataJapanese: Sport = {
  id: "naginata-japanese",
  slug: "naginata-japanese",
  name: "Naginata (Japanese Polearm Martial Art)",
  officialName: "All Japan Naginata Federation (Zen Nihon Naginata Renmei — ZNNR)",
  aliases: ["Atarashii Naginata (modern sport)", "Naginatajutsu (classical)", "薙刀"],
  shortDescription:
    "Traditional Japanese martial art using naginata (polearm with curved blade) — historically wielded by samurai class + specifically by women of samurai class (onna-bugeisha); modern sport form Atarashii Naginata created 1955; INF World Championships since 1995; disciplines include Engi (form) + Shiai (sparring).",
  longDescription:
    "Naginata (薙刀) is a traditional Japanese martial art using the naginata — a polearm weapon consisting of a wooden shaft (~2.1-2.4m) topped with a curved single-edged blade (~30-60cm). Historical origins ~9th century Heian period; widely used by samurai class in warfare through Sengoku era (1467-1615). Particularly associated with women of samurai class (onna-bugeisha / 女武芸者) who wielded the naginata as their primary martial weapon — the naginata's reach advantage neutralized male strength/size differences; historical female warriors include Hangaku Gozen (12th c) + Tomoe Gozen (12th c) + Nakano Takeko (Boshin War 1868). Modern sport form: Atarashii Naginata ('New Naginata') was systematized 1955 by the All Japan Naginata Federation (Zen Nihon Naginata Renmei — ZNNR, founded 1955) merging traditional koryū schools + kendo-influenced modern sport structure. Modern equipment: naginata with rattan blade (shinai-naginata for sparring) or wooden blade (bokuto-naginata for kata); protective bogu armor identical to kendo but with additional shin guards (sune-ate). Two disciplines: (1) Engi (演技) — formal kata performed in pairs; judged on precision + spirit; (2) Shiai (試合) — sparring bouts with 3 legal targets: men (face-mask), kote (wrists), do (torso), tsuki (throat thrust), sune (shins — unique to naginata). Overwhelming majority of modern practitioners are women (~90%+) — modern practice inherits female samurai legacy. Governed by ZNNR + International Naginata Federation (INF, founded 1990). INF World Championships biennial since 1995; strong Japan (dominant), USA, Belgium, France, Germany, Sweden, Canada participation. Also included in All-Japan Interhigh School Championships + University championships.",
  category: "traditional-cultural-sports",
  subCategory: "Japanese polearm martial art (women's samurai tradition)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Heian period ~9th century origins; Atarashii Naginata systematized 1955)",
  estimatedOrigin: "Classical naginatajutsu ~9th c Heian; samurai warfare through Sengoku 1467-1615; Atarashii Naginata modern sport 1955; INF 1990",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Shinai-naginata (rattan blade for sparring)", description: "Sparring weapon with rattan blade (~2.1m total); safety-approved for shiai." }, { name: "Bokuto-naginata (wooden blade for kata)", description: "Wooden training weapon for kata + engi practice." }, { name: "Bogu armor (kendo-style + sune-ate shin guards)", description: "Full protective armor: men (face mask), do (torso), kote (wrists), sune-ate (shins — naginata-specific)." }, { name: "Traditional keikogi + hakama uniform", description: "White keikogi top + black/navy hakama pleated pants." }],
  duration: { approximateMinutes: 5, structure: "Shiai bout: 3-5 min OR first to 2 ippons; Engi kata: 5-7 min performance." },
  objective: "Shiai: score 2 ippons (clean strikes) faster than opponent. Engi: highest form/kata score.",
  matchStructure: "Bracketed elimination; ippon = clean strike + kiai (spirit shout) + zanshin (follow-through).",
  basicRules: [
    { title: "5 legal target strikes: men/kote/do/tsuki/sune", body: "Men (face), Kote (wrist), Do (torso), Tsuki (throat thrust), Sune (shins — unique to naginata among Japanese martial arts)." },
    { title: "Ippon requires kiai + zanshin", body: "Clean strike must be accompanied by shouted kiai + follow-through/spirit demonstration (zanshin) to score." },
    { title: "Two ippons wins bout", body: "First competitor to score 2 ippons wins; if 1-1 at time = extension (encho)." },
    { title: "Etiquette + bowing strictly enforced", body: "Standing bow (ritsurei) + kneeling bow (zarei) required at start + end; disrespect = warning/DQ." },
  ],
  scoring: { summary: "Shiai: ippon (clean strike) count; Engi: 5-judge kata scoring 0-10.", winCondition: "Shiai: 2 ippons. Engi: highest kata score." },
  positions: [{ name: "Naginata practitioner (Naginataka)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Referee (Shushin)", "2 Corner Judges (Fukushin)", "Timekeeper", "Chief Arbiter"], summary: "ZNNR/INF certified officials — 3-referee panel." },
  governingBodies: [{ name: "All Japan Naginata Federation (Zen Nihon Naginata Renmei — ZNNR)", founded: 1955, headquarters: "Tokyo, Japan" }, { name: "International Naginata Federation (INF)", founded: 1990, headquarters: "Tokyo, Japan" }],
  majorCompetitions: [{ name: "INF World Naginata Championships", frequency: "biennial", founded: 1995, region: "rotating (Japan dominant; also USA + Belgium + France)" }, { name: "All Japan Naginata Championships", frequency: "annual", founded: 1955, region: "Japan (rotating cities)" }, { name: "All Japan Inter-High School Naginata Championships", frequency: "annual", founded: 1960, region: "Japan" }],
  countriesPlayed: ["JPN (dominant)", "USA", "BEL", "FRA", "GER", "SWE", "CAN", "AUS", "BRA", "ITA", "GBR"],
  famousAthletes: ["Modern ZNNR/INF World Champions (~90%+ women)", "Historical: Hangaku Gozen (12th c samurai)", "Tomoe Gozen (12th c samurai)", "Nakano Takeko (Boshin War 1868 female warrior leader)"],
  records: [
    { title: "ZNNR founded 1955 — modern Atarashii Naginata", holder: "Zen Nihon Naginata Renmei", value: "All Japan Naginata Federation founded 1955 to systematize + modernize traditional naginatajutsu into Atarashii Naginata sport form", year: 1955 },
    { title: "INF World Championships since 1995", holder: "International Naginata Federation", value: "INF World Championships biennial since 1995 — Japan dominant but international growth strong (Belgium, USA, France competitive)", year: 1995 },
    { title: "~90% female practitioners", holder: "ZNNR/INF", value: "Estimated 90%+ of naginata practitioners are women — modern practice preserves + honors historical onna-bugeisha (female samurai) tradition", year: 2024 },
  ],
  variants: ["atarashii-naginata-modern-sport-1955", "koryu-naginatajutsu-classical-schools-tendo-ryu-jikishinkage-ryu", "engi-kata-form-discipline", "shiai-sparring-discipline"],
  relatedSports: ["kendo", "iaido", "kyudo-japanese", "karate", "bo-jutsu"],
  skills: ["polearm distance control", "5-target strike variety (unique sune shin-strike)", "kata precision + spirit (Engi)", "ippon-strike timing with kiai + zanshin"],
  wikipediaTitle: "Naginata",
  sources: [{ label: "Wikipedia — Naginata", url: "https://en.wikipedia.org/wiki/Naginata", publisher: "Wikipedia" }, { label: "International Naginata Federation", url: "https://www.naginata.jp/inf", publisher: "INF" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default naginataJapanese;
