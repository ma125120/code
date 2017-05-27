<template>
  <div class="aside_nav">
    <nav>
      <ul>
        <li @click="returnTop" v-for="(item,index) in li_class" class="iconfont" :class="{gray_bot_bor:index==1||index==0,['li'+index]:true,hg_r:index==1}">
          <span  class="rect_span" :class="'icon-'+item"><span v-if="index==1" class="gouwuche">购物车</span></span>    
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      li_class:["tianmao01","tianmaochaoshigouwuche","renminbi1","shoucang","wujiaoxing","wokanguode","chong","yonghufankui03","erweima01","top"],
    }
  },
  methods:{
    returnTop() {
      document.body.scrollTop=0;
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
.aside_nav {
  position: fixed;
  top:0;
  right:0;
  width:35px;
  height:100%;
  background: black;
  z-index:100;
  color:white;
  text-align: center;
}

.aside_nav li {
  width:35px;
  overflow: hidden;
  font-size:20px;
}
.iconfont:before {
  padding:0;
}
.rect_span {
  display: inline-block;
  box-sizing: border-box;
  width:35px;
  height:35px;
  padding:6px 0 0 0;
}

.li0 {
  padding:80px 0 5px 0;
  display: inline-block;
}
.li1 {
  padding:4px 0 8px 0;
}
.li2,.li3,.li4,.li5 {
  padding:5px 0;
}
.li7 {
  padding-top:40px;
}
.icon-tianmaochaoshigouwuche {
  color:red;
}
.gouwuche {
  font-size:12px;
  width:30px;
  padding-left:2px;
  letter-spacing: 4px;
  display: inline-block;
  color:white;
}

.rect_span:hover,
li.hg_r:hover {
  background: red;
  color:white;
}
</style>
