import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';
import { getUniqueId } from 'react-native-device-info';
import Config from 'react-native-config';

export const storage = new MMKV({
    id: `storage-encrypted-${getUniqueId()}`,
    encryptionKey: `Fantasy-${getUniqueId()}-${Config.STORAGE_ENCRYPT_KEY}`,
});

export const reduxStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};

//----------------------------------------------------------------------------------------
// App Storage
//----------------------------------------------------------------------------------------
export const initAppStorage = new MMKV({
    id: `app-storage-encrypted-${getUniqueId()}`,
    encryptionKey: `Fantasy-${getUniqueId()}-${Config.STORAGE_ENCRYPT_KEY}`,
});

export const AppStorage = {
    setItem: (key, value) => {
        initAppStorage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = initAppStorage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        initAppStorage.delete(key);
        return Promise.resolve();
    },
};

//----------------------------------------------------------------------------------------
// Reactotron stogare, only for development
//----------------------------------------------------------------------------------------
export const storageReactotron = new MMKV({
    id: `storage-reacotron-${getUniqueId()}`,
});

export const reactotronStorage: Storage = {
    setItem: (key, value) => {
        storageReactotron.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storageReactotron.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storageReactotron.delete(key);
        return Promise.resolve();
    },
};
