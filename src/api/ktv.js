import axios from '@/libs/api.request'

// ktv列表获取接口;
export const getKTVlist = (params) => {
  return axios.request({
    url: 'copyright/ktv/ktv',
    params,
    method: 'get'
  })
}