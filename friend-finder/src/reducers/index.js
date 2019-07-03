import { combineReducers } from "redux";
import test from "./test"
import login from './login'
import image from './image'

export default combineReducers({
  test,
  login,
  image
});