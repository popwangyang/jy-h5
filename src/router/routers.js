
import Home from '@/views/home/home.vue'
import Search from '@/views/home/searchPage.vue'

export default [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta:{
			keepAlive: true
		}
	},
	{
		path: '/search',
		name: 'search',
		component: Search,
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
	{
		path: '/UpgradeRecord',
		name: 'UpgradeRecord',
		component: () => import('@/views/ktv/messagePage/ImplementationInformation/UpgradeRecordPage.vue')
	},
	{
		path: '/edit',
		name: 'edit',
		component: () => import('@/views/ktv/messagePage/ImplementationInformation/editPage.vue')
	},
	{
		path: '/ImplementationRecord',
		name: 'ImplementationRecord',
		component: () => import('@/views/ktv/messagePage/ImplementationInformation/ImplementationRecordPage.vue')
	},
	{
		path: '/contractInformation',
		name: 'contractInformation',
		component: () => import('@/views/ktv/messagePage/contractInformation/indexPage.vue')
	},
	{
		path: '/addContract',
		name: 'addContract',
		component: () => import('@/views/ktv/messagePage/contractInformation/addContractPage.vue')
	},
	{
		path: '/forwardContract',
		name: 'forwardContract',
		component: () => import('@/views/ktv/messagePage/contractInformation/forwardContractPage.vue')
	},
	{
		path: '/accountInformation',
		name: 'accountInformation',
		component: () => import('@/views/ktv/messagePage/accountInformation/accountInformationPage.vue')
	},
	{
		path: '/enableAccont',
		name: 'enableAccont',
		component: () => import('@/views/ktv/messagePage/accountInformation/enableAccontPage.vue')
	},
	{
		path: '/editAccountInformation',
		name: 'editAccountInformation',
		component: () => import('@/views/ktv/messagePage/accountInformation/editAccountInformationPage.vue')
	},
	{
		path: '/offLineRecharge',
		name: 'offLineRecharge',
		component: () => import('@/views/ktv/messagePage/offLineRecharge/offLineRechargePage.vue')
	},
	{
		path: '/refillFeedback',
		name: 'refillFeedback',
		component: () => import('@/views/ktv/messagePage/offLineRecharge/refillFeedbackPage.vue')
	},
	{
		path: '/xieyi',
		name: 'xieyi',
		component: () => import('@/views/ktv/messagePage/offLineRecharge/xieyiPage.vue')
	},
	{
		path: '/RechargeRecord',
		name: 'RechargeRecord',
		component: () => import('@/views/ktv/messagePage/offLineRecharge/RechargeRecordPage.vue')
	},
  ]
