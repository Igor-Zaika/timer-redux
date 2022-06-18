import { put, call, take, fork, cancel } from 'redux-saga/effects';
import {startTimer, stopTimer, increaseTimer } from '../actions/index'


const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* tick() {
    while (true) {
		yield call(delay, 1000);
		yield put(increaseTimer());
	}
}

function* tickWatcher() {
    while (yield take('START_TIMER')) {
		yield put(startTimer());
		const timer = yield fork(tick);
  
    	const action = yield take('STOP_TIMER');
    	if (action.type === 'STOP_TIMER') {
        	yield put(stopTimer());
    	} 
    	yield cancel(timer);
    }
}

function* rootSaga() {
    yield tickWatcher();
}

export default rootSaga;