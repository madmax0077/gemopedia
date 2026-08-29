import type { Sport } from "@/lib/types";

export const formationAerobatics: Sport = {
  id: "formation-aerobatics",
  slug: "formation-aerobatics",
  name: "Formation Aerobatics",
  officialName: "Formation Aerobatic Display Flying",
  aliases: ["Formation Display", "Aerobatic Teams", "Air Show Formation"],
  shortDescription:
    "Precision aerial choreography by teams of 4-9 aircraft performing synchronized aerobatic maneuvers at air shows; iconic teams include Red Arrows (RAF, GBR), Blue Angels (US Navy), Thunderbirds (US Air Force), Frecce Tricolori (Italy — largest at 9 aircraft), Patrouille de France.",
  longDescription:
    "Formation aerobatics is the display-flying discipline in which teams of typically 4-9 aircraft perform tightly synchronized aerobatic maneuvers at air shows, national celebrations, and military displays. Unlike individual aerobatic championships (judged), formation teams focus on visual precision + choreographed spectacle, typically flown within ~1-3 meter wing-tip spacing at speeds 300-800+ km/h. Premier teams: Red Arrows (RAF, 9 Hawk T1 aircraft, founded 1964 — over 5,000 displays worldwide); US Navy Blue Angels (6 F/A-18 Super Hornet aircraft, founded 1946 — oldest formation team globally); US Air Force Thunderbirds (6 F-16 Fighting Falcon, founded 1953); Italian Frecce Tricolori (9 MB-339 + 1 solo — largest formation team, founded 1961); Patrouille de France (8 Alpha Jet + 1 solo, founded 1953); Russian Knights (Su-30/35, founded 1991); Roulettes (RAAF, 6 PC-21); Snowbirds (RCAF, 9 CT-114 Tutor). Signature maneuvers: Diamond Nine (Red Arrows), Delta formation, Bomb Burst, Line-Astern Loop, Mirror Formation. Displays typically 20-25 min including tightly-timed synchronized cross + break maneuvers. Extreme discipline required — flying with tight spacing at high speed leaves little margin. History includes tragic accidents at practice/display; safety protocols evolved substantially post-1980s.",
  category: "air-sports",
  subCategory: "aerial display / formation flying",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "GB / USA / Italy / France (military display teams post-WWII)",
  estimatedOrigin: "Blue Angels (US Navy, 1946) — oldest currently-active team; RAF Red Arrows (1964); modern era 1950s+",
  players: { min: 4, max: 9, note: "Team size 4-9 aircraft (Frecce Tricolori largest at 9 + 1 solo)." },
  equipment: [{ name: "Aerobatic-capable aircraft (team-specific)", description: "BAE Hawk T1 (Red Arrows), F/A-18 (Blue Angels), F-16 (Thunderbirds), MB-339 (Frecce Tricolori), Alpha Jet (Patrouille de France)." }, { name: "Colored smoke system", description: "Smoke oil injected into exhaust for visual trails (red/white/blue typically)." }, { name: "Anti-G suit + helmet", description: "For high-G maneuvers." }, { name: "Radio + inter-plane comms", description: "Tight coordination via mission commander." }],
  duration: { approximateMinutes: 25, structure: "Display program typically 20-25 minutes; practice sessions 45-90 minutes." },
  objective: "Perform choreographed aerobatic display with maximum precision + visual spectacle for spectators.",
  matchStructure: "Non-competitive display flying; teams tour circuit of air shows + national events; no scoring/judging (unlike individual aerobatic championships).",
  basicRules: [
    { title: "Formation spacing rules", body: "Wing-tip separation ~1-3 meters (12-36 inches) typical during formation." },
    { title: "Mission Commander (Leader) sets pace", body: "All aircraft slaved to leader's control inputs via visual + radio cues." },
    { title: "Safety altitudes strict", body: "Minimum display altitudes regulated (typically 100-500 ft AGL by maneuver + country)." },
  ],
  scoring: { summary: "Non-competitive; measured by audience reception + safety + visual quality." },
  positions: [{ name: "Leader (Team Captain/Commander)", role: "Sets pace + calls maneuvers; usually most experienced pilot.", count: 1 }, { name: "Wingman (positions 2-8)", role: "Fly precise position relative to Leader.", count: 8 }, { name: "Solo pilot(s)", role: "Perform contrasting solo aerobatic segments (esp. Frecce, Patrouille)." }],
  governingBodies: [{ name: "National air forces (national governance)", founded: 1946, headquarters: "national" }],
  majorCompetitions: [{ name: "Royal International Air Tattoo (RIAT)", frequency: "annual", founded: 1971, region: "Fairford, England" }, { name: "EAA AirVenture Oshkosh", frequency: "annual", founded: 1953, region: "Oshkosh, Wisconsin, USA" }, { name: "Paris Air Show (Le Bourget)", frequency: "biennial", founded: 1909, region: "Le Bourget, France" }],
  countriesPlayed: ["GBR", "USA", "ITA", "FRA", "RUS", "CAN", "AUS", "ESP", "PAK", "IND", "TUR", "SWE"],
  famousAthletes: ["Red Arrows Team Leaders (rotating)", "Blue Angels Boss / Flight Leader", "Thunderbirds #1 (Commander/Leader)"],
  records: [
    { title: "Blue Angels oldest active formation team", holder: "US Navy Blue Angels", value: "Founded 1946 — oldest continuously-active formation display team in the world", year: 2024 },
    { title: "Frecce Tricolori largest formation team", holder: "Frecce Tricolori (Italy)", value: "9 aircraft + 1 solo = 10-aircraft display — largest current formation team", year: 2024 },
    { title: "Red Arrows 5,000+ displays", holder: "RAF Red Arrows", value: "Over 5,000 public displays in 60+ countries since 1964", year: 2024 },
  ],
  variants: ["display-team-military", "civilian-formation-team", "vintage-formation-warbird"],
  relatedSports: ["world-aerobatic-championship", "red-bull-air-race", "airshow-display"],
  skills: ["precision formation flying", "instant reaction to leader inputs", "G-force tolerance", "spatial awareness at close spacing"],
  wikipediaTitle: "Air show",
  sources: [{ label: "Wikipedia — List of aerobatic teams", url: "https://en.wikipedia.org/wiki/List_of_aerobatic_teams", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default formationAerobatics;
