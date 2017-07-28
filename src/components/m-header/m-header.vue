<template>
  <div class="header">
    <i class="icon-Lemon-copy"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/style/variable"
  @import "~common/style/mixin"
  .header {
    position relative
    height 44px
    line-height 44px;
    background $color-green
    i {
      font-size 40px;
      color: #fdff37
    }
  }

</style>
