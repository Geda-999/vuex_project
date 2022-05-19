import Vue from 'vue'
import App from './App.vue'
import router from './router' // 挂载路由
import store from './store/index' //挂载vuex

// 1. 导入 ant-design-vue 组件库
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

// 导入tailwind.css库
// import './tailwind.css'

Vue.config.productionTip = false

// 3. 安装组件库
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
