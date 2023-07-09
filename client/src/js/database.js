import { openDB } from 'idb';

const DB_NAME = 'jate';
const DB_VERSION = 1;
const STORE_NAME = 'jate';

const initdb = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      }
    },
  });
  return db;
};

// Method to add content to the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(content);
  await tx.done;
  console.log('Content added to the database');
};

// Method to get all content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const content = await store.getAll();
  await tx.done;
  return content;
};

initdb();
