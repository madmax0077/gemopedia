#!/usr/bin/env node
/**
 * notify-indexnow.mjs
 *
 * Reads the live sitemap.xml, extracts every <loc> URL, and pushes them to
 * the IndexNow aggregator (https://api.indexnow.org/indexnow) which fans
 * the request out to Bing, Yandex, DuckDuckGo, Seznam, Naver, etc.
 *
 * Google does NOT participate in IndexNow; Google discovers URLs from the
 * sitemap you submit in Search Console.
 *
 * Env:
 *   SITE_URL       optional — defaults to https://www.gemopedia.online
 *   INDEXNOW_KEY   optional — defaults to the key committed in package.json
 *   ONLY_CHANGED   optional — "true" to only submit URLs whose <lastmod>
 *                  is within LOOKBACK_HOURS (default 48h)
 *   LOOKBACK_HOURS optional — how far back to consider a URL "changed"
 *
 * Usage:
 *   node scripts/notify-indexnow.mjs                 # push everything
 *   ONLY_CHANGED=true node scripts/notify-indexnow.mjs   # only recent
 */

const SITE_URL = (process.env.SITE_URL ?? "https://www.gemopedia.online").replace(/\/$/, "");
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "85f339b64ac4ab92a0a387fda539513f";
const ONLY_CHANGED = process.env.ONLY_CHANGED === "true";
const LOOKBACK_HOURS = Number(process.env.LOOKBACK_HOURS ?? 48);

const HOST = new URL(SITE_URL).host;
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const CHUNK_SIZE = 500; // spec allows up to 10 000, but smaller chunks fail-safer

async function main() {
  console.log(`▶ IndexNow ping for ${HOST}`);
  console.log(`  key file: ${KEY_LOCATION}`);

  const keyOk = await verifyKeyFile();
  if (!keyOk) {
    console.error(`✗ Key file not reachable at ${KEY_LOCATION}`);
    console.error(`  Deploy first, then re-run this script.`);
    process.exit(1);
  }
  console.log(`✓ Key file OK`);

  const urls = await loadSitemapUrls();
  console.log(`  sitemap URLs: ${urls.length}`);

  const targets = ONLY_CHANGED ? filterRecent(urls, LOOKBACK_HOURS) : urls;
  if (ONLY_CHANGED) {
    console.log(`  filtered to last ${LOOKBACK_HOURS}h: ${targets.length}`);
  }

  if (targets.length === 0) {
    console.log(`  nothing to submit — done.`);
    return;
  }

  const chunks = chunk(targets.map((u) => u.loc), CHUNK_SIZE);
  console.log(`  submitting ${targets.length} URLs in ${chunks.length} chunk(s)…`);

  let ok = 0;
  let bad = 0;
  for (let i = 0; i < chunks.length; i++) {
    const urlList = chunks[i];
    const res = await submit(urlList);
    if (res.ok) {
      console.log(`  chunk ${i + 1}/${chunks.length}: ${res.status} ${res.statusText} (${urlList.length} urls)`);
      ok += urlList.length;
    } else {
      console.error(`  chunk ${i + 1}/${chunks.length}: ${res.status} ${res.statusText} — ${res.body}`);
      bad += urlList.length;
    }
  }

  console.log(`\n✓ done — accepted ${ok} URL(s), failed ${bad}`);
  if (bad > 0) process.exit(1);
}

async function verifyKeyFile() {
  try {
    const r = await fetch(KEY_LOCATION, { redirect: "follow" });
    if (!r.ok) return false;
    const body = (await r.text()).trim();
    return body === INDEXNOW_KEY;
  } catch {
    return false;
  }
}

async function loadSitemapUrls() {
  const r = await fetch(`${SITE_URL}/sitemap.xml`, { redirect: "follow" });
  if (!r.ok) throw new Error(`sitemap.xml → ${r.status}`);
  const xml = await r.text();

  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  if (isIndex) {
    const childSitemaps = extractTag(xml, "loc");
    const all = [];
    for (const child of childSitemaps) {
      const cr = await fetch(child, { redirect: "follow" });
      if (!cr.ok) continue;
      all.push(...parseUrlEntries(await cr.text()));
    }
    return all;
  }
  return parseUrlEntries(xml);
}

function parseUrlEntries(xml) {
  const entries = [];
  const rx = /<url>([\s\S]*?)<\/url>/gi;
  let m;
  while ((m = rx.exec(xml)) !== null) {
    const block = m[1];
    const loc = firstTag(block, "loc");
    if (!loc) continue;
    const lastmod = firstTag(block, "lastmod");
    entries.push({ loc: loc.trim(), lastmod: lastmod?.trim() });
  }
  return entries;
}

function firstTag(xml, tag) {
  const m = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return m?.[1];
}

function extractTag(xml, tag) {
  const out = [];
  const rx = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "gi");
  let m;
  while ((m = rx.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

function filterRecent(entries, hours) {
  const cutoff = Date.now() - hours * 3600 * 1000;
  return entries.filter((e) => {
    if (!e.lastmod) return false;
    const t = Date.parse(e.lastmod);
    return Number.isFinite(t) && t >= cutoff;
  });
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

async function submit(urlList) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  try {
    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const body = r.ok ? "" : await r.text().catch(() => "");
    return { ok: r.ok, status: r.status, statusText: r.statusText, body };
  } catch (err) {
    return { ok: false, status: 0, statusText: "network-error", body: String(err) };
  }
}

main().catch((err) => {
  console.error("fatal:", err);
  process.exit(1);
});
