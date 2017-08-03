<template>
    <div class="user-wrapper">
      <h1 ref="title" class="title" v-html="user"></h1>
      <div class="form">
        <div>
          <input required class="input" type="text" v-model="user.username" placeholder="请输入用户名">
        </div>
        <div>
          <input required class="input" type="password" v-model="user.password" placeholder="请输入密码">
        </div>
        <div>
          <input ref="signup" class="btn signup" type="submit" @click="_userSignUp" value="注册">
          <input ref="signin" class="btn" type="submit" @click="_userSignIn" value="登录">
        </div>
      </div>
    </div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex';
  import {userSignUp,userSignIn,getUser} from 'api/user'
  export default {
    data() {
      return {
        user: {
          username:'',
          password:''
        },
        title: '(　o=^•ェ•)o　┏━┓搞事'
      }
    },
    created() {
    },
    computed: {
    },
    components: {},
    methods: {
      _userSignUp() {
        userSignUp(this.user).then(res=>{
          this.title=res.data.title;
          let status=res.data.code;
          if(status){
            this.$refs.title.style.color='#31c27c';
            this.$refs.signin.style.background='#31c27c';
          }else{
            this.$refs.title.style.color='red';
          }
        })
      },
      _userSignIn() {
        userSignIn(this.user).then(res=>{
          if(typeof res.data=='String'){
            this.title=res.data;
          }else{
            this.$router.push('/user/userDetail')
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .user-wrapper{
    z-index 100;
    position fixed;
    left:0;
    top:84px;
    width 100%;
    height 100%;
    img{
      width 100%;
      height 100%;
    }
    .title{
      width 100%;
      position: absolute;
      top:50px;
      font-size:20px;
      text-align center;
    }
    .form{
      position absolute;
      width 300px;
      height 200px;
      left 50%;
      top:30%;
      border-radius 20px;
      background #fff;
      filter blur(0.8);
      margin-left -150px;
      margin-top:-100px;
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
          outline:medium;
        }
        .signup{
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
