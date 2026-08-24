import type { Sport } from "@/lib/types";

/**
 * Arcade-cabinet classics — from the golden-age (1978–1985) coin-ops that
 * built video-gaming culture to modern light-gun and rhythm-cabinet
 * favourites. Category `video-games`; a few physical arcade experiences
 * (air hockey, pinball) live here too because their natural home is the
 * arcade floor.
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_ARCADE: Sport[] = [
  {
    id: "pac-man", slug: "pac-man", name: "Pac-Man",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1980, Namco (Toru Iwatani) — Japan then global",
    players: { min: 1, max: 2 },
    shortDescription: "The golden-age arcade icon — clear a maze of dots while dodging four coloured ghosts.",
    longDescription: "Pac-Man is a maze video game developed by Toru Iwatani at Namco, released in Japan in May 1980 and worldwide by October. The player guides Pac-Man through a maze, eating every dot while dodging the ghosts Blinky, Pinky, Inky and Clyde. Power pellets turn the ghosts blue and briefly edible. It became the highest-grossing arcade game of all time (over US$14 billion by 2016) and defined video-game character design.",
    wikipediaTitle: "Pac-Man", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "space-invaders", slug: "space-invaders", name: "Space Invaders",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1978, Taito (Tomohiro Nishikado) — kicked off the golden age of arcade games",
    players: { min: 1, max: 2 },
    shortDescription: "The 1978 arcade phenomenon — shoot descending waves of pixel aliens before they reach the ground.",
    longDescription: "Space Invaders is a fixed-shooter arcade video game created by Tomohiro Nishikado and released by Taito in 1978. Rows of pixel aliens descend the screen while the player slides a laser cannon horizontally and shoots them, dodging their return fire behind bunkers. It caused a coin-shortage panic in Japan and grossed US$3.8 billion — the biggest-selling entertainment product of its time, and the true beginning of the arcade video-game era.",
    wikipediaTitle: "Space Invaders", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "galaga", slug: "galaga", name: "Galaga",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1981, Namco — sequel to Galaxian, direct ancestor of every wave-shooter",
    players: { min: 1, max: 2 },
    shortDescription: "Fixed-shooter sequel to Galaxian — dogfight formations of alien insects that dive-bomb your ship.",
    longDescription: "Galaga is a fixed-shooter arcade video game developed and released by Namco in 1981, the sequel to 1979's Galaxian. Insect-like aliens dive-bomb the player's starship in swooping formations; a captured ship can be rescued for double-fire mode. Widely considered the definitive golden-age fixed shooter, it remains in arcades and stand-alone home cabinets four decades on.",
    wikipediaTitle: "Galaga", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "donkey-kong", slug: "donkey-kong", name: "Donkey Kong",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1981, Nintendo (Shigeru Miyamoto) — Mario's first appearance (as 'Jumpman')",
    players: { min: 1, max: 2 },
    shortDescription: "Nintendo's climb-and-jump arcade classic — leap barrels to rescue Pauline from a giant ape.",
    longDescription: "Donkey Kong is Nintendo's 1981 platform arcade game, designed by Shigeru Miyamoto. Playing as 'Jumpman' (later renamed Mario), the player climbs a construction site of ladders and girders, leaping barrels and fireballs thrown by the giant ape Donkey Kong to rescue Pauline. It rescued Nintendo's failing US arcade operation and set Miyamoto and Mario on the path to becoming the industry's most-important creators.",
    wikipediaTitle: "Donkey Kong (video game)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "mortal-kombat", slug: "mortal-kombat", name: "Mortal Kombat",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1992, Midway Games (Ed Boon, John Tobias) — Chicago",
    players: { min: 1, max: 2 },
    shortDescription: "Fatality-defining 1990s fighting game — digitised-actor sprites, blood-soaked combat and the ESRB's founding moment.",
    longDescription: "Mortal Kombat is a fighting-game series created by Ed Boon and John Tobias at Midway Games, launched in arcades in 1992. Its digitised-actor sprites, blood-and-gore combat and infamous 'Fatality' finishing moves triggered the US congressional hearings that created the ESRB video-game rating system in 1994. Now a Warner Bros/NetherRealm franchise with over a dozen numbered titles, films and a live-action universe.",
    wikipediaTitle: "Mortal Kombat", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "time-crisis", slug: "time-crisis", name: "Time Crisis",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1995, Namco — the pedal-and-pistol light-gun arcade series",
    players: { min: 1, max: 2 },
    shortDescription: "Namco's light-gun rail-shooter series — foot-pedal cover system and a plastic pistol against terrorist henchmen.",
    longDescription: "Time Crisis is Namco's light-gun rail-shooter arcade series launched in 1995. Its signature innovation was a foot pedal — press to pop out of cover and shoot, release to duck back. Play through cinematic levels of terrorist henchmen firing at Vindicators agents. Six main entries and multiple spin-offs (Crisis Zone, Time Crisis 3D, deluxe cabinets) kept it alive as one of the last big-cabinet arcade series into the 2010s.",
    wikipediaTitle: "Time Crisis", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "dance-dance-revolution", slug: "dance-dance-revolution", name: "Dance Dance Revolution",
    aliases: ["DDR"],
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "JP", estimatedOrigin: "1998, Konami — Bemani rhythm-game franchise",
    players: { min: 1, max: 2 },
    shortDescription: "Konami's foot-stomping arcade rhythm game — hit the four arrow panels in time with the music.",
    longDescription: "Dance Dance Revolution (DDR) is a rhythm arcade video-game franchise developed by Konami's Bemani division, launched in 1998. Players stand on a metal footpad with four arrow panels and step in time with scrolling arrows on-screen, choreographed to J-pop, techno and licensed music. Over 100 arcade releases and home ports across two-plus decades. Regarded as the game that turned rhythm gaming into a global genre.",
    wikipediaTitle: "Dance Dance Revolution", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "pinball", slug: "pinball", name: "Pinball",
    category: "video-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1930s coin-op invention; 1947 Humpty Dumpty introduced flippers",
    players: { min: 1, max: 4 },
    shortDescription: "The definitive arcade cabinet — launch a steel ball into a tilted playfield of bumpers and flippers, keep it alive, rack up score.",
    longDescription: "Pinball is a coin-operated arcade game where a player launches a steel ball onto a slanted playfield covered in bumpers, ramps, targets and holes, keeping the ball alive with two flippers at the bottom edge. Modern flipper pinball dates from Gottlieb's Humpty Dumpty (1947); Bally, Williams and Stern have released hundreds of themed cabinets since. Competitive pinball is codified by the International Flipper Pinball Association (IFPA) with a world ranking system.",
    wikipediaTitle: "Pinball", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "air-hockey", slug: "air-hockey", name: "Air Hockey",
    category: "precision-sports", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1969–1972, Brunswick Billiards engineers Bob Kenrick, Phil Crossman & Brad Baldwin",
    players: { min: 2, max: 4 },
    shortDescription: "Arcade-hall staple — two players slide plastic mallets on a low-friction air table, driving a puck into the opponent's goal.",
    longDescription: "Air Hockey is a two-player tabletop game invented in 1969–1972 by Brunswick Billiards engineers. A rectangular low-friction table pumps air through hundreds of tiny holes, floating a plastic puck; players stand at each end wielding mallets and try to slap the puck into a goal-slot on the opponent's end. The USA Air-Hockey Association runs world championships; competitive matches move at over 100 km/h.",
    wikipediaTitle: "Air hockey", lastVerified: TODAY, confidence: "verified",
  },
];
