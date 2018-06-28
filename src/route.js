import Index from './components/blog/page/Index'
import Article from './components/blog/page/Article'
import EditArticle from './components/admin/page/EditArticle'
export default [
  {
    path: '/',
    component: Index,
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'article',
    path: '/article/:id',
    component: Article,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/admin/edit',
    component: EditArticle
  }
]
