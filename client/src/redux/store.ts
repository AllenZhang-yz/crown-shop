import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [applyMiddleware(sagaMiddleware)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(applyMiddleware(logger));
}

export const store = createStore(rootReducer, compose(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
