import type { Sport } from "@/lib/types";

/**
 * Tile games — the mahjong family, dominoes descendants and modern
 * word-tile games like Bananagrams.
 */
const TODAY = "2026-08-24";

export const SPORT_STUBS_TILE: Sport[] = [
  {
    id: "rummikub", slug: "rummikub", name: "Rummikub",
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "IL", estimatedOrigin: "1930s, Ephraim Hertzano (Romania/Israel); commercialised globally 1970s",
    players: { min: 2, max: 4 },
    shortDescription: "Numbered-tile Rummy — form runs and groups; rearrange the table on your turn to fit new plays.",
    longDescription: "Rummikub is a numbered-tile game combining elements of Rummy, Mahjong and Dominoes. Invented in the 1930s by Ephraim Hertzano in Romania, it was published by his Israeli company Lemada in the 1970s and became a global bestseller. 106 tiles are shared; players race to empty their rack by forming runs (same-colour consecutive numbers) and groups (same number, different colours). Manipulating already-played tiles on your turn is the game's strategic heart.",
    wikipediaTitle: "Rummikub", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "mexican-train", slug: "mexican-train", name: "Mexican Train Dominoes",
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "MX", estimatedOrigin: "Adapted from Chinese Pai Gow to Mexican tradition; popular in US since 1990s",
    players: { min: 2, max: 8 },
    shortDescription: "Domino chain-building game — everyone builds their own private 'train' plus a shared Mexican train.",
    longDescription: "Mexican Train Dominoes is a domino chain-building game descended from the Chinese Pai Gow tile tradition. Played with a double-12 domino set, each player builds a personal 'train' extending from a central hub double; a shared 'Mexican train' is open to everyone. On your turn play one tile — if you can't, place a marker on your train and it opens to others. Round ends when a player empties their hand.",
    wikipediaTitle: "Mexican Train", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "chicken-foot", slug: "chicken-foot", name: "Chicken Foot Dominoes",
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "20th-century United States — variant of Mexican Train",
    players: { min: 2, max: 8 },
    shortDescription: "American domino variant — every hub double sprouts a three-tile 'chicken foot' that must be filled before other plays.",
    longDescription: "Chicken Foot is an American double-9 or double-12 domino game closely related to Mexican Train. When a double is played, three tiles must be added to it to form a 'chicken foot' before any other tile can be played anywhere on the board. Players race to shed their hand. Each round's leftover pips add to the loser's cumulative score; lowest total after the final round wins.",
    wikipediaTitle: "Chicken Foot (dominoes)", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "triominos", slug: "triominos", name: "Triominos",
    aliases: ["Tri-Ominos"],
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1965, Allan Cowan (Pressman Toy)",
    players: { min: 2, max: 4 },
    shortDescription: "Triangular Domino variant — each tile has three numbered corners, matched to adjacent tiles along their edges.",
    longDescription: "Triominos is a Domino variant played with 56 triangular tiles, each with a numbered corner (0–5) at each vertex. Players draw tiles into their rack and take turns adding a tile so that its two matching corners line up with adjacent tiles on the table. Points are scored by summing the three corners of the played tile, with bonuses for closing hexagons, bridges and other patterns. Published in 1965 by Pressman Toy.",
    wikipediaTitle: "Triominoes", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "bananagrams", slug: "bananagrams", name: "Bananagrams",
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "21st-century",
    countryOfOrigin: "US", estimatedOrigin: "2006, Abraham Nathanson (Rhode Island); UK launch 2008",
    players: { min: 1, max: 8 },
    shortDescription: "Fast, cross-word tile game — no board, no turn order. Race to arrange all your letter tiles into a connected grid.",
    longDescription: "Bananagrams is a fast letter-tile word game invented by Abraham Nathanson in 2006 and packaged in an iconic banana-shaped zippered pouch. Players race — without turns or a board — to arrange their letter tiles into a connected crossword-style grid. Whenever anyone builds their entire hand in they shout 'Peel!' and everyone must take a new tile. First to use all their tiles when the central pool is empty wins ('Bananas!').",
    wikipediaTitle: "Bananagrams", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "carrom", slug: "carrom", name: "Carrom",
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "regional", era: "19th-century",
    countryOfOrigin: "IN", estimatedOrigin: "19th-century Indian subcontinent — hugely popular across South Asia",
    players: { min: 2, max: 4 },
    shortDescription: "South Asian tabletop disc game — flick a striker with your finger to pocket carrom-men into corner nets.",
    longDescription: "Carrom is a South Asian tabletop disc game hugely popular across India, Pakistan, Bangladesh, Sri Lanka and Nepal, and gaining ground in East Asia and Europe. Played on a square powdered wooden board with pockets at each corner, players flick a heavier plastic 'striker' with their fingers to pocket small carrom-men (black, white and one red queen). International Carrom Federation runs a World Championships.",
    wikipediaTitle: "Carrom", lastVerified: TODAY, confidence: "verified",
  },
  {
    id: "mahjong-solitaire", slug: "mahjong-solitaire", name: "Mahjong Solitaire",
    aliases: ["Shanghai", "Taipei"],
    category: "tile-games", sportType: "individual", indoorOutdoor: "indoor",
    isOlympic: false, popularity: "global", era: "20th-century",
    countryOfOrigin: "US", estimatedOrigin: "1981, Brodie Lockard (PLATO computer system 'Mah-Jongg')",
    players: { min: 1, max: 1 },
    shortDescription: "Single-player tile-matching game — remove pairs of exposed mahjong tiles from a pyramid until the board is empty.",
    longDescription: "Mahjong Solitaire is a single-player tile-matching computer game invented by Brodie Lockard on the PLATO computer system in 1981. Despite the name, it shares nothing with actual Chinese Mahjong except the tile set. 144 tiles are stacked into a pyramid arrangement; players find and remove pairs of matching exposed tiles. Popularised worldwide by the 1986 Activision release 'Shanghai' and later by the Microsoft Windows Entertainment Pack.",
    wikipediaTitle: "Mahjong solitaire", lastVerified: TODAY, confidence: "verified",
  },
];
