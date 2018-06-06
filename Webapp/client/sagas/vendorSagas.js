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

/*
 Watchers
 */

function *watchFetchVendors() {
  yield *takeEvery(vendorActions.FETCH_VENDORS_REQUEST, fetchVendors);
}

function *watchCreateVendor() {
  yield *takeEvery(vendorActions.CREATE_VENDOR_REQUEST, createVendor);
}

export default function *vendorSaga() {
  yield [
    fork(watchFetchVendors),
    fork(watchCreateVendor)
  ]
}