<template>
  <div class="search">
    <div class="top">
      <svg t="1498233133667" @click='back' class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2381" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M239.780953 512.051164c0-9.004897 3.376836-18.009793 10.232837-24.865794l474.291996-474.291996c13.712002-13.712002 35.917258-13.712002 49.62926 0s13.712002 35.917258 0 49.62926l-449.426202 449.52853 449.426202 449.426202c13.712002 13.712002 13.712002 35.917258 0 49.62926s-35.917258 13.712002-49.62926 0l-474.291996-474.291996C243.15779 529.958629 239.780953 520.953732 239.780953 512.051164z" p-id="2382" fill="#606060"></path></svg>
      <input type="search" placeholder="请输入商品名称" class="cir i_b">
    </div>
    <div class="bottom">
      <h1>热门搜索</h1>
      <p class='gray'>
        正在加载中...
      </p>
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
  background: #fff;
  height: 100%;
}
.search {
  width:100%;
  height:100%;
  background:#fff;
}
.top {
  line-height: 2.4rem;
  font-size:0.8rem;
  svg {
    vertical-align: middle;
    width:0.8rem;
    font-weight:bold;
    padding-right: 10px;
  }
  .addr {
  color:#fff;
  }
}

input.cir {
  width:80%;
  line-height: 1.4rem;
  font-size:0.7rem;
  padding-left:0.5rem;
  margin:0.5rem 0;
  background: #F8F8F8;
}

.bottom {
  h1 {
    font-size:0.8rem;
    text-align: left;
    padding-left:20px;
    margin:20px 0;
  }
  .gray {
    font-size:0.6rem;
  }
}
</style>