<template>
    <div>
      <scroller ref="scroller" class="searchList"
        :on-infinite="getMore"
        :on-refresh="refresh"
      >
        <song-list :data="list" @select="selectItem"></song-list>
      </scroller>
    </div>
</template>
<script>
  import {getSearch} from 'api/search';
  import {createSong} from 'api/song';
  import SongList from 'base/song-list/song-list';
  import {mapGetters,mapActions,mapMutations} from 'vuex';
  export default {
    props:{
      query:{
        type: String,
        default: ''
      }
    },
    data() {
      return {
        page: 1,
        prepage:0,
        list: [],
        singer: {}
      }
    },
    computed: {
      ...mapGetters(['playHistory'])
    },
    components: {
      SongList
    },
    methods: {
      ...mapActions(['selectPlay']),
      ...mapMutations({
        setPlayHistory: 'SET_PLAY_HISTORY'
      }),
      _getSearch(query) {
        getSearch(query,this.page,true,this.prepage).then(res=>{
          let data=this.normalizeSong(JSON.parse(/.+\(({.+})\)$/.exec(res)[1]).data.song.list);
          this.list=[...this.list,...data];
          this.singer=JSON.parse(/.+\(({.+})\)$/.exec(res)[1]).data.zhida;
        })
      },
      normalizeSong(list) {
        let ret=[];
        list.forEach(item=>{
          ret.push(createSong(item));
        })
        return ret
      },
      getMore() {
        let num=this.list.length
        if(num/10===this.page){
          this.prepage=this.page;
          this.page+=1;
          this._getSearch(this.query,this.page,true,this.prepage);
        }
        this.$refs.scroller.finishInfinite(false)
      },
      refresh() {
        setTimeout(()=>{
          this.$refs.scroller.finishPullToRefresh(true)
        },300)
      },
      selectItem(song) {
        let list=this.playHistory;
        let flag=list.find(item=>item.id===song.id)
        if(flag){
          let index=list.findIndex(item=>item.id===song.id)
          this.selectPlay({list,index})
        }else{
          this.setPlayHistory(song);
          let list=this.playHistory;
          this.selectPlay({list,index:0})
        }
      }
    },
    watch:{
      query(newQuery) {
        this.list=[];
        this.page=1;
        this.prepage=0;
        this._getSearch(newQuery);
      }
    }
  }
</script>
<style scoped lang="stylus">
  .searchList{
    position fixed;
    top:160px;
    bottom 0;
    height auto;
    width 100%;
    background white;
  }
</style>
