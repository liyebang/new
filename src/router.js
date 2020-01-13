import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/index'

let routes =[
    {path:'/',component:Index}
]

let router = new VueRouter({routes})

export default router;