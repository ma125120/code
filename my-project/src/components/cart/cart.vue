<template>
  <div class="carts">
    <div class="nav">
      <p id="l"><input type="checkbox" @click="selectAll(true)"
      :checked="allCheck"><span class="mid">全选</span>
      </p>
      <p class="col-4">商品</p>
      <p>单价</p>
      <p>数量</p>
      <p>小计</p>
    </div>
    <div class="cart_info" v-for="(cart,index) in carts">
      <p><input type="checkbox" :checked="cart.checked" @click="checkShop(cart)">
        <img :src="'./static/img/'+cart.productImg">
      </p>
      <div class="col-4">
        <p class="shop_name" @click="selectShop(cart.id)">{{cart.productName}}</p>
        <p class="shop_c_v">
        <span class="shop_color">颜色：{{cart.color}}</span><br>
        <span class="shop_version">尺码：{{cart.version}}</span>
        </p>
      </div>
      <p>{{cart.price|money}}</p>
      <p class="input">
        <button @click="delQuan(cart)">-</button>
        <input v-model="cart.quantity" type="text"
         @change="changePrice(cart)">
        <button @click="addQuan(cart)">+</button>
      </p>
      <p><strong>{{cart.prices|money}}</strong></p>
    </div>
    <div class="foot">
      <p id="foot_btn">
        <input type="checkbox" @click="selectAll(true)"
         :checked="allCheck"><span >全选</span>
        <a href="javascript:;" @click="selectAll(false)">取消全选</a>
      </p>
      <span id="total">总价为：<b id="red">{{totalMoney|money}}</b></span>
      <a href="javascript:;" id="cacl_btn">去结算</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cart',
  data () {
    return {
      carts:[],
      totalMoney:0,
      allCheck:0
    }
  },
  computed:{

  },
  methods:{
    caclMoney() {
      var money=0,len1=0,len2=this.carts.length;
      this.carts.forEach((item)=> {
        if(item.checked==true) {
          money+=item.prices;len1+=1;
        }
      });
      this.totalMoney=money;
      this.allCheck=len1==len2?1:0;
    },
    changePrice(cart) {
      if(cart.quantity<1) {
          cart.quantity=1;
      }
      cart.prices=cart.quantity*cart.price;
      this.caclMoney();
    },
    addQuan(cart) {
      cart.quantity-=0-1;
      cart.prices=cart.quantity*cart.price;
      this.caclMoney();
    },
    delQuan(cart) {
      if(cart.quantity>=2) {
        cart.quantity-=1;
        cart.prices=cart.quantity*cart.price;
        this.caclMoney();
      }
    },
    checkShop(cart) {
      if(typeof cart.checked=="undefined") {
        this.$set(cart,"checked",true);
      } else {
        cart.checked=!cart.checked;
      }
      this.caclMoney();
    },
    selectAll(flag) {
    if(this.allCheck&&flag==1) {
      this.selectAll(false);return false;
    }
      this.carts.forEach((item)=>{
        if(typeof item.checked=="undefined") {
          this.$set(item,"checked",flag);
        } else {
          item.checked=flag;
        }
      });
      this.caclMoney();
      return false;
    },
    selectShop:function(id) {
      this.$store.dispatch('selectShop',id);
      this.$router.push('/shop');
    }
  },
  beforeCreate () {
    this.$nextTick(function() {
      this.carts=this.$store.getters.getCart;
    });
  }
}
</script>
<style scoped>
  .cart_info img,
  .cart_info p,
  .cart_info input {
    vertical-align:top;
    text-align:left;
  }
  #l {
    text-align:left;
  }
  img {
    width:80px;
    height:80px;
  }
  div>p {
    display:inline-block;
    width:120px;
  }
  input[type=checkbox] {
    width:20px;
    height:20px;
  }
  p input {
    width:40px;
  }
  .col-4 {
    width:480px;
    display:inline-block;
    text-align:left;
  }
  .nav {
    background:#f3f3f3;
    font-size:14px;
  }
  .nav input,.nav span,.nav p {
    vertical-align:middle;
  }

  .carts {
    width:1200px;
    margin:0 auto;
  }
  .cart_info {
    border-top:2px solid #aaa;
  }
  .shop_name {
    font-size:14px;
    font-weight:bold;
    width:120px;
    margin-right:120px;
  }
  .shop_name:hover {
    color:#E3393B;
    cursor:pointer;
  }
  .shop_c_v {
    font-size:14px;
    color:gray;
    width:180px;
  }
  .input input,.input button {
    width:20px;
    height:30px;
    box-sizing:border-box;
  }
  .input input {
    width:30px;
  }
  .foot {
    position:relative;
    top:0;
    left:0;
    border:2px solid #f0f0f0;
    line-height:54px;
    height:54px;
  }
  .foot {

  }
  #foot_btn {
    position:absolute;
    top:-30%;
    left:102px;
    width:200px;
  }
  .foot * {
    vertical-align:middle;
    display:inline-block;
  }
  #cacl_btn {
    background:#E64346;
    display:inline-block;
    width:100px;
    line-height:54px;
    color:white;
    font-size:20px;
    position:absolute;
    top:0;
    right:2px;
  }
  #total {
    position:absolute;
    top:0;
    right:150px;
  }
  #red {
    font-size:20px;
    color:#E64346;
  }
</style>
