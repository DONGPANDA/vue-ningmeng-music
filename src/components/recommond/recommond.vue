<template>
  <div class="recommond">
    <div class="slider-wrapper">
      <slider>
        <div v-for="item in recommondData">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import { getRecommond } from 'api/recommond'
  import { ERR_OK } from 'api/config'
  export default {
    data() {
      return {
        recommondData: []
      }
    },
    components: {
      Slider
    },
    created() {
      this._getRecommond()
    },
    methods: {
      _getRecommond() {
        getRecommond().then(res => {
          if (ERR_OK === 0) {
            this.recommondData = res.data.slider
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider-wrapper
    position relative
    width:100%
    overflow: hidden
</style>
