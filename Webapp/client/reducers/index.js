import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import vendor from './VendorReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  vendor
});

export default rootReducer;
