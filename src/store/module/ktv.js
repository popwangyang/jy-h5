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
    // 账号信息余额
    balance: '',
    //  ktv签约信息
    /** 是否有有效期
      **/
    Signing: false,
    Past: false, // 往期合同是否有数据
    //  往期合同-新建按钮是否显示
    Past_btn: false,
    //  权利人类型
    owner_type: ''

  },
  mutations: {
    // ktv账号信息余额
    Setbalance (state, balance) {
      state.balance = balance
    },
    //  设置权利人类型
    SetOwnerType(state, type) {
      state.owner_type = type
    },
    //  判断签约信息显示哪个组件
    SigningState(state, Signing) {
      state.Signing = Signing
    },
    //  往期合同是否有数据
    PastSet(state, Past) {
      state.Past = Past
    },
    // 往期合同里面的新建按钮是否显示
    PastSetBtn(state, value) {
      state.Past_btn = value
    }
  }
}
