import Vue from 'vue'
import Router from 'vue-router'
import shops from '@/components/shop_show/shops'
import shop from '@/components/shop/shop'
import cart from '@/components/cart/cart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shops',
      component: shops
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
