import { cart } from "../data";

export const cartReducer=(state=cart,action)=>{
  switch(action.type){
    case 'addcart':{
      let newObj=action.payload;
      newObj['count']=1;
      return [...state,newObj];
    } 
    case 'updatecart':{
      return 0;
    } 
    case 'deletecart':{
      return 0;
    }
    default: return state;
  }
}

export default cartReducer