import type { Sport } from "@/lib/types";

export const kokBoruKyrgyz: Sport = {
  id: "kok-boru-kyrgyz",
  slug: "kok-boru-kyrgyz",
  name: "Kok-Boru (Kyrgyz National Sport)",
  officialName: "Kok-Boru (Kyrgyz National Sport) / Ulak Tartysh",
  aliases: ["Ulak Tartysh", "Kok-Buri", "Grey Wolf"],
  shortDescription:
    "Kyrgyz national horseback team sport — cognate of Afghan Buzkashi — teams of 4 mounted riders compete to place beheaded goat carcass in opposing team's kazan (goal well); shorter + more organized than Buzkashi; premier event at World Nomad Games since 2014.",
  longDescription:
    "Kok-Boru (Kyrgyz: көк бөрү, literally 'grey wolf'; also Ulak Tartysh, 'goat pulling') is the Kyrgyz national horseback team sport — a Central Asian cognate of Afghan Buzkashi and Kazakh Kokpar. Unlike Buzkashi's free-form 10-20 rider matches, Kok-Boru has been formalized as a structured sport with 4 riders per team, defined 200×70m field, kazan (goal well ~1.5m diameter × 0.5m deep) at each end, and 3 × 15-minute periods. Two teams compete to pick up + carry a beheaded goat/calf carcass (~30-45 kg) + drop it in the opposing team's kazan for a goal. Featured prominently at the World Nomad Games (biennial since 2014, hosted by Kyrgyzstan 2014/2016/2018 → then Turkey 2022 → Kazakhstan 2024). Recognized as Kyrgyzstan intangible cultural heritage by UNESCO 2017 (with Kazakh Kokpar). Modern professional Kok-Boru league emerged 2000s; national teams from Kyrgyzstan (dominant), Kazakhstan, Tajikistan, Uzbekistan, Turkmenistan, Afghanistan, Turkey, Mongolia, Russia (Yakutia region), USA (Uzbek + Kyrgyz diaspora). Signature: name 'grey wolf' comes from traditional origin where hunters chased wolves off livestock + would grab wolf carcasses as trophy — carcass symbol adapted for horseback sport.",
  category: "traditional-cultural-sports",
  subCategory: "Kyrgyz horseback team sport (cognate of Buzkashi)",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "KG",
  regionOfOrigin: "Kyrgyzstan / Central Asia (Turkic-Mongol nomadic tradition ~10th century)",
  estimatedOrigin: "Traditional Central Asian tradition ~10th century; modern formal rules Soviet-era 1930s; World Nomad Games 2014",
  players: { min: 4, max: 4, note: "4 riders per team + reserves; substitutions allowed." },
  equipment: [{ name: "Beheaded goat/calf carcass (30-45 kg)", description: "Modern professional games often use rubber/foam models to reduce controversy." }, { name: "Kyrgyz Karabair or Adaev horses", description: "Traditional Central Asian breeds; purpose-trained." }, { name: "Kazan (goal well)", description: "~1.5m diameter × 0.5m deep well at each end of field; scoring receptacle." }, { name: "200m × 70m field", description: "Formalized field dimensions per Kok-Boru Federation." }, { name: "Traditional chapan + kolah + kamchi", description: "Padded coat + fur cap + whip." }],
  duration: { approximateMinutes: 45, structure: "3 × 15 min periods with 10 min breaks; total match ~1 hr 15 min." },
  objective: "Score more goals than opponent by dropping carcass in opponent's kazan.",
  matchStructure: "3 × 15 min periods; overtime allowed; substitutions on rolling basis.",
  basicRules: [
    { title: "4 riders + reserves per team", body: "Substitutions allowed; only 4 on field at once." },
    { title: "Kazan-drop = goal", body: "Carcass must be fully deposited in kazan (goal well) to score." },
    { title: "3 × 15 min periods (formalized)", body: "Formalized match length distinct from open-ended Buzkashi." },
    { title: "Horse welfare rules enforced (modern)", body: "Modern professional rules protect horses; whip use restricted." },
  ],
  scoring: {
    summary: "1 goal per successful kazan-drop.",
    winCondition: "More goals at end of 3 periods.",
    breakdown: [{ action: "Kazan-drop", points: "+1" }],
  },
  positions: [{ name: "Rider (chapandaz)", role: "4 mounted riders per team.", count: 4 }, { name: "Reserves", role: "Substitutes available.", count: 3 }],
  officiating: { officials: ["Chief Referee", "2 Field Referees", "Kazan Judges", "Timekeeper"], summary: "Kok-Boru Federation certified officials." },
  governingBodies: [{ name: "Kok-Boru Federation of Kyrgyzstan", founded: 1996, headquarters: "Bishkek, Kyrgyzstan" }, { name: "World Nomad Games Council", founded: 2014, headquarters: "Bishkek, Kyrgyzstan" }],
  majorCompetitions: [{ name: "World Nomad Games — Kok-Boru", frequency: "biennial", founded: 2014, region: "Cholpon-Ata Kyrgyzstan (2014-2018) → Iznik Turkey (2022) → Astana Kazakhstan (2024)" }, { name: "Kok-Boru Federation of Kyrgyzstan National Championship", frequency: "annual", founded: 1996, region: "Bishkek, Kyrgyzstan" }],
  countriesPlayed: ["KGZ (dominant)", "KAZ", "TJK", "UZB", "TKM", "AFG", "TUR", "MNG", "RUS (Yakutia)", "CHN (Xinjiang)", "USA (diaspora)"],
  famousAthletes: ["Chapandazan (elite riders — regional names)", "Kyrgyz national team (multi-time World Nomad Games gold)"],
  records: [
    { title: "UNESCO Intangible Heritage 2017", holder: "UNESCO / Kyrgyzstan + Kazakhstan", value: "Kok-Boru + Kokpar jointly inscribed as UNESCO Intangible Cultural Heritage (Kyrgyzstan + Kazakhstan joint nomination 2017)", year: 2017 },
    { title: "World Nomad Games launch 2014", holder: "Kyrgyzstan", value: "Inaugural World Nomad Games held Cholpon-Ata, Kyrgyzstan 2014; Kok-Boru premier event", year: 2014 },
    { title: "Kyrgyzstan National Sport designation", holder: "Kyrgyzstan Ministry of Culture", value: "Kok-Boru officially designated Kyrgyz national sport", year: 1991 },
  ],
  variants: ["kok-boru-modern-4v4-formalized", "kokpar-kazakh-cognate", "buzkashi-afghan-cognate", "ulak-tartysh-traditional-form"],
  relatedSports: ["buzkashi-afghan", "polo", "eagle-hunting-berkutchi", "horse-archery"],
  skills: ["horseback carcass-grab technique", "team coordination on horseback", "endurance across 3 periods", "leverage + strength in the grab-battle"],
  wikipediaTitle: "Kok-boru",
  sources: [{ label: "Wikipedia — Kok-boru", url: "https://en.wikipedia.org/wiki/Kok-boru", publisher: "Wikipedia" }, { label: "World Nomad Games official", url: "https://worldnomadgames.com", publisher: "World Nomad Games Council" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default kokBoruKyrgyz;
