import type { Sport } from "@/lib/types";

export const euchreCanadian: Sport = {
  id: "euchre-canadian",
  slug: "euchre-canadian",
  name: "Euchre (Canadian + Midwestern)",
  officialName: "Euchre — 4-Player Trick-Taking Card Game",
  aliases: ["Yook", "Euker"],
  shortDescription:
    "4-player 2v2 trick-taking card game with Bower (Jack) trump quirks — popular in Canada, Michigan, Ohio, Indiana, Wisconsin (all US Great Lakes), New Zealand + Australia; considered ancestor of modern Bridge; played with 24-card partial deck.",
  longDescription:
    "Euchre is a classic 4-player 2v2 trick-taking card game that emerged in early 19th century Alsace-Lorraine (Germany/France border) and was carried to America by 19th-century German immigrants, becoming the most popular card game in the United States from ~1850-1900 before losing ground to Bridge. Today thrives especially in Canada (huge Ontario + Quebec scene), the US Great Lakes region (Michigan, Ohio, Indiana, Wisconsin), and New Zealand + Australia. Played with 24 cards (A-K-Q-J-10-9 of each suit; 32-card variant exists) + 4 players in fixed partnerships (partner sits opposite). Signature quirk: the Bowers — Jack of trump suit (Right Bower) is highest trump; Jack of same-color OTHER suit (Left Bower) is second-highest trump (temporarily leaves its printed suit). Example: if trumps = Hearts, then Jack of Hearts (Right) + Jack of Diamonds (Left, temporarily a Heart) are the top 2 trumps. Bid = called by dealer's team or opposing team after seeing turn-up card. If bidding team wins 3+ tricks (of 5) they score 1 point (10 tricks = March, 2 points). If bidder wins alone (partner sits out, 'Going Alone'), a March scores 4 points. Losing bidding team gets 'Euchred' (opponents score 2 points). First team to 10 points wins. American vs. British Euchre rules vary. Considered ancestor of Bridge + Whist family; still governed by community + regional Euchre leagues (esp. Ontario, Michigan). No formal single world governing body but Michigan Euchre League, Ontario Euchre Association, + Cincinnati Euchre Association run large regional circuits.",
  category: "card-games",
  subCategory: "4-player 2v2 trick-taking bower card game",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "DE",
  regionOfOrigin: "Alsace-Lorraine (Germany/France border); popularized USA/Canada 19th century",
  estimatedOrigin: "Emerged early 19th century Alsace-Lorraine; carried by German immigrants to USA/Canada 1830s+; standard rules ~1860s",
  players: { min: 4, max: 4, note: "4 players in fixed partnerships (partner opposite)." },
  equipment: [{ name: "24-card Euchre deck (A-K-Q-J-10-9 in each suit)", description: "Partial deck of 24 cards; 32-card variant exists." }, { name: "Score keeper (traditional 5+ jacks/6s pattern)", description: "Traditional Euchre score keeper uses 6s + 4s of unused suits or hash-marks." }, { name: "Card table + 4 chairs", description: "Standard 4-player card table." }],
  duration: { approximateMinutes: 30, structure: "Match: play to 10 points; ~30-60 min per game; casual sessions run multiple games." },
  objective: "Bidding team must win 3+ of 5 tricks per hand; first team to 10 points wins match.",
  matchStructure: "Rounds until team reaches 10 points; typical evening plays 2-4 games.",
  basicRules: [
    { title: "Deal 5 cards per player + turn up next card", body: "24-card deck; each gets 5 cards; next card turned face-up." },
    { title: "Bidding phase: choose trump", body: "Dealer's team or opposing team chooses to make turn-up card's suit trump (or pass); after both rounds of bidding, discard + reshuffle if all pass." },
    { title: "Right Bower + Left Bower are top 2 trumps", body: "Jack of trump suit (Right) + Jack of same-color other suit (Left) become top 2 trumps." },
    { title: "Win 3+ tricks = 1 point (bidder); 5 tricks (March) = 2 points", body: "Going Alone March = 4 points; Euchred = opponents 2 points." },
  ],
  scoring: {
    summary: "Bidding team: 3-4 tricks = 1 point; 5 tricks (March) = 2 pts; Going Alone March = 4 pts; Euchred = opp 2 pts.",
    winCondition: "First team to 10 points wins.",
    breakdown: [{ action: "3-4 tricks (bidding team)", points: "+1" }, { action: "March (all 5 tricks, bidding team)", points: "+2" }, { action: "Going Alone March", points: "+4" }, { action: "Euchre (opponents win 3+ tricks)", points: "+2 to opponents" }],
  },
  positions: [{ name: "Player + partner (2 partnerships)", role: "Team members opposite each other.", count: 2 }, { name: "Dealer (rotating)", role: "Deals + last to bid.", count: 1 }],
  officiating: { officials: ["Table Judge (tournament)", "Tournament Director"], summary: "Community league officials at tournament events." },
  governingBodies: [{ name: "No single world body — community + regional leagues", founded: 1830, headquarters: "worldwide" }, { name: "Michigan Euchre Association (regional)", founded: 1985, headquarters: "Michigan, USA" }, { name: "Cincinnati Euchre Association (regional)", founded: 1978, headquarters: "Cincinnati, Ohio, USA" }, { name: "Ontario Euchre Association", founded: 1990, headquarters: "Ontario, Canada" }],
  majorCompetitions: [{ name: "Michigan Euchre Championship", frequency: "annual", founded: 1985, region: "Michigan, USA (rotating)" }, { name: "Ontario Euchre Championship", frequency: "annual", founded: 1990, region: "Ontario, Canada (rotating)" }, { name: "Community Euchre Tournaments (weekly across Great Lakes)", frequency: "weekly", founded: 1970, region: "USA/Canada Great Lakes region" }],
  countriesPlayed: ["CAN (Ontario dominant)", "USA (MI/OH/IN/WI)", "NZL", "AUS", "GBR (community pockets)"],
  famousAthletes: ["Community-level regional champions; no international pro circuit"],
  records: [
    { title: "Most-played US card game 1850-1900", holder: "American card-playing public", value: "Euchre was the most popular card game in the USA from ~1850 to ~1900 before losing ground to Bridge + Poker", year: 1875 },
    { title: "Standard rules codified 1860s", holder: "US card publishers", value: "Standardized Euchre rules published in Hoyle 1860s; established Bower + Going Alone conventions", year: 1865 },
  ],
  variants: ["north-american-standard-euchre-24-card", "british-euchre-32-card", "bid-euchre-32-card-bidding-variant", "railroad-euchre-super-variant", "buck-euchre-3-player-solo", "pepper-euchre-with-forced-loser"],
  relatedSports: ["bridge", "whist", "spades", "hearts", "500-card-game"],
  skills: ["bidding-judgment (when to call trump)", "partnership signaling (via card-play)", "counting trumps + off-suit", "Going Alone valuation"],
  strategies: [
    { title: "Call trump only with strong hand + partner signal", body: "Calling trump = commitment to 3+ tricks; failure = Euchred 2-point penalty." },
    { title: "Going Alone if hand can win 5", body: "Going Alone is high-risk high-reward — 4 points instead of 2 if successful." },
  ],
  wikipediaTitle: "Euchre",
  sources: [{ label: "Wikipedia — Euchre", url: "https://en.wikipedia.org/wiki/Euchre", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default euchreCanadian;
