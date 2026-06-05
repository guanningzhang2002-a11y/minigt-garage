import fs from "node:fs";
import https from "node:https";

globalThis.window = {};
await import("../assets/minigt-catalog.js");

const numbers = [
  "392", "399", "743", "823", "855", "895", "985", "1022", "1052",
  "1054", "1062", "1081", "1087", "1100", "1129", "1143", "1204",
  "1218", "1222", "1226", "1237", "1238", "1239", "1248", "1249",
  "1250", "1251", "1304"
];
const base = "https://minigt.tsm-models.com/";

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let body = "";
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

function detailImages(html) {
  return [...html.matchAll(/<img[^>]+src="([^"]*upload\/picfile_list[^"]+)"[^>]*alt="([^"]*)"|<img[^>]+alt="([^"]*)"[^>]+src="([^"]*upload\/picfile_list[^"]+)"/g)]
    .map((match) => match[1] || match[4])
    .filter(Boolean)
    .map((src) => (src.startsWith("http") ? src : base + src));
}

let updated = 0;
for (const number of numbers) {
  const item = window.MINIGT_CATALOG[number];
  if (!item?.productUrl?.includes("product-detail")) continue;

  try {
    const html = await get(item.productUrl);
    const images = detailImages(html);
    if (images[0]) {
      item.imageUrl = images[0];
      updated += 1;
      console.log(`${number} -> ${images[0]}`);
    }
  } catch (error) {
    console.log(`${number} error: ${error.message}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 80));
}

fs.writeFileSync(
  "assets/minigt-catalog.js",
  `window.MINIGT_CATALOG = ${JSON.stringify(window.MINIGT_CATALOG)};`,
  "utf8"
);
console.log(`updated ${updated}`);
