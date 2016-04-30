import React, { Component, PropTypes } from "react";
import rebound from "rebound";

export default class TextSlider extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = { opacity: 0 };
  }

  componentDidMount() {
    const springSystem = new rebound.SpringSystem();
    const spring = springSystem.createSpring();

    spring.addListener(this);
    spring.setEndValue(1);

    this.removeListener = () => spring.removeListener(this);
  }

  componentWillUnmount() {
    this.removeListener();
  }

  onSpringUpdate(spring) {
    const currentValue = spring.getCurrentValue();

    this.setState({ opacity: currentValue }, () => {
      if(currentValue === 1) {
        spring.setEndValue(-1);
      } else if (currentValue === -1) {
        spring.setEndValue(1);
      }
    });
  }

  render() {
    const style = {
      opacity: this.state.opacity
    };

    return (
      <span style={style}>{this.props.children || "|"}</span>
    );
  }
}
