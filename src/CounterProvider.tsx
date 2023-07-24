import { Provider } from "mobx-react";
import React, { Component } from "react";
import { counterStore } from "./CounterStore";

type Props = {
  children: React.ReactNode;
};

class CounterProvider extends Component<Props> {
  render() {
    console.log("test");
    return (
      <Provider counterStore={counterStore}>{this.props.children}</Provider>
    );
  }
}

export default CounterProvider;
