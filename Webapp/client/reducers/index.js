import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import vendor from './VendorReducer';
import fruits from './FruitReducer';
import common from './CommonReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  vendor,
  fruits,
  common
});

export default rootReducer;
