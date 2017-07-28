<template>
    <div>
      <search-bar ref="searchBar" @query="setQueryValue"></search-bar>
     <div class="hotWrapper" v-show="query.length===0">
       <h1 class="hot">热门搜索</h1>
       <ul class="hotTag">
         <li @click="addQuery(tag.k)" v-for="tag in hotTag">{{tag.k}}</li>
       </ul>
     </div>
      <div class="searchOut">
        <suggest v-show="query" :query="query"></suggest>
      </div>
    </div>
</template>
<script>
  import SearchBar from 'base/search-bar/search-bar';
  import {getHotTag} from 'api/search';
  import {ERR_OK} from 'api/config';
  import Suggest from 'components/suggest/suggest'
  export default {
    data() {
      return {
        query: '',
        hotTag: []
      }
    },
    created() {
      this._getHotTag()
    },
    computed: {},
    components: {
      SearchBar,
      Suggest
    },
    methods: {
      _getHotTag() {
        getHotTag().then(res=>{
          if(res.code==ERR_OK){
            this.hotTag=res.data.hotkey.slice(1,10);
          }
        })
      },
      addQuery(query) {
        this.$refs.searchBar.setQuery(query);
      },
      setQueryValue(query) {
        this.query=query;
      }
    }
  }
</script>
<style scoped lang="stylus">
  .hot{
    padding-left 20px;
    padding-bottom 10px;
  }
 .hotTag{
   li{
     display inline-block;
     border: 0.5px solid #ccc;
     border-radius:18px;
     padding 8px 10px;
     margin: 5px 5px 5px 10px;
     background white;
   }
 }
</style>
