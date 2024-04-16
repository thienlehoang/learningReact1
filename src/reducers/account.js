import { Navigate, redirect } from "react-router-dom";
const user={
  email:'',
  password:''
}

export const userReducer=(state=user,action)=>{
  switch(action.type){
    case 'login':{
      return action.payload;
    }
    case 'signup':{
      if(action.payload == '1'){
        redirect('/home');
        return 'logined';
      }
      else return 'login';
    }
    default: return state;
  }
}
export default userReducer