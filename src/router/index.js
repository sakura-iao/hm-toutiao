import VueRouter from 'vue-router'
import Vue from 'vue'
//导入组件
import Login from '@/views/login'
Vue.use(VueRouter)
//初始化
const router = new VueRouter({
    routes: [
        {
            path: '/login', component: Login
        }
    ]
})
//导出
export default router