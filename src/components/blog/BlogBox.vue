<template>
  <div>
    <div v-for="item in 4" :key="key">
      <BlogInfo class="blog_info"></BlogInfo>
    </div>
  </div>
</template>

<script>
  import BlogInfo from './BlogInfo.vue';
  export default {
    name: "article-list",
    components:{BlogInfo}
  }
</script>

<style scoped>
  .blog_info {
    display: inline-block;
  }
</style>
