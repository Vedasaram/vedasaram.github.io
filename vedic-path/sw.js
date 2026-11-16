// Retires the old service worker at vedasaram.github.io/vedic-path/ (the app now lives at the site root).
// It removes itself and sends any open window to the new address. It does not touch the root app's caches.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const wins = await self.clients.matchAll({ type: 'window' });
    for (const w of wins) { try { w.navigate('/'); } catch (e) {} }
  })());
});
