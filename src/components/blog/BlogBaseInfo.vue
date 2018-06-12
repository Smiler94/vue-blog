<template>
  <div class="info">
    <ul>
      <li class="author">林祯</li>
      <li class="lmname">学无止境</li>
      <li class="time">2018-06-12</li>
      <li class="view"><span>24567</span>已阅读</li>
      <li class="like">999</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "blog-base-info"
    }
</script>

<style scoped>
  .info {
    display:block;
    height:21px;
  }
  .info ul li {
    text-decoration: none;
    display:inline-block;
    padding-left:20px;
    font-size:14px;
    color: #748594;
    line-height:1.5;
    float:left;
    margin-right: 15px;
  }
  .author {
    background: url(../../assets/auicon.jpg) no-repeat 0 0
  }
  .lmname {
    background: url(../../assets/auicon.jpg) no-repeat top -23px left
  }
  .time {
    background: url(../../assets/auicon.jpg) no-repeat top -44px left;
  }
  .view {
    background: url(../../assets/auicon.jpg) no-repeat top -64px left;
  }
  .like {
    background: url(../../assets/auicon.jpg) no-repeat top -85px left;
  }
</style>
