import Mock from 'mockjs'

import { login, logout, getUserInfo, getIdentifyungCode, testIdentifyungCode, ConfirmToModifyTheNewPassword, refshToken } from './login'

import { getMessageList, patchMessageReaded, patchAllMessageReaded } from './user'

import { adminRestPassword, getUserLog, getParameterLog, getPermissionTree, getHTUserList, addPost, putPost, getPostList, patchPost } from './setting'

import { getOrderList } from './order'

import { getMerchantList } from './merchant'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: '1000-2000'
})

// 登录相关和获取用户信息
// Mock.mock(/\/copyright\/api-token-auth/, 'post', login)
// Mock.mock(/\/get_info/, getUserInfo)
// Mock.mock(/\/logout/, logout)
// Mock.mock(/\/copyright\/api-token-refresh/, refshToken)
// 
// Mock.mock(/\/copyright\/rbac\/msg/, 'get', getMessageList)
// Mock.mock(/\/copyright\/rbac\/msg\/id/, 'patch', patchMessageReaded)
// Mock.mock(/\/copyright\/rbac\/msg/, 'patch', patchAllMessageReaded)
// 
// Mock.mock(/\/copyright\/rbac\/verification-code/, 'get', getIdentifyungCode) // 获取验证码
// Mock.mock(/\/copyright\/rbac\/verification-code/, 'post', testIdentifyungCode) //  验证验证码
// Mock.mock(/\/copyright\/rbac\/password-reset-self/, 'put', ConfirmToModifyTheNewPassword) // 确认修改新密码
// 
// Mock.mock(/\/rbac\/password-reset-admin\/1/, 'patch', adminRestPassword) // 管理员重置密码
// Mock.mock(/\/copyright\/rbac\/user-log\?belong_table\=user/, 'get', getUserLog) // 获取用户日志
// Mock.mock(/\/copyright\/rbac\/user-log\?belong_table\=setting/, 'get', getParameterLog ) // 获取参数修改的操作日志
// Mock.mock(/\/copyright\/rbac\/group-permission-tree\/1/, 'get', getPermissionTree) // 获取岗位角色的权限树
// Mock.mock(/\/copyright\/rbac\/user/, 'get', getHTUserList) // 获取后台人员列表
// Mock.mock(/\/copyright\/rbac\/group/, 'post', addPost) //新增岗位
// Mock.mock(/\/copyright\/rbac\/group\/1/, 'put', putPost) //修改岗位（整体）
// Mock.mock(/\/copyright\/rbac\/group\/1/, 'patch', patchPost) //修改岗位(局部)
// Mock.mock(/\/copyright\/rbac\/group/, 'get', getPostList) // 获取岗位列表
// 
// Mock.mock(/\/copyright\/settlement\/order/, 'get', getOrderList) // 获取订单列表

Mock.mock(/\/getMerchantList/, 'get', getMerchantList) // 获取商户列表
export default Mock
