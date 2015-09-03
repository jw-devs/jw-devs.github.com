import "./index.css";


import React, { Component } from "react";


export default class App extends Component {
  render() {
    return (
      <section className="Container">
        <div>
          <img className="Logo" src="logo.svg" alt="JW.devs Logo" />
          <p>
            Wir sind eine Programmierer-Community von Brüdern&nbsp;&amp;&nbsp;Schwestern.
          </p>
        </div>
      </section>
    );
  }
}
