import styles from "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import createHistory from "history/lib/createBrowserHistory";
import App from "./components/App";


document.body.classList.add(styles.body);

ReactDOM.render(
  <Router history={createHistory()}>
    <Route path="*" component={App} />
  </Router>
, document.querySelector("main"));
