import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const middlewares = [logger];

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
