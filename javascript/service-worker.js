const cacheName = "newsify-cache-v2";

const filesToBeCached = [
  "./index.html",
  "/css/about.css",
  "/css/contact.css",
  "/css/style.css",
  "/pages/about.html",
  //   "./pages/contact.html",
];

// INSTALL THE SERVICE WORKER
self.addEventListener("install", function (e) {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker Caching files");
      cache.addAll(filesToBeCached);
    })
  );
});

// ACTIVATE THE ACTIVE WORKER
self.addEventListener("activate", function (e) {
  console.log("Service Worker Activated");
  //   REMOVE UNWANTED CACHES
  console.log("Service Worker Removing Unwanted Caches");
  e.waitUntil(
    caches.keys().then((cachesNames) => {
      return Promise.all(
        cachesNames.map((oldCacheName) => {
          if (cacheName !== oldCacheName) {
            return caches.delete(oldCacheName);
          }
        })
      );
    })
  );
});

// LISTEN TO FETCH EVENT
self.addEventListener("fetch", function (e) {
  console.log(e.request);
  //   LET THE BROWSER DO IT DEFAULT THING FOR NON-GET REQUEST;
  if (e.request.method !== "GET") return;
  e.respondWith(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(e.request);
        if (cachedResponse) {
          console.log("Match found in caches");
          e.waitUntil(cache.add(e.request));
          return cachedResponse;
        }
        console.log("Match not found in cache...");
        const res = await fetch(e.request);
        const resClone = res.clone();
        cache.put(e.request, resClone);
        return res;

        // return fetch(e.request);
      } catch (error) {
        console.log("Error checking cache...", error);
      }
    })()
  );
  //   if (caches.has(e.request)) return caches.match(e.request);
  //   console.log("Match not found for the request");
});
