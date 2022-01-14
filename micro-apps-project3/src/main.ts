import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";

const render = (props = {} as any) => {
  const { container } = props;
  createApp(App).mount(container ? container.querySelector('#app') : '#app');
};

if (!(window as any).__POWERED_BY_QIANKUN__) {
    console.log('这里')
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props: any) {
  console.log('app mount', props)
  render(props);
  // instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  // instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    console.log('app unmount')
}

console.log('运行完成')