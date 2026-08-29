import type { Sport } from "@/lib/types";

export const quickDrawPistol: Sport = {
  id: "quick-draw-pistol",
  slug: "quick-draw-pistol",
  name: "Quick Draw Pistol",
  officialName: "Cowboy Fast Draw Association (CFDA) World Championships",
  aliases: ["Fast Draw", "Cowboy Quick Draw", "CFDA Fast Draw"],
  shortDescription:
    "Sanctioned quick-draw pistol shooting sport using single-action revolvers with wax bullets against balloon or steel targets; scored electronically to 0.001s. CFDA (Cowboy Fast Draw Association) World Championships since 2003.",
  longDescription:
    "Quick Draw Pistol (Fast Draw) is a sanctioned sport shooting discipline where competitors draw single-action .45 Long Colt-caliber revolvers from western holsters + fire wax bullets (safe) at reactive targets — either balloons or steel plates — with timing measured electronically to 0.001-second precision. Governed globally by Cowboy Fast Draw Association (CFDA, founded 2003, headquartered Sparks NV, USA) with 5,000+ members. Traditional single-action revolvers (Colt Peacemaker + Ruger Vaquero replicas) modified to fire cool-load wax bullets or blank primers; balloons pop reactively at ~2 yards, steel plates react at ~4-6 yards. Format: head-to-head shootouts in round-robin brackets → single-elimination. Best-of-5 or best-of-7 shots per match. Fastest confirmed draw + hit under 0.208 seconds (from buzzer to target reactive). Competitors dress in traditional western attire (hat, vest, chaps, boots) as part of cultural authenticity. Divisions: Men, Ladies, Junior, Senior 50+/60+/70+/80+. Modern events are big-money circuits — CFDA World Championship (Fallon, NV) + Winter Range, End of Trail, Bordertown. Related to (but distinct from) SASS Cowboy Action Shooting (CAS) which uses live ammunition + longer courses.",
  category: "precision-sports",
  subCategory: "quick-draw revolver shooting (western tradition)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Western tradition; CFDA founded 2003 in Nevada)",
  estimatedOrigin: "Western frontier tradition ~1860s; modern CFDA competition 2003",
  players: { min: 1, max: 2, note: "Head-to-head shootouts; 1 competitor per timing lane." },
  equipment: [{ name: "Single-action revolver (.45 LC replica)", description: "Colt Peacemaker or Ruger Vaquero replicas; modified for wax bullets." }, { name: "Western holster + gun belt", description: "Traditional cowboy holster + tooled belt." }, { name: "Wax bullets + primers", description: "Cool-load wax bullets; safe for close-range balloon/plate targets." }, { name: "Electronic timing system + reactive targets", description: "0.001s precision timer; balloon pops or steel reactive." }, { name: "Traditional western attire", description: "Hat, vest, chaps, boots — mandatory for CFDA competition." }],
  duration: { approximateMinutes: 1, structure: "Individual shot < 1 second; match ~5-15 min head-to-head; event ~2-3 days for finals." },
  objective: "Draw revolver from holster + fire + hit target reactive faster than opponent.",
  matchStructure: "Head-to-head best-of-5 or best-of-7 shots; round-robin qualifying → single-elimination bracket.",
  basicRules: [
    { title: "Buzzer starts timing", body: "Audible buzzer starts clock; competitor may draw only on buzzer." },
    { title: "Must hit target for time to count", body: "Miss = no time recorded for that shot." },
    { title: "Head-to-head shootout", body: "First to reach set number of wins in match wins the match." },
    { title: "Traditional attire required (CFDA)", body: "Cowboy hat, vest, boots, gun belt mandatory." },
  ],
  scoring: { summary: "Fastest draw + confirmed hit (0.001s precision).", winCondition: "Head-to-head: first to set number of wins in match." },
  positions: [{ name: "Shootist (Fast Draw shooter)", role: "Sole competitor.", count: 1 }, { name: "Timekeeper (electronic)", role: "Electronic timing operator.", count: 1 }, { name: "Range Officer", role: "Safety officer supervising each shooter.", count: 1 }],
  officiating: { officials: ["Chief Range Officer", "Timekeeper", "Range Safety Officer", "Head Judge"], summary: "CFDA-sanctioned officials panel." },
  governingBodies: [{ name: "Cowboy Fast Draw Association (CFDA)", founded: 2003, headquarters: "Sparks, Nevada, USA" }, { name: "SASS (Single Action Shooting Society, related discipline)", founded: 1987, headquarters: "New Mexico, USA" }],
  majorCompetitions: [{ name: "CFDA World Championship", frequency: "annual", founded: 2003, region: "Fallon, Nevada, USA" }, { name: "Winter Range CFDA", frequency: "annual", founded: 2005, region: "Phoenix, Arizona, USA" }],
  countriesPlayed: ["USA", "CAN", "AUS"],
  famousAthletes: ["Various CFDA World Champions (rotating annually — Fast Frank, Renegade Roper, etc. all under CFDA pseudonym tradition)"],
  records: [
    { title: "Fastest verified CFDA draw ~0.208s", holder: "CFDA competitor", value: "Fastest verified CFDA draw + confirmed target hit under 0.208 seconds from buzzer", year: 2018 },
    { title: "CFDA founded 2003", holder: "Cowboy Fast Draw Association", value: "CFDA founded 2003 in Nevada; 5,000+ current members globally", year: 2003 },
  ],
  variants: ["balloon-target-cfda", "steel-plate-cfda", "traditional-single-shot", "ladies-cfda", "junior-cfda"],
  relatedSports: ["cowboy-action-shooting-sass", "practical-pistol-ipsc", "steel-challenge", "olympic-25m-rapid-fire-pistol"],
  skills: ["draw speed from holster", "point-shooting accuracy", "trigger discipline", "buzzer reaction time"],
  wikipediaTitle: "Fast draw",
  sources: [{ label: "Wikipedia — Fast draw", url: "https://en.wikipedia.org/wiki/Fast_draw", publisher: "Wikipedia" }, { label: "CFDA official", url: "https://www.cowboyfastdraw.com", publisher: "Cowboy Fast Draw Association" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default quickDrawPistol;
