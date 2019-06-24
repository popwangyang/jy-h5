import HttpRequest from '@/libs/axios'
import config from '@/config'
import { spring, NoTokenRefresh } from '@/libs/util'
import {
  getToken,
  setToken
} from '@/libs/util'
import {
  hasOneOf
} from '@/libs/tools'

var baseUrl = null

const url = window.location.href
if (url.indexOf('info') > -1) {
  baseUrl = config.baseUrl.info
} else if (url.indexOf('pre') > -1) {
  baseUrl = config.baseUrl.pre
} else if (url.indexOf('dev') > -1) {
  baseUrl = config.baseUrl.dev
} else if (url.indexOf('test') > -1) {
  baseUrl = config.baseUrl.test
} else {
  baseUrl = config.baseUrl.dev
}
export const URL = baseUrl
const Ajax = new HttpRequest(baseUrl)
const axios = {
  request: (option) => {
    return new Promise((resolve, reject) => {
      if (getToken() && spring(10000) && !NoTokenRefresh(option)) {
        console.log('刷新token', !NoTokenRefresh(option))
        Ajax.request({
          url: 'copyright/api-token-refresh/',
          data: {
            token: getToken()
          },
          method: 'post'
        }).then((res) => {
          setToken(res.data.token)
          Ajax.request(option).then((res) => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          reject(err)
        })
      } else {
        Ajax.request(option).then((res) => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      }
    })
  }
}

// 传参为data 取参数用req.body, 传参为params， 取参为在URL中进行。
export default axios
