<template>
  <div class="hello">
    <transition :name="this.$route.query.back1==true?'slide_right':'slide_left'" mode="out-in" >
      <router-view class='top_view'>
          
      </router-view>
    </transition>
    <Bottom />
  </div>
</template>

<script>

import Bottom from '../components/bottom.vue'

export default {
  name: 'hello',
  components:{
    Bottom
  },
  data () {
    return {

    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top_view {
  margin-bottom:2.4rem;
}
</style>
