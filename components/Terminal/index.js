import React, { Component, PropTypes } from "react";
import Command from "../Command";
import Cursor from "../Cursor";

export default class TextSlider extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  onEnd() {
    const current = this.state.current === this.props.children.length - 1 ? 0 : this.state.current + 1;
    this.setState({ current });
  }

  render() {
    const children = Array.from(this.props.children.length ? this.props.children : [this.props.children]);

    return (
      <div>
        <Command text={children[this.state.current].props.children} onEnd={this.onEnd.bind(this)} />
        <Cursor />
      </div>
    );
  }
}
