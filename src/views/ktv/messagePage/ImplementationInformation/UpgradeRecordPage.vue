<template>
	<div class="UpgradeRecordBox">
		<span class="content" v-if="!empty">
			<van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10" finished-text="没有更多了">
				<div class="list-item">
					<van-cell v-for="item in list" :key="item.id" title="v2.3.0" value="2019-6-3 11:23:32" />
				</div>
			</van-list>
		</span>
		<span v-if="empty" class="empty">
			<EmptyImageComponent :text="text" img="empty" />
		</span>
	</div>
</template>

<script>
	import EmptyImageComponent from "@/components/EmptyImageComponent.vue" 
	import { upVodList } from "@/api/ktv.js"
	export default {
		components:{ EmptyImageComponent },
		data() {
			return {
				text: "暂无升级记录",
				list: [],
				count: 0,
				page: 1,
				page_size: 30,
				empty: false,
				loading: false, //是否处于加载状态
				finished: false, //是否已加载完所有数据
				isLoading: false, //是否处于下拉刷新状态
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onLoad() { //上拉加载
			var send_data = {
				vod_ktv: this.$route.query.ktvID
			}
			console.log(send_data)
				upVodList(send_data).then(res => {
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
			createBtn() {
				// this.$router.push({name:"merchantEdite"})
			}
		},
		mounted() {
			document.title = "升级记录";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.UpgradeRecordBox {
		height: 100%;
		position: relative;
		background: #fafafa;
		display: flex;
		flex-direction: column;

		.content {
			flex: 1;
			// background: yellow;
			overflow: auto;
		}
		.empty {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
	}
</style>
