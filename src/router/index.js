import VueRouter from 'vue-router'
import Vue from 'vue'
import auth from '@/utils/auth'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
Vue.use(VueRouter)
//初始化
const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        {
            path: '/',
            component: Home,
            children: [
                { path: '/', component: Welcome }
            ]
        },
        //*通配符，以上规则都不满足，执行该规则
        { path: '*', component: NotFound }

    ]
})
//前置导航守卫
router.beforeEach((to,from,next)=> {
    //参数意义
    //to：跳转去的路由对象
    //from：来自哪个路由对象
    //next（） 放行
    //next（'/login'）拦截到登录路由
    if (to.path !== '/login' && !auth.getUser().token) return next('/login')
    //其他情况放行
    next()
})
export default router