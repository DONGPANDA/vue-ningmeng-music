<template>
  <div class="user-wrapper">
    <div>
      <span>{{user.username}}</span>
    </div>
      <router-view></router-view>
  </div>
</template>
<script>
  import { getUser } from 'api/user'
  export default {
    data() {
      return {
        user:{}
      }
    },
    created() {
      //this._getUser();
    },
    computed: {},
    components: {},
    methods: {
      _getUser() {
        getUser().then(res => {
          if (!res.data.code) {
            this.$router.push({
              path: '/user/userSign'
            });
          }else{
            this.user=res.data;
          }
        })
      }
    },
    watch:{
      /*'$route'(to,from) {
        if(to.path=='/user'){
          this._getUser();
        }
      }*/
    }
  }
</script>
<style scoped lang="stylus">
  .user-wrapper {
    position fixed;
    left: 0;
    top: 84px;
    width 100%;
    height 100%;
  }
</style>
