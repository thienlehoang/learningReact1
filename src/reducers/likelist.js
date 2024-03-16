import { likeList } from "../data";
export const likelistReducer=(state=likeList,action)=>{
  switch(action.type){
    case 'addlikelist':{
      let idPizza=action.payload;
      return [...state,{idPizza}];
    }
    case 'deletelikelist':{
      let newArray= state.filter((item)=>{
        return item?.idPizza!=action.id;
      })
      return newArray;
    }
    default: {
      return likeList;
    }
  }
}
export default likelistReducer