import { Base64 } from 'js-base64'
import Cookies from 'js-cookie'
import moment from 'moment'
// cookie保存的天数
import config from '@/config'
import { forEach, hasOneOf, objEqual, getObj, getItemIndeterminate, getALL, addZero } from '@/libs/tools'
import { mapAjax } from '@/api/setting'
import store from '@/store'
import mapData from '@/assets/data.json'

const { title, cookieExpires, useI18n } = config

export const TOKEN_KEY = 'token'
export const USER_KEY = 'user'

export const getUser = () => {
  const user = Cookies.get(USER_KEY)
  if (user) return JSON.parse(user)
  else return false
}

export const setUser = (data) => {
  var user = getUser()
  if (user) {
    if (JSON.stringify(data) != JSON.stringify(user)) {
      Cookies.set(USER_KEY, JSON.stringify(data), { expires: 15 })
    }
  } else {
    Cookies.set(USER_KEY, JSON.stringify(data), { expires: 15 })
  }
}

export const removeUser = () => {
  Cookies.remove(USER_KEY)
}

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }			
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item, access)) res.push(obj)
    }
  })
  return res
}

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list, route) => {
  let res = {}
  if (list.length === 2) {
    res = getHomeRoute(list)
  } else {
    const index = list.findIndex(item => routeEqual(item, route))
    if (index === list.length - 1) res = list[list.length - 2]
    else res = list[index + 1]
  }
  return res
}

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon }
  let routeMetched = route.matched
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = { ...item.meta }
    if (meta.title && typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      meta.title = meta.title(route)
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta
    }
    return obj
  })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return [{ ...homeItem, to: homeRoute.path }, ...res]
}

export const getRouteTitleHandled = (route) => {
  let router = { ...route }
  let meta = { ...route.meta }
  let title = ''
  if (meta.title) {
    if (typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      title = meta.title(router)
    } else title = meta.title
  }
  meta.title = title
  router.meta = meta
  return router
}

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  if (!title) return
  if (useI18n) {
    if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
    else if (__titleIsFunction__) title = item.meta.title
    else title = vm.$t(item.name)
  } else title = (item.meta && item.meta.title) || item.name
  return title
}

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = 'home') => {
  let i = -1
  let len = routers.length
  let homeRoute = {}
  while (++i < len) {
    let item = routers[i]
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children, homeName)
      if (res.name) return res
    } else {
      if (item.name === homeName) homeRoute = item
    }
  }
  return homeRoute
}

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const { name, path, meta } = newRoute
  let newList = [...list]
  if (newList.findIndex(item => item.name === name) >= 0) return newList
  else newList.push({ name, path, meta })
  return newList
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

/**
 * @param {Array} array 表格数据二维数组
 * @returns {Object} { columns, tableData }
 * @description 从二维数组中获取表头和表格数据，将第一行作为表头，用于在iView的表格中展示数据
 */

export const findNodeUpper = (ele, tag) => {
  if (ele.parentNode) {
    if (ele.parentNode.tagName === tag.toUpperCase()) {
      return ele.parentNode
    } else {
      return findNodeUpper(ele.parentNode, tag)
    }
  }
}

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode
  if (parentNode) {
    let classList = parentNode.classList
    if (classList && classes.every(className => classList.contains(className))) {
      return parentNode
    } else {
      return findNodeUpperByClasses(parentNode, classes)
    }
  }
}

export const findNodeDownward = (ele, tag) => {
  const tagName = tag.toUpperCase()
  if (ele.childNodes.length) {
    let i = -1
    let len = ele.childNodes.length
    while (++i < len) {
      let child = ele.childNodes[i]
      if (child.tagName === tagName) return child
      else return findNodeDownward(child, tag)
    }
  }
}

export const showByAccess = (access, canViewAccess) => {
  return hasOneOf(canViewAccess, access)
}

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let len = tagNavList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (routeEqual(tagNavList[index], routeItem)) res = true
  })
  return res
}

export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}

// scrollTop animation
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              return window.setTimeout(callback, 1000 / 60)
            }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}

// base64加密
export const baseJs = (type, name, val) => {
  switch (type) {
    case 'setItem':
      localStorage.setItem(Base64.encode(name), Base64.encode(val))
      break
    case 'getItem':
      let str = Base64.encode(name)
      if (localStorage.getItem(str)) {
        let deCode = Base64.decode(localStorage.getItem(str))
        return deCode
      } else {
        return undefined
      }
      break
    case 'removeItem':
      localStorage.removeItem(Base64.encode(name))
      break
  }
}

// 根据权限树中的is_selected 向其中添加Indeterminate属性；
export const changeTree = (data) => {
  data.map((item) => {
    if (item.children && (item.children.length > 0)) {
      changeTree(item.children)
      item.indeterminate = getItemIndeterminate(item.children)
			if(item.indeterminate){
				item.is_selected = false
			}
    }
  })
  return data
}
/**
 * 重新编排各个属性的is_selected;分为设定children和设定parent两个部分
 *
 */
export const changeTreeSelected = (data, item) => {
  function setChildren(arr, flage) {
    arr.map(item => {
      item.is_selected = flage
      if (item.children && (item.children.length > 0)) {
        setChildren(item.children, flage)
      }
    })
  }

  function isCheckAll(arr) {
    var result = arr.filter(item => {
      return item.is_selected
    })
    console.log(result, arr)
    if (result.length == arr.length) {
      return true
    } else {
      return false
    }
  }

  function setParent(data, arr) {
    getObj(data, arr[0].parent, 'id')[0].is_selected = isCheckAll(arr)
    if (getObj(data, arr[0].parent, 'id')[0].parent != null) {
      setParent(data, getObj(data, getObj(data, arr[0].parent, 'id')[0].parent, 'brother'))
    }
  }

  setChildren(getObj(data, item.id, 'id'), getObj(data, item.id, 'id')[0].is_selected)
  if (item.parent != null) {
    setParent(data, getObj(data, item.parent, 'brother'))
  }
}

/*
* 从权利树结构中取出选中的ID;
 */
export const getTreeIds = (data) => {
  var results = []
  function foo(data) {
    data.map(item => {
      if (item.is_selected) {
        results.push(item.id)
      }
      if (item.children && (item.children.length > 0)) {
        foo(item.children, flage)
      }
    })
  }
  foo(data)
  return results
}

// 请求token缓冲器；
var flage = true
export const spring = (time) => {
  var result = flage
  if (flage) {
    flage = false
    setTimeout(() => {
      flage = true
    }, time)
    return result
  }
  return false
}
/**
 * 获取周的周一到周日的日期
 */

export const getWeek = (name) => {
  const d = new Date(name)
  let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  let oneDayTime = 24 * 60 * 60 * 1000
  let now = new Date(date)
  let nowTime = now.getTime()
  let day = now.getDay()
  if (day === 0) {
    let end = moment(new Date(date)).format('YYYY-MM-DD')
    let start = moment(new Date(date) - 6 * oneDayTime).format('YYYY-MM-DD')
    console.log(start, end)
    return { start, end }
  } else {
    let oneDayTime = 24 * 60 * 60 * 1000
    let MondayTime = nowTime - (day - 1) * oneDayTime
    let SundayTime = nowTime + (7 - day) * oneDayTime
    let start = moment(new Date(MondayTime)).format('YYYY-MM-DD')
    let end = moment(new Date(SundayTime)).format('YYYY-MM-DD')
    console.log(start, end, 'ooo')
    return { start, end }
  }
}
export const dowload_XLS = (txt) => {
  // 文件名
  var now = moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
  var blob = new Blob(['\uFEFF' + txt], { type: 'text/xls;charset=gb2312;' })
  var downloadElement = document.createElement('a')
  var href = window.URL.createObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  downloadElement.download = `${now}.xls` // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}
/*
  给获取的权限组列表添加选中属性；
 */
export const addActive = (arr) => {
// 	arr.sort(function(a, b){
// 		return a.id - b.id
// 	})
  arr.map((item, index) => {
    if (index === 0) {
      item.isSelect = true
    } else {
      item.isSelect = false
    }
  })
	
  return arr
}
// 获取当前月份;
export const getMonth = (data) => {
	var results = '';	
	if(data == ""){
		var date = new Date(); 
		date.setDate(date.getDate() - 1);
		var year = date.getFullYear();
		var mount = date.getMonth() + 1;
		var day = date.getDate();
		    mount = mount > 9 ? mount : "0" + mount
				day = day > 9 ? day : '0' + day
		results = year +"-"+ mount +'-'+ day			
	}else{
		var date = data;
		var year = date.getFullYear();
		var mount = date.getMonth() + 1;
		var day = date.getDate();
		    mount = mount > 9 ? mount : "0" + mount
		results = year +"-"+ mount
	}
		return results;
}

export const getDay = (date) => {
  var results = ''
  var date = date || new Date()
  var year = date.getFullYear()
  var mount = date.getMonth() + 1
  var day = date.getDate()
	    mount = mount > 9 ? mount : '0' + mount
  day = day > 9 ? day : '0' + day
	    results = year + '-' + mount + '-' + day
		  return results
}
/*
 * 设置时间格式；
 *
 */
export const formateTime = (date) => {
  var time = new Date(date)
  var year = addZero(time.getFullYear())
  var month = addZero(time.getMonth() + 1)
  var day = addZero(time.getDate())
  var hours = addZero(time.getHours())
  var Minutes = addZero(time.getMinutes())
  var Seconds = addZero(time.getSeconds())
  var result = year + '-' + month + '-' + day + ' ' + hours + ':' + Minutes + ':' + Seconds
  return result
}

/*

 */

export const getPositionName = (code, arr) => {
  // console.log(code, arr);
  var str = ''
  if (code === '') {
    str = ''
  } else {
    arr.map((item) => {
      if (item.value === code) {
        str = item.label
      }
    })
  }
  return str
}

/*

 */

export const getAreaCode = (arr) => {
  var results = []
  arr.map(item => {
    console.log(item)
    if (item.value.length > 6) {
      results.push(item.value.substring(2))
    } else {
      results.push(item.value)
    }
  })
  return results
}

/*

 */
export const getAreaName = (codeArr, nameArr) => {
  var results = []
  for (var i = 0; i < codeArr.length; i++) {
    var obj = {
      label: nameArr[i],
      value:  codeArr[i],
      type: nameArr[i].split('\/').length > 2 ? 'county' : 'city'
    }
    results.push(obj)
    console.log(results)
  }
  return results
}

// 改变一下合同到账审批列表的数据格式;
export const changeFinanceApprovalData = (data) => {
  var results = []
	var result = 

  data.map(item => {
    var obj = {}
    obj.id = item.id
    obj.serial_number = item.ktv.serial_number
    obj.ktv_name = item.ktv.name
    obj.packageName = item.package.name
    obj.recharge_amount = isNaN(parseInt(item.package.recharge_amount * item.contract.box_count)) ? 0: item.package.recharge_amount * item.contract.box_count
		obj.box_count = item.contract.box_count
    obj.bank_user_name = item.contract.bank_user_name
    obj.bank_name = item.contract.bank_name
    obj.bank_account = item.contract.bank_account
    obj.deduction_start_time = item.contract.deduction_start_time
    obj.state = item.state
    results.push(obj)
  })
  return results
}

// 改变一下退款批列表的数据格式;
export const changeFinanceRefundlData = (data) => {
  var results = []
  data.map(item => {
    var obj = {}
    obj.id = item.id
    obj.place_contact = item.ktv.place_contact
    obj.ktv_name = item.ktv.name
    obj.refund_amount = item.apply.refund_amount
    obj.bank_user_name = item.contract.bank_user_name
    obj.bank_name = item.contract.bank_name
    obj.bank_account = item.contract.bank_account
    obj.deduction_start_time = item.contract.deduction_start_time
    obj.state = item.state
    obj.tax_number = item.contract.tax_number
    obj.refund_reason = item.refund_reason
    results.push(obj)
  })
  console.log(results)
  return results
}

// 改变一下退款批列表的数据格式;
export const changeFinanceSettlementData = (data) => {
  var results = []
  data.map(item => {
    var obj = {}
    obj.id = item.id
    obj.serial_number = item.serial_number
    obj.copyright_owner_name = item.copyright_owner.name
    obj.copyright_owner_id = item.copyright_owner.id
		obj.copyright_owner_serial_number = item.copyright_owner.serial_number
    obj.amount = item.amount
    obj.name = item.bank_account.name
    obj.bank_name = item.bank_account.bank_name
    obj.card_number = item.bank_account.card_number
    obj.create_date = item.create_date
    obj.state = item.state
    obj.tax_number = item.bank_account.tax_number
    obj.feedback = item.feedback
    results.push(obj)
  })
  console.log(results)
  return results
}

export const NoticeShow = (data, Vm) => {
	Vm.$Notice.config({
    top: 80,
    duration: 3
  })
	Vm.$Notice.info({
								title: data.title,
								name: data.id,
								render: h => {
										return h('span',{
											style: {
												cursor: 'pointer'
											},
											on: {
												click: () => {
													Vm.$Notice.close(data.id)
													if(!!data.url) {
														store.commit('setMessageReadState', data.id)
														Vm.$router.push({
															name: data.url
														})		
													}else {
														Vm.$router.push({
															name: 'message_page'
														})	
													}
													
												}
											}
										}, data.content)
								}
						});
}

export const NoTokenRefresh = (option) => {
	// console.log(option.params.NoTokenRefresh)
	if(option.params && option.params.NoTokenRefresh) {		
		return true
	}else if(option.data && option.data.NoTokenRefresh) {		
		return true
	}else {
		return false
	}
}

export const isHasNotice = (id) => {
	var hasNoticeList = JSON.parse(localStorage.getItem('hasNoticeList'));
	  if(hasNoticeList && hasNoticeList.indexOf(id) > -1) {
			return true;
		}else {
			return false;
		}
}

export const setHasNotice = (id) => {
	var hasNoticeList = JSON.parse(localStorage.getItem('hasNoticeList')) ? JSON.parse(localStorage.getItem('hasNoticeList')):[];
	    hasNoticeList.push(id);
		 localStorage.setItem('hasNoticeList', JSON.stringify(hasNoticeList))
}

export const clearNoticeList = () => {
	localStorage.removeItem('hasNoticeList')
}

export const getArrList = (data) => {
	var results = [];
	console.log(data)
	for(var i =0; i < data.length; i++) {
		var obj = {			
			id: data[i].id
		}
		// console.log(data[i].is_selected , !data[i].indeterminate)
		if(data[i].is_selected && !data[i].indeterminate) {
			obj.flag = false;
		}else {
			obj.flag = true;
		}		
		results.push(obj)
	}
	console.log(results)
	return results;
}


// 获取上周日期
export const getLastWeek = () => {
	var data = new Date();
	    data.setDate(data.getDate() - 7)
			console.log(data)
			return data
}
// 获取上个月的日期；
export const getLastMount = () => {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	if(month == 0){
		year = year - 1;
		month = 12;
	}
	month = month > 10 ? month:'0'+month;
	return year +"-"+ month +"-"+ '01';
}

//保留两位小数并且整数部分三位一个逗号分隔符的数字金钱标准表示法：
 //这里假设我们即不知道输入数字的整数位数，也不知道小数位数
/*将100000转为100,000.00形式*/
export const  dealNumber = function(money){
    if(money && money!=null){
        money = String(money);
        var left=money.split('.')[0],right=money.split('.')[1];
        right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
    }else if(money===0){   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00';
    }else{
        return "";
    }
};
/*将100,000.00转为100000形式*/
export const  undoNubmer = function(money){
    if(money && money!=null){
        money = String(money);
        var group = money.split('.');
        var left = group[0].split(',').join('');
        return Number(left+"."+group[1]);
    }else{
        return "";
    }
};

// 地理位置数据;
export const getMapData = function(code){
	var result = null
  function foo(code, data){
		if(code == null){
			result = data;
			return
		};
		data.map(item => {
			if(item.value == code){
				result = item.children
				return 
			 }else if(item.children){
				 foo(code, item.children)
			 }
			})
	}
	foo(code, mapData)
	return result;
}

// 设置时间天数;

export const setSelectDays = function(num){
	var result = [];
	for(var i = 0; i < num; i++){
		var str = i+1 + "天后";
		result.push(str);
	};
	return result;
}

// 获取几天后的日期;
export const getTime = function(num){
	var days = num || 0;
	var date = new Date();
	    date.setDate(date.getDate() + days );
	
	return getDay(date);
}

// 设置是否选中;
export const setSelected = function(arr, srr){
	for(var i = 0; i < srr.length; i++){
			var flage = false;
			for(var j = 0; j < arr.length; j++){
				 if(arr[j].id == srr[i].id){
					 flage = true;
					 break;
				 }
			}
			srr[i].isSelected = flage;
	}
}
// 组合地址;
export const setAddress = function(data){
	var result = [];
	result.push({name:data.province, code:data.province_code});
	result.push({name:data.city , code: data.city_code});
	result.push({name:data.county, code: data.county_code});
	return result;
}