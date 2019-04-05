const CACHE_NAME = 'maribeau-cache'
const urlsToCache = [
  '/',
  '*',
  '/offline',
  '/css/index.css',
  '/css/fonts/Brando-Sans-Text.otf',
  '/css/fonts/Brando-Sans-Light.otf',
  '/css/fonts/Brando-Sans-SemiBold.otf',
  '/css/fonts/Brando-Sans-Text.woff',
  '/css/fonts/Brando-Sans-Light.woff',
  '/css/fonts/Brando-Sans-Semi-Bold.woff',
  '/js/main.js'
]

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened caching')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})
