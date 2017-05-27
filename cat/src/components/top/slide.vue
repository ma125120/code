<template>
  <section class="slide" @mouseleave="initIndex">
    <div class="slide_parent">
      <div class="slide_child" :class="'slide_trans'+slide_index">
        <img v-for="item in [0,1,2,3,4]" v-lazy="'./static/img/slider/slider'+item+'.jpg'" />
      </div>
      <ul class="slide_ul">
        <li v-for="item in [0,1,2,3,4]" @mouseenter="setSlide(item)" @mouseleave="initSlide"  :class="{selected:item==slide_index}"></li>
      </ul>
      <ul class=" left_nav special_nav">
        <li v-for="(item,index) in left_nav" :class="{['has_'+hover_color[index]]:current_ul_index==index}" @mouseenter="setIndex(index)" >
          <span class="iconfont" :class="'icon-'+left_nav_img[index]"></span>
          <span v-for="({text},i) in item">{{text}}<span v-if="i!=item.length-1">/</span></span>   
        </li>
      </ul>
      <ul class="right_nav_hide" v-if="current_ul_index!='x'">
        <li v-for="(item,index) in 16" v-if="current_ul_index==index" @mouseenter="setIndex(index)" @mouseleave="initIndex">
          <div class="right_div_hide" v-for="single_li in right_nav[0]">
              <h3 class="f_l">{{single_li[0]}}<b class="iconfont icon-jiantou1"></b></h3>
              <ul class="real_ul dash_bor">
                <li v-for="{text,has_color} in single_li[1]">
                  <span v-if="has_color" :class="'has_'+hover_color[index]">{{text}}</span>
                  <span v-else class="hover_red" :class="'hover_'+hover_color[index]">{{text}}</span>
                </li>
              </ul>
          </div>
        </li> 
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      slide_index:0,
      time_fun:"",
      current_ul_index:"x",
      left_nav:[
        [{text:"女装",href:""},{text:"内衣",href:""}],
        [{text:"男装",href:""},{text:"运动户外",href:""}],
        [{text:"女鞋",href:""},{text:"男鞋",href:""},{text:"箱包",href:""}],
        [{text:"化妆品",href:""},{text:"个人护理",href:""}],
        [{text:"腕表",href:""},{text:"珠宝饰品",href:""},{text:"眼镜",href:""}],
        [{text:"手机",href:""},{text:"数码",href:""},{text:"电脑办公",href:""}],
        [{text:"母婴玩具",href:""}],
        [{text:"零食",href:""},{text:"进口食品",href:""},{text:"茶酒",href:""}],
        [{text:"生鲜水果",href:""}],
        [{text:"大家电",href:""},{text:"生活电器",href:""}],
        [{text:"家具建材",href:""}],
        [{text:"汽车",href:""},{text:"配件",href:""},{text:"用品",href:""}],
        [{text:"家纺",href:""},{text:"家饰",href:""},{text:"鲜花",href:""}],
        [{text:"医药保健",href:""}],
        [{text:"厨房",href:""},{text:"收纳",href:""},{text:"宠物",href:""}],
        [{text:"图书音像",href:""}],
      ],
      left_nav_img:["nvzhuang","nanzhuang","xie-copy","huazhuangpin","zhubao","shouji","muyingwanju","shipin","shengxianshuiguo","jiadian","jiajujiancai","qichepeijian","12","yiyaobaojian","chongdiaochayin","tushuyinxiang"],
      hover_color:["red","baby_blue","blue_black","red","blue_black","baby_blue","red","yellow","yellow","baby_blue","red","blue_black","yellow","baby_blue","red","baby_blue"],
      right_nav:[
        [["当季流行",[{text:"夏季新品",has_color:true},
                      {text:"商场同款",has_color:true},
                      {text:"气质连衣裙",has_color:false},
                      {text:"印花衬衫",has_color:false},
                      {text:"牛仔单品",has_color:false},
                      {text:"百搭休闲裤",has_color:false},
                      {text:"无痕文胸",has_color:false},
                      {text:"运动文胸",has_color:true},
                      {text:"超柔内裤",has_color:false},
                      {text:"潮流家居服",has_color:true},
                      {text:"百搭船袜",has_color:false}]],
        ["精选上装",[{text:"T恤",has_color:true},
                      {text:"衬衫",has_color:false},
                      {text:"针织衫",has_color:false},
                      {text:"短外套",has_color:false},
                      {text:"小西装",has_color:true},
                      {text:"风衣",has_color:false},
                      {text:"卫衣",has_color:false},
                      {text:"毛衣",has_color:false}]],
        ["浪漫裙装",[{text:"连衣裙",has_color:true},
                      {text:"蕾丝连衣裙",has_color:false},
                      {text:"真丝连衣裙",has_color:true},
                      {text:"印花连衣裙",has_color:false},
                      {text:"半身裙",has_color:false},
                      {text:"蕾丝半身裙",has_color:true},
                      {text:"百褶裙",has_color:false},
                      {text:"牛仔裙",has_color:true},
                      {text:"背心裙",has_color:false},
                      {text:"a字裙",has_color:false},
                      {text:"棉麻连衣裙",has_color:false},
                      {text:"包臀裙",has_color:false},
                      {text:"长袖连衣裙",has_color:false}]],
        ["女士下装",[{text:"短裤",has_color:false},
                      {text:"牛仔裤",has_color:true},
                      {text:"休闲裤",has_color:false},
                      {text:"小脚裤",has_color:true},
                      {text:"哈伦裤",has_color:false},
                      {text:"背带裤",has_color:false},
                      {text:"西装裤",has_color:false},
                      {text:"阔腿裤",has_color:false},
                      {text:"打底裤",has_color:false},]],
        ["特色女装",[{text:"时尚套装",has_color:true},
                      {text:"休闲套装",has_color:false},
                      {text:"精选妈妈装",has_color:true},
                      {text:"大码女装",has_color:false},
                      {text:"职业套装",has_color:false},
                      {text:"优雅旗袍",has_color:false},
                      {text:"精致礼服",has_color:false},
                      {text:"婚纱",has_color:false},
                      {text:"唐装",has_color:false},
                      {text:"小码女装",has_color:false}]],
        ["文胸塑身",[{text:"光面文胸",has_color:true},
                      {text:"运动文胸",has_color:true},
                      {text:"美背文胸",has_color:true},
                      {text:"聚拢文胸",has_color:false},
                      {text:"大杯文胸",has_color:false},
                      {text:"轻薄塑身",has_color:false}]],
        ["家居服",[{text:"春夏家居服",has_color:false},
                      {text:"纯棉家居服",has_color:false},
                      {text:"莫代尔家居服",has_color:true},
                      {text:"真丝家居服",has_color:true},
                      {text:"春夏睡裙",has_color:false},
                      {text:"男士家居服",has_color:true},
                      {text:"情侣家居服",has_color:false},
                      {text:"性感睡裙",has_color:true}]],
        ["内裤背心",[{text:"男士内裤",has_color:false},
                      {text:"女士内裤",has_color:false},
                      {text:"男士内裤多条装",has_color:true},
                      {text:"女士内裤多条装",has_color:true},
                      {text:"莫代尔内裤",has_color:true}]],
        ["袜类",[{text:"船袜",has_color:false},
                      {text:"长筒丝袜",has_color:false},
                      {text:"男士运动袜",has_color:true},
                      {text:"女士装饰袜",has_color:true},
                      {text:"潮流渔网袜",has_color:true}]],
        ],
        [],
      ],
    }
  },
  methods:{
    setSlide(i) {
      this.$data.slide_index=i;
      clearInterval(this.$data.time_fun);
    },
    setIndex(i) {
      this.$data.current_ul_index=i;
    },
    initIndex() {
      this.$data.current_ul_index="x";
    },
    initSlide() {
      let t=setInterval(()=>{
        let i=parseInt(this.$data.slide_index);
        i++;
        if(i>=5) {
          i=0;
        }
        this.$data.slide_index=i;
      },1000);
      this.$data.time_fun=t;
    }
  },
  mounted() {
    this.initSlide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
section {
  text-align: left;
}


.slide_parent {
  width:1314px;
  height:500px;
  position: relative;
  left:0;
  overflow: hidden;
  img {
    width:1314px;
    height:500px;
  }
  ul.slide_ul {
    position: absolute;
    bottom:20px;
    left:90%;
    margin-left:-50%;
    z-index:5;
  }
  .slide_ul li {
    width:24px;
    height:24px;
    background: #5B83A2;
    border-radius: 50%;
    margin: 0 10px;
  }
  li.selected {
  background: #679FE7;
}
}
.slide_child {
  width:500%;
  overflow: hidden;
}

.special_nav {
  background:#E9E8E6;
  height:500px;
  li {
    display: block;
    font-size:16px;
    line-height:31px;
    padding-left:10px;
  }
}

.right_nav_hide {
  width:644px;
  height:500px;
  background: white;
  overflow: hidden;
  position: absolute;
  top:0;
  left:246px;
  z-index:1000;
  padding:16px 30px;
}
.right_div_hide {
  width:644px;
  h3 {
    font-size:15px;
    line-height:20px;
    margin-right: 15px;
  }
  h3:hover {
    cursor:auto;
  }
  h3,.real_ul {
    padding:11px 0;
  }
  .real_ul {
  width:493px;
  font-size:14px;
  margin-left:100px;
  li {
    height:20px;
    line-height: 20px;
    margin:{
      left:13px;
    };
  }
}
}


.hover_red:hover {
  color:#E54077;
}
.hover_baby_blue:hover {
  color:#427DEF;
}
.hover_blue_black:hover {
  color:#6347ED;
}
.hover_yellow:hover {
  color:#F7AA35;
}

.has_red {
  color:#E54077;
  background:white;
}
.has_baby_blue {
  color:#427DEF;
  background:white;
}
.has_blue_black {
  color:#6347ED;
  background:white;
}
.has_yellow {
  color:#F7AA35;
  background:white;
}

.slide_trans1,
.slide_trans2,
.slide_trans3,
.slide_trans4  {
  transition: transform 0.5s;
}
.slide_trans1 {
  transform: translate(-1314px);
}
.slide_trans2,
.slide_trans2:hover {
  transform: translate(-1314px*2);
}
.slide_trans3,
.slide_trans3:hover {
  transform: translate(-1314px*3);
}
.slide_trans4,
.slide_trans4:hover {
  transform: translate(-1314px*4);
}
</style>
