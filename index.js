import "./style.css";


import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import createHistory from "history/lib/createBrowserHistory";
import App from "./components/App";


ReactDOM.render(
  <Router history={createHistory()}>
    <Route path="*" component={App} />
  </Router>
, document.querySelector("main"));
