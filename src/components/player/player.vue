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
      <div class="middle">
        <img class="cd" :src="currentSong.image" alt="">
      </div>
      <div class="footer">
        <div class="playMode">
          <i :class="iconMode"></i>
        </div>
        <div class="pre">
          <i class="icon-281"></i>
        </div>
        <div class="play">
          <i :class="playIcon"></i>
        </div>
        <div class="next">
          <i class="icon-28"></i>
        </div>
        <div class="list">
          <i class="icon-ttpodicon"></i>
        </div>
      </div>
    </div>
    <div class="mini" v-show="!fullScreen">

    </div>
    <audio ref="audio" :src="currentSong.url"></audio>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import { playMode } from 'common/js/config'
  export default {
    data() {
      return {}
    },
    created() {
    },
    computed: {
      ...mapGetters([
        'playing',
        'fullScreen',
        'playingList',
        'currentIndex',
        'currentSong'
      ]),
      playIcon() {
        return this.playing ? 'icon-zanting' : 'icon-bofang'
      },
      iconMode() {
        return this.mode === playMode.sequence ? 'icon-yinpinliebiaoxunhuan' : this.mode === playMode.loop ? 'icon-danquxunhuan' : 'icon-suijibofang1'
      }
    },
    components: {},
    methods: {
      ...mapMutations({
        setFullScreen: 'SET_FULLSCREEN',
        setPlaying: 'SET_PLAYING',
        setCurrentIndex: 'SET_CURRENTINDEX',
        setPlayMode: 'SET_MODE',
        setPlayList: 'SET_PLAYINGLIST'
      }),
      back() {
        this.setFullScreen(false);
      }
    },
    watch: {
      playing(newP) {
        const audio = this.$refs.audio
        this.$nextTick(() => {
          newP ? audio.play() : audio.pause()
        })
      },
      currentSong(newS, oldS) {
        if (newS === oldS) return;
        this.$nextTick(() => {
          this.$refs.audio.play();
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .player {
    .full {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 1);
      .icon-fanhui {
        z-index 100;
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
      .middle {
        position fixed;
        left 0;
        top 0;
        height: 100%;
        padding-top 70px;
        padding-bottom 100px;
        width: 100%;
        .cd {
          position absolute;
          top: 10%
          left 50%;
          margin-left -40%;
          width 80%
          box-sizing border-box;
          border-radius 50%;
          animation: rotate 20s linear infinite;
          border: 10px solid rgba(255, 255, 255, 0.1);
        }
      }
      .footer {
        z-index: 100;
        position fixed;
        left 0;
        bottom 0;
        height 100px;
        line-height 100px;
        width 100%
        display flex;
        font-size 30px;
        color white;
        div {
          flex 1;
          text-align center
        }
        .play {
          font-size 40px;
        }
      }
    }
  }

  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
