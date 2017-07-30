<template>
  <div class="header">
    <i class="icon-Lemon-copy"></i>
    <span>Lemon音乐</span>
    <i @click="userTab" class="icon-gerenzhongxin"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations,mapGetters} from 'vuex';
  export default{
    computed:{
      ...mapGetters(['user'])
    },
    methods:{
      ...mapMutations({
        setUser:'SET_USER'
      }),
      userTab() {
        this.setUser(!this.user);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/style/variable"
  @import "~common/style/mixin"
  .header {
    position relative
    height 44px
    line-height 44px;
    background $color-green
    span{
      font-size 20px;
      color: white;
      position absolute;
      top:0;
      left 40px;
    }
    i {
      font-size 40px;
      color: white;
    }
    .icon-gerenzhongxin{
      color: white;
      font-size 30px;
      position absolute;
      right 10px;
      top:10px;
    }
  }

</style>
