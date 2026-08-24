import type { Sport } from "@/lib/types";

/**
 * Escape & immersive experiences — real-world puzzle rooms, treasure
 * hunts, ARGs and immersive theatre. New top-level category
 * `escape-immersive` (games where the world is the board).
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_ESCAPE: Sport[] = [
  {
    id: "escape-room", slug: "escape-room", name: "Escape Room",
    aliases: ["Real-life Escape Game", "Puzzle Room"],
    category: "escape-immersive", sportType: "team", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "21st-century",
    countryOfOrigin: "JP", estimatedOrigin: "2007, Takao Kato / SCRAP (Kyoto Japan) — global explosion since 2012",
    players: { min: 2, max: 12 },
    shortDescription: "Real-world puzzle-room game — a team is 'locked' in a themed room and must solve chained puzzles to escape within 60 minutes.",
    longDescription: "Escape rooms are live-action team puzzle games invented by Takao Kato of SCRAP in Kyoto in 2007 and exported globally from around 2012 (Puzzle Room Los Angeles, ClueQuest London). A team of 2–12 is 'locked' inside a themed room and has 60 minutes to solve a chain of interlocking puzzles — combination locks, hidden compartments, cyphers, technology, physical challenges — to escape. Over 50,000 rooms operate worldwide as of 2024, in every genre from Sherlock Holmes to zombie apocalypse.",
    wikipediaTitle: "Escape room", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "treasure-hunt", slug: "treasure-hunt", name: "Treasure Hunt",
    category: "escape-immersive", sportType: "team", indoorOutdoor: "outdoor",
    isOlympic: false, popularity: "global", era: "ancient",
    countryOfOrigin: "GB", estimatedOrigin: "Traditional worldwide — children's-party staple; modern adult 'treasure-hunt weekends' since 20th century",
    players: { min: 2, max: 50 },
    shortDescription: "Clue-following expedition — follow a chain of written clues and location markers to find a hidden 'treasure' at the end.",
    longDescription: "A treasure hunt is a game in which players follow a chain of clues to a hidden 'treasure' — commonly at children's parties, corporate away-days and public festivals. Each clue typically leads to the next location, sometimes across a small area (a house or garden) or a whole city (adult team-building versions). The great real-world treasure hunt Masquerade (Kit Williams, 1979) and Forrest Fenn's Rocky-Mountain hunt (2010–2020) both attracted global followings.",
    wikipediaTitle: "Treasure hunt (game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "scavenger-hunt", slug: "scavenger-hunt", name: "Scavenger Hunt",
    category: "escape-immersive", sportType: "team", indoorOutdoor: "outdoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1930s New York — Elsa Maxwell's celebrity society-party invention; university tradition since",
    players: { min: 4, max: 200 },
    shortDescription: "Race to collect a checklist of objects, sights or challenges — from photographing landmarks to obtaining odd items — before your rivals do.",
    longDescription: "Scavenger hunts are team-based race games popularised by American socialite Elsa Maxwell in 1930s New York. Teams receive a checklist of items to collect, sights to photograph, tasks to complete or people to meet within a time limit. Points are awarded by items or challenges completed. University orientation weeks (the University of Chicago 'Scav Hunt' is the world's largest), city-tour operators, cruise ships and children's parties all run modern variants.",
    wikipediaTitle: "Scavenger hunt", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "geocaching", slug: "geocaching", name: "Geocaching",
    category: "escape-immersive", sportType: "individual", indoorOutdoor: "outdoor",
    isOlympic: false, popularity: "global", era: "21st-century",
    countryOfOrigin: "US", estimatedOrigin: "2000, Dave Ulmer (Oregon USA) — days after selective-availability GPS de-scrambling",
    players: { min: 1, max: 10 },
    shortDescription: "GPS-driven outdoor treasure hunt — use published coordinates to find small hidden containers ('caches') worldwide.",
    longDescription: "Geocaching is a real-world outdoor treasure-hunting hobby that began on 3 May 2000, days after the US military stopped scrambling civilian GPS signals. Dave Ulmer hid a bucket in the Oregon woods, posted its coordinates online, and challenged the internet to find it. Today Geocaching.com lists over 3 million active caches in 191 countries. Players use GPS-enabled devices to navigate to the coordinates, sign the logbook and swap small trinkets. A worldwide outdoor community with millions of players.",
    wikipediaTitle: "Geocaching", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "arg", slug: "arg", name: "Alternate Reality Game",
    aliases: ["ARG"],
    category: "escape-immersive", sportType: "team", indoorOutdoor: "both",
    isOlympic: false, popularity: "regional", era: "21st-century",
    countryOfOrigin: "US", estimatedOrigin: "2001, Microsoft's The Beast (marketing for A.I. Artificial Intelligence); genre-defining ILoveBees (2004)",
    players: { min: 100, max: 100000 },
    shortDescription: "Story-driven puzzle game that spills into the real world — websites, phone numbers, real locations and social media are all part of the game.",
    longDescription: "Alternate Reality Games (ARGs) are collaborative story-and-puzzle experiences that use the real world (websites, telephone numbers, physical locations, social media, print media, dead-drops) as the playing field. Pioneered by 2001's The Beast (marketing for Spielberg's A.I. Artificial Intelligence) and definitively established by 2004's I Love Bees (marketing for Halo 2). Devoted communities collaborate for weeks or months to solve the mystery; recent examples include Playtime, Cicada 3301 and Year Zero.",
    wikipediaTitle: "Alternate reality game", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "murder-mystery", slug: "murder-mystery", name: "Murder Mystery Game",
    aliases: ["Murder Mystery Dinner", "Whodunnit Party"],
    category: "escape-immersive", sportType: "team", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "GB", estimatedOrigin: "1930s British parlour game; commercialised How to Host a Murder 1985 (US)",
    players: { min: 6, max: 20 },
    shortDescription: "Live role-play dinner-party puzzle — each guest is assigned a character, one is a murderer, and the rest must deduce who through the evening.",
    longDescription: "Murder mystery games are live role-play dinner-party puzzles with roots in 1930s British parlour play (and Agatha Christie novels). Each guest is assigned a character in a pre-written scenario, one of whom is the murderer. Over an evening (usually 2–4 hours across 3 acts, each timed to a course of dinner), players stay in character, share clues, interrogate suspects and try to solve the murder. Commercialised as How to Host a Murder (1985); Murder Mystery Company runs professional versions worldwide.",
    wikipediaTitle: "Murder mystery game", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "immersive-theatre", slug: "immersive-theatre", name: "Immersive Theatre Games",
    aliases: ["Immersive Theatre", "Site-specific Theatre"],
    category: "escape-immersive", sportType: "individual", indoorOutdoor: "both",
    isOlympic: false, popularity: "regional", era: "21st-century",
    countryOfOrigin: "GB", estimatedOrigin: "2000s British immersive scene; Punchdrunk's Sleep No More (2003) genre-defining",
    players: { min: 50, max: 500 },
    shortDescription: "Blurs theatre and game — the audience wanders an environment, follows performers and makes discoveries; sometimes there are puzzles to solve.",
    longDescription: "Immersive theatre games blur staged performance with interactive experience. The audience is no longer seated in front of a proscenium — they roam a themed environment (a warehouse, a hotel, a specially-dressed building), follow performers of their choosing, make discoveries, and sometimes participate in puzzles or one-on-one intimate scenes. Pioneered by British companies like Punchdrunk (Sleep No More, 2003), it now includes globally-touring Secret Cinema and Meow Wolf's permanent installations.",
    wikipediaTitle: "Immersive theatre", lastVerified: TODAY, confidence: "verified",
  },
];
