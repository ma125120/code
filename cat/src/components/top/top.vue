<template>
  <div class="top">
    <div class="top_info">
      <slot name=""></slot>  
      <p class="login_info">
        <span>喵，欢迎来天猫</span>
        <router-link to="/login" class="h_r" id="home_login">请登录</router-link>
        <router-link to="/signup" class="h_r" id="home_signup">免费注册</router-link>
      </p>
      <div class="quick_menu">
        <ul>
          <li class="h_r" :class="{bg_white:flag.is_my_tmail}" @mouseenter="setChange('is_my_tmail')" @mouseleave="initChange('is_my_tmail')"><span class="down_arrow">我的淘宝</span>
          <div v-if="flag.is_my_tmail" class="my_tmail_div"><p>已买到的宝贝</p>
          <p>已卖出的宝贝</p></div></li>
          <li class="h_r my_love">我关注的品牌 </li>
          <li class="h_r my_cart">购物车0件 </li>
          <li class="h_r my_collect down_arrow" :class="{bg_white:flag.is_my_collect}" @mouseenter="setChange('is_my_collect')" @mouseleave="initChange('is_my_collect')">收藏夹 <div v-if="flag.is_my_collect" class="my_tmail_div"><p>收藏的宝贝</p>
          <p>收藏的店铺</p></div></li>  
          <li class="h_r my_mobile" :class="{bg_white:flag.is_my_mobile}" @mouseenter="setChange('is_my_mobile')" @mouseleave="initChange('is_my_mobile')">手机版
          <img src="../../assets/img/tmail_mobile.png" v-if="flag.is_my_mobile" class="my_tmail_div tmail_mobile">
           </li>
           <li class="h_r" >淘宝网 </li>
          <li class="h_r my_com_shop">企业购 </li>
          <li class="h_r com_support down_arrow" :class="{bg_white:flag.is_com_support}" @mouseenter="setChange('is_com_support')" @mouseleave="initChange('is_com_support')">商家支持
          <div v-if="flag.is_com_support" class="my_tmail_div com_support_div">
            <b>商家：</b>
            <ul class="dash_line">
              <li v-for="item in com_center">{{item}}</li>
            </ul>
            <b>帮助：</b>
            <p>帮助中心</p>
          </div>
          </li>
          <li class="h_r web_nav down_arrow" :class="{bg_white:flag.is_web_nav}" @mouseenter="setChange('is_web_nav')" @mouseleave="initChange('is_web_nav')">网站导航 </li>
        </ul>
      </div>
    </div>
    <div class="web_nav_div clear_fix" v-if="flag.is_web_nav" @mouseleave="initChange('is_web_nav')" @mouseenter="setChange('is_web_nav')">
        <div class="site_cont site_bor" id="site_hot">
          <h2 class="hot">热点推荐 HOT</h2>
          <ul>
            <li v-for="item in web_navs.hot_commend" class="hot_hov">{{item}}</li>
          </ul>
        </div>
        <div class="site_cont site_bor" id="site_market">
          <h2 class="market_blue">行业市场 Market</h2>
          <ul>
            <li v-for="item in web_navs.business_market" class="market_blue_hov">{{item}}</li>
          </ul>
        </div>
        <div class="site_cont site_bor" id="site_brand">
          <h2 class="brand">品牌风尚 Brand</h2>
          <ul>
            <li v-for="item in web_navs.brand_fashion" class="brand_hov">{{item}}</li>
          </ul>
        </div>
        <div class="site_cont " id="site_service">
          <h2 >服务指南 Help</h2>
          <ul>
            <li v-for="item in web_navs.service_help" class="gray_hov">{{item}}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      flag:{is_my_tmail:false,
            is_my_collect:false,
            is_my_mobile:false,
            is_com_support:false,
            is_web_nav:false},
      com_center:["商家中心","商家入驻","运营服务","商家品控",
                  "商家工具","商家规则","天猫智库","喵言喵语"],
      web_navs:{
        hot_commend:["天猫超市","喵先生","科技新品","女装新品",
                    "酷玩街","内衣新品","试美装","运动新品",
                    "时尚先生","精明妈咪","吃乐会","企业采购","会员积分","天猫国际"],
        business_market:["美妆","电器","女装","男装",
                    "女鞋","男鞋","内衣","箱包","运动","母婴",
                    "家装","食品","配饰","汽车"],
        brand_fashion:["尚天猫","大牌街","潮装街","天猫原创",
                    "什么牌子好"],
        service_help:["帮助中心","品质保障","特色服务","7天退换货"],
      },
    }
  },
  methods:{
    setChange(state) {
      this.$data.flag[state]=true;
    },
    initChange(state) {
      this.$data.flag[state]=false;
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
@mixin w($width) {
  width:$width;
}

div {
  font-size:12px;
  color:gray;
}
.top {
  width:100%;
  background: #F2F2F2;
  height:32px;
  line-height:32px;
  text-align:left;
}
.top_info {
  width:1280px;
  margin:0 auto;
  li {
      padding:0 10px 0 10px;
  }
}

.quick_menu {
  min-width:760px;
  height:32px;
  line-height:32px;
  position: absolute;
  top:1px;
  right:40px;
}

#home_login {
  padding:0 10px 0 20px;
}
#home_signup {
  padding:0 10px 0 10px;
}
/*列表隐藏层*/
.my_tmail_div {
  position: absolute;
  z-index:100;
  background:white;
  min-width:94px;
  left:0;
  line-height:24px;
  border:thin solid rgba(128,128,128,0.1);
  border-top:none;
  p {
    padding:0 10px;
    margin:2px 0;
  }
}

.tmail_mobile {
  left:-50px;
  padding-bottom: 5px;
}
.com_support_div {
  width:144px;
  padding:0 3px;
}
b {
  padding-left:10px;
}
.bg_white{
  background:white;
}
.my_tmail_div p:hover,
.my_tmail_div li:hover {
  color:red;
  text-decoration:underline;
}
.dash_line {
  border-bottom: thin dashed gray;
}

/*各列表项图标*/
.my_love:before {
  content:url('../../assets/my_love.png');
  position: relative;
  top:3px;
}
.my_cart:before {
  content:url('../../assets/my_cart.png');
  position: relative;
  top:2px;
  left:-2px;
}
.my_mobile:before {
  content:url('../../assets/my_mobile.png');
  position: relative;
  top:3px;
}
.down_arrow:after{
  content:url('../../assets/down_arrow.png');
  position: relative;
  top:2px;
}
.web_nav:before{
  content:url('../../assets/web_nav.png');
  position: relative;
  top:2px;
}

.site_cont {
  padding-left:30px;
  overflow: hidden;
  height:200px;
  float:left;

  li {
    @include w(90px);
  } 
  h2 {
    padding-top:5px;
  }
}

.web_nav_div {
  position:absolute;
  width:1200px;
  left:74px;
  border:thin solid rgba(128,128,128,0.1);
  padding:15px 0;
  z-index:100;
  background:white;
}
.site_bor.site_bor {
  border-right:1px solid #f5f5f5;
}
.hot {
  color: #f56a00;
}
.market_blue {
  color: #2263d4;
}
.brand {
  color: black;
}
.hot_hov:hover {
  color: #f56a00;
  text-decoration: underline;
}
.market_blue_hov:hover {
  color: #2263d4;
  text-decoration: underline;
}
.brand_hov:hover {
  color: black;
  text-decoration: underline;
}
.gray_hov:hover {
  color: gray;
  text-decoration: underline;
}


#site_hot {
  @include  w(275px);
}
#site_market {
 @include w(375px);
}
#site_brand {
  @include w(275px);
}
#site_service {
  width:150px;
}
</style>
