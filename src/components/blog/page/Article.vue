<template>
  <div class="article">
    <BreadCrumb id="bread_crumb"></BreadCrumb>
    <div class="content">
      <ArticleDetail id="article_detail"></ArticleDetail>
      <FollowUs id="follow_us"></FollowUs>
    </div>
  </div>
</template>

<script>
  import BreadCrumb from '../../common/BreadCrumb'
  import ArticleDetail from '../ArticleDetail'
  import FollowUs from '../FollowUs'
  export default {
    name: "article",
    components: {
      BreadCrumb,ArticleDetail,FollowUs
    }
  }
</script>

<style scoped>
  .article {
    width: 1140px;
    margin: 20px auto;
    text-align: left;
  }
  .content {
    margin-top: 20px;
  }
  #article_detail {
    width: 66%;
  }
  #follow_us {
    width: 32%;
    float:right;
  }
</style>
