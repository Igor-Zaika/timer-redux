import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import rootSaga from '../saga/countSaga'

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(rootSaga)

export default store;

