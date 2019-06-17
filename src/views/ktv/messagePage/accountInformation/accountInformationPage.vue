<template>
	<div class="accountInformationBox">
		<div class="box1" v-if="statePage == 1">
			<span class="line"></span>
			<Item1
			 label="昵称"
			 :value="data.nickname"
			/>
			<Item1
			 label="登录账号"
			 :value="data.email"
			/>
			<Item1
			 label="余额"
			 :value="data.balance"
			/>
			<Item1
			 label="创建日期"
			 :value="data.create_date"
			/>
			<span class="line"></span>
			<Item1
			 label="状态"
			 v-if="data.phone != null"
			 :value="data.phone"
			/>
			<Item1
			 label="状态"
			 :value="data.is_active"
			/>
			<Item1
			 label="性质"
			 :value="account_status"
			/>
			<span class="footer">
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="stopAccontBtn" v-if="data.is_active == '已启用'">禁用账号</van-button>	
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="startAccontBtn" v-if="data.is_active == '已禁用'">启用账号</van-button>	
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="enableAccontBtn" v-if="data.account_status == 1">正式启用</van-button>
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="editBtn">编辑</van-button>
			</span>
		</div>
		<div class="box2" v-if="statePage == 2">
			<EmptyComponent 
			 :text="text"
			 :title="title"
			 @eventBtn="createBtn"
			/>
		</div>
		<div class="box2" v-if="statePage == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</div>
		<div class="box2" v-if="statePage == 3">
			<Error
			text="数据请求异常"
			img="fail"
			/>
		</div>
	</div>
</template>

<script>
	import { getAccountMessage, stopAccount } from '@/api/ktv.js'
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import Error from '@/components/EmptyImageComponent.vue'
	import Item1 from '@/components/list1.vue'
	import { Dialog, Toast } from 'vant';
	export default{
		components:{ Item1, EmptyComponent, Error },
		data(){
			return{
				statePage:0,
				text:"暂未创建账号",
				title:"新建试用账号",
				ktvID:"",
				data:"",
				account_status:""
			}
		},
		methods:{
			stopAccontBtn(){
				var _this = this;
				Dialog.confirm({
				  title: '禁用账号',
				  message: '禁用账号后，将无法登录，确定禁用吗？'
				}).then(() => {
				   var send_data = {
					   id: _this.data.id,
					   is_active: 0,
					   area_code_list: _this.data.area_code_list
				   }
				   Toast.loading({
					   duration: 0,       // 持续展示 toast
					   forbidClick: true, // 禁用背景点击
					   loadingType: 'circular',
				   })
				   stopAccount(send_data).then(res => {
					   Toast.clear();
					   Toast.success('账号已禁用');
					   this.data.is_active = '已禁用';
				   }).catch(() => {
					   Toast.fail('操作失败');
				});
				})
			},
			startAccontBtn(){
				var _this = this;
				Dialog.confirm({
				  title: '启用账号',
				  message: '启用账号后，将可以登录，确定启用吗？'
				}).then(() => {
				   var send_data = {
					   id: _this.data.id,
					   is_active: 1,
					   area_code_list: _this.data.area_code_list
				   }
				   Toast.loading({
					   duration: 0,       // 持续展示 toast
					   forbidClick: true, // 禁用背景点击
					   loadingType: 'circular',
				   })
				   stopAccount(send_data).then(res => {
					   Toast.clear();
					   Toast.success('账号已启用');
					   this.data.is_active = '已启用';
				   }).catch(() => {
					   Toast.fail('操作失败');
				});
			  })
			},
			enableAccontBtn(){
				this.$router.push({name:"enableAccont", query:{ktvID: this.$route.query.ktvID}})
			},
			editBtn(){
				this.$router.push({name:"editAccountInformation", query:{type:"edit", ktvID: this.$route.query.ktvID}})
			},
			createBtn(){
			    this.$router.push({name:"editAccountInformation", query:{type:"create", ktvID: this.$route.query.ktvID}})
			},
			getData(){
				var send_data = {
					code: "K",
					ktv_id: this.ktvID
				}
				this.statePage = 0;
				getAccountMessage(send_data).then(res => {
					console.log(res)
					if(res.length > 0){
						this.statePage = 1;
						this.data = res[0];
						this.data.is_active = this.data.is_active? "已启用":"已禁用";
						this.data.balance = this.data.balance+"元";
						this.account_status = this.data.account_status == 1 ? "试用账号":"正式账号"
					}else{
						this.statePage = 2;
					}
				}).catch(err => {
					this.statePage = 3;
				})
			}
		},
		mounted() {
			document.title = "账号信息";
			this.ktvID = this.$route.query.ktvID;
			this.getData();
		}
	}
</script>

<style scoped="scoped" lang="less">
	.accountInformationBox{
		height: 100%;
		background: #fafafa;
		.box1{
			height: 100%;
			position: relative;
			.line{
				display: block;
				height: 0.26rem;
				background: #fafafa;
			}
			.footer{
				display: flex;
				height: 50px;
				padding: 0.16rem 0.39rem;
				width: 100%;
				position: absolute;
				bottom: 0;
				left: 0;
				background: white;
				box-sizing: border-box;
				justify-content: flex-end;
				align-items: center;
			}
		}
		.box2{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
	}
	
</style>
