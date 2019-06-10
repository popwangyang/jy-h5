import axios from '@/libs/api.request'

// 商户列表获取

export const  getMerchantList = (params) => {
	console.log(params)
	return axios.request({
	  url: '/getMerchantList/',
	  params,
	  method: 'get'
	})
}
