<template>
  <div class="player" ref="player" v-show="playingList.length">
    <div class="full" v-show="fullScreen">
      <i @click="back" class="icon-fanhui"></i>
      <div class="background">
        <img :src="currentSong.image" alt="">
      </div>
      <div class="header">
        <span v-html="currentSong.name"></span>
        <span v-html="currentSong.singer"></span>
      </div>
      <img class="cd" :src="currentSong.image" alt="">
    </div>
    <div class="mini" v-show="!fullScreen">

    </div>
    <audio :src="currentSong.url"></audio>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {}
    },
    created() {
      console.log(1)
    },
    computed: {
      ...mapGetters([
        'fullScreen',
        'playingList',
        'currentIndex',
        'currentSong'
      ])
    },
    components: {},
    methods: {
      back() {
        this.$router.back();
      }
    }
  }
</script>
<style scoped lang="stylus">
  .player {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    .full {
      i {
        position absolute;
        color: #31c27c
        font-size 35px;
        padding 10px 10px;
      }
      .background {
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        filter: blur(10px)
        img {
          height 100%
        }
      }
      .header {
        padding-top 10px;
        width 100%
        height 60px;
        color: #fff;
        border-bottom 0.1px solid rgba(255, 255, 255, 0.2)
        span {
          font-size 18px;
          height 30px;
          line-height 30px;
          text-align center;
          width 100%;
          display block;
        }
      }
      .cd {
        position absolute;
        top: 15%
        left 50%;
        margin-left -40%;
        width 80%
        box-sizing border-box;
        border-radius 50%;
        animation: rotate 20s linear infinite;
        border: 10px solid rgba(255, 255, 255, 0.1);
      }
    }
  }

  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
