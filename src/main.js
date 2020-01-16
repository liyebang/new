import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

import router from './router'
import store from './store/index'

import axios from './axios'
Vue.prototype.$axios = axios;



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
