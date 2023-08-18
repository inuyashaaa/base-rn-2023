import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import systemReducer from './system/systemSlice';
import { reduxStorage } from '@app/storage';

export type StoreState = ReturnType<typeof appReducers>;

const authPersistConfig = {
    key: 'system',
    storage: reduxStorage,
    blacklist: [],
};

const appReducers = combineReducers({
    system: persistReducer(authPersistConfig, systemReducer),
});

const rootReducers = (state: any, action: any) => {
    // if (action.type === 'USER_LOGOUT') {
    //   state = undefined;
    // }
    return appReducers(state, action);
};

export default rootReducers;
