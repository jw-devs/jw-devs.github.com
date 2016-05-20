import React from "react";
import { Fixed } from "spaced";

const Line = ({ children = [], style, width }) => (
  <span style={style}>
    <Fixed width={width}>
      {children}
    </Fixed>
    <br />
  </span>
);

export default Line;
