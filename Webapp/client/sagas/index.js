import vendorSagas from './vendorSagas';
import {fork} from 'redux-saga/effects';

export default function *rootSaga() {
  yield [fork(vendorSagas)]
}
