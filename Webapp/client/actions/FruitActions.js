export const FETCH_FRUITS_REQUEST = "FETCH_FRUITS_REQUEST";
export const FETCH_FRUITS_RESPONSE = "FETCH_FRUITS_RESPONSE";
export const CREATE_FRUIT_REQUEST = "CREATE_FRUIT_REQUEST";
export const CREATE_FRUIT_RESPONSE = "CREATE_FRUIT_RESPONSE";

export function fetchFruitsRequest() {
  return {
    type: FETCH_FRUITS_REQUEST
  }
}

export function fetchFruitsResponse(data) {
  return {
    type: FETCH_FRUITS_RESPONSE,
    data
  }
}

export function createFruitRequest(form) {
  return {
    type: CREATE_FRUIT_REQUEST,
    data: form
  }
}

export function createFruitResponse(data) {
  return {
    type: CREATE_FRUIT_RESPONSE,
    data
  }
}
