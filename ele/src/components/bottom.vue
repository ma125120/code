<template>
  <div class="bottom">
    <footer class='container'>
      <router-link :to="{path:item.font}" v-for="item in info" tag='div' class='bot_item' 
        :class="{['active']:$route.name==item.font}">
        <i class="iconfont" :class="'icon-'+item.font"></i>
        <p>{{item.title}}</p>
      </router-link>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'bottom',
  data () {
    return {
      info:[
        {
          font:'waimai',
          title:'外卖'
        },
        {
          font:'faxian',
          title:'发现'
        },
        {
          font:'dingdan',
          title:'订单'
        },
        {
          font:'wode',
          title:'我的'
        },
      ]
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$active:#13A0FF;
footer {
  position: fixed;
  bottom:0;
  left:0;
}
.bot_item {
  width: 25%;
  font-weight:bold;
  font-size:0.5rem;
  padding: 0.5rem 0;
  background:#fff;
  &.active {
    color:$active;
  }
}
.iconfont {
  font-size:0.8rem;
}
</style>