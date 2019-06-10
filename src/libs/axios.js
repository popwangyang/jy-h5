import axios from 'axios'
import store from '@/store'
import { getToken, setToken } from './util'

import router from '../router'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,

      headers: {
        'Content-Type': 'application/json;'
      }

    }
    return config
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
    // 动态添加token
      if (getToken()) {
        config.headers.Authorization = 'Bearer ' + getToken()
      }

      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截

    instance.interceptors.response.use(response => {
      const { data, status } = response
      return { data, status }
    }, error => {
      const { data, status } = error.response
      if (status === 401) {
        // setToken('')
        // router.push({
        //   name: 'login'
        // })
      }
      return Promise.reject({ data, status })
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
