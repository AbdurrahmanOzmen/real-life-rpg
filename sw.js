const CACHE_NAME = "life-rpg-premium-v2";
const CORE = ["./", "./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(CORE.map(async path => { try { await cache.add(path); } catch (_) {} }));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (event.request.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/")) {
      try {
        const fresh = await fetch(event.request, { cache: "no-store" });
        if (fresh.ok) cache.put(event.request, fresh.clone());
        return fresh;
      } catch (_) {
        return (await cache.match(event.request)) || (await cache.match("./index.html"));
      }
    }
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const fresh = await fetch(event.request);
      if (fresh.ok) cache.put(event.request, fresh.clone());
      return fresh;
    } catch (_) { return cached || Response.error(); }
  })());
});
