import type { Sport } from "@/lib/types";

export const coupSocialDeduction: Sport = {
  id: "coup-social-deduction",
  slug: "coup-social-deduction",
  name: "Coup (Bluffing Card Game)",
  officialName: "Coup — Rikki Tahta / Indie Boards & Cards (2012)",
  aliases: ["Coup"],
  shortDescription:
    "Fast bluffing card game by Rikki Tahta (2012) — 2-6 players use 15-card deck of 5 characters (Duke, Assassin, Ambassador, Captain, Contessa); each player has 2 face-down character cards + must bluff/claim character abilities to eliminate opponents; last standing wins; 15-minute rounds; #1 gateway bluffing game 2010s-2020s.",
  longDescription:
    "Coup is a fast-paced bluffing card game designed by Rikki Tahta + published 2012 by Indie Boards & Cards, set in the dystopian resistance universe (originally a spinoff from The Resistance social deduction game by same publisher). Considered THE gateway bluffing card game of the 2010s-2020s — sold millions of copies + spawned massive tournament scene. Played 2-6 players (best at 4-5) in 15-20 minute rounds. Setup: 15-card deck consisting of 5 different characters × 3 copies each — Duke, Assassin, Ambassador, Captain, Contessa. Deal 2 cards face-down to each player + 2 coins from bank. Each character has powerful ability that only that character (in theory) can use: (a) Duke — Tax (take 3 coins from bank), Block Foreign Aid; (b) Assassin — Assassinate (pay 3 coins to force opponent to lose a card); (c) Ambassador — Exchange (draw 2 from deck, keep 2 total), Block Steal; (d) Captain — Steal (take 2 coins from opponent), Block Steal; (e) Contessa — Block Assassination. Turn structure: choose one action — (i) Income (take 1 coin, unblockable); (ii) Foreign Aid (take 2 coins, blockable by Duke); (iii) Coup (pay 7 coins to eliminate opponent card, unblockable); (iv) Duke Tax; (v) Assassinate; (vi) Ambassador Exchange; (vii) Captain Steal. Key mechanic: you can CLAIM any character's ability whether or not you have that character — it's a bluffing game! Other players may CHALLENGE your claim; if you can prove you have that character (reveal card + shuffle back into deck), challenger loses a card; if you were bluffing, you lose a card. Same for blocking — you can bluff having Contessa to block assassination. Once player has both cards revealed/lost, they're eliminated. Last player standing wins. Modern extensions: Coup: Rebellion (10-player + new characters); Coup: Reformation (adds allegiance mechanic); Coup: Gorilla Marketing (parody expansion). Highly popular online (Board Game Arena + coup.io); competitive scene at conventions. Notable player-strategists in online scene include Chris Marling (BGA champion). Perfect balance of bluffing + threat management + partial info makes it one of most re-analyzed party games in modern hobby.",
  category: "party-games",
  subCategory: "fast bluffing card game with character claim + challenge",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Indie Boards & Cards publisher — Redmond WA) — Rikki Tahta designer",
  estimatedOrigin: "Published 2012 by Indie Boards & Cards; spinoff from The Resistance (2009); massive expansion 2013-2020",
  players: { min: 2, max: 6, note: "2-6 players; best at 4-5; expansion supports 10." },
  equipment: [{ name: "Coup 15-card deck", description: "5 characters × 3 copies each: Duke (blue), Assassin (black), Ambassador (green), Captain (red), Contessa (purple)." }, { name: "Coin tokens (bank + player)", description: "50+ coin tokens; players start with 2 coins each; bank holds rest." }, { name: "Character reference cards", description: "Each player has reference card showing all 5 characters + abilities." }],
  duration: { approximateMinutes: 15, structure: "Single game 10-20 min; typically play multiple back-to-back; tournaments run 4-8 hour blocks." },
  objective: "Be the last player with at least one un-revealed character card by eliminating opponents.",
  matchStructure: "Turn-based rotation until only one player has un-revealed cards.",
  basicRules: [
    { title: "Turn options: Income, Foreign Aid, Coup, or character action", body: "Each turn choose one: Income (1 coin, unblockable), Foreign Aid (2 coins, blockable), Coup (pay 7 coins, eliminate opponent card), or claim a character action." },
    { title: "You may CLAIM any character (whether you have it or not) — bluffing central", body: "Any player may claim any character's action or block on any turn — game revolves around bluffing whether you actually hold that character." },
    { title: "Others may CHALLENGE your claim", body: "When you claim character action/block, any other player may challenge; if you prove you have it (reveal), challenger loses card + you shuffle+redraw; if you were bluffing, you lose card." },
    { title: "10+ coins = MUST Coup (forced elimination)", body: "If player has 10+ coins at start of turn, MUST perform Coup action (pay 7) to eliminate opponent card." },
    { title: "Lose both cards = eliminated from game", body: "When both your character cards are revealed/lost, you're eliminated; game continues until only 1 player has un-revealed cards." },
  ],
  scoring: { summary: "Binary win — last player with un-revealed card(s) wins; no points.", winCondition: "Be the last player with at least one un-revealed character card." },
  positions: [{ name: "Coup player", role: "One of 2-6 players with 2 character cards + coins.", count: 6 }],
  officiating: { officials: ["Casual: self-officiated", "Tournament arbiter", "Board Game Arena automated"], summary: "Casual + tournament arbitration; no international federation." },
  governingBodies: [{ name: "Indie Boards & Cards (publisher)", founded: 2009, headquarters: "Redmond, Washington, USA" }, { name: "Rikki Tahta (designer)", founded: 2012, headquarters: "UK/USA" }],
  majorCompetitions: [{ name: "Board Game Arena Coup Tournaments", frequency: "ongoing", founded: 2015, region: "worldwide online" }, { name: "Gen Con Coup Tournaments", frequency: "annual (August)", founded: 2013, region: "Indianapolis, Indiana, USA" }, { name: "Various convention tournaments (PAX Unplugged, Origins, UK Games Expo)", frequency: "annual", founded: 2013, region: "worldwide conventions" }],
  countriesPlayed: ["USA (dominant)", "GBR", "CAN", "AUS", "DEU", "FRA", "JPN", "BRA", "worldwide tabletop community"],
  famousAthletes: ["Rikki Tahta (designer)", "Chris Marling (Board Game Arena Coup champion)", "Various convention tournament winners"],
  records: [
    { title: "Gateway bluffing game 2010s-2020s", holder: "Board Game Geek + tabletop community", value: "Coup recognized as THE gateway bluffing card game of 2010s-2020s — introduced millions to serious bluffing/deduction game genre", year: 2024 },
    { title: "Sold millions of copies + spinoffs", holder: "Indie Boards & Cards", value: "Coup sold millions of copies worldwide + spawned expansions Coup: Rebellion, Coup: Reformation, Coup: Gorilla Marketing", year: 2024 },
    { title: "Spinoff from The Resistance universe", holder: "Indie Boards & Cards", value: "Coup set in same dystopian resistance universe as The Resistance (2009) social deduction game by same publisher — shared setting", year: 2012 },
  ],
  variants: ["coup-standard-15-card-deck", "coup-rebellion-10-player-expansion", "coup-reformation-allegiance-mechanic", "coup-gorilla-marketing-parody-expansion", "coup-3-player-variant-modified-rules"],
  relatedSports: ["mafia-classic-parlor", "werewolf-party", "one-night-ultimate-werewolf", "the-resistance-avalon", "blood-on-clocktower", "secret-hitler"],
  skills: ["bluffing (character claim without holding)", "challenge decision (call bluff or fold)", "coin economy management", "opponent tell reading + pattern recognition"],
  wikipediaTitle: "Coup (card game)",
  sources: [{ label: "Wikipedia — Coup (card game)", url: "https://en.wikipedia.org/wiki/Coup_(card_game)", publisher: "Wikipedia" }, { label: "Indie Boards & Cards", url: "https://www.indieboardsandcards.com", publisher: "Indie Boards & Cards" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default coupSocialDeduction;
