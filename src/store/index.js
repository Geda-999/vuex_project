import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    add(state) {
      // 变更状态
      state.count++
    },
    // 第一个形参永久是自身state
    // 第二个是外界传过来了参数
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },
  },
  actions: {},
  modules: {},
})
