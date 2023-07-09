const { registerRoute } = require('workbox-routing');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching');

// Precache the assets using the __WB_MANIFEST injection
precacheAndRoute(self.__WB_MANIFEST);

// Create a CacheFirst strategy for caching pages
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Register a route for navigations, using the page cache strategy
registerRoute(
  ({ request }) => request.mode === 'navigate',
  ({ event }) => pageCache.handle({ event })
);

// TODO: Implement asset caching
registerRoute(
  // Specify the URL pattern for the assets you want to cache
  ({ request }) => request.destination === 'script' || request.destination === 'style',

  // Choose a caching strategy for the assets
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);
