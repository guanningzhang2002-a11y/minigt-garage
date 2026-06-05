import fs from "node:fs";
import https from "node:https";

globalThis.window = {};
await import("../assets/minigt-catalog.js");

const outputPath = "assets/minigt-image-candidates.js";
const baseUrl = "https://minigt.tsm-models.com/";
const concurrency = 8;

function get(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { "User-Agent": "MINIGT-collector/1.0" }
    }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume();
        get(new URL(response.headers.location, url).href).then(resolve, reject);
        return;
      }
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => resolve(body));
    });
    request.setTimeout(20000, () => request.destroy(new Error("request timeout")));
    request.on("error", reject);
  });
}

function absoluteUrl(src) {
  if (!src) return "";
  return src.startsWith("http") ? src : new URL(src, baseUrl).href;
}

function detailImages(html) {
  const urls = [];
  const imagePattern = /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi;
  for (const match of html.matchAll(imagePattern)) {
    const src = absoluteUrl(match[1]);
    if (!/\/upload\/(?:picfile_list|picfile|mini_gt\/products_gif\/product_pic_big)\//i.test(src)) continue;
    if (!urls.includes(src)) urls.push(src);
  }
  const gallery = urls.filter((url) => /picfile_list|product_pic_big/i.test(url));
  return (gallery.length ? gallery : urls).slice(0, 8);
}

const entries = Object.entries(window.MINIGT_CATALOG || {})
  .filter(([, item]) => item.productUrl?.includes("product-detail"));
const candidates = {};
let cursor = 0;
let completed = 0;

async function worker() {
  while (cursor < entries.length) {
    const index = cursor;
    cursor += 1;
    const [number, item] = entries[index];
    try {
      const images = detailImages(await get(item.productUrl));
      if (images.length) candidates[number] = images;
    } catch (error) {
      console.log(`${number}: ${error.message}`);
    }
    completed += 1;
    if (completed % 50 === 0 || completed === entries.length) {
      console.log(`${completed}/${entries.length}`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));

fs.writeFileSync(
  outputPath,
  `window.MINIGT_IMAGE_CANDIDATES = ${JSON.stringify(candidates)};`,
  "utf8"
);
console.log(`saved ${Object.keys(candidates).length} products to ${outputPath}`);
