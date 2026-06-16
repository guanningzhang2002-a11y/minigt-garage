const cacheName = "minigt-tracker-v53";
const appShell = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/collection-hero-clean.png",
  "./assets/hero-f1-night.jpg",
  "./assets/hero-imsa-gt3.jpg",
  "./assets/hero-le-mans.jpg",
  "./assets/hero-pink-gt3.jpg",
  "./assets/hero-lbworks-drift.jpg",
  "./assets/minigt-catalog.js",
  "./assets/minigt-image-candidates.js"
];

function rememberResponse(request, response) {
  if (!response.ok) return;
  const copy = response.clone();
  caches.open(cacheName).then((cache) => cache.put(request, copy));
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(appShell)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const freshFirst = [
    "/",
    "/index.html",
    "/app.js",
    "/styles.css",
    "/manifest.webmanifest",
    "/assets/minigt-catalog.js",
    "/assets/minigt-image-candidates.js"
  ].some((path) => url.pathname.endsWith(path));

  if (freshFirst) {
    event.respondWith(
      fetch(event.request).then((response) => {
        rememberResponse(event.request, response);
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        rememberResponse(event.request, response);
        return response;
      })
    )
  );
});
