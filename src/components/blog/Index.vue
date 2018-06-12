<template>
  <div>
    <Banner id="sub_header"></Banner>
    <div id="blog">
      <BlogBox id="blog_box"></BlogBox>
    </div>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  import BlogBox from './BlogBox.vue'
  export default {
    name: "index",
    components: {
      Banner, BlogBox
    }
  }
</script>

<style scoped>
  #sub_header {
    width:60%;
    margin:10px auto;
    height:451px;
  }
  #blog {
    width:60%;
    margin:10px auto;
  }

  #blog_box {
    width:66%;
  }
</style>
