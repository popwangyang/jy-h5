import axios from '@/libs/api.request'

// 订单列表;
export const getOrderList = (params) => {
  return axios.request({
    url: 'copyright/settlement/order',
    params,
    method: 'get'
  })
}
