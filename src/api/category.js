import http from './public'

export default {
  getAll: () => {
    return http.fetchGet('/admin/category');
  }
}
