import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "./actions";

const initialState = {
  compareProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return {
        ...state,
        compareProducts: [...state.compareProducts, action.payload],
      };
    case REMOVE_FROM_COMPARE:
      return {
        ...state,
        compareProducts: state.compareProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
