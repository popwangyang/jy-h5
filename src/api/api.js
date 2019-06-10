/*
    @Time    : 2019/3/28 08:43
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : api.js
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2019 */
import axios from '@/libs/api.request'

// get请求
export const get = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'GET',
    params: params
  }).then(res => res.data)
}

// post请求
export const post = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'POST',
    data: params
  }).then(res => res.data)
}

// patch请求
export const patch = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'PATCH',
    data: JSON.stringify(params)
  }).then(res => res.data)
}

// VIEW请求
export const VIEW = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'VIEW',
    data: JSON.stringify([params])
  }).then(res => res.data)
}
// DELETE请求
export const DELETE = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'DELETE',
    data: JSON.stringify([params])
  }).then(res => res.data)
}
// put请求
export const put = (url, params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/json;'
    },
    url: url,
    method: 'PUT',
    data: params
  }).then(res => res.data)
}
