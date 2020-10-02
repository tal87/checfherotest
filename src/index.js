import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./utils/reducers";

import App from "./components/App.js";

ReactDOM.render(
  <Provider store={createStore(combineReducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
