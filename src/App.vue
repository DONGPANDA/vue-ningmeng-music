<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <transition name="route">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <player></player>
    <user></user>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player.vue'
  import User from 'components/user/user.vue'
  export default{
    components: {
      MHeader,
      Tab,
      Player,
      User
    }
  }
</script>

<style scoped>
  .route-enter {
    transform: translate(100%);
  }

  .route-enter-active, .route-leave-active {
    transition: all 0.3s;
  }

  .route-leave-to {
    transform: translate(-100%);
  }
</style>
