import {  applyMiddleware } from 'redux';
import {legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import persistStore from 'redux-persist/es/persistStore';


const middlewares = [logger]
 export const store = createStore(rootReducer, applyMiddleware(...middlewares));

 export const persistor = persistStore(store)