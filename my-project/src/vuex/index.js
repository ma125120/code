import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    products:[],
    shop:"",
    cart:[]
  },
  getters:{
    getShop:state=>{
      return state.products.filter(item=>item.productId==state.shop)[0];
    },
    getCart:state=>{
      return state.cart.map(({id,quantity,color,version,price})=>{
        var data=state.products.filter(item=>id==item.productId);
        return {
          productName:data[0].productName,
          productImg:data[0].productImg[0],
          quantity:quantity,
          color:color,
          version:version,
          prices:quantity*price,
          price:price,
          id:data[0].productId
        };
      });
    }
  },
  mutations:{
    getData(state,payload) {
      state.products=payload.data;
    },
    selectShop(state,payload) {
      state.shop=payload;
    },
    addToCart({cart},payload) {
      for(let i=0,len=cart.length;i<len;i++) {
        if(cart[i].id==payload.id&&cart[i].color==payload.color&&cart[i].version==payload.version) {
          cart[i].quantity+=payload.quantity;
          return false;
        }
      }
      cart.push(payload);
    }
  },
  actions:{
    getData({commit},data) {
        commit('getData',{data:data});
    },
    selectShop({commit},id) {
        commit('selectShop',id);
    },
    addToCart({commit},shop) {
      commit('addToCart',shop);
    }
  }
})
