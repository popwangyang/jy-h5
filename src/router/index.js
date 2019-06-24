import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import { getToken, baseJs, setToken } from '@/libs/util'
import config from '@/config'

Vue.use(Router)

const { homeName } = config;
const router = new Router({
  routes
  // mode: 'history'
})

const LOGIN_PAGE_NAME = 'login'

router.beforeEach((to, from, next) => {
	const token = getToken();
	if(!token && to.name != LOGIN_PAGE_NAME){ // 未登陆想要跳到登陆页面;
		next({
			name: LOGIN_PAGE_NAME
		})
	}else if(!token && to.name == LOGIN_PAGE_NAME){ // 未登录想要跳到登陆页面;
		next();
	}else if(token && to.name == LOGIN_PAGE_NAME){ // 已登录想要跳到登陆页面;
		next({
			name: homeName
		})
	}else{
		if(!store.state.user.hasGetInfo){
			store.dispatch('getUserInfo').then((res) => {
				next();
			}).catch(err => {
				setToken('');
				baseJs('removeItem', 'user');
				store.commit('setHasGetInfo', false);
				next({
				  name: 'login'
				})
			})
		}
	}
	 next() // 跳转
})

router.afterEach(to => {
  
})

export default router