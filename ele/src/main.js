// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import './source/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http=axios;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/error.png',
  attempt: 1
})

Vue.config.productionTip = false;

window.toTop=function() {
	document.body.scrollTop=0;
}
Vue.filter('price',function(v) {
	return '￥'+v;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
