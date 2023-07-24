import React, { Component } from "react";
import { inject, observer, IWrappedComponent } from "mobx-react";
import { CounterStore } from "./CounterStore";

type StoreProps = {
  counterStore: CounterStore;
};
interface Props extends StoreProps { }

@inject("counterStore")
@observer
export class IncrementCounterButton extends Component<Props, any> {
  static defaultProps = {} as StoreProps;

  render() {
    const { counterStore } = this.props;
    return (
      <button onClick={counterStore.incrementCounter}>
        IncrementCounterButton from IncrementCounterButton
      </button>
    );
  }
}
export default IncrementCounterButton as typeof IncrementCounterButton &
  IWrappedComponent<Props>;
