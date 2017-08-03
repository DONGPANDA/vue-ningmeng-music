<template>
    <div class="detail">
    </div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex';
  import {getUser} from 'api/user';
  export default {
    data() {
      return {
        user:{}
      }
    },
    created() {
      getUser().then(res=>{
        console.log(res)
      })
    },
    computed: {
    },
    components: {},
    methods: {
    }
  }
</script>
<style scoped lang="stylus">
  .detial-enter, .detial-leave-to {
    transform: translate(100%)
  }

  .detial-enter-active, .detial-leave-active {
    transition: all 0.3s;
  }
  .detail{
    position fixed;
    top:84px;
    left 0;
    width:100%;
    height 100%;
    background url("./musicBg2.jpeg")no-repeat;
    background-size 100% 100%;
  }
</style>
