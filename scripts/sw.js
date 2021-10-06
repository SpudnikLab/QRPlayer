
var CACHE_NAME = 'my-offline-cache';
var urlsToCache = [
  '/html5-qrcode.min.js',
  '/pako.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            caches.match(event.request).then(function(response) {
              return response;
            })
        })
    );
  });
  