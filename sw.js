const CACHE_NAME = "v1_cache_arrastrando",
  urlsToCache = ["./", "img/icon.png"];

//Self = Hacer autoreferencia, se almacena en caché los activos estáticos
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
  );
});

//Una vez que se instala el SW, se activa y busca los recursos para hacer funciones sin conexión
self.addEventListener("activate", e => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        cacheNames.map(cacheName => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      .then(() => self.clients.claim())
  );
});

//Recuperar recursos del navegador
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      if (res) {
        //recuperando del caché
        return res;
      }
      //recuperar de la petición url
      return fetch(e.request);
    })
  );
});
