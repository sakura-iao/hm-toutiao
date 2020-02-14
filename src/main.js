// 导包（第三方|自己的）
import Vue from 'vue'
import App from './App.vue'
// 导入 路由
import router from '@/router'
//导入el组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
// 导入 axios
import axios from 'axios'

// 挂载 $http 对象就是axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
// 配置vue框架的日志级别  productionTip
// fasle 不是生产环境级别日志，开发环境日志，日志详细
// true 生产环境级别日志，上线之后部署服务器之后，日志简单
Vue.config.productionTip = false
//挂载$http对象
Vue.prototype.$http = axios
// 根实例
// 使用App.vue组件渲染到 #app容器中
//挂载
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// main.js的职责
// 1. 依赖项目需要的资源 (公用功能模块，需要导入main.js)
// 2. 创建一个Vue根实例
