import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
  },

  // Store中数据发生变化, Getter的数据也会跟着变化。
  // 首先大家要清楚一点，getters 只对咋们 state 数据起到一个包装的作用，他并不会修改 state 里面的如何数据
  // 哪我们认为 getters 就相当于 一个计算属性
  getters: {
    showNum(state) {
      return '当前最新的数量是 【' + state.count + '】'
    },
  },

  // 同步数据
  // 只有mutations 中定义的函数,才有权利修改 state 中的数据
  mutations: {
    add(state) {
      // 变更状态
      // 不要在mutations 函数中,执行异步操作
      //   setTimeout(() => {
      //     state.count++
      //   }, 2000)

      state.count++
    },
    // 第一个形参永久是自身state
    // 第二个是外界传过来了参数
    addN(state, step) {
      state.count += step
    },

    // 减法
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },
  },

  // 异步数据
  actions: {
    // 大家注意： 在这里你能直接去访问咋们 state
    // 如果你要修改 state 里面的数据的话
    // 咋们需要 先去提交到 mutations 里面去才行哦！！！
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据
        // 必须通过 context.commit() 触发某个mutation 才行
        context.commit('add')
      }, 1000)
    },
    // 第一个形参永久是自身context
    // 第二个是外界传过来了参数
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },

    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    },
  },
  modules: {},
})
