<template>
  <div id="app">
    <Aside1></Aside1>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/top/home.vue'
import Aside1 from './components/aside.vue'
export default {
  name: 'app',
  components:{Home,Aside1}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>
