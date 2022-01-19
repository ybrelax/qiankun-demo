import { makeAutoObservable } from "mobx";
class Count {
  constructor() {
    makeAutoObservable(this);
  }
  counter = 0;

  increment = () => {
    console.log('count ++', this.counter)
    this.counter++;
  };
}
const counterStore = new Count();
export { counterStore };
