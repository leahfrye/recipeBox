import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { loadState, saveState } from "./localStorage";
import { Provider } from "react-redux";
import "es5-shim";

import App from "./components/app";
import NewRecipeForm from "./components/newRecipeForm";
import rootReducer from "./reducers/index";

import recipes from "./data/recipes";

require("./../dist/scss/style.scss");

let state = {};
let savedState = loadState();
let initialState = {
  recipes,
  dialog: {
    dialogOpened: false,
    name: null
  }
};

if (savedState.recipes.length > 0) {
  state = loadState();
}
else {
  state = initialState;
}

let store = createStore(
  rootReducer,
  state,
  applyMiddleware(createLogger())
);

store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes
  });
});

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
), document.getElementById("main"));
