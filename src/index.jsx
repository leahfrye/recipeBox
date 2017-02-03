import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

import { Provider } from "react-redux";
import "es5-shim";

import App from './components/app';
import rootReducer from "./reducers/index";

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
  rootReducer,
  initialState,
  applyMiddleware(createLogger())
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
), document.getElementById("main"));
