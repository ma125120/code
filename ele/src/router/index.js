import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import search from '../page/search/search.vue'
import choose_addr from '../page/search/choose_addr.vue'
import scroll from '../components/scroll.vue'

import login from '../page/login/login.vue'
import waimai from '../page/index/waimai.vue'
import dingdan from '../page/index/dingdan.vue'
import my from '../page/index/my.vue'
import faxian from '../page/index/faxian.vue'

import {setStore,getStore} from '../source/mUtils.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/',
          redirect: '/waimai'
        },
        {
          path:'/waimai',
          name:'waimai',
          component:waimai
        },
        {
          path:'/dingdan',
          name:'dingdan',
          component:dingdan
        },
        {
          path:'/faxian',
          name:'faxian',
          component:faxian
        },
        {
          path:'/wode',
          name:'wode',
          component:my
        },
      ]
    },
    {
    	path:'/search',
    	name:'search',
    	component:search
    },
   	{
    	path:'/choose_addr',
    	name:'choose_addr',
    	component:choose_addr
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
});
router.beforeEach((to, from, next) => {
	setStore('from',from.path);
  document.body.scrollTop=0;
	next();
});
export default router;
