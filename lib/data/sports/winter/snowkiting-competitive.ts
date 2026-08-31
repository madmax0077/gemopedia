import type { Sport } from "@/lib/types";

export const snowkitingCompetitive: Sport = {
  id: "snowkiting-competitive",
  slug: "snowkiting-competitive",
  name: "Snowkiting (Competitive)",
  officialName: "IKA Snowkiting World Championships (International Kiteboarding Association)",
  aliases: ["Snow Kiting", "Ski Kiting", "Kite Skiing"],
  shortDescription:
    "Winter kite-powered sport where snowboarder or skier is pulled across snow by kite (arc/tube); developed 1990s Scandinavia; disciplines include Course Race + Freestyle + Speed + Distance (2500km 'Red Bull Ragnarok' race Norway 2010+); IKA governance since 2008.",
  longDescription:
    "Snowkiting is a winter kite-powered sport where a rider on skis or snowboard uses a large controllable kite (typically 4-15 m² arc or leading-edge-inflatable tube kite) to harness wind power for propulsion across snow, ice, or mountain terrain. Developed in the 1990s in Scandinavia (particularly Norway + Finland) as an offshoot of kitesurfing adapted for winter conditions + snow-covered lakes. Enables massive speeds (60+ km/h on hard-packed snow), high jumps (10-30m+ airtime with big kites in strong wind), and multi-day expedition traverses (transverse crossings of Greenland ice sheet, Antarctic + Arctic solo crossings). Four competitive disciplines: (1) Course Race — buoyed/flagged course triangles or slalom on frozen lakes; (2) Freestyle — judged tricks (rotations, kite-loops, grabs, board-offs); (3) Speed — 500m timed speed run; (4) Distance/Expedition — long-distance racing including the legendary Red Bull Ragnarok (Hardangervidda, Norway) — 100km course with variable weather + terrain, held annually since 2010, considered the ultimate snowkite endurance race. Governed globally by International Kiteboarding Association (IKA, founded 2008) as a discipline of kiteboarding. IKA Snowkiting World Championships biennial since 2010. Strongholds: Norway (dominant), Finland, Sweden, USA (Utah + Wyoming + Idaho), Canada, France (Alps), Switzerland, Russia. Signature events: Red Bull Ragnarok (Hardangervidda, Norway) — 100km endurance snowkite race with 700+ competitors; Snowkite Masters (St. Moritz, Switzerland); Uintas Kite Contest (Utah, USA). Extreme dangers include falling into crevasses (glacier terrain), altitude issues, avalanche exposure, hypothermia — professional expeditions carry ice-axe + emergency gear.",
  category: "winter-sports",
  subCategory: "kite-powered winter racing/freestyle",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "niche",
  countryOfOrigin: "NO",
  regionOfOrigin: "Norway / Finland (1990s Scandinavian kitesurf-derived winter adaptation)",
  estimatedOrigin: "Emerged 1990s Scandinavia; IKA founded 2008; Red Bull Ragnarok inaugural 2010",
  players: { min: 1, max: 700, note: "Individual competitive; Red Bull Ragnarok mass-start with 700+ competitors." },
  equipment: [{ name: "Snowkite (arc / LEI tube, 4-15 m²)", description: "Foil or leading-edge-inflatable kite; foil (Ozone Chrono, Flysurfer Sonic) most popular; size varies by wind strength." }, { name: "Skis OR snowboard", description: "Standard alpine or freeride skis/snowboard; some use touring skis for expedition." }, { name: "Kite harness + bar + lines", description: "Padded harness + 4-line control bar; 20-27m lines standard." }, { name: "Helmet + goggles + winter clothing", description: "Ski helmet + goggles + waterproof winter clothing." }, { name: "Avalanche safety gear (backcountry)", description: "Beacon + probe + shovel required for backcountry snowkite." }],
  duration: { approximateMinutes: 60, structure: "Course race: 15-60 min; Freestyle heat: 10-15 min; Ragnarok: 3-10 hours depending on skill + weather." },
  objective: "Course race: fastest time. Freestyle: highest judge score. Distance: complete Ragnarok course fastest.",
  matchStructure: "Course: heats + finals; Freestyle: judged rounds; Distance: mass-start or interval-start time trial.",
  basicRules: [
    { title: "Kite must be flown by rider throughout", body: "No motorized assist; kite is sole propulsion source." },
    { title: "Course markers must be rounded correctly", body: "Course race requires rounding buoys/flags in specified order." },
    { title: "Freestyle scoring on tricks + amplitude + variety", body: "Judges score rotations + kite-loops + board-offs + grabs + creativity." },
    { title: "Avalanche + weather cutoffs enforced", body: "Ragnarok + backcountry events have strict weather cutoffs — high wind + avalanche danger = event cancellation." },
  ],
  scoring: { summary: "Course/Ragnarok: fastest time. Freestyle: 0-10 judge scoring on execution + difficulty.", winCondition: "Fastest time OR highest judge score." },
  positions: [{ name: "Snowkiter (rider)", role: "Sole competitor.", count: 1 }, { name: "Kite handler / support (expedition)", role: "Ground-based support for long expeditions.", count: 1 }],
  officiating: { officials: ["Race Director", "Course Marshals", "Timekeeper", "Freestyle Judges (5-panel)", "Safety Officer"], summary: "IKA certified officials." },
  governingBodies: [{ name: "International Kiteboarding Association (IKA)", founded: 2008, headquarters: "Lugano, Switzerland" }, { name: "Norwegian Ski Federation (Skiforbundet)", founded: 1908, headquarters: "Oslo, Norway" }, { name: "Red Bull Ragnarok organization", founded: 2010, headquarters: "Norway" }],
  majorCompetitions: [{ name: "Red Bull Ragnarok", frequency: "annual (Easter weekend)", founded: 2010, region: "Hardangervidda, Norway (100km course)" }, { name: "IKA Snowkiting World Championships", frequency: "biennial", founded: 2010, region: "rotating (Norway, Switzerland, Russia)" }, { name: "Snowkite Masters St. Moritz", frequency: "annual", founded: 2005, region: "St. Moritz, Switzerland" }, { name: "Uintas Kite Contest (Utah)", frequency: "annual", founded: 2013, region: "Utah, USA" }],
  countriesPlayed: ["NOR (dominant)", "FIN", "SWE", "USA (UT/WY/ID)", "CAN", "FRA (Alps)", "CHE", "RUS", "ITA", "AUT"],
  famousAthletes: ["Espen Fadnes (NOR)", "Sky Solbakken (NOR)", "Franck Rifflet (FRA — expedition specialist)", "Chasta Bruce Stinson (USA)"],
  records: [
    { title: "Red Bull Ragnarok inaugural 2010 — biggest snowkite race", holder: "Red Bull", value: "Red Bull Ragnarok inaugurated 2010 on Hardangervidda plateau, Norway — 100km course, 700+ competitors annually, considered greatest snowkite race", year: 2010 },
    { title: "Snowkite Antarctic crossing 2011-2012", holder: "Ronny Finsås / expedition team", value: "Multiple solo + team crossings of Antarctica via snowkite documented 2010s+; Ronny Finsås notable early explorer", year: 2012 },
    { title: "IKA founded 2008", holder: "International Kiteboarding Association", value: "IKA founded 2008 to govern kiteboarding globally; adopted snowkiting as winter discipline", year: 2008 },
  ],
  variants: ["snowkite-race-course", "snowkite-freestyle-judged", "snowkite-speed-500m", "snowkite-expedition-multi-day"],
  relatedSports: ["kitesurfing", "kite-surfing", "cross-country-skiing", "snowboarding"],
  skills: ["kite flying in cold + gusty wind", "ski/snowboard technique on rough terrain", "wind reading + weather assessment", "avalanche awareness (backcountry)", "endurance (Ragnarok distance)"],
  wikipediaTitle: "Snowkiting",
  sources: [{ label: "Wikipedia — Snowkiting", url: "https://en.wikipedia.org/wiki/Snowkiting", publisher: "Wikipedia" }, { label: "Red Bull Ragnarok official", url: "https://www.redbull.com/int-en/events/red-bull-ragnarok", publisher: "Red Bull" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default snowkitingCompetitive;
