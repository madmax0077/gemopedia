import type { Sport } from "@/lib/types";

export const skijoringNordic: Sport = {
  id: "skijoring-nordic",
  slug: "skijoring-nordic",
  name: "Skijoring (Nordic + Equestrian)",
  officialName: "Skijoring — International Federation of Sleddog Sports (IFSS) + North American Ski Joring Association (NASJA)",
  aliases: ["Ski Joring", "Skikjøring", "Hundekjøring på Ski", "Horse Skijoring", "Dog Skijoring"],
  shortDescription:
    "Nordic winter sport where a skier is pulled by dog(s), horse, or motor vehicle at high speed across snow — traditional Scandinavian transportation origins ~2500 BCE cave paintings; modern competitive scenes include IFSS dog-skijoring + Leadville CO annual horse skijoring championship (since 1949).",
  longDescription:
    "Skijoring (from Norwegian skikjøring 'ski driving') is a Nordic winter sport where a skier is pulled by one or more dogs, a horse, or a motor vehicle across snow, at speeds up to 60+ km/h. Traditional origins date to Scandinavian + Finnish + Sami reindeer-pulled ski transportation (cave paintings ~2500 BCE at Rødøy, Norway show ski + reindeer combinations). Three modern competitive disciplines: (1) Dog Skijoring — governed by International Federation of Sleddog Sports (IFSS, founded 1985); skier pulled by 1-3 dogs (typically Alaskan Huskies, Siberian Huskies, Norwegian Elkhounds, Alaska Malamutes) via harness + gangline; distances 5-30 km. IFSS World Championships biennial. (2) Horse Skijoring — most prominent competitive form in North America; skier towed behind horse over jumps + gates at speeds 40+ mph. Signature event: Leadville Ski Joring National Championships (Leadville, CO, USA — annually since 1949; oldest continuously-run skijoring event; features 850ft downhill course with jumps + rings); Whitefish Ski Joring (Montana), Red Lodge (Montana), Steamboat Springs (Colorado). Also competitive at Kitzbühel (Austria) White Turf St. Moritz (Switzerland since 1906 — horse skijoring races on frozen lake in St. Moritz). (3) Motor Skijoring (Motoskiöring) — Scandinavian variant; skier pulled by motorcycle or ATV. Considered emerging Olympic candidate (proposed for 2026 Milan-Cortina but not selected). Extremely fast + dangerous — helmet + protective padding required. Governed by IFSS globally + national federations across USA (NASJA), Canada, Scandinavia.",
  category: "winter-sports",
  subCategory: "Nordic + Equestrian skier-pull winter racing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "ancient", popularity: "regional",
  countryOfOrigin: "NO",
  regionOfOrigin: "Scandinavia (Norway/Finland/Sami tradition ~2500 BCE); modern USA scene 1949 Leadville",
  estimatedOrigin: "Sami/Scandinavian reindeer-ski transportation ~2500 BCE; modern competitive Leadville CO 1949; IFSS founded 1985",
  players: { min: 1, max: 4, note: "Skijorer + puller(s): 1-3 dogs OR 1 horse OR 1 motor vehicle." },
  equipment: [{ name: "Cross-country skis + poles", description: "Standard Nordic skis; some horse-skijoring uses shorter waxed skis." }, { name: "Skijoring harness + gangline (dog)", description: "Padded skijoring belt + gangline connecting to dog(s)." }, { name: "Horse + tow-rope (equestrian)", description: "Trained horse + long tow-rope with breakaway safety." }, { name: "Helmet + eye protection + padding", description: "Mandatory for competitive events." }, { name: "Sled dog (Husky/Malamute) OR fast horse", description: "Trained puller — critical partner." }],
  duration: { approximateMinutes: 5, structure: "Sprint race ~30s-2 min; distance race 5-30 km ~30 min-2 hrs." },
  objective: "Complete race course fastest OR score most jumps/rings (rodeo-format).",
  matchStructure: "Time trials individually OR head-to-head heats; format varies by discipline + event.",
  basicRules: [
    { title: "Skijorer must remain attached", body: "Skier must stay attached to puller via harness/tow-rope throughout race." },
    { title: "Falls = restart or DQ (event-dependent)", body: "Some events allow re-mount; others DQ on fall." },
    { title: "Horse skijoring jumps + gates", body: "Horse skijoring courses feature jumps (2-4 ft high) + rings to collect for bonus points." },
    { title: "Dog skijoring: 1-3 dogs standard", body: "Number of dogs varies by class (Sprint 1-2, Distance 2-3)." },
  ],
  scoring: { summary: "Time-based OR combined time + rings-collected (rodeo).", winCondition: "Fastest time OR most points." },
  positions: [{ name: "Skijorer (skier)", role: "Skier being pulled.", count: 1 }, { name: "Puller (dog/horse/motor)", role: "The pulling force.", count: 2 }],
  officiating: { officials: ["Race Director", "Course Marshals", "Timekeeper", "Veterinarian (animal welfare)"], summary: "IFSS or NASJA officials + veterinary oversight for animal disciplines." },
  governingBodies: [{ name: "International Federation of Sleddog Sports (IFSS)", founded: 1985, headquarters: "Norway" }, { name: "North American Ski Joring Association (NASJA)", founded: 1999, headquarters: "USA" }, { name: "Leadville Skijoring Association", founded: 1949, headquarters: "Leadville, Colorado, USA" }],
  majorCompetitions: [{ name: "Leadville Ski Joring National Championships", frequency: "annual (first weekend March)", founded: 1949, region: "Leadville, Colorado, USA — oldest continuously-run skijoring event" }, { name: "IFSS World Championships (dog skijoring)", frequency: "biennial", founded: 1990, region: "rotating Scandinavia/Alps" }, { name: "White Turf St. Moritz (horse skijoring)", frequency: "annual (Feb)", founded: 1906, region: "St. Moritz, Switzerland (frozen lake)" }, { name: "Whitefish + Red Lodge Skijoring (Montana)", frequency: "annual", founded: 1997, region: "Montana, USA" }],
  countriesPlayed: ["NOR (birthplace)", "FIN", "SWE", "USA (Colorado, Montana)", "CAN", "SUI", "AUT", "GER", "RUS"],
  famousAthletes: ["Leadville skijoring champions (rotating annually)", "Norwegian + Finnish national dog skijoring teams (IFSS dominant)", "St. Moritz White Turf horse skijoring champions"],
  records: [
    { title: "Leadville since 1949 — oldest continuously-run", holder: "Leadville Skijoring Association", value: "Leadville Ski Joring National Championships continuously run since 1949 — oldest continuously-run skijoring event in the world", year: 1949 },
    { title: "White Turf St. Moritz since 1906", holder: "St. Moritz", value: "White Turf St. Moritz horse-racing + skijoring on frozen lake — held since 1906 on Lake St. Moritz", year: 1906 },
    { title: "IFSS founded 1985", holder: "International Federation of Sleddog Sports", value: "IFSS founded 1985 to govern sled dog sports including dog skijoring globally", year: 1985 },
  ],
  variants: ["dog-skijoring-nordic", "horse-skijoring-north-american-rodeo", "horse-skijoring-swiss-flat-track-white-turf", "motor-skijoring-motoskiöring"],
  relatedSports: ["dog-sled-racing", "cross-country-skiing", "polo-on-snow", "ski-mountaineering-vertical"],
  skills: ["skiing at high speed under tow", "dog/horse handling", "jumping technique (horse rodeo variant)", "recovery from stumble/fall"],
  wikipediaTitle: "Skijoring",
  sources: [{ label: "Wikipedia — Skijoring", url: "https://en.wikipedia.org/wiki/Skijoring", publisher: "Wikipedia" }, { label: "Leadville Skijoring official", url: "https://www.leadvilleskijoring.com", publisher: "Leadville Skijoring Association" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default skijoringNordic;
