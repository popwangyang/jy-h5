import axios from '@/libs/api.request'

// 单曲目点播详情
export const SongDataDetail = (params) => {
	return axios.request({
		url: 'analytics/search/songs',
		params,
		method: 'get'
	})
}

// 歌曲点播数据统计；
export const SongData = (params) => {
	return axios.request({
		url: '/analytics/search/song_daypart',
		params,
		method: 'get'
	})
}

// 场所点播每周数据查询;
export const getPlaceWeek = (params) => {
	return axios.request({
		url: '/analytics/search/ktv_daypart',
		params,
		method: 'get'
	})
} 

// 场所每日数据
export const getPlaceDay = (params) => {
	return axios.request({
		url: '/analytics/search/ktv_daily',
		params,
		method: 'get'
	})
} 

// 场所每日包厢数据
export const getPlaceRoom = (params) => {
	return axios.request({
		url: '/analytics/search/ktv_room_daily',
		params,
		method: 'get'
	})
}

//【权利人结算数据】权利人数据获取
export const getSettlementData = (params) => {
	return axios.request({
		url: '/copyright/settlement/right-income',
		params,
		method: 'get'
	})
}
//【权利人】获取-<权利人个人>结算信息
export const getRightPersonDetail = (id) => {
	return axios.request({
		url: `copyright/right_people/copyright-owners/${id}/copyright_settlement`,
		method: 'get'
	})
}

// 获取权利人的冻结记录列表
export const getDJList = (params) => {
	return axios.request({
		url: '/copyright/right_people/copyright_settlements/logs',
		params,
		method: 'get'
	})
}
//场所账单数据
export const getPlaceBillList = (params) => {
	return axios.request({
		url: `copyright/settlement/place-expense`,
		params,
		method: 'get'
	})
}
//获取场所详情;
export const getKtvDetail = (id) => {
	return axios.request({
		url: `copyright/ktv/ktv/${id}`,
		method: 'get'
	})
}