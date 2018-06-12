<template>
  <div class="article_detail">
    <h2 class="title">
      个人博客，属于我的小世界！
    </h2>
    <BlogBaseInfo id="blog_base_info"></BlogBaseInfo>
    <div class="tags">
      <a href="/">个人博客</a>
      <a href="/">小世界</a>
    </div>
    <div class="detail" v-html="detail">
      {{detail}}
    </div>
  </div>
</template>

<script>
  import BlogBaseInfo from './BlogBaseInfo.vue'
  import MavonEditor from 'mavon-editor'
  import Hljs from 'highlight.js'

  let md = MavonEditor.markdownIt
  md.configure({
    highlight: (str, lang) => {
      console.log(str)
      console.log(lang)
      if (lang && Hljs.getLanguage(lang)) {
        try {
          return Hljs.highlight(lang, str, true).value;
        } catch(__) { }
      }
      return '';
    }
  })
  console.log(Hljs.highlight('php', 'public function attch() {}', true).value)
  export default {
    name: "article",
    data () {
      let detail = md.render("### sdfdfs\n" +
        "\n" +
        "```php\n" +
        "public function attach(\\SplObserver $observer)\n" +
        "{\n" +
        "    $this->observers->attch($observer);\n" +
        "}\n" +
        "```")
      return {
        detail: detail
      }
    },
    components: {
      BlogBaseInfo
    }
  }
</script>

<style scoped>
  .article_detail {
    background-color: #fff;
    display: block;
    padding:0 30px;
  }

  .title {
    display: block;
    padding-top: 30px;
    text-align: left;
  }

  #blog_base_info {
    margin-top: 30px;
    font-weight:bold;
  }
  .tags {
    margin: 25px 0 30px;
    height: 27px;
  }
  .tags a {
    display: block;
    float: left;
    margin-right: 30px;
    background-color: #f4650e;
    color:#fff;
    padding:3px 8px;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
  }

  .detail{
    text-align:left;
  }
</style>
