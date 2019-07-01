<template>
	<div class="forwardContractBox">
		<span class="content" v-if="pageState == 1">
		        <van-list
		            v-model="loading"
		            :finished="finished"
		            @load="onLoad"
		            :offset="0"
					finished-text="没有更多了"
		        >
				<div class="list-item">
					<van-cell 
					v-for="item in list" 
					:key="item.id" 
					:title="item.number" 
					:label="item.create_date"
					:value="item.state | stateFilter"
					is-link
					@click="goDetail(item)"
					/>
				</div>
		        </van-list>
		</span>
		<span class="box" v-if="pageState == 3">
			<Error
			text="数据请求异常"
			img="fail"
			/>
		</span>
		<span class="box" v-if="pageState == 2">
			<Empty
			text="暂无往期合同"
			img="empty"
			/>
		</span>
	</div>
</template>

<script>
	import Error from "@/components/EmptyImageComponent.vue"
	import { ktvContractList } from "@/api/ktv.js"
	import Empty from "@/components/EmptyImageComponent.vue"
	export default{
		components:{ Error, Empty},
		data(){
			return{
				pageState:1,
				list: [],
				count: 0,
				loading: false,
				finished: false,
				isLoading: false, //控制下拉刷新的加载动画
				page: 1,
				page_size: 30,
				empty: false,
				ktvID:""
			}
		},
		filters:{
			stateFilter: function(value) {
				var result = ""
				switch(parseInt(value)){
				  case 1:
					 result = "合同中";
					break;
				  case 2:
					 result = "已过期";
					break;
				  case 3:
					 result = "已终止";
					break;
				}
				return result;
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onLoad() {      //上拉加载
				var send_data = {
					ktv: this.ktvID,
					page: this.page,
					page_size: this.page_size
				}
				ktvContractList(send_data).then(res => {
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
						this.pageState = 2;
					}
				}).catch(err => {
					this.pageState = 3;
				})
            },
            onRefresh() {       //下拉刷新
                setTimeout(() => {
                    this.finished = false;
                    this.isLoading = false;
                    this.list = []
                    this.onLoad()
                }, 500);
            },
			createBtn(){
				// this.$router.push({name:"merchantEdite"})
			},
			goDetail(data){
			   this.$router.push({name:"contractInformation", 
			   query:{
				      type:"forwardContract", 
			          ktvID: this.$route.query.ktvID,
					  number: data.number   // 查询合同的编号
					},
				})
			}
		},
		mounted() {
			document.title = "往期合同";
			this.ktvID = this.$route.query.ktvID;
		}
	}
</script>

<style scoped="scoped" lang="less">
	.forwardContractBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		display: flex;
		flex-direction: column;
		.content{
			flex: 1;
			// background: yellow;
			overflow: auto;
		}
		.box{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
