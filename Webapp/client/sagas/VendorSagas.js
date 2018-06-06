import {takeEvery, takeLatest} from 'redux-saga';
import {put, call, select, fork} from 'redux-saga/effects';
import {HttpHelper} from '../utils/apis';
import * as vendorActions from '../actions/VendorActions';
import * as commonActions from '../actions/CommonActions';

function *fetchVendors(params) {
  const response = yield call(
    HttpHelper, `vendor`, 'GET', null, null
  );
  yield put(vendorActions.fetchVendorsResponse(response.data));
}

function *createVendor(params) {
  const response = yield call(
    HttpHelper, `vendor`, 'POST', params.data, null
  );
  yield put(vendorActions.createVendorsResponse(response.data));
}

function *fetchSelectedVendor(params) {
  const response = yield call(
    HttpHelper, `vendor/${params.id}`, 'GET', null, null
  );
  yield put(vendorActions.fetchSelectedVendorResponse(response.data));
}

function *addFruitsToVendor(params) {
  const response = yield call(
    HttpHelper, `vendor/${params.id}/addFruits`, 'POST', params.form, null
  );
  yield put(vendorActions.addFruitsToVendorResponse(params.id, response.data));
}


function *buyFruits(params) {
  const response = yield call(
    HttpHelper, `vendor/${params.id}/buyFruits/${params.fruitId}`, 'POST', {quantity: params.quantity}, null
  );
  yield put(vendorActions.buyFruitsResponse(params.id, response.data));
}

function *sellFruits(params) {
  const response = yield call(
    HttpHelper, `vendor/${params.id}/sellFruits/${params.fruitId}`, 'POST', {quantity: params.quantity}, null
  );
  if (response.status == 200 || response.status == 201 || response.status == 204) {
    yield put(vendorActions.buyFruitsResponse(params.id, response.data));
  }
  else {
    debugger;
    yield put(commonActions.openSnackbar(response.data.message));
  }
}

/*
 Watchers
 */

function *watchFetchVendors() {
  yield *takeEvery(vendorActions.FETCH_VENDORS_REQUEST, fetchVendors);
}

function *watchCreateVendor() {
  yield *takeEvery(vendorActions.CREATE_VENDOR_REQUEST, createVendor);
}

function *watchFetchSelectedVendor() {
  yield *takeLatest(vendorActions.FETCH_SELECTED_VENDORS_REQUEST, fetchSelectedVendor);
}

function *watchAddFruitsToVendor() {
  yield *takeLatest(vendorActions.ADD_FRUITS_TO_VENDOR_REQUEST, addFruitsToVendor);
}

function *watchBuyFruits() {
  yield *takeLatest(vendorActions.BUY_FRUITS_REQUEST, buyFruits);
}

function *watchSellFruits() {
  yield *takeLatest(vendorActions.SELL_FRUITS_REQUEST, sellFruits);
}

export default function *vendorSagas() {
  yield [
    fork(watchFetchVendors),
    fork(watchCreateVendor),
    fork(watchFetchSelectedVendor),
    fork(watchAddFruitsToVendor),
    fork(watchBuyFruits),
    fork(watchSellFruits)
  ]
}