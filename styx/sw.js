'use script';

var assetsToCache = [
  '/styx/',
  '/styx/index.html',
  '/styx/css/',
  '/styx/css/style.css',
  '/styx/js/',
  '/styx/js/compiled/',
  '/styx/js/compiled/styx_next.js'
];

// Listen to the installation event
this.addEventListener('install', function(event) {

  // Tell Service Worker to wait before installation
  event.waitUntil(

    // Create a new cache called 'v1'
    caches.open('v1')
      .then(function(cache) {

        // Pushes the array of paths into the cache
        return cache.addAll(assetsToCache);
      })
  );
});

// Listen to the fetch event
this.addEventListener('fetch', function(event) {

  // Serve the cached asset
  event.respondWith(

    // Try to find the content in our cache
    // In case it can't find in cache, we instruct SW
    // to try other things in `catch()`. We'll say to
    // Service Worker to try to reach the network and
    // get the resource
    caches.match(event.request)
      .catch(function() {
        fetch(event.request);
      })
  );
});
