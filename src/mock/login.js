import { getParams } from '@/libs/util'


const USER_MAP = require("./data/user.json")


export const login = req => {
  req = JSON.parse(req.body)


  return USER_MAP[req.username]

}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}

export const getIdentifyungCode = req => {
  return { data: '验证码已发送至邮箱，请注意查收。!!!!!' }
}

export const testIdentifyungCode = req => {
	 // req = JSON.parse(req.body)
	 console.log(req.body)
	 return {
		 data: '验证通过',
		 IdentifyungCode: req.code
	 }
}

export const ConfirmToModifyTheNewPassword = req => {
	 return {
		 data: '新密码修改成功'
	 }
}

export const refshToken = req => {
  console.log(JSON.parse(req.body))
  return {
		  token: '1111111111111111'
  }
}
