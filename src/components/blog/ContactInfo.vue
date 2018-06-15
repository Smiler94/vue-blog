<template>
  <div class="contact_info">
    <ul>
      <li class="weibo">林祯博客<span>新浪微博</span></li>
      <li class="qq">273487984<span>QQ号</span></li>
      <li class="email">273487984@qq.com<span>邮箱账号</span></li>
      <li class="wechat">qq273487984<span>微信号</span></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "contact-info"
    }
</script>

<style scoped>
  .contact_info {

  }
  .contact_info li {
    text-decoration: none;
    display: block;
    height: 40px;
    line-height: 40px;
    font-size:13px;
    padding-left: 34px;
    color: #525252;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .weibo {
    border: 1px solid #ec3d51;
    background: url(../../assets/images/gzbg.jpg) no-repeat 0 9px;
  }
  .weibo span {
    background-color: #ec3d51;
  }
  .qq {
    border: 1px solid #2ab39a;
    background: url(../../assets/images/gzbg.jpg) no-repeat 0 -97px;
  }
  .qq span {
    background-color: #2ab39a;
  }
  .email {
    border: 1px solid #12aae8;
    background: url(../../assets/images/gzbg.jpg) no-repeat 0 -150px;
  }
  .email span {
    background-color: #12aae8;
  }
  .wechat {
    border: 1px solid #199872;
    background: url(../../assets/images/gzbg.jpg) no-repeat 0 -200px;
  }
  .wechat span {
    background-color: #199872;
  }
  .contact_info li span {
    display: block;
    float: right;
    width : 100px;
    text-align: center;
    color: #fff;
    -webkit-transition: 0.5s;
    -moz-transtion: 0.5s;
    -o-transtion: 0.5s;
    transition: 0.5s;
  }
  .contact_info li span:hover {
    width: 120px;
  }
</style>
