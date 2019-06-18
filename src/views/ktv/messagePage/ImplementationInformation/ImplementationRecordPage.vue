<template>
	<div class="ImplementationRecordBox">
		<span class="content" v-if="!empty">
			<van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10" finished-text="没有更多了">
				<div class="list-item">
					<!-- <van-cell v-for="item in list" :key="item.id" :title="item.brand" :label="item.create_date" /> -->
					<span v-for="item in list" :key="item.id" class="item">
						<span class="item-list1">
							<span class="span1">
								<span>{{item.brand}}</span>
								<span>{{item.vod_version}}</span>
							</span>
							<span class="span2">
								<span>{{item.implement_box_count}}</span>
								<span>包厢数</span>
							</span>
						</span>
						<span class="item-list2">
							<span class="span1">
								<span>vod场所ID:</span>
								<span>{{item.vod_ktv_id}}</span>
							</span>
							<span class="span2">
								<span>实施时间：</span>
								<span>{{item.update_date}}</span>
							</span>
						</span>
					</span>
				</div>
			</van-list>
		</span>
		<span v-if="empty"  class="empty">
			<EmptyImageComponent :text="text" img="empty" />
		</span>
	</div>
</template>

<script>
	import EmptyImageComponent from "@/components/EmptyImageComponent.vue" 
	import { getImplementDetail } from "@/api/ktv.js"
	export default {
		components:{ EmptyImageComponent },
		data() {
			return {
				text: "暂无实施记录",
				list: [],
				count: 0,
				page: 1,
				page_size: 30,
				empty: false,
				loading: false, //是否处于加载状态
				finished: false, //是否已加载完所有数据
			}
		},
		methods: {
			onLoad() { //上拉加载
			getImplementDetail(this.$route.query.ktvID).then(res => {
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
			document.title = "实施记录";
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ImplementationRecordBox {
		height: 100%;
		position: relative;
		background: #fafafa;
		display: flex;
		flex-direction: column;
		.content {
			flex: 1;
			overflow: auto;
			.item{
				background: white;
				margin-bottom: 0.26rem;
				padding: 0.26rem;
				display: block;
				&>span{
					display: flex;
					
				}
				& span:nth-child(1){
				   border-bottom: 1px soli #F6F6F6;
				}
				.item-list1{
					border-bottom: 1px solid #F6F6F6;
					&>span{
						display: flex;
						flex-direction: column;
						align-content: center;
						justify-content: center;
					}
					.span1{
						width: 30%;
						&>span:nth-child(1){
							font-size:14px;
							font-weight:400;
							color:rgba(68,68,68,1);
							line-height:0.572;
						}
						&>span:nth-child(2){
							font-size:12px;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:0.78rem;
						}
					}
					.span2{
						align-items: flex-end;
						width: 70%;
						&>span:nth-child(1){
							font-size:16px;
							font-weight:600;
							color:rgba(51,51,51,1);
							line-height:0.572;
						}
						&>span:nth-child(2){
							font-size:12px;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:0.78rem;
						}
					}
				}
				.item-list2{
					font-size:10px;
					font-weight:400;
					color:rgba(153,153,153,1);
					line-height:0.78rem;
					&>span{
						display: flex;
					}
					.span1{
						width: 40%;
					}
					.span2{
						width: 60%;
						justify-content: flex-end;
					}
				}
			}
		}
		.empty {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
	}
</style>
