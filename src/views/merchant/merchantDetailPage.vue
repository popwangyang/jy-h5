<template>
	<div class="merchantDetailBox">
		<span class="content"  v-show="!loading">
			<span class="box">
				<span class="boxItem1">
					<span>{{data.name}}</span>
					<span>
						<van-button class="button-round" size="small" @click="goEditePage">编辑</van-button>
					</span>
				</span>
				<span class="boxItem2">
					<span>账号 : </span>
					<span v-if="data.acc == null"> 无 </span>
					<span v-else> {{data.acc.account}}</span>
				</span>
				<span class="boxItem2">
					<span>手机号 : </span>
					<span v-if="data.acc == null"> 暂无</span>
					<span v-else> {{data.acc.phone}}</span>
				</span>
			</span>
			<van-index-bar :index-list="[]">
				<van-index-anchor index="关联场所:3" :sticky="false"/>
				<van-cell :title="item.name" v-for="item in data.ktv_list" :key="item.id"/>
			</van-index-bar>
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
		methods:{
			goEditePage(){
				var data = {
					name: this.data.name,
					account: this.data.acc == null ? "" : this.data.acc.account,
					password: this.data.acc == null ? "" : this.data.acc.password,
					phone: this.data.acc == null ? "" : this.data.acc.phone,
					checked: this.data.acc == null ? "" : this.data.acc.status == 1 ? true : false,
					ktvList: this.data.ktv_list,
					id: this.data.id
				}
				this.$router.push({name:"merchantEdite", params:{type:'edite', data: data}})
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
	}
	.box{
		display: flex;
		background: wheat;
		padding: 0.26rem 0.3rem;
		flex-direction: column;
	}
	.boxItem1{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.load{
		height: 100%;
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.boxItem1>span:nth-child(1){
		font-size: 0.46rem;
	}
	.boxItem2{
		display: flex;
		align-items: center;
		padding: 0.16rem 0;
	}
</style>
