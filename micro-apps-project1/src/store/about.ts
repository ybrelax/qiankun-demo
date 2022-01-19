import { makeAutoObservable } from "mobx";
class About {
  constructor() {
    makeAutoObservable(this);
  }
  counter = 0;

  increment = () => {
    this.counter++;
  };
}
const counterStore = new About();
export default counterStore;
