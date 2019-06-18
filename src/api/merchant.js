import axios from '@/libs/api.request'

// 商户列表获取

export const  getMerchantList = (params) => {
	console.log(params)
	return axios.request({
	  url: '/copyright/ktv/merchant',
	  params,
	  method: 'get'
	})
}

// 新建商户；

export const createMerchant = (data) => {
	return axios.request({
		url: "/copyright/ktv/merchant",
		data,
		method: 'post'
	})
}

// 编辑商户

export const editeMerchant = (data) => {
	var ID = data.id;
	delete data.id;
	return axios.request({
		url: `/copyright/ktv/merchant/${ID}`,
		data,
		method:'put'
	})
}

// 获取商户详情

export const getMerchantDetail = (id) => {
	return axios.request({
		url: `/copyright/ktv/merchant/${id}`,
		method: 'get'
	})
}