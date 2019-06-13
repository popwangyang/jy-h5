<template>
	<span>
	  <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" > -->
	  	<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" v-if="!empty">
	  		<ListItem v-for="item in list" :key="item"/>
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
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import ListItem from './ListItemComponent'
	export default {
		components:{ ListItem, EmptyComponent },
		props: ['data'],
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
				title:"新建商户"
			}
		},
		methods: {
			init() {
				setTimeout(() => {
				  this.list = [1,2,3,4,5,6,7,8,,9,10];
				  this.isLoading = false;
				}, 1000)
			},
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
					if (this.list.length == 0) {
						this.empty = true;
					}
				}, 2000);
			},
			onRefresh() {
				this.init(); //加载数据
			},
			createBtn(){
				this.$router.push({name:"merchantEdite"})
			}
		}
	}
</script>

<style>
</style>
