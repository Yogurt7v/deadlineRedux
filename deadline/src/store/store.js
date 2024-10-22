import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const mainReducer = combineReducers({
  rootReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
