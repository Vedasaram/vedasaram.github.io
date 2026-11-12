// Vedasaram service worker — makes the app open without an internet connection.
//
// The app page is fetched from the network first (so new versions arrive as soon
// as you are online) and falls back to the saved copy when offline or slow.
// Fonts and icons are served from the saved copy.
const CACHE = 'vedasaram-v128';
const PAGE = './index.html';
const SHELL = ['./', PAGE, './kids.js', './ramayana.js', './mahabharata.js', './mahabharata/adi.js', './mahabharata/sabha.js', './mahabharata/vana.js', './mahabharata/virata.js', './mahabharata/udyoga.js', './mahabharata/bhishma.js', './mahabharata/drona.js', './mahabharata/karna.js', './mahabharata/shalya.js', './mahabharata/sauptika.js', './mahabharata/stri.js', './mahabharata/shanti.js', './mahabharata/anushasana.js', './mahabharata/ashvamedhika.js', './mahabharata/ashramavasika.js', './mahabharata/mausala.js', './mahabharata/mahaprasthanika.js', './mahabharata/svargarohana.js', './mahabharata/harivamsha.js', './ramayana/bala.js', './ramayana/ayodhya.js', './ramayana/aranya.js', './ramayana/kishkindha.js', './ramayana/sundara.js', './ramayana/yuddha.js', './ramayana/uttara.js', './splash.js', './festivals.js', './sages.js', './kings.js', './kings/chandragupta.js', './kings/ashoka.js', './kings/shatakarni.js', './kings/kharavela.js', './kings/samudragupta.js', './kings/vikramaditya.js', './kings/skandagupta.js', './kings/harsha.js', './kings/pulakeshin.js', './kings/narasimhavarman.js', './kings/lalitaditya.js', './kings/rajaraja.js', './kings/rajendra.js', './kings/bhoja.js', './kings/kakatiya.js', './kings/prithviraj.js', './kings/vijayanagara.js', './kings/krishnadevaraya.js', './kings/sanga.js', './kings/pratap.js', './kings/shivaji.js', './vedas.js', './bookmarks.js', './vedas/intro.js', './vedas/rig.js', './vedas/yajur.js', './vedas/sama.js', './vedas/atharva.js', './vedas/life.js', './vedas/vedanta.js', './vedas/upanishads.js', './vedas/acharyas.js', './sages/vishvamitra.js', './sages/vasishtha.js', './sages/shukracharya.js', './sages/angiras.js', './sages/agastya.js', './sages/bhrigu.js', './sages/narada.js', './sages/vyasa.js', './sages/valmiki.js', './sages/durvasa.js', './sages/atri.js', './sages/gautama.js', './sages/bharadvaja.js', './sages/markandeya.js', './sages/dadhichi.js', './sages/kapila.js', './sages/jamadagni.js', './sages/yajnavalkya.js', './sages/brihaspati.js', './sages/kashyapa.js', './sages/ashtavakra.js', './sages/rishyashringa.js', './sages/cyavana.js', './sages/uttanka.js', './sages/shuka.js', './sages/kanva.js', './sages/mandavya.js', './sages/pulastya.js', './sages/lomasha.js', './sages/dhaumya.js', './sages/upamanyu.js', './sages/sandipani.js', './sages/kumaras.js', './sages/aruni.js', './sages/jaimini.js', './sages/garga.js', './sages/shandilya.js', './sages/valakhilyas.js', './sages/parashara.js', './sages/mudgala.js', './sages/ribhu.js', './hi/hi.js', './hi/files.js', './hi/ui.js', './hi/stories/ravanas-ten-heads-and-brahmas-boon.js', './hi/stories/viduras-simple-meal-for-krishna.js', './hi/stories/indrajit-the-cloud-warrior.js', './hi/stories/krishna-the-peace-messenger.js', './hi/stories/hanuman-carries-the-mountain.js', './hi/stories/prince-uttaras-brave-ride.js', './hi/stories/angadas-foot-in-ravanas-court.js', './hi/stories/pandavas-in-disguise-at-viratas-court.js', './hi/stories/samudra-shows-the-way.js', './hi/stories/bhima-and-the-saugandhika-flowers.js', './hi/stories/vibhishana-joins-rama.js', './hi/stories/arjuna-and-urvashi.js', './hi/stories/hanuman-sets-lanka-on-fire.js', './hi/stories/arjuna-and-shiva-the-hunter.js', './hi/stories/hanuman-meets-sita.js', './hi/stories/yakshas-questions-at-the-lake.js', './hi/stories/sampati-jatayus-brother.js', './hi/stories/krishna-eats-a-single-leaf.js', './hi/stories/vali-and-sugriva.js', './hi/stories/the-akshaya-patra.js', './hi/stories/rama-meets-hanuman-and-sugriva.js', './hi/stories/draupadi-born-from-the-fire.js', './hi/stories/lakshmanas-line.js', './hi/stories/arjuna-wins-draupadi.js', './hi/stories/the-golden-deer.js', './hi/stories/hidimba-and-ghatotkacha.js', './hi/stories/guha-the-boatman.js', './hi/stories/bhima-and-bakasura.js', './hi/stories/kaikeyis-two-boons.js', './hi/stories/pandavas-escape-the-house-of-lac.js', './hi/stories/ahalya-is-freed.js', './hi/stories/dronas-ring-in-the-well.js', './hi/stories/vishvamitra-and-tataka.js', './hi/stories/how-the-pandavas-were-born.js', './hi/stories/dasharathas-four-sons.js', './hi/stories/karna-and-parashurama.js', './hi/stories/hanuman-and-the-sun.js', './hi/stories/bharata-and-ramas-sandals.js', './hi/stories/kumbhakarna-the-sleeping-giant.js', './hi/stories/jatayu-the-brave-bird.js', './hi/stories/shabaris-berries.js', './hi/stories/rama-breaks-shivas-bow.js', './hi/stories/bhima-meets-hanuman.js', './hi/stories/bhishmas-promise.js', './hi/stories/ganesha-writes-the-mahabharata.js', './hi/stories/ekalavyas-guru-dakshina.js', './hi/stories/karna-gives-away-his-armour.js', './hi/stories/karna-the-son-of-the-sun.js', './hi/stories/hanumans-great-leap.js', './hi/stories/arjuna-and-the-birds-eye.js', './hi/stories/squirrel-and-the-bridge.js', './stories.js', './audio/index.js', './manifest.json', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/tile-ramayana.jpg', './icons/tile-mahabharata.jpg', './icons/cover-mahabharata.jpg', './icons/tile-rama.jpg', './icons/tile-nrsimha.jpg', './icons/tile-prarthana.jpg', './icons/tile-kings.jpg', './icons/tile-vedas.jpg', './icons/tile-sages.jpg'];
const FONT_CSS = [
  'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600&display=swap',
];
const NETWORK_TIMEOUT_MS = 4000;

// Save the font stylesheets and the font files they point to (best effort).
async function cacheFonts(cache) {
  for (const cssUrl of FONT_CSS) {
    try {
      const res = await fetch(cssUrl);
      if (!res.ok) continue;
      const css = await res.clone().text();
      await cache.put(cssUrl, res);
      const files = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m => m[1]);
      await Promise.all([...new Set(files)].map(u =>
        fetch(u).then(r => r.ok ? cache.put(u, r) : null).catch(() => null)));
    } catch (e) { /* offline or blocked — fonts fall back to the device's own */ }
  }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })));
    await cacheFonts(cache);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

function isAppPage(request, url) {
  if (url.origin !== self.location.origin) return false;
  if (request.mode === 'navigate') return true;
  const scope = new URL('./', self.location).pathname;
  return url.pathname === scope || url.pathname === scope + 'index.html';
}
// The app's own scripts (e.g. stories.js, updated daily) — also network first
function isAppScript(url) {
  return url.origin === self.location.origin && url.pathname.endsWith('.js') && !url.pathname.endsWith('/sw.js');
}

// Network first, saved copy if the network fails or takes too long.
async function pageFromNetworkFirst(request, key = PAGE) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(key, { ignoreSearch: true });
  const fromNetwork = fetch(request).then(res => {
    if (res && res.ok) cache.put(key, res.clone());
    return res;
  });
  if (!saved) return fromNetwork;
  const timeout = new Promise(resolve => setTimeout(() => resolve(null), NETWORK_TIMEOUT_MS));
  try {
    const res = await Promise.race([fromNetwork, timeout]);
    if (res && res.ok) return res;
  } catch (e) { /* offline */ }
  fromNetwork.catch(() => {});
  return saved;
}

// Saved copy first; otherwise fetch and save.
async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(request, { ignoreVary: true });
  if (saved) return saved;
  const res = await fetch(request);
  if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
  return res;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;            // update checks (HEAD) go straight to the network
  if (request.cache === 'no-store') return;        // explicit "check for updates" requests
  const url = new URL(request.url);
  if (isAppPage(request, url)) {
    event.respondWith(pageFromNetworkFirst(request));
  } else if (isAppScript(url)) {
    event.respondWith(pageFromNetworkFirst(request, url.origin + url.pathname));
  } else if (url.origin === self.location.origin ||
             url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request).catch(() => Response.error()));
  }
});
