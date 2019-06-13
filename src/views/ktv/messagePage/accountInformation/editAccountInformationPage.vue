<template>
	<div class="editAccountInformationBox">
		<van-field 
		v-model="data.account" 
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
				<van-switch v-model="data.checked" size="22px"/>
			</div>
		</div>
		<span class="footer">
			<van-button 
			:loading="loading"
			loading-type="spinner"
			loading-text="加载中..."
			type="primary" 
			size="large" 
			@click="onClickBtn">{{buttonText}}</van-button>	
		</span>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				loading:false,
				inputTypeFlag:true,
				data:{
					account:"",
					password:"",
					phone:"",
					checked:true
				},
				buttonText:"",
				ToastText:""
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
				setTimeout(() => {
					this.loading = false;
					Toast.success(this.ToastText)
				}, 1000)
			}
		},
		mounted() {
			if(this.$route.query.type == "edit"){
				document.title = "编辑账号"
				this.buttonText = "保存"
				this.ToastText = "保存成功"
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
