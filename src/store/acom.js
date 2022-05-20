import axios from 'axios'

const state = {
  addName: [],
}
const mutations = {
  addCom(state, name) {
    state.addName = name
  },
}
const actions = {
  getCom({ commit }) {
    axios.get('/src/api/acom.json').then(({ data }) => {
      console.log(data)
      commit('addCom', data)
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
