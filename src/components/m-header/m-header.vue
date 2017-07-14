<template>
  <div class="header">
    <i class="music_logo"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/style/variable"
  @import "~common/style/mixin"
  .header
    position relative
    height 44px
    font-size 0
    background $color-green
    .music_logo
      float left
      display block
      width: 90px
      height 25px
      margin 9px 0 0 10px
      bg-image('logo')
      background-size cover
      background-repeat no-repeat
</style>
