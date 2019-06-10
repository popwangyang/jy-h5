import Mock from 'mockjs'
import { doCustomTimes, getParams } from '@/libs/util'

const Random = Mock.Random
const message = require('./data/message.json')

export const getMessageList = (req) => {
  console.log(req.body, 'getMessageList')
  return message
}

export const patchMessageReaded = () => {
  return { msg: '改变成功' }
}

export const patchAllMessageReaded = () => {
  return { msg: '全部消息之为已读成功' }
}
