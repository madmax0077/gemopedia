import type { Sport } from "@/lib/types";

export const dambeNigerianBoxing: Sport = {
  id: "dambe-nigerian-boxing",
  slug: "dambe-nigerian-boxing",
  name: "Dambe (Hausa Nigerian Boxing)",
  officialName: "Dambe (Traditional Hausa Combat Sport)",
  aliases: ["Nigerian Boxing", "Hausa Boxing", "Boxing of the Butchers"],
  shortDescription:
    "Traditional Hausa boxing sport of Nigeria + Niger + Chad + Sudan — practitioners fight with one dominant hand (kara) wrapped in cloth cord (sometimes with resin/rope for hardness) as striking weapon + other hand (shield) defensively; bout won by knocking opponent's hand/knee/back to ground (killing); butchers-guild origins ~1000+ years; huge West African rural spectator sport.",
  longDescription:
    "Dambe is a traditional boxing sport of the Hausa people of West Africa (northern Nigeria, southern Niger, Chad, Sudan) with origins over 1,000 years old — historically practiced by butchers' guilds (Hausa: 'yan dambe') as combat training + community entertainment. Practitioners fight with their dominant hand (called 'kara' or 'spear') wrapped tightly in cloth cord (traditionally coconut rope; some historical versions dipped in resin or embedded with broken glass — banned in modern regulated events), used as the primary striking weapon. The other hand (called 'shield') is held defensively — often chained/tied to prevent grabbing. Legs are used for kicking, blocking, and takedown attempts. Bout is won by 'killing' the opponent — knocking any part of body other than feet (hand, knee, back, hip) to the ground; three-round format (each round ends on 'kill' or ~3 min). No weight classes traditionally; matches organized by challenge + reputation. Traditional attire: bare-chested with cloth shorts; ankle bracelets called 'jangaba' with metallic pieces for musical effect during movement. Bouts accompanied by traditional Hausa drums (Kalangu, Ganga) + praise-singers (griots) chanting fighter's lineage + accomplishments. Growing modern professional scene since 2010s — Dambe Warriors + Dambe Fighting Championship promotions have TV + YouTube broadcast; some fights viewed 5M+ times online. Popularized internationally via YouTube channels + documentaries. Considered emerging niche global combat sport — some MMA fighters trained in Dambe. Notable modern promoters: Anas Alhassan (organizer), Uma Anthony (Nigerian promoter).",
  category: "combat-sports",
  subCategory: "traditional Hausa boxing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "niche",
  countryOfOrigin: "NG",
  regionOfOrigin: "West Africa (Northern Nigeria + Niger + Chad + Sudan — Hausa people, butchers' guilds)",
  estimatedOrigin: "Traditional Hausa origin ~1000+ years (butchers' guilds); modern professional promotions 2010s+",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Kara (dominant hand wrapped in cloth cord)", description: "Dominant hand wrapped tightly in coconut cord/cloth; primary striking weapon." }, { name: "Shield (non-dominant hand)", description: "Defensive hand; often tied/chained to prevent grabbing." }, { name: "Traditional cloth shorts (bare-chested)", description: "Traditional attire; some modern events use boxing shorts." }, { name: "Jangaba (ankle bracelets with metal beads)", description: "Traditional ankle jangling ornaments." }, { name: "Traditional drums (Kalangu + Ganga)", description: "Music accompaniment integral to atmosphere." }],
  duration: { approximateMinutes: 10, structure: "3 rounds × ~3 min each OR ending when 'kill' occurs; total ~10 min." },
  objective: "Win by 'killing' opponent — force any body part except feet to touch ground.",
  matchStructure: "3 rounds; each round can end early on kill; overall winner = 2+ round wins.",
  basicRules: [
    { title: "Strike with wrapped kara hand + kick with legs", body: "Dominant hand + legs are primary weapons." },
    { title: "'Kill' = opponent's hand/knee/back touches ground", body: "Round ends when opponent's body (not feet) touches ground." },
    { title: "3 rounds — 2 wins take match", body: "Round-by-round; 2 kills to win match." },
    { title: "Modern rules ban glass/resin embedding of kara", body: "Traditional glass/resin embedding banned in modern regulated events; cloth-only." },
  ],
  scoring: { summary: "Round-by-round: kill vs. no-kill; 2 wins per match.", winCondition: "Win 2 of 3 rounds by kill." },
  positions: [{ name: "Fighter ('Dan Dambe')", role: "Sole competitor.", count: 1 }, { name: "Cornerman + coach", role: "Between-rounds support.", count: 2 }, { name: "Traditional drummer + griot (ceremonial)", role: "Cultural accompaniment.", count: 3 }],
  officiating: { officials: ["Referee (Alkali)", "Corner Judges", "Chief Referee"], summary: "Community referees traditional; modern promotions use certified officials." },
  governingBodies: [{ name: "Dambe Warriors (modern promotion)", founded: 2016, headquarters: "Kano, Nigeria" }, { name: "Dambe Fighting Championship (DFC)", founded: 2015, headquarters: "Abuja, Nigeria" }, { name: "Traditional community councils (village elders)", founded: 900, headquarters: "regional West Africa" }],
  majorCompetitions: [{ name: "Dambe Warriors Championship (Kano)", frequency: "monthly", founded: 2016, region: "Kano + rotating Nigeria" }, { name: "Dambe Fighting Championship (DFC)", frequency: "quarterly", founded: 2015, region: "Nigeria" }, { name: "Traditional Hausa community tournaments (rural + urban)", frequency: "ongoing", founded: 1900, region: "Northern Nigeria + Niger + Chad" }],
  countriesPlayed: ["NGA (dominant)", "NER", "TCD", "SDN", "SEN (diaspora)", "growing international via YouTube diaspora scene"],
  famousAthletes: ["Shago (Nigerian Dambe champion, huge YouTube following)", "Ta Boy Sarki (Northern Nigeria pro fighter)", "Anas Alhassan (organizer + trainer)"],
  records: [
    { title: "1,000+ year Hausa cultural tradition", holder: "Hausa people", value: "Dambe traces to Hausa butchers' guilds ~1,000+ years ago; oldest continuous documented combat sport traditions of West Africa", year: 1000 },
    { title: "Dambe Warriors YouTube — millions of views", holder: "Dambe Warriors promotion", value: "Modern Dambe Warriors YouTube channel accumulated 100M+ combined views 2016-2024; individual bouts 5M+ views", year: 2024 },
    { title: "Modern professional era from 2015+", holder: "Dambe Warriors + DFC", value: "Modern professional Dambe promotions emerged 2015-2016 (Dambe Fighting Championship + Dambe Warriors) — TV + streaming distribution", year: 2015 },
  ],
  variants: ["traditional-open-hand-kara-cord", "modern-regulated-dambe-warriors-safety-rules", "shanci-related-hausa-wrestling-cognate"],
  relatedSports: ["muay-thai", "lethwei-burmese-bareknuckle", "senegalese-wrestling-laamb", "kickboxing"],
  skills: ["kara-hand striking (single-hand power punching)", "leg-kick + trip technique", "clinch-defense (shield hand)", "traditional footwork rhythmic to drums"],
  wikipediaTitle: "Dambe",
  sources: [{ label: "Wikipedia — Dambe", url: "https://en.wikipedia.org/wiki/Dambe", publisher: "Wikipedia" }, { label: "Dambe Warriors YouTube", url: "https://www.youtube.com/@DambeWarriors", publisher: "Dambe Warriors" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default dambeNigerianBoxing;
