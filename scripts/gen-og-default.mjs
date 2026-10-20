/**
 * Renders public/og-default.png, the fallback social-share image (1200x630).
 *
 * Run once and commit the PNG — it is deliberately a static asset rather than
 * an `opengraph-image` route, so it adds nothing to the static-export build.
 *
 *   node scripts/gen-og-default.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og.js";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "og-default.png");

const el = (type, style, children) => ({ type, props: { style, children } });

const image = el(
  "div",
  {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 90px",
    color: "#ffffff",
    background: "linear-gradient(135deg, #07070b 0%, #1e1b4b 55%, #0f766e 100%)",
  },
  [
    el("div", { display: "flex", fontSize: 30, letterSpacing: 6, color: "#a5b4fc", textTransform: "uppercase" }, "Sports & games encyclopedia"),
    el("div", { display: "flex", fontSize: 148, fontWeight: 800, marginTop: 18, lineHeight: 1.05 }, "Gemopedia"),
    el("div", { display: "flex", fontSize: 56, marginTop: 14, color: "#e0e7ff" }, "Every game. Explained."),
    el(
      "div",
      { display: "flex", fontSize: 32, marginTop: 40, color: "#c7d2fe" },
      "Rules, scoring and how to play for cricket, chess, kabaddi, sumo and hundreds more.",
    ),
  ],
);

const response = new ImageResponse(image, { width: 1200, height: 630 });
const bytes = Buffer.from(await response.arrayBuffer());
fs.writeFileSync(OUT, bytes);
console.log(`wrote ${OUT} (${bytes.length} bytes)`);
