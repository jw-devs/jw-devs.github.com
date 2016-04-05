import styles from "./index.css";
import React from "react";
import classNames from "classnames";

export default () => (
  <section className={classNames(styles.Container)}>
    <div>
      <img className={classNames(styles.Logo)} src="logo.svg" alt="JW.devs Logo" />
      <p>
        Wir sind eine Programmierer-Community von Brüdern&nbsp;&amp;&nbsp;Schwestern.
      </p>
    </div>
  </section>
);
