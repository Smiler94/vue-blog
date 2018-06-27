<template>
  <div class="edit_article">
    <BreadCrumb id="bread_crumb"></BreadCrumb>
    <div class="article_form">
      <el-form :model="articleForm" ref="articleForm" label-width="60px" label-position="left">
        <el-form-item label="标题">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select placeholder="请选择分类" v-model="articleForm.cate_id">
            <el-option v-for="cate in categories" :key="cate.id" :label="cate.name" :value="cate.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-select placeholder="请输入或选择标签" v-model="articleForm.tags" multiple filterable allow-create default-first-option >
            <el-option v-for="tag in tags" :key="tag.id" :label="tag.name" :value="tag.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <mavon-editor v-model="articleForm.content"></mavon-editor>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('articleForm')">
            重置
          </el-button>
          <el-button type="primary" @click="submitForm()">
            发布
          </el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  import BreadCrumb from '../../common/BreadCrumb'
  import ArticleApi from '../../../api/article'
  import CategoryApi from '../../../api/category'
  import TagApi from '../../../api/tag'
  export default {
    name: "edit-article",
    data () {
      return {
        articleForm: {
          title: '',
          cate_id: '',
          content: '',
          tags: []
        },
        categories: [],
        tags: []
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
        ArticleApi.create(this.articleForm).then((res) => {
          if (res.code == 0) {
            this.$router.push({
              name: 'article',
              params: {
                id: res.info
              }
            })
          }
        })
      }
    },
    mounted () {
      this.$nextTick((e) => {
        CategoryApi.getAll().then((res) => {
          this.categories = res.info;
        })
        TagApi.getAll().then((res) => {
          this.tags = res.info
        })
      })
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
