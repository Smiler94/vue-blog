<template>
  <div class="menu">
    <div class="nav">
      <div class="logo"><h1>林祯的博客</h1></div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff">
        <!--<el-menu-item index="1">网站首页</el-menu-item>-->
        <!--<el-menu-item index="2">学无止境</el-menu-item>-->
        <!--<el-menu-item index="3">关于我</el-menu-item>-->
        <!--<el-menu-item index="4">给我留言</el-menu-item>-->
      </el-menu>
    </div>
  </div>

</template>
<script>
  export default {
    name: "header",
    data() {
      return {

      };
    },
    methods: {

    }
  }
</script>
<style scoped>
  .menu {
    /*background-color: #304147;*/
    background: url(../../assets/images/bg.jpg) no-repeat fixed;
    color:#fff;
    height: 80px;
  }
  .nav {
    margin: 0 auto;
    width: 60%;
    height: 80px;
    display:inline-block;
  }
  .logo {
    line-height:80px;
    height:80px;
    float:left;
  }
  .logo h1 {
    margin:0;
  }
  .el-menu {
    border:0;
    float:left;
    margin-left:100px;
  }
  .el-menu li {
    height: 80px;
    line-height:80px;
    font-size:16px;
  }
</style>
