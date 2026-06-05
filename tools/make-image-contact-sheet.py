import json
import re
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw

NUMBERS = [
    "1304", "1251", "1250", "1249", "1248", "1239", "1238", "1237",
    "1226", "1222", "1218", "1204", "1143", "1129", "1100", "1087",
    "1081", "1062", "1054", "1052", "1022", "985", "895", "855",
    "823", "743", "399", "392",
]


def load_catalog():
    raw = Path("assets/minigt-catalog.js").read_text(encoding="utf-8")
    raw = re.sub(r"^\s*window\.MINIGT_CATALOG\s*=\s*", "", raw)
    raw = re.sub(r";\s*$", "", raw)
    return json.loads(raw)


def fetch_image(url):
    request = urllib.request.Request(url, headers={"User-Agent": "MINIGT-collector/1.0"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return Image.open(BytesIO(response.read())).convert("RGB")


def fit(image, size):
    image.thumbnail(size, Image.LANCZOS)
    canvas = Image.new("RGB", size, "white")
    x = (size[0] - image.width) // 2
    y = (size[1] - image.height) // 2
    canvas.paste(image, (x, y))
    return canvas


catalog = load_catalog()
cell_w, cell_h = 230, 190
cols = 4
rows = (len(NUMBERS) + cols - 1) // cols
sheet = Image.new("RGB", (cell_w * cols, cell_h * rows), "#f4f6f8")
draw = ImageDraw.Draw(sheet)

for index, number in enumerate(NUMBERS):
    x = (index % cols) * cell_w
    y = (index // cols) * cell_h
    item = catalog.get(number)
    draw.rectangle((x + 6, y + 6, x + cell_w - 6, y + cell_h - 6), fill="white", outline="#d8dee7")
    draw.text((x + 14, y + 12), f"#{number}", fill="#111827")
    if not item or not item.get("imageUrl"):
        draw.text((x + 14, y + 44), "missing", fill="#b3222a")
        continue
    try:
        image = fit(fetch_image(item["imageUrl"]), (cell_w - 24, 128))
        sheet.paste(image, (x + 12, y + 34))
    except Exception as error:
        draw.text((x + 14, y + 44), error.__class__.__name__, fill="#b3222a")
    title = (item.get("title") or "")[:34]
    draw.text((x + 14, y + 166), title, fill="#4b5563")

Path("assets/clean-image-contact-sheet.jpg").parent.mkdir(exist_ok=True)
sheet.save("assets/clean-image-contact-sheet.jpg", quality=92)
print("assets/clean-image-contact-sheet.jpg")
