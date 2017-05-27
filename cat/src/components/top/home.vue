<template>
  <div class="hello">
    <Top></Top>
    <Section1></Section1>
    <Slide></Slide>
    <Nav1></Nav1>
    <Bottom_nav></Bottom_nav>
    <Footer1></Footer1>
  </div>
</template>

<script>
import Top from './top.vue'
import Section1 from './section1.vue'
import Slide from './slide.vue'
import Nav1 from './nav_list.vue'
import Bottom_nav from './bottom_nav.vue'
import Footer1 from './footer.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg:"test"
    }
  },
  components:{Top,Section1,Slide,Nav1,Bottom_nav,Footer1},
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 

</style>
