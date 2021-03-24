import { combineReducers } from "redux";
import message from "./messageReducer";
import user from './usersReducer';
import candidates from './candidatesReducer';

export default combineReducers({
  message,
  user,
  candidates
});
