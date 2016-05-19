import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Header from "./components/Header";

ReactDOM.render((
  <App>
    <Header>
      <a href="http://jw-devs.link">JW.devs</a>
    </Header>
  </App>
), document.querySelector("main"));
