import {takeEvery, takeLatest} from 'redux-saga';
import {put, call, select, fork} from 'redux-saga/effects';
import {HttpHelper} from '../utils/apis';
import * as vendorActions from '../actions/VendorActions';

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

export default function *vendorSagas() {
  yield [
    fork(watchFetchVendors),
    fork(watchCreateVendor),
    fork(watchFetchSelectedVendor),
    fork(watchAddFruitsToVendor)
  ]
}