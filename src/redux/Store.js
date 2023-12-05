import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './Rootreducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistreducer = persistReducer(persistConfig, rootreducer);
export const store = createStore(persistreducer, applyMiddleware(thunk));
export const persiststore = persistStore(store);
export default store;
