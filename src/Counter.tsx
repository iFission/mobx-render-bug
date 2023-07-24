import React, { Component } from "react";
import { inject, observer, IWrappedComponent } from "mobx-react";
import { CounterStore } from "./CounterStore";

type StoreProps = {
  counterStore: CounterStore;
};
interface Props extends StoreProps { }
@inject("counterStore")
@observer
export class Counter extends Component<Props, any> {
  static defaultProps = {} as StoreProps;

  render() {
    const { counterStore } = this.props;
    return <div>Counter from Counter: {counterStore.counter}</div>;
  }
}
export default Counter as typeof Counter & IWrappedComponent<Props>;
