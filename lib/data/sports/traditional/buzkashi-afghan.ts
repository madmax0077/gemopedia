import type { Sport } from "@/lib/types";

export const buzkashiAfghan: Sport = {
  id: "buzkashi-afghan",
  slug: "buzkashi-afghan",
  name: "Buzkashi (Afghan National Sport)",
  officialName: "Buzkashi (Afghan National Sport)",
  aliases: ["Kokpar (Kazakh cognate)", "Ulak Tartysh (Kyrgyz cognate)", "بزکشی"],
  shortDescription:
    "National sport of Afghanistan — brutal horseback game where mounted riders (chapandaz) compete to drag a headless goat/calf carcass into a scoring circle (Hallal Circle); pre-Islamic Central Asian origins ~10th century; teams of 10-20 riders.",
  longDescription:
    "Buzkashi (Persian: بزکشی, 'goat pulling/dragging') is the national sport of Afghanistan and one of the oldest + most physically extreme equestrian sports in the world, with pre-Islamic Central Asian origins ~10th century (originating in Turkic + Mongol nomadic cultures, spread across Central Asia). Played by mounted riders called chapandazan (singular: chapandaz) who compete to grab the beheaded + disemboweled carcass of a goat (buz) or calf (bozkashi) — typically weighing 30-50 kg — from the ground, carry it around a designated flag or turnaround marker, and deposit it in a scoring circle (Hallal Circle / Marker of Justice). Two main forms: (1) Tudabarai — simpler ancient form; rider possesses carcass + must escape opposing riders; (2) Qarajai — modern organized form; scoring circles + rules. Teams typically 10-20 riders per side; matches last hours (with occasional day-long games). Chapandaz training + horses are extraordinarily specialized — Central Asian breed horses purpose-bred for buzkashi ~$25,000-$100,000. Popular in Afghanistan, Tajikistan, Uzbekistan, Kyrgyzstan (as Kok-Boru), Kazakhstan (as Kokpar), Xinjiang (China, as Diqihe Buzul), northern Pakistan. Featured prominently in film 'Rambo III' (1988) + 'The Kite Runner' (2007). World Nomad Games (biennial since 2014, Kyrgyzstan) hosts Kok-Boru variant. Sport suspended under Taliban's first regime 1996-2001; resumed post-2001 with major national tournaments; status uncertain under Taliban's second regime post-2021.",
  category: "traditional-cultural-sports",
  subCategory: "Central Asian horseback goat-pulling",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "AF",
  regionOfOrigin: "Central Asia (Afghanistan / Turkic-Mongol nomadic tradition ~10th century)",
  estimatedOrigin: "Pre-Islamic Central Asian nomadic origins ~10th century; Afghan national sport post-1930s",
  players: { min: 10, max: 40, note: "Team size varies 10-20 riders per side; up to 100+ chapandazan free-for-all in Tudabarai form." },
  equipment: [{ name: "Beheaded goat/calf carcass (30-50 kg)", description: "Traditionally goat carcass; modern events use calf (heavier, more durable)." }, { name: "Buzkashi horse (Central Asian bred)", description: "Purpose-bred stocky horses; extraordinary training; $25K-$100K+ for elite mount." }, { name: "Kolah (fur cap) + chapan robe", description: "Traditional chapandaz attire — thick padded coat + fur cap." }, { name: "Kamchi (heavy leather whip)", description: "Reinforced whip used on horse (occasionally on opponents in traditional form)." }, { name: "Hallal Circle (chalk-marked scoring circle)", description: "~15m diameter scoring circle." }],
  duration: { approximateMinutes: 180, structure: "Match 2-4 hours typically; traditional games could last dawn-to-dusk." },
  objective: "Deposit carcass in opposing team's Hallal Circle (Qarajai form) OR ride away with carcass unchallenged (Tudabarai form).",
  matchStructure: "Tudabarai: free-for-all — first rider to gain control + escape opposing riders wins. Qarajai: teams compete to grab + carry carcass + deposit in Hallal Circle for points.",
  basicRules: [
    { title: "Riders must grab carcass while mounted", body: "Grabbing carcass from ground while mounted; no dismounting." },
    { title: "Traditional whip-strikes on opponents (Tudabarai)", body: "Traditional form allowed whip use on other riders; modern rules restrict to horses only." },
    { title: "Scoring by circle deposit (Qarajai)", body: "Point scored when carcass dropped in opposing Hallal Circle." },
    { title: "Horses must not be lame / mistreated", body: "Modern rules enforce basic horse welfare; often loosely." },
  ],
  scoring: { summary: "Qarajai: 1 point per Hallal Circle deposit. Tudabarai: single victor per round.", winCondition: "Most points at time limit OR first successful clear escape with carcass (Tudabarai)." },
  positions: [{ name: "Chapandaz (elite buzkashi rider)", role: "Master rider; often multi-decade career.", count: 15 }, { name: "Team captain (Rish-i-sefid, 'white beard')", role: "Elder team leader.", count: 1 }],
  officiating: { officials: ["Chief Judge (Sarshahnah)", "Field Judges", "Timekeeper"], summary: "Officials from Afghan Buzkashi Federation or regional equivalents." },
  governingBodies: [{ name: "Afghan Buzkashi Federation (national)", founded: 1953, headquarters: "Kabul, Afghanistan" }, { name: "World Nomad Games (Kok-Boru variant)", founded: 2014, headquarters: "Kyrgyzstan" }],
  majorCompetitions: [{ name: "Nowruz Buzkashi (Afghan New Year)", frequency: "annual (March 21)", founded: 1953, region: "Kabul, Afghanistan" }, { name: "World Nomad Games — Kok-Boru", frequency: "biennial", founded: 2014, region: "Kyrgyzstan (2014-2018), Turkey (2022)" }, { name: "Kokpar Championships (Kazakhstan)", frequency: "annual", founded: 2000, region: "Kazakhstan" }],
  countriesPlayed: ["AFG (national sport)", "TJK", "UZB", "KGZ (as Kok-Boru)", "KAZ (as Kokpar)", "CHN (Xinjiang)", "PAK (northern regions)"],
  famousAthletes: ["Chapandazan (elite riders — largely oral tradition; regional Central Asian legends)", "Karim Beg (Afghan traditional master)"],
  records: [
    { title: "Afghan National Sport designation 1953", holder: "Afghanistan government", value: "Buzkashi officially designated national sport of Afghanistan 1953", year: 1953 },
    { title: "Suspended under Taliban 1996-2001", holder: "Afghan Buzkashi Federation", value: "Buzkashi suspended during first Taliban regime 1996-2001; revived vigorously post-2001", year: 2001 },
    { title: "World Nomad Games launch 2014", holder: "Kyrgyzstan", value: "Central Asian variants featured prominently at inaugural World Nomad Games 2014 (Kyrgyzstan)", year: 2014 },
  ],
  variants: ["tudabarai-traditional-free-for-all", "qarajai-modern-team-scoring", "kok-boru-kyrgyz-cognate", "kokpar-kazakh-cognate", "diqihe-buzul-xinjiang-cognate"],
  relatedSports: ["kok-boru-kyrgyz", "polo", "horseshoe-throwing", "eagle-hunting"],
  skills: ["horse mastery at gallop", "leaning-grab from horseback", "team-riding tactics", "endurance for multi-hour matches"],
  wikipediaTitle: "Buzkashi",
  sources: [{ label: "Wikipedia — Buzkashi", url: "https://en.wikipedia.org/wiki/Buzkashi", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default buzkashiAfghan;
