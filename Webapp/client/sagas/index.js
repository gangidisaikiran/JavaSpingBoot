import vendorSagas from './VendorSagas';
import fruitSagas from './FruitSagas';
import {fork} from 'redux-saga/effects';

export default function *rootSaga() {
  yield [
    fork(vendorSagas),
    fork(fruitSagas)
  ]
}
