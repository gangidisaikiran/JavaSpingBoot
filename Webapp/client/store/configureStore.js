import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  if ('NODE_ENV' in process.env && process.env.NODE_ENV == 'production') {
    return {
      ...createStore(rootReducer),
      initialState
    }
  } else {
    return {
      ...createStore(rootReducer),
      initialState
    }
  }
}
