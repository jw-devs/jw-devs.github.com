import React, { Component, PropTypes } from "react";

export default class TextSlider extends Component {
  static propTypes = {
    onEnd: PropTypes.func,
    text: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      factor: 1
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.tick.bind(this), this.randomTimeout());
    this.stop = () => clearTimeout(this.timeout);
  }

  componentWillReceiveProps() {
    this.setState({ text: "", factor: 1 });
    this.componentDidMount();
  }

  componentWillUnmount() {
    this.stop();
  }

  randomTimeout() {
    return Math.round(Math.random() * (100 - 30));
  }

  tick() {
    this.setState({ text: this.props.text.slice(0, this.state.text.length + this.state.factor) });

    if (this.props.text === this.state.text) {
      this.setState({ factor: -1 });
      this.timeout = setTimeout(this.tick.bind(this), this.randomTimeout() + 2000);
    } else if (this.state.text && this.state.factor) {
      this.timeout = setTimeout(this.tick.bind(this), this.randomTimeout());
    } else {
      this.stop();
      setTimeout(this.props.onEnd, 2000);
    }
  }

  render() {
    return (
      <span>{this.state.text}</span>
    );
  }
}
