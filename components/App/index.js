import styles from "./index.css";
import React from "react";


export default () => (
  <section className={styles.Container}>
    <div>
      <img className={styles.Logo} src="logo.svg" alt="JW.devs Logo" />
      <p>
        Wir sind eine Programmierer-Community von Brüdern&nbsp;&amp;&nbsp;Schwestern.
      </p>
    </div>
  </section>
);
