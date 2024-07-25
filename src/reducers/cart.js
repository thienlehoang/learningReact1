import { cart } from "../data";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "getCart": {
      return [...action.payload];
    }
    case "addToCart": {
      return [...action.payload];
    }
    case "updateCart": {
      return [...action.payload];
    }
    case "deleteCart": {
      return state.filter((item) => item.id != action.id);
    }
    default:
      return state;
  }
};

export default cartReducer;
