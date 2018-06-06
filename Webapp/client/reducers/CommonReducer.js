import * as commonActions from '../actions/CommonActions';

const initialState = {
  snackbar: {
    open: false,
    text: ''
  }
};
export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case commonActions.OPEN_SNACKBAR: return {
      ...state,
      snackbar: {
        ...state.snackbar,
        open: true,
        text: action.text
      }
    };
    case commonActions.CLOSE_SNACKBAR: return {
      ...state,
      snackbar: {
        ...state.snackbar,
        open: false,
        text: ''
      }
    };
    default: return state;
  }
}