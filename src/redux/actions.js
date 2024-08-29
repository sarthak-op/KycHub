export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const REMOVE_FROM_COMPARE = "REMOVE_FROM_COMPARE";

export const addToCompare = (product) => ({
  type: ADD_TO_COMPARE,
  payload: product,
});

export const removeFromCompare = (productId) => ({
  type: REMOVE_FROM_COMPARE,
  payload: productId,
});
