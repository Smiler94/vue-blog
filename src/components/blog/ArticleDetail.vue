<template>
  <div class="article_detail">
    <div class="article_content">
      <h2 class="title">
        个人博客，属于我的小世界！
      </h2>
      <BlogBaseInfo id="blog_base_info"></BlogBaseInfo>
      <div class="tags">
        <a href="/">个人博客</a>
        <a href="/">小世界</a>
      </div>
      <MarkdownBody></MarkdownBody>
    </div>
  </div>
</template>

<script>
  import BlogBaseInfo from './BlogBaseInfo'
  import MarkdownBody from '../common/MarkdownBody'
  export default {
    name: "article",
    data () {
      return {

      }
    },
    components: {
      BlogBaseInfo, MarkdownBody
    }
  }
</script>

<style scoped>
  .article_detail {
    background-color: #fff;
    display: inline-block;
  }

  .article_content {
    padding: 0 30px;
  }
  .title {
    display: block;
    padding: 30px 0 15px;
    text-align: left;
    border-bottom: 1px solid rgba(27, 31, 35, 0.1);
  }

  #blog_base_info {
    margin-top: 15px;
  }
  .tags {
    margin: 25px 0 30px;
    height: 27px;
  }
  .tags a {
    display: block;
    float: left;
    margin-right: 30px;
    background-color: #f4650e;
    color:#fff;
    padding:3px 8px;
    text-decoration: none;
    font-size: 15px;
  }
</style>
