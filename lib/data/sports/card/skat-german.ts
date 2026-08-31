import type { Sport } from "@/lib/types";

export const skatGerman: Sport = {
  id: "skat-german",
  slug: "skat-german",
  name: "Skat (German National Card Game)",
  officialName: "Skat (Deutscher Skatverband)",
  aliases: ["German Skat", "Deutscher Skat"],
  shortDescription:
    "3-player trick-taking card game from Altenburg, Germany (1810s) — often called Germany's national card game; uses 32-card German or French deck; bidding-based auction game with intricate scoring; International Skat Order (ISO) sanctions ISPA World Championship since 1972.",
  longDescription:
    "Skat is Germany's national card game, invented in Altenburg (Thuringia) around 1810-1817 by members of the Brommeschen Tarok-Gesellschaft including Hans Carl Leopold Schuderoff + Friedrich Ferdinand Hempel. Played by 3 active players (traditionally called Vorhand, Mittelhand, Hinterhand) using a 32-card deck (German suit or French suit variants — both official). The name 'Skat' refers to the 2-card kitty (skat, from Italian scarto = 'discard') that a winning bidder acquires. Signature auction-bidding structure: 3 players bid competitively; highest bidder becomes Alleinspieler (declarer) playing solo against the other 2 who form a defensive team for that hand. Contracts include Grand (Jacks are only trumps), Suit Games (chosen suit trumps + Jacks), Null (no trumps + declarer must lose every trick), Ouvert (declarer's hand exposed for bonus). Complex scoring with multipliers (Matadors — sequence of top trumps in hand). Governed globally by International Skat Players Association (ISPA, founded 1972). International Skat Order (Internationale Skatordnung — ISkO) codifies rules. Deutscher Skatverband (DSkV, founded 1899) is German national federation with 30,000+ members. ISPA World Championships biennial since 1972 (recent: Rimini 2018, Salzburg 2020 → cancelled COVID → Salzburg 2022). Considered Germany's most-played card game; estimated 15-25 million players in Germany. Also popular in USA (Wisconsin + Texas + Pennsylvania German-heritage regions), Namibia (former German colony), Poland, Czech Republic, Austria.",
  category: "card-games",
  subCategory: "3-player trick-taking bidding card game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany (Altenburg, Thuringia, 1810-1817)",
  estimatedOrigin: "Invented 1810-1817 in Altenburg; DSkV founded 1899; ISPA founded 1972; ISkO codified 1899+",
  players: { min: 3, max: 4, note: "3 active players + 1 dealer sitting out per round (4-player table with rotating dealer)." },
  equipment: [{ name: "32-card Skat deck (German or French suits)", description: "German suits (Eichel/Grün/Herz/Schellen) or French suits (Clubs/Spades/Hearts/Diamonds); both official." }, { name: "Scoresheet + pen", description: "Points tracked per hand; final scoring complex." }, { name: "Card table + comfortable seating", description: "Standard card table + 4 chairs." }],
  duration: { approximateMinutes: 60, structure: "Casual game: ~1 hour; tournament session: 36-hand series ~4 hours." },
  objective: "Alleinspieler (declarer) tries to fulfill their bid contract; defenders try to prevent it. Highest cumulative points across hands wins.",
  matchStructure: "Each hand: (1) Deal 10-10-10-2 (2 cards to skat), (2) Auction bidding, (3) Winning bidder picks up skat + declares contract, (4) 10-trick play, (5) Score calculation.",
  basicRules: [
    { title: "Bidding-auction determines Alleinspieler", body: "Vorhand → Mittelhand → Hinterhand progressive bidding; highest bidder plays solo." },
    { title: "Skat (2-card kitty) acquired by bidder", body: "Winning bidder picks up 2 skat cards, discards 2 to strengthen hand." },
    { title: "Contracts: Grand / Suit / Null / Ouvert", body: "Declarer names contract type; each has different trumps + scoring." },
    { title: "10 tricks played; declarer needs 61+ points (suit/grand) or 0 tricks (null)", body: "Card points: A=11, 10=10, K=4, Q=3, J=2; 120 total in deck." },
  ],
  advancedRules: [
    { title: "Matadors (top-trump sequence multiplier)", body: "Number of Jacks + top trumps in hand/skat multiplies contract value." },
    { title: "Schneider / Schwarz bonuses", body: "Winning with 90+ points = Schneider bonus; winning all tricks = Schwarz bonus." },
    { title: "Ouvert = declarer exposes hand for max multiplier", body: "Ultimate contract: play with cards open, must win every trick." },
    { title: "Ramsch (mandatory when all pass)", body: "When all pass auction, Ramsch is played — no trumps; player with fewest points 'wins' (avoids losing)." },
  ],
  scoring: {
    summary: "Contract value × Matadors multiplier × bonuses; declarer scores on success or loses double on failure.",
    winCondition: "Highest cumulative points at end of series (typically 36 hands or agreed number).",
    breakdown: [{ action: "Grand bid (Jacks only trumps)", points: "24 × multiplier" }, { action: "Suit bid (Clubs high)", points: "12 × multiplier (Clubs); 11/10/9 (Spades/Hearts/Diamonds)" }, { action: "Null (win no tricks)", points: "23; Ouvert 46" }, { action: "Schneider bonus (90+ points)", points: "+1 multiplier" }, { action: "Schwarz bonus (all tricks)", points: "+2 multiplier" }],
  },
  positions: [{ name: "Alleinspieler (Declarer, solo)", role: "Winning bidder plays alone.", count: 1 }, { name: "Defender (Skatgegner)", role: "2 defenders form ad-hoc team against declarer.", count: 2 }, { name: "Dealer (Geber, rotating)", role: "Deals + sits out that hand (4-player table).", count: 1 }],
  officiating: { officials: ["Tournament Director", "Table Judges"], summary: "DSkV or ISPA certified officials at major events." },
  governingBodies: [{ name: "Deutscher Skatverband (DSkV)", founded: 1899, headquarters: "Altenburg, Germany" }, { name: "International Skat Players Association (ISPA)", founded: 1972, headquarters: "worldwide" }, { name: "Internationale Skatordnung (ISkO — rules body)", founded: 1899, headquarters: "Altenburg, Germany" }],
  majorCompetitions: [{ name: "ISPA World Championship", frequency: "biennial", founded: 1972, region: "rotating (recent: Rimini, Salzburg)" }, { name: "DSkV German National Championship", frequency: "annual", founded: 1899, region: "Germany (rotating)" }, { name: "DSkV Deutsche Skatmeisterschaft (national club championship)", frequency: "annual", founded: 1899, region: "Germany" }],
  countriesPlayed: ["DEU (national game)", "USA (Wisconsin + Texas + PA German heritage)", "NAM (former German colony)", "AUT", "POL", "CZE", "BRA (German-Brazilian communities)"],
  famousAthletes: ["Regional Skat masters (DSkV professional players)", "Bernd Hensel (DSkV multi-time German champion)"],
  records: [
    { title: "DSkV founded 1899", holder: "Deutscher Skatverband", value: "Deutscher Skatverband founded 1899 in Altenburg (birthplace of Skat) — one of world's oldest card-game federations", year: 1899 },
    { title: "ISPA World Championship since 1972", holder: "International Skat Players Association", value: "First ISPA World Championship 1972; biennial ever since", year: 1972 },
    { title: "15-25M German players", holder: "DSkV", value: "Estimated 15-25 million Skat players in Germany — Germany's most-played card game", year: 2024 },
  ],
  variants: ["german-suit-skat", "french-suit-skat", "ramsch-mandatory-round", "tournee-optional-skat-pickup", "sechserskat-6-card-hand-variant"],
  relatedSports: ["bridge", "pinochle", "sheepshead", "doppelkopf"],
  skills: ["auction bidding strategy", "trick-taking count", "declarer play (10-card memory)", "defender coordination (via signals only)", "scoring math"],
  strategies: [
    { title: "Auction discipline", body: "Bidding beyond your hand's true value = losing double the contract on failure." },
    { title: "Signals between defenders", body: "Defenders coordinate via card-play (Schmieren = strengthen partner's tricks; Wimmeln = drop points on partner's trick)." },
  ],
  wikipediaTitle: "Skat (card game)",
  sources: [{ label: "Wikipedia — Skat (card game)", url: "https://en.wikipedia.org/wiki/Skat_(card_game)", publisher: "Wikipedia" }, { label: "DSkV official", url: "https://www.dskv.de", publisher: "Deutscher Skatverband" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default skatGerman;
