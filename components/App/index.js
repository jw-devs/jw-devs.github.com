import styles from "./index.css";
import React from "react";
import Terminal from "../Terminal";
import classNames from "classnames";

export default () => (
  <section className={classNames(styles.Container)}>
    <div>
      <img className={classNames(styles.Logo)} src="logo.svg" alt="JW.devs Logo" />
      <Terminal>
        <p>
          We are a programmer community of brothers&nbsp;&amp;&nbsp;sisters
        </p>
        <p>
          Wir sind eine Programmierer-Community von Brüdern&nbsp;&amp;&nbsp;Schwestern
        </p>
      </Terminal>
    </div>
  </section>
);
