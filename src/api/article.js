import http from './public.js'

export default{
  create: (article) => {
    return http.fetchPost('/admin/article', article)
  },
  getById: (id) => {
    return http.fetchGet('/article/'+id, {})
  },
  list: (page) => {
    return http.fetchGet('/listing?page='+page, {})
  }
}
