<template>
	<div class="merchantDetailBox">
		<span class="content"  v-show="!loading">
			<span class="box">
				<span class="boxItem1">
					<span class="txt">{{data.name}}</span>
					<span>
						<van-button class="button-small" size="mini" @click="goEditePage">编辑</van-button>
					</span>
				</span>
				<!-- <van-cell title="商户名称" :value="data.name"/> -->
				<van-cell title="账号" :value="data.acc == null ? '无': data.acc.username"/>
				<van-cell title="账号状态" :value="data.acc == null ? '无': data.acc.is_active ? '已启用':'已禁用'"/>
			</span>
			<span class="nav">关联场所:{{data.merchant_amount}}</span>
			<span class="merchantDetailBody">
				<van-cell :title="item.name" v-for="item in data.ktv_list" :key="item.id"/>
			</span>
		</span>
		<span class="load" v-show="loading">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
	</div>
</template>

<script>
	import { getMerchantDetail } from '@/api/merchant'
	import EmptyImageComponent from '@/components/EmptyImageComponent.vue'
	export default{
		components:{ EmptyImageComponent },
		data(){
			return{
				data:"",
				loading: false
			}
		},
		computed:{
			text(){
				return this.data == "" ?  "关联场所: 0" : "关联场所:"+this.data.ktv_list.length;
			}
		},
		methods:{
			goEditePage(){
				var data = {
					name: this.data.name,
					account: this.data.acc == null ? "" : this.data.acc.username,
					checked: this.data.acc == null ? "" : this.data.acc.is_active,
					ktvList: this.data.ktv_list,
					id: this.data.id
				}
				this.$router.push({name:"merchantEdite", query:{type:'edite', data: JSON.stringify(data)}})
			},
			getDetail(id){
				this.loading = true;
				getMerchantDetail(id).then(res => {
					this.loading = false;
					this.data = res.data;
					document.title = this.data.name;
				})
			}
		},
		mounted() {
			this.getDetail(this.$route.query.id)
		}
	}
</script>

<style scoped="scoped">
	.merchantDetailBox{
		height: 100%;
		background: #f6f6f6;
		padding: 0.26rem 0.26rem 0 0.26rem;
		box-sizing: border-box;
	}
	.box{
		display: flex;
		background: #F6F6F6;
		flex-direction: column;
	}
	.content{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.boxItem1{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background: url("../../assets/img/merchant/navImg.png") no-repeat;
		height: 1.118rem;
		background-size: cover;
		padding: 0 0.26rem;
		box-sizing: border-box;
		
	}
	.boxItem1 .txt{
		font-size:15px;
		font-weight:600;
		display: block;
		width: 6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color:rgba(255,255,255,1);
	}
	.load{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
	.boxItem1>span:nth-child(1){
		font-size: 0.46rem;
	}
	.merchantDetailBody{
		flex: 1;
		overflow: auto;
	}
</style>
<style>
	.merchantDetailBox .van-index-bar .van-index-anchor{
		font-size:12px;
		font-weight:400;
		color:rgba(153,153,153,1);
		padding-left: 0;
	}
</style>
