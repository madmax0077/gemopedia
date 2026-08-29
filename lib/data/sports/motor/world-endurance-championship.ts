import type { Sport } from "@/lib/types";

export const worldEnduranceChampionship: Sport = {
  id: "world-endurance-championship",
  slug: "world-endurance-championship",
  name: "FIA World Endurance Championship (WEC)",
  officialName: "FIA World Endurance Championship",
  aliases: ["WEC", "FIA WEC"],
  shortDescription:
    "Global sports-car endurance racing championship (est. 2012 by FIA + ACO) featuring 6-8 rounds annually including 24 Hours of Le Mans, 24 Hours of Spa, and 12 Hours of Sebring. Top-tier Hypercar class with LMDh + LMH cars from Ferrari, Toyota, Porsche, Cadillac, Peugeot, BMW. Ferrari won 2023 Le Mans (first in 58 years).",
  longDescription:
    "The FIA World Endurance Championship (WEC) is the global sports-car endurance racing championship established 2012 by the FIA (Fédération Internationale de l'Automobile, Paris) + ACO (Automobile Club de l'Ouest, Le Mans). 7-8 rounds per season each running 6-24 hours long, with 3-driver crews per car. Top-tier Hypercar class (since 2021) allows both LMH (Le Mans Hypercar — custom chassis + hybrid, used by Toyota, Ferrari, Peugeot) and LMDh (spec LMP2 chassis + spec hybrid + brand bodywork/engine, used by Porsche, Cadillac, BMW, Alpine, Acura). Also runs LMP2 (Le Mans only from 2024) and LMGT3 (customer GT since 2024). Crown jewel is 24 Hours of Le Mans each June (double points, 62,000 spectators). Ferrari 499P #51 won 2023 Le Mans — first Ferrari overall win in 58 years. Porsche holds 19× manufacturer record; Tom Kristensen (Denmark) 9× driver record.",
  category: "motor-sports",
  subCategory: "sports car endurance racing",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (governed by FIA Paris + ACO Le Mans)",
  estimatedOrigin: "WEC formalised 2012; Le Mans since 1923 (predates WEC by 89 years)",
  players: { min: 3, max: 3, note: "3 drivers per car rotate stints." },
  equipment: [
    { name: "Hypercar (LMH/LMDh chassis)", description: "Closed-cockpit sports car with hybrid powertrain (~500-680 hp combustion + electric front axle for LMDh), performance-balanced." },
    { name: "Michelin tyres (spec supplier)", description: "Michelin sole tyre supplier since 1998 — dry + wet compounds tightly regulated." },
    { name: "Sim rig (team + driver)", description: "Full-motion simulators (Toyota TGR, Ferrari HP, Porsche 963) for setup + track learning." },
  ],
  duration: { approximateMinutes: 360, structure: "6h (Bahrain, Fuji, Spa) / 8h (Bahrain 8H, Portimão) / 24h (Le Mans, added 2018)." },
  objective: "Complete maximum laps in fixed time; finish first overall or in class.",
  matchStructure: "7-8 rounds per season, each 6-24 hrs. 3 drivers per car; classes: Hypercar (LMH+LMDh top tier), LMP2 (Le Mans only), LMGT3.",
  basicRules: [
    { title: "Balance of Performance (BoP)", body: "Hypercar class equalised across manufacturers via power + weight adjustments." },
    { title: "3-driver crew rotation", body: "Drivers rotate 2-3 hour stints; FIA Bronze/Silver/Gold/Platinum categorisation." },
    { title: "Pit stops for fuel + tyres + driver swap", body: "Full-service pit stops with driver change common." },
  ],
  advancedRules: [
    { title: "Double points at Le Mans", body: "2× points at Le Mans (50-36-30 etc.) due to length + prestige." },
    { title: "Class racing (Hypercar + LMGT3)", body: "Multiple classes race simultaneously; overall + class winners." },
    { title: "Full-Course Yellow (FCY)", body: "Non-safety-car yellow can be used for controlled slowdown; teams often pit during FCY for time savings." },
  ],
  scoring: {
    summary: "Points 25-18-15-12-10-8-6-4-2-1 for top-10; 2× at Le Mans. Manufacturers + drivers + team championships.",
    winCondition: "Most laps completed at time expiry; overall + class winners.",
    breakdown: [
      { action: "Race win", points: "25 pts (50 at Le Mans)" },
      { action: "Podium (2nd/3rd)", points: "18/15 pts (36/30 at Le Mans)" },
    ],
  },
  penalties: [
    { title: "Track limits", body: "3 warnings + 5-sec time penalty; systematic abuse = drive-through or stop-go." },
    { title: "Pit lane speeding (60 km/h)", body: "Drive-through penalty." },
    { title: "Contact / avoidable collision", body: "5-30 sec time penalty or drive-through depending on severity." },
    { title: "Unsafe release from pit box", body: "10-sec stop-go + team fine." },
  ],
  positions: [
    { name: "Driver (Bronze/Silver/Gold/Platinum FIA-rated)", role: "1 of 3 drivers in car; rotates in 2-3 hour stints.", count: 3 },
    { name: "Engineer + Race Strategist", role: "Pit-wall calls on strategy, tyres, driver swaps." },
  ],
  officiating: {
    officials: ["FIA Race Director (Eduardo Freitas / Niels Wittich as of 2024)", "3 Stewards", "Chief Scrutineer", "50+ marshals + observers"],
    summary: "Race Director controls sessions in real time; Stewards adjudicate protests; Scrutineer verifies compliance pre/post race.",
  },
  governingBodies: [
    { name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France" },
    { name: "Automobile Club de l'Ouest (ACO)", founded: 1906, headquarters: "Le Mans, France" },
  ],
  majorCompetitions: [
    { name: "24 Hours of Le Mans", frequency: "annual (June)", founded: 1923, region: "Le Mans, France" },
    { name: "6 Hours of Spa-Francorchamps", frequency: "annual", founded: 2013, region: "Belgium" },
    { name: "12 Hours of Sebring", frequency: "annual", founded: 1952, region: "Florida, USA" },
    { name: "6 Hours of Fuji", frequency: "annual", founded: 2012, region: "Japan" },
    { name: "8 Hours of Bahrain (season finale)", frequency: "annual", founded: 2012, region: "Sakhir, Bahrain" },
  ],
  countriesPlayed: ["FR", "GB", "DE", "IT", "US", "JP", "BH", "BE", "PT", "BR"],
  famousAthletes: [
    "Tom Kristensen (Denmark) — 9× Le Mans winner (1997, 2000, 2001-2005, 2008, 2013)",
    "Anthony Davidson + Sébastien Buemi (Toyota) — multi-time WEC drivers' champions",
    "Alessandro Pier Guidi / James Calado / Antonio Giovinazzi (Ferrari 499P) — 2023 Le Mans overall winners",
  ],
  records: [
    { title: "Most Le Mans wins (driver)", holder: "Tom Kristensen (Denmark)", value: "9× Le Mans winner (1997, 2000, 2001-2005, 2008, 2013)", year: 2013 },
    { title: "Most WEC drivers' championships", holder: "Anthony Davidson + Sébastien Buemi (Toyota)", value: "Multiple titles in Toyota TS050/TS040", year: 2019 },
    { title: "Ferrari return to Le Mans overall", holder: "Ferrari 499P #51 (Pier Guidi/Calado/Giovinazzi)", value: "First Ferrari overall Le Mans win in 58 years", year: 2023 },
    { title: "Most Le Mans wins (manufacturer)", holder: "Porsche", value: "19× overall Le Mans winner (as of 2024)", year: 2017 },
  ],
  variants: ["le-mans-24-hours", "european-le-mans-series", "imsa-weathertech-sportscar-championship"],
  relatedSports: ["formula-one", "imsa-sportscar", "24-hours-of-spa", "24-hours-of-daytona"],
  skills: ["endurance driving", "tyre management", "fuel-save", "night driving", "team communication"],
  strategies: [
    { title: "Fuel-save + tyre-preservation stints", body: "Save fuel via short-shifting + lift-and-coast to complete extra lap; extend tyre life by 10-20% via reduced throttle in Sector 1." },
    { title: "Safety car / FCY strategy", body: "Time pit stop during Full-Course Yellow to save ~40 seconds vs green-flag stop." },
    { title: "Driver rotation optimisation", body: "3 drivers split ~24 hrs into 2-3 hour stints; put fastest driver in double-stint at dawn or in wet." },
  ],
  terminology: [
    { term: "LMH", meaning: "Le Mans Hypercar — custom chassis + hybrid" },
    { term: "LMDh", meaning: "Le Mans Daytona h — spec LMP2 chassis + spec hybrid + brand bodywork" },
    { term: "BoP", meaning: "Balance of Performance — power/weight equalisation" },
    { term: "FCY", meaning: "Full-Course Yellow — controlled slowdown across track" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Karting + open-wheel foundation", body: "Karting nationals + Formula 3/4 to build racecraft." }] },
    { level: "intermediate", steps: [{ title: "GT + prototype apprenticeship", body: "GT3/GT4 + LMP2/LMP3 + FIA driver categorisation (Bronze/Silver/Gold)." }] },
    { level: "advanced", steps: [{ title: "Hypercar / factory driver", body: "Simulator hours (100+/week during season), tyre management, endurance fitness, night-driving discipline." }] },
  ],
  faq: [
    { question: "How is WEC different from Formula 1?", answer: "WEC uses closed-cockpit sports cars (Hypercars + GTs) with 3-driver teams and endurance races (6-24 hrs). F1 is single-seater open-cockpit sprint races (~90 min) with 1 driver per car." },
    { question: "What is the difference between LMH and LMDh?", answer: "Both compete in Hypercar class with BoP. LMH allows custom chassis + hybrid (Toyota, Ferrari, Peugeot). LMDh uses spec LMP2 chassis + spec hybrid + brand-specific bodywork/engine (Porsche, Cadillac, BMW, Alpine, Acura)." },
  ],
  wikipediaTitle: "FIA World Endurance Championship",
  sources: [{ label: "Wikipedia — FIA World Endurance Championship", url: "https://en.wikipedia.org/wiki/FIA_World_Endurance_Championship", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default worldEnduranceChampionship;
