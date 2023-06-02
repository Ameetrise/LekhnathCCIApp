import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
const middleware = [];
const enhancers = [];

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const logger = createLogger({
  timestamp: true,
  collapsed: true,
  duration: true,
  diff: true,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['feedsReducer', 'userReducerr'],
  whitelist: ['appStateReducer'],
  // stateReconciler: autoMergeLevel2,
  // stateReconciler: hardSet,
  debug: false,
};

if (__DEV__) {
  middleware.push(logger);
}

enhancers.push(applyMiddleware(sagaMiddleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux persist
// const store = createStore(persistedReducer, undefined, compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(persistedReducer, undefined, compose(...enhancers));
const persistor = persistStore(store);
export type AppState = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);
export {store, persistor};
// Kick off the root saga
