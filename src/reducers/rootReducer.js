import { combineReducers } from "redux";
import login from "./loginReducer";
import product from "./productReducer";
import modulgrup from "./modulGrupReducer";

const rootReducer = combineReducers({
  login,
  product,
  modulgrup,
});

export default rootReducer;
