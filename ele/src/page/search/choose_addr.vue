<template>
  <div class="search">
    <div class="top">
      <img :src="'./static/img/back.svg'" alt="" @click='back' /> 
      <span class='addr'>选择地址</span>
    </div>
    <div class="input">
      <input type="search" placeholder="请输入地址" class="cir i_b">
    </div>
    
  </div>
</template>

<script>
import {setStore,getStore} from '../../source/mUtils.js'
export default {
  name: 'search',
  data() {
    return {
      back1:'',
    }
  },
  methods:{
    back() {
      var r=this.$router;
      r.push({path:getStore('from'), query:{back1:true}})   
    }
  },
  mounted() {
    
  }
}
</script>

<style lang='scss' scoped>
$lightblue:#0096FF;
html,body {
  width:100%;
  height:100%;
  background:#f4f4f4;
}
.search {
  width:100%;
  height:100%;
  background: $lightblue;
}
.top {
  line-height: 2rem;
  font-size:0.8rem;
  img {
    vertical-align: text-bottom;
    position: absolute;
    left:0.5rem;
    width:0.8rem;
    top:0.6rem;
    color:#fff;
    font-weight:bold;
  }
  .addr {
  color:#fff;
  }
}

input.cir {
  width:90%;
  height:1.2rem;
  font-size:0.6rem;
  padding-left:0.5rem;
  margin:0.5rem 0;
}

</style>