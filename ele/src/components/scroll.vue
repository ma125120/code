<template>
  <div class="scroll">
    <h2>推荐商家</h2>
    <section class="container shop_info" v-for='item in shop'>
      <div class='logo'>
        <img v-lazy="item.src" alt="">
      </div>
      <div class='index_main'>
        <div class="shop_name">
          {{item.name}}
        </div>
        <div class="info">
          <span>{{item.score+'星评分'}}</span>
          <span>{{item.sale_num}}</span>
        </div>
        <div class="dispatch container">
          <div class="dispatch1 left">
            {{item.dispatch}}
          </div>
          <div class="time right">
            <span class="distance">{{item.distance}}</span>
            <span  v-if="item.time">/</span>
            <span class="times" v-if="item.time">{{item.time}}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Scroll',
  data() {
    return {
      shop:[],
    }
  },
  mounted() {
    this.$http.get('./static/service/scroll/scroll.json').
        then(({data})=>{
          this.shop=data.shop;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$active:#13A0FF;
h2 {
  font-size:0.7rem;
  text-align: left;
  margin:0 0.5rem;
  padding:0.5rem 0;
  border-bottom:thin solid #f4f4f4;
}
.shop_info {
  text-align: left;
}
.logo {
  width:3.6rem;
}
.logo img {
  width:2.5rem;
  display: inline-block;
  padding:.4rem .4rem;
}
.shop_name {
  font-size:0.65rem;
  font-weight: bold;
  padding-top:0.2rem;
}
.index_main {
  font-size:0.5rem;
  flex:1;
}
.info {
  padding:0.2rem 0;
}
.times {
  color:$active;
}
.left {
  width:59%;
}
.right{
  flex:1;
  padding-right: 0.4rem
}
</style>
