const CACHE_NAME = 'plato-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // ریکوئست‌های سوپابیس و فایل‌های ویدیویی مستقیم رد شوند و کش نشوند
  if (event.request.url.includes('supabase.co') || event.request.url.includes('.mp4')) {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
