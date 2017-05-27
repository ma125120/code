<template>
  <section class="bottom_nav nav_width">
    <article v-for="da in data_list" class=" outer">
      <nav class="title outer" :class="da.color+'_bor'"> 
        <h2 class="f_l">
          <span>{{da.h2_1}}</span>
          <span class="small_h2">{{da.h2_2}}</span>
        </h2>  
        <ul class="top_right">
          <li v-for="r in da.top_right">{{r}}</li>
        </ul>
      </nav>
      <div class="bottom_left f_l">
          <div class="p_r" :class="da.color+'_hov'">
            <img v-lazy="'./static/img/b_nav/'+da.bottom_left.img+'.jpg'" />
            <div class="slide_text" >
              <p v-for="text in [0,1,2]" :class="'trans'+slideIndex">{{da.bottom_left.text[text]+'>'}}</p>
            </div>
          </div>
          <div class="bg_nav p_r" :class="da.color+'_bg'">
            <p class="p1">{{da.bottom_left.text[3]}}</p>
            <p class="p2">{{da.bottom_left.text[4]}}</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAgBAMAAADQ7JbhAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMUAAQLDwdsKrbGAAAAoUlEQVRIx5zTQQ7CMAxE0a827ONS9u0NDOIAKSeA+18GlSgWm1aavJU3sUYZGbPpSXpYj3ibMXOAV9+WAnDf18xQ5w7OLu1rCj+j6a5UW2aC7jhONWRmqC6mukGVMplmNdFCk4mZQa2JsOA0yTQzwXHCZpJCcAphVNsOhX8fE7w5MkgffGyV2hbiaGHki3BOfWeqRAxQNWAYBaNgFIwCEgEAOu9AM8VSluwAAAAASUVORK5CYII">
          </div>
      </div>
      <div class="bottom_md f_l" >
        <ul>
          <li v-for="item in da.bottom_md">
            <p class="top_p">{{item.p1}}</p>
            <p class="bottom_p" :class="da.color">{{item.p2}}</p>
            <p class="c_a">
              <img v-lazy="'./static/img/b_nav/'+item.img+'.jpg'" class="scale12" />
            </p>  
          </li>
        </ul>
      </div>
      <div class="bottom_right f_l">
        <ul>
          <li v-for="item in da.bottom_right">
            <p class="top_p">{{item.p1}}</p>
            <p class="bottom_p" :class="da.color">{{item.p2}}</p>
            <p class="c_a">
              <img v-lazy="'./static/img/b_nav/'+item.img+'.jpg'" class="scale12" />
            </p>  
          </li>
        </ul>
      </div>
    </article>
    <transition name="scale">
      <aside class="left_aside" v-if="isNavShow">
        <nav>
          <ul>
            <li class="cur_red_bg nav">导航</li>
            <li v-for="({color,text},index) in left_aside" :class="{[color+'_hov_bg']:true,[color+'_bg']:index==slide_nav}" class="gray_bg">
              <div class="aside_div">{{text}}</div>
            </li>
            <li class="iconfont icon-dingbu gray_bg" @click="returnTop"></li>
          </ul>
        </nav>
      </aside>
    </transition>
    <transition name="slide">
      <aside class="top_aside outer" v-if="isNavShow">
        <h2 class="f_l">TMAIL天猫</h2>
        <input type="text" placeholder="上天猫 享好礼" class="input top_input">
        <button type="button" class="search_btn top_input">搜索</button>
      </aside>
    </transition>
    <article class="guess_love" >
      <h2 style="text-align: center">
        ---猜你喜欢---
      </h2>
      <ul v-for="guess_love in guess_love_list">
        <li v-for="(item,i) in guess_love" class="red_bor_opa">
          <div class="shop_wonder" v-if="i==3">
            <img v-lazy="'./static/img/guess_love/g_love'+item.img+'.jpg'" />
            <p class="double_p">{{item.text}}</p>
            <p class="double_p1">{{item.text1}}</p>
          </div>
          <div class="wonderful_item" v-else>
            <img v-lazy="'./static/img/guess_love/g_love'+item.img+'.jpg'" />
            <p class="text">{{item.text}}</p>
            <p class="price">￥{{item.price.toFixed(1)}}</p>
          </div>
        </li>
      </ul>
    </article>
    <p class="middle_img">
      <img src="../../assets/end.png" >
    <hr>
    </p>
    
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      slideIndex:"0",
      time_fun:"",
      slide_nav:"x",
      isNavShow:false,
      left_aside:[{
        color:"red",text:"美丽人生"
      },{
        color:"blue",text:"潮电酷玩"
      },{
        color:"green",text:"居家生活"
      },{
        color:"red1",text:"打造爱巢"
      },{
        color:"green1",text:"户外出行"
      },{
        color:"yellow",text:"亲子时光"
      },{
        color:"black",text:"猜你喜欢"
      }],
      data_list:[{
        h2_1:"美丽人生",h2_2:"FASHION & BEAUTY",color:"red",
        top_right:["连衣裙","T恤男","美容护肤","休闲男鞋","黄金项链","单鞋","女包","文胸","大牌腕表"],
        bottom_left:{
          img:"b_nav0",
          text:["全场0.01元起","9元秒杀","满418送418","天猫亲子节","美妆洗护会场"],
        },
        bottom_md:[{p1:"摩登初夏性感至上",p2:"性感迎夏 秀出新自我",img:"b_nav0_0"},
          {p1:"原创设计",p2:"领略印花风情",img:"b_nav0_1"},
          {p1:"2017夏季新款",p2:"包你满意",img:"b_nav0_2"},
          {p1:"商务正装夏季新品",p2:"全场包邮",img:"b_nav0_3"},
          {p1:"解决面部死皮",p2:"天然温和不刺激易清洗",img:"b_nav0_4"},
          {p1:"商务中筒四季袜",p2:"防臭舒适耐穿吸湿排汗",img:"b_nav0_5"},
        ],
        bottom_right:[
          {p1:"百搭T恤新品",p2:"一件穿出N种造型",img:"b_nav0_6"},
          {p1:"潮流男生背包",p2:"好包都在这里",img:"b_nav0_7"},
          {p1:"好货推荐",p2:"优质面料",img:"b_nav0_8"},
        ]
      },{
        h2_1:"潮电酷玩",h2_2:"ELECTRONICS",color:"blue",
        top_right:["手机","iPhone","相机","数码配件","影音电玩","生活电器","个人护理","电脑硬件","笔记本"],
        bottom_left:{
          img:"b_nav1",
          text:["kindle新品套装自己75","全场最高减200","美女与野兽手账直降10元","文教新品日","电纸书IP定制款开售"],
        },
        bottom_md:[{p1:"三星盖乐世S8",p2:"99元起即可预约 立享好礼",img:"b_nav1_0"},
          {p1:"出游必备相机",p2:"最高12期免息",img:"b_nav1_1"},
          {p1:"出游必备相机",p2:"最高12期免息",img:"b_nav1_1"},
          {p1:"魅蓝E2上新献礼",p2:"现货免息送趣闪壳",img:"b_nav1_2"},
          {p1:"除尘清洁专场",p2:"抢大额优惠券",img:"b_nav1_3"},
          {p1:"三星曲面显示器",p2:"三星高清曲面显示器",img:"b_nav1_4"},
        ],
        bottom_right:[
          {p1:"我爱呀口腔护理日",p2:"国际大牌全线升级",img:"b_nav1_6"},
          {p1:"笔记本平板特惠",p2:"最高直降千元",img:"b_nav1_7"},
          {p1:"笔记本平板特惠",p2:"最高直降千元",img:"b_nav1_7"},
        ]
      },{
        h2_1:"居家生活",h2_2:"GROCERY & HEALTH",color:"green",
        top_right:["零食","牛奶","居家饰品","保温杯","保健品","常用药","热门图书","洗发水","卫生巾","家庭清洁","狗粮"],
        bottom_left:{
          img:"b_nav2",
          text:["准妈必备一站购齐 >","雅培奶粉3罐立减100元 >","全家总动员聚大牌 >","健康新妈新宝贝","满499立减30元"],
        },
        bottom_md:[{p1:"天生好枣",p2:"免洗好枣健康全家",img:"b_nav2_0"},
          {p1:"清香汾酒中国酒魂",p2:"我带酒你带故事",img:"b_nav2_1"},
          {p1:"家纺家饰大牌",p2:"健康品质新主张",img:"b_nav2_2"},
          {p1:"沃之沃卡通收纳箱",p2:"密封卡扣，可配滑轮",img:"b_nav2_3"},
          {p1:"素家让您爱上洗澡",p2:"洗澡怎能没2把刷子",img:"b_nav2_4"},
          {p1:"买好茶送好礼",p2:"2017新茶尝鲜",img:"b_nav2_5"},
        ],
        bottom_right:[
          {p1:"我爱呀口腔护理日",p2:"国际大牌全线升级",img:"b_nav2_6"},
          {p1:"笔记本平板特惠",p2:"最高直降千元",img:"b_nav2_7"},
          {p1:"笔记本平板特惠",p2:"最高直降千元",img:"b_nav2_8"},
        ]
      },{
        h2_1:"打造爱巢",h2_2:"HOME",color:"red1",
        top_right:["家具", "大家电", "四件套", "健康电器", "厨房电器", "吸顶灯", "平板电视", "装修设计", "跑步机",],
        bottom_left:{
          img:"b_nav3",
          text:["准妈必备一站购齐 >","雅培奶粉3罐立减100元 >","全家总动员聚大牌 >","我爱牙口腔护理日","国际大牌全线升级"],
        },
        bottom_md:[{p1:"超级垫粉节",p2:"满就送真皮功能沙发",img:"b_nav3_0"},
          {p1:"公牛经典白插座",p2:"安全阻燃环保荧光条",img:"b_nav3_1"},
          {p1:"家用蹭土门垫特卖",p2:"加厚丝圈压字蹭土给力",img:"b_nav3_2"},
          {p1:"简约卧室灯",p2:"三年质保",img:"b_nav3_3"},
          {p1:"皇球货架7周年庆",p2:"进店领取百万现金红包",img:"b_nav3_4"},
          {p1:"彩电品牌周",p2:"最高直降800",img:"b_nav3_5"},
        ],
        bottom_right:[
          {p1:"5月为爱焕新家",p2:"品质便利省钱",img:"b_nav3_6"},
          {p1:"五月焕新季",p2:"满就送家具",img:"b_nav3_7"},
          {p1:"手机智能家居",p2:"全场底价包邮",img:"b_nav3_8"},
        ]
      },{
        h2_1:"户外出行",h2_2:"OUTDOORS & AUTOMOTIVE",color:"green1",
        top_right:["车秒贷", "皮肤衣", "运动鞋", "4s保养", "行车记录仪", "轮胎"],
        bottom_left:{
          img:"b_nav4",
          text:["准妈必备一站购齐 >","雅培奶粉3罐立减100元 >","全家总动员聚大牌 >","天猫开新车","满499立减30元"],
        },
        bottom_md:[{p1:"新车首付1成起",p2:"0购置税 送1年车险",img:"b_nav4_0"},
          {p1:"520闺蜜节",p2:"全场6折起",img:"b_nav4_1"},
          {p1:"新品首发",p2:"满699减80",img:"b_nav4_2"},
          {p1:"汽车电子",p2:"体验新品黑科技",img:"b_nav4_3"},
          {p1:"新品首发",p2:"满199元免邮",img:"b_nav4_4"},
          {p1:"520闺蜜同行",p2:"满599减50",img:"b_nav4_5"},
        ],
        bottom_right:[
          {p1:"爱车出行",p2:"车品优选",img:"b_nav4_6"},
          {p1:"自驾出游必备",p2:"抢原创ip潮品车饰",img:"b_nav4_7"},
          {p1:"洲克比基尼泳衣女",p2:"傲人身材秀出来",img:"b_nav4_8"},
        ]
      },
      {
        h2_1:"亲子时光",h2_2:"KIDS & BABY",color:"yellow",
        top_right:["童装", "玩具", "待产用品", "文教用品", "宝宝用品", "儿童床品", "奶粉", "童书", "纸尿裤"],
        bottom_left:{
          img:"b_nav5",
          text:["童趣食品9元秒 >","国际母婴大牌9元秒 >","潮流童装童鞋9元秒 >","520亲子节","大牌尖货9元抢 "],
        },
        bottom_md:[{p1:"男童夏装套装新款",p2:"大牌童装疯狂抢",img:"b_nav5_0"},
          {p1:"疏通乳腺",p2:"十二档吸力调节",img:"b_nav5_1"},
          {p1:"快乐学习",p2:"亲子游戏",img:"b_nav5_2"},
          {p1:"时尚潮流高端推车",p2:"全球限量创意涂鸦",img:"b_nav5_3"},
          {p1:"齐齐熊新一轮萌衣",p2:"夏款2件包邮",img:"b_nav5_4"},
          {p1:"乐卡童车专场",p2:"六一礼物酷炫游玩",img:"b_nav5_5"},
        ],
        bottom_right:[
          {p1:"喜欢就别等一下次",p2:"两件享包邮福利不间断",img:"b_nav5_6"},
          {p1:"小贵族书包",p2:"时尚韩风快乐成长",img:"b_nav5_7"},
          {p1:"0-4岁婴幼儿服",p2:"夏季尝鲜抢先购",img:"b_nav5_8"},
        ]
      },],
      guess_love_list:[
        [{img:0,text:"[特权订金10元] 林氏木业 代金券 不限产品全国门店通用",price:10.0},
          {img:1,text:"【官方旗舰店】华为honor/荣耀 荣耀8青春版全网通智能手机正品",price:1099.0},
          {img:2,text:"爱空间室内全包装修公司装修设计3d效果图天猫家装拎包入住整装",price:1.0},
          {img:3,text:"梅赛德斯-奔驰官方旗舰店",text1:"10.7万粉丝"},
          {img:4,text:"TATA木门 99特权订金 实木复合室内门 卧室门房门全屋定制",price:99.0}],
        [{img:5,text:"Midea/美的 KFR-26GW/WCBD3@ 大1匹智能静音壁挂冷暖空调挂机",price:2199.0},
          {img:6,text:"爱空间家装全包全案室内装修设计效果图房装修设计施工公司北京",price:162.0},
          {img:7,text:"Dyson戴森 V6 Motorhead 无绳吸尘器 家用 除尘祛螨",price:958.0},
          {img:8,text:"兽王官方旗舰店",text1:"1.4万粉丝"},
          {img:9,text:"Dyson/戴森 吹风机 Supersonic HD01 紫红色",price:2498.0}],

      ]
    }
  },
  methods:{
    initSlide() {
      let t=setInterval(()=>{
        let i=parseInt(this.slideIndex);
        i++;
        if(i>=3) {
          i=0;
        }
        this.slideIndex=i;
      },3000);
      this.time_fun=t;
    },
    returnTop() {
      document.body.scrollTop=0;
    }
  },
  mounted() {
    this.initSlide();
    /*滚动*/
    ((vue)=>{
      let timeId,doc=document.body,w=window;
      w.onscroll=function() {
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
          var _this=vue.$data;
         let h=w.innerHeight+doc.scrollTop;
         if(h>1422) {
          _this.isNavShow=true;
          if(h<1993) {
            _this.slide_nav="x";
          } else if(h>1993&&h<2333) {
            _this.slide_nav=0;
          } else if(h>2333&&h<2816) {
            _this.slide_nav=1;
          } else if(h>2816&&h<3319) {
            _this.slide_nav=2;
          } else if(h>3319&&h<3819) {
            _this.slide_nav=3;
          } else if(h>3819&&h<4319) {
            _this.slide_nav=4;
          } else if(h>4319&&h<4819) {
            _this.slide_nav=5;
          } else if(h>4819&&h<5319) {
            _this.slide_nav=6;
          }   
         } else {
          _this.isNavShow=false;
          _this.slide_nav="x";
         }
        },20);
      };
    })(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
$red:#EA5F8D;
$blue:#0AA6E8;
$green:#64C333;
$red1:#F15453;
$green1:#19C8A9;
$yellow:#F7A945;
$cur_red:#DD2727;

.red {
  color:$red;
}
.blue {
  color:$blue;
}
.green {
  color:$green;
}
.red1 {
  color:$red1;
}
.green1 {
  color:$green1;
}
.yellow {
  color:$yellow;
}

.gray_bg {
  background:gray;
}
.red_bg,
.red_hov_bg:hover {
  background:$red;
}
.blue_bg,
.blue_hov_bg:hover {
  background:$blue;
}
.green_bg,
.green_hov_bg:hover {
  background:$green;
}
.red1_bg,
.red1_hov_bg:hover {
  background:$red1;
}
.green1_bg,
.green1_hov_bg:hover {
  background:$green1;
}
.yellow_bg,
.yellow_hov_bg:hover {
  background:$yellow;
}

.black_hov_bg:hover {
  background:black;
}
.cur_red_bg,
.black_bg {
  background:$cur_red;
}


.red_hov:hover {
  opacity:0.8;
  color:$red;
}
.blue_hov:hover {
  opacity:0.8;
  color:$blue;
}
.green_hov:hover {
  opacity:0.8;
  color:$green;
}
.red1_hov:hover {
  opacity:0.8;
  color:$red1;
}
.green1_hov:hover {
  opacity:0.8;
  color:$green1;
}
.yellow_hov:hover {
  opacity:0.8;
  color:$yellow;
}

.red_bor {
  border-left:5px solid $red;
}
.blue_bor {
  border-left:5px solid $blue;
}
.green_bor {
  border-left:5px solid $green;
}
.red1_bor {
  border-left:5px solid $red1;
}
.green1_bor {
  border-left:5px solid $green1;
}
.yellow_bor {
  border-left:5px solid $yellow;
}

article {
  margin-top:20px;
}

nav.title {
  margin-bottom:5px;
  height:24px;
  line-height: 24px;
  color:black;
  h2 {
    font-weight: normal;
    font-size:20px;
    padding-left:8px;
    .small_h2 {
      font-size:14px;
    }
  }
}

.top_right {
  text-align: right;
  height: 31px;
  line-height: 31px;
  font-size:15px;
  li {
    padding:0 5px 0 15px;
  }
  li:hover {
    text-decoration: underline;
  }
}

.bottom_left {
  width:246px; 
  .bg_nav {
    text-align: center;
  }
  .slide_text {
    position: absolute;
    bottom:0;
    background: rgba(255,255,255,0.8);
    text-align: center;
    height:32px;
    line-height: 32px;
    overflow:hidden;
    width:100%;
    font-size:14px;
  }
  .p1 {
    padding-top:20px;
    color:white;
    font-size:24px;
    font-weight: bold;
  }
  .p2 {
    color:white;
    font-size:20px;
    padding-bottom:2px;
  }
}
.bottom_md {
  width:740px;
  margin-left:0px;
  li {
    width:245px;
    height:221px;
    background: white;
    
    p.img {
      text-align: right;
    }
  }
}
.bottom_right {
  width:240px;
  li {
    width:249px;
    height:147px;
    background: white;
    img {
      width:100px;
    }
  }
  
}

.trans1,
.trans2 {
  transition: transform 0.5s;
}
.trans1,
.trans1:hover {
  transform:translateY(-32px);
}
.trans2,
.trans2:hover {
  transform:translateY(-64px);
}

.top_p {
      padding:20px 0 0 20px;
}
.bottom_p {
  padding:5px 0 0 20px;
  font-size:13px;
}
.c_a {
  position: absolute;
  bottom:0;
  right:10%;
}
.bg_nav {
  width:248px;
  height:112px;
}
.p_r {
  cursor: pointer;
}
/*上侧边栏 左侧边栏*/
.left_aside {
  position: fixed;
  width:40px;
  top:25%;
  padding:0 3px;
  left:0;
  font-size:12px;
  text-align:center;
  color:white;
  li {
    width:36px;
    height: 36px;
    line-height: 36px;
    margin-bottom:2px;
    letter-spacing: 2px;
  }
  .aside_div {
    line-height: 12px;
    height:28px;
    margin:6px auto;
  }
  .nav {
    line-height: 36px;
  }
}
.top_aside {
  position: fixed;
  top:0;
  left:0;
  z-index:5;
  height:50px;
  line-height: 50px;
  width:100%;
  color:white;
  background:rgba(255,0,0,0.8);
  .top_input {
    display: inline-block;
    width:90px;
    height:30px;
    line-height: 30px;
    font-size:16px;
    box-sizing: border-box;
  }
  .search_btn {
    background: #FF0036;
    color:white;  
    border:none;
    margin-left:-4px;
  }
  .input {
    outline:none;
    width:650px;
    border:0;
    font-size:12px;
    padding-left:5px;
  }
  .f_l {
    margin:0 120px 0 46px;
  }
}
.iconfont:before {
  padding:0;
  line-height: 36px;
}
.icon-dingbu {
  font-size: 28px;
  text-align: center;
}

.guess_love {
  overflow:hidden;
  ul {
    height:304px;
  } 
  color:black;
  li:not(:last-child) {
    margin-right:12px;
  }
  li {
    background: white;
    box-sizing: border-box;
    font-size:13px;
    .double_p {
      font-size:16px;
      line-height:39px;
      text-align: center;
    }
    .double_p1 {
      font-size:12px;
      text-align: center;
    }
    .text {
      padding:2px 6px;
    }
    .price {
      font-size:16px;
      color:red;
    }
  }
  .wonderful_item {
    width:235px;
  }
  .shop_wonder {
    width:239px;
  }
  .red_bor_opa:hover {
    border:thin solid $cur_red;
    opacity: 0.8;
  }
}
</style>
