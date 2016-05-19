import React from "react";
import styles from "./index.css";
import { Fixed, Flexible } from "spaced";

export default ({ children, width }) => {
  return (
    <h1 className={styles.h1}>
      <Fixed width={width}>
        <Fixed>// {children}</Fixed> <Flexible>-</Flexible>
      </Fixed>
    </h1>
  );
};
