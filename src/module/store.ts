import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import rootSaga from './middleware';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

export default store;
