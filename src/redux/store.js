import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reactotron from 'reactotron-react-native';
import rootReducer from './reducers';
import rootSaga from './sagas';

/* ------------- Redux Configuration ------------- */

const middleware = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */

const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
middleware.push(sagaMiddleware);

/* ------------ Logger Middleware ------------- */
// if (__DEV__) {
// middleware.push(createLogger());
// }

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));
if (__DEV__) {
  enhancers.push(Reactotron.createEnhancer());
}

/* ------------- AutoRehydrate Enhancer ------------- */

const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
