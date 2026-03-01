// Service Worker for Dhamma Quiz PWA
const CACHE_NAME = 'dhamma-quiz-v2';

// Install — cache core files
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
