import { Navigate, redirect } from "react-router-dom";
import { users } from "../data";
const userModel = {
  id:undefined,
  cartId:undefined,
  listListId:undefined,
  cate:undefined, // 0 : user , 1 :admin
  firstName:undefined,
  email:undefined,
  password:undefined,
  isLogined:false
};

export const userReducer = (state =userModel , action) => {
  switch (action.type) {
    case "login": {
      const result = users.find(
        (item) =>
          (item.email == action.payload.email &&
          item.password == action.payload.password)
      );
      return {...result, isLogined: true};
    }
    case "signup": {
      if (action.payload == "1") {
        redirect("/home");
        return "logined";
      } else return "login";
    }
    default:
      return state;
  }
};
export default userReducer;
