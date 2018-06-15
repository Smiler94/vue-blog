<template>
  <div>
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
  #sub_header {
    width:60%;
    margin:10px auto;
    height:451px;
  }
  #blog {
    width:60%;
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
