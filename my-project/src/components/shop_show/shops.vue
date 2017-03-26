<template>
  <div class="shops">
    <shop-show v-for="item in products" :item="item" ></shop-show>
  </div>
</template>

<script>
import shopShow from './shop-show'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'shops',
  data () {
    return {
      items1:[]
    }
  },
  computed:{
    ...mapState({
      // 箭头函数可以让代码非常简洁
      products: state => state.products,
    }),
    ...mapGetters({
      products1:'getTrue'
    })
  },
  methods:{

  },
  components: { shopShow },
  mounted: function () {
      this.$nextTick(function() {
        this.$http.get('./static/data/shops.json').then((res)=>{
          var data=res.data.products;
          this.$store.dispatch('getData',data);
        }).catch(err=>{
          console.log(err);
        })
      });
  }
}
</script>
<style >
.shops {
  width:90%;
  margin:0 auto;
}

</style>
