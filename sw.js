self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("kaspi-store").then(cache => {
      return cache.addAll(["./", "./index.html", "./manifest.json", "./kaspi-icon.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
