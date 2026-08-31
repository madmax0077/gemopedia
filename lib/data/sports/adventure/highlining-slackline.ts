import type { Sport } from "@/lib/types";

export const highliningSlackline: Sport = {
  id: "highlining-slackline",
  slug: "highlining-slackline",
  name: "Highlining (Slackline Above Ground)",
  officialName: "International Slackline Association (ISA)",
  aliases: ["Highline", "High Slackline", "Cliff Slackline"],
  shortDescription:
    "Extreme discipline of slacklining — walking nylon/polyester webbing suspended 30-1000m+ above ground between cliffs, towers, or hot air balloons; born 1980s Yosemite climbers; harness + leash typical safety; world records include 2.8km walked line (Théo Sanson 2023 France) + 2130m elevation crossing (Jaan Roose 2024 Norway).",
  longDescription:
    "Highlining is the extreme discipline of slacklining — walking on a thin, flexible nylon or polyester webbing (typically 2.5-5cm wide) tensioned between two anchor points suspended high above the ground: cliff to cliff, tower to tower, or between hot air balloons. Distinguished from regular slacklining by extreme height (typically 30-1000+ meters above ground). Origins traced to 1980s Yosemite Valley climbers Adam Grosowsky + Jeff Ellington who first walked a slackline in Camp 4 (1979-1983), then rigged early highlines above Yosemite cliffs early 1980s. Safety systems: (1) 'Leash' — harness + short cord attached from waist to line; if fall occurs, walker hangs from leash + can regain position; (2) 'Backup line' — secondary safety webbing paralleling main walkway in case main fails; (3) Modern rigging uses redundant anchors + dynamic ratings well above expected loads. Progression: (a) Slackline (low ground) 3-30m; (b) Trickline (2m ground, spring-loaded for jumping tricks); (c) Waterline (over water); (d) Highline (>30m above ground); (e) Ultra-highline (>500m above ground). Notable global feats: (1) Théo Sanson (France) walked 2,830m (1.75 mile) line in Utah 2023 — longest highline ever walked; (2) Jaan Roose (Estonia) crossed 2,130m elevation gap in Norway 2024 (highest ever); (3) Alex Mason (USA) walked 460m Yosemite Lost Arrow Spire 2019; (4) Marseille Prat brothers (France) 2000s-2010s highline pioneers; (5) Sonya Iverson (USA) numerous women's records; (6) Faith Dickey (USA) first woman to walk +100m highline. Modern competition: (i) Distance records (longest line walked); (ii) Elevation records (highest above ground); (iii) Freestyle tricks (surfs, sits, standing tricks); (iv) Team relay across long lines. International Slackline Association (ISA) founded 2013 with disciplines Slackline + Trickline + Highline. Highline gatherings ('festivals') include GGBY (November Utah), Petzl RocTrip, Untamed Highline Festival. Community strongholds: Yosemite/Utah/Squamish USA + Canada, Chamonix + Val di Mello Europe, Meteora Greece, Fjords Norway, Sonora Mexico. Aesthetic focus dominates — often filmed with drones for viral videos on YouTube + Instagram.",
  category: "adventure-extreme-sports",
  subCategory: "extreme slacklining suspended above ground",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "20th-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Yosemite Valley, California — pioneered 1980s by climbers Adam Grosowsky + Jeff Ellington)",
  estimatedOrigin: "Slacklining pioneered 1979-1983 Yosemite Valley climbers Adam Grosowsky + Jeff Ellington; first highlines rigged early-mid 1980s Yosemite; International Slackline Association founded 2013",
  players: { min: 1, max: 1, note: "Individual discipline; team rigging required for anchoring." },
  equipment: [{ name: "Slackline webbing (2.5-5cm wide)", description: "Flat woven nylon or polyester webbing; 2.5-5cm wide; hundreds to thousands of kg tensile strength; tensioned with pulley or ratchet." }, { name: "Harness + leash system", description: "Climbing harness + short cord ('leash') attached from waist to line; catches falls." }, { name: "Backup safety line (redundant)", description: "Secondary parallel webbing in case main line fails; ISA recommends double redundancy." }, { name: "Anchor systems (bolts, natural anchors, protection)", description: "Anchor bolts drilled into rock or natural anchors (rock horns, trees); redundant with equalized rigging." }, { name: "Helmet + climbing shoes (optional)", description: "Helmet strongly recommended for highline; barefoot or thin climbing shoes for feel." }],
  duration: { approximateMinutes: 30, structure: "Setup 2-8 hours (rigging); walk attempt 2-30 min depending on line length; freestyle tricks 60 sec routines." },
  objective: "Walk complete length of highline without falling; alternate objectives include freestyle tricks, distance records, elevation records.",
  matchStructure: "Recreational: walk line back + forth. Competitive: distance records (longest completed walk), elevation records (highest above ground), freestyle judged tricks.",
  basicRules: [
    { title: "Leash + harness safety mandatory (highlines)", body: "All highlines require walker to wear climbing harness with leash attached to line; falls caught by leash — no ground impact." },
    { title: "Double redundant rigging + safety line", body: "ISA standards require double redundancy: main line + backup line + double-anchor systems on both ends; all rated well above expected loads." },
    { title: "Complete walk = both anchors reached without fall", body: "'Sending' a highline = walking from one anchor to the other without falling (falls caught by leash but end attempt); may re-mount + retry." },
    { title: "Distance measured cable-to-cable; elevation measured to ground below", body: "Distance = straight-line between anchor points; elevation = lowest point of line above ground below." },
  ],
  scoring: { summary: "Distance records: line length walked complete. Elevation records: line height above ground. Freestyle: 0-100 judge scores across trick difficulty + execution + creativity.", winCondition: "Distance: longest completed walk. Elevation: highest completed. Freestyle: highest judge score." },
  positions: [{ name: "Highliner (Walker)", role: "Sole competitor walking the line.", count: 1 }, { name: "Rigger", role: "Technical setup + anchor construction; often team of 3-6.", count: 5 }, { name: "Safety Spotter", role: "Watches walker + assists in leash management; ready for rescue.", count: 2 }],
  officiating: { officials: ["ISA Certified Judge", "Distance Measurer", "Freestyle Judges (3-5)", "Safety Marshal"], summary: "ISA certified officials for record verification + competitions." },
  governingBodies: [{ name: "International Slackline Association (ISA)", founded: 2013, headquarters: "Berlin, Germany" }],
  majorCompetitions: [{ name: "GGBY Highline Festival (Utah)", frequency: "annual (November)", founded: 2011, region: "Moab, Utah, USA" }, { name: "Untamed Highline Festival", frequency: "annual", founded: 2016, region: "Rotating (Europe + USA)" }, { name: "ISA World Slackline + Highline Championships", frequency: "biennial", founded: 2015, region: "Rotating international" }, { name: "Petzl RocTrip Highline Series", frequency: "annual", founded: 2008, region: "Rotating (Yosemite, Chamonix, etc)" }],
  countriesPlayed: ["USA (Yosemite + Moab dominant scenes)", "FRA (Chamonix)", "DEU", "CHE", "ITA (Val di Mello)", "GRC (Meteora)", "NOR", "CAN", "AUS", "MEX", "ESP", "worldwide alpine + cliff regions"],
  famousAthletes: ["Théo Sanson (France — 2,830m longest highline 2023)", "Jaan Roose (Estonia — 2,130m elevation crossing Norway 2024)", "Alex Mason (USA — Yosemite Lost Arrow Spire)", "Faith Dickey (USA — first woman +100m highline)", "Sonya Iverson (USA — women's records)", "Andy Lewis (USA — trickline + highline pioneer)", "Prat brothers Guillaume + Antoine (France)"],
  records: [
    { title: "Théo Sanson 2,830m longest highline ever walked (2023)", holder: "Théo Sanson (France)", value: "Théo Sanson (France) walked complete 2,830m (1.75 mile) highline in Utah 2023 — longest highline ever walked; took ~4 hours to complete", year: 2023 },
    { title: "Jaan Roose 2,130m elevation crossing Norway (2024)", holder: "Jaan Roose (Estonia)", value: "Jaan Roose (Estonia) crossed 2,130m elevation gap between Norwegian fjord cliffs 2024 — highest highline crossing ever recorded", year: 2024 },
    { title: "Origin 1980s Yosemite Valley climbers", holder: "Adam Grosowsky + Jeff Ellington", value: "Slacklining pioneered 1979-1983 by Yosemite climbers Adam Grosowsky + Jeff Ellington at Camp 4; first highlines rigged mid-1980s above Yosemite cliffs", year: 1983 },
  ],
  variants: ["slackline-low-ground-3-30m", "trickline-spring-loaded-2m", "waterline-over-water", "highline-above-30m", "ultra-highline-above-500m", "midline-100-500m", "hotline-between-hot-air-balloons"],
  relatedSports: ["climbing-sport", "tightrope-walking-circus", "wingsuit-base-proximity", "parkour-freerunning-fig"],
  skills: ["single-leg balance (extreme)", "leash-catch recovery technique", "psychological composure over exposure", "flow state under extreme drop"],
  wikipediaTitle: "Slacklining",
  sources: [{ label: "Wikipedia — Slacklining", url: "https://en.wikipedia.org/wiki/Slacklining", publisher: "Wikipedia" }, { label: "International Slackline Association", url: "https://www.slacklineinternational.org", publisher: "ISA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default highliningSlackline;
