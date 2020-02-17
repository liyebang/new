import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Index from './pages/index'
// import User from './pages/user'
// import Id from './pages/id'
// import Vuex from './pages/vuex'
// import ElementUI from './pages/ElementUI'
// import Axios from './pages/axios'
// import Test from './pages/test'
// import Me from './pages/me'


const Index = () => import(/* webpackChunkName: "group-foo" */ './pages/index.vue')
const User = () => import(/* webpackChunkName: "group-foo" */ './pages/user.vue')
const Id = () => import(/* webpackChunkName: "group-foo" */ './pages/id.vue')
const Vuex = () => import(/* webpackChunkName: "group-foo" */ './pages/vuex.vue')
const ElementUI = () => import(/* webpackChunkName: "group-foo" */ './pages/ElementUI.vue')
const Axios = () => import(/* webpackChunkName: "group-foo" */ './pages/axios.vue')
const Test = () => import(/* webpackChunkName: "group-foo" */ './pages/test.vue')
const Me = () => import(/* webpackChunkName: "group-foo" */ './pages/me.vue')
const Xzfz = () => import(/* webpackChunkName: "group-foo" */ './pages/xiazaifenzhi.vue')






let routes =[
    {path:'/',component:Index},
    {path:'/user',component:User},
    {path:'/vuex',component:Vuex},
    {path:'/ElementUI',component:ElementUI},
    {path:'/axios',component:Axios},
    {path:'/test',component:Test},
    {path:'/id/:id',component:Id},
    {path:'/me',component:Me},
    {path:'/xzfz',component:Xzfz}

]

let router = new VueRouter({routes})


router.beforeEach((to, from, next) => {
    if(to.path === '/axios'){
        alert('前往axios页面')
    }
    next()
  })

export default router
