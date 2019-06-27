<template>
	<div class="forwardContractBox">
		<span class="content">
			<van-list v-model="loading" :finished="finished" @load="onLoad" :offset="0" finished-text="没有更多了" v-if="!empty">
				<div class="list-item">
					<van-cell v-for="item in list" :key="item.id" :title="item.package_name" :label="item.create_date">
						<div>
							<div class="rechargeFee">
								+{{item.recharge_fee}}
							</div>
							<div>
								{{item.status_des}}
							</div>
						</div>
						
					</van-cell>
				</div>
			</van-list>
			<span v-if="empty" class="empty">
				<EmptyImageComponent :text="text" img="empty" />
			</span>
		</span>
	</div>
</template>

<script>
	import { ktvRechargeRecord } from "@/api/ktv.js"
	import EmptyImageComponent from "@/components/EmptyImageComponent.vue"
	export default {
		components: {
			EmptyImageComponent
		},
		data() {
			return {
				text: "暂无充值记录",
				list:[],
				count:0,
				loading: false,
				finished: false,
				isLoading: false, //控制下拉刷新的加载动画
				page:1,
				page_size:30,
				empty:false,
			}
		},
		methods: {
			onLoad() { //下拉刷新
			    var send_data ={
					page:this.page,
					page_size:this.page_size,
					platform: 3,
					place_id: this.$route.query.ktvID,
					order: 'create_date'
				}
				ktvRechargeRecord(send_data).then(res => {
					var arr = this.list.concat(res.data.results);
					var obj = {};
					this.list = arr.reduce((cur,next) => {
							obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
							return cur;
						},[]);
					this.count = res.data.count;
					this.page++;
					this.loading = false;
					this.isLoading = false;
					if (this.list.length >= this.count) {
						this.finished = true;
					}
					if (this.count == 0) {
						this.empty = true;
					}
				})
			},
		},
		mounted() {
			document.title = "充值记录";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.forwardContractBox {
		height: 100%;
		position: relative;
		background: #fafafa;
		display: flex;
		flex-direction: column;

		.content {
			flex: 1;
			// background: yellow;
			overflow: auto;
			.rechargeFee{
				font-size:16px;
				font-weight:600;
				color:rgba(255,91,63,1);
			}

			.empty {
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
