<template>
    <div class="flow_title">
      <h2 class="hometitle">关注我们</h2>
    </div>
</template>

<script>
    export default {
        name: "flow-title"
    }
</script>

<style scoped>
  .flow_title {

  }
  .flow_title:hover ::after {
    width: 70px;
  }
  .hometitle {
    color: #282828;
    font-weight: 600;
    padding-bottom: 15px;
    position: relative;
    font-size:20px;
  }
  .hometitle:after {
    content: "";
    background-color: #282828;
    width :50px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
</style>
