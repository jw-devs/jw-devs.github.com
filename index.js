import "./style.css";


import React from "react";
import { Router, Route } from "react-router";
import createHistory from "history/lib/createBrowserHistory";
import App from "./components/App";


React.render(
  <Router history={createHistory()}>
    <Route path="*" component={App} />
  </Router>
, document.body);
