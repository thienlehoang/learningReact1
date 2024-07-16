import { pizzaData } from "../data";
export const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "deletePizza": {
      return action?.payload.data;
    }
    case "addPizza": {
      // sau nafy co the su dung create new id cura nodejs
      return action?.payload.data;
    }
    case "modifyPizza": {
      // sau nafy co the su dung create new id cura nodejs
      return action?.payload.data;
    }
    case "getAll": {
      return action.payload.data;
    }
    default: {
      return state;
    }
  }
};
export default pizzaReducer;
