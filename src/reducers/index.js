import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import recipes from "./recipes";
import dialog from "./dialog";
import itemToChange from "./itemToChange";

const rootReducer = combineReducers({
  recipes,
  dialog,
  itemToChange,
  router: routerReducer
});

export default rootReducer;
