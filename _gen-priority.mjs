// Temp scratch tool — enumerate every Sport record across lib/data/sports/**
// and write a priority checklist to lib/data/sports/_priority.md.
//
// Sort order: popularity (global > major > regional > niche > obscure) then
// alphabetical by name within tier. Ignored files: index.ts, _templates/*,
// any file inside _templates or with no Sport record.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("lib/data/sports");

const CATEGORY_TO_FOLDER = {
  "ball-sports": "ball",
  "racket-paddle-sports": "racket-paddle",
  "combat-sports": "combat",
  "athletics": "athletics",
  "aquatic-sports": "aquatic",
  "winter-sports": "winter",
  "motor-sports": "motor",
  "equestrian-sports": "equestrian",
  "precision-sports": "precision",
  "strength-sports": "strength",
  "gymnastics": "gymnastics",
  "adventure-extreme-sports": "adventure",
  "mind-sports": "mind",
  "traditional-cultural-sports": "traditional",
  "esports": "esports",
  "air-sports": "air",
  "board-games": "board",
  "card-games": "card",
  "dice-games": "dice",
  "tile-games": "tile",
  "tabletop-rpg": "tabletop-rpg",
  "wargames": "wargames",
  "party-games": "party",
  "playground-games": "playground",
  "puzzle-games": "puzzle",
  "video-games": "video",
  "casino-games": "casino",
  "escape-immersive": "escape",
  "skill-toys": "skill-toys",
};

const POP_ORDER = { global: 0, major: 1, regional: 2, niche: 3, obscure: 4 };

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_templates") continue;
      out.push(...walk(p));
    } else if (entry.isFile() && p.endsWith(".ts") && entry.name !== "index.ts") {
      out.push(p);
    }
  }
  return out;
}

// Naive per-record extraction from a TS file — matches an opening `{` block that
// declares id/slug/name/category. Works because every Sport literal uses the
// canonical field order established across the codebase.
function extractRecords(src, filePath) {
  const records = [];
  // Find candidate blocks by locating each `id:` literal.
  const idRe = /\bid\s*:\s*"([^"]+)"/g;
  let m;
  while ((m = idRe.exec(src)) !== null) {
    const startFromId = m.index;
    // Look ahead up to ~4kB for slug/name/category/popularity within this record.
    const chunk = src.slice(startFromId, startFromId + 4000);
    const slug = chunk.match(/\bslug\s*:\s*"([^"]+)"/);
    const name = chunk.match(/\bname\s*:\s*"([^"]+)"/);
    const category = chunk.match(/\bcategory\s*:\s*"([^"]+)"/);
    const popularity = chunk.match(/\bpopularity\s*:\s*"([^"]+)"/);
    if (!slug || !name || !category) continue;
    records.push({
      id: m[1],
      slug: slug[1],
      name: name[1],
      category: category[1],
      popularity: popularity ? popularity[1] : "regional",
      currentFile: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    });
  }
  return records;
}

const files = walk(ROOT);
const all = [];
const seenSlugs = new Set();
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  for (const r of extractRecords(src, f)) {
    if (seenSlugs.has(r.slug)) continue;
    seenSlugs.add(r.slug);
    all.push(r);
  }
}

all.sort((a, b) => {
  const p = (POP_ORDER[a.popularity] ?? 99) - (POP_ORDER[b.popularity] ?? 99);
  if (p !== 0) return p;
  return a.name.localeCompare(b.name);
});

const AUTHORED = new Set();
for (const f of files) {
  const rel = path.relative(ROOT, f).replace(/\\/g, "/");
  if (rel.startsWith("_")) continue;
  if (!rel.includes("/")) continue;
  const slug = path.basename(rel, ".ts");
  AUTHORED.add(slug);
}

const groupByTier = { global: [], major: [], regional: [], niche: [], obscure: [] };
for (const r of all) (groupByTier[r.popularity] ?? groupByTier.regional).push(r);

const today = new Date().toISOString().slice(0, 10);

let md = "";
md += "# Priority queue — deep-fill checklist\n\n";
md += `Total games: **${all.length}**. Fully authored so far: **${AUTHORED.size}**.\n\n`;
md += `Generated ${today} by \`_gen-priority.mjs\`.\n\n`;
md += "Sort order: **popularity** (global → major → regional → niche → obscure), then alphabetical.\n\n";
md += "Each row shows the target file path. Tick the box when a game has been promoted from stub to a fully-authored file.\n\n";
md += "## Legend\n\n";
md += "- `[x]` — game is a fully-authored file at `lib/data/sports/<category>/<slug>.ts`\n";
md += "- `[ ]` — game is still a compact stub, to be promoted\n\n";

const TIER_HEADERS = {
  global: "Tier 1 — global popularity",
  major: "Tier 2 — major popularity",
  regional: "Tier 3 — regional popularity",
  niche: "Tier 4 — niche popularity",
  obscure: "Tier 5 — obscure",
};

for (const tier of ["global", "major", "regional", "niche", "obscure"]) {
  const rows = groupByTier[tier];
  if (!rows || rows.length === 0) continue;
  md += `\n## ${TIER_HEADERS[tier]} (${rows.length})\n\n`;
  for (const r of rows) {
    const folder = CATEGORY_TO_FOLDER[r.category] ?? "misc";
    const target = `lib/data/sports/${folder}/${r.slug}.ts`;
    const done = AUTHORED.has(r.slug) ? "x" : " ";
    md += `- [${done}] **${r.name}** — \`${target}\`  \n`;
    md += `      _${r.category}_ · from \`${r.currentFile}\`\n`;
  }
}

fs.writeFileSync("lib/data/sports/_priority.md", md, { encoding: "utf8" });
console.log(`wrote lib/data/sports/_priority.md — ${all.length} games (${AUTHORED.size} authored)`);
