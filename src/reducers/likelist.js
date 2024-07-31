import { likeList } from "../data";
export const likelistReducer = (state = [], action) => {
  switch (action.type) {
    case "getLikeList": {
      return [...action.payload];
    }
    case "addToLikeList": {
      return [...action.payload];
    }
    case "deletelikelist": {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};
export default likelistReducer;
