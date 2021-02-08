import axios from 'axios'

axios.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    return Promise.reject(error)
  }
)

// axios.defaults.baseURL = 'http://95.217.18.249:8085'
axios.defaults.baseURL = 'http://localhost:8085'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const setAuthToken = token =>
  (axios.defaults.headers.common['access-token'] = token)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthToken,
}