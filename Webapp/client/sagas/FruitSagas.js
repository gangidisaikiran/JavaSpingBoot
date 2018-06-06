import {takeEvery, takeLatest} from 'redux-saga';
import {put, call, select, fork} from 'redux-saga/effects';
import {HttpHelper} from '../utils/apis';
import * as fruitActions from '../actions/FruitActions';

function *fetchFruits(params) {
  const response = yield call(
    HttpHelper, `fruit`, 'GET', null, null
  );
  yield put(fruitActions.fetchFruitsResponse(response.data));
}

function *createFruit(params) {
  const response = yield call(
    HttpHelper, `fruit`, 'POST', params.data, null
  );
  yield put(fruitActions.createFruitResponse(response.data));
}

/*
 Watchers
 */

function *watchFetchVendors() {
  yield *takeEvery(fruitActions.FETCH_FRUITS_REQUEST, fetchFruits);
}

function *watchCreateVendor() {
  yield *takeEvery(fruitActions.CREATE_FRUIT_REQUEST, createFruit);
}

export default function *fruitSagas() {
  yield [
    fork(watchFetchVendors),
    fork(watchCreateVendor)
  ]
}