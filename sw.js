// Service Worker – AW Quiz PWA
const CACHE = 'aw-quiz-v1';
const ASSETS = [
  '/quiz-by-cyberbob/',
  '/quiz-by-cyberbob/index.html',
  '/quiz-by-cyberbob/questions.js',
  '/quiz-by-cyberbob/questions2.js',
  '/quiz-by-cyberbob/questions3.js',
  '/quiz-by-cyberbob/questions4.js',
  '/quiz-by-cyberbob/questions5.js',
  '/quiz-by-cyberbob/questions6.js',
  '/quiz-by-cyberbob/questions7.js',
  '/quiz-by-cyberbob/questions8.js',
  '/quiz-by-cyberbob/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Firebase & fonts – network first
  if (e.request.url.includes('firebase') || e.request.url.includes('googleapis.com/css')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      const clone = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return resp;
    }))
  );
});
