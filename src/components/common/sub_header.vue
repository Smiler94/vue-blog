<template>
  <div class="sub_menu">
    <div class="left_car">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in banner_img" :key="key">
          <img v-bind:src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right_car">
      <div v-for="item in card_img" :key="key">
        <el-card :body-style="{padding: '0px',height: '220px',padding_bottom:'5px'}" :shadow="hover">
          <img v-bind:src="item" alt="" class="image">
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import banner1 from '../../assets/banner01.jpg'; // 引入图片
  import banner2 from '../../assets/banner02.jpg';
  import banner3 from '../../assets/banner03.jpg';
  import topic1 from '../../assets/toppic01.jpg';
  import zd1 from '../../assets/zd01.jpg';
  export default {
    name: "sub_header.vue",
    data() {
      return {
        banner_img: [
          banner1,
          banner2,
          banner3
        ],
        card_img: [
          topic1,zd1
        ]
      }
    }
  }
</script>

<style scoped>
  .left_car {
    width:66%;
    float:left;
  }

  .right_car {
    height:450px;
    float:right;
    width:33%;
  }

  .el_card img{
    width:100%;
  }
</style>
