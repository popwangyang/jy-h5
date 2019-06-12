
import Home from '@/views/home/home.vue'


export default [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/merchantDetail',
		name: 'merchantDetail',
		component: () => import('@/views/merchant/merchantDetailPage.vue')
	},
	{
		path: '/merchantEdite',
		name: 'merchantEdite',
		component: () => import('@/views/merchant/merchantEditePage.vue')
	},
	{
		path: '/addPlace',
		name: 'addPlace',
		component: () => import('@/views/merchant/addPlacePage.vue')
	},
	{
		path: '/ktvDetail',
		name: 'ktvDetail',
		component: () => import('@/views/ktv/ktvDetailPage.vue')
	},
	{
		path: '/ktvEdite',
		name: 'ktvEdite',
		component: () => import('@/views/ktv/ktvEditePage.vue')
	},
	{
		path: '/CImessage',
		name: 'CImessage',
		component: () => import('@/views/ktv/messagePage/corporateInformation/messagePage.vue')
	},
	{
		path: '/CIedite',
		name: 'CIedite',
		component: () => import('@/views/ktv/messagePage/corporateInformation/editePage.vue')
	},
	{
		path: '/Implementation',
		name: 'Implementation',
		component: () => import('@/views/ktv/messagePage/ImplementationInformation/ImplementationPage.vue')
	},
  ]
