<template>
  <div class="top_header">
      <img :src="'./static/img/back.svg'" alt="" @click='back' /> 
      <span class='addr'>{{title}}</span>
  </div>
</template>

<script>
import {setStore,getStore} from '../source/mUtils.js'
export default {
  name: 'top_header',
  props:['title'],
  data () {
    return {
    
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top_header {
  line-height: 2rem;
  font-size:0.8rem;
  background:#0097FF;
  border-bottom:#808080;
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
</style>
