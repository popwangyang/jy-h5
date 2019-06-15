<template>
	<span>
		<!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" > -->
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" v-if="!empty">
			<ListItem v-for="item in list" :key="item.id" :item="item"/>
		</van-list>
		<!-- </van-pull-refresh> -->
		<span class="empty" v-if="empty">
			<EmptyComponent :text="text" :title="title" @eventBtn="createBtn" v-if="flage" />
			<EmptyImageComponent text="暂无数据" v-else />
		</span>
	</span>
</template>

<script>
	import {
		getMerchantList
	} from '@/api/merchant'
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import EmptyImageComponent from '@/components/EmptyImageComponent.vue'
	import ListItem from './ListItemComponent'
	export default {
		components: {
			ListItem,
			EmptyComponent,
			EmptyImageComponent
		},
		props: ["searchValue"],
		data() {
			return {
				list: [],
				count: 0,
				loading: false,
				finished: false,
				isLoading: false, //控制下拉刷新的加载动画
				page: 1,
				page_size: 30,
				empty: false,
				text: "暂未创建账号",
				title: "新建商户"
			}
		},
		watch: {
			searchValue(newValue, oldValue) {
				this.init();
				this.onLoad();
			}
		},
		computed: {
			flage() {
				if (this.searchValue == "" && this.list.length == 0) {
					return true;
				} else {
					return false;
				}
			}
		},
		methods: {
			init() {
				this.list = [];
				this.count = 0;
				this.loading = false;
				this.finished = false;
				this.page = 1;
				this.page_size = 30;
				this.empty = false;
			},
			onLoad() {
				var send_data = {
					name: this.searchValue,
					page: this.page,
					page_size: this.page_size
				}
				getMerchantList(send_data).then(res => {
					var arr = this.list.concat(res.data.results);
					var obj = {};
					this.list = arr.reduce((cur, next) => {
						obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
						return cur;
					}, []);
					this.count = res.data.count;
					this.page++;
					this.loading = false;
					if (this.list.length >= this.count) {
						this.finished = true;
					}
					if (this.count == 0) {
						this.empty = true;
					}
				})
			},
			onRefresh() {
				this.init(); //加载数据
			},
			createBtn() {
				this.$router.push({
					name: "merchantEdite",
					params: {
						type:"create",
						data: {
							name: "",
							account: "",
							password: "",
							phone: "",
							checked: true,
							ktvList: []
						}
					}
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.empty {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
