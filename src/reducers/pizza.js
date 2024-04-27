import { pizzaData } from "../data"
export const pizzaReducer=(state=pizzaData,action)=>{
  switch(action.type){
    case 'deletePizza':{
      const id =action.payload;
      const array=state.filter(item=>item.id!=id);
      return [...array];
    }
    default: return state;
  }
}
export default pizzaReducer