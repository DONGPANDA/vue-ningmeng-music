<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="singerG in data" class="singerG">
        <h2 v-html="singerG.title"></h2>
        <ul>
          <li v-for="singer in singerG.items" class="singer" @click="chooseSinger(singer)">
            <img :src="singer.url" alt="">
            <span v-html="singer.name"></span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>
<script>
  import Scroll from 'base/scroll/scroll'
  export default {
    props: {
      data: {
        type: Array
      }
    },
    data() {
      return {}
    },
    computed: {},
    components: {
      Scroll
    },
    methods: {
      chooseSinger(singer) {
        this.$emit('select', singer)
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "~common/style/variable.styl"
  .listview {
    display flex
    height: 100%;
    overflow: hidden;
    flex-direction column
    .singerG {
      display flex
      flex-direction column
      width: 100%
      h2 {
        padding-left: 20px;
        display block;
        width 100%
        background #fff;
        height 30px;
        line-height 30px;
      }
      .singer {
        display flex;
        align-items center
        width: 100%
        margin 20px 20px;
        img {
          width 60px;
          height: 60px;
          border-radius 50%
        }
        span {
          display block
          text-align center
          margin-left 20px
          font-size $font-size-medium
        }
      }
    }
  }
</style>
