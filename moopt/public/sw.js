var dataCacheName = 'Static';
// var cacheName = 'mooptPWA-final-1';
/*var filesToCache = [
  '/',
//  '/index.html',
  '/android-chrome-192x192.png'
];


self.addEventListener('install', function(event) {
  console.log('SW installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
       return cache.addAll(filesToCache);
      })
  );
});*/

self.addEventListener('activate', function() {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
