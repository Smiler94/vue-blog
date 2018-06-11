<template>
  <div id="app">
    <Header></Header>
    <Banner id="sub_header"></Banner>
    <BlogBox></BlogBox>
  </div>
</template>

<script>
import Header from './components/common/header.vue'
import Banner from './components/blog/Banner.vue'
import BlogBox from './components/blog/BlogBox'

export default {
  data () {
    return {

    }
  },
  components: {Header,Banner,BlogBox},
  events: {

  },
  methods : {

  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f6f6f6;
  }
  #sub_header {
    width:60%;
    margin:10px auto;
  }
</style>
