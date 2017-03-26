<template>
  <div class="shop_show" @click="selectShop(item.productId)">
    <img :src="'./static/img/'+item.productImg[0]">
    <p class="shop_name" :title="item.productName">{{item.productName}}</p>
    <p class="red">{{item.price[0]|money}}</p>
  </div>
</template>

<script>
export default {
  name: 'shop_show',
  data () {
    return {
      msg1: '欢迎来到VUEJS APP 2.0'
    }
  },
  props:['item'],
  methods:{
    selectShop:function(id) {
      this.$store.dispatch('selectShop',id);
      this.$router.push('/shop');
    }
  }
}
</script>


<style scoped>
.shop_show {
  padding:10px;
  border:thin solid gray;
  width:29%;
  float:left;
  overflow:hidden;
  margin-right:20px;
  margin-bottom:20px;
}
.shop_show:hover {
  color:#E4393C;
  cursor:pointer;
}
img {
  width:250px;
  height:250px;
}
.red {
  color:red;
  font-size:20px;
}
.shop_name {
  line-height:18px;
  height:36px;
  overflow:hidden;
}
</style>
