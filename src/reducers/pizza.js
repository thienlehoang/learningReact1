import { pizzaData } from "../data"
export const pizzaReducer = (state = pizzaData, action) => {
  switch (action.type) {
    case 'deletePizza': {
      let array = state.filter(item => item.id != action.payload);
      return [...array];
    }
    default: {
      return state;
    }
  }
}
export default pizzaReducer;
