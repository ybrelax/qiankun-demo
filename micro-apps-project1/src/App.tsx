import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "./store/index-lite";
import "./App.css";

function App() {
  const { counterStore } = useStores();
  const { counter, increment } = counterStore;

  return (
    <div className="App">
      <h1>this is React Sub App</h1>
      <h2>counter:{counter}</h2>
      <button onClick={(e) => increment()}>+1</button>
    </div>
  );
}

export default observer(App);

// 注入store
// import { Provider } from "mobx-react";
// import { Demo1 as Demo } from "./pages/demo";
// import DemoClass from "./pages/demo-class";
// import { store } from "./store";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <DemoClass />
//       {/* <Demo /> */}
//     </Provider>
//   );
// }

