import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configure } from "mobx";
import reportWebVitals from "./reportWebVitals";

configure({ enforceActions: "always" });

const render = (
  props = {} as {
    container?: HTMLElement;
    onGlobalStateChange: Function;
    setGlobalState: Function;
  }
) => {
  const { container } = props;
  const mountDom = container
    ? container.querySelector("#app")
    : document.querySelector("#app");

  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    mountDom
  );
};

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props:any) {
  props.onGlobalStateChange((value:any, prev:any) => console.log(value.userInfo), true);
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props: any) {
  storeTest(props);
  // 可通过 props.getGlobalState() 获取基座下发的数据

  // props.setGlobalState({user: {name: ''}}) 改变全局的数据

  // props.onGlobalStateChange 监听全局数据的变化
  render(props);
}

export async function unmount() {
 // ReactDOM.unmountComponentAtNode(document.getElementById("#app")!);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
