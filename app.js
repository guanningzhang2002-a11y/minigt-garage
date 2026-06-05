const knownProductUrls = {
  "743": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1445",
  "823": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1849",
  "855": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1563",
  "895": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1624",
  "985": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1707",
  "1062": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1840",
  "1052": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1845",
  "1100": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2015",
  "1081": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2007",
  "392": "https://minigt.tsm-models.com/index.php?action=product-detail&id=392",
  "1022": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1859",
  "1087": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1863",
  "1054": "https://minigt.tsm-models.com/index.php?action=product-detail&id=1831",
  "1129": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2018",
  "1143": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2057",
  "1250": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2240",
  "1251": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2242",
  "1249": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2224",
  "1248": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2223",
  "1239": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2219",
  "1238": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2218",
  "1237": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2217",
  "1226": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2167",
  "1222": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2163",
  "1218": "https://minigt.tsm-models.com/index.php?action=product-detail&id=2197",
  "1304": "https://minigt.tsm-models.com/index.php?action=product-search&keywords=MGT01304"
};

const knownImageUrls = {
  "743": "https://minigt.tsm-models.com/upload/picfile/2024/09/20240930075132911.jpg",
  "823": "https://minigt.tsm-models.com/upload/picfile/2025/11/20251122091625891.JPG",
  "855": "https://minigt.tsm-models.com/upload/picfile/2025/05/20250506204456477.JPG",
  "895": "https://minigt.tsm-models.com/upload/picfile/2025/04/20250409213910782.jpg",
  "985": "https://minigt.tsm-models.com/upload/picfile/2025/03/20250319195118437.jpg",
  "1062": "https://minigt.tsm-models.com/upload/picfile/2025/12/20251212050014206.JPG",
  "1052": "https://minigt.tsm-models.com/upload/picfile/2025/12/20251207195254592.JPG",
  "1100": "https://minigt.tsm-models.com/upload/picfile_list/42cf998f839e657ac7c175a197185cd720251203051825550.JPG",
  "1081": "https://minigt.tsm-models.com/upload/picfile/2025/11/20251122090005338.JPG",
  "392": "https://minigt.tsm-models.com/upload/picfile/2025/05/20250508194340908.JPG",
  "1022": "https://minigt.tsm-models.com/upload/picfile_list/422834d9d43b33e63ac3f5205cb6881a20250729212947599.JPG",
  "1087": "https://minigt.tsm-models.com/upload/picfile/2025/07/20250729213708679.JPG",
  "1054": "https://minigt.tsm-models.com/upload/picfile/2025/11/20251123041518292.JPG",
  "1129": "https://minigt.tsm-models.com/upload/picfile_list/9bb8510e44ac36716751b4e32722c7af20260519182712085.JPG",
  "1143": "https://minigt.tsm-models.com/upload/picfile_list/1157a337f7c556c79f87841e4b32454220260106205322244.JPG",
  "1250": "https://minigt.tsm-models.com/upload/picfile_list/d82b7c9191bd841a5d844ef0101563f520260531213717666.jpg",
  "1251": "https://minigt.tsm-models.com/upload/picfile_list/115ef85ff9c6b235777531493292918c20260531214704918.JPG",
  "1249": "https://minigt.tsm-models.com/upload/picfile/2026/05/20260515175127911.JPG",
  "1248": "https://minigt.tsm-models.com/upload/picfile/2026/05/20260515174631142.JPG",
  "1239": "https://minigt.tsm-models.com/upload/picfile/2026/05/20260502050319983.JPG",
  "1238": "https://minigt.tsm-models.com/upload/picfile/2026/05/20260502045653640.JPG",
  "1237": "https://minigt.tsm-models.com/upload/picfile/2026/05/20260502044943271.JPG",
  "1226": "https://minigt.tsm-models.com/upload/picfile/2026/04/20260403182649303.JPG",
  "1222": "https://minigt.tsm-models.com/upload/picfile/2026/04/20260403180246162.JPG",
  "1218": "https://minigt.tsm-models.com/upload/picfile/2026/04/20260416181740150.JPG"
};

const knownOfficialDetails = {
  "743": { model: "Nissan LB-Super Silhouette S15 SILVIA", variant: "LBWK KUMA" },
  "823": { model: "Nissan LB-Super Silhouette S15 SILVIA", variant: "#555 V2 / 2024 Formula Drift Japan" },
  "855": { model: "Nissan Silvia (S15) D-MAX", variant: "#70 / D-MAX Racing / 2023 D1 Grand Prix" },
  "895": { model: "Nissan LB-Super Silhouette S15 SILVIA", variant: "#555 / 2023 Formula Drift Japan" },
  "985": { model: "Nissan Z VeilSide FFZ400", variant: "Gold Chrome" },
  "1062": { model: "Lamborghini Huracan GT3 EVO2 #78", variant: "Forte Racing / 2024 IMSA Daytona 24 Hrs" },
  "1052": { model: "Porsche 911 GT3 R #77", variant: "AO Racing / 2024 IMSA Road America" },
  "1100": { model: "Lamborghini Countach LB-WORKS", variant: "Red" },
  "1081": { model: "Lamborghini Countach LB-WORKS", variant: "Black" },
  "392": { model: "Mazda Miata MX-5 (NA)", variant: "Sunburst Yellow" },
  "1022": { model: "Nissan LB-Super Silhouette S15 SILVIA", variant: "GARASIDRIFT x LBWK 2025" },
  "1087": { model: "LB-WORKS Lamborghini Aventador", variant: "Limited Edition Matte Black" },
  "1054": { model: "Nissan LB-Super Silhouette S15 SILVIA", variant: "ATHLETE" },
  "1129": { model: "Lamborghini Huracan GT3 EVO2 #45", variant: "DEX Imaging / 2024 IMSA Daytona 24 Hrs" },
  "1143": { model: "Porsche 911 GT3 R #77", variant: "AO Racing / 2025 IMSA Petit Le Mans" },
  "1250": { model: "Toyota Supra BOMEX", variant: "Fast & Furious / Brian O'Conner" },
  "1251": { model: "Mazda RX-7 VeilSide Fortune", variant: "Fast & Furious Tokyo Drift / Han Seoul-Oh" },
  "1249": { model: "Mazda MX-5 (NA) Pandem", variant: "Mint Green" },
  "1248": { model: "Nissan LB-Silhouette WORKS GT 35GT-RR", variant: "Ver.1 Matt Grey" },
  "1239": { model: "Nissan SILVIA (S15) LB-Super Silhouette", variant: "AMOCULTURE" },
  "1238": { model: "Nissan Skyline GT-R (R32)", variant: "LBWK Kaido Works AMOCULTURE" },
  "1237": { model: "Toyota GR Supra LB-WORKS", variant: "AMOCULTURE" },
  "1226": { model: "LB-WORKS Lamborghini Huracan GT", variant: "Street Customs" },
  "1222": { model: "Mazda Miata MX-5 (ND) Pandem", variant: "IMSA White" },
  "1218": { model: "Porsche 911 GT3 R (992) #77", variant: "AO Racing / 2025 IMSA Sebring 12 Hrs Class Winner" }
};

const seedInventory = [
  { id: 1, status: "加拿大已购", number: "743", model: "Nissan S15 Silvia LB-Super Silhouette", variant: "LBWK KUMA", quantity: 1, note: "", productUrl: "https://www.sunrich.jp/SHOP/MGT00743-R.html" },
  { id: 2, status: "加拿大已购", number: "823", model: "Nissan S15 Silvia LB-Super Silhouette", variant: "#555 V2 / 2024 Formula Drift Japan", quantity: 1, note: "" },
  { id: 3, status: "加拿大已购", number: "855", model: "Nissan Silvia S15 D-MAX", variant: "#70 / 2023 D1 Grand Prix", quantity: 1, note: "" },
  { id: 4, status: "加拿大已购", number: "895", model: "Nissan S15 Silvia LB-Super Silhouette", variant: "#555 / 2023 Formula Drift Japan", quantity: 1, note: "" },
  { id: 5, status: "加拿大已购", number: "985", model: "Nissan Z VeilSide FFZ400", variant: "Gold Chrome", quantity: 1, note: "" },
  { id: 6, status: "加拿大已购", number: "1062", model: "Lamborghini Huracan GT3 EVO2 #78", variant: "2024 IMSA Daytona 24 Hrs Frote Racing", quantity: 1, note: "" },
  { id: 7, status: "加拿大已购", number: "1052", model: "Porsche 911 GT3 R #77", variant: "2024 IMSA Road America AO Racing", quantity: 1, note: "加一挂卡" },
  { id: 8, status: "加拿大已购", number: "1100", model: "Lamborghini Countach LB-WORKS", variant: "Red", quantity: 1, note: "" },
  { id: 9, status: "加拿大已购", number: "1081", model: "Lamborghini Countach LB-WORKS", variant: "Black", quantity: 1, note: "" },
  { id: 10, status: "加拿大已购", number: "392", model: "Mazda Miata MX-5 NA", variant: "Sunburst Yellow", quantity: 1, note: "" },
  { id: 11, status: "加拿大已购", number: "1022", model: "Nissan S15 Silvia LB-Super Silhouette", variant: "GARASIDRIFT x LBWK 2025 / RHD / Blister Pack", quantity: 1, note: "" },
  { id: 12, status: "大连已收", number: "1087", model: "Lamborghini Aventador LB-WORKS", variant: "Limited Edition Matte Black", quantity: 1, note: "" },
  { id: 13, status: "大连已收", number: "1054", model: "Nissan S15 Silvia LB-Super Silhouette", variant: "ATHLETE White", quantity: 1, note: "" },
  { id: 14, status: "拼多多预购", number: "1129", model: "Lamborghini Huracán GT3 EVO2 #45", variant: "DEX Imaging / 2024 IMSA Daytona 24 Hrs", quantity: 1, note: "" },
  { id: 15, status: "拼多多预购", number: "1143", model: "Porsche 911 GT3 R #77", variant: "AO Racing Skeleton", quantity: 1, note: "" },
  { id: 16, status: "拼多多预购", number: "1250", model: "Toyota Supra BOMEX", variant: "Fast & Furious / Brian O'Conner", quantity: 1, note: "" },
  { id: 17, status: "拼多多预购", number: "1251", model: "Mazda RX-7 VeilSide Fortune", variant: "Fast & Furious Tokyo Drift / Han Seoul-Oh", quantity: 1, note: "" },
  { id: 18, status: "拼多多预购", number: "1249", model: "Mazda MX-5 NA Pandem", variant: "Mint Green", quantity: 1, note: "" },
  { id: 19, status: "拼多多预购", number: "1304", model: "Porsche 911 GT3 RS Weissach Package", variant: "Gulf Orange", quantity: 1, note: "", productUrl: "https://downskale.com/products/mini-gt-porsche-911-992-gt3-rs-weissach-package-gulf-orange" },
  { id: 20, status: "拼多多预购", number: "1248", model: "Nissan LB-Silhouette WORKS GT 35GT-RR", variant: "Ver.1 Matte Grey", quantity: 1, note: "" },
  { id: 21, status: "拼多多预购", number: "1239", model: "Nissan Silvia S15 LB-Super Silhouette", variant: "AMOCULTURE", quantity: 1, note: "" },
  { id: 22, status: "拼多多预购", number: "1238", model: "Nissan Skyline GT-R R32", variant: "LBWK Kaido Works AMOCULTURE", quantity: 1, note: "" },
  { id: 23, status: "拼多多预购", number: "1237", model: "Toyota GR Supra LB Works", variant: "AMOCULTURE", quantity: 1, note: "" },
  { id: 24, status: "拼多多预购", number: "1226", model: "Lamborghini Huracán GT", variant: "Street Customs", quantity: 1, note: "" },
  { id: 25, status: "拼多多预购", number: "1222", model: "Mazda Miata MX-5 ND Pandem", variant: "IMSA White", quantity: 1, note: "" },
  { id: 26, status: "拼多多预购", number: "1218", model: "Porsche 911 GT3 R 992 #77", variant: "AO Racing / 2025 IMSA Sebring 12 Hrs Class Winner", quantity: 1, note: "" }
].map(normalizeItem);

const storageKey = "minigt-inventory-v1";
const syncStorageKey = "minigt-sync-v1";
const syncDirtyKey = "minigt-sync-dirty-v1";
const localChangedAtKey = "minigt-local-changed-at-v1";
const localBackupKey = "minigt-inventory-backup-v1";
const syncTable = "minigt_collections";
let inventory = loadInventory();
let syncConfig = loadSyncConfig();
let syncTimer = null;
let syncBusy = false;
let lastLocalChangeAt = Number(localStorage.getItem(localChangedAtKey) || 0);
let hasUnsyncedLocalChanges = localStorage.getItem(syncDirtyKey) === "true";
let activeCategory = { type: "all", value: "all", label: "全部收藏" };
let activeWishlistCategory = { type: "all", value: "all", label: "全部" };
let activeWishlistPage = 1;
let wishlistPreviewTimer = null;
const wishlistPageSize = 50;
let heroSlideIndex = 0;
let heroSlideTimer = null;

const fields = {
  id: document.querySelector("#carId"),
  number: document.querySelector("#number"),
  quantity: document.querySelector("#quantity"),
  note: document.querySelector("#note")
};

const els = {
  form: document.querySelector("#carForm"),
  view: document.querySelector("#inventoryView"),
  empty: document.querySelector("#emptyState"),
  search: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  viewSelect: document.querySelector("#viewSelect"),
  sort: document.querySelector("#sortSelect"),
  statusSummary: document.querySelector("#statusSummary"),
  categoryList: document.querySelector("#categoryList"),
  activeCategoryLabel: document.querySelector("#activeCategoryLabel"),
  quickMatch: document.querySelector("#quickMatch"),
  totalQty: document.querySelector("#totalQty"),
  totalItems: document.querySelector("#totalItems"),
  ownedQty: document.querySelector("#ownedQty"),
  preorderQty: document.querySelector("#preorderQty"),
  saveBtn: document.querySelector("#saveBtn"),
  importFile: document.querySelector("#importFile"),
  preview: document.querySelector("#hoverPreview"),
  editModal: document.querySelector("#editModal"),
  editForm: document.querySelector("#editForm"),
  editId: document.querySelector("#editId"),
  editNumber: document.querySelector("#editNumber"),
  editTitle: document.querySelector("#editTitle"),
  editPreview: document.querySelector("#editPreview"),
  editImageUrl: document.querySelector("#editImageUrl"),
  editImagePicker: document.querySelector("#editImagePicker"),
  editPriceCheckBtn: document.querySelector("#editPriceCheckBtn"),
  editPackageManager: document.querySelector("#editPackageManager"),
  editQuantity: document.querySelector("#editQuantity"),
  editNote: document.querySelector("#editNote"),
  addModal: document.querySelector("#addModal"),
  wishlistModal: document.querySelector("#wishlistModal"),
  wishlistSearch: document.querySelector("#wishlistSearch"),
  wishlistFilter: document.querySelector("#wishlistFilter"),
  wishlistResults: document.querySelector("#wishlistResults")
};

injectSyncUi();

document.querySelector("#focusFormBtn").addEventListener("click", openAddModal);
document.querySelector("#wishlistBtn").addEventListener("click", openWishlistModal);
document.querySelector("#closeAddBtn").addEventListener("click", closeAddModal);
document.querySelector("#closeWishlistBtn").addEventListener("click", closeWishlistModal);
document.querySelector("#restoreSeedBtn").addEventListener("click", restoreSeed);
document.querySelector("#exportBtn").addEventListener("click", exportCsv);
els.form.addEventListener("submit", saveCar);
fields.number.addEventListener("input", renderQuickMatch);
els.search.addEventListener("input", render);
els.statusFilter.addEventListener("change", render);
els.viewSelect.addEventListener("change", render);
els.sort.addEventListener("change", render);
els.importFile.addEventListener("change", importCsv);
els.categoryList?.addEventListener("click", selectCategory);
els.wishlistSearch?.addEventListener("input", handleWishlistSearch);
els.wishlistFilter?.addEventListener("click", selectWishlistCategory);
els.wishlistResults?.addEventListener("click", handleWishlistAction);
els.wishlistResults?.addEventListener("mouseover", startWishlistPreview);
els.wishlistResults?.addEventListener("mouseout", stopWishlistPreview);
els.editForm.addEventListener("submit", saveEdit);
document.querySelector("#closeEditBtn").addEventListener("click", closeEditModal);
document.querySelector("#deleteEditBtn").addEventListener("click", deleteFromEdit);
els.editModal.addEventListener("click", (event) => {
  if (event.target === els.editModal) closeEditModal();
});
els.addModal.addEventListener("click", (event) => {
  if (event.target === els.addModal) closeAddModal();
});
els.wishlistModal?.addEventListener("click", (event) => {
  if (event.target === els.wishlistModal) closeWishlistModal();
});
document.addEventListener("mousemove", movePreview);
document.addEventListener("mouseover", showPreview);
document.addEventListener("mouseout", hidePreview);
document.querySelector("#backToTopBtn")?.addEventListener("click", scrollToTop);
window.addEventListener("scroll", toggleBackToTop, { passive: true });
saveLocalOnly();
saveLocalBackup();
renderQuickMatch();
render();
updateSyncStatus();
toggleBackToTop();
initHeroCarousel();
if (isSyncReady() && !hasUnsyncedLocalChanges) {
  pullFromCloud({ silent: true });
}
registerServiceWorker();

function loadInventory() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(seedInventory);

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.map(normalizeItem) : structuredClone(seedInventory);
  } catch {
    return structuredClone(seedInventory);
  }
}

function loadSyncConfig() {
  try {
    const parsed = JSON.parse(localStorage.getItem(syncStorageKey) || "{}");
    return {
      url: String(parsed.url || "").replace(/\/+$/, ""),
      key: String(parsed.key || ""),
      owner: String(parsed.owner || "")
    };
  } catch {
    return { url: "", key: "", owner: "" };
  }
}

function normalizeItem(item) {
  const number = String(item.number || "").replace(/\D/g, "");
  const catalogItem = getCatalogItem(number);
  const migrated = migrateStatusAndNote(item.status || "", item.note || "");
  const normalized = {
    id: Number(item.id) || Date.now(),
    status: migrated.status,
    number,
    model: item.model || "",
    variant: "",
    quantity: Math.max(1, Number(item.quantity || 1)),
    price: item.price || "",
    imageUrl: item.imageUrl || "",
    productUrl: item.productUrl || "",
    note: migrated.note,
    packageType: item.packageType || inferPackageType(migrated.note),
    inGarage: item.inGarage !== false
  };
  if (catalogItem) {
    normalized.model = catalogItem.title;
    if (catalogItem.imageUrl && !normalized.imageUrl) {
      normalized.imageUrl = catalogItem.imageUrl;
    }
    normalized.productUrl = normalized.productUrl || catalogItem.productUrl || "";
  }
  if (knownProductUrls[normalized.number] && (!normalized.productUrl || !normalized.productUrl.includes("minigt.tsm-models.com"))) {
    normalized.productUrl = knownProductUrls[normalized.number];
  }
  if (knownImageUrls[normalized.number] && !normalized.imageUrl) {
    normalized.imageUrl = knownImageUrls[normalized.number];
  }
  if (knownOfficialDetails[normalized.number]) {
    normalized.model = `${knownOfficialDetails[normalized.number].model} ${knownOfficialDetails[normalized.number].variant}`.trim();
  }
  if (!normalized.model) {
    normalized.model = `MINI GT #${normalized.number || "未编号"}`;
  }
  return normalized;
}

function migrateStatusAndNote(status, note) {
  const parts = String(note || "")
    .split("；")
    .map((part) => part.trim())
    .filter(Boolean);

  if (status === "拼多多预购" || status === "预购") {
    return { status: "预购", note: parts.join("；") };
  }

  if (status === "加拿大已购") {
    if (!parts.includes("加拿大")) parts.unshift("加拿大");
    return { status: "入库", note: parts.join("；") };
  }

  if (status === "大连已收") {
    if (!parts.includes("大连")) parts.unshift("大连");
    return { status: "入库", note: parts.join("；") };
  }

  if (status === "现货" || status === "现货入库" || status === "入库") {
    return { status: "入库", note: parts.join("；") };
  }

  return { status: status || "入库", note: parts.join("；") };
}

function getCatalogItem(number) {
  if (!number || !window.MINIGT_CATALOG) return null;
  return window.MINIGT_CATALOG[number] || null;
}

function inferPackageType(note) {
  return String(note || "").includes("挂卡") ? "挂卡" : "盒装";
}

function persist() {
  lastLocalChangeAt = Date.now();
  markLocalDirty();
  saveLocalOnly();
  saveLocalBackup();
  updateSyncStatus();
}

function saveLocalOnly() {
  localStorage.setItem(storageKey, JSON.stringify(inventory));
}

function saveLocalBackup(items = inventory) {
  localStorage.setItem(localBackupKey, JSON.stringify(items));
}

function markLocalDirty() {
  hasUnsyncedLocalChanges = true;
  localStorage.setItem(syncDirtyKey, "true");
  localStorage.setItem(localChangedAtKey, String(lastLocalChangeAt));
}

function clearLocalDirty() {
  hasUnsyncedLocalChanges = false;
  localStorage.removeItem(syncDirtyKey);
}

function injectSyncUi() {
  const actions = document.querySelector(".hero-actions");
  if (actions && !document.querySelector("#quickPushBtn")) {
    const quickPush = document.createElement("button");
    quickPush.className = "secondary";
    quickPush.id = "quickPushBtn";
    quickPush.type = "button";
    quickPush.textContent = "上传到云端";
    const exportButton = document.querySelector("#exportBtn");
    actions.insertBefore(quickPush, exportButton || null);
  }

  if (actions && !document.querySelector("#syncBtn")) {
    const button = document.createElement("button");
    button.className = "settings-fab";
    button.id = "syncBtn";
    button.type = "button";
    button.title = "设置";
    button.setAttribute("aria-label", "设置");
    button.textContent = "⚙";
    const exportButton = document.querySelector("#exportBtn");
    document.querySelector(".hero")?.append(button);
    if (exportButton) exportButton.style.display = "none";
  }

  const heroContent = document.querySelector(".hero-content");
  if (heroContent && !document.querySelector("#syncStatus")) {
    const status = document.createElement("p");
    status.className = "sync-status";
    status.id = "syncStatus";
    status.textContent = "本机数据";
    heroContent.append(status);
  }

  if (!document.querySelector("#syncModal")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="edit-modal" id="syncModal" aria-hidden="true">
        <div class="edit-dialog sync-dialog" role="dialog" aria-modal="true" aria-labelledby="syncTitle">
          <div class="edit-head">
            <div>
              <p>SETTINGS</p>
              <h2 id="syncTitle">设置</h2>
            </div>
            <button class="icon-btn" id="closeSyncBtn" type="button" title="关闭">×</button>
          </div>
          <div class="sync-copy sync-connected" id="syncConnected">
            <strong>云同步已连接</strong>
            <p>新增、编辑或删除后，请点击“上传到云端”。上传完成后系统会核对云端内容，刷新时只会读取已经验证的数据。</p>
            <button class="secondary mini" id="editSyncSettingsBtn" type="button">修改连接</button>
          </div>
          <form id="syncForm" class="sync-form">
            <div class="sync-copy">
              <p>把 Supabase 项目的 URL 和 anon key 填到这里。手机和电脑打开同一个网站，并填写同一个同步密码，就会使用同一份收藏数据。</p>
            </div>
            <label>
              Supabase Project URL
              <input id="syncUrl" type="url" placeholder="https://xxxx.supabase.co" />
            </label>
            <label>
              Supabase anon public key
              <textarea id="syncKey" rows="3" placeholder="eyJhbGciOi..."></textarea>
            </label>
            <label>
              同步密码
              <input id="syncOwner" type="password" placeholder="自己设置一个密码，手机电脑填一样" />
            </label>
            <button class="primary wide" type="submit">保存并上传当前数据</button>
          </form>
          <div class="sync-actions">
            <button class="secondary" id="settingsExportBtn" type="button">导出 CSV</button>
            <button class="secondary" id="restoreLocalBackupBtn" type="button">恢复本地备份</button>
            <button class="secondary" id="pullSyncBtn" type="button">从云端下载</button>
            <button class="secondary" id="pushSyncBtn" type="button">上传到云端</button>
            <button class="danger" id="clearSyncBtn" type="button">关闭同步</button>
          </div>
          <p class="sync-help">第一次使用前，把项目里的 supabase-setup.sql 复制到 Supabase SQL Editor 运行一次。</p>
        </div>
      </div>
    `);
  }

  document.querySelector("#quickPushBtn")?.addEventListener("click", () => pushToCloud({ silent: false }));
  document.querySelector("#syncBtn")?.addEventListener("click", openSyncModal);
  document.querySelector("#closeSyncBtn")?.addEventListener("click", closeSyncModal);
  document.querySelector("#syncModal")?.addEventListener("click", (event) => {
    if (event.target === document.querySelector("#syncModal")) closeSyncModal();
  });
  document.querySelector("#syncForm")?.addEventListener("submit", saveSyncSettings);
  document.querySelector("#editSyncSettingsBtn")?.addEventListener("click", () => {
    document.querySelector("#syncModal")?.classList.remove("configured");
    document.querySelector("#syncUrl")?.focus();
  });
  document.querySelector("#settingsExportBtn")?.addEventListener("click", exportCsv);
  document.querySelector("#restoreLocalBackupBtn")?.addEventListener("click", restoreLocalBackup);
  document.querySelector("#pullSyncBtn")?.addEventListener("click", () => {
    if (saveSyncConfigFromForm()) pullFromCloud({ silent: false });
  });
  document.querySelector("#pushSyncBtn")?.addEventListener("click", () => {
    if (saveSyncConfigFromForm()) pushToCloud({ silent: false });
  });
  document.querySelector("#clearSyncBtn")?.addEventListener("click", clearSyncSettings);
}

function openSyncModal() {
  document.querySelector("#syncUrl").value = syncConfig.url || "";
  document.querySelector("#syncKey").value = syncConfig.key || "";
  document.querySelector("#syncOwner").value = syncConfig.owner || "";
  const modal = document.querySelector("#syncModal");
  updateSyncModalState();
  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
}

function closeSyncModal() {
  const modal = document.querySelector("#syncModal");
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
}

async function saveSyncSettings(event) {
  event.preventDefault();
  if (!saveSyncConfigFromForm()) return;
  await pushToCloud({ silent: false });
}

function saveSyncConfigFromForm() {
  syncConfig = {
    url: document.querySelector("#syncUrl").value.trim().replace(/\/+$/, ""),
    key: document.querySelector("#syncKey").value.trim(),
    owner: document.querySelector("#syncOwner").value.trim()
  };

  if (!isSyncReady()) {
    setSyncMessage("请先填完整同步信息");
    return false;
  }

  localStorage.setItem(syncStorageKey, JSON.stringify(syncConfig));
  updateSyncStatus();
  updateSyncModalState();
  return true;
}

function clearSyncSettings() {
  localStorage.removeItem(syncStorageKey);
  localStorage.removeItem(syncDirtyKey);
  syncConfig = { url: "", key: "", owner: "" };
  hasUnsyncedLocalChanges = false;
  updateSyncStatus();
  updateSyncModalState();
  closeSyncModal();
}

function restoreLocalBackup() {
  const saved = localStorage.getItem(localBackupKey);
  if (!saved) {
    alert("当前没有可恢复的本地备份。");
    return;
  }
  if (!confirm("确定恢复最近一次本地备份吗？恢复后请点击“上传到云端”保存。")) return;
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("备份格式错误");
    inventory = parsed.map(normalizeItem);
    lastLocalChangeAt = Date.now();
    markLocalDirty();
    saveLocalOnly();
    render();
    updateSyncStatus();
    closeSyncModal();
  } catch (error) {
    alert(`恢复失败：${error.message}`);
  }
}

function updateSyncModalState() {
  const modal = document.querySelector("#syncModal");
  if (!modal) return;
  modal.classList.toggle("configured", isSyncReady());
}

function isSyncReady() {
  return Boolean(syncConfig.url && syncConfig.key && syncConfig.owner);
}

function syncHeaders(extra = {}) {
  return {
    apikey: syncConfig.key,
    Authorization: `Bearer ${syncConfig.key}`,
    "x-owner-key": ownerKey(),
    "Content-Type": "application/json",
    ...extra
  };
}

function syncEndpoint(query = "") {
  return `${syncConfig.url}/rest/v1/${syncTable}${query}`;
}

function ownerKey() {
  const bytes = new TextEncoder().encode(syncConfig.owner);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function scheduleCloudPush() {
  updateSyncStatus();
}

function refreshFromCloud() {
  return;
}

function inventoryHash(items) {
  return JSON.stringify((items || []).map((item) => ({
    id: Number(item.id) || 0,
    status: item.status || "",
    number: String(item.number || ""),
    model: item.model || "",
    quantity: Number(item.quantity || 0),
    packageType: item.packageType || "盒装",
    note: item.note || "",
    imageUrl: item.imageUrl || "",
    productUrl: item.productUrl || ""
  })).sort((a, b) => {
    if (a.number !== b.number) return a.number.localeCompare(b.number);
    if (a.packageType !== b.packageType) return a.packageType.localeCompare(b.packageType);
    return a.id - b.id;
  }));
}

async function fetchCloudRow() {
  const response = await fetch(syncEndpoint(`?owner_key=eq.${encodeURIComponent(ownerKey())}&select=data,updated_at`), {
    headers: syncHeaders(),
    cache: "no-store"
  });
  if (!response.ok) throw new Error(await response.text());
  const rows = await response.json();
  return rows[0] || null;
}

async function pushToCloud({ silent } = { silent: true }) {
  if (!isSyncReady()) {
    openSyncModal();
    setSyncMessage("请先完成云同步设置");
    return;
  }
  if (syncBusy) {
    return;
  }
  const pushButtons = [document.querySelector("#pushSyncBtn"), document.querySelector("#quickPushBtn")].filter(Boolean);
  const originalTexts = pushButtons.map((button) => button.textContent);
  pushButtons.forEach((button) => {
    button.disabled = true;
    button.textContent = "正在上传...";
  });
  syncBusy = true;
  setSyncMessage("正在上传云端...");
  const uploadSnapshot = structuredClone(inventory);
  const uploadHash = inventoryHash(uploadSnapshot);
  try {
    const response = await fetch(syncEndpoint("?on_conflict=owner_key&select=data,updated_at"), {
      method: "POST",
      headers: syncHeaders({ Prefer: "resolution=merge-duplicates,return=representation" }),
      body: JSON.stringify({
        owner_key: ownerKey(),
        data: uploadSnapshot
      })
    });
    if (!response.ok) throw new Error(await response.text());
    const returnedRows = await response.json().catch(() => []);
    const verifiedRow = returnedRows[0] || await fetchCloudRow();
    if (!verifiedRow || inventoryHash(verifiedRow.data) !== uploadHash) {
      throw new Error("云端返回的数据与本地不一致，请重新上传");
    }
    if (inventoryHash(inventory) === uploadHash) {
      clearLocalDirty();
      lastLocalChangeAt = Date.parse(verifiedRow.updated_at) || Date.now();
      localStorage.setItem(localChangedAtKey, String(lastLocalChangeAt));
      saveLocalBackup(uploadSnapshot);
    } else {
      markLocalDirty();
    }
    setSyncMessage(`已验证上传 ${uploadSnapshot.length} 条 · ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`);
    if (!silent) closeSyncModal();
  } catch (error) {
    markLocalDirty();
    saveLocalBackup();
    setSyncMessage("上传未验证，本地改动已保留");
    if (!silent) alert(`同步失败：${error.message}`);
  } finally {
    syncBusy = false;
    pushButtons.forEach((button, index) => {
      button.disabled = false;
      button.textContent = originalTexts[index];
    });
  }
}

async function pullFromCloud({ silent } = { silent: true }) {
  if (!isSyncReady() || syncBusy) return;
  if (hasUnsyncedLocalChanges) {
    if (silent) return;
    const confirmed = confirm("当前本地有未上传改动。从云端下载会用云端数据覆盖本地，确定继续吗？");
    if (!confirmed) return;
  }
  const pullButton = document.querySelector("#pullSyncBtn");
  const originalText = pullButton?.textContent;
  if (pullButton) {
    pullButton.disabled = true;
    pullButton.textContent = "正在下载...";
  }
  syncBusy = true;
  if (!silent) setSyncMessage("正在读取云端...");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(syncEndpoint(`?owner_key=eq.${encodeURIComponent(ownerKey())}&select=data,updated_at`), {
      headers: syncHeaders(),
      signal: controller.signal,
      cache: "no-store"
    });
    if (!response.ok) throw new Error(await response.text());
    const rows = await response.json();
    if (!rows.length) {
      syncBusy = false;
      await pushToCloud({ silent: true });
      return;
    }
    const cloudData = Array.isArray(rows[0].data) ? rows[0].data : [];
    const cloudUpdatedAt = Date.parse(rows[0].updated_at) || 0;
    if (inventoryHash(cloudData) === inventoryHash(inventory)) {
      clearLocalDirty();
      if (!silent) setSyncMessage("云端暂无新变化");
      return;
    }
    if (silent && lastLocalChangeAt > cloudUpdatedAt + 1000) {
      markLocalDirty();
      saveLocalBackup();
      setSyncMessage("检测到本地数据更新，已阻止旧云端覆盖");
      return;
    }
    saveLocalBackup();
    inventory = cloudData.map(normalizeItem);
    saveLocalOnly();
    clearLocalDirty();
    lastLocalChangeAt = cloudUpdatedAt;
    localStorage.setItem(localChangedAtKey, String(lastLocalChangeAt));
    render();
    setSyncMessage(`已下载 ${inventory.length} 条 · ${new Date(rows[0].updated_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`);
    if (!silent) closeSyncModal();
  } catch (error) {
    if (!silent) setSyncMessage(error.name === "AbortError" ? "云端读取超时，稍后会重试" : "读取失败，请检查 Supabase 设置");
    if (!silent) alert(`读取失败：${error.message}`);
  } finally {
    window.clearTimeout(timeout);
    syncBusy = false;
    if (pullButton) {
      pullButton.disabled = false;
      pullButton.textContent = originalText;
    }
  }
}

function updateSyncStatus() {
  if (!isSyncReady()) {
    setSyncMessage("本机数据");
    return;
  }
  setSyncMessage(hasUnsyncedLocalChanges ? "本地有改动，记得上传" : "云同步已连接");
}

function setSyncMessage(message) {
  const status = document.querySelector("#syncStatus");
  if (status) status.textContent = message;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

function toggleBackToTop() {
  document.querySelector("#backToTopBtn")?.classList.toggle("visible", window.scrollY > 520);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initHeroCarousel() {
  const carousel = document.querySelector("#heroCarousel");
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = document.querySelector("#heroDots");
  if (!carousel || slides.length < 2 || !dots) return;

  dots.innerHTML = slides.map((slide, index) => `
    <button class="hero-dot ${index === 0 ? "active" : ""}" type="button" data-hero-slide="${index}" title="${escapeHtml(slide.dataset.label || `第 ${index + 1} 张`)}" aria-label="${escapeHtml(slide.dataset.label || `第 ${index + 1} 张`)}"></button>
  `).join("");

  document.querySelector("#heroPrevBtn")?.addEventListener("click", () => showHeroSlide(heroSlideIndex - 1, true));
  document.querySelector("#heroNextBtn")?.addEventListener("click", () => showHeroSlide(heroSlideIndex + 1, true));
  dots.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-hero-slide]");
    if (button) showHeroSlide(Number(button.dataset.heroSlide), true);
  });
  carousel.closest(".hero")?.addEventListener("mouseenter", stopHeroCarousel);
  carousel.closest(".hero")?.addEventListener("mouseleave", startHeroCarousel);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopHeroCarousel();
    else startHeroCarousel();
  });
  showHeroSlide(0, false);
  startHeroCarousel();
}

function showHeroSlide(nextIndex, restart) {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (!slides.length) return;
  heroSlideIndex = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, index) => slide.classList.toggle("active", index === heroSlideIndex));
  document.querySelectorAll(".hero-dot").forEach((dot, index) => dot.classList.toggle("active", index === heroSlideIndex));
  const label = document.querySelector("#heroSlideLabel");
  if (label) label.textContent = slides[heroSlideIndex].dataset.label || "MOTORSPORT";
  if (restart) {
    stopHeroCarousel();
    startHeroCarousel();
  }
}

function startHeroCarousel() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || heroSlideTimer) return;
  heroSlideTimer = window.setInterval(() => showHeroSlide(heroSlideIndex + 1, false), 6500);
}

function stopHeroCarousel() {
  window.clearInterval(heroSlideTimer);
  heroSlideTimer = null;
}

function saveCar(event) {
  event.preventDefault();

  const record = normalizeItem({
    id: fields.id.value ? Number(fields.id.value) : Date.now(),
    status: getQuickStatus(),
    number: fields.number.value.trim(),
    quantity: fields.quantity.value,
    note: fields.note.value.trim(),
    packageType: getPackageType(),
    inGarage: true
  });

  const index = inventory.findIndex((item) => item.id === record.id);
  if (index >= 0) inventory[index] = record;
  else inventory.unshift(record);

  persist();
  resetForm();
  render();
  closeAddModal();
}

function resetForm() {
  els.form.reset();
  fields.id.value = "";
  fields.quantity.value = 1;
  setQuickStatus("入库");
  setPackageType("盒装");
  els.saveBtn.textContent = "保存记录";
  renderQuickMatch();
}

function openAddModal() {
  resetForm();
  els.addModal.classList.add("visible");
  els.addModal.setAttribute("aria-hidden", "false");
  fields.number.focus();
}

function closeAddModal() {
  els.addModal.classList.remove("visible");
  els.addModal.setAttribute("aria-hidden", "true");
}

function openWishlistModal() {
  els.wishlistModal.classList.add("visible");
  els.wishlistModal.setAttribute("aria-hidden", "false");
  els.wishlistSearch.value = "";
  activeWishlistCategory = { type: "all", value: "all", label: "全部" };
  activeWishlistPage = 1;
  renderWishlistCatalog();
  els.wishlistSearch.focus();
}

function closeWishlistModal() {
  els.wishlistModal.classList.remove("visible");
  els.wishlistModal.setAttribute("aria-hidden", "true");
}

function renderWishlistCatalog() {
  const query = els.wishlistSearch.value.trim().toLowerCase();
  const catalog = catalogList();
  renderWishlistFilters(catalog);
  const items = catalog
    .filter((item) => wishlistCategoryMatches(item, activeWishlistCategory))
    .filter((item) => {
      const categoryText = [
        ...makerCategoryDefinitions(),
        ...tunerCategoryDefinitions(),
        ...themeCategoryDefinitions()
      ]
        .filter((definition) => categoryMatches(catalogToInventoryLike(item), definition))
        .map((definition) => definition.label)
        .join(" ");
      const haystack = [item.number, item.title, categoryText].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    });
  const totalPages = Math.max(1, Math.ceil(items.length / wishlistPageSize));
  activeWishlistPage = Math.min(Math.max(activeWishlistPage, 1), totalPages);
  const start = (activeWishlistPage - 1) * wishlistPageSize;
  const visibleItems = items.slice(start, start + wishlistPageSize);

  els.wishlistResults.innerHTML = `
    ${renderWishlistPager(items.length, totalPages)}
    <div class="wishlist-grid">
      ${visibleItems.length ? visibleItems.map(wishlistCatalogCard).join("") : `
        <p class="wishlist-empty">没有匹配的 MINI GT 车型。</p>
      `}
    </div>
    ${totalPages > 1 ? renderWishlistPager(items.length, totalPages) : ""}
  `;
}

function wishlistCatalogCard(item) {
  const existing = inventory.find((entry) => entry.number === item.number);
  const statusText = existing ? (isWishlistItem(existing) ? "已在愿望清单" : "已在收藏") : "加入愿望清单";
  const imageUrls = wishlistImageCandidates(item);
  const productUrl = item.productUrl || knownProductUrls[item.number] || "";
  const image = `<img src="${escapeHtml(imageUrls[0] || generatedCarImage(item))}" alt="${escapeHtml(item.title)}" loading="lazy" data-preview-images="${escapeHtml(imageUrls.join("|"))}" />`;
  return `
    <article class="wishlist-card">
      ${productUrl ? `<a class="wishlist-image-link" href="${escapeHtml(productUrl)}" target="_blank" rel="noreferrer" title="打开产品页">${image}</a>` : image}
      <div>
        <strong>#${escapeHtml(item.number)}</strong>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
      <div class="wishlist-card-actions">
        <a class="secondary price-check-link" href="${escapeHtml(goofishSearchUrl(item))}" target="_blank" rel="noreferrer" title="闲鱼查价" aria-label="闲鱼查价">查</a>
        <button class="${existing ? "secondary" : "primary"}" type="button" data-wishlist-number="${escapeHtml(item.number)}" ${existing ? "disabled" : ""}>${statusText}</button>
      </div>
    </article>
  `;
}

function handleWishlistAction(event) {
  const pageButton = event.target.closest("button[data-wishlist-page]");
  if (pageButton) {
    activeWishlistPage = Number(pageButton.dataset.wishlistPage) || 1;
    renderWishlistCatalog();
    els.wishlistResults.scrollTo?.({ top: 0, behavior: "smooth" });
    return;
  }
  const button = event.target.closest("button[data-wishlist-number]");
  if (!button) return;
  addToWishlist(button.dataset.wishlistNumber);
}

function handleWishlistSearch() {
  activeWishlistPage = 1;
  renderWishlistCatalog();
}

function renderWishlistPager(totalItems, totalPages) {
  if (!totalItems) return "";
  const pages = compactPages(activeWishlistPage, totalPages);
  return `
    <div class="wishlist-pager" aria-label="愿望清单分页">
      <span>${totalItems} 台 · 第 ${activeWishlistPage}/${totalPages} 页</span>
      <div>
        <button type="button" data-wishlist-page="${Math.max(1, activeWishlistPage - 1)}" ${activeWishlistPage <= 1 ? "disabled" : ""}>上一页</button>
        ${pages.map((page) => page === "gap"
          ? `<em>...</em>`
          : `<button class="${page === activeWishlistPage ? "active" : ""}" type="button" data-wishlist-page="${page}">${page}</button>`
        ).join("")}
        <button type="button" data-wishlist-page="${Math.min(totalPages, activeWishlistPage + 1)}" ${activeWishlistPage >= totalPages ? "disabled" : ""}>下一页</button>
      </div>
    </div>
  `;
}

function compactPages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);
  const pages = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("gap");
  for (let page = start; page <= end; page += 1) pages.push(page);
  if (end < total - 1) pages.push("gap");
  pages.push(total);
  return pages;
}

function renderWishlistFilters(items) {
  const sections = [
    { title: "车厂品牌", type: "maker", items: categoryCounts(items.map(catalogToInventoryLike), makerCategoryDefinitions()).slice(0, 8) },
    { title: "改装厂与系列", type: "tuner", items: categoryCounts(items.map(catalogToInventoryLike), tunerCategoryDefinitions()).slice(0, 8) },
    { title: "赛事与主题", type: "theme", items: categoryCounts(items.map(catalogToInventoryLike), themeCategoryDefinitions()).slice(0, 8) }
  ].filter((section) => section.items.length);
  const activeKey = `${activeWishlistCategory.type}:${activeWishlistCategory.value}`;
  els.wishlistFilter.innerHTML = `
    <button class="wishlist-filter-item ${activeKey === "all:all" ? "active" : ""}" type="button" data-type="all" data-value="all" data-label="全部">全部</button>
    ${sections.map((section) => `
      <section>
        <h3>${escapeHtml(section.title)}</h3>
        ${section.items.map((item) => `
          <button class="wishlist-filter-item ${activeKey === `${section.type}:${item.value}` ? "active" : ""}" type="button" data-type="${escapeHtml(section.type)}" data-value="${escapeHtml(item.value)}" data-label="${escapeHtml(item.label)}">
            <span>${escapeHtml(item.label)}</span><strong>${item.count}</strong>
          </button>
        `).join("")}
      </section>
    `).join("")}
  `;
}

function selectWishlistCategory(event) {
  const button = event.target.closest("button[data-type]");
  if (!button) return;
  activeWishlistCategory = {
    type: button.dataset.type,
    value: button.dataset.value,
    label: button.dataset.label
  };
  activeWishlistPage = 1;
  renderWishlistCatalog();
}

function wishlistCategoryMatches(item, category) {
  if (!category || category.type === "all") return true;
  return categoryMatches(catalogToInventoryLike(item), category);
}

function catalogToInventoryLike(item) {
  return {
    id: item.number,
    status: "",
    number: item.number,
    model: item.title,
    quantity: 1,
    packageType: "盒装",
    note: "",
    productUrl: item.productUrl || ""
  };
}

function wishlistImageCandidates(item) {
  const urls = [
    item.imageUrl,
    knownImageUrls[item.number],
    ...(window.MINIGT_IMAGE_CANDIDATES?.[item.number] || [])
  ].filter(Boolean);
  return [...new Set(urls)];
}

function startWishlistPreview(event) {
  const img = event.target.closest(".wishlist-card img[data-preview-images]");
  if (!img) return;
  const images = img.dataset.previewImages.split("|").filter(Boolean);
  if (images.length < 2) return;
  let index = 0;
  window.clearInterval(wishlistPreviewTimer);
  wishlistPreviewTimer = window.setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
  }, 950);
}

function stopWishlistPreview(event) {
  const img = event.target.closest(".wishlist-card img[data-preview-images]");
  if (!img) return;
  window.clearInterval(wishlistPreviewTimer);
  const first = img.dataset.previewImages.split("|").filter(Boolean)[0];
  if (first) img.src = first;
}

function addToWishlist(number) {
  if (!number || inventory.some((item) => item.number === number)) return;
  const catalogItem = getCatalogItem(number);
  const known = knownOfficialDetails[number];
  const title = catalogItem?.title || (known ? `${known.model} ${known.variant}`.trim() : `MINI GT #${number}`);
  inventory.unshift(normalizeItem({
    id: Date.now(),
    status: "愿望清单",
    number,
    model: title,
    quantity: 1,
    packageType: "盒装",
    note: "",
    imageUrl: catalogItem?.imageUrl || knownImageUrls[number] || "",
    productUrl: catalogItem?.productUrl || knownProductUrls[number] || ""
  }));
  persist();
  render();
  renderWishlistCatalog();
}

function catalogList() {
  const fromCatalog = Object.entries(window.MINIGT_CATALOG || {}).map(([number, item]) => ({
    number,
    title: item.title || `MINI GT #${number}`,
    imageUrl: item.imageUrl || knownImageUrls[number] || "",
    productUrl: item.productUrl || knownProductUrls[number] || ""
  }));
  const fromKnown = Object.entries(knownOfficialDetails).map(([number, item]) => ({
    number,
    title: `${item.model} ${item.variant}`.trim(),
    imageUrl: knownImageUrls[number] || "",
    productUrl: knownProductUrls[number] || ""
  }));
  return [...new Map([...fromCatalog, ...fromKnown].map((item) => [item.number, item])).values()]
    .sort((a, b) => numberValue(b.number) - numberValue(a.number));
}

function editCar(id) {
  const item = inventory.find((entry) => entry.id === id);
  if (!item) return;
  const records = inventory.filter((entry) => entry.number === item.number);
  const status = records.every((entry) => isWishlistItem(entry)) ? "愿望清单" : records.some((entry) => entry.status.includes("预购")) ? "预购" : "入库";
  const totalQuantity = records.reduce((sum, entry) => sum + Number(entry.quantity || 0), 0);

  els.editId.value = item.id;
  els.editNumber.textContent = `#${item.number}`;
  els.editTitle.textContent = item.model;
  els.editQuantity.value = item.quantity || 1;
  els.editNote.value = item.note || "";
  setEditStatus(status);
  setEditPackageType(item.packageType || "盒装");
  els.editPreview.innerHTML = `
    <img src="${escapeHtml(carImage(item))}" alt="${escapeHtml(item.model)}" />
    <div>
      <strong>${escapeHtml(status)}</strong>
      <span>${escapeHtml(packageSummaryText(records))} · 数量 ${totalQuantity}</span>
    </div>
  `;
  els.editImageUrl.value = carImage(item);
  els.editPriceCheckBtn.href = goofishSearchUrl(item);
  renderImagePicker(item);
  renderPackageManager(records);
  setLegacyEditFieldsVisible(false);
  els.editModal.classList.add("visible");
  els.editModal.setAttribute("aria-hidden", "false");
}

function deleteCar(id) {
  inventory = inventory.filter((entry) => entry.id !== id);
  persist();
  render();
}

function manageGroup(id) {
  editCar(id);
}

function deleteGroup(id) {
  const item = inventory.find((entry) => entry.id === id);
  if (!item) return;
  inventory = inventory.filter((entry) => entry.number !== item.number);
  persist();
  render();
}

function saveEdit(event) {
  event.preventDefault();
  const id = Number(els.editId.value);
  const item = inventory.find((entry) => entry.id === id);
  if (!item) return;

  const originalNumber = item.number;
  const selectedStatus = getEditStatus();
  const selectedImage = els.editImageUrl.value.trim();
  const packageRows = readPackageManagerRows();
  const baseItem = normalizeItem({
    ...item,
    status: selectedStatus,
    imageUrl: selectedImage || item.imageUrl
  });
  const rebuilt = packageRows.map((row, index) => normalizeItem({
    ...baseItem,
    id: row.id || Date.now() + index,
    status: selectedStatus,
    packageType: row.packageType,
    quantity: row.quantity,
    note: row.note,
    imageUrl: selectedImage || item.imageUrl
  }));

  if (!rebuilt.length) {
    alert("至少保留一种包装，或者使用删除按钮移除整台车型。");
    return;
  }

  inventory = [
    ...rebuilt,
    ...inventory.filter((entry) => entry.number !== originalNumber)
  ];
  persist();
  closeEditModal();
  render();
}

function deleteFromEdit() {
  const id = Number(els.editId.value);
  deleteGroup(id);
  closeEditModal();
}

function closeEditModal() {
  els.editModal.classList.remove("visible");
  els.editModal.setAttribute("aria-hidden", "true");
}

function renderImagePicker(item) {
  const urls = imageCandidates(item);
  if (!urls.length) {
    els.editImagePicker.innerHTML = "";
    return;
  }

  els.editImagePicker.innerHTML = `
    <p>展示图片 <span class="image-choice-count">· ${urls.length} 张可选</span></p>
    <div class="image-choice-grid">
      ${urls.map((url) => `
        <button class="${url === carImage(item) ? "selected" : ""}" type="button" data-image-url="${escapeHtml(url)}">
          <img src="${escapeHtml(url)}" alt="${escapeHtml(item.model)}" />
        </button>
      `).join("")}
    </div>
  `;

  els.editImagePicker.querySelectorAll("button[data-image-url]").forEach((button) => {
    button.addEventListener("click", () => {
      els.editImageUrl.value = button.dataset.imageUrl;
      els.editPreview.querySelector("img").src = button.dataset.imageUrl;
      els.editImagePicker.querySelectorAll("button").forEach((itemButton) => itemButton.classList.remove("selected"));
      button.classList.add("selected");
      lockImageForNumber(item.number, button.dataset.imageUrl);
    });
  });
}

function lockImageForNumber(number, imageUrl) {
  if (!number || !imageUrl) return;
  inventory.forEach((entry) => {
    if (entry.number === number) entry.imageUrl = imageUrl;
  });
  persist();
}

function renderPackageManager(records) {
  const normalized = ["盒装", "挂卡"].map((packageType) => {
    const matches = records.filter((entry) => (entry.packageType || "盒装") === packageType);
    if (!matches.length) return null;
    return {
      id: matches[0].id,
      packageType,
      quantity: matches.reduce((sum, entry) => sum + Number(entry.quantity || 0), 0),
      note: [...new Set(matches.map((entry) => entry.note).filter(Boolean))].join("；")
    };
  }).filter(Boolean);

  els.editPackageManager.innerHTML = `
    <div class="package-manager-head">
      <strong>包装明细</strong>
      <div>
        ${packageAddButton("盒装", normalized)}
        ${packageAddButton("挂卡", normalized)}
      </div>
    </div>
    <div class="package-rows">
      ${normalized.map(packageRowMarkup).join("")}
    </div>
  `;

  els.editPackageManager.querySelectorAll("button[data-add-package]").forEach((button) => {
    button.addEventListener("click", () => addPackageRow(button.dataset.addPackage));
  });
  els.editPackageManager.querySelectorAll("button[data-remove-package]").forEach((button) => {
    button.addEventListener("click", () => button.closest(".package-row").remove());
  });
}

function packageAddButton(packageType, rows) {
  return `<button class="secondary mini" type="button" data-add-package="${packageType}">+ ${packageType}</button>`;
}

function packageRowMarkup(row) {
  return `
    <section class="package-row" data-package-type="${escapeHtml(row.packageType)}" data-record-id="${Number(row.id || 0)}">
      <div class="package-row-title">
        <strong>${escapeHtml(row.packageType)}</strong>
        <button class="danger mini" type="button" data-remove-package="${escapeHtml(row.packageType)}">删除${escapeHtml(row.packageType)}</button>
      </div>
      <label>
        数量
        <input class="package-quantity" type="number" min="1" step="1" value="${Number(row.quantity || 1)}" required />
      </label>
      <label>
        备注
        <textarea class="package-note" rows="2" placeholder="例如：加拿大、缺盒、已开封">${escapeHtml(row.note || "")}</textarea>
      </label>
    </section>
  `;
}

function addPackageRow(packageType) {
  const rows = els.editPackageManager.querySelector(".package-rows");
  if (!rows || rows.querySelector(`[data-package-type="${packageType}"]`)) return;
  rows.insertAdjacentHTML("beforeend", packageRowMarkup({ packageType, quantity: 1, note: "" }));
  rows.querySelector(`[data-package-type="${packageType}"] input`)?.focus();
}

function readPackageManagerRows() {
  return [...els.editPackageManager.querySelectorAll(".package-row")].map((row) => ({
    id: Number(row.dataset.recordId) || 0,
    packageType: row.dataset.packageType || "盒装",
    quantity: Math.max(1, Number(row.querySelector(".package-quantity").value || 1)),
    note: row.querySelector(".package-note").value.trim()
  }));
}

function packageSummaryText(records) {
  const summary = new Map();
  records.forEach((entry) => {
    const packageType = entry.packageType || "盒装";
    summary.set(packageType, (summary.get(packageType) || 0) + Number(entry.quantity || 0));
  });
  return [...summary.entries()].map(([type, count]) => `${type} ${count}`).join(" / ");
}

function setLegacyEditFieldsVisible(visible) {
  const display = visible ? "" : "none";
  document.querySelector("input[name='editPackageType']")?.closest("fieldset")?.style.setProperty("display", display);
  els.editQuantity?.closest("label")?.style.setProperty("display", display);
  els.editNote?.closest("label")?.style.setProperty("display", display);
}

function imageCandidates(item) {
  const fromReport = window.MINIGT_IMAGE_CANDIDATES?.[item.number] || [];
  const urls = [carImage(item), knownImageUrls[item.number], getCatalogItem(item.number)?.imageUrl, ...fromReport].filter(Boolean);
  return [...new Set(urls)];
}

function getQuickStatus() {
  return document.querySelector("input[name='quickStatus']:checked")?.value || "入库";
}

function setQuickStatus(status) {
  const value = status.includes("预购") ? "预购" : "入库";
  const input = document.querySelector(`input[name='quickStatus'][value='${value}']`);
  if (input) input.checked = true;
}

function getEditStatus() {
  return document.querySelector("input[name='editStatus']:checked")?.value || "入库";
}

function setEditStatus(status) {
  const value = status.includes("愿望") ? "愿望清单" : status.includes("预购") ? "预购" : "入库";
  const input = document.querySelector(`input[name='editStatus'][value='${value}']`);
  if (input) input.checked = true;
}

function getPackageType() {
  return document.querySelector("input[name='packageType']:checked")?.value || "盒装";
}

function setPackageType(packageType) {
  const value = packageType === "挂卡" ? "挂卡" : "盒装";
  const input = document.querySelector(`input[name='packageType'][value='${value}']`);
  if (input) input.checked = true;
}

function getEditPackageType() {
  return document.querySelector("input[name='editPackageType']:checked")?.value || "盒装";
}

function setEditPackageType(packageType) {
  const value = packageType === "挂卡" ? "挂卡" : "盒装";
  const input = document.querySelector(`input[name='editPackageType'][value='${value}']`);
  if (input) input.checked = true;
}

function renderQuickMatch() {
  const number = fields.number.value.replace(/\D/g, "");
  const catalogItem = getCatalogItem(number);
  const known = knownOfficialDetails[number];
  const imageUrl = catalogItem?.imageUrl || knownImageUrls[number] || "";
  const title = catalogItem?.title || (known ? `${known.model} ${known.variant}`.trim() : "");

  if (!number) {
    els.quickMatch.innerHTML = "";
    els.quickMatch.classList.remove("visible");
    return;
  }

  if (!catalogItem && !known) {
    els.quickMatch.innerHTML = `
      <div class="quick-match-empty">
        <strong>#${escapeHtml(number)}</strong>
        <span>本地官网目录暂未匹配，保存后会先用占位图。</span>
      </div>
    `;
    els.quickMatch.classList.add("visible");
    return;
  }

  els.quickMatch.innerHTML = `
    <div class="quick-match-card">
      <img src="${escapeHtml(imageUrl || generatedCarImage({ number, model: title }))}" alt="${escapeHtml(title)}" />
      <div>
        <strong>#${escapeHtml(number)}</strong>
        <span>${escapeHtml(title)}</span>
      </div>
    </div>
  `;
  els.quickMatch.classList.add("visible");
}

function restoreSeed() {
  inventory = structuredClone(seedInventory);
  persist();
  resetForm();
  render();
}

function render() {
  const filtered = filteredInventory();
  renderStats();
  renderFilters();
  renderCategories();
  renderInventory(filtered);
}

function filteredInventory() {
  const query = els.search.value.trim().toLowerCase();
  const status = els.statusFilter.value;

  return inventory
    .filter((item) => {
      const haystack = [item.status, item.number, item.model, item.packageType, item.note].join(" ").toLowerCase();
      return (!query || haystack.includes(query))
        && (status === "all" || item.status === status)
        && categoryMatches(item, activeCategory);
    })
    .sort((a, b) => {
      if (els.sort.value === "number-asc") return numberValue(a.number) - numberValue(b.number);
      if (els.sort.value === "model-asc") return a.model.localeCompare(b.model);
      if (els.sort.value === "status-asc") return a.status.localeCompare(b.status);
      return numberValue(b.number) - numberValue(a.number);
    });
}

function numberValue(value) {
  const parsed = Number(String(value).replace(/\D/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function renderStats() {
  const counted = inventory.filter((item) => !isWishlistItem(item));
  const totalQty = counted.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const preorderQty = counted
    .filter((item) => item.status.includes("预购"))
    .reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const ownedQty = counted
    .filter((item) => item.status.includes("入库"))
    .reduce((sum, item) => sum + Number(item.quantity || 0), 0);

  els.totalQty.textContent = totalQty;
  els.totalItems.textContent = groupInventory(counted).length;
  els.ownedQty.textContent = ownedQty;
  els.preorderQty.textContent = preorderQty;
}

function renderFilters() {
  const statuses = [...new Set(inventory.map((item) => item.status).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const current = els.statusFilter.value;
  els.statusFilter.innerHTML = `<option value="all">全部状态</option>${statuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("")}`;
  els.statusFilter.value = statuses.includes(current) ? current : "all";
}

function renderCategories() {
  if (!els.categoryList) return;
  const sections = buildCategorySections(inventory);
  const activeKey = `${activeCategory.type}:${activeCategory.value}`;
  const wishlistCount = groupInventory(inventory.filter(isWishlistItem)).length;
  els.activeCategoryLabel.textContent = activeCategory.label;
  els.categoryList.innerHTML = `
    <button class="category-item ${activeKey === "all:all" ? "active" : ""}" type="button" data-type="all" data-value="all" data-label="全部收藏">
      <span>全部收藏</span>
      <strong>${groupInventory(inventory).length}</strong>
    </button>
    ${wishlistCount ? `
      <button class="category-item ${activeKey === "status:wishlist" ? "active" : ""}" type="button" data-type="status" data-value="wishlist" data-label="愿望清单">
        <span>愿望清单</span>
        <strong>${wishlistCount}</strong>
      </button>
    ` : ""}
    ${sections.map((section) => `
      <section class="category-section">
        <h3>${escapeHtml(section.title)}</h3>
        ${section.items.map((item) => `
          <button class="category-item ${activeKey === `${section.type}:${item.value}` ? "active" : ""}" type="button" data-type="${escapeHtml(section.type)}" data-value="${escapeHtml(item.value)}" data-label="${escapeHtml(item.label)}">
            <span>${escapeHtml(item.label)}</span>
            <strong>${item.count}</strong>
          </button>
        `).join("")}
      </section>
    `).join("")}
  `;
}

function selectCategory(event) {
  const button = event.target.closest("button[data-type]");
  if (!button) return;
  const selected = `${button.dataset.type}:${button.dataset.value}`;
  const current = `${activeCategory.type}:${activeCategory.value}`;
  if (selected === current && selected !== "all:all") {
    activeCategory = { type: "all", value: "all", label: "全部收藏" };
    render();
    return;
  }
  activeCategory = {
    type: button.dataset.type,
    value: button.dataset.value,
    label: button.dataset.label
  };
  render();
}

function buildCategorySections(items) {
  return [
    { title: "车厂品牌", type: "maker", items: categoryCounts(items, makerCategoryDefinitions()) },
    { title: "改装厂与系列", type: "tuner", items: categoryCounts(items, tunerCategoryDefinitions()) },
    { title: "赛事与主题", type: "theme", items: categoryCounts(items, themeCategoryDefinitions()) }
  ].filter((section) => section.items.length);
}

function categoryCounts(items, definitions) {
  return definitions.map((definition) => {
    const matched = groupInventory(items.filter((item) => textMatchesCategory(categoryText(item), definition)));
    return { ...definition, count: matched.length };
  }).filter((item) => item.count > 0);
}

function categoryMatches(item, category) {
  if (!category || category.type === "all") return true;
  if (category.type === "status" && category.value === "wishlist") return isWishlistItem(item);
  const definitions = {
    maker: makerCategoryDefinitions(),
    tuner: tunerCategoryDefinitions(),
    theme: themeCategoryDefinitions()
  }[category.type] || [];
  const definition = definitions.find((entry) => entry.value === category.value);
  return definition ? textMatchesCategory(categoryText(item), definition) : true;
}

function categoryText(item) {
  return [item.model, item.note, item.productUrl].join(" ").toLowerCase();
}

function textMatchesCategory(text, definition) {
  return definition.keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

function isWishlistItem(item) {
  return String(item.status || "").includes("愿望");
}

function makerCategoryDefinitions() {
  return [
  { value: "porsche", label: "Porsche", keywords: ["Porsche", "911"] },
  { value: "nissan", label: "Nissan", keywords: ["Nissan", "Silvia", "Skyline", "GT-R", "Z "] },
  { value: "mazda", label: "Mazda", keywords: ["Mazda", "Miata", "RX-7", "MX-5"] },
  { value: "toyota", label: "Toyota", keywords: ["Toyota", "Supra"] },
  { value: "lamborghini", label: "Lamborghini", keywords: ["Lamborghini", "Huracan", "Countach", "Aventador"] },
  { value: "honda", label: "Honda", keywords: ["Honda", "Acura", "NSX", "Civic", "S2000"] },
  { value: "bmw", label: "BMW", keywords: ["BMW", "M3", "M4"] },
  { value: "mercedes", label: "Mercedes-Benz", keywords: ["Mercedes", "AMG"] },
  { value: "ford", label: "Ford", keywords: ["Ford", "Mustang", "GT40"] },
  { value: "chevrolet", label: "Chevrolet", keywords: ["Chevrolet", "Corvette", "Camaro"] },
  { value: "mclaren", label: "McLaren", keywords: ["McLaren"] },
  { value: "bugatti", label: "Bugatti", keywords: ["Bugatti"] }
  ];
}

function tunerCategoryDefinitions() {
  return [
  { value: "lbworks", label: "LB-WORKS / LBWK", keywords: ["LB-WORKS", "LBWK", "Liberty Walk", "LB-Super", "LB-Silhouette"] },
  { value: "kaido", label: "Kaido Works", keywords: ["Kaido Works", "Kaido"] },
  { value: "veilside", label: "VeilSide", keywords: ["VeilSide"] },
  { value: "pandem", label: "Pandem", keywords: ["Pandem"] },
  { value: "bomex", label: "BOMEX", keywords: ["BOMEX"] },
  { value: "dmax", label: "D-MAX", keywords: ["D-MAX"] },
  { value: "amoculture", label: "AMOCULTURE", keywords: ["AMOCULTURE"] },
  { value: "garasi", label: "GARASIDRIFT", keywords: ["GARASIDRIFT"] },
  { value: "street-customs", label: "Street Customs", keywords: ["Street Customs"] }
  ];
}

function themeCategoryDefinitions() {
  return [
  { value: "imsa", label: "IMSA", keywords: ["IMSA", "Daytona", "Sebring", "Petit Le Mans", "Road America"] },
  { value: "formula-drift", label: "Formula Drift", keywords: ["Formula Drift"] },
  { value: "d1gp", label: "D1 Grand Prix", keywords: ["D1 Grand Prix", "D1GP"] },
  { value: "fast-furious", label: "Fast & Furious", keywords: ["Fast & Furious", "Tokyo Drift", "Brian O'Conner", "Han Seoul-Oh"] },
  { value: "ao-racing", label: "AO Racing", keywords: ["AO Racing"] },
  { value: "limited", label: "Limited Edition", keywords: ["Limited Edition"] }
  ];
}

function renderStatusSummary() {
  if (!els.statusSummary) return;
  const counts = new Map();
  inventory.forEach((item) => counts.set(item.status, (counts.get(item.status) || 0) + Number(item.quantity || 0)));
  els.statusSummary.innerHTML = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([status, count]) => `<span class="summary-pill">${escapeHtml(status || "未分类")} · ${count}</span>`)
    .join("");
}

function renderInventory(items) {
  const grouped = groupInventory(items);
  els.empty.style.display = grouped.length ? "none" : "block";
  if (!grouped.length) {
    els.view.innerHTML = "";
    return;
  }

  if (els.viewSelect.value === "photo") renderPhotoGrid(grouped);
  else renderTable(grouped);
}

function groupInventory(items) {
  const groups = new Map();
  items.forEach((item) => {
    const key = item.number || String(item.id);
    if (!groups.has(key)) {
      groups.set(key, {
        ...item,
        ids: [],
        records: [],
        quantity: 0,
        packageSummary: new Map(),
        noteSummary: []
      });
    }

    const group = groups.get(key);
    group.ids.push(item.id);
    group.records.push(item);
    group.quantity += Number(item.quantity || 0);
    group.packageSummary.set(item.packageType || "盒装", (group.packageSummary.get(item.packageType || "盒装") || 0) + Number(item.quantity || 0));
    if (item.note && !group.noteSummary.includes(item.note)) group.noteSummary.push(item.note);
    if (String(item.status || "").includes("预购")) group.status = "预购";
  });

  return [...groups.values()].map((group) => ({
    ...group,
    packageText: [...group.packageSummary.entries()].map(([type, count]) => `${type} ${count}`).join(" / "),
    note: group.noteSummary.join("；")
  }));
}

function renderTable(items) {
  els.view.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>照片</th>
            <th>状态</th>
            <th>编号</th>
            <th>车型</th>
            <th>包装</th>
            <th>数量</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(tableRow).join("")}
        </tbody>
      </table>
    </div>
  `;
  bindActionButtons();
}

function tableRow(item) {
  return `
    <tr class="preview-target" data-preview="${escapeHtml(carImage(item))}" data-title="${escapeHtml(item.model)}" data-subtitle="#${escapeHtml(item.number)} · ${escapeHtml(item.packageText || item.packageType)} · 数量 ${Number(item.quantity || 0)}">
      <td>${imageMarkup(item, "thumb")}</td>
      <td><span class="${statusClass(item.status)}">${escapeHtml(item.status)}</span></td>
      <td class="number-cell">#${escapeHtml(item.number)}</td>
      <td class="model-cell"><strong>${escapeHtml(item.model)}</strong></td>
      <td>${escapeHtml(item.packageText || item.packageType)}</td>
      <td>${Number(item.quantity || 0)}</td>
      <td>${escapeHtml(item.note || "")}</td>
      <td>${rowActions(item)}</td>
    </tr>
  `;
}

function renderPhotoGrid(items) {
  els.view.innerHTML = `<div class="photo-grid">${items.map((item) => `
    <article class="photo-card">
      ${imageMarkup(item, "photo")}
      <div class="photo-info">
        <div class="photo-top">
          <span class="${statusClass(item.status)}">${escapeHtml(item.status)}</span>
          <span class="car-number">#${escapeHtml(item.number)}</span>
        </div>
        <h3>${escapeHtml(item.model)}</h3>
        <p>${escapeHtml(item.packageText || item.packageType)} · 数量 ${Number(item.quantity || 0)}</p>
        <small>${escapeHtml(item.note || "")}</small>
        ${rowActions(item)}
      </div>
    </article>
  `).join("")}</div>`;
  bindActionButtons();
}

function imageMarkup(item, mode) {
  const src = carImage(item);
  const fallback = !item.imageUrl ? " image-fallback" : "";
  const image = `
    <div class="car-image car-image-${mode}${fallback}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(item.model)}" loading="lazy" />
    </div>
  `;
  return item.productUrl
    ? `<a class="car-image-link" href="${escapeHtml(item.productUrl)}" target="_blank" rel="noreferrer" title="打开产品页">${image}</a>`
    : image;
}

function carImage(item) {
  return item.imageUrl || generatedCarImage(item);
}

function generatedCarImage(item) {
  const hue = hashString(`${item.number}${item.model}`) % 360;
  const hue2 = (hue + 42) % 360;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 390">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="hsl(${hue},55%,25%)"/>
          <stop offset="1" stop-color="hsl(${hue2},48%,13%)"/>
        </linearGradient>
        <linearGradient id="car" x1="0" x2="1">
          <stop offset="0" stop-color="hsl(${hue},78%,65%)"/>
          <stop offset="1" stop-color="hsl(${hue2},82%,48%)"/>
        </linearGradient>
      </defs>
      <rect width="640" height="390" fill="url(#bg)"/>
      <g opacity=".32" stroke="#fff" stroke-width="3">
        <path d="M0 286h640M78 235h484M130 180h380"/>
        <path d="M120 390 268 150M510 390 365 150"/>
      </g>
      <g transform="translate(70 120)">
        <path d="M110 152c28-70 68-96 136-96h96c54 0 92 30 132 94l41 20c20 9 31 28 28 51H44c-3-36 12-58 45-66z" fill="url(#car)"/>
        <path d="M178 77h181c24 0 46 13 67 40l23 34H112l28-53c8-15 20-21 38-21z" fill="#dce7ee" opacity=".9"/>
        <path d="M211 85h80v58H171zM314 85h41c20 0 38 12 54 38l11 20h-106z" fill="#1f2933" opacity=".58"/>
        <circle cx="151" cy="225" r="47" fill="#101820"/>
        <circle cx="151" cy="225" r="22" fill="#cfd6dd"/>
        <circle cx="439" cy="225" r="47" fill="#101820"/>
        <circle cx="439" cy="225" r="22" fill="#cfd6dd"/>
        <path d="M62 186h478" stroke="#ffffff" stroke-width="8" opacity=".46"/>
      </g>
      <text x="34" y="48" fill="#fff" font-family="Arial, sans-serif" font-size="24" font-weight="700">MINI GT #${escapeXml(item.number || "----")}</text>
      <text x="34" y="352" fill="#fff" font-family="Arial, sans-serif" font-size="18" opacity=".82">添加照片 URL 后这里会显示真实小车图片</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function hashString(value) {
  return String(value).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function rowActions(item) {
  const hasMultiple = item.records && item.records.length > 1;
  return `
    <div class="row-actions">
      <a class="price-check-link" href="${escapeHtml(goofishSearchUrl(item))}" target="_blank" rel="noreferrer" title="在闲鱼搜索当前在售价格">闲鱼查价</a>
      <button type="button" title="编辑" data-action="${hasMultiple ? "manage" : "edit"}" data-id="${item.id}">${hasMultiple ? "管理" : "编辑"}</button>
      <button type="button" title="删除" data-action="${hasMultiple ? "delete-group" : "delete"}" data-id="${item.id}">删除</button>
    </div>
  `;
}

function goofishSearchUrl(item) {
  const query = ["MINIGT", String(item.number || "").trim()].filter(Boolean).join(" ");
  return `https://www.goofish.com/search?q=${encodeURIComponent(query)}`;
}

function bindActionButtons() {
  els.view.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      if (button.dataset.action === "edit") editCar(id);
      if (button.dataset.action === "manage") manageGroup(id);
      if (button.dataset.action === "delete") deleteCar(id);
      if (button.dataset.action === "delete-group") deleteGroup(id);
    });
  });
}

function statusClass(status) {
  const cls = ["status-chip"];
  if (status.includes("预购")) cls.push("preorder");
  if (status.includes("入库")) cls.push("local");
  return cls.join(" ");
}

function showPreview(event) {
  const target = event.target.closest(".preview-target");
  if (!target) return;

  els.preview.innerHTML = `
    <img src="${target.dataset.preview}" alt="" />
    <strong>${escapeHtml(target.dataset.title)}</strong>
    <span>${escapeHtml(target.dataset.subtitle)}</span>
  `;
  els.preview.classList.add("visible");
}

function movePreview(event) {
  if (!els.preview.classList.contains("visible")) return;
  const x = Math.min(event.clientX + 18, window.innerWidth - 330);
  const y = Math.min(event.clientY + 18, window.innerHeight - 310);
  els.preview.style.transform = `translate(${Math.max(12, x)}px, ${Math.max(12, y)}px)`;
}

function hidePreview(event) {
  if (!event.target.closest(".preview-target")) return;
  els.preview.classList.remove("visible");
}

function exportCsv() {
  const header = ["状态", "编号", "车型", "包装", "数量", "购买价", "小车照片URL", "产品页URL", "额外备注"];
  const rows = inventory.map((item) => [item.status, item.number, item.model, item.packageType || "盒装", item.quantity, item.price || "", item.imageUrl || "", item.productUrl || "", item.note || ""]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `minigt-collection-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function importCsv(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(String(reader.result || ""));
    const [, ...body] = rows;
    inventory = body
      .filter((row) => row.some((cell) => cell.trim()))
      .map((row, index) => normalizeItem({
        id: Date.now() + index,
        status: row[0] || "",
        number: row[1] || "",
        model: row[2] || "",
        packageType: row[3] || "盒装",
        quantity: row[4] || 1,
        price: row[5] ? Number(row[5]) : "",
        imageUrl: row[6] || "",
        productUrl: row[7] || "",
        note: row[8] || ""
      }));
    persist();
    resetForm();
    render();
    els.importFile.value = "";
  };
  reader.readAsText(file, "utf-8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
