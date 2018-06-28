<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <BlogInfo class="blog_info" :article="article"></BlogInfo>
    </div>
  </div>
</template>

<script>
  import BlogInfo from './BlogInfo.vue';
  import ArticleApi from '../../api/article'
  export default {
    name: "blog-box",
    components:{BlogInfo},
    data() {
      return {
        articles: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getList(1)
      })
    },
    methods: {
      getList (page) {
        ArticleApi.list(page).then((res) => {
          if (res.info.data.length > 0) {
            this.articles = res.info.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .blog_info {
    display: inline-block;
  }
</style>
