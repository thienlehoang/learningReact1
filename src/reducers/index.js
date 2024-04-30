import { combineReducers } from "redux"
import likelist from "./likelist"
import cartlist from './cart'
import login from './account'
import pizza from "./pizza"

export const allReducers = combineReducers(
  {
    cartlist,
    likelist,
    login,
    pizza
  }
)