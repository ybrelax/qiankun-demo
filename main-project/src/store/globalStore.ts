import store from "./store";
import { initGlobalState, MicroAppStateActions } from "qiankun";

const state = {
  userInfo: {},
};

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  store.dispatch({
    type: 'setUserInfo',
    data: state
  })
  
});
actions.setGlobalState(state);
// actions.offGlobalStateChange();
