import type { Sport } from "@/lib/types";

export const hurlingCamogieWomens: Sport = {
  id: "hurling-camogie-womens",
  slug: "hurling-camogie-womens",
  name: "Camogie (Women's Hurling)",
  officialName: "Camogie Association (Cumann Camógaíochta na nGael)",
  aliases: ["Camogie", "Camógaíocht", "Women's Hurling"],
  shortDescription:
    "Women's version of Irish hurling — 15 vs 15 with wooden hurley + small ball; codified 1904 in Ireland by Máire Ní Chinnéide; GAA-associated national sport of Ireland women's division; All-Ireland Camogie Championship since 1932; ~100,000 registered players in Ireland.",
  longDescription:
    "Camogie (Camógaíocht) is the women's version of Irish hurling — Ireland's ancient national ball-and-stick sport. Codified 1904 in Dublin by Máire Ní Chinnéide, Cáit Ní Dhonnchadha, and Máire Ní Áilín as the female equivalent of GAA hurling to give women access to Ireland's national sport. Governed independently by the Camogie Association (Cumann Camógaíochta na nGael, founded 1904) though closely allied with the Gaelic Athletic Association (GAA). Modern camogie rules ~95% identical to men's hurling: 15 vs 15 outfield players, hurley (curved wooden stick, 'camán'), leather sliotar ball, playing field ~140m × 90m with H-shaped goals (soccer-style goal below crossbar, 3 points; over crossbar between uprights = 1 point). Key differences from men's hurling: (a) Slightly smaller sliotar (65mm vs 69mm); (b) Slightly shorter match — 60 min at senior inter-county vs 70 min men's; (c) Historical shorter skirt uniform (modernized to shorts); (d) 'Handpass' technique different — women use open palm strike vs closed fist. All-Ireland Camogie Championship since 1932 (women's equivalent of All-Ireland Hurling Championship since 1887). Strongholds: Cork (dominant historic — Rebels), Kilkenny (Cats), Wexford, Galway, Tipperary. Notable stars: Angela Downey (Kilkenny — 12 All-Ireland titles), Ann Downey (Kilkenny — 12 titles, sisters), Deirdre Hughes (Tipperary), Anna Geary (Cork). ~100,000 registered players in Ireland; growing Irish diaspora popularity in USA (Chicago, Boston, NYC), UK, Australia. Not to be confused with men's hurling — same sport family, separately governed. Second-largest Irish women's team sport after Ladies Gaelic Football.",
  category: "traditional-cultural-sports",
  subCategory: "Irish women's stick-and-ball national sport",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland (codified 1904 Dublin; parallel to men's hurling ancient tradition)",
  estimatedOrigin: "Codified 1904 by Máire Ní Chinnéide + Camogie Association Dublin; All-Ireland Camogie Championship since 1932",
  players: { min: 15, max: 15, note: "15 vs 15 outfield players (14 field + 1 goalkeeper) + 15 subs per squad." },
  equipment: [{ name: "Camán (hurley)", description: "Curved wooden stick ~85-95cm long with flat bás (blade) end for striking ball." }, { name: "Sliotar (leather ball)", description: "Leather ball 65mm diameter, 110g weight, with raised rims for spin control." }, { name: "Helmet + faceguard (mandatory since 2010)", description: "Approved helmet with facial guard mandatory in all camogie matches since 2010 for safety." }, { name: "Skort or shorts + jersey + shin guards", description: "Traditional skort or modern shorts, county-colored jersey, shin guards, boots." }],
  duration: { approximateMinutes: 60, structure: "Senior inter-county: 2×30 min halves; junior grades 2×25 min; extra time if drawn in knockout." },
  objective: "Score more goals + points than opponent using hurley to strike sliotar.",
  matchStructure: "Two halves; league + championship formats; All-Ireland final at Croke Park.",
  basicRules: [
    { title: "3 points for goal, 1 point for point", body: "Ball into goal (under crossbar) = 3 points; ball over crossbar between uprights = 1 point." },
    { title: "Handpass = open palm strike (not fist)", body: "Camogie handpass technique uses open palm strike; distinguishes from men's hurling closed-fist handpass." },
    { title: "Ball may be caught, carried on hurley, or struck", body: "Ball may be caught in hand, balanced/carried on hurley bás while running, or struck in air/on ground." },
    { title: "Mandatory helmet with faceguard since 2010", body: "Since 2010 all players must wear helmets with faceguards; enforced by rules committee." },
  ],
  scoring: { summary: "Goal (under crossbar) = 3 points; point (over crossbar between uprights) = 1 point; final score expressed as goals-points (e.g., '2-15' = 2 goals + 15 points = 21 points).", winCondition: "Higher total points at time-out; extra time or replays if drawn in knockout." },
  positions: [{ name: "Goalkeeper", role: "Defends goal.", count: 1 }, { name: "Full-Back Line (3)", role: "Right corner-back, full-back, left corner-back.", count: 3 }, { name: "Half-Back Line (3)", role: "Right half-back, centre-back, left half-back.", count: 3 }, { name: "Midfielders (2)", role: "Link defense + attack.", count: 2 }, { name: "Half-Forward Line (3)", role: "Right half-forward, centre-forward, left half-forward.", count: 3 }, { name: "Full-Forward Line (3)", role: "Right corner-forward, full-forward, left corner-forward.", count: 3 }],
  officiating: { officials: ["Referee (1)", "Umpires (2 at each goal)", "Linesmen (2)", "Sideline Official"], summary: "Camogie Association certified officials." },
  governingBodies: [{ name: "Camogie Association (Cumann Camógaíochta na nGael)", founded: 1904, headquarters: "Croke Park, Dublin, Ireland" }],
  majorCompetitions: [{ name: "All-Ireland Senior Camogie Championship", frequency: "annual (Sep final at Croke Park)", founded: 1932, region: "Ireland" }, { name: "National Camogie League (Litter Cup)", frequency: "annual (Feb-Apr)", founded: 1960, region: "Ireland" }, { name: "Camogie Association All-Ireland Club Championship", frequency: "annual (Feb-Mar)", founded: 1966, region: "Ireland" }],
  countriesPlayed: ["IRL (dominant)", "USA (Irish diaspora GAA)", "GBR", "AUS", "CAN"],
  famousAthletes: ["Angela Downey (Kilkenny — 12 All-Ireland titles)", "Ann Downey (Kilkenny — 12 All-Ireland titles, sisters)", "Deirdre Hughes (Tipperary — 4-time All-Ireland winner)", "Anna Geary (Cork — All-Ireland winner + broadcaster)", "Ursula Jacob (Wexford — 4x All Star)"],
  records: [
    { title: "Angela + Ann Downey 12 All-Ireland titles", holder: "Angela + Ann Downey (Kilkenny sisters)", value: "Angela + Ann Downey (Kilkenny sisters) each won 12 All-Ireland Senior Camogie titles — most in history", year: 1994 },
    { title: "Cork dominant county (28 senior titles)", holder: "Cork Camogie", value: "Cork has won 28 All-Ireland Senior Camogie Championships — most of any county", year: 2024 },
    { title: "First All-Ireland Camogie Championship 1932", holder: "Camogie Association", value: "First All-Ireland Senior Camogie Championship contested 1932; Dublin won inaugural title", year: 1932 },
  ],
  variants: ["camogie-senior-inter-county", "camogie-junior-inter-county", "camogie-club", "camogie-under-16-under-14-youth", "shinty-camogie-composite-rules-scotland-ireland"],
  relatedSports: ["hurling-mens-gaa", "ladies-gaelic-football", "shinty-scottish", "field-hockey"],
  skills: ["hurley striking (ground + air)", "sliotar handpass technique", "long-range shooting", "sideline cut technique"],
  wikipediaTitle: "Camogie",
  sources: [{ label: "Wikipedia — Camogie", url: "https://en.wikipedia.org/wiki/Camogie", publisher: "Wikipedia" }, { label: "Camogie Association", url: "https://camogie.ie", publisher: "Camogie Association" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default hurlingCamogieWomens;
