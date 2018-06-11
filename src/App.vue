<template>
  <div id="app">
    <Header></Header>
    <SubHeader id="sub_header"></SubHeader>
  </div>
</template>

<script>
import Header from './components/common/header.vue'
import SubHeader from './components/common/sub_header.vue'
export default {
  data () {
    return {

    }
  },
  components: {Header,SubHeader},
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
  }
  #sub_header {
    width:60%;
    margin:10px auto;
  }
</style>
