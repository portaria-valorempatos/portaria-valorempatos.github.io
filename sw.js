const CACHE_NAME = 'valorem-teste-v1';
const urlsToCache = [
  './teste.html',
  './valorem-simbolo-verde-transparente.png',
  './valorem-logotipo-horizontal-verde-com-slogan-transparente.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});