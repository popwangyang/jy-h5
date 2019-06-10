import { getParams } from '@/libs/util'
const UserLog = require('./data/userLog');
const ParameterLog = require("./data/parameterLog")
const permissionTree = require('./data/permissionTree')
const HTUserList = require('./data/HTUserList')
const PostList = require('./data/getPostList')
export const adminRestPassword = (req) => {
  console.log(JSON.parse(req.body))
  return { code: '密码修改成功' }
}

export const getUserLog = (req) => {
  console.log(JSON.parse(req.body))
  return UserLog
}

export const getParameterLog = (req) => {
	return ParameterLog
}

export const getPermissionTree = (req) => {
	return permissionTree
}

export const getHTUserList = (req) => {
	console.log(getParams(req.url))
	return HTUserList
}

export const addPost = (req) => {
	console.log(JSON.parse(req.body))
	return {msg:'创建成功'}
}

export const putPost = (req) => {
	console.log(JSON.parse(req.body))
	return {msg:'修改成功'}
}

export const patchPost = (req) => {
	console.log(JSON.parse(req.body))
	return {msg:'修改成功'}
}

export const getPostList = (req) => {
	return PostList;
}
