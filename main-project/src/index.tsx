import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import "./store/globalStore";
import { Provider } from "react-redux"; // provider
import store from "./store/store";

registerMicroApps(
  [
    {
      name: "micro-apps-project1", // app name registered
      entry: process.env.REACT_APP_ENTRY_PROJECT1 as string,
      container: "#app",
      activeRule: "/project1",
    },
    {
      name: "micro-apps-project3",
      entry: process.env.REACT_APP_ENTRY_PROJECT3 as string,
      container: "#app",
      activeRule: "/project3",
    },
  ],
  {
    beforeLoad: [
      async (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      async (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      async (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);

start();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
