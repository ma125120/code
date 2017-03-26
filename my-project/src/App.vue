<template>
  <div id="app">
    <a href="javascript:;" @click="goToFirst" class="first_btn" id="btn1">
    <img :src="'./static/img/logo.jpg'"></a>
    <a href="javascript:;" @click="goCart" class="first_btn" id="btn2">
    <img :src="'./static/img/gouwuche.jpg'"></a>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
var ximin={
  methods:{
    goCart() {
      this.$router.push('/cart');
    },
    goToFirst() {
      this.$router.push('/');
    }
  }
}
export default {
  name: 'app',
  mixins: [ximin],
}
</script>

<style>
#app {
  font-family: '宋体', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  position:relative;
  top:0;
  left:0;
}
a {
  text-decoration:none;
  color:black;
}
.first_btn {
  position:relative;
  top:0;
}
#btn1 {
  right:500px;
}
#btn2 {
  left:400px;
}
.first_btn img  {
  width:100px;
}
</style>
