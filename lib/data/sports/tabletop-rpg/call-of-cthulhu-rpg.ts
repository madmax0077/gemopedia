import type { Sport } from "@/lib/types";

export const callOfCthulhuRpg: Sport = {
  id: "call-of-cthulhu-rpg",
  slug: "call-of-cthulhu-rpg",
  name: "Call of Cthulhu RPG",
  officialName: "Call of Cthulhu (Chaosium, 7th Edition)",
  aliases: ["CoC", "Call of Cthulhu 7E", "Chaosium CoC"],
  shortDescription:
    "Iconic cosmic horror tabletop RPG based on H.P. Lovecraft's Cthulhu Mythos — published by Chaosium 1981 (currently 7th Edition, 2014); investigators uncover eldritch horrors + slowly lose sanity; Japan's most-played RPG (larger than D&D domestically); Free League + Miskatonic Repository organized-play.",
  longDescription:
    "Call of Cthulhu (abbreviated CoC) is the iconic cosmic horror tabletop RPG based on H.P. Lovecraft's Cthulhu Mythos (Cthulhu, Nyarlathotep, Yog-Sothoth, Shub-Niggurath, Great Old Ones, Elder Gods), published by Chaosium in 1981 (designer Sandy Petersen). Currently in 7th Edition (2014, designed by Paul Fricker + Mike Mason), one of the longest-running RPG systems in the world. Uses percentile-based (d100) resolution system with characteristic-based skills. Signature mechanic: Sanity (SAN) points which erode as investigators encounter cosmic horrors — Sanity loss can lead to temporary madness, phobias, indefinite insanity, and eventually permanent madness (character retired). Emphasis on investigation + horror + inevitable doom rather than heroic combat; player-characters are frail humans facing incomprehensible cosmic entities. Signature setting: 1920s USA + England ('Classic Cthulhu era'), though contemporary Modern Age + historical variants (Cthulhu Dark Ages, Cthulhu Renaissance) also popular. Japan's most-played tabletop RPG (larger than D&D in Japan — thanks to translation efforts + huge YouTube/Nico Nico live-play scene featuring anime voice actors). Chaosium's Miskatonic Repository is organized play + community-published scenarios. Notable actual-play podcasts: Critical Role (CoC one-shots), The Adventure Zone, Regular Sh*t, Muse (JP). Award-winning scenarios: 'Masks of Nyarlathotep' (globe-trotting campaign, considered one of greatest RPG campaigns ever), 'Beyond the Mountains of Madness' (Antarctic horror), 'Horror on the Orient Express'. Also huge sibling licensed games: Delta Green (modern paranormal conspiracy CoC), Trail of Cthulhu (GUMSHOE system by Kenneth Hite), Achtung! Cthulhu (WWII).",
  category: "tabletop-rpg",
  subCategory: "cosmic horror tabletop RPG (Lovecraft Mythos)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Chaosium, Ann Arbor MI → later Oakland CA)",
  estimatedOrigin: "First published 1981 by Chaosium (designer Sandy Petersen); 7th Edition 2014",
  players: { min: 3, max: 7, note: "1 Keeper (GM) + 2-6 investigators typical." },
  equipment: [{ name: "Call of Cthulhu 7E Keeper Rulebook + Investigator Handbook", description: "Core rulebooks (~$50 each print, PDF via Chaosium/DriveThruRPG)." }, { name: "Character sheet + pen", description: "1920s-era investigator with occupation + skills + Sanity." }, { name: "d100 + polyhedral dice", description: "Percentile-based system uses d100 primarily." }, { name: "Scenario book / campaign", description: "Published or Keeper-original scenario." }, { name: "Handouts + props (optional but iconic)", description: "Chaosium famous for atmospheric player handouts + Miskatonic newspaper clippings." }],
  duration: { approximateMinutes: 240, structure: "Single scenario ~4-6 hours; campaigns can run 50-500+ hours over years." },
  objective: "Investigate + survive Mythos threats while maintaining Sanity; success often means preventing / delaying cosmic horror, not defeating it.",
  matchStructure: "Cooperative storytelling; Keeper (GM) runs the scenario; investigators cooperate to survive + solve mysteries.",
  basicRules: [
    { title: "d100 (percentile) resolution", body: "Roll under skill/characteristic percentage on d100 for success." },
    { title: "Sanity (SAN) system", body: "Encountering Mythos entities requires SAN check; failure = SAN loss + potential temporary/indefinite madness." },
    { title: "Combat is deadly (frail humans)", body: "Investigators are frail humans; combat should generally be avoided or fled from." },
    { title: "Investigation-focused gameplay", body: "Emphasis on library research + interviews + clue-finding + occult research." },
  ],
  advancedRules: [
    { title: "Push Rolls (7E addition)", body: "Failed skill rolls can be 'pushed' — reroll with dramatic consequences on failure." },
    { title: "Bonus/Penalty Dice", body: "Circumstances add bonus (roll 2d10, take lower) or penalty (take higher) dice for tens digit." },
    { title: "Idea + Luck rolls", body: "Idea roll gets info from Keeper; Luck is a spendable stat for saving character or influencing outcomes." },
    { title: "Deep One Hybrids / Ghouls / Byakhee etc.", body: "Vast Mythos bestiary; each entity has SAN-loss values + special powers." },
  ],
  scoring: { summary: "Story progression + character survival + campaign resolution; no formal scoring — investigator survival is the win.", winCondition: "Survive + solve or prevent Mythos threats (though 'winning' is often defined as merely surviving)." },
  positions: [{ name: "Investigator (player-character)", role: "1920s-era or modern investigator with occupation (Journalist, Antiquarian, Detective, Doctor, Occultist, Author).", count: 5 }, { name: "Keeper of Arcane Lore (Keeper / GM)", role: "Storyteller + rules referee + all NPCs.", count: 1 }],
  officiating: { officials: ["No formal officials — the Keeper is judge + narrator"], summary: "Cooperative storytelling; Keeper adjudicates rules disputes." },
  governingBodies: [{ name: "Chaosium Inc.", founded: 1975, headquarters: "Ann Arbor, MI (originally) → Oakland, CA (current)" }],
  majorCompetitions: [{ name: "Chaosium's Miskatonic Repository (organized play)", frequency: "ongoing", founded: 2017, region: "worldwide (DriveThruRPG)" }, { name: "Cthulhu Con NecronomiCon", frequency: "annual", founded: 2013, region: "Providence, Rhode Island (Lovecraft's birthplace)" }],
  countriesPlayed: ["USA", "JPN (largest per-capita)", "GBR", "GER", "FRA", "ITA", "BRA", "CAN", "AUS"],
  famousAthletes: ["Sandy Petersen (1981 designer)", "Paul Fricker + Mike Mason (7E designers)", "Rick Meints (Chaosium president)", "Chaosium's Keeper community"],
  records: [
    { title: "Published 1981 — 45+ years running", holder: "Chaosium", value: "Call of Cthulhu first published 1981 — one of longest continuously-published RPG systems (45+ years, 7 editions)", year: 2024 },
    { title: "Japan's #1 RPG (larger than D&D)", holder: "Chaosium / Japan CoC community", value: "Call of Cthulhu is Japan's most-played tabletop RPG — larger than D&D domestically due to translation + live-play scene", year: 2024 },
    { title: "Masks of Nyarlathotep campaign classic", holder: "Chaosium / Larry DiTillio (author)", value: "'Masks of Nyarlathotep' (1984) — globe-trotting Mythos campaign considered one of greatest tabletop RPG campaigns ever written", year: 1984 },
  ],
  variants: ["call-of-cthulhu-7e-modern-2014", "call-of-cthulhu-classic-1920s", "delta-green-modern-conspiracy", "trail-of-cthulhu-gumshoe-system", "cthulhu-dark-ages-medieval", "achtung-cthulhu-wwii"],
  relatedSports: ["dungeons-and-dragons-adventurers-league", "pathfinder-society", "delta-green-rpg", "trail-of-cthulhu", "vampire-the-masquerade"],
  skills: ["investigative deduction", "roleplay + character voice", "Sanity + horror atmosphere immersion", "cooperative problem-solving", "Keeper narrative direction"],
  wikipediaTitle: "Call of Cthulhu (role-playing game)",
  sources: [{ label: "Wikipedia — Call of Cthulhu (role-playing game)", url: "https://en.wikipedia.org/wiki/Call_of_Cthulhu_(role-playing_game)", publisher: "Wikipedia" }, { label: "Chaosium official", url: "https://www.chaosium.com", publisher: "Chaosium Inc." }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default callOfCthulhuRpg;
