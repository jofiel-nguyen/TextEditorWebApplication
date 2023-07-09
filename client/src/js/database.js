import { openDB } from 'idb';

const dbPromise = openDB('jate', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('jate')) {
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    }
  },
});

export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put(content);
  await tx.complete;
};

export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  return store.getAll();
};

// Initialize the database
dbPromise.then(() => {
  console.log('IndexedDB initialized');
}).catch((error) => {
  console.error('Failed to initialize IndexedDB:', error);
});
