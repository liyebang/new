import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/index'
import User from './pages/user'
import Id from './pages/id'
import Vuex from './pages/vuex'

let routes =[
    {path:'/',component:Index},
    {path:'/user',component:User},
    {path:'/vuex',component:Vuex},
    {path:'/id/:id',component:Id}
]

let router = new VueRouter({routes})

export default router
