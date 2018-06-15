<template>
  <div class="blog_info">
    <h3 class="title">
      <a href="" target="_blank">
        <router-link to="/article">别让这些闹心的套路，毁了你的网页设计!</router-link></a>
    </h3>
    <span class="topic">
      <a href="/" target="_blank">
        <img v-bind:src="images.topic1" alt="">
      </a>
    </span>
    <p class="text">
      如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...
    </p>
    <BlogBaseInfo id="blog_base_info"></BlogBaseInfo>
  </div>
</template>

<script>
  import topic1 from '../../assets/toppic01.jpg';
  import BlogBaseInfo from './BlogBaseInfo.vue';
  export default {
    name: "blog-info",
    data() {
      return {
        images: {
          topic1 : topic1
        }
      }
    },
    components: {BlogBaseInfo}
  }
</script>

<style scoped>
  .blog_info {
    /*height:216px;*/
    background-color:#fff;
    padding:20px;
  }
  .title {
    display:block;
    font-size:20px;
    color:#555;
    text-align: left;
    margin-bottom:10px;
  }
  .title a {
    text-decoration: none;
    color:#555;
  }
  .topic {
    width:30%;
    float:left;
    display:block;
    margin-right:20px;
  }
  .topic img {
    width:100%;
  }
  .text {
    font-size:14px;
    color:#566573;
    margin-top:20px;
    text-overflow: ellipsis;
    display:block;
    text-align:left;
  }
  #blog_base_info {
    margin-top:30px;
  }
</style>
