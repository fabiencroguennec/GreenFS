const CACHE_NAME = "image-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/black_green.html",
  "/black_blue.html",
  "/black_white.html",
  "/green_blue.html",
  "/manifest.json",
  "https://i.postimg.cc/QN6tVdyC/Black.jpg",
  "https://i.postimg.cc/nrwcW3DB/Black-Blue.jpg",
  "https://i.postimg.cc/NF0jb35Q/Black-White.jpg",
  "https://i.postimg.cc/nz2L4FVd/Green.jpg"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
