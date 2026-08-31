import type { Sport } from "@/lib/types";

export const fourSquareCompetitive: Sport = {
  id: "four-square-competitive",
  slug: "four-square-competitive",
  name: "Four Square (Competitive)",
  officialName: "Squarefour International Four Square Association / Four Square World Championship",
  aliases: ["4-Square", "Boxball (regional)", "Champ", "Kingball"],
  shortDescription:
    "Classic American playground ball game (~1950s-60s) played on 4-square grid — 4 players occupy squares, bounce rubber ball into opponents' squares; player who fails to return legally is out + moves to lowest square; annual Four Square World Championship (Maine, USA) since 2005.",
  longDescription:
    "Four Square is a classic playground ball game invented in mid-20th century American schoolyards (~1950s-60s, some sources trace elements to earlier 'foursquare' games in England). Played by 4 players on a 4-square grid drawn on flat pavement (each square typically 4-10 ft × 4-10 ft; official Four Square World Championship uses 10 ft × 10 ft grid). Squares numbered/ranked 1-4 (or King/Queen/Jack/Ace, or Kingdom/Cattle/Pauper/Peasant), with square 1/King being the highest-ranking + serving position. Players bounce a rubber playground ball (7-8.5 inch diameter) into other players' squares — the ball must bounce once in receiver's square before receiver returns it into opposing square. Signature elements: player who fails to return legally (misses ball, hits line, returns to wrong square, uses illegal technique) is 'out' + must leave their square + return to lowest-ranking square 4 while all other players rotate UP toward higher ranks. Waiting-line players move into position 4 as spots open. Extremely social + fast-paced. Custom rules ('specials', 'Duck', 'Loo', 'Pizza slices', 'Around the World', 'Nuclear war', 'Poison') added dynamically by whoever holds King position — endless creative variations. Modern competitive scene emerged 2000s+ with SquareFour International (2003+) formalizing rules; Four Square World Championship annually since 2005 at the Bridgton Community Center (Bridgton, Maine, USA) — sanctioned by Squarefour International Four Square Association (SIFSA). Bringing surprising international attention: contestants from USA, Canada, UK, Germany, Australia, Japan. World Championship categories: Adult Solo, Doubles, Team.",
  category: "playground-games",
  subCategory: "playground bouncing-ball rotation game",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (mid-20th century schoolyard origins ~1950s-60s)",
  estimatedOrigin: "American schoolyard game ~1950s-60s; Squarefour International founded 2003; World Championship 2005+",
  players: { min: 4, max: 20, note: "4 active players + queue of waiting players; World Championship brackets accommodate 100+ competitors." },
  equipment: [{ name: "Playground ball (7-8.5 inch diameter rubber)", description: "Standard rubber playground ball; official WC uses specific spec." }, { name: "4-square grid (chalk on pavement)", description: "4 equal squares in 2×2 grid; official WC 10 ft × 10 ft; casual varies." }],
  duration: { approximateMinutes: 5, structure: "Individual points/rounds fast (~30s-2 min); casual sessions run indefinitely." },
  objective: "Reach + hold King square (position 1); competitive: accumulate King-holds or last-standing points.",
  matchStructure: "Casual: continuous rotation. Competitive: bracketed elimination with formal rules panel.",
  basicRules: [
    { title: "Ball bounces once in receiver square", body: "Ball must bounce exactly once in receiving player's square before being returned." },
    { title: "Return ball into another player's square (not your own)", body: "Legal return: ball hit into another square; must bounce there once for that receiver." },
    { title: "Out = failing return / line / illegal", body: "Miss the ball, hit line, use illegal technique = out; go to lowest square." },
    { title: "Player rotation: out → square 4; others move up", body: "When one player out, all others rotate up one square toward King." },
    { title: "King calls specials (casual)", body: "King square player may introduce dynamic 'special' rules for current round." },
  ],
  scoring: { summary: "Casual: no scoring — social rotation. Competitive: points per King-hold or bracket wins.", winCondition: "Casual: hold King square. Competitive: bracket final." },
  positions: [{ name: "King (Square 1)", role: "Highest position; serves + calls specials.", count: 1 }, { name: "Queen (Square 2)", role: "Second highest.", count: 1 }, { name: "Jack (Square 3)", role: "Third.", count: 1 }, { name: "Ace/Peasant (Square 4)", role: "Lowest; entry point for new players.", count: 1 }],
  officiating: { officials: ["Chief Referee (competitive)", "Line Judges"], summary: "SIFSA certified officials at World Championship." },
  governingBodies: [{ name: "Squarefour International Four Square Association (SIFSA)", founded: 2003, headquarters: "Bridgton, Maine, USA" }],
  majorCompetitions: [{ name: "Four Square World Championship (Bridgton ME)", frequency: "annual", founded: 2005, region: "Bridgton, Maine, USA" }, { name: "Community regional tournaments (USA + UK)", frequency: "ongoing", founded: 2005, region: "USA + UK" }],
  countriesPlayed: ["USA (birthplace)", "CAN", "GBR", "GER", "AUS", "JPN"],
  famousAthletes: ["Four Square World Champions (rotating annually)", "Regional US + UK tournament winners"],
  records: [
    { title: "Four Square World Championship since 2005 Bridgton ME", holder: "Squarefour International", value: "Four Square World Championship annually since 2005 at Bridgton Community Center, Maine — hosts national + international competitors", year: 2005 },
    { title: "SIFSA founded 2003", holder: "Squarefour International Four Square Association", value: "Squarefour International Four Square Association founded 2003 in Bridgton Maine to formalize competitive Four Square + host World Championship", year: 2003 },
  ],
  variants: ["standard-4-square-schoolyard", "world-championship-10ft-10ft-grid", "kingdom-cattle-pauper-peasant-medieval-theme", "boxball-regional-brooklyn-variant", "with-specials-king-calls-rules"],
  relatedSports: ["handball-4-square-wall", "dodgeball", "kickball", "gaga-ball"],
  skills: ["ball-bounce reading + placement", "peripheral vision + fast reaction", "spin technique (top / back / side)", "social banter + rules improvisation (casual)"],
  wikipediaTitle: "Four square",
  sources: [{ label: "Wikipedia — Four Square", url: "https://en.wikipedia.org/wiki/Four_square", publisher: "Wikipedia" }, { label: "Four Square World Championship official", url: "https://www.foursquareworldchampionship.com", publisher: "Squarefour International" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default fourSquareCompetitive;
