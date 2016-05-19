import React from "react";
import styles from "./index.css";
import { Fixed, Flexible } from "spaced";

export default ({ children, ...props }) => {
  return (
    <header className={styles.h1} {...props}>
      <Fixed width={props.width}>
        <Fixed>// {children}</Fixed> <Flexible>-</Flexible>
      </Fixed>
    </header>
  );
};
