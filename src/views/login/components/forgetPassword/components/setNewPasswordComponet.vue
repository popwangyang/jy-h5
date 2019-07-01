<template>
	<div class="setNewBox">
		<h2>新密码</h2>
		<div class="item">
				<h4>新密码</h4>
				<div>
					<van-field
						v-model="fromData.password1"
						left
						placeholder="请输入新密码"
					  />
				</div>
		</div>
		<div class="item">
				<h4>确认密码</h4>
				<div>
					<van-field
						v-model="fromData.password2"
						left
						placeholder="请再次输入密码"
					  />
				</div>
		</div>
		<div class="footer">
			<van-button class="button"  size="large" @click="handleFrom" :loading='loading'>完成</van-button>
		</div>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { Toast } from "vant"
	import { checkForm } from '@/libs/util.js'
	import { ConfirmToModifyTheNewPassword } from '@/api/user.js'
	export default{
		props:[ 'username', 'code' ],
		data(){
			const validatePassword1 = (value, callback) => {
				var myrey = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
				if(value == ''){
					callback(new Error("密码不能为空"))
				}else if(!myrey.test(value)){
					callback(new Error("请输入6~20位数字和字母组合"))
				}else{
					callback();
				}
			}
			const validatePassword2 = (value, callback, data) => {
				if(value == ''){
					callback(new Error("请再次输入密码"))
				}else if(value != data.password1){
					callback(new Error("两次输入密码不一致"))
				}else{
					callback();
				}
			}
			return{
				loading:false,
				fromData: {
				   password1: '',
				   password2: '',
				},
				rule:{
					password1: { required: true, validator: validatePassword1 },
					password2: { required: true, validator: validatePassword2 }
				}
			}
		},
		methods:{
			handleFrom(){
				if(!checkForm(this.fromData, this.rule)) {
					return;
				}
				const password = this.fromData.password1;
				const username = this.username;
				const code = this.code;
				this.loading = true;
			 ConfirmToModifyTheNewPassword({ username, code, password }).then(res => {
				 this.loading = false;
				 Toast.success('密码修改成功')
				 this.$emit('event2')
			 }).catch(err => {
				 this.loading = false;
				 Toast.fail(err.data.message);
			 })
			}
		}
	
	}
</script>

<style scoped="scoped" lang="less">
	.setNewBox{
		display: block;
		height: 100%;
		width: 100%;
		background: #ffffff;
		padding: 0.676rem 0.26rem;
		box-sizing: border-box;
		.item{
			&> div{
				border-bottom: 1px solid #C6CBD4;
				margin-bottom: 0.3rem;
				.code{
					font-size:12px;
					font-weight:500;
					color:rgba(75,116,255,1);
				}
			}
			.loading{
				width: 100%;
				height: 0.6rem;
				display: flex;
				align-items: center;
			}
		}
		.footer{
			margin-top: 1rem;
			display: block;
		}
	}
	h2, h4{
		margin: 0;
		padding: 0;
	}
	h2{
		font-size:20px;
		font-weight:500;
		color: #020202;
		margin-bottom: 0.52rem;
	}
	h4{
		font-size:12px;
		font-weight:400;
		color:rgba(108,114,124,1);
		margin-bottom: 0.26rem;
	}
</style>
