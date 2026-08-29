import type { Sport } from "@/lib/types";

export const equestrianVaulting: Sport = {
  id: "equestrian-vaulting",
  slug: "equestrian-vaulting",
  name: "Equestrian Vaulting",
  officialName: "Vaulting (Fédération Équestre Internationale - FEI)",
  aliases: ["Vaulting", "Horse Vaulting", "FEI Vaulting"],
  shortDescription:
    "Equestrian gymnastics discipline — vaulters perform gymnastic + dance moves on a moving horse cantering in a 15m circle led by a lunger; contested at FEI World Equestrian Games; Individual + Pas de Deux + Squad events.",
  longDescription:
    "Equestrian Vaulting is an equestrian gymnastics discipline where vaulters perform gymnastic + dance movements on a horse cantering in a circle. The horse is led by a lunger (person holding a long lunge line from center of 15m circle). Vaulters perform choreographed routines set to music. Three events: (1) Individual — solo vaulter; (2) Pas de Deux — 2 vaulters together; (3) Squad — 6 vaulters (typically 3 vaulters on horse simultaneously plus 3 rotating). Judges score 0-10 on: technique + rhythm + choreography + horse condition. FEI-recognized since 1983; World Championships biennially. Historic roots in medieval + military training. Modern sport concentrates in Germany, Switzerland, France, Austria, USA. Legendary vaulters: Kai Vorberg (Germany — Individual World Champion), Nadia Zülow (Germany — women's Individual World Champion), German Squad — dominant multi-time World Champion team. Not Olympic despite FEI status.",

  category: "equestrian-sports",
  subCategory: "equestrian gymnastics — vaulting on moving horse",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "medieval",
  popularity: "major",
  countryOfOrigin: "DE",
  regionOfOrigin: "Central Europe (medieval military + gymnastic training); FEI recognition 1983",
  estimatedOrigin: "Medieval + Renaissance military training origins; modern sport formalized post-WWII in Germany; FEI recognition 1983",

  players: { min: 1, max: 6, note: "Individual + Pas de Deux (2) + Squad (6-8)." },
  field: {
    surfaceName: "Sand or turf arena — 15m diameter circle for lunging",
    dimensions: "15m circle in center of arena; horse canters continuously around; arena 40m × 20m indoor typical.",
    description: "Purpose-built arena with soft footing (sand or turf); safe for both horse + vaulters. Lunger stands in center holding long lunge line to horse.",
  },
  equipment: [
    { name: "Vaulting horse", description: "Large calm horse trained specifically for vaulting; typically warmblood or draft horse; broad back for vaulters." },
    { name: "Vaulting surcingle", description: "Wide leather + padded surcingle with 2 vaulting handles + foot loops; attached over horse's back." },
    { name: "Vaulter's costume", description: "Team + individual costumes matching music theme; typically leotard + shorts." },
    { name: "Vaulting shoes", description: "Slipper-like soft shoes for grip on horse + safe landing." },
    { name: "Music playback system", description: "Choreographed routine performed to music." },
  ],
  duration: { approximateMinutes: 60, structure: "Individual routine: 1-2 min; Squad routine: 3-4 min. Full competition: 3-day format." },
  objective: "Score maximum points from judges by executing choreographed gymnastic + dance routine on moving horse.",
  matchStructure: "Competition format: compulsory exercises (mandatory moves) + free style routine (choreographed). Both scored 0-10 by judges. Sum = final score.",

  basicRules: [
    { title: "Perform on horse cantering in 15m circle", body: "Horse maintains steady canter throughout routine; lunger controls speed + rhythm." },
    { title: "Two rounds: compulsory + free style", body: "Compulsory: 6 mandatory movements. Free style: choreographed routine to music." },
    { title: "Judged 0-10 by 5 judges", body: "5 judges score: technique + rhythm + choreography + horse condition. Sum / 5." },
    { title: "Falls = major penalty", body: "Falls result in significant score deduction." },
    { title: "Horse condition considered", body: "Horse health + form is part of scoring; unfit horses may be excused." },
  ],
  scoring: {
    summary: "5 judges score 0-10 across 4 criteria per round. Sum averaged for final score.",
    winCondition: "Highest overall score across all rounds.",
    breakdown: [
      { action: "Perfect compulsory routine", points: "9.0-10.0 per judge" },
      { action: "Excellent free style", points: "8.5-9.5 per judge" },
      { action: "Fall during routine", points: "Deducted from technique + rhythm scores" },
      { action: "Horse condition deduction", points: "Deducted if horse appears unfit or over-worked" },
    ],
  },

  positions: [
    { name: "Vaulter", role: "Individual competitor.", count: 1 },
    { name: "Lunger", role: "Stands in center holding lunge line; controls horse speed + rhythm.", count: 1 },
    { name: "Squad member", role: "1 of 6-8 in squad routines.", count: 6 },
    { name: "Vaulting horse", role: "The equine athlete.", count: 1 },
    { name: "Coach", role: "Choreography + technique + horse training." },
  ],
  officiating: {
    officials: ["5 Judges", "Chief Judge", "Steward", "Technical Delegate"],
    summary: "FEI-certified judges; 5 judges score independently across 4 criteria per round.",
  },

  governingBodies: [
    { name: "Fédération Équestre Internationale (FEI)", founded: 1921, headquarters: "Lausanne, Switzerland", website: "https://fei.org" },
    { name: "Deutsches Vaulting Association (Deutsche Reiterliche Vereinigung)", founded: 1900, headquarters: "Warendorf, Germany" },
    { name: "American Vaulting Association", founded: 1966, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "FEI World Vaulting Championships", frequency: "biennial (even years)", founded: 1986, region: "worldwide" },
    { name: "FEI World Cup Vaulting", frequency: "annual", founded: 2011, region: "worldwide winter circuit" },
    { name: "FEI European Vaulting Championships", frequency: "biennial (odd years)", founded: 1984, region: "Europe" },
    { name: "World Equestrian Games (Vaulting)", frequency: "quadrennial", founded: 1990, region: "worldwide" },
    { name: "CVI-A international events", frequency: "monthly (season)", founded: 1985, region: "worldwide" },
  ],
  countriesPlayed: ["DE", "CH", "FR", "AT", "US", "SE", "IT", "GB", "NL", "BE", "AU", "CA", "DK"],
  famousAthletes: [
    "Kai Vorberg (Germany — Individual World Champion)",
    "Nadia Zülow (Germany — women's Individual World Champion)",
    "German Vaulting Squad — dominant multi-time World Champion team",
    "Simone Wiegele (Germany — women's Individual)",
    "Nicolas Andréani (France — men's Individual World Champion)",
    "Corinne Boelli (Switzerland — women's World Championship)",
    "Erik Oese (Germany — men's Individual medals)",
    "Bettina Zumbühl (Switzerland — women's medals)",
  ],
  records: [
    { title: "Most FEI Vaulting World Championships (nation)", holder: "Germany", value: "Multiple World Championship titles across Individual + Squad + Pas de Deux; sport's dominant nation", year: 2022 },
    { title: "First FEI World Vaulting Championships", holder: "FEI", value: "First held 1986; biennial since", year: 1986 },
    { title: "Modern sport formalization", holder: "FEI", value: "Vaulting formally recognized as FEI discipline 1983", year: 1983 },
  ],

  variants: ["individual-vaulting", "pas-de-deux-2-vaulters", "squad-6-8-vaulters", "para-equestrian-vaulting"],
  relatedSports: ["gymnastics", "dressage", "eventing", "modern-pentathlon"],

  skills: ["gymnastics on unstable surface (moving horse)", "flexibility + balance + strength", "rhythmic coordination with horse", "choreographic + artistic expression", "team coordination (squad + pas de deux)"],

  terminology: [
    { term: "Vaulting", meaning: "Equestrian gymnastics on moving horse." },
    { term: "Lunger", meaning: "Person holding lunge line from center of circle." },
    { term: "Surcingle", meaning: "Wide leather + padded strap over horse's back with vaulting handles." },
    { term: "Compulsory", meaning: "Mandatory exercises round; 6 required movements." },
    { term: "Free style", meaning: "Choreographed routine to music." },
    { term: "Individual", meaning: "Solo vaulter event." },
    { term: "Pas de Deux", meaning: "2 vaulters performing together." },
    { term: "Squad", meaning: "6-8 vaulter team event." },
    { term: "15m circle", meaning: "Standard lunging circle; horse cants continuously around." },
  ],

  faq: [
    { question: "What is Equestrian Vaulting?", answer: "An equestrian gymnastics discipline where vaulters perform gymnastic + dance movements on a horse cantering in a 15m circle. The horse is led by a lunger (person holding lunge line from center). Three events: Individual (solo), Pas de Deux (2 vaulters), Squad (6-8 vaulters). Judges score 0-10 on: technique + rhythm + choreography + horse condition. FEI-recognized since 1983." },
    { question: "Is Equestrian Vaulting in the Olympics?", answer: "No. FEI has not pursued Olympic inclusion actively. Sport is contested at FEI World Equestrian Games (quadrennial) alongside jumping + dressage + eventing + para-dressage + reining. Vaulting remains a niche but established FEI discipline." },
    { question: "Where is Equestrian Vaulting popular?", answer: "Germany (sport's home + dominant nation), Switzerland, France, Austria, USA. Central European tradition + strong club system. Germany has multiple World Championship gold in Individual + Squad + Pas de Deux categories. USA + Canada developing programs." },
    { question: "Who is the greatest vaulter?", answer: "Multiple candidates: (1) Kai Vorberg (Germany) — Individual World Champion. (2) Nadia Zülow (Germany) — women's Individual World Champion. (3) Nicolas Andréani (France) — men's Individual World Champion. (4) German Vaulting Squad — dominant multi-time World Champion team; Germany produces most elite vaulters." },
  ],

  wikipediaTitle: "Equestrian vaulting",
  sources: [{ label: "FEI Vaulting", url: "https://fei.org/disciplines/vaulting", publisher: "FEI" }, { label: "Wikipedia — Equestrian vaulting", url: "https://en.wikipedia.org/wiki/Equestrian_vaulting", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
