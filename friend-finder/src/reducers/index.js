import { combineReducers } from "redux";
import test from "./test"
import login from './login'
import image from './image'
import users from "./users"
import profiles from "./profiles"

export default combineReducers({
  test,
  login,
  image,
  users,
  profiles
});