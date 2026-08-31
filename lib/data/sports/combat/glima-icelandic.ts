import type { Sport } from "@/lib/types";

export const glimaIcelandic: Sport = {
  id: "glima-icelandic",
  slug: "glima-icelandic",
  name: "Glíma (Icelandic Wrestling)",
  officialName: "Íslenska Glímusambandið (Icelandic Glíma Federation)",
  aliases: ["Glima", "Icelandic Wrestling", "Viking Wrestling"],
  shortDescription:
    "Icelandic national sport — traditional stand-up wrestling with Viking-era origins (10th century) using leather-belt grips; competitors remain upright + attempt throws (bragð); featured in Norse sagas (Njáls saga); still competitive with annual Grettisbelti Cup.",
  longDescription:
    "Glíma (Icelandic: 'wrestling', 'game') is the traditional Icelandic folk wrestling with Viking-era origins dating to at least the 10th century — described in numerous Norse sagas including Njáls saga + Grettis saga (where hero Grettir Ásmundarson is described as an expert glímumaður). Icelandic national sport since 1906 (Glímusambandið founded 1916). Wrestlers wear leather harness with belts around waist + upper thighs + between legs — with grips (tök) exclusively on belts — no clinching, no ground-fighting, no chokes. Competitors stand upright + circle rhythmically (stígandi — 'stepping'), attempting throws using 8 major techniques (aðalbrögð): (1) Klofbragð (crotch-throw), (2) Sniðglíma (cross-buttock), (3) Leggjarbragð (leg-hook), (4) Hælkrókur (heel-hook), (5) Hnykkur (leg-swing), (6) Bakspenna (back-arch), (7) Mjaðmarkast (hip-throw), (8) Krækja (leg-crook). Victory: opponent touches ground with any body part above knees. Uniqueness: emphasis on drengskapur (chivalry) — wrestlers maintain eye contact + never look at opponent's feet (considered dishonorable). Governing body: Íslenska Glímusambandið (Icelandic Glíma Federation, founded 1916). Major titles: Íslandsglíman (Icelandic Championship, since 1906 — oldest continuously-run wrestling championship in the world), Grettisbelti (Grettir Belt — held by King of Icelandic Wrestling), Skjaldarglíma Ármanns (Ármann Shield). Modern competition ~500-1000 active wrestlers in Iceland; also small communities in Denmark, Norway, USA (Nordic diaspora). International Glíma Association founded 2013.",
  category: "combat-sports",
  subCategory: "Icelandic Viking-era folk wrestling",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "IS",
  regionOfOrigin: "Iceland (Viking-era origins ~10th century; described in Norse sagas)",
  estimatedOrigin: "Viking-era origins ~10th century; national sport of Iceland since 1906; federation 1916",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Glímubelti (leather harness + belts)", description: "Traditional leather belt harness — waist belt + upper-thigh belts + between-leg belt; grips exclusively on belts." }, { name: "Wrestling shoes + shorts", description: "Traditional cotton shorts + wrestling shoes." }],
  duration: { approximateMinutes: 3, structure: "Bout: 2-5 min continuous; win by throw or judge decision at end." },
  objective: "Force opponent to touch ground with any body part above knees (bringing them down).",
  matchStructure: "Best-of-3 rounds in championship format; direct-elimination bracket.",
  basicRules: [
    { title: "Stand-up wrestling only — no ground fighting", body: "Wrestlers must remain standing; no ground grappling." },
    { title: "Grips only on belts", body: "Grip only allowed on opponent's belt harness — no clinching bodies." },
    { title: "Rhythmic stígandi stepping required", body: "Wrestlers must circle continuously — passive/stationary wrestling penalized." },
    { title: "Drengskapur (chivalry) — never look at feet", body: "Wrestlers must maintain eye contact — looking at feet is dishonorable + penalized." },
    { title: "Touch ground above knees = loss", body: "Any body part above knees touching ground = round loss." },
  ],
  scoring: { summary: "Round-by-round: winner throws opponent to ground; best of 3 or match points.", winCondition: "Throw opponent to ground above-knee level; best of 3 rounds." },
  positions: [{ name: "Glímumaður (Glíma wrestler)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Referee (mat)", "3 Corner Judges", "Chief Referee"], summary: "Glímusambandið certified officials." },
  governingBodies: [{ name: "Íslenska Glímusambandið (Icelandic Glíma Federation)", founded: 1916, headquarters: "Reykjavík, Iceland" }, { name: "International Glíma Association", founded: 2013, headquarters: "Reykjavík, Iceland" }],
  majorCompetitions: [{ name: "Íslandsglíman (Icelandic Championship)", frequency: "annual", founded: 1906, region: "Iceland — oldest continuously-run wrestling championship in the world" }, { name: "Grettisbeltið (Grettir Belt — 'King of Icelandic Wrestling')", frequency: "annual", founded: 1906, region: "Iceland" }, { name: "Skjaldarglíma Ármanns (Ármann Shield)", frequency: "annual", founded: 1912, region: "Iceland" }, { name: "International Glíma Championships", frequency: "annual", founded: 2013, region: "Nordic countries (rotating)" }],
  countriesPlayed: ["ISL (national sport)", "DNK", "NOR", "SWE", "FIN", "USA (Nordic diaspora)"],
  famousAthletes: ["Grettir Ásmundarson (legendary saga-era glímumaður ~10-11 c)", "Jóhannes Jósefsson (early 20th c pioneer, Glíma at 1908 Olympics demonstration)", "Modern Grettisbelti winners (rotating annually)"],
  records: [
    { title: "Íslandsglíman since 1906 — oldest continuous wrestling championship", holder: "Íslenska Glímusambandið", value: "Íslandsglíman continuously held since 1906 — oldest continuously-run wrestling championship in the world (121+ years)", year: 1906 },
    { title: "1908 London Olympics demonstration", holder: "Jóhannes Jósefsson (ISL)", value: "Glíma demonstrated at 1908 London Olympics by Jóhannes Jósefsson + team — introduced globally", year: 1908 },
    { title: "Featured in Grettis saga + Njáls saga", holder: "medieval Icelandic sagas", value: "Glíma described in classic Icelandic sagas — Grettis saga + Njáls saga — establishing 10th century origin", year: 1000 },
  ],
  variants: ["brokartök-standard-belt-glima-modern", "hryggspenna-back-hold-glima", "lausatök-loose-grip-glima-street-style", "buxnatök-trouser-hold-old-form"],
  relatedSports: ["schwingen-swiss", "kurash-uzbek", "kushti-pehlwani-indian", "wrestling-freestyle"],
  skills: ["belt-grip technique", "throw setup from stígandi rhythm", "balance + rhythmic footwork", "chivalric composure"],
  wikipediaTitle: "Glíma",
  sources: [{ label: "Wikipedia — Glíma", url: "https://en.wikipedia.org/wiki/Gl%C3%ADma", publisher: "Wikipedia" }, { label: "Icelandic Glíma Federation", url: "https://www.glima.is", publisher: "Íslenska Glímusambandið" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default glimaIcelandic;
