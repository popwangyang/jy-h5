<template>
	<span>
	  <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" > -->
	  	<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" v-if="!empty">
	  		<ListItem v-for="(item, index) in list" :key="index" :item="item"/>
	  	</van-list>
	  <!-- </van-pull-refresh> -->
	  <span v-if="empty">
	  	<EmptyComponent 
		 :text="text"
		 :title="title"
		 @eventBtn="createBtn"
		/>
	  </span>
	</span>
</template>

<script>
	import { getKTVlist } from '@/api/ktv'
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import ListItem from './ListItemComponent'
	export default {
		components:{ ListItem, EmptyComponent },
		props: ['search'],
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
				isLoading: false, //控制下拉刷新的加载动画
				totle:"",
				pageIndex:"",
				pageSize:"",
				empty:false,
				text:"暂未创建账号",
				title:"新建KTV"
			}
		},
		methods: {
			init() {
				setTimeout(() => {
				  this.list = [];
				  this.isLoading = false;
				}, 1000)
			},
			onLoad() {
				// 异步更新数据
				var send_data={
					name:this.search
				}
				getKTVlist(send_data).then((res) => {
					console.log(res);
					this.totle = res.data.count;
					this.list = this.list.concat(res.data.results)
					this.loading = false;
					if (this.list.length >= this.totle) {
						this.finished = true;
					}
					if (this.totle == 0) {
						this.empty = true;
					}
				})
			},
			onRefresh() {
				console.log("ppppp")
				this.init(); //加载数据
			},
			createBtn(){
				// this.$router.push({name:"merchantEdite"})
			}
		}
	}
</script>

<style>
</style>
