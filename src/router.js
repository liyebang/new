import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/index'
import User from './pages/user'
import Id from './pages/id'
import Vuex from './pages/vuex'
import ElementUI from './pages/ElementUI'
import Axios from './pages/axios'
import Test from './pages/test'

let routes =[
    {path:'/',component:Index},
    {path:'/user',component:User},
    {path:'/vuex',component:Vuex},
    {path:'/ElementUI',component:ElementUI},
    {path:'/axios',component:Axios},
    {path:'/test',component:Test},
    {path:'/id/:id',component:Id}
]

let router = new VueRouter({routes})

export default router
