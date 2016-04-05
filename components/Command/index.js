import React, { Component, PropTypes } from "react";

export default class TextSlider extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.tick.bind(this), this.randomTimeout());
    this.stop = () => clearTimeout(this.timeout);
  }

  componentWillUnmount() {
    this.stop();
  }

  randomTimeout() {
    return Math.round(Math.random() * (100 - 30));
  }

  tick() {
    this.setState({ text: this.props.text.slice(0, this.state.text.length + 1) });
    this.timeout = setTimeout(this.tick.bind(this), this.randomTimeout());
  }

  render() {
    return (
      <span>{this.state.text}</span>
    );
  }
}
