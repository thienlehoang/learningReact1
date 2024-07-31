import { combineReducers } from "redux"
import likelist from "./likelist"
import cartlist from './cart'
import login from './account'
import pizza from "./pizza"
import loading from './loading'

export const allReducers = combineReducers(
  {
    cartlist,
    likelist,
    login,
    pizza,
    loading
  }
)