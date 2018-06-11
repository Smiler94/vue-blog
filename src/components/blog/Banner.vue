<template>
  <div class="picsbox">
    <div class="banner">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in banner_img" :key="key">
          <img style="width:100%" v-bind:src="item" alt="">
          <span class="imginfo">别让这些闹心的套路</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="topic">
      <ul>
        <li v-for="item in card_img" :key="key">
          <a href="/" target="_blank">
            <i><img v-bind:src="item"></i>
            <h2>别让这些闹心的套路，毁了你的网页设计!</h2>
            <span>学无止境</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import banner1 from '../../assets/banner01.jpg'; // 引入图片
  import banner2 from '../../assets/banner02.jpg';
  import banner3 from '../../assets/banner03.jpg';
  import topic1 from '../../assets/toppic01.jpg';
  import zd1 from '../../assets/zd01.jpg';
  export default {
    name: "sub_header.vue",
    data() {
      return {
        banner_img: [
          banner1,
          // banner2,
          // banner3
        ],
        card_img: [
          topic1,zd1
        ]
      }
    }
  }
</script>

<style scoped>
  li {
    list-style:none
  }
  .banner {
    width:66%;
    float:left;
  }
  .imginfo {
    z-index: 9;
    width:100%;
    padding-left:40px;
    position: absolute;
    font-size: 26px;
    color: #FFF;
    display: block;
    overflow: hidden;
    bottom: 12%;
    background: #00000061;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .topic {
    position:relative;
    height:450px;
    float:right;
    width:33%;
    overflow:hidden;
  }
  .topic img {
    width:100%;
    height:216px;
  }
  .topic li {
    position: relative;
    height:216px;
  }
  .topic li i {
    display: block;
    opacity: 0.7;
  }
  .topic li:hover i {
    opacity: 1;
  }
  .topic li h2 {
    position: absolute;
    color:#fff;
    background: rgba(0,0,0,0.7);
    padding:10px 20px;
    display:block;
    font-size:16px;
    bottom: 0;
    right:0;
    left:0;
  }
  .topic li span {
    display:block;
    color:#fff;
    background: rgba(0,0,0,0.7);
    left:20px;
    top:20px;
    padding:6px 10px;
    position:absolute;
    font-size:12px;
    border-radius:3px;
  }
  .topic li:last-child {
    margin-top: 19px;
  }
</style>
