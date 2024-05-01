import { pizzaData } from "../data"
export const pizzaReducer = (state = pizzaData, action) => {
  switch (action.type) {
    case 'deletePizza': {
      let array = state.filter(item => item.id != action.payload);
      return [...array];
    }
    case 'addPizza': {
      // sau nafy co the su dung create new id cura nodejs
      return [...state, { id: state.length, ...action?.payload }];

    }
    case 'modifyPizza': {
      // sau nafy co the su dung create new id cura nodejs
      let newArray = state.map(item => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else return item;
      })
      return newArray;
    }
    default: {
      return state;
    }
  }
}
export default pizzaReducer;
