import React, { Component, PropTypes } from "react";
import Command from "../Command";
import Cursor from "../Cursor";

export default class TextSlider extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <Command text={this.props.children.props.children} />
        <Cursor />
      </div>
    );
  }
}
