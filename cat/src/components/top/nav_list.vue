<template>
  <div class="nav_list outer">
    <nav class="top_right_nav outer">
      <h2 class="f_l"><img src="../../assets/img/zhibo/left1.jpg"></h2>
      <ul class="top_right_ul">
        <li v-for="i in 23" class="p_r" @mouseenter="setIndex(i-1)" @mouseleave="initIndex">
          <img v-lazy="'./static/img/zhibo/top_right_'+i+'.jpg'" /> 
          <transition name="fade">
            <div class="hide_modal c_a" v-if="(i-1)==top_right_index">
            <p class="iconfont icon-shoucang icon"></p>
            <p>{{right_hover[i-1]}}</p>
            <a href="javascript:;" class="top_right_a">点击进入</a>
          </div>
          </transition>        
        </li>
      </ul>
    </nav>
    <nav class="bottom_nav f_l" v-for="(item,i) in bottom_nav" :class="{margin_right:i!=4}">
      <h2>{{item.title}}</h2>
      <div class="channel_item p_r gray_border">
        <h3>{{item.child.h3_1}}</h3>
        <h4>{{item.child.h4_1}}</h4>
        <img v-lazy="'./static/img/zhibo/bottom_nav_img'+item.child.img1+'.jpg'" alt="" class="scale12" />
      </div>
      <div class="channel_item">
        <h3>{{item.child.h3_2}}</h3>
        <h4>{{item.child.h4_2}}</h4>
        <img v-lazy="'./static/img/zhibo/bottom_nav_img'+item.child.img2+'.jpg'" alt="" class="scale12" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      img_index:0,
      right_hover:["关注人数345.5万","优惠券 ￥50","优惠券 ￥5","关注人数15.3万","优惠券 ￥10","关注人数5.4万","关注人数150.6万","关注人数9.4万","优惠券 ￥600","关注人数4.6万","关注人数74.7万","关注人数1.6万","关注人数6.8万","优惠券 ￥30","优惠券 ￥500","优惠券 ￥5","优惠券 ￥10","关注人数2.9万","优惠券 ￥50","优惠券 ￥10","优惠券 ￥100","关注人数1.2万","优惠券 ￥300"],
      top_right_index:"x",
      bottom_nav:[{
          title:"潮流前沿",title_img:"",
          child:{
            h3_1:"焕新",h4_1:"品牌精选新品",img1:"1",
            h3_2:"全球时尚",h4_2:"大牌精致时尚",img2:"2",
          }
        },{
          title:"手机酷玩",title_img:"",
          child:{
            h3_1:"手机馆",h4_1:"新品手机分期免息抢",img1:"3",
            h3_2:"酷玩街",h4_2:"潮炫创意智能",img2:"4",
          }
        },{
          title:"品质生活",title_img:"",
          child:{
            h3_1:"必抢",h4_1:"巨超值 卖疯啦",img1:"5",
            h3_2:"喵鲜生",h4_2:"全球好品甄选",img2:"6",
          }
        },{
          title:"国际海购",title_img:"",
          child:{
            h3_1:"识货",h4_1:"最热全球好货",img1:"7",
            h3_2:"天猫国际直营",h4_2:"官方进口直采",img2:"8",
          }
        },{
          title:"个性推荐",title_img:"",
          child:{
            h3_1:"囤货",h4_1:"居家必备",img1:"9",
            h3_2:"精明主妇",h4_2:"生活更easy",img2:"10",
          }
        },
      ]
    }
  },
  methods:{
    setIndex(i) {
      this.top_right_index=i;
    },
    initIndex() {
      this.top_right_index="x";
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
.nav_list {
  margin:60px 10px 30px 45px;
  width:1232px; 
}
img {
  vertical-align:middle;
}
.c_a {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.8);
  color:white;
  font-size:12px;
  line-height:28px;
}
.icon {
  text-align: right;
}
.top_right_ul {
  margin-left:500px;
  background: white;
  li {
    width:121px;
    height:108px;
    line-height: 108px; 
    text-align: center;
    border:thin solid rgba(128,128,128,0.1);
    border:{
      top:none;
      left:none;
    };
    img {
      width:100px;
      height:50px;    
    } 
    .top_right_a {
      background: red;
      color:white;
      padding:3px;
      border-radius: 8px;
    }
  }
}

.bottom_nav {
  width:238px;
  background: white;
  text-align: center;
  margin-top:30px;
  h2 {
    height: 36px;
    font-size:18px;
    line-height: 36px;
    background: red;
    color:white;
  }
  .channel_item {
    width:88%;
    height:220px;
    h3 {
      font-size:21px;
      padding-top:8px;
    }
    h4 {
      color:gray;
      font-size:14px;
      padding-bottom:8px;
    }
  }
}

.gray_border:after {
  content:"";
  display: inline-block;
  position: absolute;
  left:12%;
  bottom:0;
  border-bottom: thin solid rgba(128,128,128,0.8);
  width:88%;
}
.margin_right {
    margin-right: 10px;
}
</style>
