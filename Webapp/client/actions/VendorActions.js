export const FETCH_VENDORS_REQUEST = "FETCH_VENDORS_REQUEST";
export const FETCH_VENDORS_RESPONSE = "FETCH_VENDORS_RESPONSE";
export const CREATE_VENDOR_REQUEST = "CREATE_VENDOR_REQUEST";
export const CREATE_VENDOR_RESPONSE = "CREATE_VENDOR_RESPONSE";

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
