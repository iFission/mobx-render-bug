import React, { Component } from "react";
import { Counter } from "./Counter";
import { IncrementCounterButton } from "./IncrementCounterButton";
import { inject, observer, IWrappedComponent } from "mobx-react";
import { CounterStore } from "./CounterStore";
import CounterArrow from "./CounterArrow";

type StoreProps = {
  counterStore: CounterStore;
};
interface Props extends StoreProps { }

@inject("counterStore")
@observer
class App extends Component<Props, any> {
  static defaultProps = {} as StoreProps;

  render() {
    return (
      <>
        <button onClick={this.props.counterStore.incrementCounter}>
          IncrementCounterButton from App
        </button>
        <br />
        Counter from App: {this.props.counterStore.counter}
        <br />
        <br />
        <IncrementCounterButton />
        <Counter />
        <br />
        <CounterArrow />
      </>
    );
  }
}

export default App as typeof App & IWrappedComponent<Props>;
