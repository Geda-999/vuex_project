/* animal.js */
import axios from 'axios'
const state = {
  animalName: '狮子',
  tt: [],
  list: {
    title: 'This is an about page',
    paragraph: 'Hello 这里是初始化',
    section: 'vite + vue2',
  },
}
const mutations = {
  setName(state, newName) {
    state.animalName = newName
  },
  tt(state, ts) {
    state.tt = ts
  },
}
const actions = {
  getTt({ commit }) {
    axios.get('/src/api/test.json').then(({ data }) => {
      console.log(data)
      commit('tt', data)
    })
  },
}

//导出
export default {
  // 开启命名空间 方便之后使用 mapXXX
  namespaced: true,
  state,
  mutations,
  actions,
}
