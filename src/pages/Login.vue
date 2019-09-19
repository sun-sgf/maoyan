<template>
    <div class="login">
      <Header title="用户登录" flag="1"></Header>
      <div>
        <div class="login_input"><input type="text" v-model="tel" placeholder="请输入手机号" autocomplete="false"></div>
        <div class="login_input"><input type="text" v-model="msg" placeholder="请输入短信验证码" autocomplete="false"></div>
      </div>
      <div class="login_btn">登录</div>
    </div>
</template>

<script>
    import Header from "../components/Header"
    export default {
        name: "Login",
      components:{Header},
      data(){
          return{
            tel:"",
            msg:""
          }
      },
      methods:{
          goBack(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  .film_title{
    line-height: 50px;
    background-color: #e54847;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
  }

  .login_input{
    height: 44px;
    border-bottom: 1px solid #d6d6d6;

    margin: 15px;
  }
  .login_input input{
    display: inline-block;
    width: 100%;
    font-size: 18px;
    height: 44px;
    outline: 0 none;
    border: 0 none;
  }
  .login_btn{
    background-color: #dcdcdc;
    /*color: #999;*/
    line-height: 50px;
    text-align: center;
    letter-spacing: 10px;
    border-radius: 6px;
    color: red;
    font-size: 22px;
    margin: 15px ;
  }
</style>
