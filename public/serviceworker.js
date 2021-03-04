const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//install SW

self.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');
            return cache.addAll(urlsToCache);
        })
    )

});


//Listen for response
self.addEventListener('fetch', (event) => {

    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )

});

//Activate teh SW
self.addEventListener('activate', (event) => {

    const cachesWhitelist = [];
    cachesWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheNames) => {
                if (!cachesWhitelist.includes(cacheNames)) {
                    return caches.delete(cacheNames);
                }
            })
        ))
    )

});