<template>
  <div class="my gray_bg">
    <header class='blue'>
      <div class="top_info">
        <img v-lazy="'./static/img/back.svg'" alt="" @click='back' /> 
        <span class='addr'>我的</span>
      </div>
      <router-link tag='div' class="login container" to='/login'>
        <div class="img">
          <img v-lazy="'./static/img/login.png'" alt="" />
        </div>
        <div class="text">
          <h2>登录/注册</h2>
          <p class="tip">
            登陆后享受更多特权
          </p>
        </div>
        <div class='img_r'>
          <img v-lazy="'./static/img/back.svg'" alt="" class='rotate180' /> 
        </div>
      </router-link>
    </header>
    <div class="item container white_bg">
      <div class='half b'>
        <img v-lazy="'./static/img/pre.svg'" alt="">
        <p>优惠</p>
      </div>
      <div class='half'>
        <img v-lazy="'./static/img/credit.svg'" alt="">
        <p>积分</p>
      </div>
    </div>
    <div class="profile">
      <router-link v-for="item in aside1" class='container white_bg' tag='aside' :to="item.path">
        <img v-lazy="item.src" alt="" class='left' />
        <p class='title'>{{item.title}}</p>
        <img v-lazy="'./static/img/back.svg'" alt="" class='right rotate180' /> 
      </router-link>
    </div>
    <div class="profile">
      <router-link v-for="item in aside2" class='container white_bg' tag='aside' :to="item.path">
        <img v-lazy="item.src" alt="" class='left' />
        <p class='title'>{{item.title}}</p>
        <img v-lazy="'./static/img/back.svg'" alt="" class='right rotate180' /> 
      </router-link>
    </div>
  </div>
</template>

<script>
import {setStore,getStore} from '../../source/mUtils.js'
import Rate from '../../components/rate.vue'
export default {
  name: 'hello',
  components: {
     Rate 
  },
  data() {
    return {
      back1:'',
      aside1:[
        {
          src:'./static/img/svg/dingdan.svg',
          title:'我的订单',
          path:'/dingdan'
        },
        {
          src:'./static/img/svg/mail.svg',
          title:'积分商城',
          path:'/mail'
        },
        {
          src:'./static/img/svg/vip.svg',
          title:'饿了么会员卡',
          path:'/vip'
        },
      ],
      aside2:[
        {
          src:'./static/img/svg/ser.svg',
          title:'服务中心',
          path:'/ser'
        },
        {
          src:'./static/img/svg/down.svg',
          title:'下载饿了么APP',
          path:'/down'
        },
      ]
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

.top_info {
  line-height: 2rem;
  font-size:0.8rem;
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
header .container {
  justify-content: flex-start;
}
.login {
  color:#fff;
  text-align:left;
  .img {
    img {
      padding:0.4rem 0.6rem;
      width:2.5rem
    }
  }
  .text {
    margin-left:1rem;
    h2 {
      font-size:1rem;
    }
    .tip {
      font-size:0.6rem;
      padding:0.4rem 0;
    }
  }
  .img_r {
    flex:1;
    text-align:right;
    padding-right:0.5rem
  }
  .rotate180 {
    width:0.8rem;
  }
}

.item {
  font-size:0.6rem;
  .half {
    padding:1rem 0;
  }
  img {
    width:1rem; 
  }
  .b {
    border-right:thin solid #c4c4c4
  }
}

.profile {
  text-align: left;
  margin-top:0.5rem;
  aside {
    img {
      width:0.8rem;
      padding:0.5rem
    }
    .title {
      width:70%;
    }
  }
}
</style>
