import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import vendor from './VendorReducer';
import fruits from './FruitReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  vendor,
  fruits
});

export default rootReducer;
