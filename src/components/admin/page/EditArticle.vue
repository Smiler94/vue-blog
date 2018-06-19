<template>
    <div class="edit_article">
      <mavon-editor v-model="value"></mavon-editor>
    </div>
</template>

<script>
  export default {
    name: "edit-article",
    data () {
      return {
        value: ""
      }
    }
  }
</script>

<style scoped>
  .v-note-wrapper {
    min-height: 800px;
  }
</style>
