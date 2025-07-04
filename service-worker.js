const CACHE_NAME = 'mi-hija-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap', // Cacha la fuente de Google Fonts
    // Asegúrate de incluir las URLs de tus íconos aquí
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Instalar Service Worker y cachear archivos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar solicitudes y servir desde caché si está disponible
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si está en caché, lo devuelve
                if (response) {
                    return response;
                }
                // Si no, intenta obtenerlo de la red
                return fetch(event.request);
            })
    );
});

// Activar Service Worker y limpiar cachés antiguos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Elimina cachés que no estén en la lista blanca
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});