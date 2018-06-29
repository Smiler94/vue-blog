<template>
  <div id="app" v-if="$route.name != 'login'">
    <Header></Header>
    <div id="router_view">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
  <div id="app" style="height:100%" v-else>
    <Login></Login>
  </div>
</template>

<script>
import Header from './components/common/header.vue'
import Footer from './components/common/Footer'
import Login from './components/admin/page/Login'
export default {
  data () {
    return {

    }
  },
  components: {Header, Footer, Login},
  events: {

  },
  methods : {

  }
}
</script>

<style scoped>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f6f6f6;
    min-height: 100%;
  }

  #router_view {
    width: 100%;
  }
</style>
