<template>
  <div class="edit_article">
    <BreadCrumb id="bread_crumb"></BreadCrumb>
    <div class="article_form">
      <el-form :model="articleForm" ref="articleForm" label-width="60px" label-position="left">
        <el-form-item label="标题">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="articleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select placeholder="请选择分类" v-model="articleForm.type">
            <el-option label="php" value="php"></el-option>
            <el-option label="python" value="python"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <mavon-editor v-model="articleForm.content"></mavon-editor>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('articleForm')">
            重置
          </el-button>
          <el-button type="primary" @click="submitForm('articleForm')">
            发布
          </el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  import BreadCrumb from '../../common/BreadCrumb'
  export default {
    name: "edit-article",
    data () {
      return {
        articleForm: {
          title: '',
          description: '',
          type: '',
          content: ''
        }
      }
    },
    components: {
      BreadCrumb
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm() {
        console.log(this.articleForm)
      }
    }
  }
</script>

<style scoped>
  .v-note-wrapper {
    min-height: 800px;
  }
  .edit_article {
    width: 1140px;
    margin: 20px auto;
    text-align: left;
  }
  .article_form {
    margin-top: 20px;
  }
</style>
