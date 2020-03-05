import { combineReducers } from "redux";
import manga from "./manga";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  manga,
  errors,
  messages,
  auth
});
