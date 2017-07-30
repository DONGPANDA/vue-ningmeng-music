<template>
    <div class="user-wrapper" v-show="user">
      <img src="./musicBg2.jpeg" alt="">
      <form class="form">
        <div>
          <span>用户名:</span>
          <input class="input" type="text" placeholder="请输入用户名">
        </div>
        <div>
          <span>密码:</span>
          <input class="input" type="password" placeholder="请输入密码">
        </div>
        <div>
          <input class="btn" type="submit" value="注册">
          <input class="btn" type="submit" value="登录">
        </div>
      </form>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['user'])
    },
    components: {},
    methods: {}
  }
</script>
<style scoped lang="stylus">
  .user-wrapper{
    position fixed;
    left:0;
    top:44px;
    width 100%;
    height 100%;
    img{
      width 100%;
      height 100%;
    }
    .form{
      position absolute;
      width 80%;
      height 30%;
      top:50%;
      left 50%;
      border-radius 20px;
      background #fff;
      filter blur(0.8);
      margin-left -40%;
      margin-top -50%;
      display flex;
      flex-direction column;
      flex-wrap wrap;
      align-items center;
      justify-content space-around;
      div{
        font-size 18px;
        margin 0 20px;
        width auto;
        .btn{
          width 120px;
          height 40px;
          border-radius 10px;
          background #31c27c;
        }
        .input{
          padding-left 10px;
          height 40px;
          width 70%;
          font-size:20px;
          outline: medium;
        }
      }
    }
  }
</style>
