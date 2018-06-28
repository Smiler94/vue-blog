<template>
  <div class="bread_crumb">
    <span class="mt"><router-link to="/">网站首页</router-link></span>
    <span class="nt"><router-link to="/">程序人生</router-link></span>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>程序人生</el-breadcrumb-item>
      <el-breadcrumb-item>PHP</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "bread-crumb"
  }
</script>

<style scoped>
  .bread_crumb {
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid #bfbfbf;
  }
  .mt,.nt {
    display:block;
    float:left;
    height: 100%;
    font-size: 15px;
    font-weight: bold;
    padding: 0 20px;
  }
  .mt {
    background-color: #000;
  }
  .mt a,.nt a{
    text-decoration: none;
    color: #fff;
  }
  .nt {
    background-color: #3a6ab5;
  }
  .crumb {
    display:block;
    float:right;
    height: 100%;
    line-height: 40px;
  }
</style>
