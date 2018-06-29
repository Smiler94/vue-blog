<template>
  <div class="markdown-body">
    <mavon-editor
      :value="content"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      fontSize="16px"
      :boxShadow="false"
    >
    </mavon-editor>
  </div>
</template>

<script>
  export default {
    name: "markdown-body",
    data() {
      return {}
    },
    props: ['content']
  }
</script>

<style scoped>
  .v-note-wrapper {
    font-size: 16px;
  }
</style>
