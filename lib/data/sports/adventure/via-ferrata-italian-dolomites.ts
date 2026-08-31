import type { Sport } from "@/lib/types";

export const viaFerrataItalianDolomites: Sport = {
  id: "via-ferrata-italian-dolomites",
  slug: "via-ferrata-italian-dolomites",
  name: "Via Ferrata (Iron Path Climbing)",
  officialName: "UIAA (International Climbing and Mountaineering Federation) Via Ferrata guidelines",
  aliases: ["Iron Way", "Klettersteig", "Klettersteige", "K2-K6 Grades"],
  shortDescription:
    "Protected mountain climbing route with fixed steel cable + iron rungs + ladders — allows non-technical climbers to access alpine peaks + traverse exposed terrain safely; originated Italian Dolomites WWI as military climbing routes; ~1,000 via ferratas worldwide dominated by Italian Alps; K1-K6 difficulty grading + Klettersteig standards.",
  longDescription:
    "Via Ferrata (Italian: 'iron path', German: 'Klettersteig' meaning 'climbing path') is a form of protected mountain climbing along fixed steel cables + iron rungs + ladders + bridges permanently anchored to steep rock faces. Allows relatively inexperienced climbers (with proper safety gear) to access alpine peaks + traverse extremely exposed terrain that would otherwise require advanced rock climbing skills. Originated in the Dolomites (northeastern Italian Alps — border of Italy + Austria) during World War I 1915-1918 as military climbing routes: Italian + Austro-Hungarian armies fought the 'White War' in Dolomite peaks + installed hundreds of protected paths + tunnels for troop movement + supply — many WWI-era via ferratas still exist today (Via Ferrata delle Trincee 'of the Trenches', Ivano Dibona, Sentiero della Pace 'Peace Path'). Post-war: (1) 1920s-30s Italian Alpine Club rehabilitated + expanded historic military routes; (2) 1960s-80s modernization + safety improvements added many recreational via ferratas; (3) 1990s-2000s Austrian + Slovenian + French Alps expanded significantly; (4) 2000s international expansion to USA (Telluride Colorado), Canada, Australia (New South Wales), New Zealand, Turkey, Brazil. Standard safety equipment: (a) Climbing helmet; (b) Full-body climbing harness; (c) Via ferrata lanyard — 2-arm shock-absorbing lanyard (called 'Y-clip') with automatic-locking carabiners that must always have at least one arm attached to steel cable; (d) Gloves (for cable friction); (e) Proper boots. Difficulty grading systems: (1) Schall scale (Austrian) A/B/C/D/E; (2) Klettersteig scale (German) K1-K6 (K1 easy, K6 extremely difficult); (3) Italian Alpine Club EEA (Easy) + EEA (Difficult) + Prova Alpinistica. Notable famous routes: (i) Via Ferrata Ivano Dibona (Cortina d'Ampezzo, Italy — WWI heritage, features 27m Ponte Cristallo suspension bridge; scenes shot for 1993 Sylvester Stallone movie 'Cliffhanger'); (ii) Via Ferrata Sass Rigais (Val Gardena, Italy); (iii) Via Ferrata Sentiero delle Bocchette (Brenta Dolomites, Italy — legendary long traverse); (iv) Via Ferrata Alleghesi (Monte Civetta, Italy); (v) Via Ferrata Innerkofler-De Luca (Sesto Dolomites, Italy — historic + technical); (vi) Klettersteig Piz Trovat (Switzerland); (vii) Via Ferrata Nasenwand (Austria, K6 extreme difficulty). Estimated ~1,000 via ferratas worldwide; ~500 concentrated in Italian Alps. Growing recreational scene attracts millions of climbers annually; UIAA published via ferrata safety guidelines 2000s.",
  category: "adventure-extreme-sports",
  subCategory: "protected mountain climbing on fixed cables + ladders",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Dolomites — northeastern Italian Alps (border Italy + Austria); WWI military origin 1915-1918",
  estimatedOrigin: "WWI military climbing routes 1915-1918 in Dolomites Italian Alps; post-WWI Italian Alpine Club expansion 1920s-30s; recreational modernization 1960s-80s; international expansion 2000s",
  players: { min: 1, max: 8, note: "Solo or small groups; typically 2-4 climbers moving in sequence." },
  equipment: [{ name: "Via ferrata lanyard ('Y-clip' 2-arm with auto-locking carabiners)", description: "Critical safety gear: 2-arm shock-absorbing lanyard with automatic-locking carabiners; UIAA-certified; always at least one arm attached to steel cable." }, { name: "Full-body climbing harness", description: "Full-body or seat + chest harness rated for mountaineering; attachment point for lanyard." }, { name: "Climbing helmet", description: "UIAA-rated helmet for rockfall + head impact protection; mandatory on most routes." }, { name: "Climbing gloves (leather + fingerless)", description: "Half-finger or leather-palm gloves for cable friction + rope handling; prevent hand blisters." }, { name: "Approach shoes or hiking boots", description: "Sturdy boots or approach shoes with good grip; some routes allow mountaineering boots." }, { name: "Fixed steel cable + iron rungs (installed on route)", description: "Route infrastructure: continuous 12-16mm steel cable + iron rungs + steel ladders + occasional suspension bridges permanently anchored to rock." }],
  duration: { approximateMinutes: 180, structure: "Short routes 2-4 hours; medium routes 4-8 hours; long traverses 6-12 hours; multi-day traverses like Sentiero delle Bocchette 2-4 days." },
  objective: "Complete via ferrata route safely from start to finish while managing exposure + technical difficulty.",
  matchStructure: "Non-competitive recreational sport; personal challenge + route collection culture; some organized guided tours + climbing club events.",
  basicRules: [
    { title: "Always keep at least one lanyard arm attached to cable", body: "Critical safety rule: at least one of the 2 Y-clip arms MUST be clipped to steel cable at all times; unclip one arm to move past cable anchor, then re-clip before unclipping second arm." },
    { title: "Wear full safety kit (helmet + harness + Y-clip lanyard)", body: "UIAA + all national alpine clubs mandate helmet + full-body harness + certified Y-clip via ferrata lanyard as minimum safety kit; casual improvisation is fatal." },
    { title: "Check route difficulty grade + prepare accordingly", body: "Grade appropriately: K1-K3 for beginners (some previous mountain hiking experience); K4-K5 for experienced climbers; K6 for expert only." },
    { title: "One climber per section of cable (spacing)", body: "Only ONE climber per section of cable between anchor points; if a climber falls, only that climber's shock-absorbing lanyard activates; multiple climbers on same section = catastrophic fall load." },
    { title: "Turn back in bad weather (lightning + ice + heavy rain)", body: "Steel cable + iron rungs are lightning attractors + become slippery in rain/ice; standard advice is turn back in questionable weather; alpine weather changes rapidly." },
  ],
  scoring: { summary: "Non-competitive recreational activity; personal achievement tracking of routes completed; grade-progression as personal challenge; no formal scoring.", winCondition: "Complete route safely; no competitive winning." },
  positions: [{ name: "Via Ferrata climber", role: "Recreational climber or mountain guide.", count: 8 }, { name: "Mountain Guide (professional)", role: "Certified guide leading clients on route.", count: 1 }],
  officiating: { officials: ["Mountain rescue services (Alpine countries)", "Alpine Club route maintainers"], summary: "No competitive officiating; safety governed by mountain rescue + Alpine Club route inspection." },
  governingBodies: [{ name: "UIAA (International Climbing and Mountaineering Federation)", founded: 1932, headquarters: "Bern, Switzerland" }, { name: "Club Alpino Italiano (CAI)", founded: 1863, headquarters: "Milan, Italy" }, { name: "Deutscher Alpenverein (DAV)", founded: 1869, headquarters: "Munich, Germany" }, { name: "Österreichischer Alpenverein (ÖAV)", founded: 1862, headquarters: "Innsbruck, Austria" }],
  majorCompetitions: [{ name: "Not a competitive sport — organized guided climbs + route collection culture", frequency: "N/A", founded: 1920, region: "worldwide alpine regions" }, { name: "Dolomites Alta Via long-distance traverses", frequency: "self-guided routes", founded: 1966, region: "Dolomites Italy" }, { name: "Sentiero delle Bocchette multi-day traverse", frequency: "self-guided route", founded: 1970, region: "Brenta Dolomites Italy" }],
  countriesPlayed: ["ITA (dominant — ~500 via ferratas Italian Alps)", "AUT", "DEU", "CHE", "SVN", "FRA", "ESP", "USA (Telluride Colorado)", "CAN", "AUS (New South Wales)", "NZL", "TUR", "BRA (growing)", "worldwide alpine regions"],
  famousAthletes: ["Reinhold Messner (Italian mountaineer + via ferrata heritage advocate)", "Simone Moro (Italian alpinist)", "Various Dolomite mountain guides + Italian Alpine Club veterans"],
  records: [
    { title: "~1,000 via ferratas worldwide (~500 in Italian Alps)", holder: "Global via ferrata infrastructure", value: "Estimated ~1,000 via ferrata routes worldwide; approximately 500 concentrated in Italian Alps (Dolomites + Alps) — highest concentration by far", year: 2024 },
    { title: "WWI military origin 1915-1918 in Dolomites", holder: "Italian + Austro-Hungarian military WWI", value: "Via ferrata concept originated 1915-1918 in Dolomites during WWI 'White War' between Italian + Austro-Hungarian armies — many original WWI routes still climbable today", year: 1918 },
    { title: "Via Ferrata Ivano Dibona featured in 'Cliffhanger' (1993)", holder: "Cortina d'Ampezzo, Italy + Sylvester Stallone film", value: "Via Ferrata Ivano Dibona (Cortina d'Ampezzo) with 27m Ponte Cristallo suspension bridge featured in 1993 Sylvester Stallone film 'Cliffhanger' — brought international recognition", year: 1993 },
  ],
  variants: ["classic-italian-dolomites-alpine", "austrian-klettersteig-K1-K6-grading", "wwi-heritage-military-routes", "recreational-family-K1-K3", "extreme-K6-athlete-only", "usa-adventure-park-via-ferratas", "urban-via-ferrata-artificial-structures"],
  relatedSports: ["climbing-sport", "mountaineering-alpine", "hiking-mountain", "canyoning-technical", "highlining-slackline"],
  skills: ["Y-clip lanyard clipping technique (never unclip both)", "cable + rung handling technique", "exposure management + psychological composure", "route grade + weather assessment"],
  wikipediaTitle: "Via ferrata",
  sources: [{ label: "Wikipedia — Via ferrata", url: "https://en.wikipedia.org/wiki/Via_ferrata", publisher: "Wikipedia" }, { label: "UIAA Via Ferrata Guidelines", url: "https://www.theuiaa.org", publisher: "UIAA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default viaFerrataItalianDolomites;
