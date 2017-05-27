// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyload from 'vue-lazyload'
import axios from 'axios';

import './css/my.css'
import './css/font/iconfont.css'

Vue.prototype.$http=axios;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/error.png',
  attempt: 1
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
