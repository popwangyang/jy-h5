import { getKTVlist } from '@/api/ktv'

export default {
	state:{
		ktvList:[],
		ktvCount:0,
		searchValue:""
	},
	mutations:{
		setSearchValue(state, value){
			state.searchValue = value;
		},
		setKtvList(state, list){
			console.log(state.ktvList)
			state.ktvList = state.ktvList.concat(list)
		},
		setKtvCount(state, count){
			state.ktvCount = count
		},
		clearKtv(state){
			state.ktvList = [];
			state.ktvCount = 0;
		}
	},
	getters:{
		
	},
	actions: {
		handleGetKTVlist({ commit }, { name, page, page_size }) {
			return new Promise((resolve, reject) => {
				getKTVlist({ name, page, page_size }).then(res => {
					if(page == 1){
						commit("clearKtv");
					}
					commit('setKtvList', res.data.results);
					commit('setKtvCount', res.data.count);
					resolve(res)
				}).catch(err => {
				  reject(err)
				})
			})
		}
	}
}