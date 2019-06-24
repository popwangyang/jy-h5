import axios from '@/libs/api.request'
// 传参设置说明，请求方法为get，用params, 其他方式都用data；

console.log(axios)
export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password: password,
    terminal_type: 'jingyi'
  }
  return axios.request({
    url: '/copyright/api-token-auth/',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  console.log('getUserInfo', axios)
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

// 根据邮箱获取验证码
export const getIdentifyungCode = (email) => {
	var params = {
      username: email,
			terminal_type: 'jingyi'
    }
  return axios.request({
    url: 'copyright/rbac/verification-code',
    method: 'get',
    params
  })
}

// 验证验证码
export const testIdentifyungCode = ({ username, code }) => {
  console.log(username, code)
  return axios.request({
    url: 'copyright/rbac/verification-code',
    method: 'post',
    data: {
      username: username,
      code: code
    }
  })
}

// 确认修改新密码；
export const ConfirmToModifyTheNewPassword = ({ username, code, password }) => {
  return axios.request({
    url: 'copyright/rbac/password-reset-self',
    method: 'put',
    data: {
      username: username,
      code: code,
      password: password
    }
  })
}
// 【密码】用户修改密码（通过原密码）
export const ConfirmOrigin = (data) => {
  var id = data.id
  delete data.id
  return axios.request({
    url: `copyright/rbac/password/${id}`,
    data,
    method: 'patch'
  })
}

// 获取消息列表；
export const getMessageList = (params) => {
  return axios.request({
    url: 'copyright/rbac/msg',
    params,
    method: 'get'
  })
}
// 将未读消息置为已读；
export const patchMessageReaded = (id) => {
  return axios.request({
    url: `copyright/rbac/msg/${id}`,
    data: {
      state: '1'
    },
    method: 'patch'
  })
}
// 一键将消息置为已读
export const patchAllMessageReaded = () => {
  return axios.request({
    url: `copyright/rbac/msg`,
    data: {
      all_read: true
    },
    method: 'patch'
  })
}
