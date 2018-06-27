<template>
  <div class="article_detail">
    <div class="article_content">
      <h2 class="title">
        {{title}}
      </h2>
      <BlogBaseInfo id="blog_base_info" :baseInfo="baseInfo"></BlogBaseInfo>
      <div class="tags">
        <a href="/" v-for="tag in tags" :key="tag.id">{{tag.name}}</a>
      </div>
      <MarkdownBody :content="content"></MarkdownBody>
    </div>
  </div>
</template>

<script>
  import BlogBaseInfo from './BlogBaseInfo'
  import MarkdownBody from '../common/MarkdownBody'
  import ArticleApi from '../../api/article'
  export default {
    name: "article",
    data () {
      return {
        title: '',
        content: '',
        cate: '',
        baseInfo: {
          category: '',
          createTime: '',
          click: 0
        },
        tags: []
      }
    },
    components: {
      BlogBaseInfo, MarkdownBody
    },
    props: ['article_id'],
    watch: {
      article_id (val, oldVal) {
        ArticleApi.getById(val).then(res => {
          if (res.code === 0) {
            let info = res.info
            this.title = info.title
            this.content = info.content
            this.baseInfo.category = info.category.name
            this.baseInfo.createTime = info.created_at
            this.baseInfo.click = info.click
            this.tags = info.tags
          }
        })
      }
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
