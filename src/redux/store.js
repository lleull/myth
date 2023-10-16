import {  applyMiddleware } from 'redux';
import {legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';

import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddlware from 'redux-saga'
import  rootSaga from './root-saga';
import rootReducer from './root.reducer';
const sagaMiddleware = createSagaMiddlware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default persistStore(store)