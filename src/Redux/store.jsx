import { configureStore, createSerializableStateInvariantMiddleware, } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';

import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import { contactsApi } from './contactsApi';
import contactsSlice from './contactsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

const middleware = [thunk, serializableMiddleware, thunkMiddleware];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
});

setupListeners(store.dispatch)

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor } ;