<template>
  <div class="faxian gray_bg">
    <Top :title="'发现'"></Top>
    <section class='container white_bg'>
      <router-link :to="item.path" v-for="item in entry" tag='div' class='container event'>
        <div class="left">
          <h2 :class="item.color">{{item.title}}</h2>
          <p class="txt">{{item.txt}}</p>
        </div>
        <div class="right">
          <img v-lazy="item.src" alt="" />
        </div>     
      </router-link>  
    </section>
    <div class="event_img">
      <img v-lazy="'./static/img/faxian/event.jpeg'" alt=""  width='100%' />
    </div>
    
    <section class='event_item white_bg'>
      <div class="tuijian">
        <div class="top">
          <img v-lazy="cate[0].src" class='svg' alt="" />
          <span><b>{{cate[0].title}}</b></span>
          <p class="txt">
            {{cate[0].txt}}
          </p>
        </div>
        <div class="items container">
          <div class="half3" v-for="v in cate.slice(1)">
            <img v-lazy="v.src" alt="" />
            <p class="font6">{{v.title}}</p>
            <p class="price font5">
              {{v.price|price}}
            </p>
          </div>
        </div>
        <div class="more font5">
          查看更多
        </div>
      </div>
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
      entry:[
        {
          src:'./static/img/faxian/mail.jpeg',
          title:'积分商城',
          txt:'0元好物在这里',
          path:'/event?type=mail',
          color:'orange'
        },
        {
          src:'./static/img/faxian/baoliao.jpeg',
          title:'美味爆料',
          txt:'网红们都看哭了',
          path:'/event?type=baoliao',
          color:'red'
        },
        {
          src:'./static/img/faxian/tuijian.jpeg',
          title:'推荐有奖',
          txt:'5元现金拿不停',
          path:'/event?type=tuijian',
          color:'blue1'
        },
        {
          src:'./static/img/faxian/red.jpeg',
          title:'有红包快抢',
          txt:'礼包福利领不停',
          path:'/event?type=red',
          color:'green'
        },
      ],
      cate:[
        {
          src:'./static/img/faxian/tuijian.svg',
          title:'美食推荐',
          txt:'你的口味，我都懂得'
        },
        {
          src:'./static/img/faxian/tuijian1.jpeg',
          title:'黄焖鸡米饭-小份',
          price:19
        },
        {
          src:'./static/img/faxian/tuijian2.jpeg',
          title:'小笼包',
          price:9
        },
        {
          src:'./static/img/faxian/tuijian3.jpeg',
          title:'皮蛋瘦肉粥',
          price:15
        },
      ]
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
$gray:#808080;
.orange {
  color:#FF9700;
}
.red {
  color:#F5785D;
}
.blue1 {
  color:#1BA9E1;
}
.green {
  color:#A2CF26;
}
.txt {
  font-size:0.5rem;
  color:$gray;
  padding:0.1rem
}
.top {
  padding: 0.5rem 0;
}

.event {
  width:50%;
  box-sizing: border-box;
  padding:1rem 0.5rem;  
  h2 {
    font-size:0.75rem;
  }
  .left {
    width:59%;
  }
  .right {
    flex:1;
  }
  img {
    width:1.9rem;
  }
}
div.event:nth-of-type(1) {
  border-bottom:thin solid $gray;
  border-right:thin solid $gray;
}
div.event:nth-of-type(4) {
  border-top:thin solid $gray;
  border-left:thin solid $gray;
}

.event_img {
  margin:0.5rem 0;
}
.event_item {
  .svg,
  .svg~span {
    width:1.2rem;
    vertical-align:middle;
  }
  .items {
    width:92vw;
    margin:0 auto;
    text-align: left;
  }
  .half3 {
    width:30%;
    margin-right: 2%;
    img {
      width:100%;
    }
  }
  .font6 {
    padding:0.3rem 0;
  }
  .price {
    color:#FF5339;
    font-size:0.6rem;
  }
  .more {
    color:$gray;
    padding:1rem 0;
  }
}
</style>
