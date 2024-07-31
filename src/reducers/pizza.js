import { pizzaData } from "../data";
export const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "deletePizza": {
      return action?.payload;
    }
    case "addPizza": {
      // sau nafy co the su dung create new id cura nodejs
      return action?.payload;
    }
    case "modifyPizza": {
      // sau nafy co the su dung create new id cura nodejs
      return action?.payload;
    }
    case "getAll": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default pizzaReducer;
