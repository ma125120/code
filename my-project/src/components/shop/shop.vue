<template>
  <div class="shop">
    <div id="shopImg">
      <img :src="'./static/img/'+shop.productImg[imgIndex]" id="mainImg">
      <img v-for="(image,index) in shop.productImg"
      :class="{redBor:index==imgIndex}"
      @click="imgIndex=index"
      :src="'./static/img/'+image">
    </div>
    <div id="shopInfo">
      <p class="shopName">{{shop.productName}}</p>
      <p class="redColor size3">{{shop.describe}}</p>
      <p id="price">
        <span class="left_span">京东价 </span>
        <span class="redColor size6">{{shop.price[versionIndex]|money}} </span>
      </p>
      <p >
        <span class="left_span">支持 </span>
        <span class="size4 bor margin1" v-for="support in shop.support">{{support}} </span>
      </p>
      <p>
        <span class="left_span">重量 </span>
        <span class="size4" >{{shop.weight+"kg"}}</span>
      </p>
      <p>
        <span class="left_span">选择颜色 </span>
        <span class="size4 bor margin1 padding1 col-2" :class="{'redBor':index==colorIndex}"
        @click="colorIndex=index" v-for="(color,index) in shop.color">{{color}}</span>
      </p>
      <p>
        <span class="left_span">选择版本 </span>
        <span class="size4 bor margin1 padding1"   :class="{'redBor':index==versionIndex}"
        @click="versionIndex=index" v-for="(version,index) in shop.version">{{version}}</span>
      </p>
      <p>
        <span class="left_span">选择套装 </span>
        <span class="size4 bor margin1 padding1" :class="{'redBor':index==suitIndex}"
        @click="suitIndex=index" v-for="(suit,index) in shop.suit">{{suit}}</span>
      </p>
      <p>
        <span class="left_span">白条免息 </span>
        <span class="size4 bor margin1 padding1" :class="{'redBor':0==whiteIndex}"
         @click="whiteIndex=0">30天免息</span>
        <span class="size4 bor margin1 padding1" :class="{'redBor':index+1==whiteIndex}"
        @click="whiteIndex=index+1" v-for="(arr,index) in whiteArr">
        {{(shop.price[versionIndex]/arr+shop.price[versionIndex]*0.005)|money}}{{"x"+arr+"期"}}</span>
      </p>
      <button @click="delQuan">-</button>
      <input  v-model="quantity">
      <button @click="addQuan">+</button>
      <button id="cart_btn"
      @click="addToCart({id:shop.productId,quantity:quantity,
                color:shop.color[colorIndex],
                price:shop.price[versionIndex],
                version:shop.version[versionIndex]})" >
      加入购物车</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'shop',
  data(){
    return {
      quantity:1,
      imgIndex:0,
      colorIndex:0,
      versionIndex:0,
      suitIndex:-1,
      whiteIndex:-1,
      whiteArr:[3,6,12]
    }
  },
  computed:{
    shop:function(){
      return this.$store.getters.getShop;
    }
  },
  methods:{
    addToCart:function(data) {
      this.$store.dispatch('addToCart',data);
      this.$router.push('/cart');
    },
    addBor:function(e) {
      console.log(e.toElement.classList.add("redBor"));
    },
    addQuan:function() {
      this.quantity-=0-1;
    },
    delQuan:function() {
      if(this.quantity>=2) {
        this.quantity-=1;
      }
    },
  }
}
</script>
<style  scoped>
div,span,p {
text-align:left;
padding:0;
}
.shop {
width:92%;
margin:0 auto;
}
.left_span {
letter-spacing:4px;
color:gray;
margin-left:10px;
padding:5px;
font-size:12px;
text-align:center;
}

.bor,#mainImg:hover {
padding:1px;
border:1px solid gray;
border-radius:5px;
color:#666;
}
.redBor,img:hover {
border:2px solid red;
}

.margin1 {
margin-left:10px;
}
.padding1 {
padding:5px
}
.size3 {
font-size:13px;
}
.size4 {
font-size:16px;
display:inline-block;
text-align:center;
}
.size5 {
font-size:20px;
}
.size6 {
font-size:24px;
}
.size4:hover {
cursor:pointer;
border:2px solid #df3033;
}
.shopName {
font-size:18px;
font-weight:bold;
}
.col-2 {
width:50px;
}
#shopImg {
width:480px;
display:inline-block;
}
#mainImg {
  width:450px;
  padding-bottom:10px;
}
img {
  width:85px;
  margin-right:6px;
}
button,input {
display:inline-block;
width:16px;
padding:0;
text-align:center;
height:36px;
box-sizing:content-box;
}
input {
width:36px;
}
#cart_btn {
width:142px;
height:46px;
padding:auto 26px;
background:#df3033;
font-size:20px;
color:white;
}
#shopInfo {
display:inline-block;
vertical-align:top;
line-height:32px;
}
.redColor {
color:#DF3033;
}
#price {
background:#F3F3F3;
line-height:36px;
}
p span {
vertical-align:middle;
}
</style>
