/*
    @Time    : 2019/4/19 13:28
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : ktv.js
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2019 */
export default {
  // 定义状态
  state: {
    ktvData:{}

  },
  mutations: {
     setKtvDate(state, data){
			  state.ktvData = data;
		 }
  }
}
