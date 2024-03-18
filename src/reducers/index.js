import { combineReducers} from "redux"
import likelist from "./likelist"
import cartlist from './cart'

export const allReducers=combineReducers(
  {
    cartlist,
    likelist,
  }
)