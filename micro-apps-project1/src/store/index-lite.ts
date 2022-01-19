import * as React from "react";
import { configure } from "mobx";
import { counterStore } from "./counter";
import numStore from "./about";
configure({ enforceActions: "always" });
export const stores = { counterStore, numStore };
export const CounterContext = React.createContext(stores);
export const useStores = () => React.useContext(CounterContext);
