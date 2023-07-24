import React, { Component } from "react";
import { inject, observer, IWrappedComponent } from "mobx-react";
import { CounterStore } from "./CounterStore";

type StoreProps = {
  counterStore: CounterStore;
};
interface Props extends StoreProps { }
@inject("counterStore")
@observer
class Counter extends Component<Props, any> {
  static defaultProps = {} as StoreProps;

  render = () => {
    const { counterStore } = this.props;
    return (
      <>
        <button onClick={counterStore.incrementCounter}>
          IncrementCounterButton from CounterArrow
        </button>
        <div>Counter from CounterArrow: {counterStore.counter}</div>
      </>
    );
  };
}

export default Counter as typeof Counter & IWrappedComponent<Props>;
