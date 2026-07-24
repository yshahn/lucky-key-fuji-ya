// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            'AIzaSyByZhx5NWLc5u9kJ5x_ZbH6ERGKyFGw7ZE',
  authDomain:        'luckykeyfujiya-3fd7c.firebaseapp.com',
  projectId:         'luckykeyfujiya-3fd7c',
  storageBucket:     'luckykeyfujiya-3fd7c.firebasestorage.app',
  messagingSenderId: '353047402612',
  appId:             '1:353047402612:web:5ce66e66ed89b82caed921',
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Lucky Key & Fuji Ya', {
    body: body || '',
    icon: icon || '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    data: payload.data || {},
  });
});

// Handle notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('/');
    })
  );
});
