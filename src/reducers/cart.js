import { cart } from "../data";

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "addcart": {
      if (!state.find((item) => item.id == action.payload.id)) {
        // neu chua co trong likelist
        return [...state, { ...action.payload, count: 1 }];
      } else {
        // neu da co trong likelist = > count +1 
        return state.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, count: item.count + 1 };
          } else return item;
        });
      }
    }
    case "updatecart": {
      let newArray = [];
      newArray = state.map((item, index) => {
        if (item.id !== action.item.id) {
          return item;
        }
        return {
          ...item,
          ...action.item,
        };
      });
      return newArray;
    }
    case "deletecart": {
      return state.filter((item) => item.id != action.id);
    }
    default:
      return state;
  }
};

export default cartReducer;
