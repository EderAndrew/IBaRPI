import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import Reducers from './reducers/index';

const persistedReducer = persistReducer({
    key:'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}, Reducers)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };