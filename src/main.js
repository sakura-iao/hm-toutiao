import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from '@/router'
//引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
// 导入 axios
import axios from 'axios'

// 挂载 $http 对象就是axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
