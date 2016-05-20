import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Line from "./containers/Line";
import { Fixed, Flexible } from "spaced";

ReactDOM.render((
  <App>
    <Line>
      <Fixed>// Introduction </Fixed><Flexible>-</Flexible>
    </Line>
    <Line />
    <Line>
      &nbsp;&nbsp;&nbsp;A Slack programmer community of brothers & sisters
    </Line>
    <Line />
    <Line>
      <Fixed>// Description </Fixed><Flexible>-</Flexible>
    </Line>
    <Line />
    <Line />
    <Line />
    <Line>
      &nbsp;&nbsp;&nbsp;We are a programmer community of brothers & sisters
    </Line>
    <Line>
      &nbsp;&nbsp;&nbsp;<a href="https://jw-devs.slack.com">talking</a> and <a href="https://github.com/jw-devs">working</a> on projects together.
    </Line>
    <Line>
      &nbsp;&nbsp;&nbsp;You also share the love for Jehovah, brothers and
    </Line>
    <Line>
      &nbsp;&nbsp;&nbsp;sisters around the world as well computers
    </Line>
    <Line>
      &nbsp;&nbsp;&nbsp;and other nerdy stuff? <a href="mailto:uher.mario+jw-devs@gmail.com">Join us!</a>
    </Line>
    <Line />
    <Line />
    <Line />
    <Line>
      <Fixed>// Disclaimer </Fixed><Flexible>-</Flexible>
    </Line>
    <Line />
    <Line>
      &nbsp;&nbsp;&nbsp;jw-devs.link is not created by, affiliated with, or supported by jw.org
    </Line>
  </App>
), document.querySelector("main"));
