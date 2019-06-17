import axios from '@/libs/api.request'

// 【资源信息】上传凭证
export const getUplod = (params) => {
	return axios.request({
		url:"/copyright/upload/upload",
		params,
		method:'get'
	})
}

//【资源信息】单条信息获取
export const getMaterialDetail= (id) => {
	return axios.request({
		url: `/copyright/upload/material/${id}`,
		method: 'get'
	})
}

// 【资源信息】删除
export const deleteMaterial = (id) => {
	return axios.request({
		url: `/copyright/upload/material/${id}`,
		method:'delete'
	})
}

// ktv列表获取接口;
export const getKTVlist = (params) => {
  return axios.request({
    url: 'copyright/ktv/ktv',
    params,
    method: 'get'
  })
}

// ktv详情接口；
export const getKTVDetail = (id) => {
	return axios.request({
	  url: `/copyright/ktv/ktv/${id}`,
	  method: 'get'
    })
}
// KTV】基本信息创建

export const creatKtvDetail = (data) => {
	return axios.request({
		url: '/copyright/ktv/ktv',
		data,
		method: 'post'
	})
}

// ktv编辑提交接口;
export const setKtvDetail = (data) => {
	var id = data.id;
	delete data.id;
	return axios.request({
		url: `/copyright/ktv/ktv/${id}`,
		data,
		method: 'put'
	})
}

//企业信息获取
export const getKtvCorporateDetail = (id) => {
	return axios.request({
		url: `/copyright/ktv/enterprise?ktv=${id}`,
		method: 'get'
	})
}

//企业信息新增
export const addKtvCorporateDetail = (data) => {
	return axios.request({
		url: '/copyright/ktv/enterprise',
		data,
		method: 'post'
	})
}
// 企业信息修改
export const putKtvCorporateDetail = (data) => {
	var id = data.id;
	delete data.id;
	return axios.request({
		url: `/copyright/ktv/enterprise/${id}`,
		data,
		method: 'put'
	})
}

// 实施信息查询
export const getImplementDetail = (id) => {
	return axios.request({
		url:`/copyright/ktv/implement?ktv=${id}`,
		method:'get'
	})
}

// 实施信息新增
export const addImplementDetail = (data) => {
	return axios.request({
		url:`/copyright/ktv/implement`,
		data,
		method:'post'
	})
}

// 实施信息编辑
export const editeImplementDetail = (data) => {
	var id = data.id;
	delete data.id;
	return axios.request({
		url:`/copyright/ktv/implement/${id}`,
		data,
		method:'put'
	})
}

// 实施信息删除
export const deleteImplementDetail = (id) => {
	return axios.request({
		url:`/copyright/ktv/implement/${id}`,
		method:'delete'
	})
}

// 账号正式启用
export const startAccount = (id) => {
	return axios.request({
		url:`/copyright/ktv/ktv-place/{id}`,
		method:'put'
	})
}

// 【VOD】品牌列表
 export const getVodList = () => {
	 return axios.request({
		 url: "/copyright/ktv/vod-brand",
		 method: 'get'
	 })
 }
 
 // 【KTV】vod升级
 export const upVod = (data) => {
	 return axios.request({
	 	url:`/copyright/ktv/vod-upgrade`,
	 	data,
	 	method:'post'
	 })
 }
 
 //【KTV】vod升级记录
 export const upVodList = (params) => {
	 return axios.request({
	 url:`/copyright/ktv/vod-upgrade`,
	 params,
	 method:'get'
	 })
 }
 
 //KTV签约信息列表
 export const ktvContractList = (params) => {
	 return axios.request({
		 url:`/copyright/ktv/contract`,
		 params,
		 method:'get'
	 })
 }
 //【KTV】新增签约信息
 export const addKtvContract = (data) => {
	 return axios.request({
	 	url:`/copyright/ktv/contract`,
	 	data,
	 	method:'post'
	 })
 }
 //【KTV】充值套餐列表
 export const ktvRechargeList = () => {
	 return axios.request({
	 	url:`/copyright/ktv/recharge-package`,
	 	method:'get'
	 })
 }
 
 //【KTV】首次充值到账管理列表
 
 // ktv创建试用账号
 
 export const createTrialAccount = (data) => {
	 return axios.request({
		 url:`/copyright/rbac/user`,
		 data,
		 method:'post'
	 })
 }
 
 // 获取ktv账号信息；
 export const getAccountDetail = (params) => {
	 return axios.request({
		url:`/copyright/rbac/user`,
		params,
		method:'get'
	 })
 }
