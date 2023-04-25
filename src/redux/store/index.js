import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from '../reducers';
import dataSaga from '../saga';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, reducer);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));  

// This commented code use for store data when app kill
// const persistor = persistStore(store, persistConfig, () => {
//   console.log('Test1234', store.getState());
// });
// const configureStore = () => ({ persistor, store });

sagaMiddleware.run(dataSaga);

/**
 * Create Store configure
 * @class configureStore
 */
export default store;
