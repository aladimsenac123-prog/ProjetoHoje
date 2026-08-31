const CACHE_NAME = 'ecoentregas-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/variables.css',
  '/css/main.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/js/main.js',
  '/js/components/mobile-menu.js',
  '/js/components/co2-counter.js',
  '/js/components/scroll-reveal.js',
  '/js/integrations/google-sheets.js',
  '/js/utils/validators.js',
  '/js/utils/helpers.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});