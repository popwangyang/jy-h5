import {
  login,
  logout,
  getUserInfo,
  getMessageList,
  patchMessageReaded,
  patchAllMessageReaded
} from '@/api/user'
import { setToken, getToken, baseJs, changeTree, clearNoticeList } from '@/libs/util'

export default {
  state: {
	userName: '',
	userId: '',
	avatorImgPath: '',
	token:'',
	access: '',
	setPermissionTree:'',
	hasGetInfo: false,
	unreadCount: 0,
	messageAllCount:0,
	messageList:[],
	messageUnreadList:[],
	isLogout:false,
	PermissionChange: {
		flag: false,
		id: ''
	},
	permissionList:[]
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
	setPermissionTree (state, setPermissionTree) {
		state.setPermissionTree = setPermissionTree
	},
    setToken (state, token) {
      state.token = token
			setToken(token)
    },
    setHasGetInfo (state, status) {
        state.hasGetInfo = status
    },
    setMessageCount (state, count) {
        state.unreadCount = count
    },
	setMessageAllCount (state, count) {
		state.messageAllCount = count;
	},
	setMessageList (state, list) {
		state.messageList = list
	},
	setMessageUnreadList (state, list) {
		state.messageUnreadList = list
	},
	setMessageReadState (state, id) {
		state.messageList.map((item) => {				
		if(id && item.id == id){
				if(item.state == 0){
					item.state = 1;
					state.unreadCount = --state.unreadCount;
				}
			}
		})
	},
	setAllMessageReadState (state) {
		state.messageList.map(item => {
			item.state = 1;
		})
		state.unreadCount = 0;
	},
	updataLoginState (state, flag) {
		state.isLogout = flag
	},
	PermissionChange (state, data) {
		state.PermissionChange.flag = data.flag
		state.PermissionChange.id = data.id
	},
	permissionTreeArr (state, data) {
		state.permissionList = data.arr;
	}
  },
  getters: {
   
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { userName, password }) {
			console.log(userName, password)
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
            const data = res.data
				  data.permission_tree = changeTree(data.permission_tree)										  
			baseJs('setItem', 'permission_list', JSON.stringify(data.permission_list));
			baseJs('setItem', 'permission_tree', JSON.stringify(data.permission_tree));
			baseJs('setItem', 'user', JSON.stringify(data.user));	
			// commit('setAvator', data.avator)
			commit('setUserName', data.user.username)
			commit('setUserId', data.user.id)
			commit('setAccess', data.permission_list)
			commit('setPermissionTree', data.permission_tree)
			commit('setHasGetInfo', true)
			commit('setToken', data.token)		
            resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {      
			baseJs('removeItem', 'permission_list');
			baseJs('removeItem', 'permission_tree');
			baseJs('removeItem', 'user');						
			commit('setToken', '')
			commit('setAccess', [])
			commit('setMessageCount', 0)
			commit('setMessageList', [])
			commit('setMessageAllCount', 0)
			commit('updataLoginState', true) //改变一下登录状态，主要是为了自动登录用 
			clearNoticeList()  //清除hasNoticList列表
		    resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
			
      return new Promise((resolve, reject) => {
			let user = JSON.parse(baseJs('getItem', 'user'));	
			let token = baseJs('getItem', 'token')
			let permission_tree = JSON.parse(baseJs('getItem', 'permission_tree'))
			let permission_list = JSON.parse(baseJs('getItem', 'permission_list'))
			
            commit('setUserName', user.username)
            commit('setUserId', user.id)
            commit('setAccess', permission_list)
			commit('setPermissionTree', permission_tree)
            commit('setHasGetInfo', true)						
            resolve(permission_list)
      }).catch(err => {
				reject(err)
			})
    },
    // 获取通知消息列表
	getMessageList ({ commit }, params) {
		return new Promise((resolve, reject) => {
			getMessageList(params).then((res) => {
				if(res.data.results.length > 0){
					const { unread_count } = res.data.results[0]
					commit('setMessageCount', unread_count)											
				}				
				commit('setMessageList', res.data.results)						
				commit('setMessageAllCount', res.data.count)				
				resolve(res.data.results)
			})
		}).catch(err => {
			reject(err)
		})
	},
	// 获取未读消息列表
	getUnreadMessageList ({ commit }, params) {
		return new Promise((resolve, reject) => {
		  getMessageList(params).then(res => {
			  commit('setMessageUnreadList', res.data.results)
			  commit('setMessageCount', res.data.count)
		  })
		})
	},
	// 将消息之为已读；
	patchMessageReaded ({ commit, state }, meg_id) {
		return new Promise((resolve, reject) => {
			patchMessageReaded(meg_id).then((res) => {
					commit('setMessageReadState', meg_id);
			})
		})
	 },
	// 一键将所有消息之为已读；
	patchAllMessageReaded ({ commit, state }) {
		return new Promise((resolve, reject) => {
			patchAllMessageReaded().then( (res) => {
				commit('setAllMessageReadState')
				resolve(res)
			})
		}).catch(err => {
			reject(err)
		})
	 }
  }
}
