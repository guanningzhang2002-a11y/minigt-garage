import json
import re
import time
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

BASE = "https://minigt.tsm-models.com/"
CATALOG_PATH = Path("assets/minigt-catalog.js")
REPORT_PATH = Path("assets/minigt-clean-image-report.json")

TARGET_NUMBERS = [
    "392", "399", "743", "823", "855", "895", "985", "1022", "1052",
    "1054", "1062", "1081", "1087", "1100", "1129", "1143", "1204",
    "1218", "1222", "1226", "1237", "1238", "1239", "1248", "1249",
    "1250", "1251", "1304",
]

MANUAL_OVERRIDES = {
    # The first candidate has the package box; the second is the clean single-car side view.
    "1022": "https://minigt.tsm-models.com/upload/picfile_list/422834d9d43b33e63ac3f5205cb6881a20250729212947599.JPG",
}


def load_catalog():
    raw = CATALOG_PATH.read_text(encoding="utf-8")
    raw = re.sub(r"^\s*window\.MINIGT_CATALOG\s*=\s*", "", raw)
    raw = re.sub(r";\s*$", "", raw)
    return json.loads(raw)


def save_catalog(catalog):
    CATALOG_PATH.write_text(
        "window.MINIGT_CATALOG = " + json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + ";",
        encoding="utf-8",
    )


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "MINIGT-collector/1.0"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read()


def norm_text(value):
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def detail_images(html, title):
    title_key = norm_text(title)
    matches = re.findall(
        r'<img[^>]+src="([^"]*upload/(?:picfile_list|picfile|mini_gt/products_gif/product_pic_big)[^"]+)"[^>]*alt="([^"]*)"'
        r'|<img[^>]+alt="([^"]*)"[^>]+src="([^"]*upload/(?:picfile_list|picfile|mini_gt/products_gif/product_pic_big)[^"]+)"',
        html,
    )
    urls = []
    for src_a, _alt_a, _alt_b, src_b in matches:
        alt = _alt_a or _alt_b
        alt_key = norm_text(alt)
        # Product pages include recommendation thumbnails; only keep images
        # whose alt text belongs to the current product.
        if title_key and alt_key and not (alt_key in title_key or title_key in alt_key):
            continue
        src = src_a or src_b
        if not src:
            continue
        if not src.startswith("http"):
            src = BASE + src
        if src not in urls:
            urls.append(src)
    # Prefer gallery images, but keep main images as fallback.
    gallery = [url for url in urls if "picfile_list" in url or "product_pic_big" in url]
    return gallery or urls


def image_score(image_bytes):
    image = Image.open(BytesIO(image_bytes)).convert("RGB").resize((420, 300))
    pixels = image.load()
    width, height = image.size

    nonwhite = []
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            # White studio backgrounds are very light and low-saturation.
            mx, mn = max(r, g, b), min(r, g, b)
            is_background = mx > 222 and (mx - mn) < 44
            if not is_background:
                nonwhite.append((x, y, r, g, b))

    if not nonwhite:
        return 999.0

    total = len(nonwhite)
    top = sum(1 for _x, y, *_ in nonwhite if y < height * 0.42) / total
    very_top = sum(1 for _x, y, *_ in nonwhite if y < height * 0.25) / total
    left_top = sum(1 for x, y, *_ in nonwhite if x < width * 0.48 and y < height * 0.45) / total
    y_values = [y for _x, y, *_ in nonwhite]
    x_values = [x for x, _y, *_ in nonwhite]
    vertical_span = (max(y_values) - min(y_values)) / height
    horizontal_span = (max(x_values) - min(x_values)) / width

    # Big package boxes create large non-white blocks in the upper half.
    # Single-car views keep most non-white mass lower and have less top-left clutter.
    package_penalty = top * 3.2 + very_top * 2.4 + left_top * 1.4 + vertical_span * 0.7
    car_presence = horizontal_span * 0.45
    return round(package_penalty - car_presence, 5)


def best_image(urls):
    scored = []
    for url in urls:
        try:
            score = image_score(fetch(url))
            scored.append({"url": url, "score": score})
        except Exception as error:
            scored.append({"url": url, "score": 999.0, "error": str(error)})
        time.sleep(0.04)
    scored.sort(key=lambda item: item["score"])
    return scored[0], scored


def main():
    catalog = load_catalog()
    report = {}
    updated = 0

    for number in TARGET_NUMBERS:
        item = catalog.get(number)
        if not item or "product-detail" not in item.get("productUrl", ""):
            continue
        if number in MANUAL_OVERRIDES:
            item["imageUrl"] = MANUAL_OVERRIDES[number]
            report[number] = {"chosen": {"url": MANUAL_OVERRIDES[number], "score": "manual"}}
            updated += 1
            print(f"{number}: manual {MANUAL_OVERRIDES[number]}")
            continue
        try:
            html = fetch(item["productUrl"]).decode("utf-8", errors="ignore")
            urls = detail_images(html, item.get("title", ""))
            if not urls:
                continue
            best, scored = best_image(urls)
            item["imageUrl"] = best["url"]
            report[number] = {"chosen": best, "candidates": scored[:6]}
            updated += 1
            print(f"{number}: {best['score']} {best['url']}")
        except Exception as error:
            report[number] = {"error": str(error)}
            print(f"{number}: error {error}")
        time.sleep(0.08)

    save_catalog(catalog)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"updated {updated}; report {REPORT_PATH}")


if __name__ == "__main__":
    main()
