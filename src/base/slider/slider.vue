<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { addClass } from 'common/js/dom'
  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    methods: {
      setSliderWidth() {
        this.children = this.$refs.sliderGroup.children
        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          addClass(this.children[i], 'slider-item')
          this.children[i].style.width = sliderWidth + 'px';
          width += sliderWidth;
        }
        if (this.loop) {
          width += 2 * sliderWidth;
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      }
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth()
      }, 20)
    },
    components: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider
    min-height 1px
    width 100%
    overflow hidden
    .slider-group
      position relative
      overflow hidden
      white-space nowrap
      .slider-item
        text-align center
        overflow hidden
        position relative
        float left
        a
          display block
          width 100%
          overflow: hidden
          text-decoration: none
          img
            vertical-align middle
            display: block
            width: 100%
</style>
