import type { Sport } from "@/lib/types";

export const freedivingNoLimits: Sport = {
  id: "freediving-no-limits",
  slug: "freediving-no-limits",
  name: "Freediving — No Limits (Absolute Depth)",
  officialName: "AIDA No Limits (NLT) / CMAS Absolute Depth",
  aliases: ["No Limits Freediving", "NLT", "Absolute Depth Diving"],
  shortDescription:
    "Extreme freediving discipline where athlete descends on weighted sled + ascends with lift bag/balloon on single breath — deepest freediving discipline; world record 214m (Herbert Nitsch, AUT 2007); no longer AIDA-competition due to safety concerns.",
  longDescription:
    "No Limits (NLT) is the deepest + most extreme freediving discipline where the athlete descends on a weighted sled to maximum depth + ascends with a lift bag or balloon on a single breath. It is the deepest freediving discipline of all — current world record 214 meters (Herbert Nitsch, AUT, 2007). Governed historically by AIDA International (International Association for the Development of Apnea, founded 1992) + CMAS. AIDA discontinued NLT world-record ratifications after Nitsch's 2012 near-fatal 253.2 m attempt in Santorini — considered too dangerous to sanction competitively. Athletes still attempt records outside official sanction. Sister disciplines that remain actively sanctioned: Constant Weight (CWT, no fins), Variable Weight (VWT), Static Apnea (STA), Free Immersion (FIM). Modern freediving stars: Herbert Nitsch (AUT — 32 world records, NLT 214m), Alexey Molchanov (RUS — modern king, 130m+ CWT), Alessia Zecchini (ITA — women's records 113m CWT + 130m NLT), Natalia Molchanova (RUS — Nataliya's legendary mother, 41 world records + first woman past 100m CWT before her disappearance 2015), William Trubridge (NZL — no-fins pioneer). Physiological extreme sport — mammalian dive reflex, alveolar compression at depth, nitrogen narcosis, decompression risk. Some catastrophic accidents including Loïc Leferme (FRA, 2007), Nick Mevoli (USA, 2013), Natalia Molchanova (2015 disappeared while recreational diving off Ibiza).",
  category: "aquatic-sports",
  subCategory: "extreme freediving (deepest discipline)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy / Greece / France (Mediterranean origins, mid-20th century)",
  estimatedOrigin: "Modern discipline 1949 (Raimondo Bucher first 30m); NLT modern era ~1990s+; AIDA discontinued sanction ~2012 post-Nitsch accident",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Weighted sled (descent)", description: "Metal-frame sled attached to guide-line; drops athlete to max depth." }, { name: "Lift bag / balloon (ascent)", description: "Inflatable lift bag; CO2 or air-tank released for ascent." }, { name: "Wetsuit + mask + monofin (some athletes)", description: "Standard freediving gear + wetsuit for thermal + streamlining." }, { name: "Descent line + safety divers + O2 rebreather + emergency scuba", description: "Extensive support team required — safety divers stationed at 20/30/40/60m." }, { name: "Nose clip + fluid-goggles (deep dives)", description: "Fluid-filled goggles for extreme depth (light lensing)." }],
  duration: { approximateMinutes: 4, structure: "Single dive 3-5 minutes total depth-to-surface; entire attempt session takes hours of preparation." },
  objective: "Descend + ascend to maximum absolute depth on single breath, safe surfacing.",
  matchStructure: "Individual world-record attempts; not currently sanctioned competitively due to safety.",
  basicRules: [
    { title: "Single breath, entire dive", body: "No breathing apparatus during descent or ascent." },
    { title: "Weighted sled descent + lift bag ascent", body: "Sled for descent; inflatable for ascent." },
    { title: "Safety divers stationed", body: "Divers at 20/30/40/60m — mandatory for AIDA-record-legitimate attempts." },
    { title: "Surface protocol (SP)", body: "Must remove mask + demonstrate consciousness within 15 seconds of surfacing." },
  ],
  scoring: { summary: "Depth in meters at maximum reach; safe surface required for record ratification.", winCondition: "Deepest confirmed + safely-surfaced depth." },
  positions: [{ name: "Freediver (competitor)", role: "Sole diver.", count: 1 }, { name: "Safety Divers", role: "Stationed at 20/30/40/60m; primary safety intervention.", count: 4 }, { name: "Judge (AIDA/CMAS certified)", role: "Verifies depth tag + surface protocol.", count: 1 }],
  officiating: { officials: ["Head Judge", "Depth Judge", "Surface Judge", "Safety Officer"], summary: "AIDA/CMAS certified officials for sanctioned attempts (though NLT records unratified since 2012)." },
  governingBodies: [{ name: "AIDA International", founded: 1992, headquarters: "Lausanne, Switzerland" }, { name: "CMAS", founded: 1959, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "AIDA world record attempts (individual)", frequency: "ongoing", founded: 1992, region: "worldwide" }, { name: "Vertical Blue (CWT/FIM/CNF)", frequency: "annual", founded: 2008, region: "Dean's Blue Hole, Bahamas" }, { name: "AIDA World Championships (CWT/FIM/STA — NLT excluded)", frequency: "biennial", founded: 1996, region: "rotating" }],
  countriesPlayed: ["AUT", "RUS", "ITA", "FRA", "USA", "NZL", "GRE", "AUS"],
  famousAthletes: ["Herbert Nitsch (AUT — 32 world records, NLT 214m record)", "Alexey Molchanov (RUS — modern king)", "Alessia Zecchini (ITA)", "Natalia Molchanova (RUS — mother of Alexey, 41 WRs; disappeared 2015)", "William Trubridge (NZL — no-fins pioneer)", "Loïc Leferme (FRA — early NLT champion, tragically died 2007)"],
  records: [
    { title: "Herbert Nitsch 214m NLT WR", holder: "Herbert Nitsch (AUT)", value: "NLT 214m record — 14 Jun 2007, Santorini, Greece — deepest freedive ever ratified", year: 2007 },
    { title: "Nitsch 2012 near-fatal 253.2m attempt", holder: "Herbert Nitsch (AUT)", value: "Attempted 253.2m NLT — reached target but suffered severe DCS + coma during ascent; recovered over years", year: 2012 },
    { title: "AIDA discontinued NLT ratification ~2012", holder: "AIDA", value: "AIDA stopped ratifying NLT world records after Nitsch 2012 accident — considered too dangerous to sanction", year: 2012 },
    { title: "Natalia Molchanova 41 world records", holder: "Natalia Molchanova (RUS)", value: "Most world records in freediving history (41); disappeared 2 Aug 2015 recreational diving off Ibiza", year: 2015 },
  ],
  variants: ["nlt-no-limits-deepest", "vwt-variable-weight", "cwt-constant-weight-with-fins", "cnf-constant-no-fins", "fim-free-immersion", "sta-static-apnea"],
  relatedSports: ["freediving-cwt", "finswimming-championship", "underwater-hockey", "spearfishing"],
  skills: ["breath-hold (mammalian dive reflex)", "pressure equalization (Frenzel/mouth-fill)", "psychological calm at depth", "emergency safety protocol"],
  wikipediaTitle: "Freediving",
  sources: [{ label: "Wikipedia — Freediving", url: "https://en.wikipedia.org/wiki/Freediving", publisher: "Wikipedia" }, { label: "Wikipedia — No-limit apnea", url: "https://en.wikipedia.org/wiki/No-limits_apnea", publisher: "Wikipedia" }, { label: "AIDA International", url: "https://www.aidainternational.org", publisher: "AIDA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default freedivingNoLimits;
