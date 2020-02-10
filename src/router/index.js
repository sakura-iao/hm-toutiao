import VueRouter from 'vue-router'
import Vue from 'vue'
import auth from '@/utils/auth'
import Article from '@/views/article'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/article', component: Article }
    ]
})
export default router