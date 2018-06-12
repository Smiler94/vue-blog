<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/common/header.vue'
export default {
  data () {
    return {

    }
  },
  components: {Header},
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
</style>
