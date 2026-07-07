// Pokémon Champions Manager v0.8 cache-kill
// Questo file serve solo a neutralizzare eventuali service worker vecchi.
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      await self.registration.unregister();
      const clientsList = await self.clients.matchAll({type: 'window'});
      for (const client of clientsList) client.navigate(client.url);
    } catch (e) {}
  })());
});
self.addEventListener('fetch', event => {
  // Network-first minimale: non servire mai index vecchi dalla cache.
  event.respondWith(fetch(event.request).catch(() => new Response('Offline temporaneo. Ricarica appena possibile.', {status: 503})));
});
