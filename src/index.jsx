import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store/";
import "es5-shim";
require("./scss/style.scss");

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById("main"));
