<template>
  <div class="bread_crumb">
    <span class="mt">网站首页</span>
    <span class="nt">慢生活</span>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
      <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>慢生活</el-breadcrumb-item>
      <el-breadcrumb-item>程序人生</el-breadcrumb-item>
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
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 0 20px;
  }
  .mt {
    background-color: #000;
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
