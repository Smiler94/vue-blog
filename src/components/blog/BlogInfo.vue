<template>
  <div class="blog_info">
    <h3 class="title">
      <a href="" target="_blank">
        <router-link :to="'/article/'+article.id">{{article.title}}</router-link></a>
    </h3>
    <span class="topic">
      <a href="/" target="_blank">
        <img v-bind:src="images.topic1" alt="">
      </a>
    </span>
    <p class="text">
      {{article.content}}
    </p>
    <BlogBaseInfo id="blog_base_info" :baseInfo="baseInfo"></BlogBaseInfo>
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
        },
        baseInfo: {}
      }
    },
    components: {BlogBaseInfo},
    props:['article'],
    mounted () {
      this.baseInfo = {
        category: this.article.category.name,
        click: this.article.click,
        createTime: this.article.created_at
      }
      this.article.content = this.article.content.slice(0,80)
    }
  }
</script>

<style scoped>
  .blog_info {
    /*height:216px;*/
    background-color:#fff;
    padding:20px;
    margin-bottom: 20px;
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
