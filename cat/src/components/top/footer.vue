<template>
  <footer class="footer">
    <nav class="top_nav center outer" >
      <ul class="top_nav_ul f_l" v-for="item in foot">
        <li class="title">{{item[0]}}</li>
        <li v-for="text in item.slice(1)" class="text">{{text}}</li>
      </ul>
      <ul class="top_nav_ul f_l">
        <li class="title">手机天猫</li>
        <li><img v-lazy="'./static/img/mobile.png'" /></li>
      </ul>
    </nav>
    <nav class="bottom_nav center">
      
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      foot:[
        ["购物指南","免费注册", "开通支付宝", "支付宝充值"],
        ["天猫保障","发票保障", "售后规则", "缺货赔付"],
        ["支付方式","快捷支付", "信用卡", "余额宝", "蚂蚁花呗", "货到付款"],
        ["商家服务","商家入驻", "商家中心", "天猫智库", "天猫规则", "物流服务", "喵言喵语", "运营服务"],

      ]
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
.footer {
  width:100%;
  margin-bottom:20px;
  .center {
    width:1190px;
    margin:0 auto;
  }
  .top_nav_ul {
    width:186px;
    padding-left:52px;
    li {
      display: block;
    }
  }
  .title {
    font-size:16px;
    line-height: 28px;
    color:black;
  }
  .text {
    font-size:12px;
    color:gray;
    line-height: 20px;
  }
  .title:hover {
    cursor:none;
  }
}
</style>
