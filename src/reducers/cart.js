import { cart } from "../data";

export const cartReducer=(state=cart,action)=>{
  switch(action.type){
    case 'addcart':{
      //console.log([...state,action.payload])
      return [...state,action.payload]
    } 
    case 'updatecart':{
      return 0;
    } 
    case 'deletecart':{
      return 0;
    }
    default: {return cart;}
  }
}

export default cartReducer