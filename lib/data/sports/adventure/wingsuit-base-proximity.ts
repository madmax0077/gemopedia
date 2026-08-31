import type { Sport } from "@/lib/types";

export const wingsuitBaseProximity: Sport = {
  id: "wingsuit-base-proximity",
  slug: "wingsuit-base-proximity",
  name: "Wingsuit BASE Proximity Flying",
  officialName: "Wingsuit BASE Proximity Flying",
  aliases: ["Proximity Wingsuit", "Wingsuit BASE", "WSBASE"],
  shortDescription:
    "Extreme sport combining wingsuit flying (fabric wing suit) with BASE jumping from cliffs — flying at 200+ km/h horizontally within meters of terrain (rocks, ridges, tree tops); regarded as world's most dangerous sport; fatality rate ~1:500 jumps. Popular events at Lauterbrunnen Valley (CH) + Norwegian fjords.",
  longDescription:
    "Wingsuit BASE Proximity Flying is the extreme intersection of wingsuit flying (worn-fabric wing suit that increases surface area allowing horizontal glide) and BASE jumping (jumps from fixed objects: Building/Antenna/Span/Earth), where jumpers exit from cliffs + fly at 200+ km/h horizontal velocity within meters of terrain (rocks, ridges, tree tops, ski slopes). Widely regarded as the most dangerous sport in the world with fatality rate estimated ~1 in 500 jumps (vs. ~1 in 1,000 for standard BASE + ~1 in 100,000 for skydiving). Signature venues: Lauterbrunnen Valley (Switzerland) — arguably the world capital of wingsuit proximity flying with multiple exit points (High Ultimate, Yellow Ocean); Norwegian fjords (Kjerag, Stavanger); Chamonix (France); Dolomites (Italy); Yosemite (USA, though largely illegal). Elite proximity flyers include Jokke Sommer (NOR — pioneer, YouTube 2011+ 'wingsuit flight' videos), Jeb Corliss (USA — Great Wall of China wingsuit 2011), Uli Emanuele (ITA — died 2016 Lauterbrunnen), Alexander Polli (ESP/USA — died 2016 through cave in Chamonix), Iiro Seppänen (FIN), Roberta Mancino (ITA), Ellen Brennan (USA women's pioneer), Espen Fadnes (NOR — GoPro helmet cam pioneer). Jumps typically 40-60s duration; jumpers deploy pilot chute + main parachute at low altitude for landing. Not sanctioned as competitive sport due to safety impossibility — but Red Bull + community events feature time-trial + accuracy formats occasionally. Fatality list is grimly maintained by community (BLiNC Magazine + WingsuitFlyer.com); over 400+ wingsuit BASE deaths documented since ~2000.",
  category: "adventure-extreme-sports",
  subCategory: "extreme wingsuit + BASE hybrid",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA + Switzerland (BASE roots USA 1960s; wingsuits Patrick de Gayardon FRA 1990s; proximity fusion 2000s)",
  estimatedOrigin: "BASE jumping roots ~1966 Yosemite; wingsuit flying Patrick de Gayardon 1997; proximity fusion widespread 2005-2010+",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Wingsuit (Tri-Cell or High-Performance)", description: "Fabric wing suit with cells inflatable during flight — brands: Squirrel Wingsuits, Phoenix-Fly, Tony Wingsuits, PhoenixFly." }, { name: "BASE parachute + container", description: "Specialized single-parachute BASE rig (no reserve typically); harness + container." }, { name: "Pilot chute (spring-loaded)", description: "Deploys main parachute at low altitude." }, { name: "Helmet + GoPro (optional)", description: "Helmet with mount for point-of-view GoPro." }, { name: "Altimeter (audible + visual)", description: "Critical for deployment timing." }, { name: "Ripstop wingsuit + jumpsuit", description: "Purpose-designed jumpsuit incorporated with fabric wings." }],
  duration: { approximateMinutes: 1, structure: "Single jump: 40-60 seconds of flight + parachute deployment + descent = ~2-3 min total." },
  objective: "Successfully complete proximity flight + safely deploy + land.",
  matchStructure: "Individual jumps; not standardly bracketed as sport due to safety.",
  basicRules: [
    { title: "Wingsuit BASE requires elite qualification", body: "Must be certified BASE jumper (200+ skydives) + wingsuit-qualified BASE jumper (specialized progression)." },
    { title: "Never fly beyond your ability", body: "Community rule: increment proximity gradually; deaths often result from ambition overrun." },
    { title: "Weather + wind check obsessive", body: "Never jump in adverse wind conditions; wind at ridge can throw jumper into terrain." },
    { title: "Deploy at safe altitude (500+ ft AGL)", body: "Below 500 ft = deployment window insufficient; low-pull deaths common." },
  ],
  scoring: { summary: "Not standardly scored; some Red Bull events use speed + accuracy metrics.", winCondition: "Survival + safe landing = success." },
  positions: [{ name: "Wingsuit BASE jumper", role: "Sole competitor.", count: 1 }, { name: "Ground crew (video / safety)", role: "Videographer + safety spotter.", count: 2 }],
  officiating: { officials: ["No formal officials — self-regulated"], summary: "Not sanctioned as competitive sport due to safety; community self-regulation." },
  governingBodies: [{ name: "US Parachute Association (USPA, related discipline)", founded: 1946, headquarters: "USA" }, { name: "APA (Australian Parachute Association)", founded: 1960, headquarters: "Australia" }, { name: "Community bodies (BLiNC Magazine, WingsuitFlyer.com)", founded: 2000, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "Red Bull Wings for Life Fly-In (community event)", frequency: "annual", founded: 2013, region: "Switzerland (Lauterbrunnen)" }, { name: "Wingsuit World Championship (proposed, not standardly held)", frequency: "sporadic", founded: 2016, region: "China (2016 attempt)" }, { name: "Community jumps at Lauterbrunnen + Kjerag + Chamonix", frequency: "ongoing", founded: 2005, region: "Swiss Alps + Norwegian fjords" }],
  countriesPlayed: ["SUI (Lauterbrunnen capital)", "NOR (Kjerag)", "USA (Yosemite, though largely illegal)", "FRA (Chamonix)", "ITA (Dolomites)", "ESP", "BRA", "AUS"],
  famousAthletes: ["Jokke Sommer (NOR — YouTube pioneer)", "Jeb Corliss (USA — Great Wall wingsuit)", "Espen Fadnes (NOR)", "Ellen Brennan (USA — women's pioneer)", "Roberta Mancino (ITA)", "Uli Emanuele (ITA, died 2016)", "Alexander Polli (ESP/USA, died 2016)", "Iiro Seppänen (FIN)", "Patrick de Gayardon (FRA — wingsuit modern pioneer, died 1998)"],
  records: [
    { title: "Fatality rate ~1:500 jumps", holder: "community statistics", value: "Estimated ~1 fatality per 500 wingsuit BASE jumps — world's most dangerous per-jump sport", year: 2024 },
    { title: "Jeb Corliss Great Wall 2011", holder: "Jeb Corliss (USA)", value: "First flight through opening in the Great Wall of China 2011 — iconic wingsuit BASE feat", year: 2011 },
    { title: "Patrick de Gayardon modern wingsuit 1997", holder: "Patrick de Gayardon (FRA)", value: "Modern wingsuit developed 1997 by Patrick de Gayardon — died skydiving accident Hawaii 1998", year: 1997 },
    { title: "400+ wingsuit BASE deaths since 2000", holder: "BLiNC Magazine + community", value: "400+ documented wingsuit BASE fatalities since ~2000 — grim community-maintained memorial list", year: 2024 },
  ],
  variants: ["wingsuit-skydive-non-base", "standard-base-non-wingsuit", "highline-wingsuit-crossover"],
  relatedSports: ["base-jumping", "skydiving-freefall", "paragliding", "highlining-competitive"],
  skills: ["3D spatial awareness at 200+ km/h", "terrain reading", "wingsuit body-flight technique", "parachute deployment timing", "extreme risk assessment"],
  wikipediaTitle: "Wingsuit flying",
  sources: [{ label: "Wikipedia — Wingsuit flying", url: "https://en.wikipedia.org/wiki/Wingsuit_flying", publisher: "Wikipedia" }, { label: "BLiNC Magazine", url: "https://blincmagazine.com", publisher: "BLiNC Magazine (BASE community)" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default wingsuitBaseProximity;
