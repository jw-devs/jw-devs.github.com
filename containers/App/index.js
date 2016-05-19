import React, { Component, PropTypes, cloneElement, Children } from "react";
import styles from "./index.css";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  constructor(props) {
    super(props);

    this.state = { characterWidth: 0, characterHeight: 0, parentWidth: 0, parentHeight: 0 };
  }

  componentDidMount() {
    this.removeEventListener = (() => {
      const listener = () => {
        this.setWindowWidthAndHeight(parseInt(window.innerWidth), parseInt(window.innerHeight));
      };
      window.addEventListener("resize", listener);
      listener();
      () => window.removeEventListener("resize", listener);
    })();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.characterWidth !== this.state.characterWidth ||
      nextState.characterHeight !== this.state.characterHeight ||
      nextState.parentWidth !== this.state.parentWidth ||
      nextState.parentHeight !== this.state.parentHeight;
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  setCharacterWidthAndHeight(characterWidth, characterHeight) {
    this.setState({ characterWidth, characterHeight });
  }

  setWindowWidthAndHeight(parentWidth, parentHeight) {
    this.setState({ parentWidth, parentHeight });
  }

  render() {
    const children = Children.toArray(this.props.children);
    const width = parseInt(this.state.parentWidth / this.state.characterWidth) || 80;
    const getWidthAndHeight = cb => element => {
      if (element) {
        let { width, height } = element.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(element);

        width = width - parseInt(computedStyle.getPropertyValue("padding-left")) - parseInt(computedStyle.getPropertyValue("padding-right"));
        height = height - parseInt(computedStyle.getPropertyValue("padding-top")) - parseInt(computedStyle.getPropertyValue("padding-bottom"));

        cb(width, height);
      }
    };

    return (
      <pre className={styles.app} ref={getWidthAndHeight(::this.setWindowWidthAndHeight)}>
        {this.state.characterWidth ? null : <span ref={getWidthAndHeight(::this.setCharacterWidthAndHeight)}>m</span>}
        {children.map((child, key) => typeof child === "object" ? cloneElement(child, { key, width }) : child)}
      </pre>
    );
  }
}
