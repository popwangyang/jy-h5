<template>
	<div class="editAccountInformationBox">
		<van-field 
		v-model="data.nickname" 
		label="昵称"
		input-align="right"
		placeholder="请输入昵称" />
		<van-field 
		v-model="data.username" 
		label="账号"
		input-align="right"
		placeholder="请输入邮箱地址" />
		<van-field 
		v-model="data.password" 
		label="初始密码"
		:type="inputType"
		input-align="right"
		:right-icon="passwordIconType"
		@click-right-icon="righIconBtn"
		placeholder="请输入" />
		<van-field 
		v-model="data.phone" 
		label="手机号"
		type="tel"
		input-align="right"
		placeholder="请输入" />
		<div class="van-cell van-field">
			<div class="van-cell__title van-field__label">是否启用</div>
			<div class="van-cell__value">
				<van-switch v-model="data.is_active" size="22px"/>
			</div>
		</div>
		<span class="footer">
			<van-button 
			:loading="loading"
			loading-type="spinner"
			loading-text="加载中..."
			class="button"
			size="large" 
			@click="onClickBtn">{{buttonText}}</van-button>	
		</span>
	</div>
</template>

<script>
	import { setTrialAccount, getAccountDetail } from "@/api/ktv.js"
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				loading:false,
				inputTypeFlag:true,
				data:{
					"nickname": "",
					"username": "",
					"password": "",
					"is_active": true,
					"group": [],
					"ktv_id": this.$route.query.ktvID
				},
				buttonText:"",
				ToastText:"",
				ktvID:""
			}
		},
		computed:{
			passwordIconType(){
				return this.inputTypeFlag ? "closed-eye":"eye-o";
			},
			inputType(){
				return this.inputTypeFlag ? "password":"text";
			}
		},
		methods:{
			righIconBtn(){
				this.inputTypeFlag = !this.inputTypeFlag;
			},
			onClickBtn(){
				this.loading = true;
				var send_data = this.data;
				    send_data.is_active = send_data.is_active ? 1:0;
					console.log(send_data)
					if(this.$route.query.type == "create"){
					  setTrialAccount(send_data).then(res => {
					  	console.log(res)
					  	this.loading = false;
					  	Toast.success("账号创建成功")
					  }).catch(err => {
					  	this.loading = false;
						if(err.data){
					  	  Toast.fail(err.data.non_field_errors[0])
						}else{
						  Toast.fail("账号创建异常");
						}
					  })	
					}else{
				      createTrialAccount(send_data).then(res => {
				      	console.log(res)
				      	this.loading = false;
				      	Toast.success("账号创建成功")
				      }).catch(err => {
				      	this.loading = false;
				      	Toast.fail("账号创建失败")
				      })
					}
			},
			getDetail(){
				var send_data = {
					code: "K",
					ktv_id: this.ktvID
				}
				Toast.loading({
				  duration: 0,       // 持续展示 toast
				  forbidClick: true, // 禁用背景点击
				  loadingType: 'circular',
				});
				getAccountDetail(send_data).then(res => {
					Toast.clear();
					this.data = res.data.results[0]
				})
			}
		},
		mounted() {
			if(this.$route.query.type == "edit"){
				document.title = "编辑账号"
				this.buttonText = "保存"
				this.ToastText = "保存成功"
				this.ktvID = this.$route.query.ktvID;
				this.getDetail();
			}else{
				document.title = "新建账号"
				this.buttonText = "新建试用账号"
				this.ToastText = "创建成功"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.editAccountInformationBox{
		height: 100%;
		background: #fafafa;
		.footer{
			display: flex;
			height: 50px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			margin-top: 1.5rem;
			background: white;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
