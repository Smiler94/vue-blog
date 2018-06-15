<template>
  <div class="follow_us">
    <div class="follow_us_con">
      <FlowTitle id="flow_title"></FlowTitle>
      <ContactInfo id="contact_info"></ContactInfo>
    </div>
  </div>
</template>

<script>
  import FlowTitle from '../common/FlowTitle'
  import ContactInfo from './ContactInfo'
  export default {
    name: "follow-us",
    components: {
      FlowTitle, ContactInfo
    }
  }
</script>

<style scoped>
  .follow_us {
    display: inline-block;
    background-color: #fff;
  }
  .follow_us_con {
    padding: 35px 30px;
  }
  #contact_info {
    margin-top: 25px;
  }
</style>
