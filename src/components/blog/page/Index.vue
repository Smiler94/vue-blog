<template>
  <div class="index">
    <Banner id="sub_header"></Banner>
    <div id="blog">
      <BlogBox id="blog_box"></BlogBox>
      <FollowUs id="follow_us"></FollowUs>
    </div>
  </div>
</template>

<script>
  import Banner from '../Banner.vue'
  import BlogBox from '../BlogBox.vue'
  import FollowUs from '../FollowUs'
  export default {
    name: "index",
    components: {
      Banner, BlogBox, FollowUs
    }
  }
</script>

<style scoped>
  .index {
    width: 1140px;
    margin: 0 auto;
  }
  #sub_header {
    margin:10px auto;
    height:451px;
  }
  #blog {
    margin:10px auto;
    text-align: left;
  }

  #blog_box {
    width:66%;
    display: inline-block;
  }

  #follow_us {
    width: 33%;
    float:right;
  }
</style>
