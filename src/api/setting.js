import axios from '@/libs/api.request'
import mapData from '@/assets/data.json'

// 管理员重置用户密码
export const adminResetPsaaword = ({ id, password }) => {
    let data = {
        password: password
    }
    /* eslint indent:0 */
    return axios.request({
        url: `copyright/rbac/password-reset-admin/${id}`,
        data,
        method: 'patch'
    })
}

// 后台用户管理操作日志;
export const getUserLog = (params) => {
    console.log(params)
    return axios.request({
        url: 'copyright/rbac/user-log?belong_table=user',
        params,
        method: 'get'
    })
}
// 参数修改操作日志；
export const getParameterLog = (params) => {
    return axios.request({
        url: 'copyright/rbac/user-log?belong_table=setting',
        params,
        method: 'get'
    })
}
// VOD修改操作日志
export const getVODLog = (params) => {
	
	return axios.request({
		url: 'copyright/ktv/log',
		params,
		method: 'get'
	})
}
// 获取岗位角色的权限树；
export const getPermissionTree = (id) => {
    return axios.request({
    url: `copyright/rbac/group-permission-tree/${id}`,
    method: 'get'
    })
}
// 获取后台人员列表;
export const getHTUserList = (params) => {
    return axios.request({
    url: 'copyright/rbac/user',
    params,
    method: 'get'
    })
}
// 新增岗位;
export const addPost = (data) => {
    return axios.request({
    url: 'copyright/rbac/group',
    data,
    method: 'post'
    })
}
// 修改岗位(全面)；
export const putPost = (data) => {
    var id = data.id
    delete data.id
    return axios.request({
    url: `copyright/rbac/group/${id}`,
    data,
    method: 'put'
    })
}
// 修改岗位(局部)；
export const patchPost = (data) => {
    var id = data.id
    delete data.id
    return axios.request({
    url: `copyright/rbac/group/${id}`,
    data,
    method: 'patch'
    })
}
// 获取岗位列表;
export const getPostList = (params) => {
    console.log(params)
    return axios.request({
    url: 'copyright/rbac/group',
    params,
    method: 'get'
    })
}

// 请求省 , 市， 县 地区 的列表;
export const mapAjax = (params) => {
    return axios.request({
    url: '/cperm/area',
    params,
    method: 'get'
    })
}

// 【用户】创建-后台管理;
export const createUser = (data) => {
    return axios.request({
    url: '/copyright/rbac/user',
    data,
    method: 'post'
    })
}

// 【用户】更新-后台管理;
export const updateUser = (data) => {
    var id = data.id
    delete data.id
    return axios.request({
    url: `/copyright/rbac/user/${id}`,
    data,
    method: 'patch'
    })
}
// 【参数设置】账户余额提醒阈值获取
export const paramsMoneyGet = () => {
    return axios.request({
    url: '/copyright/rbac/balance-threshold',
    method: 'get'
    })
}
// 【参数设置】账户余额提醒;
export const paramsMoneySet = (data) => {
    return axios.request({
    url: '/copyright/rbac/balance-threshold',
    data,
    method: 'patch'
    })
}

// 【参数设置】有效播放计次规则获取
export const paramsTimeGet = () => {
    return axios.request({
    url: '/copyright/rbac/valid-play-duration',
    method: 'get'
    })
}
// 【参数设置】有效播放计次规则

export const paramsTimeSet = (data) => {
    return axios.request({
    url: '/copyright/rbac/valid-play-duration',
    data,
    method: 'patch'
    })
}

// 【VOD】品牌列表

export const getVodList = (params) => {
    return axios.request({
    url: 'copyright/ktv/vod-brand',
    params,
    method: 'get'
    })
}

// 【VOD】品牌管理新增

export const addVod = (data) => {
    return axios.request({
    url: 'copyright/ktv/vod-brand',
    data,
    method: 'post'
    })
}

// 【VOD】品牌修改

export const putVod = (data) => {
    var id = data.id
    delete data.id
    return axios.request({
    url: `copyright/ktv/vod-brand/${id}`,
    data,
    method: 'put'
    })
}
