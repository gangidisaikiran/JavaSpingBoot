import * as vendorActions from '../actions/VendorActions';

const initialState = {
  isLoading: false,
  vendorList: [],
  selectedVendor: {
    isLoading: false
  }
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
      };
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
      };
    case vendorActions.FETCH_SELECTED_VENDORS_REQUEST:
      return {
        ...state,
        selectedVendor: {
          ...state.selectedVendor,
          isLoading: true
        }
      };
    case vendorActions.FETCH_SELECTED_VENDORS_RESPONSE:
      return {
        ...state,
        selectedVendor: {
          ...state.selectedVendor,
          isLoading: false,
          data: action.data
        },
      };
    case vendorActions.ADD_FRUITS_TO_VENDOR_RESPONSE:
      return {
        ...state,
        selectedVendor: {
          ...state.selectedVendor,
          data: {
            ...state.selectedVendor.data,
            vendorFruit: [...state.selectedVendor.data.vendorFruit, ...action.data]
          }
        }
      };
    default:
      return state
  }
}