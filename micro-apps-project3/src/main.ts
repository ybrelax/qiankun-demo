import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
let instance = null as any;

const render = (
  props = {} as {
    container?: HTMLElement;
    onGlobalStateChange: Function;
    setGlobalState: Function;
  }
) => {
  const { container } = props;
  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  if (container) {
    instance.config.globalProperties.$onGlobalStateChange =
      props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  }
  instance.mount(container ? container.querySelector("#app") : "#app");
};

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props: any) {
  console.log('vue app mount')
  render(props);
}

export async function unmount() {
  console.log("vue app unmount");
}

