const cacheName = "cache-insects";
//når websitet indlæses, cache ressourcer nævnt i liste
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "/student/",
        "/student/index.html",
        "/student/nina.png",
        "/student/olivia.png",
        "/student/mystyle.css",
        "/student/members.json",
        "/student/javascript.js",
      ]);
    })
  );
});
//hvis ressource ikke tilgængelig online, så søg på cachen efter et match.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});
