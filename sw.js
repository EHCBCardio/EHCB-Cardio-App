self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ehcb-cardio-fix').then(cache => {
      return cache.addAll(['.', 'index.html', 'manifest.json']);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});