self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    console.log('accept:', event.request.headers.get('accept'));
    event.respondWith(fetch(event.request));
});