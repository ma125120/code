<template>
  <section class="section1">
    <div id="search" class="outer">
      <img :src="'./static/img/tmail_home.gif'" />
      <div class="mail_search_div f_r">
        <div class="search_form">
          <input type="text" id="mail_search_input" placeholder="夏日必备船袜">
          <button id="mail_search_btn">搜索</button>
        </div>
       
        <ul>
          <li v-for="(item,i) in hot_word" :class="{gray_bor:i!=(hot_word.length-1)}">
          <a href="javascript:;" :class="{c_red:item.is_hot}">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <nav class="web_nav_col">
      <h2 class="special_nav">商品分类</h2>
      <ul class="main_nav">
        <li v-for="(item,i) in nav_list" :class="{large_size:(i==0||i==1),cart_img:i==0,inter_img:i==1}" @mouseenter="setIndex(i)" @mouseleave="initIndex">
        <transition name="slide">
          <img v-if="hover_index==i" src="../../assets/tmail_hover.svg" class="hover_img">
        </transition>
          {{item}}
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hover_index:"x",
      hot_word:[
        {
          name:"t恤男",is_hot:true,
        },{
          name:"连衣裙",is_hot:false,
        },{
          name:"夏凉被",is_hot:false,
        },{
          name:"电动牙刷",is_hot:true,
        },{
          name:"卧室灯",is_hot:false,
        },{
          name:"防晒衣",is_hot:false,
        },{
          name:"凉鞋",is_hot:true,
        },{
          name:"双肩包",is_hot:false,
        },{
          name:"口红",is_hot:false,
        },
      ],
      nav_list:["天猫超市","天猫国际","天猫会员","品牌街",
            "电器城","喵鲜生","医药馆","营业厅","魅力惠",
            "飞猪旅行","苏宁易购"],
    }
  },
  methods:{
    setIndex(i) {
      this.hover_index=i;
    },
    initIndex() {
      this.hover_index="x";
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
@mixin bef_img($url,$top) {
  content:url($url);
  top:$top;
  padding:0 3px;
}
.section1 {
  background: white;
}
.c_red {
  color:#c40000;
}
$c_myred:#c40000;
.section1 {
  text-align:left;
  margin:0;
}
.mail_search_div {
  min-width:625px;
  padding-top:38px;
  margin:0 auto;
  position: relative;
  top:0;
  right:380px;
  li {
    padding:0  8px;
    font-size:16px;
  }
  .search_form {
    margin-bottom: 5px;
  }
  input,button {
    display: inline-block;
    box-sizing: border-box;
    height:40px;
    line-height: 36px;
    vertical-align: middle;
    font-size:16px;
  }
  #mail_search_input {
    width:490px;
    border:2px solid $c_myred; 
    padding-left:5px;
  }
  #mail_search_btn {
    width:132px;
    letter-spacing:5px; 
    color:white;
    margin-left:-5px;
    border:none;
    font-size:18px;
    font-weight:500;
    background:$c_myred;    
  }
}
nav.web_nav_col {
  background: #DD2727;
  color:white;
  height:36px;
  line-height:36px;
  position: relative;
  h2:before {
      @include bef_img('../../assets/shop_list.png',3px);
      position: relative;
      padding:0 10px;
  }
  .main_nav {
    margin-left: 255px;
    width:1070px;
  }
  .main_nav li {
    padding:0 15px;
    position: relative;
  }
}
.cart_img:before {
  @include bef_img('../../assets/tmail_cart.png',4px);
  position: relative;
}
.inter_img:before {
  @include bef_img('../../assets/inter1.png',3px);
  position: relative;
}
.hover_img {
  position: absolute;
  width:41px;
  top:-10px;
  left:25%;
  margin:0 auto;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-active {
  transform: translateY(10px);
}
</style>
