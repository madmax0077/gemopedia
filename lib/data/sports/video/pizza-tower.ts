import type { Sport } from "@/lib/types";

export const pizzaTower: Sport = {
  id: "pizza-tower",
  slug: "pizza-tower",
  name: "Pizza Tower",
  officialName: "Pizza Tower (Tour de Pizza / McPig)",
  aliases: ["Pizza Tower Speedrun", "PT"],
  shortDescription:
    "Indie 2D platformer (2023, Tour de Pizza / Pizza Tower Guy 'McPig') — Wario Land-inspired ultra-fast momentum-based platformer following Peppino Spaghetti climbing a pizza-themed tower; cult indie hit with massive speedrunning + fan community; Golden Joystick 2023 nominee.",
  longDescription:
    "Pizza Tower is a 2D indie platformer released 26 January 2023 by Tour de Pizza (solo developer Pizza Tower Guy, aka 'McPig' from Toronto Canada — real name kept semi-anonymous) after 5+ years of development. Massively inspired by Wario Land series (particularly Wario Land 4), the game follows Peppino Spaghetti — an anxious Italian chef — who must climb the titular pizza-themed tower to prevent his restaurant from being destroyed by a giant sentient pizza-launcher weapon. Signature gameplay: ultra-fast momentum-based platforming where players build up speed with the Mach Run mechanic to break through walls + destroy enemies + reach hidden collectibles. Each of 5 world levels features escape sequences where players must retrace the level to reach the exit before time runs out — considered signature high-tension gameplay moments. Distinct hand-drawn animation style + relentless energetic Sonic-adjacent chiptune soundtrack (composed by Frank Klepacki assistant Ronan de Castel + others). Massive critical + commercial success — sold 1M+ copies in first year despite indie budget; Metacritic 90+ score. Golden Joystick 2023 Best Indie Game nominee; Steam Award 'Best Game You Suck At' winner 2023. Massive speedrunning scene — Peppino Any% record ~28 min (varies by category); glitchless + all bosses categories active. Enormous fan community with Discord 50,000+ members; fan-made mod scene (custom levels, character mods). Considered one of the best indie platformers of the 2020s alongside Celeste + Hollow Knight.",
  category: "video-games",
  subCategory: "indie 2D momentum platformer",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Tour de Pizza / McPig solo dev, Toronto)",
  estimatedOrigin: "Development ~2017-2023; Steam release 26 January 2023",
  players: { min: 1, max: 1 },
  equipment: [{ name: "PC (Windows/Linux/Mac) OR gaming consoles", description: "Steam PC + Xbox + PlayStation + Switch." }, { name: "Controller OR keyboard", description: "Both supported; controller preferred by most speedrunners." }, { name: "Streaming setup (competitive scene)", description: "OBS + capture card for speedrun submissions." }],
  duration: { approximateMinutes: 480, structure: "Main story: ~8-12 hours; 100% completion: ~30-40 hours; Any% speedrun: ~28 min." },
  objective: "Climb pizza tower + rescue restaurant; collect Pizza Toppings across 20+ levels; defeat 5 bosses.",
  matchStructure: "Single-player campaign; speedrunning competitive scene bracketed by category (Any%, 100%, All Bosses, Individual Level).",
  basicRules: [
    { title: "Momentum-based platforming (Mach Run)", body: "Peppino builds speed via Mach Run to break walls + defeat enemies + reach hidden areas." },
    { title: "Escape sequence at each level", body: "After reaching level's peak, timer starts + Peppino must retrace to exit before time expires." },
    { title: "Combo system + P-Ranks", body: "Combo counter for extended enemy chains; P-Rank = perfect run for level (highest tier)." },
    { title: "5 Toppings + Secrets per level", body: "Collect Pizza Toppings (challenges) + Secrets (hidden areas) for 100% completion." },
  ],
  scoring: { summary: "Individual level ranking (D/C/B/A/S/P) based on time + combo + collectibles; speedrun categories timed to 0.01s.", winCondition: "Story: complete all 5 worlds. Speedrun: fastest time in chosen category." },
  positions: [{ name: "Peppino Spaghetti (player character)", role: "Anxious Italian chef protagonist.", count: 1 }, { name: "Speedrunner (competitive scene)", role: "Sole player.", count: 1 }],
  governingBodies: [{ name: "Tour de Pizza (developer/publisher)", founded: 2018, headquarters: "Toronto, Canada" }, { name: "Speedrun.com — Pizza Tower community leaderboards", founded: 2014, headquarters: "worldwide (online)" }],
  majorCompetitions: [{ name: "Speedrun.com Pizza Tower Leaderboards", frequency: "ongoing (any time)", founded: 2023, region: "worldwide (online)" }, { name: "Games Done Quick (GDQ) charity events (Pizza Tower featured)", frequency: "biannual", founded: 2010, region: "USA (GDQ headquarters)" }],
  countriesPlayed: ["USA", "GBR", "GER", "BRA", "JPN", "worldwide"],
  famousAthletes: ["Pizza Tower Guy 'McPig' (developer)", "Frank (composer)", "Speedrunner community champions (rotating by category)"],
  records: [
    { title: "1M+ copies sold first year", holder: "Tour de Pizza", value: "Pizza Tower sold 1M+ copies within first year of Steam release (Jan 2023 — Jan 2024) — massive indie success", year: 2024 },
    { title: "Golden Joystick 2023 Best Indie nominee", holder: "Golden Joystick Awards", value: "Nominated for 2023 Golden Joystick Best Indie Game; won Steam Award 'Best Game You Suck At'", year: 2023 },
    { title: "Speedrun Any% ~28 min", holder: "Pizza Tower speedrun community", value: "Any% speedrun world record ~28 min (varies by patch); active speedrun scene with multiple categories", year: 2024 },
    { title: "5+ years solo dev by McPig", holder: "Pizza Tower Guy (Tour de Pizza)", value: "Developed over 5+ years by solo dev 'McPig' (Toronto, Canada) — kept anonymous identity", year: 2023 },
  ],
  variants: ["any-percent-speedrun", "100-percent-speedrun-all-toppings-secrets", "all-bosses-speedrun", "individual-level-p-rank-speedrun"],
  relatedSports: ["wario-land-4-inspiration", "celeste-indie-platformer", "hollow-knight-indie-metroidvania", "sonic-hedgehog-momentum"],
  skills: ["momentum-based movement mastery", "escape-sequence route memorization", "combo chaining", "wall-breaking timing", "P-Rank optimization"],
  wikipediaTitle: "Pizza Tower",
  sources: [{ label: "Wikipedia — Pizza Tower", url: "https://en.wikipedia.org/wiki/Pizza_Tower", publisher: "Wikipedia" }, { label: "Speedrun.com — Pizza Tower", url: "https://www.speedrun.com/pt", publisher: "Speedrun.com" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default pizzaTower;
