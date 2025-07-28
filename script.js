"name": "DJ WILMER",
  "short_name": "DJ WILMER",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#ffcc00",
  "theme_color": "#ffcc00",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}


---
2. *Manifest: `manifest.json`*

json
{
3. *Service Worker: `sw.js`*

js
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('radio-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'geiza-logo.png',
        'chica-radio.png',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
```