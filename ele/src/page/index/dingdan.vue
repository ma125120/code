<template>
  <div class="dingdan">
    <Top :title="'订单'"></Top>
    <section class='container no_login'>
      <img v-lazy="'./static/img/no_dingdan.gif'" alt=""  />
      <p class='title'>登陆后查看外卖订单</p>
      <router-link :to="{path:'/login'}" tag='div' class='login_btn'>
        立即登录
      </router-link>
    </section>
  </div>
</template>

<script>
import Top from '../../components/top.vue'
export default {
  name: 'dingdan',
  components: {
    Top
  },
  data () {
    return {
    
    }
  },
  computed: {
  
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$green:#56D176;
.dingdan {
  min-height:100vh;
  background:#F5F5F5;
}
.container {
  flex-direction:column;
}
.no_login{
  margin: 30% 0 0 0;
  img {
    width:50%;
  }
  .title {
    margin:3% 0;
  }
  .login_btn {
    width:25%;
    padding:3%;
    color:#fff;
    background:$green;
  }
} 

</style>
