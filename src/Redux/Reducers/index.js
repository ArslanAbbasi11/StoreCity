
import { combineReducers } from "redux";
import { Products } from "./Products";
import { Cart } from "../Reducers/./Cart";
const reducers=combineReducers({
  Products,
  Cart
})

export default reducers;