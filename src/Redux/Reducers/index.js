
import { combineReducers } from "redux";
import { Products } from "./Products";
import { Cart } from "../Reducers/./Cart";
import { Login } from "../Reducers/Login"
const reducers=combineReducers({
  Products,
  Cart,
  Login
})

export default reducers;