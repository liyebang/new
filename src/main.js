import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

import router from './router'
<<<<<<< HEAD
import store from './store/index'




new Vue({
  render: h => h(App),
  router,
  store
=======

new Vue({
  render: h => h(App),
  router
>>>>>>> origin/master
}).$mount('#app')
