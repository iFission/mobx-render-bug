import { Provider } from "mobx-react";
import React, { Component } from "react";
import { counterStore } from "./CounterStore";

class CounterProvider extends Component {
  render() {
    console.log("test");
    return (
      <Provider counterStore={counterStore}>{this.props.children}</Provider>
    );
  }
}

export default CounterProvider;
