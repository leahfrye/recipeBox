import React from "react";
import ReactDOM from "react-dom";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "es5-shim";

import App from './components/app';
import reducer from "./reducers";
import recipes from "./recipes";

require("./../dist/scss/style.scss");

let initialState = {
  recipes,
  dialog: {
    dialogOpened: false,
    name: null
  }
};
console.log(initialState);
let store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger())
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("main"));
