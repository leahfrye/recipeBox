import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";

import { Provider } from "react-redux";
import "es5-shim";

import App from './components/app';
import reducer from "./reducers/reducer";

import recipes from "./data/recipes";

require("./../dist/scss/style.scss");

let initialState = {
  recipes,
  dialog: {
    dialogOpened: false,
    name: null
  }
};

let store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger())
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>
), document.getElementById("main"));
