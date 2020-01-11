import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入vant组件库
import 'vant/lib/index.css' // 样式文件

// 全局注册  实际上调用了 Vant导出的对象的方法  install方法
// 一旦完成注册 在任意位置就可以使用Vant组件库的组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
