import fs from "node:fs";
import https from "node:https";

globalThis.window = {};
await import("../assets/minigt-catalog.js");
await import("../assets/minigt-image-candidates.js");

const baseUrl = "https://minigt.tsm-models.com/";
const maxNumber = 1400;
const concurrency = 10;
const catalog = window.MINIGT_CATALOG || {};
const candidates = window.MINIGT_IMAGE_CANDIDATES || {};
const missing = {};
let cursor = 1;
let checked = 0;

function get(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { headers: { "User-Agent": "MINIGT-collector/1.0" } }, (response) => {
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

function decodeHtml(value) {
  return String(value || "")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteUrl(src) {
  return src.startsWith("http") ? src : new URL(src, baseUrl).href;
}

function searchResult(html, requestedNumber) {
  const cards = [...html.matchAll(
    /<div class="pd-list-in[\s\S]*?<img src="([^"]+)" alt="([^"]*)"[\s\S]*?<a href="index\.php\?action=product-detail&id=(\d+)"><\/a>[\s\S]*?<p class="m-0">(MGT[^<]+)<\/p>/gi
  )];
  const padded = String(requestedNumber).padStart(5, "0");
  const exact = cards.find((match) => decodeHtml(match[4]).toUpperCase().startsWith(`MGT${padded}`));
  if (!exact) return null;
  return {
    itemNo: decodeHtml(exact[4]),
    title: decodeHtml(exact[2]),
    imageUrl: absoluteUrl(exact[1]),
    productUrl: `${baseUrl}index.php?action=product-detail&id=${exact[3]}`
  };
}

function detailImages(html) {
  const urls = [];
  for (const match of html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    const src = absoluteUrl(match[1]);
    if (!/\/upload\/(?:picfile_list|picfile|mini_gt\/products_gif\/product_pic_big)\//i.test(src)) continue;
    if (!urls.includes(src)) urls.push(src);
  }
  const gallery = urls.filter((url) => /picfile_list|product_pic_big/i.test(url));
  return (gallery.length ? gallery : urls).slice(0, 8);
}

async function worker() {
  while (cursor <= maxNumber) {
    const number = cursor;
    cursor += 1;
    try {
      const query = `MGT${String(number).padStart(5, "0")}`;
      const html = await get(`${baseUrl}index.php?action=product-search&keywords=${query}`);
      const result = searchResult(html, number);
      if (result && !catalog[String(number)]) {
        missing[String(number)] = result;
      }
    } catch (error) {
      console.log(`${number}: ${error.message}`);
    }
    checked += 1;
    if (checked % 100 === 0 || checked === maxNumber) console.log(`${checked}/${maxNumber}`);
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));

for (const [number, item] of Object.entries(missing)) {
  catalog[number] = item;
  try {
    const images = detailImages(await get(item.productUrl));
    if (images.length) candidates[number] = images;
  } catch (error) {
    console.log(`${number} images: ${error.message}`);
  }
}

const sortedCatalog = Object.fromEntries(
  Object.entries(catalog).sort(([a], [b]) => Number(a) - Number(b))
);
const sortedCandidates = Object.fromEntries(
  Object.entries(candidates).sort(([a], [b]) => Number(a) - Number(b))
);

fs.writeFileSync("assets/minigt-catalog.js", `window.MINIGT_CATALOG = ${JSON.stringify(sortedCatalog)};`, "utf8");
fs.writeFileSync("assets/minigt-image-candidates.js", `window.MINIGT_IMAGE_CANDIDATES = ${JSON.stringify(sortedCandidates)};`, "utf8");
fs.writeFileSync("assets/minigt-missing-catalog-report.json", JSON.stringify(missing, null, 2), "utf8");

console.log(`official found: ${Object.keys(sortedCatalog).length}`);
console.log(`missing added: ${Object.keys(missing).length}`);
console.log(`numbers: ${Object.keys(missing).join(", ")}`);
