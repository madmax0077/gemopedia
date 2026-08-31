import type { Sport } from "@/lib/types";

export const canastaClassic: Sport = {
  id: "canasta-classic",
  slug: "canasta-classic",
  name: "Canasta (Classic Uruguayan)",
  officialName: "Classic Canasta — 4-Player Rummy Family Game",
  aliases: ["Classic Canasta", "Argentine Canasta", "American Canasta"],
  shortDescription:
    "4-player 2v2 rummy-family card game originating in Montevideo, Uruguay (1939, invented by Segundo Santos + Alberto Serrato) — melding runs to form 'Canastas' (7-card sets) with wild cards + red 3s bonuses; briefly the world's most popular card game 1950-1954; still major in South America + North America.",
  longDescription:
    "Canasta (Spanish: 'basket') is a 4-player 2v2 rummy-family card game invented in 1939 in Montevideo, Uruguay by two Uruguayan lawyers Segundo Santos + Alberto Serrato — designed as an intellectual bridge-alternative for a client-friendship group. Spread to Argentina 1940s + then USA/UK/Europe by early 1950s where it became briefly the world's most popular card game (1950-1954), briefly dethroning Bridge in the USA. Uses two standard 52-card decks + 4 Jokers (108 cards total). Signature mechanic: teams work to form melds of 3+ same-rank cards, ultimately aiming to complete Canastas (7-card melds) which score huge bonuses (500 for natural pure Canasta, 300 for mixed with wild cards). Wild cards (2s + Jokers) can substitute for any rank. Red 3s score automatic 100 bonus each (500 if all 4). Discard pile can be picked up under specific conditions (top card must match teammate meld OR match rank of 2 same-rank cards held). First team to 5,000 points wins. Multiple regional variants: (1) Classic (Uruguayan/Argentine original), (2) American Canasta (added minimum-meld rules), (3) Bolivian Canasta (samba-canasta, uses 3 decks), (4) Hand-and-Foot (huge USA social variant), (5) Chile Rummy, (6) Canasta Nazionale (Italy). Governed globally by community + national federations (Buraco Italy, Association of Canasta Argentina). Still hugely popular in South America (Argentina + Chile + Uruguay + Brazil), USA senior communities, retirement clubs; declining among younger generations in USA but resurgent in Europe. Considered defining card game of 1950s Americana.",
  category: "card-games",
  subCategory: "4-player 2v2 rummy-family meld card game",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "UY",
  regionOfOrigin: "Uruguay (Montevideo — Segundo Santos + Alberto Serrato, 1939)",
  estimatedOrigin: "Invented 1939 Montevideo Uruguay; spread to USA/UK/Europe by 1950; peak popularity 1950-1954",
  players: { min: 2, max: 6, note: "Classic Canasta = 4 players (2v2); variants support 2, 3, 5, or 6." },
  equipment: [{ name: "2 standard 52-card decks + 4 Jokers (108 cards)", description: "Double deck plus Jokers." }, { name: "Score sheet + pen", description: "Complex scoring; hand-tracked typically." }, { name: "Card table + 4 chairs", description: "Standard card table setup." }],
  duration: { approximateMinutes: 60, structure: "Match to 5,000 points; ~1-2 hours; casual sessions play multiple games." },
  objective: "Form melds (3+ same rank) + Canastas (7-card melds); first team to 5,000 points wins.",
  matchStructure: "Multiple hands; each hand scores cumulatively; play to 5,000.",
  basicRules: [
    { title: "Deal 11 cards per player", body: "Each player gets 11 cards; remaining forms draw pile + discard pile." },
    { title: "Melds of 3+ same rank (wild-card substitution allowed)", body: "Standard meld: 3+ same-rank cards; wilds (2s + Jokers) can substitute (max 2 wilds per meld under 7 cards)." },
    { title: "Canasta = 7-card meld", body: "Complete Canasta: 7-card set; Natural (no wilds) = 500 pts, Mixed = 300 pts." },
    { title: "Red 3s = automatic 100 pt bonus each (500 for all 4)", body: "Red 3s laid down immediately as bonus cards." },
    { title: "Discard pile pickup rules complex", body: "Pick up discard pile only if top card matches team's existing meld OR matches 2 same-rank cards in hand." },
  ],
  scoring: {
    summary: "Positive: melds + canastas + bonuses; Negative: cards in hand at hand-end deducted. First to 5,000 wins.",
    winCondition: "First team to 5,000 points wins.",
    breakdown: [{ action: "Natural Canasta (7 same rank no wilds)", points: "+500" }, { action: "Mixed Canasta (7 with wilds)", points: "+300" }, { action: "Red 3 (each)", points: "+100" }, { action: "All 4 Red 3s bonus", points: "+400 extra (500 total for 4)" }, { action: "Going out (empty hand)", points: "+100" }, { action: "Cards in melds", points: "sum of card values (Aces=20, 2/Jokers=high wild values)" }],
  },
  positions: [{ name: "Player + partner (2 partnerships)", role: "Partner sits opposite; teams cooperate.", count: 2 }, { name: "Dealer (rotating)", role: "Deals + first to play.", count: 1 }],
  officiating: { officials: ["Tournament Director", "Table Judges"], summary: "Community league officials at tournament events." },
  governingBodies: [{ name: "No formal global body — regional federations + community", founded: 1950, headquarters: "worldwide" }, { name: "Association of Argentine Canasta Clubs", founded: 1948, headquarters: "Buenos Aires, Argentina" }, { name: "Buraco Italy (canasta cognate federation)", founded: 1970, headquarters: "Italy" }],
  majorCompetitions: [{ name: "Argentine National Canasta Championship", frequency: "annual", founded: 1950, region: "Argentina (rotating)" }, { name: "Buraco Italian National Championship", frequency: "annual", founded: 1975, region: "Italy" }, { name: "US Canasta Association Championships (regional)", frequency: "annual", founded: 1985, region: "USA (rotating)" }],
  countriesPlayed: ["URY (birthplace)", "ARG", "CHL", "BRA", "USA (senior communities)", "GBR (declining)", "ITA (as Buraco)", "ISR"],
  famousAthletes: ["Segundo Santos + Alberto Serrato (co-inventors 1939)", "Regional South American + US senior-community champions"],
  records: [
    { title: "Briefly most popular card game USA 1950-1954", holder: "American card-playing public", value: "Canasta briefly overtook Bridge as most popular card game in USA 1950-1954 — remarkable rise; Life magazine + Time magazine covers", year: 1950 },
    { title: "Invented 1939 by Uruguayan lawyers", holder: "Segundo Santos + Alberto Serrato (URY)", value: "Canasta invented 1939 by Uruguayan lawyers Segundo Santos + Alberto Serrato in Montevideo — spread to USA via Argentina then USA society bridge clubs", year: 1939 },
  ],
  variants: ["classic-canasta-uruguayan-original", "american-canasta-with-minimum-meld-rules", "bolivian-samba-canasta-3-decks", "hand-and-foot-usa-social-variant", "buraco-italian-cognate", "chile-rummy-canasta-variant"],
  relatedSports: ["rummy", "gin-rummy", "bridge", "hand-and-foot", "buraco"],
  skills: ["meld-planning + Canasta strategy", "wild-card timing", "partner signaling (via discards)", "discard pile management", "counting decks"],
  strategies: [
    { title: "Save wilds for Canasta completion", body: "Wild cards more valuable holding for Canasta multiplier than melds of 3-4." },
    { title: "Freeze discard pile with wilds", body: "Discarding wild freezes pile — opponent needs 2 same-rank cards to pick up; strategic defensive move." },
  ],
  wikipediaTitle: "Canasta",
  sources: [{ label: "Wikipedia — Canasta", url: "https://en.wikipedia.org/wiki/Canasta", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default canastaClassic;
