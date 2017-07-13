<template>
  <div class="recommond">
    <div class="slider-wrapper" v-if="recommondData.length">
      <slider>
        <div v-for="item in recommondData">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    <div class="recommond-list">
      <h1>热门歌单</h1>
      <ul class="list-wrapper">
        <li v-for="diss in dissList" class="diss">
            <img :src="diss.imgurl" alt="">
            <span class="title" v-html="diss.dissname"></span>
            <span class="auther" v-html="diss.creator.name"></span>
        </li>
      </ul>
      <h3 v-show="dissList.length">没有更多</h3>
    </div>
    <loading v-show="dissList.length===0"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import { getRecommond, getDiss } from 'api/recommond'
  import { ERR_OK } from 'api/config'
  import Loading from 'base/loading/loading'
  export default {
    data() {
      return {
        recommondData: [],
        dissList: []
      }
    },
    components: {
      Slider,
      Loading
    },
    created() {
      this._getRecommond()
      this._getDiss()
    },
    methods: {
      _getRecommond() {
        getRecommond().then(res => {
          if (ERR_OK === 0) {
            this.recommondData = res.data.slider
          }
        })
      },
      _getDiss() {
        getDiss().then(res => {
          if (ERR_OK === 0) {
            this.dissList = res.data.list
            console.log(this.dissList)
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .recommond {
    width: 100%;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      margin-bottom: 14px;
    }
    .recommond-list {
      margin: 10px 10px;
      h1{
        margin: 10px 10px;
      }
      .list-wrapper{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .diss{
          background: #fff;
          padding: 1%;
          width:46%;
          margin-bottom: 10px;
          img{
            vertical-align: middle;
            width: 100%;
          }
          span{
            display: block;
            width:100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
            padding: 2px;
          }
        }
      }
      h3{
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
</style>
