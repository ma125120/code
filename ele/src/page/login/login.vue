<template>
  <div class="login gray_bg">
    <div class="top container">
      <img :src="'./static/img/back.svg'" alt="" @click='back' class='top_img'  /> 
      <p class='title'>{{loginWay?'登录':'密码登录'}}</p>
      <p class='change' @click='reserve'>{{loginWay?'密码登录':'短信登录'}}</p>
    </div>
    <div class="main m_login" v-if='loginWay'>
      <section class='full b_t_b white_bg'>
        <input  placeholder="手机号" v-model="mobile" class='mobile'>
        <button :class='{green:btn_class=="green"}' @click='send_num'>{{info}}</button>
      </section>
      <section class='full b_t_b white_bg'>
        <input  placeholder="验证码" v-model="m_pwd" class='full_input'>
      </section>
      <section class="bottom">
        <div class="tip">
          温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表你同意<span class="xieyi">《商家服务协议》</span>
        </div>
        <div class="login_btn">
          <button id='login'>
            登录
          </button>
        </div>
      </section>
      <section class="about">
        关于我们
      </section>
    </div>
    <div class="main u_login" v-else>
      <section class='full b_t_b white_bg'>
        <input  placeholder="手机/邮箱/用户名" v-model="username" class='full_input'>
      </section>
      <section class='full b_t_b white_bg'>
        <input  placeholder="密码" v-model="m_pwd" class='full_input'>
      </section>
      <section class="bottom">  
        <div class="login_btn">
          <button id='login'>
            登录
          </button>
        </div>
      </section>
      <section class="about">
        关于我们
      </section>
    </div>
  </div>
</template>

<script>
import {setStore,getStore} from '../../source/mUtils.js'

export default {
  name: 'login',
  components: {
    
  },
  data () {
    return {
      loginWay:true,
      username:'',
      password:'',
      mobile:'',
      m_pwd:'',
      btn_class:'f',
      info:'获取验证码'
    }
  },
  methods:{
     back() {
      var r=this.$router;
      r.push({path:getStore('from'), query:{back1:true}})   
    },
    reserve() {
      this.loginWay=!this.loginWay;
    },
    send_num() {
      if(this.btn_class=='green') {
        this.btn_class='f';
        var num=6,tId=setInterval(()=> {
          num--;
          if(num<=0) {
            clearInterval(tId);
            this.btn_class='green';
            this.info='重新获取';
          } else {
            this.info='已发送（'+num+'s）';
          }
        },1000);
      } else {

      }
      return false;
    }
  },
  computed: {
  
  },
  watch:{
    mobile:function(newV) {   
      if(typeof parseInt(newV)=='number'&&newV.length==11) {
        this.btn_class='green'
      } else {
        this.btn_class='f'
      }
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$gray:#ddd;
input,
button {
  padding:0.5rem;
}
.top {
  line-height: 2rem;
  font-size:0.8rem;
  color:#fff;
  background:#0097FF;
  border-bottom:#808080;
  img {
    vertical-align: text-bottom;
    position: absolute;
    left:0.5rem;
    width:0.8rem;
    top:0.6rem;
    font-weight:bold;
  }
  .change {
    position:absolute;
    right:0.5rem;
    top:0;
    font-size:0.7rem;
  }
  margin-bottom:1rem;
}


.main {
  .full {
    .mobile {
      width:60%;
      padding:0.5rem 0
    }
    button {
      padding:0.2rem;
      color:#fff;
      flex:1;
    }
  }
}

.bottom {
  width:92%;
  margin:1rem auto;
  #login {
    width:100%;
    display:inline-block;
    background:#00D762;
    color:#fff;
  }

}
.green {
  background:#00D762;
}
.about {
    color:#999;
    font-size:0.5rem
}
.tip {
  font-size:0.5rem;
  text-align:left;
  color:#999;
  margin:0.5rem 0;
  .xieyi {
    color:#67f;
  }
}


.full_input {
  width:100%;
  padding-left:1.15rem;
}

</style>
