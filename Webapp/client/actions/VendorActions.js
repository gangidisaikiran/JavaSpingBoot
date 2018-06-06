export const FETCH_VENDORS_REQUEST = "FETCH_VENDORS_REQUEST";
export const FETCH_VENDORS_RESPONSE = "FETCH_VENDORS_RESPONSE";
export const CREATE_VENDOR_REQUEST = "CREATE_VENDOR_REQUEST";
export const CREATE_VENDOR_RESPONSE = "CREATE_VENDOR_RESPONSE";

export const FETCH_SELECTED_VENDORS_REQUEST = "FETCH_SELECTED_VENDORS_REQUEST";
export const FETCH_SELECTED_VENDORS_RESPONSE = "FETCH_SELECTED_VENDORS_RESPONSE";

export const ADD_FRUITS_TO_VENDOR_REQUEST = "ADD_FRUITS_TO_VENDOR_REQUEST";
export const ADD_FRUITS_TO_VENDOR_RESPONSE = "ADD_FRUITS_TO_VENDOR_RESPONSE";

export function fetchVendorsRequest() {
  return {
    type: FETCH_VENDORS_REQUEST
  }
}

export function fetchVendorsResponse(data) {
  return {
    type: FETCH_VENDORS_RESPONSE,
      data
  }
}

export function createVendorsRequest(form) {
  return {
    type: CREATE_VENDOR_REQUEST,
    data: form
  }
}

export function createVendorsResponse(data) {
  return {
    type: CREATE_VENDOR_RESPONSE,
    data
  }
}

export function fetchSelectedVendorRequest(id) {
  return {
    type: FETCH_SELECTED_VENDORS_REQUEST,
    id
  }
}

export function fetchSelectedVendorResponse(data) {
  return {
    type: FETCH_SELECTED_VENDORS_RESPONSE,
    data
  }
}


export function addFruitsToVendorRequest(id, form) {
  return {
    type: ADD_FRUITS_TO_VENDOR_REQUEST,
    id,
    form
  }
}

export function addFruitsToVendorResponse(id, data) {
  return {
    type: ADD_FRUITS_TO_VENDOR_RESPONSE,
    id,
    data
  }
}