import * as vendorActions from '../actions/VendorActions';

const initialState = {
  isLoading: false,
  vendorList: []
};

export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case vendorActions.FETCH_VENDORS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case vendorActions.FETCH_VENDORS_RESPONSE:
      return {
        ...state,
        vendorList: action.data,
        isLoading: false
      }
    case vendorActions.CREATE_VENDOR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case vendorActions.CREATE_VENDOR_RESPONSE:
      return {
        ...state,
        vendorList: [...state.vendorList, action.data],
        isLoading: false
      }
    default:
      return state
  }
}