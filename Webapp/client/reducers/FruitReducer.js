import * as fruitActions from '../actions/FruitActions';

const initialState = {
  isLoading: false,
  fruitList: [],
};

export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case fruitActions.FETCH_FRUITS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case fruitActions.FETCH_FRUITS_RESPONSE:
      return {
        ...state,
        fruitList: action.data,
        isLoading: false
      };
    case fruitActions.CREATE_FRUIT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case fruitActions.CREATE_FRUIT_RESPONSE:
      return {
        ...state,
        fruitList: [...state.fruitList, action.data],
        isLoading: false
      };
    default:
      return state
  }
}