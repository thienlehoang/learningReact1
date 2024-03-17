import { combineReducers} from "redux"
import likelist from "./likelist"
import cart from './cart'

export const allReducers=combineReducers(
  {
    likelist,
    cart
  }
)