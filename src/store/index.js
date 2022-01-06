import { createStore,compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer';  //引入笔记本
import mySaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga)

export default store;