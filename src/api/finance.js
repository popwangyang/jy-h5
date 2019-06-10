import axios from '@/libs/api.request'
// 传参设置说明，请求方法为get，用params, 其他方式都用data；

// 合同到账审批 对接人游明
export const financeApprovalList = (params) => {
  return axios.request({
    url: 'copyright/ktv/charge',
    params,
    method: 'get'
  })
}
// 【KTV】首次充值到账核对 对接人游明
export const financeApprovalCheck = (data) => {
  var id = data.id
  console.log(id)
  delete data.id
  return axios.request({
    url: `copyright/ktv/charge/${id}`,
    data,
    method: 'put'
  })
}

// 结算管理 对接人C猛
export const financeSettlementList = (params) => {
  return axios.request({
    url: '/copyright/right_people/copyright_settlements/reviews/extracts',
    params,
    method: 'get'
  })
}
//
export const ConfirmationArrival = (data) => {
  var id = data.id
  delete data.id
  return axios.request({
    url: `/copyright/right_people/copyright_settlements/reviews/extracts/${id}`,
    data,
    method: 'post'
  })
}

// 【KTV】退款申请管理列表 对接人游明
export const financeRefund = (params) => {
  return axios.request({
    url: 'copyright/ktv/refund-manage',
    params,
    method: 'get'
  })
}

//
export const confirmRefund = (data) => {
  var id = data.id
  delete data.id
  return axios.request({
    url: `copyright/ktv/refund-manage/${id}`,
    data,
    method: 'patch'
  })
}
