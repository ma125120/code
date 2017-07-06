<template>
  <div id="app">
    <transition :name="this.$route.query.back1==true?'slide_right':'slide_left'" mode="out-in">
      <router-view>
        
      </router-view>
    </transition>
  </div>
</template>

<script>
import './style/index.css'
import './style/font/iconfont.css'
export default {
  name: 'app',
  mounted(){

  },
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  overflow: hidden;
}
.slide_left-enter-active {
  animation:slideLeft 0.2s linear;
}
.slide_right-enter-active {
  animation:slideRight 0.2s linear;
}
@keyframes slideRight {
  from {
    transform: translateX(-100%);
    display: none;
  }

  to {
    transform: translateX(0);
    
  }
}
@keyframes slideLeft {
  from {
    transform: translateX(100%);
    display: none;
  }

  to {
    transform: translateX(0);
    
  }
}


</style>
