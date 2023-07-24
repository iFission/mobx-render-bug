import { action, observable } from "mobx";

export class CounterStore {
  @observable counter: number = 0;

  constructor() {
    this.counter = 0;
  }

  @action
  incrementCounter = () => {
    this.counter++;
  };
}

export const counterStore = new CounterStore();
