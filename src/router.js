import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/index'
<<<<<<< HEAD
import User from './pages/user'
import Id from './pages/id'
import Vuex from './pages/vuex'
import ElementUI from './pages/ElementUI'

let routes =[
    {path:'/',component:Index},
    {path:'/user',component:User},
    {path:'/vuex',component:Vuex},
    {path:'/ElementUI',component:ElementUI},
    {path:'/id/:id',component:Id}
=======

let routes =[
    {path:'/',component:Index}
>>>>>>> origin/master
]

let router = new VueRouter({routes})

<<<<<<< HEAD
export default router
=======
export default router;
>>>>>>> origin/master
