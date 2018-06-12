<template>
  <div class="article">
    <BreadCrumb id="bread_crumb"></BreadCrumb>
    <div class="content">
      <ArticleDetail id="article_detail"></ArticleDetail>
    </div>
  </div>
</template>

<script>
  import BreadCrumb from '../../common/BreadCrumb'
  import ArticleDetail from '../ArticleDetail'
  export default {
    name: "article",
    components: {
      BreadCrumb,ArticleDetail
    }
  }
</script>

<style scoped>
  .article {
    width: 60%;
    margin: 20px auto;
  }
  .content {
    margin-top: 20px;
  }
  #article_detail {
    width: 66%;
    height: 100%;
  }
</style>
