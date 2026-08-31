import type { Sport } from "@/lib/types";

export const underwaterPhotographyCompetition: Sport = {
  id: "underwater-photography-competition",
  slug: "underwater-photography-competition",
  name: "Underwater Photography Competition",
  officialName: "CMAS World Championship of Underwater Photography",
  aliases: ["UW Photo Championship", "CMAS UW Photo", "Championnat Photo Sous-Marine"],
  shortDescription:
    "Competitive underwater photography discipline governed by CMAS; divers-photographers compete in categories (Wide-Angle Reef/Wreck, Macro, Fish Portrait, Behavior, Environment) within 2-day dive schedule; CMAS World Championships biennial since 1985.",
  longDescription:
    "Underwater Photography Competition (Photographie Sous-Marine Compétitive) is a formal competitive discipline governed globally by CMAS (Confédération Mondiale des Activités Subaquatiques, founded 1959, HQ Rome) via its Visual Committee. Competitors are certified scuba divers who capture judged underwater photographs across strict rules — typically requiring all images be shot at the competition venue during the event's 2-4 day dive schedule (no pre-competition images allowed). Standard 5 categories: (1) Wide-Angle Reef Scene (colorful reef panoramas), (2) Wide-Angle Wreck (shipwrecks), (3) Macro (small subjects <5cm), (4) Fish Portrait (single fish in habitat), (5) Fish Behavior (documented behavior — feeding, mating, cleaning stations). Photographers compete with model divers (assistants) + must produce 5 total images to submit at event end. Panel of 5-7 judges scores each on technical + artistic merit; combined ranking determines champions. Governed by CMAS Visual Committee since 1971; first CMAS World Championship 1985. Strongholds: France, Italy, Spain, USA, UK, Croatia, Egypt (Red Sea diving), Indonesia (coral triangle), Philippines. Notable events: CMAS World Championship (biennial), Antibes Underwater Photography Festival, Palme Grand Bleu Awards, Ocean Art Underwater Photo Contest (annual online). Uses professional underwater housings for DSLR/mirrorless cameras + underwater strobes; equipment investment $10,000-$50,000+ typical for competitive setup.",
  category: "aquatic-sports",
  subCategory: "competitive underwater photography (CMAS discipline)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "IT",
  regionOfOrigin: "France / Italy (CMAS Visual Committee formed 1971 Rome)",
  estimatedOrigin: "CMAS Visual Committee 1971; first CMAS World Championship 1985",
  players: { min: 1, max: 2, note: "Photographer + optional model diver (buddy)." },
  equipment: [{ name: "Underwater camera housing (DSLR / mirrorless)", description: "Waterproof housing rated to competition depth; Nauticam, Ikelite, Aquatica major brands." }, { name: "Camera body (DSLR / mirrorless)", description: "Sony A7R, Nikon D850, Canon R5 popular." }, { name: "Underwater strobes (2× typical)", description: "Underwater flash units mounted on arms; Inon, Sea&Sea, Retra brands." }, { name: "Wide-angle + macro lens ports", description: "Dome ports for wide; flat ports for macro." }, { name: "Scuba diving equipment (BCD + regulator + tank)", description: "Full scuba gear required — competitor must be certified diver." }, { name: "Model diver (assistant)", description: "Second diver in-scene providing scale/subject in wide-angle categories." }],
  duration: { approximateMinutes: 180, structure: "Competition dives: typically 2-4 days × 2-3 dives per day × 45-70 min per dive." },
  objective: "Produce 5 judged photographs across category set with highest combined judge scores.",
  matchStructure: "Multi-day dive schedule; images submitted end of competition; judge panel scoring; individual + team standings.",
  basicRules: [
    { title: "All images shot at competition venue", body: "Pre-competition images strictly forbidden; must be shot during event dive schedule." },
    { title: "Photo count per category (typically 1 per category × 5 categories)", body: "Fixed count of submissions per category — no repeats." },
    { title: "Post-processing limits (RAW + minimal edits)", body: "RAW only submission with strict processing limits — cropping ±10%, no compositing, no removing/adding elements." },
    { title: "Environmental protection strictly enforced", body: "No damage to reef/wreck; disqualification for touching marine life; strict welfare rules." },
  ],
  scoring: { summary: "5-7 judge panel scores each image 0-10 on technical + artistic + environmental; combined = final ranking.", winCondition: "Highest combined score across all 5 category submissions." },
  positions: [{ name: "Photographer (competitor)", role: "Sole competitor.", count: 1 }, { name: "Model diver (assistant)", role: "Optional in-scene subject.", count: 1 }],
  officiating: { officials: ["Chief Judge (CMAS Visual Committee certified)", "5-7 Judges (photographers + marine biologists)", "Event Director", "Environmental Marshal (checks reef contact)"], summary: "CMAS certified judge panel." },
  governingBodies: [{ name: "CMAS Visual Committee", founded: 1971, headquarters: "Rome, Italy" }, { name: "CMAS (parent body)", founded: 1959, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "CMAS World Championship of Underwater Photography", frequency: "biennial", founded: 1985, region: "rotating global (Croatia, Red Sea Egypt, Cyprus)" }, { name: "CMAS European Underwater Photography Championship", frequency: "biennial", founded: 1980, region: "Europe" }, { name: "Ocean Art Underwater Photo Contest", frequency: "annual", founded: 2011, region: "worldwide (online)" }, { name: "Antibes Underwater Photography Festival", frequency: "annual", founded: 1974, region: "Antibes, France" }],
  countriesPlayed: ["FRA", "ITA", "ESP", "HRV", "USA", "GBR", "EGY", "IDN", "PHL", "MEX"],
  famousAthletes: ["Amos Nachoum (ISR — great white shark photography pioneer)", "David Doubilet (USA — National Geographic staff underwater photographer)", "Alex Mustard (GBR — multi-world-title photographer)", "Damien Mauric (FRA — CMAS World Champion)"],
  records: [
    { title: "CMAS World Championship since 1985", holder: "CMAS Visual Committee", value: "First CMAS World Championship of Underwater Photography held 1985 in Croatia; biennial ever since", year: 1985 },
    { title: "David Doubilet 70+ National Geographic covers", holder: "David Doubilet (USA)", value: "National Geographic staff underwater photographer with 70+ covers over 50+ year career", year: 2020 },
  ],
  variants: ["cmas-formal-5-category-championship", "ocean-art-annual-online-contest", "single-photograph-shootout-format"],
  relatedSports: ["scuba-diving", "freediving", "underwater-hockey", "wildlife-photography"],
  skills: ["underwater buoyancy control (essential for camera stability)", "underwater lighting (strobe angles)", "composition + framing", "marine biology knowledge (finding subjects)", "post-processing (minimal RAW)"],
  wikipediaTitle: "Underwater photography",
  sources: [{ label: "Wikipedia — Underwater photography", url: "https://en.wikipedia.org/wiki/Underwater_photography", publisher: "Wikipedia" }, { label: "CMAS Visual Committee", url: "https://www.cmas.org/visual", publisher: "CMAS" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default underwaterPhotographyCompetition;
