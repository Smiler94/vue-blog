import Index from './components/blog/page/Index'
import Article from './components/blog/page/Article'
import EditArticle from './components/admin/page/EditArticle'
import Login from './components/admin/page/Login'
export default [
  {
    path: '/',
    component: Index
  },
  {
    name: 'article',
    path: '/article/:id',
    component: Article
  },
  {
    path: '/admin/edit',
    component: EditArticle
  },
  {
    name: 'login',
    path: '/admin/login',
    component: Login
  }
]
