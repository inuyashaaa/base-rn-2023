import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { configureStore } from '@reduxjs/toolkit';

import Reactotron from '../../Reactotron';

import reducers from './reducers';

import { reduxStorage } from '@app/storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = __DEV__
    ? {
          key: 'root',
          storage: reduxStorage,
          stateReconciler: autoMergeLevel2,
          debug: true,
          blacklist: ['system'],
      }
    : {
          key: 'root',
          storage: reduxStorage,
          stateReconciler: autoMergeLevel2,
          blacklist: ['system'],
      };

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancers: any[] = [];
if (__DEV__) {
    if (Reactotron.createEnhancer) {
        enhancers.push(Reactotron.createEnhancer());
    }
}

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false,
            immutableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }).concat(sagaMiddleware),
    enhancers: enhancers,
});

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
