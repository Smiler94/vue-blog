<template>
  <div class="login">
    <div class="login-main">
      <h2 class="title">
        博客管理系统
      </h2>
      <el-form class="login-form">
        <el-form-item >
          <el-input class="uname" v-model="loginForm.userName" placeholder="please input user name" auto-complete="off" size="large">
          </el-input>
        </el-form-item>
        <el-form-item class="password" prop="pass" auto-complete="off" size="large">
          <el-input type="password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="large">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        loginForm: {
          userName: '',
          password: ''
        }
      }
    }
  }
</script>

<style scoped>
  .login{
    height: 100%;
    background: url(../../../assets/images/bg.jpg) fixed -250px 0;
    background-size: 100% 100%;
    position: relative;
  }
  .login-main {
    width: 400px;
    margin: -175px 0 0 -200px;
    position: absolute;
    top: 50%;
    right: 20%;
  }
  .title {
    font-family:"微软雅黑",Arial, Helvetica,sans-serif;
    display: block;
    color: #fff;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid white;
    font-size:28px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px 5px 0 0;
  }
  .login-form {
    padding: 40px 50px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 0 0 5px 5px;
  }
  .login-form .el-input {
    height: 50px;
    line-height: 50px;
  }
  .login-form button{
    width:100%;
    font-size: 17px;
  }
</style>
