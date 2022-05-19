import Vue from 'vue'
import App from './App.vue'
import router from './router' // 挂载路由
import store from './store/index' //挂载vuex

// 导入tailwind.css库
import './tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
