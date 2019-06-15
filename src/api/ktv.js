import axios from '@/libs/api.request'

// ktv列表获取接口;
export const getKTVlist = (params) => {
  return axios.request({
    url: 'copyright/ktv/ktv',
    params,
    method: 'get'
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