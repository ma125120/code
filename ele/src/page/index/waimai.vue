<template>
  <div class="hello">
    <header>
      <div class="container header_top">
        <router-link :to="{path:'choose_addr',query:{back1:false}}" tag='div' class='left'>
          <img v-lazy="'./static/img/pos.svg'" alt="" id="pos_img" class="i_b" />
          <div id="real_pos" class="i_b">{{real_pos}}</div> 
        </router-link>
        <div class="right container weather_info">
          <div class="T_left right">
            <p class="T">
              <span id="T">29</span>
              <sup>。</sup>
            </p>
            <p class="weather">
              晴天
            </p>
          </div>
          <div class="T_right">
            <i class="iconfont icon-taiyang" ></i>
          </div>
        </div>
      </div>
      
       <router-link :to="{path:'search',query:{back1:false}}" tag='div' class="header_md">
        搜索商家、商品
      </router-link>
    </header>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class='container'>
              <router-link :to="{path:'swiper',query:{type:item.title}}" tag="div"
              v-for="(item,index) in swiper_info.slice(0,8)" class='swiper_item'>
                <img :src="item.src" alt="" />
                <p>{{item.title}}</p>
              </router-link>     
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class='container'>
              <router-link :to="{path:'swiper',query:{type:item.title}}" tag="div"
              v-for="(item,index) in swiper_info.slice(8,12)" class='swiper_item'>
                <img v-lazy="item.src" alt="" />
                <p>{{item.title}}</p>
              </router-link>     
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>     
    </swiper>
    <div class="space"></div>
    <Scroll />
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Scroll from '../../components/scroll.vue'
export default {
  name: 'waimai',
  components: {
    swiper,
    swiperSlide,
    Scroll
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiper_info:[],
      pos:'太原工业学院东区',
      swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
         // grabCursor : true,
         // setWrapperSize :true,
          //autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          loop:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
         
          },
        },
    }
  },
  computed:{
    swiper() {
       return this.$refs.mySwiper.swiper
    },
    real_pos() {
      return this.pos.slice(0,6)+"...";
    },
  },
  mounted() {
    /*
    window.navigator.geolocation.getCurrentPosition(function(pos) {
      var coords=pos.coords;console.log(pos);console.log("231")
    },function(err) {
      console.log(err)
    })*/
    this.$http.get('./static/service/swiper/swiper.json').
        then(({data})=>{
          this.swiper_info=data.swiper;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$lightblue:#0096FF;
.swiper-slide {
  width: 100%;
  padding-bottom:1.5rem;
}
.swiper-scrollbar-drag {
  display: none;
}
.swiper-pagination {
  bottom:0;
}
.swiper_item {
  width:25%;
  font-size:0.5rem;
  padding-top:0.5rem;
  img {
    width:1.9rem;
  }  
}
header {
  background: $lightblue;
  color:white;
  text-align: left;
  padding:0.3rem;
  width:100%;
}
#real_pos {
  font-size:0.8rem;
  vertical-align: middle;
  position: relative;
  color:#fff;
}
.i_b {
  display: inline-block;
  margin-right: -6px;
}
#pos_img {
  width:0.8rem;
  vertical-align: middle;
}
#real_pos::after {
    content:"";
    border-top:0.25rem solid #fff;
    border-left:0.25rem solid transparent;
    border-right:0.25rem solid transparent;
    position: absolute;
    top:0.9rem;
    margin-left:0.2rem;
}
.header_md {
  background: #fff;
  color:#000;
  font-size:0.6rem;
  width:80%;
  line-height: 1.8rem;
  border-radius: 1rem;
  text-align: center;
  margin:0.5rem auto;
}
.header_top {
  height:2.3rem;
  &>.left,
  .T_right {
    line-height:2.3rem;
  }
}
.weather_info {
  font-size:0.6rem;
  margin-top:0.4rem;
  .weather {
    padding-right:0.5rem;
  }
  .T_left {
    width:70%;
    margin-top:-1rem
  }
  .T_right i {
    font-size:1.6rem;
  }
}


.space {
  background:#F4F4F4;
  width:100%;
  height:0.5rem;
}
</style>
