import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// axios 发起请求他是一个异步操作
// 所以说 咋们要把axios定义在actions里面的节点中

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //所有任务列表
    list: [],
    //文本输入框中的值
    inputValue: 'AAA',
    // 咋们标记为下一个Id
    // 设置一个没有被占用的Id就可以
    nextId: 5,
    // 切换按钮的key值
    viewKey: 'all',
  },

  mutations: {
    // 第一个参数永久是自身state
    // 第二个参数咋们可以自定义了
    // 我可以接收一个list进来
    // 这样的话，只要外界谁调用我这个函数 你就必须给我传一个list
    // 只要我拿到list了，就可以把他赋值state中的list身上
    initList(state, list) {
      //   赋值操作
      state.list = list
    },

    // 为 store 中的 inputValue 赋值
    setInputValue(state, val) {
      // state：这是永久是自身.inputValue：这是state中的参数名称 = val：这是从外界调过来了
      state.inputValue = val
    },

    // 添加列表项
    addItem(state) {
      // 定义一个常量
      const obj = {
        id: state.nextId, // 赋值 每个对象的Id 咋们让他每次都递增
        info: state.inputValue.trim(), // 提示项的内容文本
        done: false, // 是否完整
      }
      // 赋值给list数组中 共咋们页面进行使用
      state.list.push(obj)
      // 每个Id都是加一
      state.nextId++
      // 清空输入框
      state.inputValue = ''
    },

    // 根据Id删除对应的任务事项
    removeItem(state, id) {
      // 根据Id查找对应的索引
      /*
            调用state他身上有个数组 就是点list 
            哪数组上有一个方法 叫做点findIndex
            在这里我们可以给他查找的条件 findIndex会循环list每一项
            【每循环一个咋们用x变量来接来】
            【哪接收完之后呢 拿着他循环的这一项，把他的Id值 和 外界传过来的Id 来进行对比】
            【如果相等 哪证明我们找到那一项了，对应的索引值 给返回了】
            【用const i 来进行接收】【那这个i就我们要找的Id索引值了】
            【接下来就进行判断环节啦！！！】
        */
      const i = state.list.findIndex(x => x.id === id)
      // 根据索引，删除对应元素
      if (i !== -1) {
        // 调用splice函数进行删除
        state.list.splice(i, 1)
      }
    },

    // 修改列表项的选中状态
    changeStatus(state, param) {
      const i = state.list.findIndex(x => x.id === param.id)

      if (i !== -1) {
        state.list[i].done = param.status
      }
    },

    // 清除已完成的任务
    // 在这里咋们先接收第一个参数state
    leanDone(state) {
      // 调用的filter过滤器
      // 所以说整个filter调用完成之后会放回一个新数组
      // 那么咋们在重新赋值给state.list就行了
      state.list = state.list.filter(x => x.done === false)
    },

    // 修改视图的关键字
    changeViewKey(state, key) {
      state.viewKey = key
    },
  },

  actions: {
    // 咋们在这新增一个函数
    // 这里面咋们先收一个参数叫context
    getList(context) {
      // 在里面 咋们 直接通过axios发起一个get请求
      // 请求路径 是咋们当前项目中的list.json文件
      //  如果这次请求，请求成功的咋们执行一个回调函数then 箭头函数 结构赋值
      axios.get('/src/api/list.json').then(({ data }) => {
        // 请求成功之后 可以通过context 调用一个点commit,
        // 这个commit可以触发一个mutations 咋们让他触发谁了就是【initList】
        console.log(data)
        // 咋们把data做位参数
        context.commit('initList', data)
      })
    },
  },

  getters: {
    // 统计未完成的任务的条数
    unDoneLength(state) {
      // 调用的filter过滤器
      // 先从state.list数组中调用的filter 把那些未完成的任务 给他过滤出来
      // 然后形成一个新的数组 再调用数组的点length属性 把咋们对应的长度给他return出去
      // 【x代表里面的每一项】
      // 【 x.done 如果他等于 false】的话就满足我们的需求，就把他过滤出来 最后会形成一个新的数组
      return state.list.filter(x => x.done === false).length
    },

    // 判断全部、已完成、未完成的切换效果
    infoList(state) {
      if (state.viewKey === 'all') {
        return state.list
      }
      if (state.viewKey === 'undone') {
        return state.list.filter(x => !x.done)
      }
      if (state.viewKey === 'done') {
        return state.list.filter(x => x.done)
      }
      return state.list
    },
  },
})
