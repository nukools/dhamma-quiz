const CACHE_NAME = 'dhamma-flags-v5';
const CACHE_ASSETS = [
  'icon-192.png',
  'icon-512.png'
];

// Install — only cache icons (NOT index.html)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(CACHE_ASSETS))
  );
  self.skipWaiting();
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first for HTML, cache first for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always get fresh HTML from network
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // For other assets: try cache first, then network
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
