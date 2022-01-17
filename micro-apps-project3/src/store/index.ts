import { getCurrentInstance } from 'vue';
import { createStore } from 'vuex'


getCurrentInstance
// 创建状态管理
const store = createStore({
  state: {
    userInfo: {
      username: ''
    },
  },
  getters: {},
  mutations: {
    setUserInfo(state, payload) {
      const ctx = getCurrentInstance() as any;
      state.userInfo = payload
    },
  },
  actions: {

    setUserInfo: async function ({ commit }, params) {
      const token = localStorage.getItem('token') || ''
      commit('setUserInfo', params)
    }
  }
})

export default store
